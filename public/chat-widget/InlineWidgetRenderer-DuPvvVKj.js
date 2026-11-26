import { d as T, h as _e, T as La, u as e, w as at, t as I, D as ve, S as rt, A as le, f as Pa, g as ma, I as Ma, E as ha, G as Xt, J as St, K as ba, L as Tt, N as ga, O as ja, W as ya, Q as vt, R as Fa, V as Ua, F as Zt, X as $a, Y as xt, Z as Yt, _ as wt, e as it, $ as Ba, c as Wa, a0 as Ha, a1 as Ga, a2 as Fe, a3 as Jt, a4 as Va, a5 as qa, a6 as Xa, a7 as Za, a8 as Ya } from "./widget-B2QHRn9Y.js";
const Kt = (t, a) => new Intl.DateTimeFormat("bs", { weekday: "short", day: "numeric", month: "numeric", timeZone: a }).format(new Date(t)), Qt = (t, a) => new Intl.DateTimeFormat("en-CA", { timeZone: a }).format(new Date(t)), ea = (t, a) => new Intl.DateTimeFormat("bs", { hour: "2-digit", minute: "2-digit", timeZone: a }).format(new Date(t));
function Ja({ config: t, widgetId: a, companyId: i, apiUrl: r, preview: n }) {
  const o = String(t.title || "Zakažite termin"), [s, d] = T(n ? "ready" : "loading"), [m, p] = T(null), [u, c] = T(null), [b, y] = T(null), [k, V] = T(""), [h, w] = T(""), [_, S] = T(null), P = `${(r || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, "")}/api/widget/${encodeURIComponent(i || "")}/v2/inline-widgets/${a}/calendar`, L = async () => {
    var v, E;
    d("loading");
    try {
      const W = await at(i || "", r), te = await fetch(`${P}/slots`, { headers: { Accept: "application/json", Authorization: `Bearer ${W}` }, cache: "no-store" }), K = await te.json();
      if (!te.ok || K.status === "unavailable") return d("unavailable");
      if (K.status !== "ok" || !((E = (v = K.data) == null ? void 0 : v.slots) != null && E.length)) return d("empty");
      p(K.data), c(Qt(K.data.slots[0], K.data.timezone)), y(null), d("ready");
    } catch {
      d("unavailable");
    }
  };
  _e(() => {
    !n && i ? L() : n || d("unavailable");
  }, [a, i, n]);
  const de = La(() => {
    const v = /* @__PURE__ */ new Map();
    if (m) for (const E of m.slots) {
      const W = Qt(E, m.timezone);
      v.set(W, [...v.get(W) || [], E]);
    }
    return v;
  }, [m]), De = async () => {
    if (!(!b || !m || s === "booking")) {
      d("booking");
      try {
        const v = await at(i || "", r), E = await fetch(`${P}/book`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json", Authorization: `Bearer ${v}` },
          body: JSON.stringify({ start: b, name: k.trim(), email: h.trim() })
        });
        if (E.status === 409)
          return await L(), d("taken");
        if (!E.ok) return d("error");
        const W = await E.json();
        S(String(W.start || b)), d("done");
      } catch {
        d("error");
      }
    }
  }, ee = (v) => /* @__PURE__ */ e("div", { className: "pitaj-inline-widget-card pitaj-booking-card", children: [
    /* @__PURE__ */ e("div", { className: "pitaj-booking-header", children: /* @__PURE__ */ e("div", { className: "pitaj-booking-info", children: /* @__PURE__ */ e("div", { className: "pitaj-booking-title", children: o }) }) }),
    v
  ] });
  if (n) return ee(/* @__PURE__ */ e("div", { className: "pitaj-booking-desc", children: "Posjetilac ovdje bira dan i termin iz vašeg Cal.com kalendara, upiše ime i email, i termin se zakazuje." }));
  if (s === "loading") return ee(/* @__PURE__ */ e("div", { role: "status", className: "pitaj-booking-desc", children: "Učitavam slobodne termine…" }));
  if (s === "unavailable") return ee(/* @__PURE__ */ e("div", { role: "status", className: "pitaj-booking-desc", children: "Zakazivanje trenutno nije dostupno." }));
  if (s === "empty") return ee(/* @__PURE__ */ e("div", { role: "status", className: "pitaj-booking-desc", children: "Trenutno nema slobodnih termina." }));
  if (s === "done" && m && _)
    return ee(/* @__PURE__ */ e("div", { role: "status", className: "pitaj-booking-desc", children: [
      "Termin je zakazan: ",
      Kt(_, m.timezone),
      " u ",
      ea(_, m.timezone),
      ". Potvrda stiže na ",
      h.trim(),
      "."
    ] }));
  if (!m) return ee(/* @__PURE__ */ e("div", { role: "status", className: "pitaj-booking-desc", children: "Zakazivanje trenutno nije dostupno." }));
  const be = !!b && k.trim().length >= 2 && /^\S+@\S+\.\S+$/.test(h.trim());
  return ee(
    /* @__PURE__ */ e("div", { className: "pitaj-cal-picker", children: [
      s === "taken" && /* @__PURE__ */ e("div", { role: "alert", className: "pitaj-booking-desc", children: "Termin je upravo zauzet. Odaberite drugi." }),
      s === "error" && /* @__PURE__ */ e("div", { role: "alert", className: "pitaj-booking-desc", children: "Zakazivanje nije uspjelo. Pokušajte ponovo." }),
      /* @__PURE__ */ e("div", { className: "pitaj-cal-days", role: "tablist", "aria-label": "Dani", children: [...de.keys()].map((v) => /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          role: "tab",
          "aria-selected": u === v,
          className: `pitaj-cal-chip${u === v ? " is-active" : ""}`,
          onClick: () => {
            c(v), y(null);
          },
          children: Kt(de.get(v)[0], m.timezone)
        },
        v
      )) }),
      /* @__PURE__ */ e("div", { className: "pitaj-cal-times", role: "listbox", "aria-label": "Termini", children: (u ? de.get(u) || [] : []).map((v) => /* @__PURE__ */ e("button", { type: "button", role: "option", "aria-selected": b === v, className: `pitaj-cal-chip${b === v ? " is-active" : ""}`, onClick: () => y(v), children: ea(v, m.timezone) }, v)) }),
      /* @__PURE__ */ e("div", { className: "pitaj-booking-desc", children: [
        "Vremenska zona: ",
        m.timezone
      ] }),
      b && /* @__PURE__ */ e("form", { className: "pitaj-cal-form", onSubmit: (v) => {
        v.preventDefault(), De();
      }, children: [
        /* @__PURE__ */ e("input", { "aria-label": "Ime i prezime", placeholder: "Ime i prezime", value: k, maxLength: 100, onInput: (v) => V(v.target.value), autoComplete: "name" }),
        /* @__PURE__ */ e("input", { "aria-label": "Email", type: "email", placeholder: "Email", value: h, maxLength: 190, onInput: (v) => w(v.target.value), autoComplete: "email" }),
        /* @__PURE__ */ e("button", { type: "submit", className: "pitaj-widget-btn-primary", disabled: !be || s === "booking", children: s === "booking" ? "Zakazujem…" : "Zakaži termin" })
      ] })
    ] })
  );
}
/*! @license DOMPurify 3.2.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.6/LICENSE */
const {
  entries: va,
  setPrototypeOf: ta,
  isFrozen: Ka,
  getPrototypeOf: Qa,
  getOwnPropertyDescriptor: ei
} = Object;
let {
  freeze: Y,
  seal: ie,
  create: xa
} = Object, {
  apply: kt,
  construct: Nt
} = typeof Reflect < "u" && Reflect;
Y || (Y = function(a) {
  return a;
});
ie || (ie = function(a) {
  return a;
});
kt || (kt = function(a, i, r) {
  return a.apply(i, r);
});
Nt || (Nt = function(a, i) {
  return new a(...i);
});
const Ke = J(Array.prototype.forEach), ti = J(Array.prototype.lastIndexOf), aa = J(Array.prototype.pop), Ue = J(Array.prototype.push), ai = J(Array.prototype.splice), tt = J(String.prototype.toLowerCase), mt = J(String.prototype.toString), ia = J(String.prototype.match), $e = J(String.prototype.replace), ii = J(String.prototype.indexOf), ri = J(String.prototype.trim), oe = J(Object.prototype.hasOwnProperty), Z = J(RegExp.prototype.test), Be = ni(TypeError);
function J(t) {
  return function(a) {
    a instanceof RegExp && (a.lastIndex = 0);
    for (var i = arguments.length, r = new Array(i > 1 ? i - 1 : 0), n = 1; n < i; n++)
      r[n - 1] = arguments[n];
    return kt(t, a, r);
  };
}
function ni(t) {
  return function() {
    for (var a = arguments.length, i = new Array(a), r = 0; r < a; r++)
      i[r] = arguments[r];
    return Nt(t, i);
  };
}
function x(t, a) {
  let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : tt;
  ta && ta(t, null);
  let r = a.length;
  for (; r--; ) {
    let n = a[r];
    if (typeof n == "string") {
      const o = i(n);
      o !== n && (Ka(a) || (a[r] = o), n = o);
    }
    t[n] = !0;
  }
  return t;
}
function oi(t) {
  for (let a = 0; a < t.length; a++)
    oe(t, a) || (t[a] = null);
  return t;
}
function me(t) {
  const a = xa(null);
  for (const [i, r] of va(t))
    oe(t, i) && (Array.isArray(r) ? a[i] = oi(r) : r && typeof r == "object" && r.constructor === Object ? a[i] = me(r) : a[i] = r);
  return a;
}
function We(t, a) {
  for (; t !== null; ) {
    const r = ei(t, a);
    if (r) {
      if (r.get)
        return J(r.get);
      if (typeof r.value == "function")
        return J(r.value);
    }
    t = Qa(t);
  }
  function i() {
    return null;
  }
  return i;
}
const ra = Y(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ht = Y(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), bt = Y(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), li = Y(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), gt = Y(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), si = Y(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), na = Y(["#text"]), oa = Y(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), jt = Y(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), la = Y(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Qe = Y(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), ci = ie(/\{\{[\w\W]*|[\w\W]*\}\}/gm), di = ie(/<%[\w\W]*|[\w\W]*%>/gm), pi = ie(/\$\{[\w\W]*/gm), ui = ie(/^data-[\-\w.\u00B7-\uFFFF]+$/), fi = ie(/^aria-[\-\w]+$/), wa = ie(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), mi = ie(/^(?:\w+script|data):/i), hi = ie(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), ka = ie(/^html$/i), bi = ie(/^[a-z][.\w]*(-[.\w]+)+$/i);
var sa = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: fi,
  ATTR_WHITESPACE: hi,
  CUSTOM_ELEMENT: bi,
  DATA_ATTR: ui,
  DOCTYPE_NAME: ka,
  ERB_EXPR: di,
  IS_ALLOWED_URI: wa,
  IS_SCRIPT_OR_DATA: mi,
  MUSTACHE_EXPR: ci,
  TMPLIT_EXPR: pi
});
const He = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, gi = function() {
  return typeof window > "u" ? null : window;
}, ji = function(a, i) {
  if (typeof a != "object" || typeof a.createPolicy != "function")
    return null;
  let r = null;
  const n = "data-tt-policy-suffix";
  i && i.hasAttribute(n) && (r = i.getAttribute(n));
  const o = "dompurify" + (r ? "#" + r : "");
  try {
    return a.createPolicy(o, {
      createHTML(s) {
        return s;
      },
      createScriptURL(s) {
        return s;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + o + " could not be created."), null;
  }
}, ca = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
function Na() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : gi();
  const a = (j) => Na(j);
  if (a.version = "3.2.6", a.removed = [], !t || !t.document || t.document.nodeType !== He.document || !t.Element)
    return a.isSupported = !1, a;
  let {
    document: i
  } = t;
  const r = i, n = r.currentScript, {
    DocumentFragment: o,
    HTMLTemplateElement: s,
    Node: d,
    Element: m,
    NodeFilter: p,
    NamedNodeMap: u = t.NamedNodeMap || t.MozNamedAttrMap,
    HTMLFormElement: c,
    DOMParser: b,
    trustedTypes: y
  } = t, k = m.prototype, V = We(k, "cloneNode"), h = We(k, "remove"), w = We(k, "nextSibling"), _ = We(k, "childNodes"), S = We(k, "parentNode");
  if (typeof s == "function") {
    const j = i.createElement("template");
    j.content && j.content.ownerDocument && (i = j.content.ownerDocument);
  }
  let N, P = "";
  const {
    implementation: L,
    createNodeIterator: de,
    createDocumentFragment: De,
    getElementsByTagName: ee
  } = i, {
    importNode: be
  } = r;
  let v = ca();
  a.isSupported = typeof va == "function" && typeof S == "function" && L && L.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: E,
    ERB_EXPR: W,
    TMPLIT_EXPR: te,
    DATA_ATTR: K,
    ARIA_ATTR: ot,
    IS_SCRIPT_OR_DATA: Ve,
    ATTR_WHITESPACE: xe,
    CUSTOM_ELEMENT: we
  } = sa;
  let {
    IS_ALLOWED_URI: Se
  } = sa, M = null;
  const Te = x({}, [...ra, ...ht, ...bt, ...gt, ...na]);
  let F = null;
  const ke = x({}, [...oa, ...jt, ...la, ...Qe]);
  let z = Object.seal(xa(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), se = null, ge = null, C = !0, je = !0, Ae = !1, qe = !0, H = !1, R = !0, A = !1, ae = !1, $ = !1, ye = !1, Ee = !1, Ne = !1, Ct = !0, zt = !1;
  const Aa = "user-content-";
  let lt = !0, Le = !1, Ce = {}, ze = null;
  const It = x({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Rt = null;
  const Ot = x({}, ["audio", "video", "img", "source", "image", "track"]);
  let st = null;
  const Dt = x({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Xe = "http://www.w3.org/1998/Math/MathML", Ze = "http://www.w3.org/2000/svg", pe = "http://www.w3.org/1999/xhtml";
  let Ie = pe, ct = !1, dt = null;
  const Ea = x({}, [Xe, Ze, pe], mt);
  let Ye = x({}, ["mi", "mo", "mn", "ms", "mtext"]), Je = x({}, ["annotation-xml"]);
  const Ca = x({}, ["title", "style", "font", "a", "script"]);
  let Pe = null;
  const za = ["application/xhtml+xml", "text/html"], Ia = "text/html";
  let G = null, Re = null;
  const Ra = i.createElement("form"), Lt = function(l) {
    return l instanceof RegExp || l instanceof Function;
  }, pt = function() {
    let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Re && Re === l)) {
      if ((!l || typeof l != "object") && (l = {}), l = me(l), Pe = // eslint-disable-next-line unicorn/prefer-includes
      za.indexOf(l.PARSER_MEDIA_TYPE) === -1 ? Ia : l.PARSER_MEDIA_TYPE, G = Pe === "application/xhtml+xml" ? mt : tt, M = oe(l, "ALLOWED_TAGS") ? x({}, l.ALLOWED_TAGS, G) : Te, F = oe(l, "ALLOWED_ATTR") ? x({}, l.ALLOWED_ATTR, G) : ke, dt = oe(l, "ALLOWED_NAMESPACES") ? x({}, l.ALLOWED_NAMESPACES, mt) : Ea, st = oe(l, "ADD_URI_SAFE_ATTR") ? x(me(Dt), l.ADD_URI_SAFE_ATTR, G) : Dt, Rt = oe(l, "ADD_DATA_URI_TAGS") ? x(me(Ot), l.ADD_DATA_URI_TAGS, G) : Ot, ze = oe(l, "FORBID_CONTENTS") ? x({}, l.FORBID_CONTENTS, G) : It, se = oe(l, "FORBID_TAGS") ? x({}, l.FORBID_TAGS, G) : me({}), ge = oe(l, "FORBID_ATTR") ? x({}, l.FORBID_ATTR, G) : me({}), Ce = oe(l, "USE_PROFILES") ? l.USE_PROFILES : !1, C = l.ALLOW_ARIA_ATTR !== !1, je = l.ALLOW_DATA_ATTR !== !1, Ae = l.ALLOW_UNKNOWN_PROTOCOLS || !1, qe = l.ALLOW_SELF_CLOSE_IN_ATTR !== !1, H = l.SAFE_FOR_TEMPLATES || !1, R = l.SAFE_FOR_XML !== !1, A = l.WHOLE_DOCUMENT || !1, ye = l.RETURN_DOM || !1, Ee = l.RETURN_DOM_FRAGMENT || !1, Ne = l.RETURN_TRUSTED_TYPE || !1, $ = l.FORCE_BODY || !1, Ct = l.SANITIZE_DOM !== !1, zt = l.SANITIZE_NAMED_PROPS || !1, lt = l.KEEP_CONTENT !== !1, Le = l.IN_PLACE || !1, Se = l.ALLOWED_URI_REGEXP || wa, Ie = l.NAMESPACE || pe, Ye = l.MATHML_TEXT_INTEGRATION_POINTS || Ye, Je = l.HTML_INTEGRATION_POINTS || Je, z = l.CUSTOM_ELEMENT_HANDLING || {}, l.CUSTOM_ELEMENT_HANDLING && Lt(l.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (z.tagNameCheck = l.CUSTOM_ELEMENT_HANDLING.tagNameCheck), l.CUSTOM_ELEMENT_HANDLING && Lt(l.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (z.attributeNameCheck = l.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), l.CUSTOM_ELEMENT_HANDLING && typeof l.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (z.allowCustomizedBuiltInElements = l.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), H && (je = !1), Ee && (ye = !0), Ce && (M = x({}, na), F = [], Ce.html === !0 && (x(M, ra), x(F, oa)), Ce.svg === !0 && (x(M, ht), x(F, jt), x(F, Qe)), Ce.svgFilters === !0 && (x(M, bt), x(F, jt), x(F, Qe)), Ce.mathMl === !0 && (x(M, gt), x(F, la), x(F, Qe))), l.ADD_TAGS && (M === Te && (M = me(M)), x(M, l.ADD_TAGS, G)), l.ADD_ATTR && (F === ke && (F = me(F)), x(F, l.ADD_ATTR, G)), l.ADD_URI_SAFE_ATTR && x(st, l.ADD_URI_SAFE_ATTR, G), l.FORBID_CONTENTS && (ze === It && (ze = me(ze)), x(ze, l.FORBID_CONTENTS, G)), lt && (M["#text"] = !0), A && x(M, ["html", "head", "body"]), M.table && (x(M, ["tbody"]), delete se.tbody), l.TRUSTED_TYPES_POLICY) {
        if (typeof l.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Be('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof l.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Be('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        N = l.TRUSTED_TYPES_POLICY, P = N.createHTML("");
      } else
        N === void 0 && (N = ji(y, n)), N !== null && typeof P == "string" && (P = N.createHTML(""));
      Y && Y(l), Re = l;
    }
  }, Pt = x({}, [...ht, ...bt, ...li]), Mt = x({}, [...gt, ...si]), Oa = function(l) {
    let f = S(l);
    (!f || !f.tagName) && (f = {
      namespaceURI: Ie,
      tagName: "template"
    });
    const g = tt(l.tagName), O = tt(f.tagName);
    return dt[l.namespaceURI] ? l.namespaceURI === Ze ? f.namespaceURI === pe ? g === "svg" : f.namespaceURI === Xe ? g === "svg" && (O === "annotation-xml" || Ye[O]) : !!Pt[g] : l.namespaceURI === Xe ? f.namespaceURI === pe ? g === "math" : f.namespaceURI === Ze ? g === "math" && Je[O] : !!Mt[g] : l.namespaceURI === pe ? f.namespaceURI === Ze && !Je[O] || f.namespaceURI === Xe && !Ye[O] ? !1 : !Mt[g] && (Ca[g] || !Pt[g]) : !!(Pe === "application/xhtml+xml" && dt[l.namespaceURI]) : !1;
  }, ce = function(l) {
    Ue(a.removed, {
      element: l
    });
    try {
      S(l).removeChild(l);
    } catch {
      h(l);
    }
  }, Oe = function(l, f) {
    try {
      Ue(a.removed, {
        attribute: f.getAttributeNode(l),
        from: f
      });
    } catch {
      Ue(a.removed, {
        attribute: null,
        from: f
      });
    }
    if (f.removeAttribute(l), l === "is")
      if (ye || Ee)
        try {
          ce(f);
        } catch {
        }
      else
        try {
          f.setAttribute(l, "");
        } catch {
        }
  }, Ft = function(l) {
    let f = null, g = null;
    if ($)
      l = "<remove></remove>" + l;
    else {
      const B = ia(l, /^[\r\n\t ]+/);
      g = B && B[0];
    }
    Pe === "application/xhtml+xml" && Ie === pe && (l = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + l + "</body></html>");
    const O = N ? N.createHTML(l) : l;
    if (Ie === pe)
      try {
        f = new b().parseFromString(O, Pe);
      } catch {
      }
    if (!f || !f.documentElement) {
      f = L.createDocument(Ie, "template", null);
      try {
        f.documentElement.innerHTML = ct ? P : O;
      } catch {
      }
    }
    const q = f.body || f.documentElement;
    return l && g && q.insertBefore(i.createTextNode(g), q.childNodes[0] || null), Ie === pe ? ee.call(f, A ? "html" : "body")[0] : A ? f.documentElement : q;
  }, Ut = function(l) {
    return de.call(
      l.ownerDocument || l,
      l,
      // eslint-disable-next-line no-bitwise
      p.SHOW_ELEMENT | p.SHOW_COMMENT | p.SHOW_TEXT | p.SHOW_PROCESSING_INSTRUCTION | p.SHOW_CDATA_SECTION,
      null
    );
  }, ut = function(l) {
    return l instanceof c && (typeof l.nodeName != "string" || typeof l.textContent != "string" || typeof l.removeChild != "function" || !(l.attributes instanceof u) || typeof l.removeAttribute != "function" || typeof l.setAttribute != "function" || typeof l.namespaceURI != "string" || typeof l.insertBefore != "function" || typeof l.hasChildNodes != "function");
  }, $t = function(l) {
    return typeof d == "function" && l instanceof d;
  };
  function ue(j, l, f) {
    Ke(j, (g) => {
      g.call(a, l, f, Re);
    });
  }
  const Bt = function(l) {
    let f = null;
    if (ue(v.beforeSanitizeElements, l, null), ut(l))
      return ce(l), !0;
    const g = G(l.nodeName);
    if (ue(v.uponSanitizeElement, l, {
      tagName: g,
      allowedTags: M
    }), R && l.hasChildNodes() && !$t(l.firstElementChild) && Z(/<[/\w!]/g, l.innerHTML) && Z(/<[/\w!]/g, l.textContent) || l.nodeType === He.progressingInstruction || R && l.nodeType === He.comment && Z(/<[/\w]/g, l.data))
      return ce(l), !0;
    if (!M[g] || se[g]) {
      if (!se[g] && Ht(g) && (z.tagNameCheck instanceof RegExp && Z(z.tagNameCheck, g) || z.tagNameCheck instanceof Function && z.tagNameCheck(g)))
        return !1;
      if (lt && !ze[g]) {
        const O = S(l) || l.parentNode, q = _(l) || l.childNodes;
        if (q && O) {
          const B = q.length;
          for (let Q = B - 1; Q >= 0; --Q) {
            const fe = V(q[Q], !0);
            fe.__removalCount = (l.__removalCount || 0) + 1, O.insertBefore(fe, w(l));
          }
        }
      }
      return ce(l), !0;
    }
    return l instanceof m && !Oa(l) || (g === "noscript" || g === "noembed" || g === "noframes") && Z(/<\/no(script|embed|frames)/i, l.innerHTML) ? (ce(l), !0) : (H && l.nodeType === He.text && (f = l.textContent, Ke([E, W, te], (O) => {
      f = $e(f, O, " ");
    }), l.textContent !== f && (Ue(a.removed, {
      element: l.cloneNode()
    }), l.textContent = f)), ue(v.afterSanitizeElements, l, null), !1);
  }, Wt = function(l, f, g) {
    if (Ct && (f === "id" || f === "name") && (g in i || g in Ra))
      return !1;
    if (!(je && !ge[f] && Z(K, f))) {
      if (!(C && Z(ot, f))) {
        if (!F[f] || ge[f]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Ht(l) && (z.tagNameCheck instanceof RegExp && Z(z.tagNameCheck, l) || z.tagNameCheck instanceof Function && z.tagNameCheck(l)) && (z.attributeNameCheck instanceof RegExp && Z(z.attributeNameCheck, f) || z.attributeNameCheck instanceof Function && z.attributeNameCheck(f)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            f === "is" && z.allowCustomizedBuiltInElements && (z.tagNameCheck instanceof RegExp && Z(z.tagNameCheck, g) || z.tagNameCheck instanceof Function && z.tagNameCheck(g)))
          ) return !1;
        } else if (!st[f]) {
          if (!Z(Se, $e(g, xe, ""))) {
            if (!((f === "src" || f === "xlink:href" || f === "href") && l !== "script" && ii(g, "data:") === 0 && Rt[l])) {
              if (!(Ae && !Z(Ve, $e(g, xe, "")))) {
                if (g)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Ht = function(l) {
    return l !== "annotation-xml" && ia(l, we);
  }, Gt = function(l) {
    ue(v.beforeSanitizeAttributes, l, null);
    const {
      attributes: f
    } = l;
    if (!f || ut(l))
      return;
    const g = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: F,
      forceKeepAttr: void 0
    };
    let O = f.length;
    for (; O--; ) {
      const q = f[O], {
        name: B,
        namespaceURI: Q,
        value: fe
      } = q, Me = G(B), ft = fe;
      let X = B === "value" ? ft : ri(ft);
      if (g.attrName = Me, g.attrValue = X, g.keepAttr = !0, g.forceKeepAttr = void 0, ue(v.uponSanitizeAttribute, l, g), X = g.attrValue, zt && (Me === "id" || Me === "name") && (Oe(B, l), X = Aa + X), R && Z(/((--!?|])>)|<\/(style|title)/i, X)) {
        Oe(B, l);
        continue;
      }
      if (g.forceKeepAttr)
        continue;
      if (!g.keepAttr) {
        Oe(B, l);
        continue;
      }
      if (!qe && Z(/\/>/i, X)) {
        Oe(B, l);
        continue;
      }
      H && Ke([E, W, te], (qt) => {
        X = $e(X, qt, " ");
      });
      const Vt = G(l.nodeName);
      if (!Wt(Vt, Me, X)) {
        Oe(B, l);
        continue;
      }
      if (N && typeof y == "object" && typeof y.getAttributeType == "function" && !Q)
        switch (y.getAttributeType(Vt, Me)) {
          case "TrustedHTML": {
            X = N.createHTML(X);
            break;
          }
          case "TrustedScriptURL": {
            X = N.createScriptURL(X);
            break;
          }
        }
      if (X !== ft)
        try {
          Q ? l.setAttributeNS(Q, B, X) : l.setAttribute(B, X), ut(l) ? ce(l) : aa(a.removed);
        } catch {
          Oe(B, l);
        }
    }
    ue(v.afterSanitizeAttributes, l, null);
  }, Da = function j(l) {
    let f = null;
    const g = Ut(l);
    for (ue(v.beforeSanitizeShadowDOM, l, null); f = g.nextNode(); )
      ue(v.uponSanitizeShadowNode, f, null), Bt(f), Gt(f), f.content instanceof o && j(f.content);
    ue(v.afterSanitizeShadowDOM, l, null);
  };
  return a.sanitize = function(j) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, f = null, g = null, O = null, q = null;
    if (ct = !j, ct && (j = "<!-->"), typeof j != "string" && !$t(j))
      if (typeof j.toString == "function") {
        if (j = j.toString(), typeof j != "string")
          throw Be("dirty is not a string, aborting");
      } else
        throw Be("toString is not a function");
    if (!a.isSupported)
      return j;
    if (ae || pt(l), a.removed = [], typeof j == "string" && (Le = !1), Le) {
      if (j.nodeName) {
        const fe = G(j.nodeName);
        if (!M[fe] || se[fe])
          throw Be("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (j instanceof d)
      f = Ft("<!---->"), g = f.ownerDocument.importNode(j, !0), g.nodeType === He.element && g.nodeName === "BODY" || g.nodeName === "HTML" ? f = g : f.appendChild(g);
    else {
      if (!ye && !H && !A && // eslint-disable-next-line unicorn/prefer-includes
      j.indexOf("<") === -1)
        return N && Ne ? N.createHTML(j) : j;
      if (f = Ft(j), !f)
        return ye ? null : Ne ? P : "";
    }
    f && $ && ce(f.firstChild);
    const B = Ut(Le ? j : f);
    for (; O = B.nextNode(); )
      Bt(O), Gt(O), O.content instanceof o && Da(O.content);
    if (Le)
      return j;
    if (ye) {
      if (Ee)
        for (q = De.call(f.ownerDocument); f.firstChild; )
          q.appendChild(f.firstChild);
      else
        q = f;
      return (F.shadowroot || F.shadowrootmode) && (q = be.call(r, q, !0)), q;
    }
    let Q = A ? f.outerHTML : f.innerHTML;
    return A && M["!doctype"] && f.ownerDocument && f.ownerDocument.doctype && f.ownerDocument.doctype.name && Z(ka, f.ownerDocument.doctype.name) && (Q = "<!DOCTYPE " + f.ownerDocument.doctype.name + `>
` + Q), H && Ke([E, W, te], (fe) => {
      Q = $e(Q, fe, " ");
    }), N && Ne ? N.createHTML(Q) : Q;
  }, a.setConfig = function() {
    let j = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    pt(j), ae = !0;
  }, a.clearConfig = function() {
    Re = null, ae = !1;
  }, a.isValidAttribute = function(j, l, f) {
    Re || pt({});
    const g = G(j), O = G(l);
    return Wt(g, O, f);
  }, a.addHook = function(j, l) {
    typeof l == "function" && Ue(v[j], l);
  }, a.removeHook = function(j, l) {
    if (l !== void 0) {
      const f = ti(v[j], l);
      return f === -1 ? void 0 : ai(v[j], f, 1)[0];
    }
    return aa(v[j]);
  }, a.removeHooks = function(j) {
    v[j] = [];
  }, a.removeAllHooks = function() {
    v = ca();
  }, a;
}
var _a = Na();
let da = !1;
function yi() {
  da || (da = !0, _a.addHook("afterSanitizeAttributes", (t) => {
    t.tagName === "A" && t.getAttribute("target") && t.setAttribute("rel", "noopener noreferrer");
  }));
}
function vi(t) {
  return t ? (yi(), _a.sanitize(t, {
    USE_PROFILES: { html: !0 },
    ADD_ATTR: ["target", "data-chat-action"],
    FORBID_TAGS: ["style", "iframe", "object", "embed", "form", "base", "meta", "link"],
    FORBID_ATTR: ["formaction"]
  })) : "";
}
function xi(t) {
  try {
    const a = new URL(String(t ?? "").trim());
    return a.protocol === "https:" || a.protocol === "http:" ? a.toString() : null;
  } catch {
    return null;
  }
}
const wi = 10, ki = 1440 * 60 * 1e3;
function Ni(t, a = Date.now()) {
  var s;
  const i = (s = t == null ? void 0 : t.data) == null ? void 0 : s.catalog_synced_at, r = typeof i == "string" ? Date.parse(i) : NaN;
  if (!Number.isFinite(r) || a - r < ki) return null;
  const n = new Date(r), o = (d) => String(d).padStart(2, "0");
  return `${o(n.getDate())}.${o(n.getMonth() + 1)}.${n.getFullYear()}`;
}
function re(t) {
  if (typeof t != "string") return null;
  try {
    const a = new URL(t.trim());
    return a.protocol === "https:" || a.protocol === "http:" ? a.toString() : null;
  } catch {
    return null;
  }
}
function ne(t) {
  if (typeof t != "string" && typeof t != "number") return null;
  const a = String(t).trim();
  return a === "" ? null : a;
}
function _i(t) {
  var i, r, n, o, s, d, m, p, u, c, b, y, k;
  const a = ((i = t.data) == null ? void 0 : i.products) || ((r = t.data) == null ? void 0 : r.items) || t.products || t.items;
  return Array.isArray(a) ? a : (n = t.data) != null && n.title || (o = t.data) != null && o.name || t.name ? [{
    id: (s = t.data) == null ? void 0 : s.id,
    name: ((d = t.data) == null ? void 0 : d.title) || ((m = t.data) == null ? void 0 : m.name) || t.name,
    subtitle: ((p = t.data) == null ? void 0 : p.subtitle) || t.subtitle,
    price: ((u = t.data) == null ? void 0 : u.price) || t.price,
    image: ((c = t.data) == null ? void 0 : c.image) || ((b = t.data) == null ? void 0 : b.image_url) || t.image,
    addToCartUrl: ((y = t.data) == null ? void 0 : y.addToCartUrl) || ((k = t.data) == null ? void 0 : k.add_to_cart_url) || t.addToCartUrl
  }] : [];
}
function Sa(t, a = wi) {
  const i = [];
  return _i(t).forEach((r, n) => {
    if (!r || typeof r != "object") return;
    const o = ne(r.name) || ne(r.title) || ne(r.productName);
    if (!o) return;
    const s = re(r.image) || re(r.image_url) || re(r.imageUrl) || re(r.featured_image) || (Array.isArray(r.images) ? re(r.images[0]) : null), d = Number(r.discountPercent);
    i.push({
      id: ne(r.id) || String(n),
      name: o,
      subtitle: ne(r.subtitle),
      price: ne(r.price),
      priceFrom: r.priceFrom === !0,
      compareAtPrice: ne(r.compareAtPrice),
      discountPercent: Number.isFinite(d) && d > 0 && d < 100 ? Math.round(d) : null,
      priceNote: ne(r.priceNote),
      stockStatus: ne(r.stockStatus),
      availability: ne(r.availability),
      image: s,
      url: re(r.url) || re(r.productUrl) || re(r.product_url) || re(r.addToCartUrl) || re(r.add_to_cart_url),
      buyUrl: re(r.buyUrl),
      ctaLabel: ne(r.buttonLabel)
    });
  }), i.slice(0, a);
}
function Ta(t) {
  return !!(t.buyUrl && t.buyUrl !== t.url);
}
const Si = { table: 30, card: 1, compare: 3 };
function Ti(t) {
  var i;
  const a = t.layout || ((i = t.data) == null ? void 0 : i.layout);
  return a === "card" || a === "compare" ? a : "table";
}
function yt({ item: t, language: a }) {
  return t.price ? /* @__PURE__ */ e("span", { className: "pitaj-cv-price", children: [
    t.priceFrom ? `${I("productsFrom", a)} ` : "",
    t.price,
    t.compareAtPrice && /* @__PURE__ */ e("s", { className: "pitaj-pc-compare", children: t.compareAtPrice }),
    t.discountPercent && /* @__PURE__ */ e("span", { className: "pitaj-pc-discount", children: [
      "-",
      t.discountPercent,
      "%"
    ] })
  ] }) : null;
}
function pa({ item: t }) {
  return t.stockStatus ? /* @__PURE__ */ e("span", { className: `pitaj-pc-stock ${t.availability === "out_of_stock" ? "is-out" : t.availability === "in_stock" ? "is-in" : ""}`, children: t.stockStatus }) : null;
}
function ua({ item: t, language: a, onClick: i }) {
  return /* @__PURE__ */ e(rt, { children: [
    t.url && /* @__PURE__ */ e("a", { className: "pitaj-pc-cta", href: t.url, target: "_blank", rel: "noopener noreferrer", onClick: () => i("view"), children: t.ctaLabel || I("productsView", a) }),
    Ta(t) && /* @__PURE__ */ e("a", { className: "pitaj-pc-buy", href: t.buyUrl, target: "_blank", rel: "noopener noreferrer", onClick: () => i("buy"), children: I("productsBuy", a) })
  ] });
}
function Ai({ config: t, onProductEvent: a, language: i }) {
  var p;
  const r = Ti(t), n = Sa(t, Si[r]), o = I(r === "card" ? "catalogViewCard" : r === "compare" ? "catalogViewCompare" : "catalogViewTable", i), s = typeof t.title == "string" && t.title || typeof ((p = t.data) == null ? void 0 : p.title) == "string" && t.data.title || o;
  if (n.length === 0 || r === "compare" && n.length < 2)
    return /* @__PURE__ */ e("div", { role: "status", className: "pitaj-inline-widget-card", children: I("catalogNoData", i) });
  const d = (u, c) => (b) => a == null ? void 0 : a("product_clicked", { productId: u.id, name: u.name, position: c + 1, kind: b, url: b === "buy" ? u.buyUrl : u.url }), m = /* @__PURE__ */ e("div", { className: "pitaj-widget-bar", children: [
    /* @__PURE__ */ e("span", { className: "pitaj-widget-badge-icon", children: /* @__PURE__ */ e(ve, { size: 14 }) }),
    /* @__PURE__ */ e("span", { className: "pitaj-widget-bar-title", children: s })
  ] });
  if (r === "card") {
    const u = n[0];
    return /* @__PURE__ */ e("div", { className: "pitaj-inline-widget-card pitaj-cv", role: "region", "aria-label": s, children: [
      m,
      /* @__PURE__ */ e("div", { className: "pitaj-cv-card", children: [
        u.image && /* @__PURE__ */ e("img", { className: "pitaj-cv-card-image", src: u.image, alt: u.name, loading: "lazy", referrerPolicy: "no-referrer" }),
        /* @__PURE__ */ e("div", { className: "pitaj-pc-body", children: [
          /* @__PURE__ */ e("h4", { className: "pitaj-pc-name", children: u.name }),
          u.subtitle && /* @__PURE__ */ e("p", { className: "pitaj-pc-sub", children: u.subtitle }),
          /* @__PURE__ */ e(yt, { item: u, language: i }),
          /* @__PURE__ */ e(pa, { item: u }),
          /* @__PURE__ */ e("div", { className: "pitaj-pc-actions", children: /* @__PURE__ */ e(ua, { item: u, language: i, onClick: d(u, 0) }) })
        ] })
      ] })
    ] });
  }
  if (r === "compare") {
    const u = [
      [I("catalogPrice", i), (c) => /* @__PURE__ */ e(yt, { item: c, language: i })],
      [I("catalogAvailability", i), (c) => c.stockStatus]
    ];
    return n.some((c) => c.subtitle) && u.push(["", (c) => c.subtitle]), /* @__PURE__ */ e("div", { className: "pitaj-inline-widget-card pitaj-cv", role: "region", "aria-label": s, children: [
      m,
      /* @__PURE__ */ e("div", { className: "pitaj-cv-scroll", children: /* @__PURE__ */ e("table", { className: "pitaj-cv-table", children: [
        /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { children: [
          /* @__PURE__ */ e("th", { scope: "col" }),
          n.map((c) => /* @__PURE__ */ e("th", { scope: "col", children: c.name }, c.id))
        ] }) }),
        /* @__PURE__ */ e("tbody", { children: [
          u.map(([c, b]) => /* @__PURE__ */ e("tr", { children: [
            /* @__PURE__ */ e("th", { scope: "row", children: c }),
            n.map((y) => /* @__PURE__ */ e("td", { children: b(y) || "—" }, y.id))
          ] }, c || "extra")),
          /* @__PURE__ */ e("tr", { children: [
            /* @__PURE__ */ e("th", { scope: "row" }),
            n.map((c, b) => /* @__PURE__ */ e("td", { children: /* @__PURE__ */ e(ua, { item: c, language: i, onClick: d(c, b) }) }, c.id))
          ] })
        ] })
      ] }) })
    ] });
  }
  return /* @__PURE__ */ e("div", { className: "pitaj-inline-widget-card pitaj-cv", role: "region", "aria-label": s, children: [
    m,
    /* @__PURE__ */ e("div", { className: "pitaj-cv-scroll", children: /* @__PURE__ */ e("table", { className: "pitaj-cv-table pitaj-cv-list", children: [
      /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { children: [
        /* @__PURE__ */ e("th", { scope: "col", children: I("productsTitle", i) }),
        /* @__PURE__ */ e("th", { scope: "col", children: I("catalogPrice", i) })
      ] }) }),
      /* @__PURE__ */ e("tbody", { children: n.map((u, c) => /* @__PURE__ */ e("tr", { children: [
        /* @__PURE__ */ e("td", { children: [
          u.url ? /* @__PURE__ */ e("a", { href: u.url, target: "_blank", rel: "noopener noreferrer", onClick: () => d(u, c)("view"), children: u.name }) : u.name,
          u.stockStatus && /* @__PURE__ */ e(pa, { item: u })
        ] }),
        /* @__PURE__ */ e("td", { children: /* @__PURE__ */ e(yt, { item: u, language: i }) })
      ] }, u.id)) })
    ] }) })
  ] });
}
function Ei(t) {
  if (typeof t != "string") return null;
  try {
    const a = new URL(t.trim());
    return a.protocol === "https:" ? a.toString() : null;
  } catch {
    return null;
  }
}
function et(t, a) {
  if (typeof t != "string" && typeof t != "number") return null;
  const i = String(t).trim().slice(0, a);
  return i === "" ? null : i;
}
function Ci(t) {
  const a = t.replace(/[^0-9+]/g, "");
  return /^\+?\d{5,}$/.test(a) ? `tel:${a}` : null;
}
function zi(t) {
  var r;
  const a = Array.isArray((r = t.data) == null ? void 0 : r.items) ? t.data.items : Array.isArray(t.items) ? t.items : [], i = [];
  for (const n of a.slice(0, 30)) {
    if (!n || typeof n != "object") continue;
    const o = et(n.title, 120);
    o && i.push({ title: o, subtitle: et(n.subtitle, 120), details: et(n.details, 300), phone: et(n.phone, 40), url: Ei(n.url) });
  }
  return i;
}
function Ii({ config: t, onAction: a, language: i }) {
  var d, m;
  const r = t.layout || ((d = t.data) == null ? void 0 : d.layout), n = r === "schedule" || r === "people" ? r : "locations", o = zi(t), s = typeof t.title == "string" && t.title || typeof ((m = t.data) == null ? void 0 : m.title) == "string" && t.data.title || "";
  return o.length === 0 ? /* @__PURE__ */ e("div", { role: "status", className: "pitaj-inline-widget-card", children: I("manualEmpty", i) }) : /* @__PURE__ */ e("div", { className: "pitaj-inline-widget-card pitaj-ml", role: "region", "aria-label": s || void 0, children: [
    s && /* @__PURE__ */ e("div", { className: "pitaj-widget-bar", children: /* @__PURE__ */ e("span", { className: "pitaj-widget-bar-title", children: s }) }),
    /* @__PURE__ */ e("ul", { className: "pitaj-ml-list", children: o.map((p, u) => {
      const c = p.phone ? Ci(p.phone) : null;
      return /* @__PURE__ */ e("li", { className: "pitaj-ml-item", children: [
        /* @__PURE__ */ e("div", { className: "pitaj-ml-title", children: p.title }),
        p.subtitle && /* @__PURE__ */ e("div", { className: "pitaj-ml-sub", children: p.subtitle }),
        p.details && /* @__PURE__ */ e("div", { className: "pitaj-ml-details", children: p.details }),
        /* @__PURE__ */ e("div", { className: "pitaj-ml-actions", children: [
          p.phone && (c ? /* @__PURE__ */ e("a", { href: c, children: p.phone }) : /* @__PURE__ */ e("span", { children: p.phone })),
          p.url && /* @__PURE__ */ e("a", { href: p.url, target: "_blank", rel: "noopener noreferrer", children: n === "locations" ? I("manualMap", i) : I("manualMore", i) }),
          n === "schedule" && a && /* @__PURE__ */ e("button", { type: "button", className: "pitaj-pc-cta", onClick: () => a(`${I("manualBook", i)}: ${p.title}${p.subtitle ? ` (${p.subtitle})` : ""}`), children: I("manualBook", i) })
        ] })
      ] }, `${u}-${p.title}`);
    }) })
  ] });
}
function Ri({ item: t }) {
  const [a, i] = T(!1);
  return !t.image || a ? /* @__PURE__ */ e("div", { className: "pitaj-pc-image pitaj-pc-image-empty", "aria-hidden": "true", children: /* @__PURE__ */ e(ve, { size: 28 }) }) : /* @__PURE__ */ e("div", { className: "pitaj-pc-image", children: /* @__PURE__ */ e(
    "img",
    {
      src: t.image,
      alt: t.name,
      loading: "lazy",
      decoding: "async",
      referrerPolicy: "no-referrer",
      onError: () => i(!0)
    }
  ) });
}
function Oi({ note: t, language: a }) {
  const [i, r] = T(!1), n = le(null);
  return _e(() => {
    if (!i) return;
    const o = (d) => {
      n.current && !d.composedPath().includes(n.current) && r(!1);
    }, s = (d) => {
      d.key === "Escape" && r(!1);
    };
    return document.addEventListener("pointerdown", o, !0), document.addEventListener("keydown", s), () => {
      document.removeEventListener("pointerdown", o, !0), document.removeEventListener("keydown", s);
    };
  }, [i]), /* @__PURE__ */ e("span", { className: "pitaj-pc-note", ref: n, children: [
    /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        className: "pitaj-pc-note-btn",
        "aria-label": I("priceNoteLabel", a),
        "aria-expanded": i,
        onClick: () => r((o) => !o),
        onMouseEnter: () => r(!0),
        onMouseLeave: () => r(!1),
        onFocus: () => r(!0),
        onBlur: () => r(!1),
        children: /* @__PURE__ */ e(Ma, { size: 13 })
      }
    ),
    i && /* @__PURE__ */ e("span", { className: "pitaj-pc-note-tip", role: "tooltip", children: t })
  ] });
}
function Di({ config: t, onAction: a, onProductEvent: i, language: r }) {
  const n = Sa(t), o = Ni(t), s = le(null), d = le(/* @__PURE__ */ new Set()), [m, p] = T(0), [u, c] = T({ start: !0, end: !1 }), b = typeof t.title == "string" && t.title || I("productsTitle", r), y = () => {
    const h = s.current;
    if (!h) return;
    const w = h.firstElementChild, _ = w ? w.getBoundingClientRect().width + 10 : 1;
    p(Math.min(n.length - 1, Math.max(0, Math.round(h.scrollLeft / _)))), c({ start: h.scrollLeft <= 2, end: h.scrollLeft + h.clientWidth >= h.scrollWidth - 2 });
  };
  if (_e(() => {
    y();
    const h = s.current;
    if (!h || typeof IntersectionObserver > "u" || t.preview === !0) return;
    const w = new IntersectionObserver((_) => {
      var S;
      for (const N of _) {
        const P = N.target.dataset.productId;
        if (!N.isIntersecting || !P || d.current.has(P)) continue;
        d.current.add(P);
        const L = Number(N.target.dataset.position);
        i == null || i("product_viewed", { productId: P, name: (S = n[L]) == null ? void 0 : S.name, position: L + 1 });
      }
    }, { root: h, threshold: 0.6 });
    return h.querySelectorAll("[data-product-id]").forEach((_) => w.observe(_)), () => w.disconnect();
  }, [n.length]), n.length === 0) return /* @__PURE__ */ e("div", { role: "status", children: I("productsUnavailable", r) });
  const k = (h) => {
    var P;
    const w = s.current;
    if (!w) return;
    const _ = w.firstElementChild, S = (_ ? _.getBoundingClientRect().width : w.clientWidth * 0.8) + 10, N = typeof window < "u" && ((P = window.matchMedia) == null ? void 0 : P.call(window, "(prefers-reduced-motion: reduce)").matches);
    w.scrollBy({ left: h * S, behavior: N ? "auto" : "smooth" });
  }, V = (h, w, _) => {
    i == null || i("product_clicked", { productId: h.id, name: h.name, position: w + 1, kind: _, url: _ === "buy" ? h.buyUrl : h.url });
  };
  return /* @__PURE__ */ e("div", { className: "pitaj-inline-widget-card pitaj-pc", children: [
    /* @__PURE__ */ e("div", { className: "pitaj-widget-bar", children: [
      /* @__PURE__ */ e("span", { className: "pitaj-widget-badge-icon", children: /* @__PURE__ */ e(ve, { size: 14 }) }),
      /* @__PURE__ */ e("span", { className: "pitaj-widget-bar-title", children: b }),
      n.length > 1 && /* @__PURE__ */ e("span", { className: "pitaj-widget-counter", children: [
        m + 1,
        " / ",
        n.length
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "pitaj-pc-viewport", children: [
      n.length > 1 && /* @__PURE__ */ e("button", { type: "button", className: "pitaj-pc-arrow pitaj-pc-arrow-prev", "aria-label": I("productsPrevious", r), disabled: u.start, onClick: () => k(-1), children: /* @__PURE__ */ e(Pa, { size: 16 }) }),
      /* @__PURE__ */ e(
        "div",
        {
          className: "pitaj-pc-track",
          ref: s,
          role: "region",
          "aria-roledescription": "carousel",
          "aria-label": b,
          tabIndex: 0,
          onScroll: y,
          onKeyDown: (h) => {
            h.key === "ArrowRight" && (h.preventDefault(), k(1)), h.key === "ArrowLeft" && (h.preventDefault(), k(-1));
          },
          children: n.map((h, w) => /* @__PURE__ */ e(
            "article",
            {
              className: "pitaj-pc-card",
              role: "group",
              "aria-roledescription": "slide",
              "aria-label": `${w + 1} / ${n.length}`,
              "data-product-id": h.id,
              "data-position": w,
              children: [
                /* @__PURE__ */ e(Ri, { item: h }),
                /* @__PURE__ */ e("div", { className: "pitaj-pc-body", children: [
                  /* @__PURE__ */ e("h4", { className: "pitaj-pc-name", children: h.name }),
                  h.subtitle && /* @__PURE__ */ e("p", { className: "pitaj-pc-sub", children: h.subtitle }),
                  h.price && /* @__PURE__ */ e("div", { className: "pitaj-pc-price-row", children: [
                    /* @__PURE__ */ e("span", { className: "pitaj-pc-price", children: [
                      h.priceFrom ? `${I("productsFrom", r)} ` : "",
                      h.price
                    ] }),
                    h.compareAtPrice && /* @__PURE__ */ e("s", { className: "pitaj-pc-compare", children: h.compareAtPrice }),
                    h.discountPercent && /* @__PURE__ */ e("span", { className: "pitaj-pc-discount", children: [
                      "-",
                      h.discountPercent,
                      "%"
                    ] }),
                    (h.priceNote || o && /\d/.test(h.price)) && /* @__PURE__ */ e(Oi, { note: h.priceNote || I("priceStaleNote", r).replace("{date}", o), language: r })
                  ] }),
                  h.stockStatus && /* @__PURE__ */ e("span", { className: `pitaj-pc-stock ${h.availability === "out_of_stock" ? "is-out" : h.availability === "in_stock" ? "is-in" : ""}`, children: h.stockStatus }),
                  /* @__PURE__ */ e("div", { className: "pitaj-pc-actions", children: [
                    h.url ? /* @__PURE__ */ e("a", { className: "pitaj-pc-cta", href: h.url, target: "_blank", rel: "noopener noreferrer", onClick: () => V(h, w, "view"), children: h.ctaLabel || I("productsView", r) }) : /* @__PURE__ */ e("button", { type: "button", className: "pitaj-pc-cta", onClick: () => {
                      V(h, w, "view"), a == null || a(`${I("productsAsk", r)} ${h.name}`);
                    }, children: h.ctaLabel || I("productsView", r) }),
                    Ta(h) && /* @__PURE__ */ e("a", { className: "pitaj-pc-buy", href: h.buyUrl, target: "_blank", rel: "noopener noreferrer", onClick: () => V(h, w, "buy"), children: I("productsBuy", r) })
                  ] })
                ] })
              ]
            },
            h.id
          ))
        }
      ),
      n.length > 1 && /* @__PURE__ */ e("button", { type: "button", className: "pitaj-pc-arrow pitaj-pc-arrow-next", "aria-label": I("productsNext", r), disabled: u.end, onClick: () => k(1), children: /* @__PURE__ */ e(ma, { size: 16 }) })
    ] }),
    n.length > 1 && /* @__PURE__ */ e("div", { className: "pitaj-pc-dots", "aria-hidden": "true", children: n.map((h, w) => /* @__PURE__ */ e("span", { className: w === m ? "is-active" : "" }, h.id)) })
  ] });
}
function Li(t, a, i) {
  return t === "rate_limit" ? "rate_limit" : t === "api" && a === "FUNCTION_INVALID_INPUT" ? "input" : t === "api" && (a === "FUNCTION_UNAVAILABLE" || i === 404) ? "unavailable" : "failed";
}
function Pi(t, a) {
  const i = Number.isFinite(a) ? Math.min(2592e3, Math.max(1, Math.ceil(a))) : 60;
  return t + i * 1e3;
}
function Mi(t, a) {
  const i = Array.isArray(a.function_names) ? a.function_names : [], r = Array.isArray(a.functions) ? a.functions : [];
  return i.includes(t) || r.some((n) => n && (n.id === t || n.name === t));
}
function Fi(t, a) {
  if (a.function_execution_enabled !== !0 || !a.function_actions || typeof a.function_actions != "object") return null;
  const i = Object.prototype.hasOwnProperty.call(a.function_actions, t) ? a.function_actions[t] : null;
  return typeof i == "string" && /^[a-zA-Z0-9_-]{1,100}$/.test(i) ? i : null;
}
function Ui(t, a, i) {
  const r = /* @__PURE__ */ Object.create(null), n = a.function_inputs && Object.prototype.hasOwnProperty.call(a.function_inputs, t) ? a.function_inputs[t] : [];
  if (!Array.isArray(n) || n.length > 10) return r;
  for (const o of n)
    typeof o == "string" && /^[a-zA-Z][a-zA-Z0-9_]{0,63}$/.test(o) && Object.prototype.hasOwnProperty.call(i, o) && typeof i[o] == "string" && (r[o] = i[o]);
  return r;
}
function $i(t, a, i) {
  const r = { ...t.default_data || {}, ...t.data || {} };
  if (!i && Array.isArray(t.function_output_fields))
    for (const n of t.function_output_fields)
      typeof n == "string" && n !== "function_state" && /^[a-zA-Z][a-zA-Z0-9_]{0,63}$/.test(n) && delete r[n];
  return { ...r, ...a };
}
function Bi(t, a) {
  if (a || t.data_is_sample !== !0) return !1;
  const i = t.data && typeof t.data == "object" && Object.keys(t.data).length > 0, r = t.function_actions && typeof t.function_actions == "object" ? Object.keys(t.function_actions) : [], n = t.function_execution_enabled === !0 && r.length > 0;
  return !i && !n;
}
function Wi(t) {
  var i;
  const a = (i = t.data_state) == null ? void 0 : i.status;
  return a === "empty" ? "Nismo pronašli podatke za ovaj upit." : a === "unavailable" ? "Podaci trenutno nisu dostupni." : a === "needs_input" ? "Napišite podatke koji su potrebni da bismo nastavili." : null;
}
async function Hi(t, a, i, r, n, o = {}) {
  if (!Number.isSafeInteger(a) || a < 1 || !/^[a-zA-Z0-9_-]{1,100}$/.test(i) || !/^[1-9]\d*$/.test(r)) throw new Error("Funkcija nije dostupna.");
  const s = (n || window.location.origin).replace(/\/$/, ""), d = await at(t, n), m = `${s}/api/widget/${encodeURIComponent(t)}/v2/inline-widgets/${a}/functions/${encodeURIComponent(i)}/execute`, p = await fetch(m, { method: "POST", cache: "no-store", headers: { Accept: "application/json", "Content-Type": "application/json", Authorization: `Bearer ${d}` }, body: JSON.stringify({ conversation_id: Number(r), inputs: o }) });
  p.ok || await ha(p, "Funkciju trenutno nije moguće izvršiti.");
  const { data: u } = await p.json();
  if (!u || typeof u != "object" || Array.isArray(u) || Object.keys(u).length > 30 || Object.entries(u).some(([c, b]) => !/^[a-zA-Z][a-zA-Z0-9_]{0,63}$/.test(c) || !["string", "number", "boolean"].includes(typeof b)))
    throw new Error("Neispravan odgovor funkcije.");
  return u;
}
const Gi = ".pitaj-product-card{display:flex;flex-direction:column;gap:10px}.pitaj-product-image-wrap{position:relative;width:100%;height:160px;border-radius:var(--pitaj-radius-btn, 8px);overflow:hidden;background:#f8fafc}.pitaj-product-img{width:100%;height:100%;object-fit:cover}.pitaj-carousel-controls{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;align-items:center;justify-content:space-between;padding:0 8px;pointer-events:none}.pitaj-carousel-btn{pointer-events:auto;width:28px;height:28px;border-radius:50%;background:#ffffffe0;border:1px solid rgba(0,0,0,.08);box-shadow:0 1px 4px #0000001f;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:16px;font-weight:700;color:#1e293b}.pitaj-product-info{display:flex;flex-direction:column;gap:4px}.pitaj-product-name{font-size:14.5px;font-weight:600}.pitaj-product-sub{font-size:12px;color:var(--pitaj-muted, #64748b)}.pitaj-product-price{font-size:15px;font-weight:700;color:var(--pitaj-accent, #0f172a);margin-top:2px}.pitaj-cart-items-list{display:flex;flex-direction:column;gap:10px}.pitaj-cart-item-row{display:flex;align-items:center;gap:10px}.pitaj-cart-thumb{width:44px;height:44px;border-radius:var(--pitaj-radius-corner-sm, 6px);object-fit:cover;background:#f1f5f9}.pitaj-cart-details{flex:1;min-width:0}.pitaj-cart-item-name{font-size:13px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pitaj-cart-item-sub{font-size:11.5px;color:var(--pitaj-muted, #64748b)}.pitaj-cart-item-price{font-size:13.5px;font-weight:600}.pitaj-cart-divider{height:1px;background:var(--pitaj-border, #e5e7eb);margin:10px 0}.pitaj-cart-summary{display:flex;justify-content:space-between;align-items:center;font-size:13.5px;font-weight:600;margin-bottom:8px}.pitaj-cart-payment{display:flex;justify-content:space-between;align-items:center;font-size:12px;color:var(--pitaj-muted, #64748b);margin-bottom:12px}.pitaj-cart-card-pill{font-weight:600;color:#1e293b;background:#f1f5f9;padding:3px 8px;border-radius:6px}.chart-widget .pitaj-chart-label{font-size:12px;color:var(--pitaj-muted, #64748b)}.chart-widget .pitaj-chart-big-number{font-size:26px;font-weight:700;color:var(--pitaj-fg, #0f172a);margin:4px 0 16px}.pitaj-bar-chart-container{display:flex;align-items:flex-end;justify-content:space-between;height:110px;padding:6px 4px 0;border-bottom:1px solid var(--pitaj-border, #e2e8f0)}.pitaj-bar-col{display:flex;flex-direction:column;align-items:center;gap:6px;flex:1}.pitaj-bar-track{width:14px;height:85px;background:#f1f5f9;border-radius:4px;display:flex;align-items:flex-end;overflow:hidden}.pitaj-bar-fill{width:100%;background:var(--pitaj-accent, #3b82f6);border-radius:4px 4px 0 0;transition:height .3s ease}.pitaj-bar-day{font-size:10px;color:var(--pitaj-muted, #94a3b8);font-weight:600}.pitaj-classes-list{display:flex;flex-direction:column;gap:10px}.pitaj-class-item{display:flex;align-items:center;gap:10px;padding:8px;border-radius:var(--pitaj-radius-btn, 8px);background:var(--pitaj-surface-subtle, #f8fafc);border:1px solid var(--pitaj-border, #e2e8f0)}.pitaj-class-thumb{width:52px;height:52px;border-radius:var(--pitaj-radius-corner-sm, 6px);object-fit:cover}.pitaj-class-info{flex:1;min-width:0}.pitaj-class-header{display:flex;align-items:center;gap:6px}.pitaj-class-title{font-size:13px;font-weight:600}.pitaj-level-badge{font-size:10px;font-weight:600;padding:1px 6px;border-radius:10px}.pitaj-level-badge.level-green{background:#dcfce7;color:#15803d}.pitaj-level-badge.level-purple{background:#f3e8ff;color:#7e22ce}.pitaj-class-time{font-size:11.5px;font-weight:500;color:var(--pitaj-fg, #1e293b);margin-top:1px}.pitaj-class-instructor{font-size:10.5px;color:var(--pitaj-muted, #64748b)}.pitaj-book-btn{padding:6px 12px;font-size:12px;font-weight:600;background:#16a34a;color:#fff;border:none;border-radius:var(--pitaj-radius-btn, 14px);cursor:pointer;white-space:nowrap}.pitaj-book-btn.is-booked{background:#e2e8f0;color:#475569}.pitaj-hotel-image-wrap{position:relative;width:100%;height:140px;border-radius:var(--pitaj-radius-btn, 8px);overflow:hidden;margin-bottom:10px}.pitaj-hotel-img{width:100%;height:100%;object-fit:cover}.pitaj-hotel-badge-price{position:absolute;top:8px;right:8px;background:#0f172ad9;color:#fff;font-size:12px;font-weight:600;padding:3px 8px;border-radius:6px;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.pitaj-hotel-name{font-size:15px;font-weight:600}.pitaj-hotel-meta{display:flex;justify-content:space-between;align-items:center;font-size:11.5px;color:var(--pitaj-muted, #64748b);margin:4px 0 10px}.pitaj-meta-item{display:inline-flex;align-items:center;gap:4px}.pitaj-meta-icon{color:var(--pitaj-muted, #64748b)}.pitaj-rating{color:#f59e0b;font-weight:600}.pitaj-star-icon{color:#f59e0b}.pitaj-amenities-row{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px}.pitaj-amenity-chip{display:inline-flex;align-items:center;gap:5px;font-size:11px;font-weight:500;padding:3px 8px;background:var(--pitaj-surface-subtle, #f1f5f9);border:1px solid var(--pitaj-border, #e2e8f0);border-radius:6px;color:var(--pitaj-fg, #334155)}.pitaj-amenity-icon{flex-shrink:0;color:var(--pitaj-muted, #64748b)}.pitaj-inline-widget-card.weather-widget{background:linear-gradient(135deg,#2563eb,#3b82f6,#60a5fa);color:#fff;border:none;padding:16px}.pitaj-weather-top{display:flex;align-items:center;justify-content:space-between}.pitaj-weather-svg{color:#fef08a}.pitaj-weather-temp{font-size:32px;font-weight:700}.pitaj-weather-city{font-size:16px;font-weight:600;margin-top:6px}.pitaj-weather-cond{font-size:13px;font-weight:500;opacity:.9}.pitaj-weather-desc{font-size:11.5px;opacity:.82;margin-top:6px;line-height:1.4}.pitaj-iframe-container{position:relative;width:100%;border-radius:8px;overflow:hidden;background:#f8fafc}.pitaj-iframe-frame{width:100%;height:100%;border:none}.pitaj-iframe-loading{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;background:#ffffffb3}.pitaj-iframe-open-btn{font-size:14px;text-decoration:none;color:var(--pitaj-muted, #64748b);padding:2px 6px;border-radius:4px}.pitaj-iframe-open-btn:hover{background:var(--pitaj-surface-subtle, #f1f5f9);color:var(--pitaj-fg, #0f172a)}.pitaj-booking-card{padding:12px;border-radius:12px;background:var(--pitaj-surface, #ffffff);border:1px solid var(--pitaj-border, #e2e8f0)}.pitaj-booking-header{display:flex;align-items:center;gap:10px;margin-bottom:6px}.pitaj-booking-brand-icon{width:36px;height:36px;border-radius:8px;background:var(--pitaj-surface-subtle, #f1f5f9);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;color:var(--pitaj-fg, #0f172a);flex-shrink:0;border:1px solid var(--pitaj-border, #e2e8f0)}.pitaj-cal-logo{font-weight:800;font-size:12px;letter-spacing:-.5px;color:#000}.pitaj-calendly-logo{font-weight:800;font-size:15px;color:#006bff}.pitaj-booking-info{flex:1;min-width:0}.pitaj-booking-title{font-size:13px;font-weight:600;color:var(--pitaj-fg, #0f172a);line-height:1.25;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pitaj-booking-meta{display:flex;align-items:center;gap:5px;margin-top:3px}.pitaj-booking-tag{font-size:10.5px;font-weight:500;color:var(--pitaj-muted, #64748b);background:var(--pitaj-surface-subtle, #f8fafc);padding:1px 6px;border-radius:4px;border:1px solid var(--pitaj-border, #e2e8f0)}.pitaj-booking-desc{font-size:11.5px;color:var(--pitaj-muted, #64748b);margin-bottom:8px;line-height:1.4}.pitaj-booking-open-btn{font-size:14px;text-decoration:none;color:var(--pitaj-muted, #64748b);padding:3px 6px;border-radius:4px;transition:all .15s ease;display:flex;align-items:center;justify-content:center}.pitaj-booking-open-btn:hover{background:var(--pitaj-surface-subtle, #f1f5f9);color:var(--pitaj-fg, #0f172a)}.pitaj-booking-frame-wrap{position:relative;width:100%;border-radius:8px;overflow:hidden;background:#f8fafc;border:1px solid var(--pitaj-border, #e2e8f0)}.pitaj-booking-frame{width:100%;height:100%;border:none}.pitaj-booking-loading{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;background:#ffffffd9;z-index:2}.pitaj-api-widget{background:var(--pitaj-surface, #ffffff);border:1px solid var(--pitaj-border, #e2e8f0);border-radius:12px;padding:12px 14px;font-family:inherit;box-shadow:0 1px 3px #0000000d;margin:4px 0;max-width:100%}.pitaj-api-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid var(--pitaj-border, #e2e8f0)}.pitaj-api-title-row{display:flex;align-items:center;gap:6px}.pitaj-api-icon{font-size:14px}.pitaj-api-title{font-size:13px;font-weight:600;color:var(--pitaj-fg, #0f172a)}.pitaj-api-badge{font-size:10px;font-weight:600;color:#059669;background:#ecfdf5;border:1px solid #a7f3d0;padding:1px 7px;border-radius:9999px;text-transform:uppercase;letter-spacing:.03em}.pitaj-api-body{display:flex;flex-direction:column;gap:6px}.pitaj-api-row{display:flex;justify-content:space-between;align-items:center;font-size:12px;gap:8px;padding:3px 0;border-bottom:1px dashed var(--pitaj-border, #f1f5f9)}.pitaj-api-row:last-child{border-bottom:none}.pitaj-api-key{color:var(--pitaj-muted, #64748b);font-weight:500;text-transform:capitalize}.pitaj-api-val{color:var(--pitaj-fg, #0f172a);font-weight:600;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;word-break:break-all;text-align:right}.pitaj-api-empty{font-size:12px;color:var(--pitaj-muted, #64748b);font-style:italic;padding:4px 0}.pitaj-order-card{background:var(--pitaj-surface, #ffffff);border:1px solid var(--pitaj-border, #e2e8f0);border-radius:12px;padding:12px 14px;font-family:inherit;box-shadow:0 1px 3px #0000000d;margin:4px 0;max-width:100%}.pitaj-order-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid var(--pitaj-border, #e2e8f0)}.pitaj-order-id-group{display:flex;align-items:center;gap:6px}.pitaj-order-icon{font-size:15px}.pitaj-order-number{font-size:13.5px;font-weight:700;color:var(--pitaj-fg, #0f172a)}.pitaj-order-status-badge{font-size:11px;font-weight:600;padding:2px 8px;border-radius:9999px}.pitaj-order-badge-success{color:#059669;background:#ecfdf5;border:1px solid #a7f3d0}.pitaj-order-badge-info{color:#0284c7;background:#f0f9ff;border:1px solid #bae6fd}.pitaj-order-badge-pending{color:#d97706;background:#fffbeb;border:1px solid #fde68a}.pitaj-order-details{display:flex;flex-direction:column;gap:8px}.pitaj-order-tracking-box{background:var(--pitaj-surface-subtle, #f8fafc);border:1px solid var(--pitaj-border, #e2e8f0);border-radius:8px;padding:8px 10px}.pitaj-order-tracking-title{font-size:11px;color:var(--pitaj-muted, #64748b);margin-bottom:3px}.pitaj-order-tracking-val{display:flex;align-items:center;justify-content:space-between;font-size:12px;color:var(--pitaj-fg, #0f172a)}.pitaj-order-tracking-link{font-size:11.5px;font-weight:600;color:#2563eb;text-decoration:none;padding:2px 6px;background:#eff6ff;border-radius:4px}.pitaj-order-notice{font-size:11.5px;color:var(--pitaj-muted, #64748b);font-style:italic;padding:4px 0}.pitaj-order-meta-grid{display:flex;flex-direction:column;gap:4px;padding-top:4px}.pitaj-order-meta-item{display:flex;justify-content:space-between;font-size:11.5px}.pitaj-order-meta-label{color:var(--pitaj-muted, #64748b)}.pitaj-order-meta-val{color:var(--pitaj-fg, #0f172a);font-weight:500;text-align:right}.pitaj-pc-viewport{position:relative}.pitaj-pc-track{display:flex;gap:10px;overflow-x:auto;scroll-snap-type:x mandatory;scroll-padding:0 12px;padding:12px;overscroll-behavior-x:contain;-webkit-overflow-scrolling:touch;scrollbar-width:none}.pitaj-pc-track::-webkit-scrollbar{display:none}.pitaj-pc-track:focus-visible{outline:2px solid var(--pitaj-accent-ring, rgba(37, 99, 235, .25));outline-offset:-2px}.pitaj-pc-card{flex:0 0 min(74%,210px);scroll-snap-align:start;display:flex;flex-direction:column;border:1px solid var(--pitaj-card-border, #e2e8f0);border-radius:var(--pitaj-radius-btn, 10px);background:var(--pitaj-surface, #fff);overflow:hidden}.pitaj-pc-image{position:relative;width:100%;aspect-ratio:4 / 3;background:var(--pitaj-surface-subtle, #f8fafc);display:flex;align-items:center;justify-content:center}.pitaj-pc-image img{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;object-fit:contain}.pitaj-pc-image-empty{color:var(--pitaj-muted, #64748b)}.pitaj-pc-body{display:flex;flex-direction:column;gap:6px;padding:10px 12px 12px;flex:1}.pitaj-pc-name{margin:0;font-size:13px;font-weight:600;line-height:1.35;color:var(--pitaj-fg, #0f172a);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.pitaj-pc-sub{margin:0;font-size:11px;color:var(--pitaj-muted, #64748b)}.pitaj-pc-price-row{position:relative;display:flex;flex-wrap:wrap;align-items:baseline;gap:4px 8px}.pitaj-pc-price{font-size:15px;font-weight:700;color:var(--pitaj-fg, #0f172a)}.pitaj-pc-compare{font-size:11px;color:var(--pitaj-muted, #64748b)}.pitaj-pc-discount{font-size:10px;font-weight:700;padding:1px 6px;border-radius:var(--pitaj-radius-full, 999px);color:var(--pitaj-success, #10b981);background:#10b9811f}.pitaj-pc-note{display:inline-flex;align-self:center}.pitaj-pc-note-btn{display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;padding:0;border:0;border-radius:50%;background:transparent;color:var(--pitaj-muted, #64748b);opacity:.75;cursor:help}.pitaj-pc-note-btn:hover,.pitaj-pc-note-btn:focus-visible{opacity:1;color:var(--pitaj-fg, #0f172a)}.pitaj-pc-note-tip{position:absolute;z-index:5;left:0;right:0;bottom:calc(100% + 6px);padding:6px 8px;border-radius:8px;font-size:11px;font-weight:400;line-height:1.35;text-align:left;color:var(--pitaj-surface, #fff);background:var(--pitaj-fg, #0f172a);box-shadow:0 4px 12px #0f172a2e;pointer-events:none}.pitaj-pc-stock{align-self:flex-start;font-size:11px;font-weight:500;color:var(--pitaj-muted, #64748b)}.pitaj-pc-stock.is-in{color:var(--pitaj-success, #10b981)}.pitaj-pc-stock.is-out{color:var(--pitaj-danger, #ef4444)}.pitaj-pc-actions{display:flex;align-items:center;gap:10px;margin-top:auto;padding-top:4px}.pitaj-pc-cta{display:inline-flex;align-items:center;justify-content:center;flex:1;min-height:32px;padding:0 10px;border:0;border-radius:var(--pitaj-radius-btn, 10px);font:inherit;font-size:12px;font-weight:600;text-decoration:none;color:var(--pitaj-accent-contrast, #fff);background:var(--pitaj-accent, #2563eb);cursor:pointer}.pitaj-pc-cta:hover{background:var(--pitaj-accent-hover, #1d4ed8)}.pitaj-pc-buy{font-size:12px;font-weight:600;color:var(--pitaj-accent, #2563eb);text-decoration:none}.pitaj-pc-buy:hover{text-decoration:underline}.pitaj-pc-arrow{position:absolute;top:38%;z-index:2;display:none;align-items:center;justify-content:center;width:30px;height:30px;padding:0;border:1px solid var(--pitaj-card-border, #e2e8f0);border-radius:50%;background:var(--pitaj-surface, #fff);color:var(--pitaj-fg, #0f172a);box-shadow:0 2px 8px #0f172a1f;cursor:pointer}.pitaj-pc-arrow:disabled{opacity:0;pointer-events:none}.pitaj-pc-arrow-prev{left:4px}.pitaj-pc-arrow-next{right:4px}@media(hover:hover)and (pointer:fine){.pitaj-pc-arrow{display:inline-flex}}.pitaj-pc-dots{display:flex;justify-content:center;gap:5px;padding:0 12px 10px}.pitaj-pc-dots span{width:5px;height:5px;border-radius:50%;background:var(--pitaj-border, #e2e8f0)}.pitaj-pc-dots span.is-active{background:var(--pitaj-accent, #2563eb)}@media(prefers-reduced-motion:reduce){.pitaj-pc-track{scroll-behavior:auto}}.pitaj-cv-scroll{overflow-x:auto;padding:0 12px 12px}.pitaj-cv-table{width:100%;border-collapse:collapse;font-size:13px}.pitaj-cv-table th,.pitaj-cv-table td{padding:8px;text-align:left;vertical-align:top;border-bottom:1px solid var(--pitaj-border, #e2e8f0)}.pitaj-cv-table thead th{font-weight:600;color:var(--pitaj-text-muted, #64748b)}.pitaj-cv-table tbody th{font-weight:500;color:var(--pitaj-text-muted, #64748b);white-space:nowrap}.pitaj-cv-list td:last-child,.pitaj-cv-list th:last-child{text-align:right;white-space:nowrap}.pitaj-cv-table a:not(.pitaj-pc-cta):not(.pitaj-pc-buy){color:var(--pitaj-accent, #2563eb);text-decoration:none}.pitaj-cv-table .pitaj-pc-stock{display:block;margin-top:2px}.pitaj-cv-price{display:inline-flex;flex-wrap:wrap;align-items:baseline;gap:6px;font-weight:600}.pitaj-cv-card{display:flex;flex-direction:column}.pitaj-cv-card-image{width:100%;aspect-ratio:16 / 9;object-fit:cover}.pitaj-ml-list{list-style:none;margin:0;padding:0 12px 12px;display:flex;flex-direction:column;gap:10px}.pitaj-ml-item{padding:10px 12px;border:1px solid var(--pitaj-card-border, #e2e8f0);border-radius:var(--pitaj-radius-btn, 10px);background:var(--pitaj-surface, #fff)}.pitaj-ml-title{font-size:14px;font-weight:600}.pitaj-ml-sub,.pitaj-ml-details{margin-top:2px;font-size:12px;color:var(--pitaj-muted, #64748b)}.pitaj-ml-actions{display:flex;flex-wrap:wrap;align-items:center;gap:8px 14px;margin-top:8px;font-size:12px}.pitaj-ml-actions a{color:var(--pitaj-accent, #2563eb);font-weight:600;text-decoration:none}.pitaj-ml-actions .pitaj-pc-cta{flex:0 0 auto;min-height:30px}.pitaj-cal-picker{display:flex;flex-direction:column;gap:10px}.pitaj-cal-days,.pitaj-cal-times{display:flex;flex-wrap:wrap;gap:6px}.pitaj-cal-chip{border:1px solid var(--pitaj-border, #e5e7eb);background:transparent;color:inherit;border-radius:8px;padding:6px 10px;font:inherit;font-size:13px;cursor:pointer}.pitaj-cal-chip.is-active{border-color:currentColor;font-weight:600}.pitaj-cal-chip:focus-visible{outline:2px solid currentColor;outline-offset:2px}.pitaj-cal-form{display:flex;flex-direction:column;gap:8px}.pitaj-cal-form input{border:1px solid var(--pitaj-border, #e5e7eb);border-radius:8px;padding:8px 10px;font:inherit;font-size:14px;background:transparent;color:inherit}";
let Ge = null;
function Vi() {
  const t = window.__pitajIoBundleUrl;
  if (t) return new URL(".", t).href;
  const a = Array.from(document.scripts).reverse(), i = a.find((o) => /(?:^|\/)widget(?:\.iife)?\.js(?:[?#]|$)/i.test(o.src)), r = a.find((o) => /(?:^|\/)loader\.js(?:[?#]|$)/i.test(o.src)), n = (i == null ? void 0 : i.src) || (r == null ? void 0 : r.src);
  return n ? new URL(".", n).href : "https://cdn.pitaj.io/";
}
function qi(t) {
  var o;
  const a = window;
  if ((o = a.PitajJSXParser) != null && o.parse) return Promise.resolve(a.PitajJSXParser.parse);
  if (Ge) return Ge;
  const i = new URL("widget-parser-0aecf6d2e52165c1.js", Vi()).href, r = `${(t || "https://api.pitaj.io").replace(/\/+$/, "")}/widget-parser-0aecf6d2e52165c1.js`, n = (s) => new Promise((d, m) => {
    const p = document.createElement("script");
    p.src = s, p.async = !0, p.charset = "utf-8", p.onload = () => {
      var u;
      (u = a.PitajJSXParser) != null && u.parse ? d(a.PitajJSXParser.parse) : m(new Error("JSX parser is unavailable"));
    }, p.onerror = () => m(new Error("JSX parser could not be loaded")), document.head.appendChild(p);
  });
  return Ge = n(i).catch((s) => i === r ? Promise.reject(s) : n(r)).catch((s) => {
    throw Ge = null, s;
  }), Ge;
}
const U = {
  foreground: "var(--pitaj-fg, #0f172a)",
  muted: "var(--pitaj-muted, #64748b)",
  border: "var(--pitaj-border, #e2e8f0)",
  surface: "var(--pitaj-surface, #ffffff)",
  accent: "var(--pitaj-accent, #2563eb)"
};
function Xi({ children: t, size: a = "sm", status: i, background: r, className: n = "", style: o }) {
  const s = a === "sm" ? 360 : a === "md" ? 440 : a === "lg" ? 560 : void 0, d = typeof i == "string" ? { text: i } : i;
  return /* @__PURE__ */ e(
    "div",
    {
      className: `pitaj-inline-widget-card ${n}`.trim(),
      style: {
        width: "100%",
        maxWidth: s,
        padding: 16,
        borderRadius: 16,
        background: r || U.surface,
        color: U.foreground,
        boxSizing: "border-box",
        ...he(n),
        ...o
      },
      children: [
        d != null && d.text ? /* @__PURE__ */ e("div", { style: { display: "flex", alignItems: "center", gap: 6, marginBottom: 10, color: U.muted, fontSize: 12 }, children: [
          d.icon ? /* @__PURE__ */ e(At, { name: d.icon, size: "xs", color: "secondary" }) : null,
          /* @__PURE__ */ e("span", { children: d.text })
        ] }) : null,
        t
      ]
    }
  );
}
function Zi({ children: t, gap: a = 2, justify: i = "start", align: r = "center", wrap: n = !1, flex: o, className: s = "", style: d }) {
  const m = i === "between" ? "space-between" : i === "around" ? "space-around" : i === "end" ? "flex-end" : i === "center" ? "center" : "flex-start", p = r === "start" ? "flex-start" : r === "end" ? "flex-end" : r === "baseline" ? "baseline" : r === "stretch" ? "stretch" : "center";
  return /* @__PURE__ */ e("div", { className: s, style: { display: "flex", flexDirection: "row", flexWrap: n === !0 || n === "wrap" ? "wrap" : "nowrap", gap: Number(a) * 4, justifyContent: m, alignItems: p, flex: o, ...he(s), ...d }, children: t });
}
function Yi({ children: t, gap: a = 2, justify: i = "start", align: r = "stretch", flex: n, className: o = "", style: s }) {
  const d = i === "between" ? "space-between" : i === "end" ? "flex-end" : i === "center" ? "center" : "flex-start", m = r === "start" ? "flex-start" : r === "end" ? "flex-end" : r === "center" ? "center" : "stretch";
  return /* @__PURE__ */ e("div", { className: o, style: { display: "flex", flexDirection: "column", gap: Number(a) * 4, justifyContent: d, alignItems: m, flex: n, minWidth: 0, ...he(o), ...s }, children: t });
}
function Ji({ children: t, background: a = "transparent", radius: i = "md", padding: r = 0, border: n = !1, flex: o, width: s, height: d, overflow: m, align: p, justify: u, className: c = "", style: b }) {
  const y = {
    "surface-secondary": "#f1f5f9",
    "green-100": "#dcfce7",
    "success-subtle": "#dcfce7",
    "blue-100": "#dbeafe",
    "info-subtle": "#dbeafe",
    "amber-100": "#fef3c7",
    "warning-subtle": "#fef3c7",
    "red-100": "#fee2e2",
    "error-subtle": "#fee2e2",
    transparent: "transparent"
  }, k = { none: 0, sm: 6, md: 8, lg: 12, full: 9999 }, V = (h) => typeof h == "number" ? `${h}px` : h;
  return /* @__PURE__ */ e("div", { className: c, style: { display: "flex", alignItems: p === "start" ? "flex-start" : p === "end" ? "flex-end" : "center", justifyContent: u === "start" ? "flex-start" : u === "end" ? "flex-end" : u === "between" ? "space-between" : "center", background: y[a] || a, borderRadius: k[i], padding: Number(r) * 4, border: n ? `1px solid ${typeof n == "string" ? n : U.border}` : void 0, flex: o, width: V(s), height: V(d), overflow: m, boxSizing: "border-box", ...he(c), ...b }, children: t });
}
function Ki({ value: t, size: a = "md", weight: i = "bold", color: r, className: n = "" }) {
  const o = { sm: 14, md: 16, lg: 18, xl: 20, "2xl": 26 }, s = { normal: 400, medium: 500, semibold: 600, bold: 700 };
  return /* @__PURE__ */ e("h3", { className: n, style: { margin: 0, fontSize: o[a] || 16, lineHeight: 1.2, letterSpacing: "-0.02em", fontWeight: s[i] || 700, color: nt(r), ...he(n) }, children: t });
}
function Qi({ value: t, size: a = "sm", weight: i = "normal", color: r = "prose", className: n = "" }) {
  const o = { xs: 11, sm: 12, md: 14, lg: 16 }, s = { normal: 400, medium: 500, semibold: 600, bold: 700 };
  return /* @__PURE__ */ e("p", { className: n, style: { margin: 0, fontSize: o[a] || 12, lineHeight: 1.35, fontWeight: s[i] || 400, color: nt(r), ...he(n) }, children: t });
}
function er({ value: t, maxLines: a, color: i = "secondary", className: r = "" }) {
  return /* @__PURE__ */ e("span", { className: r, style: { display: a ? "-webkit-box" : void 0, WebkitBoxOrient: a ? "vertical" : void 0, WebkitLineClamp: a, overflow: a ? "hidden" : void 0, fontSize: 11, lineHeight: 1.35, color: nt(i), ...he(r) }, children: t });
}
function nt(t) {
  return !t || t === "prose" ? U.foreground : t === "secondary" || t === "tertiary" ? U.muted : t === "success" ? "#15803d" : t === "warning" ? "#b45309" : t === "destructive" ? "#b91c1c" : t === "info" ? "#0369a1" : t === "white" || t === "white-80" ? t === "white" ? "#ffffff" : "rgba(255,255,255,.8)" : t === "currentColor" ? "currentColor" : t;
}
function he(t = "") {
  const a = {}, i = new Set(t.split(/\s+/).filter(Boolean));
  return i.has("text-white") && (a.color = "#ffffff"), i.has("text-zinc-400") && (a.color = "#a1a1aa"), i.has("text-center") && (a.textAlign = "center"), i.has("font-medium") && (a.fontWeight = 500), i.has("font-semibold") && (a.fontWeight = 600), i.has("font-bold") && (a.fontWeight = 700), i.has("bg-white/10") && (a.background = "rgba(255,255,255,.1)"), i.has("border-white/20") && (a.borderColor = "rgba(255,255,255,.2)"), i.has("border-zinc-800") && (a.borderColor = "#27272a"), i.has("border-blue-700") && (a.borderColor = "#1d4ed8"), i.has("border-blue-400") && (a.borderColor = "#60a5fa"), i.has("border-blue-400/30") && (a.background = "rgba(96,165,250,.3)"), a;
}
function tr({ label: t, color: a = "default", className: i = "" }) {
  const r = {
    success: ["#dcfce7", "#166534"],
    warning: ["#fef3c7", "#92400e"],
    info: ["#dbeafe", "#1e40af"],
    destructive: ["#fee2e2", "#991b1b"],
    default: ["#f1f5f9", "#475569"],
    neutral: ["#f1f5f9", "#475569"]
  }, n = r[a] || r.default;
  return /* @__PURE__ */ e("span", { className: i, style: { display: "inline-flex", alignItems: "center", borderRadius: 9999, padding: "2px 8px", fontSize: 10, fontWeight: 600, background: n[0], color: n[1], whiteSpace: "nowrap" }, children: t });
}
function ar({ flush: t = !1, className: a = "" }) {
  return /* @__PURE__ */ e("div", { className: a, role: "separator", style: { height: 1, background: U.border, margin: t ? "10px -16px" : "10px 0", ...he(a) } });
}
const ir = {
  package: ve,
  box: ve,
  check: Wa,
  "check-circle": Ba,
  calendar: it,
  "shopping-bag": ve,
  "shopping-cart": wt,
  cart: wt,
  "alert-circle": Yt,
  alert: Yt,
  "map-pin": xt,
  location: xt,
  star: St,
  "credit-card": $a,
  file: Zt,
  "file-text": Zt,
  "external-link": Ua,
  "chevron-right": ma,
  sparkles: Fa,
  chart: vt,
  "bar-chart": vt,
  wifi: ya,
  coffee: ja,
  globe: ga,
  tag: Tt,
  sun: ba
}, rr = {
  clock: "◷",
  time: "◷",
  truck: "🚚",
  delivery: "🚚",
  user: "●",
  mail: "✉",
  phone: "☎",
  info: "i",
  shield: "◆",
  "arrow-right": "→",
  plane: "✈",
  heart: "♥",
  gift: "◆",
  building: "▦",
  dollar: "$",
  bell: "●",
  circle: "○",
  hotel: "▰",
  bed: "▰",
  utensils: "●"
};
function At({ name: t = "package", size: a = "sm", color: i = "currentColor", className: r = "" }) {
  const n = String(t).toLowerCase().replace(/_/g, "-"), o = ir[n], s = a === "xs" ? 12 : a === "lg" ? 20 : a === "md" ? 16 : 14, d = rr[n];
  return /* @__PURE__ */ e("span", { style: { display: "inline-flex", alignItems: "center", justifyContent: "center", width: s, height: s, color: nt(i), flexShrink: 0, fontSize: s, lineHeight: 1 }, children: o ? /* @__PURE__ */ e(o, { size: s, className: r }) : d || /* @__PURE__ */ e(Tt, { size: s, className: r }) });
}
function nr({ label: t, variant: a = "primary", size: i = "sm", action: r, href: n, target: o = "_blank", onClick: s, disabled: d = !1, flex: m, className: p = "", style: u }) {
  const c = {
    primary: { background: U.accent, color: "#fff", border: "1px solid transparent" },
    secondary: { background: "#f1f5f9", color: U.foreground, border: "1px solid transparent" },
    outline: { background: "transparent", color: U.foreground, border: `1px solid ${U.border}` },
    ghost: { background: "transparent", color: U.foreground, border: "1px solid transparent" }
  };
  return /* @__PURE__ */ e("button", { type: "button", disabled: d, "data-widget-action": r, onClick: () => {
    s == null || s(), n && typeof window < "u" && window.open(n, o || "_blank", "noopener,noreferrer");
  }, className: p, style: { width: m ? void 0 : "100%", flex: m, borderRadius: 8, padding: i === "xs" ? "5px 10px" : i === "md" ? "9px 16px" : "7px 12px", fontSize: 12, fontWeight: 600, cursor: d ? "not-allowed" : "pointer", opacity: d ? 0.5 : 1, ...c[a], ...he(p), ...u }, children: t });
}
function or({ src: t, alt: a = "", width: i = "100%", height: r = 140, radius: n = "md", className: o = "", style: s }) {
  const d = { none: 0, sm: 6, md: 8, lg: 12, full: 9999 }, m = (p) => typeof p == "number" ? `${p}px` : p;
  return t ? /* @__PURE__ */ e("img", { src: t, alt: a, loading: "lazy", referrerPolicy: "no-referrer", className: o, style: { width: m(i), height: m(r), objectFit: "cover", display: "block", borderRadius: d[n], ...s } }) : /* @__PURE__ */ e("div", { className: o, style: { width: m(i), height: m(r), display: "flex", alignItems: "center", justifyContent: "center", borderRadius: d[n], background: "#f1f5f9", color: "#94a3b8", ...s }, children: /* @__PURE__ */ e(ve, { size: 28 }) });
}
function lr({ value: t = 0, max: a = 100, color: i = "primary", className: r = "" }) {
  const n = Math.min(100, Math.max(0, Number(t) / (Number(a) || 100) * 100));
  return /* @__PURE__ */ e("div", { className: r, style: { width: "100%", height: 8, overflow: "hidden", borderRadius: 9999, background: "#e2e8f0" }, children: /* @__PURE__ */ e("div", { style: { width: `${n}%`, height: "100%", borderRadius: 9999, background: i === "success" ? "#22c55e" : i === "warning" ? "#f59e0b" : i === "destructive" ? "#ef4444" : U.accent } }) });
}
function sr({ value: t, max: a = 5, className: i = "" }) {
  return t == null || !Number.isFinite(Number(t)) ? null : /* @__PURE__ */ e("div", { className: i, style: { display: "flex", gap: 3 }, children: Array.from({ length: Number(a) }).map((r, n) => /* @__PURE__ */ e("span", { style: { color: n < Math.round(Number(t)) ? "#f59e0b" : "#cbd5e1" }, children: /* @__PURE__ */ e(St, { size: 13 }) }, n)) });
}
function cr({ src: t, name: a, size: i = "md", className: r = "" }) {
  const n = i === "sm" ? 24 : i === "lg" ? 40 : 32, o = a ? a.split(" ").map((s) => s[0]).slice(0, 2).join("").toUpperCase() : "?";
  return /* @__PURE__ */ e("div", { className: r, style: { width: n, height: n, borderRadius: 9999, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, background: "#e2e8f0", color: "#334155", fontSize: 11, fontWeight: 700 }, children: t ? /* @__PURE__ */ e("img", { src: t, alt: a || "Avatar", style: { width: "100%", height: "100%", objectFit: "cover" } }) : o });
}
function dr({ label: t, placeholder: a, value: i, name: r, onInput: n, options: o, type: s = "text", rows: d = 3, className: m = "" }) {
  const p = { width: "100%", boxSizing: "border-box", border: `1px solid ${U.border}`, borderRadius: 8, padding: "7px 10px", background: U.surface, color: U.foreground, fontSize: 12, outline: "none" };
  return /* @__PURE__ */ e("label", { className: m, style: { display: "flex", flexDirection: "column", width: "100%", gap: 4, color: U.muted, fontSize: 11, fontWeight: 600 }, children: [
    t,
    Array.isArray(o) && o.every((u) => typeof u == "string") ? /* @__PURE__ */ e("select", { name: r, onInput: n, defaultValue: "", style: p, children: [
      /* @__PURE__ */ e("option", { value: "", disabled: !0, children: "Odaberite" }),
      o.map((u) => /* @__PURE__ */ e("option", { value: u, children: u }, u))
    ] }) : s === "textarea" ? /* @__PURE__ */ e("textarea", { name: r, onInput: n, defaultValue: i, placeholder: a, rows: d, style: { ...p, resize: "vertical" } }) : /* @__PURE__ */ e("input", { name: r, onInput: n, type: s, defaultValue: i, placeholder: a, style: p })
  ] });
}
function pr({ bars: t = [], height: a = 115, className: i = "" }) {
  const r = t.map((o) => Number(o.value || 0)), n = Math.max(...r, 1);
  return /* @__PURE__ */ e("div", { className: i, style: { display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 6, width: "100%", height: a }, children: t.map((o, s) => {
    const d = o.height ?? o.h, m = d !== void 0 ? typeof d == "number" ? `${d}px` : d : `${Math.max(8, Number(o.value || 0) / n * Math.max(40, Number(a) - 24))}px`;
    return /* @__PURE__ */ e("div", { style: { display: "flex", flex: 1, height: "100%", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", gap: 6 }, children: [
      /* @__PURE__ */ e("div", { title: o.label || o.day, style: { width: "100%", minHeight: 6, height: m, borderRadius: 6, background: U.accent } }),
      /* @__PURE__ */ e("span", { style: { color: U.muted, fontSize: 10, fontWeight: 600 }, children: o.label || o.day })
    ] }, o.id ?? s);
  }) });
}
function ur({ items: t = [], className: a = "" }) {
  return /* @__PURE__ */ e("div", { className: a, style: { display: "flex", flexDirection: "column", width: "100%" }, children: t.map((i, r) => {
    const n = !!(i.complete || i.completed), o = !!i.current;
    return /* @__PURE__ */ e("div", { style: { display: "flex", alignItems: "stretch", gap: 10 }, children: [
      /* @__PURE__ */ e("div", { style: { display: "flex", flexDirection: "column", alignItems: "center" }, children: [
        /* @__PURE__ */ e("div", { style: { width: 24, height: 24, borderRadius: 9999, display: "flex", alignItems: "center", justifyContent: "center", background: n ? "#dcfce7" : o ? "#e0f2fe" : "#f1f5f9", color: n ? "#166534" : o ? "#0369a1" : "#94a3b8" }, children: /* @__PURE__ */ e(At, { name: i.icon || (n ? "check" : o ? "clock" : "circle"), size: "xs" }) }),
        r < t.length - 1 ? /* @__PURE__ */ e("div", { style: { width: 2, minHeight: 18, flex: 1, margin: "2px 0", background: n ? "#86efac" : "#e2e8f0" } }) : null
      ] }),
      /* @__PURE__ */ e("div", { style: { flex: 1, minWidth: 0, paddingBottom: r < t.length - 1 ? 12 : 2 }, children: [
        /* @__PURE__ */ e("div", { style: { color: U.foreground, fontSize: 12, lineHeight: 1.3, fontWeight: o ? 700 : 500 }, children: i.label }),
        i.detail ? /* @__PURE__ */ e("div", { style: { color: U.muted, fontSize: 11, marginTop: 2 }, children: i.detail }) : null
      ] })
    ] }, i.id ?? r);
  }) });
}
const fr = { Card: Xi, Row: Zi, Col: Yi, Box: Ji, Title: Ki, Text: Qi, Caption: er, Badge: tr, Divider: ar, Icon: At, Button: nr, Image: or, ProgressBar: lr, Rating: sr, Avatar: cr, Input: dr, BarChart: pr, Timeline: ur };
function mr({ template: t, data: a = {}, onAction: i, onInputChange: r, showErrorDetails: n = !0, apiUrl: o }) {
  const [s, d] = T(null), [m, p] = T(null), [u, c] = T(0), b = !!t.trim();
  if (_e(() => {
    if (!b) return;
    let y = !0;
    return p(null), qi(o).then((k) => {
      y && d(() => k);
    }).catch((k) => {
      y && p(k instanceof Error ? k : new Error("JSX parser is unavailable"));
    }), () => {
      y = !1;
    };
  }, [o, u, b]), !b) return /* @__PURE__ */ e("div", { className: "dynamic-jsx-widget pitaj-inline-widget-card" });
  if (m)
    return /* @__PURE__ */ e("div", { role: "alert", className: "pitaj-inline-widget-card", children: [
      "Widget se ne može prikazati. ",
      /* @__PURE__ */ e("button", { type: "button", onClick: () => c((y) => y + 1), children: "Pokušaj ponovo" })
    ] });
  if (!s)
    return /* @__PURE__ */ e("div", { className: "pitaj-lazy-loading", role: "status", children: [
      /* @__PURE__ */ e("span", { className: "pitaj-typing-dot" }),
      /* @__PURE__ */ e("span", { className: "pitaj-typing-dot" }),
      /* @__PURE__ */ e("span", { className: "pitaj-typing-dot" })
    ] });
  try {
    const y = hr(t, a, { onAction: i, onInputChange: r }, s), k = /<Card\b/.test(t);
    return /* @__PURE__ */ e("div", { className: `dynamic-jsx-widget ${k ? "" : "pitaj-inline-widget-card"}`.trim(), children: y });
  } catch (y) {
    return /* @__PURE__ */ e("div", { className: "pitaj-inline-widget-card", style: { borderColor: "#fecaca", background: "#fff7f7", color: "#991b1b", fontSize: 12, lineHeight: 1.4 }, children: [
      /* @__PURE__ */ e("strong", { style: { display: "block", marginBottom: 4 }, children: "Widget se ne može prikazati" }),
      n ? /* @__PURE__ */ e("span", { children: y instanceof Error ? y.message : "Neispravan JSX template." }) : null
    ] });
  }
}
function hr(t, a, i, r) {
  if (!t.trim()) return null;
  const o = r(`<>${t.trim()}</>`, { sourceType: "module", plugins: ["jsx", "typescript"] }).program.body[0];
  if (!o || o.type !== "ExpressionStatement") throw new Error("Template mora biti JSX izraz.");
  return D(o.expression, a, i);
}
function D(t, a, i) {
  var r, n;
  if (!t) return null;
  switch (t.type) {
    case "JSXElement": {
      const o = jr(t.openingElement.name), s = fr[o];
      if (!s) throw new Error(`Komponenta <${o}> nije podržana.`);
      const d = {};
      for (const p of t.openingElement.attributes)
        if (p.type === "JSXAttribute" && (d[p.name.name] = gr(p.value, a, i)), p.type === "JSXSpreadAttribute") {
          const u = D(p.argument, a, i);
          u && typeof u == "object" && Object.assign(d, u);
        }
      if (o === "Input" && typeof d.name == "string" && /^[a-zA-Z][a-zA-Z0-9_]{0,63}$/.test(d.name)) {
        const p = d.name;
        d.onInput = (u) => {
          var c;
          return (c = i.onInputChange) == null ? void 0 : c.call(i, p, u.currentTarget.value);
        };
      }
      if (o === "Button" && d.action && i.onAction) {
        const p = d.onClick;
        d.onClick = () => {
          var u;
          p == null || p(), (u = i.onAction) == null || u.call(i, String(d.action));
        };
      }
      const m = fa(t.children, a, i);
      return Xt(s, d, ...m);
    }
    case "JSXFragment":
      return Xt(rt, null, ...fa(t.children, a, i));
    case "JSXText":
      return t.value.trim() ? t.value.replace(/\s+/g, " ") : null;
    case "JSXExpressionContainer":
      return t.expression.type === "JSXEmptyExpression" ? null : D(t.expression, a, i);
    case "Identifier":
      return t.name === "undefined" ? void 0 : a[t.name];
    case "StringLiteral":
    case "NumericLiteral":
    case "BooleanLiteral":
      return t.value;
    case "NullLiteral":
      return null;
    case "TemplateLiteral":
      return t.quasis.reduce((o, s, d) => o + s.value.cooked + (t.expressions[d] ? String(D(t.expressions[d], a, i) ?? "") : ""), "");
    case "MemberExpression": {
      const o = D(t.object, a, i);
      if (o == null) return;
      const s = t.computed ? D(t.property, a, i) : t.property.name;
      if (s === "__proto__" || s === "prototype" || s === "constructor") throw new Error("Nedozvoljen pristup podatku.");
      return o[s];
    }
    case "ObjectExpression": {
      const o = {};
      for (const s of t.properties) {
        if (s.type !== "ObjectProperty") continue;
        const d = s.key.type === "Identifier" && !s.computed ? s.key.name : D(s.key, a, i);
        o[d] = D(s.value, a, i);
      }
      return o;
    }
    case "ArrayExpression":
      return t.elements.map((o) => D(o, a, i));
    case "ConditionalExpression":
      return D(t.test, a, i) ? D(t.consequent, a, i) : D(t.alternate, a, i);
    case "LogicalExpression": {
      const o = D(t.left, a, i);
      return t.operator === "&&" ? o && D(t.right, a, i) : t.operator === "||" ? o || D(t.right, a, i) : t.operator === "??" ? o ?? D(t.right, a, i) : null;
    }
    case "BinaryExpression":
      return br(t.operator, D(t.left, a, i), D(t.right, a, i));
    case "UnaryExpression": {
      const o = D(t.argument, a, i);
      return t.operator === "!" ? !o : t.operator === "-" ? -o : t.operator === "+" ? +o : o;
    }
    case "CallExpression": {
      if (t.callee.type !== "MemberExpression" || t.callee.computed || t.callee.property.name !== "map") throw new Error("Dozvoljeno je samo mapiranje nizova.");
      const o = D(t.callee.object, a, i);
      if (!Array.isArray(o)) return [];
      const s = t.arguments[0];
      if (!s || s.type !== "ArrowFunctionExpression") throw new Error("Neispravna map funkcija.");
      const d = ((r = s.params[0]) == null ? void 0 : r.name) || "item", m = ((n = s.params[1]) == null ? void 0 : n.name) || "index";
      return o.map((p, u) => D(s.body, { ...a, [d]: p, [m]: u }, i));
    }
    case "ParenthesizedExpression":
      return D(t.expression, a, i);
    default:
      throw new Error(`Izraz ${t.type} nije podržan.`);
  }
}
function br(t, a, i) {
  switch (t) {
    case "+":
      return a + i;
    case "-":
      return a - i;
    case "*":
      return a * i;
    case "/":
      return a / i;
    case "%":
      return a % i;
    case "===":
      return a === i;
    case "!==":
      return a !== i;
    case "==":
      return a == i;
    case "!=":
      return a != i;
    case "<":
      return a < i;
    case ">":
      return a > i;
    case "<=":
      return a <= i;
    case ">=":
      return a >= i;
    default:
      throw new Error(`Operator ${t} nije podržan.`);
  }
}
function gr(t, a, i) {
  return t ? t.type === "StringLiteral" ? t.value : t.type === "JSXExpressionContainer" ? D(t.expression, a, i) : null : !0;
}
function fa(t, a, i) {
  const r = [];
  for (const n of t) {
    const o = D(n, a, i);
    o == null || o === !1 || (Array.isArray(o) ? r.push(...o) : r.push(o));
  }
  return r;
}
function jr(t) {
  if (t.type === "JSXIdentifier") return t.name;
  throw new Error("Podržane su samo direktne DSL komponente.");
}
function _t(t) {
  return (t || "").replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]/gu, "").trim();
}
function yr(t) {
  const a = _t(t).toLowerCase();
  return a.includes("wi-fi") || a.includes("wifi") || a.includes("internet") ? ya : a.includes("doručak") || a.includes("dorucak") || a.includes("kafa") || a.includes("coffee") ? ja : a.includes("restoran") || a.includes("hrana") || a.includes("dining") ? Va : a.includes("parking") || a.includes("garaža") || a.includes("garaza") || a.includes("auto") ? qa : a.includes("spa") || a.includes("bazen") || a.includes("wellness") ? Xa : a.includes("klima") || a.includes("hlađenje") || a.includes("hladjenje") ? Za : a.includes("teretana") || a.includes("fitness") || a.includes("gym") ? Ya : Tt;
}
function Or({ widget: t, onAction: a, apiUrl: i, companyId: r, preview: n, conversationId: o, onApiError: s, onWorkflowState: d, onProductEvent: m, language: p }) {
  const u = t.type || "custom_html", c = t.config || {}, [b, y] = T("idle"), [k, V] = T(!1), [h, w] = T("idle"), [_, S] = T(null), [N, P] = T(null), [L, de] = T(null), [De, ee] = T(() => Date.now()), [be, v] = T(null), E = JSON.stringify([r, o, t.id, c.function_revision, n]), W = le(0), te = le(E), K = te.current === E ? h : "idle", ot = te.current === E ? _ : null, Ve = (L == null ? void 0 : L.identity) === E ? Math.max(0, Math.ceil((L.until - De) / 1e3)) : 0, xe = le(/* @__PURE__ */ Object.create(null)), we = le(!1), Se = le(null), M = le(null), [Te, F] = T("idle"), [ke, z] = T(null), se = le(d);
  se.current = d;
  const ge = le(s);
  ge.current = s;
  const C = t.workflow;
  _e(() => (W.current++, te.current = E, we.current = !1, v(null), w("idle"), P(null), de(null), S(null), V(!1), xe.current = /* @__PURE__ */ Object.create(null), () => {
    W.current++;
  }), [E]), _e(() => {
    if (!L || L.identity !== E) return;
    const H = () => {
      const A = Date.now();
      ee(A), A >= L.until && de((ae) => ae === L ? null : ae);
    };
    H();
    const R = window.setInterval(H, 1e3);
    return () => window.clearInterval(R);
  }, [L, E]);
  const je = async () => {
    var H, R;
    if (!(!C || !r || n)) {
      F("loading");
      try {
        const A = await Ha(r, C.run_id, i, C.display_node_id);
        z(Ga(A, C, t.id)), F("ready"), (H = se.current) == null || H.call(se, A);
      } catch (A) {
        z(null), F("error"), (R = ge.current) == null || R.call(ge, A);
      }
    }
  };
  _e(() => {
    C && !n && je();
  }, [r, i, n, t.id, C == null ? void 0 : C.run_id, C == null ? void 0 : C.display_node_id, C == null ? void 0 : C.form_revision]);
  const Ae = async (H) => {
    if (b === "sending" || b === "success") return;
    if (n || !r || !t.id || !o || !/^\d+$/.test(o)) {
      y("error");
      return;
    }
    if (C && !ke) {
      y("error");
      return;
    }
    const R = JSON.stringify(H);
    (!Se.current || M.current !== R) && (Se.current = crypto.randomUUID(), M.current = R), y("sending");
    try {
      const A = (i || window.location.origin).replace(/\/$/, ""), ae = await at(r, i), $ = await fetch(`${A}/api/widget/${encodeURIComponent(r)}/v2/inline-widgets/${t.id}/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json", Authorization: `Bearer ${ae}` },
        body: JSON.stringify({
          submission_uuid: Se.current,
          conversation_id: Number(o),
          payload: H,
          ...C ? { workflow_run_id: C.run_id, workflow_wait_node: ke, form_revision: C.form_revision } : {}
        })
      });
      $.ok || await ha($, "Zahtjev nije potvrđen."), y("success"), C && je();
    } catch (A) {
      A instanceof Fe && A.code === "FORM_REVISION_MISMATCH" ? (z(null), y("changed")) : (y("error"), s == null || s(A));
    }
  }, qe = () => {
    const H = !n && (c.jsx_template || u === "dynamic_jsx" || u === "ai_builder") ? Wi(c) : null;
    if (H)
      return /* @__PURE__ */ e("div", { role: "status", className: "pitaj-inline-widget-card", children: H });
    if (Bi(c, !!n))
      return /* @__PURE__ */ e("div", { role: "status", className: "pitaj-inline-widget-card", children: "Podaci trenutno nisu dostupni." });
    if (c.jsx_template || u === "dynamic_jsx" || u === "ai_builder")
      return /* @__PURE__ */ e(
        mr,
        {
          apiUrl: i,
          template: c.jsx_template || "",
          showErrorDetails: !!n,
          data: {
            ...$i(c, (be == null ? void 0 : be.identity) === E ? be.data : {}, !!n),
            ...Array.isArray(c.function_names) && c.function_names.length > 0 ? { function_state: { phase: K, function_id: ot } } : {}
          },
          onInputChange: (R, A) => {
            xe.current[R] !== A && (W.current++, we.current = !1, te.current = E, v(null), w("idle"), P(null), S(null)), xe.current[R] = A;
          },
          onAction: (R) => {
            if (Mi(R, c)) {
              const A = Fi(R, c);
              if (!A || n || !r || !t.id || !o) {
                V(!0);
                return;
              }
              if (we.current || (L == null ? void 0 : L.identity) === E && Date.now() < L.until) return;
              we.current = !0;
              const ae = ++W.current;
              te.current = E, v(null), P(null), S(A), V(!1), w("loading"), Hi(r, t.id, A, o, i, Ui(A, c, xe.current)).then(($) => {
                ae === W.current && (v({ identity: E, data: $ }), w("success"));
              }).catch(($) => {
                if (ae !== W.current) return;
                const ye = $ instanceof Jt ? "rate_limit" : $ instanceof Fe ? "api" : "other", Ee = Li(ye, $ instanceof Fe ? $.code : void 0, $ instanceof Fe ? $.status : void 0);
                if (P(Ee), w("error"), $ instanceof Jt) {
                  const Ne = Date.now();
                  ee(Ne), de({ identity: E, until: Pi(Ne, $.retryAfterSeconds) });
                }
                $ instanceof Fe && ["WIDGET_SESSION_INVALID", "WIDGET_SESSION_REQUIRED", "COUNTRY_BLOCKED", "WIDGET_FORMS_DISABLED"].includes($.code || "") && (s == null || s($));
              }).finally(() => {
                ae === W.current && (we.current = !1);
              });
              return;
            }
            V(!1), a == null || a(R);
          }
        }
      );
    switch (u) {
      case "action_client":
        return /* @__PURE__ */ e("div", { role: "status", className: "pitaj-inline-widget-card", children: c.client_action_state === "pending" ? "Čekamo odgovor aplikacije…" : c.client_action_state === "success" ? "Aplikacija je prijavila uspjeh." : c.client_action_state === "failed" ? "Aplikacija je prijavila neuspjeh." : c.client_action_state === "timeout" ? "Aplikacija nije odgovorila na vrijeme. Ishod nije poznat." : "Akcija je zatražena. Rezultat nije potvrđen." });
      case "action_link":
        try {
          const R = new URL(String(c.url || ""));
          if (R.protocol !== "https:" || R.username || R.password || typeof c.label != "string" || !c.label.trim()) throw new Error("Invalid link");
          return /* @__PURE__ */ e("a", { className: "pitaj-widget-btn-primary", href: R.href, target: "_blank", rel: "noopener noreferrer", style: { display: "inline-block", textAlign: "center", textDecoration: "none" }, children: c.label });
        } catch {
          return /* @__PURE__ */ e("div", { role: "status", children: "Link trenutno nije dostupan." });
        }
      case "booking":
      case "calendar":
      case "calendly":
      case "cal":
        return c.source === "calendar" ? /* @__PURE__ */ e(Ja, { config: c, widgetId: t.id ?? 0, companyId: r, apiUrl: i, preview: n }) : /* @__PURE__ */ e(Ar, { config: c });
      case "api":
      case "api_widget":
        return /* @__PURE__ */ e(Er, { config: c });
      case "order_status":
      case "order_tracking":
      case "shopify_order":
        return /* @__PURE__ */ e(Cr, { config: c });
      case "manual_list":
        return /* @__PURE__ */ e(Ii, { config: c, onAction: a, language: p });
      case "catalog_view":
        return /* @__PURE__ */ e(Ai, { config: n ? { ...c, preview: !0 } : c, onAction: a, onProductEvent: m, language: p });
      case "ticket_status":
        return /* @__PURE__ */ e(zr, { config: c });
      case "book_demo":
        return /* @__PURE__ */ e(vr, { config: c, onSubmit: Ae });
      case "products":
        return /* @__PURE__ */ e(Di, { config: n ? { ...c, preview: !0 } : c, onAction: a, onProductEvent: m, language: p });
      case "cart":
        return /* @__PURE__ */ e(xr, { config: c, onAction: a });
      case "usage_chart":
        return !n && (c.metric_value == null || !Array.isArray(c.chart_data) || c.chart_data.length === 0) ? /* @__PURE__ */ e("div", { role: "status", children: "Podaci o potrošnji trenutno nisu dostupni." }) : /* @__PURE__ */ e(wr, { config: c });
      case "upcoming_classes":
        return !n && (!Array.isArray(c.classes) || c.classes.length === 0) ? /* @__PURE__ */ e("div", { role: "status", children: "Trenutno nema dostupnih termina." }) : /* @__PURE__ */ e(kr, { config: c, onAction: a });
      case "hotel_booking":
        return !n && (!c.name || !c.price || !c.location) ? /* @__PURE__ */ e("div", { role: "status", children: "Podaci o smještaju trenutno nisu dostupni." }) : /* @__PURE__ */ e(Nr, { config: c, onSubmit: Ae });
      case "contact":
        return /* @__PURE__ */ e(_r, { config: c, onSubmit: Ae });
      case "weather":
        return !n && (!c.city || c.temp == null || !c.condition) ? /* @__PURE__ */ e("div", { role: "status", children: "Podaci o vremenu trenutno nisu dostupni." }) : /* @__PURE__ */ e(Sr, { config: c });
      case "custom_iframe":
        return /* @__PURE__ */ e(Tr, { config: c, title: t.name });
      case "custom_html":
      default:
        return !n && !c.html ? null : /* @__PURE__ */ e(Ir, { config: c, onAction: a });
    }
  };
  return /* @__PURE__ */ e(rt, { children: [
    /* @__PURE__ */ e("style", { children: Gi }),
    b === "success" ? /* @__PURE__ */ e("div", { role: "status", children: "Vaš zahtjev je zaprimljen." }) : /* @__PURE__ */ e("fieldset", { disabled: b === "sending" || K === "loading" || !!(C && ["book_demo", "contact", "hotel_booking"].includes(u) && !ke), style: { border: 0, padding: 0, margin: 0, minWidth: 0 }, children: qe() }),
    b === "sending" && /* @__PURE__ */ e("div", { role: "status", children: "Slanje zahtjeva..." }),
    b === "error" && /* @__PURE__ */ e("div", { role: "alert", children: "Zahtjev nije potvrđen. Provjerite vezu i pokušajte ponovo." }),
    b === "changed" && /* @__PURE__ */ e("div", { role: "alert", children: [
      "Forma je promijenjena. Osvježite je i provjerite podatke prije slanja. ",
      /* @__PURE__ */ e("button", { type: "button", onClick: () => {
        y("idle"), je();
      }, children: "Osvježi formu" })
    ] }),
    k && /* @__PURE__ */ e("div", { role: "alert", children: "Ova funkcija trenutno nije povezana. Pokušajte ponovo kasnije." }),
    K === "loading" && /* @__PURE__ */ e("div", { role: "status", children: "Učitavanje podataka..." }),
    K === "success" && /* @__PURE__ */ e("div", { role: "status", children: "Podaci su ažurirani." }),
    Ve > 0 ? /* @__PURE__ */ e("div", { role: "status", children: [
      "Previše poziva. Pokušajte za ",
      Ve,
      "s."
    ] }) : K === "error" && /* @__PURE__ */ e("div", { role: "alert", children: N === "input" ? "Odaberite dozvoljene vrijednosti i pokušajte ponovo." : N === "unavailable" ? "Ova funkcija trenutno nije dostupna." : N === "rate_limit" ? "Možete ponovo pokušati poziv funkcije." : "Podatke nije moguće učitati. Pokušajte ponovo." }),
    C && Te === "loading" && /* @__PURE__ */ e("div", { role: "status", children: "Provjeravamo sljedeći korak..." }),
    C && Te === "error" && /* @__PURE__ */ e("div", { role: "alert", children: [
      "Nije moguće provjeriti korak. ",
      /* @__PURE__ */ e("button", { type: "button", onClick: () => void je(), children: "Pokušaj ponovo" })
    ] }),
    C && Te === "ready" && !ke && b !== "success" && ["book_demo", "contact", "hotel_booking"].includes(u) && /* @__PURE__ */ e("div", { role: "status", children: "Ova forma nije aktivna u trenutnom koraku procedure." })
  ] });
}
function Et({
  fields: t,
  values: a,
  onChange: i
}) {
  return /* @__PURE__ */ e(rt, { children: t.map((r, n) => {
    const o = a[r.key] ?? (r.type === "checkbox" ? !1 : ""), s = r.key || `field_${n}`;
    if (r.type === "textarea")
      return /* @__PURE__ */ e("div", { className: "pitaj-widget-field", children: [
        /* @__PURE__ */ e("label", { children: [
          r.label,
          " ",
          r.required && /* @__PURE__ */ e("span", { style: { color: "#ef4444" }, children: "*" })
        ] }),
        /* @__PURE__ */ e(
          "textarea",
          {
            required: r.required,
            rows: 3,
            placeholder: r.placeholder || "",
            value: o,
            onInput: (p) => i(s, p.target.value)
          }
        )
      ] }, s);
    if (r.type === "checkbox")
      return /* @__PURE__ */ e("div", { className: "pitaj-widget-checkbox-row", children: [
        /* @__PURE__ */ e(
          "input",
          {
            id: `widget-chk-${s}-${n}`,
            type: "checkbox",
            required: r.required,
            checked: !!o,
            onChange: (p) => i(s, p.target.checked)
          }
        ),
        /* @__PURE__ */ e("label", { htmlFor: `widget-chk-${s}-${n}`, children: [
          r.label,
          " ",
          r.required && /* @__PURE__ */ e("span", { style: { color: "#ef4444" }, children: "*" })
        ] })
      ] }, s);
    if (r.type === "select")
      return /* @__PURE__ */ e("div", { className: "pitaj-widget-field", children: [
        /* @__PURE__ */ e("label", { children: [
          r.label,
          " ",
          r.required && /* @__PURE__ */ e("span", { style: { color: "#ef4444" }, children: "*" })
        ] }),
        /* @__PURE__ */ e(
          "select",
          {
            required: r.required,
            value: o,
            onChange: (p) => i(s, p.target.value),
            children: [
              /* @__PURE__ */ e("option", { value: "", children: r.placeholder || "Odaberite..." }),
              (r.options || []).map((p, u) => /* @__PURE__ */ e("option", { value: p, children: p }, u))
            ]
          }
        )
      ] }, s);
    const d = r.type === "phone" ? "tel" : r.type === "email" ? "email" : r.type === "date" ? "date" : r.type === "number" ? "number" : "text";
    let m;
    if (r.type === "date") {
      const p = s.toLowerCase();
      if (p.includes("out") || p.includes("odjav") || p.includes("end") || p.includes("do")) {
        const u = a.check_in || a.start || a.od;
        u && typeof u == "string" && (m = u);
      }
    }
    return /* @__PURE__ */ e("div", { className: "pitaj-widget-field", children: [
      /* @__PURE__ */ e("label", { children: [
        r.label,
        " ",
        r.required && /* @__PURE__ */ e("span", { style: { color: "#ef4444" }, children: "*" })
      ] }),
      /* @__PURE__ */ e(
        "input",
        {
          type: d,
          required: r.required,
          placeholder: r.placeholder || "",
          min: m,
          value: o,
          onInput: (p) => i(s, p.target.value)
        }
      )
    ] }, s);
  }) });
}
function vr({ config: t, onSubmit: a }) {
  const i = [
    { key: "name", type: "text", label: "Ime i prezime", placeholder: "Petar Petrović", required: !0 },
    { key: "phone", type: "phone", label: "Broj telefona", placeholder: "+387 61 123 456", required: !1 },
    { key: "email", type: "email", label: "Poslovni email", placeholder: "petar@kompanija.ba", required: !0 }
  ], r = Array.isArray(t.fields) && t.fields.length > 0 ? t.fields : i, [n, o] = T({}), s = t.title || "Razgovarajte sa prodajom", d = t.subtitle || "Recite nam više o svojoj kompaniji i stupićemo u kontakt.";
  return /* @__PURE__ */ e("div", { className: "pitaj-inline-widget-card", children: [
    /* @__PURE__ */ e("div", { className: "pitaj-widget-header", children: [
      /* @__PURE__ */ e("div", { className: "pitaj-widget-title", children: s }),
      /* @__PURE__ */ e("div", { className: "pitaj-widget-subtitle", children: d })
    ] }),
    /* @__PURE__ */ e("form", { onSubmit: (u) => {
      u.preventDefault();
      for (const c of r)
        if (c.required) {
          const b = n[c.key];
          if (c.type === "checkbox" && !b || c.type !== "checkbox" && (!b || !String(b).trim())) return;
        }
      a(Object.fromEntries(r.filter((c) => n[c.key] !== void 0).map((c) => [c.key, String(n[c.key])])));
    }, className: "pitaj-widget-form", children: [
      /* @__PURE__ */ e(Et, { fields: r, values: n, onChange: (u, c) => {
        o((b) => ({ ...b, [u]: c }));
      } }),
      /* @__PURE__ */ e("button", { type: "submit", className: "pitaj-widget-btn-primary", children: t.submit_label || "Zakaži razgovor" })
    ] })
  ] });
}
function xr({ config: t, onAction: a }) {
  var s, d, m;
  const i = ((s = t.data) == null ? void 0 : s.items) || ((d = t.data) == null ? void 0 : d.products) || t.items || t.products, r = Array.isArray(i) ? i : [], n = ((m = t.data) == null ? void 0 : m.total) ?? t.total;
  if (r.length === 0) return /* @__PURE__ */ e("div", { role: "status", children: "Podaci o korpi trenutno nisu dostupni." });
  const o = () => {
    var p, u;
    if ((p = t.data) != null && p.checkoutUrl || t.checkoutUrl) {
      window.open(((u = t.data) == null ? void 0 : u.checkoutUrl) || t.checkoutUrl, "_blank", "noopener,noreferrer");
      return;
    }
    a == null || a(`Želim dovršiti narudžbu iz korpe${n != null ? ` (Ukupno: ${n})` : ""}`);
  };
  return /* @__PURE__ */ e("div", { className: "pitaj-inline-widget-card cart-widget", children: [
    /* @__PURE__ */ e("div", { className: "pitaj-widget-bar", children: [
      /* @__PURE__ */ e("span", { className: "pitaj-widget-badge-icon", children: /* @__PURE__ */ e(wt, { size: 14 }) }),
      /* @__PURE__ */ e("span", { className: "pitaj-widget-bar-title", children: [
        r.length,
        " stavke u korpi"
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "pitaj-cart-items-list", children: r.map((p, u) => {
      const c = p.image || p.image_url || p.imageUrl || p.featured_image || (Array.isArray(p.images) ? p.images[0] : "");
      return /* @__PURE__ */ e("div", { className: "pitaj-cart-item-row", children: [
        c ? /* @__PURE__ */ e(
          "img",
          {
            src: c,
            alt: p.name,
            className: "pitaj-cart-thumb",
            loading: "lazy",
            referrerPolicy: "no-referrer",
            onError: (b) => {
              b.currentTarget.style.display = "none";
            }
          }
        ) : /* @__PURE__ */ e("div", { style: "width: 40px; height: 40px; border-radius: 6px; background: #f1f5f9; display: flex; align-items: center; justify-content: center; color: #94a3b8; flex-shrink: 0;", children: /* @__PURE__ */ e(ve, { size: 18 }) }),
        /* @__PURE__ */ e("div", { className: "pitaj-cart-details", children: [
          /* @__PURE__ */ e("div", { className: "pitaj-cart-item-name", children: p.name }),
          /* @__PURE__ */ e("div", { className: "pitaj-cart-item-sub", children: p.subtitle })
        ] }),
        /* @__PURE__ */ e("div", { className: "pitaj-cart-item-price", children: p.price })
      ] }, p.id || u);
    }) }),
    /* @__PURE__ */ e("div", { className: "pitaj-cart-divider" }),
    n != null && /* @__PURE__ */ e("div", { className: "pitaj-cart-summary", children: [
      /* @__PURE__ */ e("span", { className: "pitaj-cart-total-label", children: "Ukupno za plaćanje:" }),
      /* @__PURE__ */ e("span", { className: "pitaj-cart-total-val", children: n })
    ] }),
    /* @__PURE__ */ e("button", { type: "button", onClick: o, className: "pitaj-widget-btn-primary", children: "Završi narudžbu" })
  ] });
}
function wr({ config: t }) {
  const a = t.metric_label || "Ukupno potrošeno kredita", i = t.metric_value ?? "2,214", r = [
    { day: "N", val: 75 },
    { day: "P", val: 40 },
    { day: "U", val: 65 },
    { day: "S", val: 85 },
    { day: "Č", val: 25 },
    { day: "P", val: 70 },
    { day: "S", val: 95 }
  ], n = Array.isArray(t.chart_data) && t.chart_data.length > 0 ? t.chart_data : r;
  return /* @__PURE__ */ e("div", { className: "pitaj-inline-widget-card chart-widget", children: [
    /* @__PURE__ */ e("div", { className: "pitaj-widget-bar", children: [
      /* @__PURE__ */ e("span", { className: "pitaj-widget-badge-icon", children: /* @__PURE__ */ e(vt, { size: 14 }) }),
      /* @__PURE__ */ e("span", { className: "pitaj-widget-bar-title", children: t.title || "Potrošnja" })
    ] }),
    /* @__PURE__ */ e("div", { className: "pitaj-chart-body", children: [
      /* @__PURE__ */ e("div", { className: "pitaj-chart-label", children: a }),
      /* @__PURE__ */ e("div", { className: "pitaj-chart-big-number", children: i }),
      /* @__PURE__ */ e("div", { className: "pitaj-bar-chart-container", children: n.map((o, s) => /* @__PURE__ */ e("div", { className: "pitaj-bar-col", children: [
        /* @__PURE__ */ e("div", { className: "pitaj-bar-track", children: /* @__PURE__ */ e(
          "div",
          {
            className: "pitaj-bar-fill",
            style: { height: `${Math.max(10, Math.min(100, o.val))}%` },
            title: `${o.day}: ${o.val}%`
          }
        ) }),
        /* @__PURE__ */ e("span", { className: "pitaj-bar-day", children: o.day })
      ] }, s)) })
    ] })
  ] });
}
function kr({ config: t, onAction: a }) {
  const i = [
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
  ], r = Array.isArray(t.classes) && t.classes.length > 0 ? t.classes : i, n = (o) => {
    a == null || a(`Želim rezervisati termin za: ${o.title} (${o.time})`);
  };
  return /* @__PURE__ */ e("div", { className: "pitaj-inline-widget-card classes-widget", children: [
    /* @__PURE__ */ e("div", { className: "pitaj-widget-bar", children: [
      /* @__PURE__ */ e("span", { className: "pitaj-widget-badge-icon", children: /* @__PURE__ */ e(it, { size: 14 }) }),
      /* @__PURE__ */ e("span", { className: "pitaj-widget-bar-title", children: t.title || "Nadolazeći termini" })
    ] }),
    /* @__PURE__ */ e("div", { className: "pitaj-classes-list", children: r.map((o, s) => {
      const d = o.id ?? s;
      return /* @__PURE__ */ e("div", { className: "pitaj-class-item", children: [
        /* @__PURE__ */ e("img", { src: o.image, alt: o.title, className: "pitaj-class-thumb" }),
        /* @__PURE__ */ e("div", { className: "pitaj-class-info", children: [
          /* @__PURE__ */ e("div", { className: "pitaj-class-header", children: [
            /* @__PURE__ */ e("span", { className: "pitaj-class-title", children: o.title }),
            o.level && /* @__PURE__ */ e("span", { className: `pitaj-level-badge level-${o.levelColor || "green"}`, children: o.level })
          ] }),
          /* @__PURE__ */ e("div", { className: "pitaj-class-time", children: o.time }),
          /* @__PURE__ */ e("div", { className: "pitaj-class-instructor", children: o.instructor })
        ] }),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: () => n(o),
            className: "pitaj-book-btn",
            children: "Pošalji upit"
          }
        )
      ] }, d);
    }) })
  ] });
}
function Nr({ config: t, onSubmit: a }) {
  const [i, r] = T({}), [n, o] = T(!1), s = t.name || "Hotel Dark Moon", d = t.price ?? "220 KM / noć", m = t.location || "Sarajevo, Bosna i Hercegovina", p = t.rating, u = t.image, b = (Array.isArray(t.amenities) ? t.amenities : []).map(_t), y = [
    { key: "check_in", type: "date", label: "Datum dolaska (Check-in)", required: !0 },
    { key: "check_out", type: "date", label: "Datum odjave (Check-out)", required: !0 },
    { key: "guests", type: "select", label: "Broj gostiju", options: ["1 odrasla osoba", "2 odrasle osobe", "3 odrasle osobe", "Porodica (4+)"], required: !0 },
    { key: "name", type: "text", label: "Ime i prezime", placeholder: "Vaše ime", required: !0 },
    { key: "phone", type: "phone", label: "Broj telefona", placeholder: "+387 61 123 456", required: !1 }
  ], k = Array.isArray(t.fields) ? t.fields : y, V = (w, _) => {
    o(!1), r((S) => ({ ...S, [w]: _ }));
  }, h = (w) => {
    if (w.preventDefault(), k.length > 0) {
      for (const S of k)
        if (S.required) {
          const N = i[S.key];
          if (S.type === "checkbox" && !N || S.type !== "checkbox" && (!N || !String(N).trim())) return;
        }
    }
    const _ = { ...i };
    if (_.check_in && _.check_out && _.check_out < _.check_in) {
      o(!0);
      return;
    }
    a(Object.fromEntries(k.filter((S) => _[S.key] !== void 0).map((S) => [S.key, String(_[S.key])])));
  };
  return /* @__PURE__ */ e("div", { className: "pitaj-inline-widget-card hotel-widget", children: [
    /* @__PURE__ */ e("div", { className: "pitaj-hotel-image-wrap", children: [
      u && /* @__PURE__ */ e("img", { src: u, alt: s, className: "pitaj-hotel-img" }),
      /* @__PURE__ */ e("div", { className: "pitaj-hotel-badge-price", children: d })
    ] }),
    /* @__PURE__ */ e("div", { className: "pitaj-hotel-content", children: [
      /* @__PURE__ */ e("div", { className: "pitaj-hotel-title-row", children: /* @__PURE__ */ e("div", { className: "pitaj-hotel-name", children: s }) }),
      /* @__PURE__ */ e("div", { className: "pitaj-hotel-meta", children: [
        /* @__PURE__ */ e("span", { className: "pitaj-meta-item", children: [
          /* @__PURE__ */ e(xt, { size: 12, className: "pitaj-meta-icon" }),
          /* @__PURE__ */ e("span", { children: m })
        ] }),
        p && /* @__PURE__ */ e("span", { className: "pitaj-meta-item pitaj-rating", children: [
          /* @__PURE__ */ e(St, { size: 11, className: "pitaj-star-icon" }),
          /* @__PURE__ */ e("span", { children: p })
        ] })
      ] }),
      b.length > 0 && /* @__PURE__ */ e("div", { className: "pitaj-amenities-row", children: b.map((w, _) => {
        const S = _t(w), N = yr(S);
        return /* @__PURE__ */ e("span", { className: "pitaj-amenity-chip", children: [
          /* @__PURE__ */ e(N, { size: 12, className: "pitaj-amenity-icon" }),
          /* @__PURE__ */ e("span", { children: S })
        ] }, _);
      }) }),
      /* @__PURE__ */ e("form", { onSubmit: h, className: "pitaj-widget-form", children: [
        n && /* @__PURE__ */ e("div", { role: "alert", children: "Datum odjave mora biti nakon datuma dolaska." }),
        k.length > 0 && /* @__PURE__ */ e("div", { className: "pitaj-hotel-booking-section", children: [
          /* @__PURE__ */ e("div", { className: "pitaj-hotel-booking-title", children: "Rezerviši smještaj" }),
          /* @__PURE__ */ e(Et, { fields: k, values: i, onChange: V })
        ] }),
        /* @__PURE__ */ e("button", { type: "submit", className: "pitaj-widget-btn-primary", children: t.submit_label || "Pošalji upit za rezervaciju" })
      ] })
    ] })
  ] });
}
function _r({ config: t, onSubmit: a }) {
  const i = [
    { key: "name", type: "text", label: "Ime i prezime", placeholder: "Vaše ime", required: !0 },
    { key: "email", type: "email", label: "Email adresa", placeholder: "vas.email@example.com", required: !0 },
    { key: "message", type: "textarea", label: "Poruka", placeholder: "Kako vam možemo pomoći?", required: !0 }
  ], r = Array.isArray(t.fields) && t.fields.length > 0 ? t.fields : i, [n, o] = T({}), s = t.title || "Kontaktirajte nas", d = t.subtitle || "Rado ćemo odgovoriti na vaša pitanja";
  return /* @__PURE__ */ e("div", { className: "pitaj-inline-widget-card contact-widget", children: [
    /* @__PURE__ */ e("div", { className: "pitaj-widget-header", children: [
      /* @__PURE__ */ e("div", { className: "pitaj-widget-title", children: s }),
      /* @__PURE__ */ e("div", { className: "pitaj-widget-subtitle", children: d })
    ] }),
    /* @__PURE__ */ e("form", { onSubmit: (u) => {
      u.preventDefault();
      for (const c of r)
        if (c.required) {
          const b = n[c.key];
          if (c.type === "checkbox" && !b || c.type !== "checkbox" && (!b || !String(b).trim())) return;
        }
      a(Object.fromEntries(r.filter((c) => n[c.key] !== void 0).map((c) => [c.key, String(n[c.key])])));
    }, className: "pitaj-widget-form", children: [
      /* @__PURE__ */ e(Et, { fields: r, values: n, onChange: (u, c) => {
        o((b) => ({ ...b, [u]: c }));
      } }),
      /* @__PURE__ */ e("button", { type: "submit", className: "pitaj-widget-btn-primary", children: t.submit_label || "Pošalji poruku" })
    ] })
  ] });
}
function Sr({ config: t }) {
  const a = t.city || "Sarajevo", i = t.temp ?? "22°C", r = t.condition || "Sunčano i toplo", n = t.description || "";
  return /* @__PURE__ */ e("div", { className: "pitaj-inline-widget-card weather-widget", children: [
    /* @__PURE__ */ e("div", { className: "pitaj-weather-top", children: [
      /* @__PURE__ */ e(ba, { size: 32, className: "pitaj-weather-svg" }),
      /* @__PURE__ */ e("span", { className: "pitaj-weather-temp", children: i })
    ] }),
    /* @__PURE__ */ e("div", { className: "pitaj-weather-city", children: a }),
    /* @__PURE__ */ e("div", { className: "pitaj-weather-cond", children: r }),
    /* @__PURE__ */ e("div", { className: "pitaj-weather-desc", children: n })
  ] });
}
function Tr({ config: t, title: a }) {
  const [i, r] = T(!0), n = xi(t.url), o = t.height || 380;
  return n ? /* @__PURE__ */ e("div", { className: "pitaj-inline-widget-card iframe-widget", children: [
    /* @__PURE__ */ e("div", { className: "pitaj-widget-bar", children: [
      /* @__PURE__ */ e("span", { className: "pitaj-widget-badge-icon", children: /* @__PURE__ */ e(ga, { size: 14 }) }),
      /* @__PURE__ */ e("span", { className: "pitaj-widget-bar-title", children: t.title || a }),
      /* @__PURE__ */ e(
        "a",
        {
          href: n,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "pitaj-iframe-open-btn",
          title: "Otvori u novom prozoru",
          children: "↗"
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { className: "pitaj-iframe-container", style: { height: `${o}px` }, children: [
      i && /* @__PURE__ */ e("div", { className: "pitaj-iframe-loading", children: [
        /* @__PURE__ */ e("span", { className: "pitaj-typing-dot" }),
        /* @__PURE__ */ e("span", { className: "pitaj-typing-dot" }),
        /* @__PURE__ */ e("span", { className: "pitaj-typing-dot" })
      ] }),
      /* @__PURE__ */ e(
        "iframe",
        {
          src: n,
          title: a,
          className: "pitaj-iframe-frame",
          onLoad: () => r(!1),
          sandbox: "allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
        }
      )
    ] })
  ] }) : /* @__PURE__ */ e("div", { role: "status", children: "Sadržaj trenutno nije dostupan." });
}
function Ar({ config: t }) {
  const [a, i] = T(!0), r = String(t.url || "").trim();
  let n = null;
  try {
    r && (n = new URL(r));
  } catch {
  }
  const o = String(t.title || "Zakažite sastanak"), s = String(t.description || "Odaberite datum i termin koji vam najviše odgovara."), d = String(t.duration || "30 min"), m = String(t.provider || (r.includes("cal.com") ? "cal" : "calendly")), p = Number(t.height || 440);
  return !n || n.protocol !== "https:" ? /* @__PURE__ */ e("div", { className: "pitaj-inline-widget-card pitaj-booking-card", children: /* @__PURE__ */ e("div", { className: "pitaj-booking-header", children: [
    /* @__PURE__ */ e("div", { className: "pitaj-booking-brand-icon", children: /* @__PURE__ */ e(it, { size: 18 }) }),
    /* @__PURE__ */ e("div", { className: "pitaj-booking-info", children: [
      /* @__PURE__ */ e("div", { className: "pitaj-booking-title", children: o }),
      /* @__PURE__ */ e("div", { className: "pitaj-booking-desc", children: "Link za zakazivanje termina trenutno nije dostupan." })
    ] })
  ] }) }) : /* @__PURE__ */ e("div", { className: "pitaj-inline-widget-card pitaj-booking-card", children: [
    /* @__PURE__ */ e("div", { className: "pitaj-booking-header", children: [
      /* @__PURE__ */ e("div", { className: "pitaj-booking-brand-icon", title: m === "cal" ? "Cal.com" : "Calendly", children: m === "cal" ? /* @__PURE__ */ e("span", { className: "pitaj-cal-logo", children: "Cal" }) : m === "calendly" ? /* @__PURE__ */ e("span", { className: "pitaj-calendly-logo", children: "C" }) : /* @__PURE__ */ e(it, { size: 18 }) }),
      /* @__PURE__ */ e("div", { className: "pitaj-booking-info", children: [
        /* @__PURE__ */ e("div", { className: "pitaj-booking-title", children: o }),
        /* @__PURE__ */ e("div", { className: "pitaj-booking-meta", children: [
          /* @__PURE__ */ e("span", { className: "pitaj-booking-tag", children: [
            "⏱️ ",
            d
          ] }),
          /* @__PURE__ */ e("span", { className: "pitaj-booking-tag", children: "📹 Video poziv" })
        ] })
      ] }),
      /* @__PURE__ */ e(
        "a",
        {
          href: n.href,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "pitaj-booking-open-btn",
          title: "Otvori u novom prozoru",
          children: "↗"
        }
      )
    ] }),
    s && /* @__PURE__ */ e("div", { className: "pitaj-booking-desc", children: s }),
    /* @__PURE__ */ e("div", { className: "pitaj-booking-frame-wrap", style: { height: `${p}px` }, children: [
      a && /* @__PURE__ */ e("div", { className: "pitaj-booking-loading", children: [
        /* @__PURE__ */ e("span", { className: "pitaj-typing-dot" }),
        /* @__PURE__ */ e("span", { className: "pitaj-typing-dot" }),
        /* @__PURE__ */ e("span", { className: "pitaj-typing-dot" })
      ] }),
      /* @__PURE__ */ e(
        "iframe",
        {
          src: n.href,
          title: o,
          className: "pitaj-booking-frame",
          onLoad: () => i(!1),
          sandbox: "allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
        }
      )
    ] })
  ] });
}
function Er({ config: t }) {
  var n;
  const a = t.data || t.default_data || {}, i = String(t.title || t.name || "Podaci sa sistema"), r = typeof a == "object" && a !== null && Object.keys(a).length > 0;
  return /* @__PURE__ */ e("div", { className: "pitaj-inline-widget-card pitaj-api-widget", role: "region", "aria-label": i, children: [
    /* @__PURE__ */ e("div", { className: "pitaj-api-header", children: [
      /* @__PURE__ */ e("div", { className: "pitaj-api-title-row", children: [
        /* @__PURE__ */ e("span", { className: "pitaj-api-icon", children: "⚡" }),
        /* @__PURE__ */ e("span", { className: "pitaj-api-title", children: i })
      ] }),
      r && /* @__PURE__ */ e("span", { className: "pitaj-api-badge", children: "Uživo" })
    ] }),
    r ? /* @__PURE__ */ e("div", { className: "pitaj-api-body", children: Object.entries(a).slice(0, 15).map(([o, s]) => {
      let d = s;
      return typeof s == "object" && s !== null && (d = JSON.stringify(s)), /* @__PURE__ */ e("div", { className: "pitaj-api-row", children: [
        /* @__PURE__ */ e("span", { className: "pitaj-api-key", children: [
          o.replace(/_/g, " "),
          ":"
        ] }),
        /* @__PURE__ */ e("span", { className: "pitaj-api-val", children: String(d) })
      ] }, o);
    }) }) : /* @__PURE__ */ e("div", { className: "pitaj-api-empty", children: ((n = t.lookup) == null ? void 0 : n.status) === "expired" ? "Podaci se ne čuvaju. Pošaljite novi upit za ažurne podatke." : "Podaci trenutno nisu dostupni." })
  ] });
}
function Cr({ config: t }) {
  var b;
  const a = t.data || t.default_data || {}, i = a.order_number || t.order_number;
  if (!i) {
    const y = (b = t.lookup) == null ? void 0 : b.status;
    return /* @__PURE__ */ e("div", { className: "pitaj-inline-widget-card pitaj-order-card", role: "status", children: /* @__PURE__ */ e("div", { className: "pitaj-order-notice", children: y === "not_found" ? "Nismo pronašli narudžbu s tim brojem i emailom. Provjerite podatke i pokušajte ponovo." : y === "needs_email" ? "Za provjeru statusa napišite i email adresu kojom ste naručili (npr. #1234, ime@domena.ba)." : y === "unavailable" ? "Trenutno ne možemo provjeriti status narudžbe jer trgovina ne odgovara. Pokušajte ponovo za nekoliko minuta." : y === "expired" ? "Podaci o narudžbi se ne čuvaju. Pošaljite novi upit s brojem narudžbe i emailom za ažuran status." : "Napišite broj narudžbe i email kojim ste naručili (npr. #1234, ime@domena.ba) i provjerit ću status." }) });
  }
  const r = a.status_label || t.status_label || "Status nije dostupan", n = a.status_color || "blue", o = a.tracking_number || t.tracking_number, s = a.tracking_company || t.tracking_company || "Dostavna služba", d = a.tracking_url || t.tracking_url, m = a.total ? `${a.total} ${a.currency || "KM"}` : null, p = Array.isArray(a.items) && a.items.length > 0 ? a.items.map((y) => `${y.title} (x${y.quantity || 1})`).join(", ") : a.items_summary || t.items_summary, u = a.date || t.date, c = n === "emerald" ? "pitaj-order-badge-success" : n === "blue" ? "pitaj-order-badge-info" : "pitaj-order-badge-pending";
  return /* @__PURE__ */ e("div", { className: "pitaj-inline-widget-card pitaj-order-card", role: "region", "aria-label": `Narudžba ${i}`, children: [
    /* @__PURE__ */ e("div", { className: "pitaj-order-header", children: [
      /* @__PURE__ */ e("div", { className: "pitaj-order-id-group", children: [
        /* @__PURE__ */ e("span", { className: "pitaj-order-icon", children: "📦" }),
        /* @__PURE__ */ e("span", { className: "pitaj-order-number", children: i })
      ] }),
      /* @__PURE__ */ e("span", { className: `pitaj-order-status-badge ${c}`, children: r })
    ] }),
    /* @__PURE__ */ e("div", { className: "pitaj-order-details", children: [
      o ? /* @__PURE__ */ e("div", { className: "pitaj-order-tracking-box", children: [
        /* @__PURE__ */ e("div", { className: "pitaj-order-tracking-title", children: "Broj za praćenje pošiljke:" }),
        /* @__PURE__ */ e("div", { className: "pitaj-order-tracking-val", children: [
          /* @__PURE__ */ e("span", { children: [
            s,
            ": ",
            /* @__PURE__ */ e("strong", { children: o })
          ] }),
          d && /* @__PURE__ */ e("a", { href: d, target: "_blank", rel: "noopener noreferrer", className: "pitaj-order-tracking-link", children: "Prati ↗" })
        ] })
      ] }) : n === "amber" ? /* @__PURE__ */ e("div", { className: "pitaj-order-notice", children: "Pošiljka je u pripremi za slanje. Broj za praćenje će biti dostupan ubrzo." }) : null,
      /* @__PURE__ */ e("div", { className: "pitaj-order-meta-grid", children: [
        p && /* @__PURE__ */ e("div", { className: "pitaj-order-meta-item", children: [
          /* @__PURE__ */ e("span", { className: "pitaj-order-meta-label", children: "Artikli:" }),
          /* @__PURE__ */ e("span", { className: "pitaj-order-meta-val", children: p })
        ] }),
        m && /* @__PURE__ */ e("div", { className: "pitaj-order-meta-item", children: [
          /* @__PURE__ */ e("span", { className: "pitaj-order-meta-label", children: "Ukupno:" }),
          /* @__PURE__ */ e("span", { className: "pitaj-order-meta-val", children: m })
        ] }),
        u && /* @__PURE__ */ e("div", { className: "pitaj-order-meta-item", children: [
          /* @__PURE__ */ e("span", { className: "pitaj-order-meta-label", children: "Datum:" }),
          /* @__PURE__ */ e("span", { className: "pitaj-order-meta-val", children: u })
        ] })
      ] })
    ] })
  ] });
}
function zr({ config: t }) {
  var r, n, o;
  const a = Array.isArray((r = t.data) == null ? void 0 : r.tickets) ? t.data.tickets : [], i = t.title || "Status zahtjeva";
  if (a.length === 0) {
    const s = (n = t.data_state) == null ? void 0 : n.reason, d = s === "not_found" ? "Nismo pronašli zahtjev s tim brojem i emailom. Provjerite podatke i pokušajte ponovo." : s === "needs_email" ? "Za provjeru statusa napišite i email adresu kojom ste poslali zahtjev (npr. TKT-1-000123, ime@domena.ba)." : ((o = t.data_state) == null ? void 0 : o.status) === "unavailable" ? "Podaci o zahtjevu trenutno nisu dostupni." : "Nemamo zahtjev povezan s ovim razgovorom. Napišite broj zahtjeva i email kojim ste ga poslali (npr. TKT-1-000123, ime@domena.ba).";
    return /* @__PURE__ */ e("div", { className: "pitaj-inline-widget-card pitaj-order-card", role: "status", children: /* @__PURE__ */ e("div", { className: "pitaj-order-notice", children: d }) });
  }
  return /* @__PURE__ */ e("div", { className: "pitaj-inline-widget-card pitaj-order-card", role: "region", "aria-label": i, children: a.map((s) => {
    const d = s.status_color === "emerald" ? "pitaj-order-badge-success" : s.status_color === "blue" ? "pitaj-order-badge-info" : "pitaj-order-badge-pending";
    return /* @__PURE__ */ e("div", { className: "pitaj-order-details", style: { marginBottom: a.length > 1 ? 12 : 0 }, children: [
      /* @__PURE__ */ e("div", { className: "pitaj-order-header", children: [
        /* @__PURE__ */ e("div", { className: "pitaj-order-id-group", children: /* @__PURE__ */ e("span", { className: "pitaj-order-number", children: s.subject || s.number }) }),
        /* @__PURE__ */ e("span", { className: `pitaj-order-status-badge ${d}`, children: s.status_label })
      ] }),
      /* @__PURE__ */ e("div", { className: "pitaj-order-meta-grid", children: [
        /* @__PURE__ */ e("div", { className: "pitaj-order-meta-item", children: [
          /* @__PURE__ */ e("span", { className: "pitaj-order-meta-label", children: "Broj:" }),
          /* @__PURE__ */ e("span", { className: "pitaj-order-meta-val", children: s.number })
        ] }),
        s.created_at && /* @__PURE__ */ e("div", { className: "pitaj-order-meta-item", children: [
          /* @__PURE__ */ e("span", { className: "pitaj-order-meta-label", children: "Poslano:" }),
          /* @__PURE__ */ e("span", { className: "pitaj-order-meta-val", children: s.created_at })
        ] }),
        s.resolved_at ? /* @__PURE__ */ e("div", { className: "pitaj-order-meta-item", children: [
          /* @__PURE__ */ e("span", { className: "pitaj-order-meta-label", children: "Riješeno:" }),
          /* @__PURE__ */ e("span", { className: "pitaj-order-meta-val", children: s.resolved_at })
        ] }) : s.updated_at ? /* @__PURE__ */ e("div", { className: "pitaj-order-meta-item", children: [
          /* @__PURE__ */ e("span", { className: "pitaj-order-meta-label", children: "Zadnje ažuriranje:" }),
          /* @__PURE__ */ e("span", { className: "pitaj-order-meta-val", children: s.updated_at })
        ] }) : null
      ] })
    ] }, s.number);
  }) });
}
function Ir({ config: t, onAction: a }) {
  const i = t.html || '<div style="padding: 16px; text-align: center;">Prilagođeni HTML widget</div>', r = t.css || "";
  return /* @__PURE__ */ e("div", { className: "pitaj-inline-widget-card custom-html-widget", onClick: (o) => {
    var d;
    const s = (d = o.target) == null ? void 0 : d.closest("[data-chat-action]");
    if (s) {
      const m = s.getAttribute("data-chat-action");
      m && (o.preventDefault(), a == null || a(m));
    }
  }, children: [
    r && /* @__PURE__ */ e("style", { children: r }),
    /* @__PURE__ */ e("div", { dangerouslySetInnerHTML: { __html: vi(String(i)) } })
  ] });
}
export {
  Or as InlineWidgetRenderer
};
