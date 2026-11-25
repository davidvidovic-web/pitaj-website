import { d as re, h as At, T as Qr, u as o, w as hs, t as ce, D as ct, S as us, A as Je, f as ea, g as tr, I as ta, E as sr, G as Oi, J as Fs, K as ir, L as Bs, N as rr, O as ar, W as nr, Q as js, R as sa, V as ia, F as Mi, X as ra, Y as Ls, Z as _i, _ as Ds, e as ps, $ as aa, c as na, a0 as oa, a1 as la, a2 as Dt, a3 as Fi, a4 as ca, a5 as ha, a6 as pa, a7 as ua, a8 as da } from "./widget-DGHLQ-7t.js";
const Bi = (l, h) => new Intl.DateTimeFormat("bs", { weekday: "short", day: "numeric", month: "numeric", timeZone: h }).format(new Date(l)), Ri = (l, h) => new Intl.DateTimeFormat("en-CA", { timeZone: h }).format(new Date(l)), Ui = (l, h) => new Intl.DateTimeFormat("bs", { hour: "2-digit", minute: "2-digit", timeZone: h }).format(new Date(l));
function fa({ config: l, widgetId: h, companyId: u, apiUrl: d, preview: x }) {
  const b = String(l.title || "Zakažite termin"), [P, A] = re(x ? "ready" : "loading"), [L, S] = re(null), [N, w] = re(null), [B, q] = re(null), [Q, be] = re(""), [D, U] = re(""), [m, Y] = re(null), pe = `${(d || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, "")}/api/widget/${encodeURIComponent(u || "")}/v2/inline-widgets/${h}/calendar`, ae = async () => {
    var k, v;
    A("loading");
    try {
      const de = await hs(u || "", d), Ae = await fetch(`${pe}/slots`, { headers: { Accept: "application/json", Authorization: `Bearer ${de}` }, cache: "no-store" }), ue = await Ae.json();
      if (!Ae.ok || ue.status === "unavailable") return A("unavailable");
      if (ue.status !== "ok" || !((v = (k = ue.data) == null ? void 0 : k.slots) != null && v.length)) return A("empty");
      S(ue.data), w(Ri(ue.data.slots[0], ue.data.timezone)), q(null), A("ready");
    } catch {
      A("unavailable");
    }
  };
  At(() => {
    !x && u ? ae() : x || A("unavailable");
  }, [h, u, x]);
  const Ce = Qr(() => {
    const k = /* @__PURE__ */ new Map();
    if (L) for (const v of L.slots) {
      const de = Ri(v, L.timezone);
      k.set(de, [...k.get(de) || [], v]);
    }
    return k;
  }, [L]), ht = async () => {
    if (!(!B || !L || P === "booking")) {
      A("booking");
      try {
        const k = await hs(u || "", d), v = await fetch(`${pe}/book`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json", Authorization: `Bearer ${k}` },
          body: JSON.stringify({ start: B, name: Q.trim(), email: D.trim() })
        });
        if (v.status === 409)
          return await ae(), A("taken");
        if (!v.ok) return A("error");
        const de = await v.json();
        Y(String(de.start || B)), A("done");
      } catch {
        A("error");
      }
    }
  }, we = (k) => /* @__PURE__ */ o("div", { className: "pitaj-inline-widget-card pitaj-booking-card", children: [
    /* @__PURE__ */ o("div", { className: "pitaj-booking-header", children: /* @__PURE__ */ o("div", { className: "pitaj-booking-info", children: /* @__PURE__ */ o("div", { className: "pitaj-booking-title", children: b }) }) }),
    k
  ] });
  if (x) return we(/* @__PURE__ */ o("div", { className: "pitaj-booking-desc", children: "Posjetilac ovdje bira dan i termin iz vašeg Cal.com kalendara, upiše ime i email, i termin se zakazuje." }));
  if (P === "loading") return we(/* @__PURE__ */ o("div", { role: "status", className: "pitaj-booking-desc", children: "Učitavam slobodne termine…" }));
  if (P === "unavailable") return we(/* @__PURE__ */ o("div", { role: "status", className: "pitaj-booking-desc", children: "Zakazivanje trenutno nije dostupno." }));
  if (P === "empty") return we(/* @__PURE__ */ o("div", { role: "status", className: "pitaj-booking-desc", children: "Trenutno nema slobodnih termina." }));
  if (P === "done" && L && m)
    return we(/* @__PURE__ */ o("div", { role: "status", className: "pitaj-booking-desc", children: [
      "Termin je zakazan: ",
      Bi(m, L.timezone),
      " u ",
      Ui(m, L.timezone),
      ". Potvrda stiže na ",
      D.trim(),
      "."
    ] }));
  if (!L) return we(/* @__PURE__ */ o("div", { role: "status", className: "pitaj-booking-desc", children: "Zakazivanje trenutno nije dostupno." }));
  const V = !!B && Q.trim().length >= 2 && /^\S+@\S+\.\S+$/.test(D.trim());
  return we(
    /* @__PURE__ */ o("div", { className: "pitaj-cal-picker", children: [
      P === "taken" && /* @__PURE__ */ o("div", { role: "alert", className: "pitaj-booking-desc", children: "Termin je upravo zauzet. Odaberite drugi." }),
      P === "error" && /* @__PURE__ */ o("div", { role: "alert", className: "pitaj-booking-desc", children: "Zakazivanje nije uspjelo. Pokušajte ponovo." }),
      /* @__PURE__ */ o("div", { className: "pitaj-cal-days", role: "tablist", "aria-label": "Dani", children: [...Ce.keys()].map((k) => /* @__PURE__ */ o(
        "button",
        {
          type: "button",
          role: "tab",
          "aria-selected": N === k,
          className: `pitaj-cal-chip${N === k ? " is-active" : ""}`,
          onClick: () => {
            w(k), q(null);
          },
          children: Bi(Ce.get(k)[0], L.timezone)
        },
        k
      )) }),
      /* @__PURE__ */ o("div", { className: "pitaj-cal-times", role: "listbox", "aria-label": "Termini", children: (N ? Ce.get(N) || [] : []).map((k) => /* @__PURE__ */ o("button", { type: "button", role: "option", "aria-selected": B === k, className: `pitaj-cal-chip${B === k ? " is-active" : ""}`, onClick: () => q(k), children: Ui(k, L.timezone) }, k)) }),
      /* @__PURE__ */ o("div", { className: "pitaj-booking-desc", children: [
        "Vremenska zona: ",
        L.timezone
      ] }),
      B && /* @__PURE__ */ o("form", { className: "pitaj-cal-form", onSubmit: (k) => {
        k.preventDefault(), ht();
      }, children: [
        /* @__PURE__ */ o("input", { "aria-label": "Ime i prezime", placeholder: "Ime i prezime", value: Q, maxLength: 100, onInput: (k) => be(k.target.value), autoComplete: "name" }),
        /* @__PURE__ */ o("input", { "aria-label": "Email", type: "email", placeholder: "Email", value: D, maxLength: 190, onInput: (k) => U(k.target.value), autoComplete: "email" }),
        /* @__PURE__ */ o("button", { type: "submit", className: "pitaj-widget-btn-primary", disabled: !V || P === "booking", children: P === "booking" ? "Zakazujem…" : "Zakaži termin" })
      ] })
    ] })
  );
}
/*! @license DOMPurify 3.2.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.6/LICENSE */
const {
  entries: or,
  setPrototypeOf: zi,
  isFrozen: ma,
  getPrototypeOf: ya,
  getOwnPropertyDescriptor: xa
} = Object;
let {
  freeze: Ee,
  seal: ze,
  create: lr
} = Object, {
  apply: Os,
  construct: Ms
} = typeof Reflect < "u" && Reflect;
Ee || (Ee = function(h) {
  return h;
});
ze || (ze = function(h) {
  return h;
});
Os || (Os = function(h, u, d) {
  return h.apply(u, d);
});
Ms || (Ms = function(h, u) {
  return new h(...u);
});
const ns = je(Array.prototype.forEach), ga = je(Array.prototype.lastIndexOf), $i = je(Array.prototype.pop), Ot = je(Array.prototype.push), ba = je(Array.prototype.splice), cs = je(String.prototype.toLowerCase), vs = je(String.prototype.toString), Hi = je(String.prototype.match), Mt = je(String.prototype.replace), Pa = je(String.prototype.indexOf), Ta = je(String.prototype.trim), Ge = je(Object.prototype.hasOwnProperty), ke = je(RegExp.prototype.test), _t = wa(TypeError);
function je(l) {
  return function(h) {
    h instanceof RegExp && (h.lastIndex = 0);
    for (var u = arguments.length, d = new Array(u > 1 ? u - 1 : 0), x = 1; x < u; x++)
      d[x - 1] = arguments[x];
    return Os(l, h, d);
  };
}
function wa(l) {
  return function() {
    for (var h = arguments.length, u = new Array(h), d = 0; d < h; d++)
      u[d] = arguments[d];
    return Ms(l, u);
  };
}
function W(l, h) {
  let u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : cs;
  zi && zi(l, null);
  let d = h.length;
  for (; d--; ) {
    let x = h[d];
    if (typeof x == "string") {
      const b = u(x);
      b !== x && (ma(h) || (h[d] = b), x = b);
    }
    l[x] = !0;
  }
  return l;
}
function Aa(l) {
  for (let h = 0; h < l.length; h++)
    Ge(l, h) || (l[h] = null);
  return l;
}
function tt(l) {
  const h = lr(null);
  for (const [u, d] of or(l))
    Ge(l, u) && (Array.isArray(d) ? h[u] = Aa(d) : d && typeof d == "object" && d.constructor === Object ? h[u] = tt(d) : h[u] = d);
  return h;
}
function Ft(l, h) {
  for (; l !== null; ) {
    const d = xa(l, h);
    if (d) {
      if (d.get)
        return je(d.get);
      if (typeof d.value == "function")
        return je(d.value);
    }
    l = ya(l);
  }
  function u() {
    return null;
  }
  return u;
}
const Vi = Ee(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ns = Ee(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Cs = Ee(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Sa = Ee(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Is = Ee(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), va = Ee(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), qi = Ee(["#text"]), Wi = Ee(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), ks = Ee(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Ki = Ee(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), os = Ee(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Na = ze(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Ca = ze(/<%[\w\W]*|[\w\W]*%>/gm), Ia = ze(/\$\{[\w\W]*/gm), ka = ze(/^data-[\-\w.\u00B7-\uFFFF]+$/), Ea = ze(/^aria-[\-\w]+$/), cr = ze(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), ja = ze(/^(?:\w+script|data):/i), La = ze(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), hr = ze(/^html$/i), Da = ze(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Gi = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Ea,
  ATTR_WHITESPACE: La,
  CUSTOM_ELEMENT: Da,
  DATA_ATTR: ka,
  DOCTYPE_NAME: hr,
  ERB_EXPR: Ca,
  IS_ALLOWED_URI: cr,
  IS_SCRIPT_OR_DATA: ja,
  MUSTACHE_EXPR: Na,
  TMPLIT_EXPR: Ia
});
const Bt = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, Oa = function() {
  return typeof window > "u" ? null : window;
}, Ma = function(h, u) {
  if (typeof h != "object" || typeof h.createPolicy != "function")
    return null;
  let d = null;
  const x = "data-tt-policy-suffix";
  u && u.hasAttribute(x) && (d = u.getAttribute(x));
  const b = "dompurify" + (d ? "#" + d : "");
  try {
    return h.createPolicy(b, {
      createHTML(P) {
        return P;
      },
      createScriptURL(P) {
        return P;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + b + " could not be created."), null;
  }
}, Ji = function() {
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
function pr() {
  let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Oa();
  const h = (R) => pr(R);
  if (h.version = "3.2.6", h.removed = [], !l || !l.document || l.document.nodeType !== Bt.document || !l.Element)
    return h.isSupported = !1, h;
  let {
    document: u
  } = l;
  const d = u, x = d.currentScript, {
    DocumentFragment: b,
    HTMLTemplateElement: P,
    Node: A,
    Element: L,
    NodeFilter: S,
    NamedNodeMap: N = l.NamedNodeMap || l.MozNamedAttrMap,
    HTMLFormElement: w,
    DOMParser: B,
    trustedTypes: q
  } = l, Q = L.prototype, be = Ft(Q, "cloneNode"), D = Ft(Q, "remove"), U = Ft(Q, "nextSibling"), m = Ft(Q, "childNodes"), Y = Ft(Q, "parentNode");
  if (typeof P == "function") {
    const R = u.createElement("template");
    R.content && R.content.ownerDocument && (u = R.content.ownerDocument);
  }
  let J, pe = "";
  const {
    implementation: ae,
    createNodeIterator: Ce,
    createDocumentFragment: ht,
    getElementsByTagName: we
  } = u, {
    importNode: V
  } = d;
  let k = Ji();
  h.isSupported = typeof or == "function" && typeof Y == "function" && ae && ae.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: v,
    ERB_EXPR: de,
    TMPLIT_EXPR: Ae,
    DATA_ATTR: ue,
    ARIA_ATTR: St,
    IS_SCRIPT_OR_DATA: pt,
    ATTR_WHITESPACE: $e,
    CUSTOM_ELEMENT: H
  } = Gi;
  let {
    IS_ALLOWED_URI: fe
  } = Gi, se = null;
  const Ne = W({}, [...Vi, ...Ns, ...Cs, ...Is, ...qi]);
  let le = null;
  const He = W({}, [...Wi, ...ks, ...Ki, ...os]);
  let ee = Object.seal(lr(null, {
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
  })), Le = null, _e = null, j = !0, z = !0, it = !1, K = !0, Pe = !1, G = !0, Z = !1, De = !1, ne = !1, Xe = !1, Ye = !1, Ze = !1, bt = !0, Rt = !1;
  const fs = "user-content-";
  let vt = !0, ut = !1, rt = {}, Ie = null;
  const dt = W({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Ut = null;
  const ft = W({}, ["audio", "video", "img", "source", "image", "track"]);
  let Me = null;
  const Pt = W({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), mt = "http://www.w3.org/1998/Math/MathML", Tt = "http://www.w3.org/2000/svg", Ve = "http://www.w3.org/1999/xhtml";
  let Qe = Ve, Nt = !1, yt = null;
  const Fe = W({}, [mt, Tt, Ve], vs);
  let Be = W({}, ["mi", "mo", "mn", "ms", "mtext"]), at = W({}, ["annotation-xml"]);
  const ms = W({}, ["title", "style", "font", "a", "script"]);
  let xt = null;
  const ys = ["application/xhtml+xml", "text/html"], zt = "text/html";
  let ye = null, et = null;
  const $t = u.createElement("form"), Ht = function(g) {
    return g instanceof RegExp || g instanceof Function;
  }, Ct = function() {
    let g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(et && et === g)) {
      if ((!g || typeof g != "object") && (g = {}), g = tt(g), xt = // eslint-disable-next-line unicorn/prefer-includes
      ys.indexOf(g.PARSER_MEDIA_TYPE) === -1 ? zt : g.PARSER_MEDIA_TYPE, ye = xt === "application/xhtml+xml" ? vs : cs, se = Ge(g, "ALLOWED_TAGS") ? W({}, g.ALLOWED_TAGS, ye) : Ne, le = Ge(g, "ALLOWED_ATTR") ? W({}, g.ALLOWED_ATTR, ye) : He, yt = Ge(g, "ALLOWED_NAMESPACES") ? W({}, g.ALLOWED_NAMESPACES, vs) : Fe, Me = Ge(g, "ADD_URI_SAFE_ATTR") ? W(tt(Pt), g.ADD_URI_SAFE_ATTR, ye) : Pt, Ut = Ge(g, "ADD_DATA_URI_TAGS") ? W(tt(ft), g.ADD_DATA_URI_TAGS, ye) : ft, Ie = Ge(g, "FORBID_CONTENTS") ? W({}, g.FORBID_CONTENTS, ye) : dt, Le = Ge(g, "FORBID_TAGS") ? W({}, g.FORBID_TAGS, ye) : tt({}), _e = Ge(g, "FORBID_ATTR") ? W({}, g.FORBID_ATTR, ye) : tt({}), rt = Ge(g, "USE_PROFILES") ? g.USE_PROFILES : !1, j = g.ALLOW_ARIA_ATTR !== !1, z = g.ALLOW_DATA_ATTR !== !1, it = g.ALLOW_UNKNOWN_PROTOCOLS || !1, K = g.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Pe = g.SAFE_FOR_TEMPLATES || !1, G = g.SAFE_FOR_XML !== !1, Z = g.WHOLE_DOCUMENT || !1, Xe = g.RETURN_DOM || !1, Ye = g.RETURN_DOM_FRAGMENT || !1, Ze = g.RETURN_TRUSTED_TYPE || !1, ne = g.FORCE_BODY || !1, bt = g.SANITIZE_DOM !== !1, Rt = g.SANITIZE_NAMED_PROPS || !1, vt = g.KEEP_CONTENT !== !1, ut = g.IN_PLACE || !1, fe = g.ALLOWED_URI_REGEXP || cr, Qe = g.NAMESPACE || Ve, Be = g.MATHML_TEXT_INTEGRATION_POINTS || Be, at = g.HTML_INTEGRATION_POINTS || at, ee = g.CUSTOM_ELEMENT_HANDLING || {}, g.CUSTOM_ELEMENT_HANDLING && Ht(g.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (ee.tagNameCheck = g.CUSTOM_ELEMENT_HANDLING.tagNameCheck), g.CUSTOM_ELEMENT_HANDLING && Ht(g.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (ee.attributeNameCheck = g.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), g.CUSTOM_ELEMENT_HANDLING && typeof g.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (ee.allowCustomizedBuiltInElements = g.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Pe && (z = !1), Ye && (Xe = !0), rt && (se = W({}, qi), le = [], rt.html === !0 && (W(se, Vi), W(le, Wi)), rt.svg === !0 && (W(se, Ns), W(le, ks), W(le, os)), rt.svgFilters === !0 && (W(se, Cs), W(le, ks), W(le, os)), rt.mathMl === !0 && (W(se, Is), W(le, Ki), W(le, os))), g.ADD_TAGS && (se === Ne && (se = tt(se)), W(se, g.ADD_TAGS, ye)), g.ADD_ATTR && (le === He && (le = tt(le)), W(le, g.ADD_ATTR, ye)), g.ADD_URI_SAFE_ATTR && W(Me, g.ADD_URI_SAFE_ATTR, ye), g.FORBID_CONTENTS && (Ie === dt && (Ie = tt(Ie)), W(Ie, g.FORBID_CONTENTS, ye)), vt && (se["#text"] = !0), Z && W(se, ["html", "head", "body"]), se.table && (W(se, ["tbody"]), delete Le.tbody), g.TRUSTED_TYPES_POLICY) {
        if (typeof g.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw _t('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof g.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw _t('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        J = g.TRUSTED_TYPES_POLICY, pe = J.createHTML("");
      } else
        J === void 0 && (J = Ma(q, x)), J !== null && typeof pe == "string" && (pe = J.createHTML(""));
      Ee && Ee(g), et = g;
    }
  }, Vt = W({}, [...Ns, ...Cs, ...Sa]), qt = W({}, [...Is, ...va]), It = function(g) {
    let C = Y(g);
    (!C || !C.tagName) && (C = {
      namespaceURI: Qe,
      tagName: "template"
    });
    const _ = cs(g.tagName), te = cs(C.tagName);
    return yt[g.namespaceURI] ? g.namespaceURI === Tt ? C.namespaceURI === Ve ? _ === "svg" : C.namespaceURI === mt ? _ === "svg" && (te === "annotation-xml" || Be[te]) : !!Vt[_] : g.namespaceURI === mt ? C.namespaceURI === Ve ? _ === "math" : C.namespaceURI === Tt ? _ === "math" && at[te] : !!qt[_] : g.namespaceURI === Ve ? C.namespaceURI === Tt && !at[te] || C.namespaceURI === mt && !Be[te] ? !1 : !qt[_] && (ms[_] || !Vt[_]) : !!(xt === "application/xhtml+xml" && yt[g.namespaceURI]) : !1;
  }, Oe = function(g) {
    Ot(h.removed, {
      element: g
    });
    try {
      Y(g).removeChild(g);
    } catch {
      D(g);
    }
  }, nt = function(g, C) {
    try {
      Ot(h.removed, {
        attribute: C.getAttributeNode(g),
        from: C
      });
    } catch {
      Ot(h.removed, {
        attribute: null,
        from: C
      });
    }
    if (C.removeAttribute(g), g === "is")
      if (Xe || Ye)
        try {
          Oe(C);
        } catch {
        }
      else
        try {
          C.setAttribute(g, "");
        } catch {
        }
  }, Wt = function(g) {
    let C = null, _ = null;
    if (ne)
      g = "<remove></remove>" + g;
    else {
      const xe = Hi(g, /^[\r\n\t ]+/);
      _ = xe && xe[0];
    }
    xt === "application/xhtml+xml" && Qe === Ve && (g = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + g + "</body></html>");
    const te = J ? J.createHTML(g) : g;
    if (Qe === Ve)
      try {
        C = new B().parseFromString(te, xt);
      } catch {
      }
    if (!C || !C.documentElement) {
      C = ae.createDocument(Qe, "template", null);
      try {
        C.documentElement.innerHTML = Nt ? pe : te;
      } catch {
      }
    }
    const Te = C.body || C.documentElement;
    return g && _ && Te.insertBefore(u.createTextNode(_), Te.childNodes[0] || null), Qe === Ve ? we.call(C, Z ? "html" : "body")[0] : Z ? C.documentElement : Te;
  }, Kt = function(g) {
    return Ce.call(
      g.ownerDocument || g,
      g,
      // eslint-disable-next-line no-bitwise
      S.SHOW_ELEMENT | S.SHOW_COMMENT | S.SHOW_TEXT | S.SHOW_PROCESSING_INSTRUCTION | S.SHOW_CDATA_SECTION,
      null
    );
  }, F = function(g) {
    return g instanceof w && (typeof g.nodeName != "string" || typeof g.textContent != "string" || typeof g.removeChild != "function" || !(g.attributes instanceof N) || typeof g.removeAttribute != "function" || typeof g.setAttribute != "function" || typeof g.namespaceURI != "string" || typeof g.insertBefore != "function" || typeof g.hasChildNodes != "function");
  }, Gt = function(g) {
    return typeof A == "function" && g instanceof A;
  };
  function Re(R, g, C) {
    ns(R, (_) => {
      _.call(h, g, C, et);
    });
  }
  const Jt = function(g) {
    let C = null;
    if (Re(k.beforeSanitizeElements, g, null), F(g))
      return Oe(g), !0;
    const _ = ye(g.nodeName);
    if (Re(k.uponSanitizeElement, g, {
      tagName: _,
      allowedTags: se
    }), G && g.hasChildNodes() && !Gt(g.firstElementChild) && ke(/<[/\w!]/g, g.innerHTML) && ke(/<[/\w!]/g, g.textContent) || g.nodeType === Bt.progressingInstruction || G && g.nodeType === Bt.comment && ke(/<[/\w]/g, g.data))
      return Oe(g), !0;
    if (!se[_] || Le[_]) {
      if (!Le[_] && Yt(_) && (ee.tagNameCheck instanceof RegExp && ke(ee.tagNameCheck, _) || ee.tagNameCheck instanceof Function && ee.tagNameCheck(_)))
        return !1;
      if (vt && !Ie[_]) {
        const te = Y(g) || g.parentNode, Te = m(g) || g.childNodes;
        if (Te && te) {
          const xe = Te.length;
          for (let me = xe - 1; me >= 0; --me) {
            const Se = be(Te[me], !0);
            Se.__removalCount = (g.__removalCount || 0) + 1, te.insertBefore(Se, U(g));
          }
        }
      }
      return Oe(g), !0;
    }
    return g instanceof L && !It(g) || (_ === "noscript" || _ === "noembed" || _ === "noframes") && ke(/<\/no(script|embed|frames)/i, g.innerHTML) ? (Oe(g), !0) : (Pe && g.nodeType === Bt.text && (C = g.textContent, ns([v, de, Ae], (te) => {
      C = Mt(C, te, " ");
    }), g.textContent !== C && (Ot(h.removed, {
      element: g.cloneNode()
    }), g.textContent = C)), Re(k.afterSanitizeElements, g, null), !1);
  }, Xt = function(g, C, _) {
    if (bt && (C === "id" || C === "name") && (_ in u || _ in $t))
      return !1;
    if (!(z && !_e[C] && ke(ue, C))) {
      if (!(j && ke(St, C))) {
        if (!le[C] || _e[C]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Yt(g) && (ee.tagNameCheck instanceof RegExp && ke(ee.tagNameCheck, g) || ee.tagNameCheck instanceof Function && ee.tagNameCheck(g)) && (ee.attributeNameCheck instanceof RegExp && ke(ee.attributeNameCheck, C) || ee.attributeNameCheck instanceof Function && ee.attributeNameCheck(C)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            C === "is" && ee.allowCustomizedBuiltInElements && (ee.tagNameCheck instanceof RegExp && ke(ee.tagNameCheck, _) || ee.tagNameCheck instanceof Function && ee.tagNameCheck(_)))
          ) return !1;
        } else if (!Me[C]) {
          if (!ke(fe, Mt(_, $e, ""))) {
            if (!((C === "src" || C === "xlink:href" || C === "href") && g !== "script" && Pa(_, "data:") === 0 && Ut[g])) {
              if (!(it && !ke(pt, Mt(_, $e, "")))) {
                if (_)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Yt = function(g) {
    return g !== "annotation-xml" && Hi(g, H);
  }, Zt = function(g) {
    Re(k.beforeSanitizeAttributes, g, null);
    const {
      attributes: C
    } = g;
    if (!C || F(g))
      return;
    const _ = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: le,
      forceKeepAttr: void 0
    };
    let te = C.length;
    for (; te--; ) {
      const Te = C[te], {
        name: xe,
        namespaceURI: me,
        value: Se
      } = Te, Ue = ye(xe), kt = Se;
      let ve = xe === "value" ? kt : Ta(kt);
      if (_.attrName = Ue, _.attrValue = ve, _.keepAttr = !0, _.forceKeepAttr = void 0, Re(k.uponSanitizeAttribute, g, _), ve = _.attrValue, Rt && (Ue === "id" || Ue === "name") && (nt(xe, g), ve = fs + ve), G && ke(/((--!?|])>)|<\/(style|title)/i, ve)) {
        nt(xe, g);
        continue;
      }
      if (_.forceKeepAttr)
        continue;
      if (!_.keepAttr) {
        nt(xe, g);
        continue;
      }
      if (!K && ke(/\/>/i, ve)) {
        nt(xe, g);
        continue;
      }
      Pe && ns([v, de, Ae], (es) => {
        ve = Mt(ve, es, " ");
      });
      const Qt = ye(g.nodeName);
      if (!Xt(Qt, Ue, ve)) {
        nt(xe, g);
        continue;
      }
      if (J && typeof q == "object" && typeof q.getAttributeType == "function" && !me)
        switch (q.getAttributeType(Qt, Ue)) {
          case "TrustedHTML": {
            ve = J.createHTML(ve);
            break;
          }
          case "TrustedScriptURL": {
            ve = J.createScriptURL(ve);
            break;
          }
        }
      if (ve !== kt)
        try {
          me ? g.setAttributeNS(me, xe, ve) : g.setAttribute(xe, ve), F(g) ? Oe(g) : $i(h.removed);
        } catch {
          nt(xe, g);
        }
    }
    Re(k.afterSanitizeAttributes, g, null);
  }, xs = function R(g) {
    let C = null;
    const _ = Kt(g);
    for (Re(k.beforeSanitizeShadowDOM, g, null); C = _.nextNode(); )
      Re(k.uponSanitizeShadowNode, C, null), Jt(C), Zt(C), C.content instanceof b && R(C.content);
    Re(k.afterSanitizeShadowDOM, g, null);
  };
  return h.sanitize = function(R) {
    let g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, C = null, _ = null, te = null, Te = null;
    if (Nt = !R, Nt && (R = "<!-->"), typeof R != "string" && !Gt(R))
      if (typeof R.toString == "function") {
        if (R = R.toString(), typeof R != "string")
          throw _t("dirty is not a string, aborting");
      } else
        throw _t("toString is not a function");
    if (!h.isSupported)
      return R;
    if (De || Ct(g), h.removed = [], typeof R == "string" && (ut = !1), ut) {
      if (R.nodeName) {
        const Se = ye(R.nodeName);
        if (!se[Se] || Le[Se])
          throw _t("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (R instanceof A)
      C = Wt("<!---->"), _ = C.ownerDocument.importNode(R, !0), _.nodeType === Bt.element && _.nodeName === "BODY" || _.nodeName === "HTML" ? C = _ : C.appendChild(_);
    else {
      if (!Xe && !Pe && !Z && // eslint-disable-next-line unicorn/prefer-includes
      R.indexOf("<") === -1)
        return J && Ze ? J.createHTML(R) : R;
      if (C = Wt(R), !C)
        return Xe ? null : Ze ? pe : "";
    }
    C && ne && Oe(C.firstChild);
    const xe = Kt(ut ? R : C);
    for (; te = xe.nextNode(); )
      Jt(te), Zt(te), te.content instanceof b && xs(te.content);
    if (ut)
      return R;
    if (Xe) {
      if (Ye)
        for (Te = ht.call(C.ownerDocument); C.firstChild; )
          Te.appendChild(C.firstChild);
      else
        Te = C;
      return (le.shadowroot || le.shadowrootmode) && (Te = V.call(d, Te, !0)), Te;
    }
    let me = Z ? C.outerHTML : C.innerHTML;
    return Z && se["!doctype"] && C.ownerDocument && C.ownerDocument.doctype && C.ownerDocument.doctype.name && ke(hr, C.ownerDocument.doctype.name) && (me = "<!DOCTYPE " + C.ownerDocument.doctype.name + `>
` + me), Pe && ns([v, de, Ae], (Se) => {
      me = Mt(me, Se, " ");
    }), J && Ze ? J.createHTML(me) : me;
  }, h.setConfig = function() {
    let R = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ct(R), De = !0;
  }, h.clearConfig = function() {
    et = null, De = !1;
  }, h.isValidAttribute = function(R, g, C) {
    et || Ct({});
    const _ = ye(R), te = ye(g);
    return Xt(_, te, C);
  }, h.addHook = function(R, g) {
    typeof g == "function" && Ot(k[R], g);
  }, h.removeHook = function(R, g) {
    if (g !== void 0) {
      const C = ga(k[R], g);
      return C === -1 ? void 0 : ba(k[R], C, 1)[0];
    }
    return $i(k[R]);
  }, h.removeHooks = function(R) {
    k[R] = [];
  }, h.removeAllHooks = function() {
    k = Ji();
  }, h;
}
var ur = pr();
let Xi = !1;
function _a() {
  Xi || (Xi = !0, ur.addHook("afterSanitizeAttributes", (l) => {
    l.tagName === "A" && l.getAttribute("target") && l.setAttribute("rel", "noopener noreferrer");
  }));
}
function Fa(l) {
  return l ? (_a(), ur.sanitize(l, {
    USE_PROFILES: { html: !0 },
    ADD_ATTR: ["target", "data-chat-action"],
    FORBID_TAGS: ["style", "iframe", "object", "embed", "form", "base", "meta", "link"],
    FORBID_ATTR: ["formaction"]
  })) : "";
}
function Ba(l) {
  try {
    const h = new URL(String(l ?? "").trim());
    return h.protocol === "https:" || h.protocol === "http:" ? h.toString() : null;
  } catch {
    return null;
  }
}
const Ra = 10, Ua = 1440 * 60 * 1e3;
function za(l, h = Date.now()) {
  var P;
  const u = (P = l == null ? void 0 : l.data) == null ? void 0 : P.catalog_synced_at, d = typeof u == "string" ? Date.parse(u) : NaN;
  if (!Number.isFinite(d) || h - d < Ua) return null;
  const x = new Date(d), b = (A) => String(A).padStart(2, "0");
  return `${b(x.getDate())}.${b(x.getMonth() + 1)}.${x.getFullYear()}`;
}
function We(l) {
  if (typeof l != "string") return null;
  try {
    const h = new URL(l.trim());
    return h.protocol === "https:" || h.protocol === "http:" ? h.toString() : null;
  } catch {
    return null;
  }
}
function Ke(l) {
  if (typeof l != "string" && typeof l != "number") return null;
  const h = String(l).trim();
  return h === "" ? null : h;
}
function $a(l) {
  var u, d, x, b, P, A, L, S, N, w, B, q, Q;
  const h = ((u = l.data) == null ? void 0 : u.products) || ((d = l.data) == null ? void 0 : d.items) || l.products || l.items;
  return Array.isArray(h) ? h : (x = l.data) != null && x.title || (b = l.data) != null && b.name || l.name ? [{
    id: (P = l.data) == null ? void 0 : P.id,
    name: ((A = l.data) == null ? void 0 : A.title) || ((L = l.data) == null ? void 0 : L.name) || l.name,
    subtitle: ((S = l.data) == null ? void 0 : S.subtitle) || l.subtitle,
    price: ((N = l.data) == null ? void 0 : N.price) || l.price,
    image: ((w = l.data) == null ? void 0 : w.image) || ((B = l.data) == null ? void 0 : B.image_url) || l.image,
    addToCartUrl: ((q = l.data) == null ? void 0 : q.addToCartUrl) || ((Q = l.data) == null ? void 0 : Q.add_to_cart_url) || l.addToCartUrl
  }] : [];
}
function dr(l, h = Ra) {
  const u = [];
  return $a(l).forEach((d, x) => {
    if (!d || typeof d != "object") return;
    const b = Ke(d.name) || Ke(d.title) || Ke(d.productName);
    if (!b) return;
    const P = We(d.image) || We(d.image_url) || We(d.imageUrl) || We(d.featured_image) || (Array.isArray(d.images) ? We(d.images[0]) : null), A = Number(d.discountPercent);
    u.push({
      id: Ke(d.id) || String(x),
      name: b,
      subtitle: Ke(d.subtitle),
      price: Ke(d.price),
      priceFrom: d.priceFrom === !0,
      compareAtPrice: Ke(d.compareAtPrice),
      discountPercent: Number.isFinite(A) && A > 0 && A < 100 ? Math.round(A) : null,
      priceNote: Ke(d.priceNote),
      stockStatus: Ke(d.stockStatus),
      availability: Ke(d.availability),
      image: P,
      url: We(d.url) || We(d.productUrl) || We(d.product_url) || We(d.addToCartUrl) || We(d.add_to_cart_url),
      buyUrl: We(d.buyUrl),
      ctaLabel: Ke(d.buttonLabel)
    });
  }), u.slice(0, h);
}
function fr(l) {
  return !!(l.buyUrl && l.buyUrl !== l.url);
}
const Ha = { table: 30, card: 1, compare: 3 };
function Va(l) {
  var u;
  const h = l.layout || ((u = l.data) == null ? void 0 : u.layout);
  return h === "card" || h === "compare" ? h : "table";
}
function Es({ item: l, language: h }) {
  return l.price ? /* @__PURE__ */ o("span", { className: "pitaj-cv-price", children: [
    l.priceFrom ? `${ce("productsFrom", h)} ` : "",
    l.price,
    l.compareAtPrice && /* @__PURE__ */ o("s", { className: "pitaj-pc-compare", children: l.compareAtPrice }),
    l.discountPercent && /* @__PURE__ */ o("span", { className: "pitaj-pc-discount", children: [
      "-",
      l.discountPercent,
      "%"
    ] })
  ] }) : null;
}
function Yi({ item: l }) {
  return l.stockStatus ? /* @__PURE__ */ o("span", { className: `pitaj-pc-stock ${l.availability === "out_of_stock" ? "is-out" : l.availability === "in_stock" ? "is-in" : ""}`, children: l.stockStatus }) : null;
}
function Zi({ item: l, language: h, onClick: u }) {
  return /* @__PURE__ */ o(us, { children: [
    l.url && /* @__PURE__ */ o("a", { className: "pitaj-pc-cta", href: l.url, target: "_blank", rel: "noopener noreferrer", onClick: () => u("view"), children: l.ctaLabel || ce("productsView", h) }),
    fr(l) && /* @__PURE__ */ o("a", { className: "pitaj-pc-buy", href: l.buyUrl, target: "_blank", rel: "noopener noreferrer", onClick: () => u("buy"), children: ce("productsBuy", h) })
  ] });
}
function qa({ config: l, onProductEvent: h, language: u }) {
  var S;
  const d = Va(l), x = dr(l, Ha[d]), b = ce(d === "card" ? "catalogViewCard" : d === "compare" ? "catalogViewCompare" : "catalogViewTable", u), P = typeof l.title == "string" && l.title || typeof ((S = l.data) == null ? void 0 : S.title) == "string" && l.data.title || b;
  if (x.length === 0 || d === "compare" && x.length < 2)
    return /* @__PURE__ */ o("div", { role: "status", className: "pitaj-inline-widget-card", children: ce("catalogNoData", u) });
  const A = (N, w) => (B) => h == null ? void 0 : h("product_clicked", { productId: N.id, name: N.name, position: w + 1, kind: B, url: B === "buy" ? N.buyUrl : N.url }), L = /* @__PURE__ */ o("div", { className: "pitaj-widget-bar", children: [
    /* @__PURE__ */ o("span", { className: "pitaj-widget-badge-icon", children: /* @__PURE__ */ o(ct, { size: 14 }) }),
    /* @__PURE__ */ o("span", { className: "pitaj-widget-bar-title", children: P })
  ] });
  if (d === "card") {
    const N = x[0];
    return /* @__PURE__ */ o("div", { className: "pitaj-inline-widget-card pitaj-cv", role: "region", "aria-label": P, children: [
      L,
      /* @__PURE__ */ o("div", { className: "pitaj-cv-card", children: [
        N.image && /* @__PURE__ */ o("img", { className: "pitaj-cv-card-image", src: N.image, alt: N.name, loading: "lazy", referrerPolicy: "no-referrer" }),
        /* @__PURE__ */ o("div", { className: "pitaj-pc-body", children: [
          /* @__PURE__ */ o("h4", { className: "pitaj-pc-name", children: N.name }),
          N.subtitle && /* @__PURE__ */ o("p", { className: "pitaj-pc-sub", children: N.subtitle }),
          /* @__PURE__ */ o(Es, { item: N, language: u }),
          /* @__PURE__ */ o(Yi, { item: N }),
          /* @__PURE__ */ o("div", { className: "pitaj-pc-actions", children: /* @__PURE__ */ o(Zi, { item: N, language: u, onClick: A(N, 0) }) })
        ] })
      ] })
    ] });
  }
  if (d === "compare") {
    const N = [
      [ce("catalogPrice", u), (w) => /* @__PURE__ */ o(Es, { item: w, language: u })],
      [ce("catalogAvailability", u), (w) => w.stockStatus]
    ];
    return x.some((w) => w.subtitle) && N.push(["", (w) => w.subtitle]), /* @__PURE__ */ o("div", { className: "pitaj-inline-widget-card pitaj-cv", role: "region", "aria-label": P, children: [
      L,
      /* @__PURE__ */ o("div", { className: "pitaj-cv-scroll", children: /* @__PURE__ */ o("table", { className: "pitaj-cv-table", children: [
        /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ o("tr", { children: [
          /* @__PURE__ */ o("th", { scope: "col" }),
          x.map((w) => /* @__PURE__ */ o("th", { scope: "col", children: w.name }, w.id))
        ] }) }),
        /* @__PURE__ */ o("tbody", { children: [
          N.map(([w, B]) => /* @__PURE__ */ o("tr", { children: [
            /* @__PURE__ */ o("th", { scope: "row", children: w }),
            x.map((q) => /* @__PURE__ */ o("td", { children: B(q) || "—" }, q.id))
          ] }, w || "extra")),
          /* @__PURE__ */ o("tr", { children: [
            /* @__PURE__ */ o("th", { scope: "row" }),
            x.map((w, B) => /* @__PURE__ */ o("td", { children: /* @__PURE__ */ o(Zi, { item: w, language: u, onClick: A(w, B) }) }, w.id))
          ] })
        ] })
      ] }) })
    ] });
  }
  return /* @__PURE__ */ o("div", { className: "pitaj-inline-widget-card pitaj-cv", role: "region", "aria-label": P, children: [
    L,
    /* @__PURE__ */ o("div", { className: "pitaj-cv-scroll", children: /* @__PURE__ */ o("table", { className: "pitaj-cv-table pitaj-cv-list", children: [
      /* @__PURE__ */ o("thead", { children: /* @__PURE__ */ o("tr", { children: [
        /* @__PURE__ */ o("th", { scope: "col", children: ce("productsTitle", u) }),
        /* @__PURE__ */ o("th", { scope: "col", children: ce("catalogPrice", u) })
      ] }) }),
      /* @__PURE__ */ o("tbody", { children: x.map((N, w) => /* @__PURE__ */ o("tr", { children: [
        /* @__PURE__ */ o("td", { children: [
          N.url ? /* @__PURE__ */ o("a", { href: N.url, target: "_blank", rel: "noopener noreferrer", onClick: () => A(N, w)("view"), children: N.name }) : N.name,
          N.stockStatus && /* @__PURE__ */ o(Yi, { item: N })
        ] }),
        /* @__PURE__ */ o("td", { children: /* @__PURE__ */ o(Es, { item: N, language: u }) })
      ] }, N.id)) })
    ] }) })
  ] });
}
function Wa(l) {
  if (typeof l != "string") return null;
  try {
    const h = new URL(l.trim());
    return h.protocol === "https:" ? h.toString() : null;
  } catch {
    return null;
  }
}
function ls(l, h) {
  if (typeof l != "string" && typeof l != "number") return null;
  const u = String(l).trim().slice(0, h);
  return u === "" ? null : u;
}
function Ka(l) {
  const h = l.replace(/[^0-9+]/g, "");
  return /^\+?\d{5,}$/.test(h) ? `tel:${h}` : null;
}
function Ga(l) {
  var d;
  const h = Array.isArray((d = l.data) == null ? void 0 : d.items) ? l.data.items : Array.isArray(l.items) ? l.items : [], u = [];
  for (const x of h.slice(0, 30)) {
    if (!x || typeof x != "object") continue;
    const b = ls(x.title, 120);
    b && u.push({ title: b, subtitle: ls(x.subtitle, 120), details: ls(x.details, 300), phone: ls(x.phone, 40), url: Wa(x.url) });
  }
  return u;
}
function Ja({ config: l, onAction: h, language: u }) {
  var A, L;
  const d = l.layout || ((A = l.data) == null ? void 0 : A.layout), x = d === "schedule" || d === "people" ? d : "locations", b = Ga(l), P = typeof l.title == "string" && l.title || typeof ((L = l.data) == null ? void 0 : L.title) == "string" && l.data.title || "";
  return b.length === 0 ? /* @__PURE__ */ o("div", { role: "status", className: "pitaj-inline-widget-card", children: ce("manualEmpty", u) }) : /* @__PURE__ */ o("div", { className: "pitaj-inline-widget-card pitaj-ml", role: "region", "aria-label": P || void 0, children: [
    P && /* @__PURE__ */ o("div", { className: "pitaj-widget-bar", children: /* @__PURE__ */ o("span", { className: "pitaj-widget-bar-title", children: P }) }),
    /* @__PURE__ */ o("ul", { className: "pitaj-ml-list", children: b.map((S, N) => {
      const w = S.phone ? Ka(S.phone) : null;
      return /* @__PURE__ */ o("li", { className: "pitaj-ml-item", children: [
        /* @__PURE__ */ o("div", { className: "pitaj-ml-title", children: S.title }),
        S.subtitle && /* @__PURE__ */ o("div", { className: "pitaj-ml-sub", children: S.subtitle }),
        S.details && /* @__PURE__ */ o("div", { className: "pitaj-ml-details", children: S.details }),
        /* @__PURE__ */ o("div", { className: "pitaj-ml-actions", children: [
          S.phone && (w ? /* @__PURE__ */ o("a", { href: w, children: S.phone }) : /* @__PURE__ */ o("span", { children: S.phone })),
          S.url && /* @__PURE__ */ o("a", { href: S.url, target: "_blank", rel: "noopener noreferrer", children: x === "locations" ? ce("manualMap", u) : ce("manualMore", u) }),
          x === "schedule" && h && /* @__PURE__ */ o("button", { type: "button", className: "pitaj-pc-cta", onClick: () => h(`${ce("manualBook", u)}: ${S.title}${S.subtitle ? ` (${S.subtitle})` : ""}`), children: ce("manualBook", u) })
        ] })
      ] }, `${N}-${S.title}`);
    }) })
  ] });
}
function Xa({ item: l }) {
  const [h, u] = re(!1);
  return !l.image || h ? /* @__PURE__ */ o("div", { className: "pitaj-pc-image pitaj-pc-image-empty", "aria-hidden": "true", children: /* @__PURE__ */ o(ct, { size: 28 }) }) : /* @__PURE__ */ o("div", { className: "pitaj-pc-image", children: /* @__PURE__ */ o(
    "img",
    {
      src: l.image,
      alt: l.name,
      loading: "lazy",
      decoding: "async",
      referrerPolicy: "no-referrer",
      onError: () => u(!0)
    }
  ) });
}
function Ya({ note: l, language: h }) {
  const [u, d] = re(!1), x = Je(null);
  return At(() => {
    if (!u) return;
    const b = (A) => {
      x.current && !A.composedPath().includes(x.current) && d(!1);
    }, P = (A) => {
      A.key === "Escape" && d(!1);
    };
    return document.addEventListener("pointerdown", b, !0), document.addEventListener("keydown", P), () => {
      document.removeEventListener("pointerdown", b, !0), document.removeEventListener("keydown", P);
    };
  }, [u]), /* @__PURE__ */ o("span", { className: "pitaj-pc-note", ref: x, children: [
    /* @__PURE__ */ o(
      "button",
      {
        type: "button",
        className: "pitaj-pc-note-btn",
        "aria-label": ce("priceNoteLabel", h),
        "aria-expanded": u,
        onClick: () => d((b) => !b),
        onMouseEnter: () => d(!0),
        onMouseLeave: () => d(!1),
        onFocus: () => d(!0),
        onBlur: () => d(!1),
        children: /* @__PURE__ */ o(ta, { size: 13 })
      }
    ),
    u && /* @__PURE__ */ o("span", { className: "pitaj-pc-note-tip", role: "tooltip", children: l })
  ] });
}
function Za({ config: l, onAction: h, onProductEvent: u, language: d }) {
  const x = dr(l), b = za(l), P = Je(null), A = Je(/* @__PURE__ */ new Set()), [L, S] = re(0), [N, w] = re({ start: !0, end: !1 }), B = typeof l.title == "string" && l.title || ce("productsTitle", d), q = () => {
    const D = P.current;
    if (!D) return;
    const U = D.firstElementChild, m = U ? U.getBoundingClientRect().width + 10 : 1;
    S(Math.min(x.length - 1, Math.max(0, Math.round(D.scrollLeft / m)))), w({ start: D.scrollLeft <= 2, end: D.scrollLeft + D.clientWidth >= D.scrollWidth - 2 });
  };
  if (At(() => {
    q();
    const D = P.current;
    if (!D || typeof IntersectionObserver > "u" || l.preview === !0) return;
    const U = new IntersectionObserver((m) => {
      var Y;
      for (const J of m) {
        const pe = J.target.dataset.productId;
        if (!J.isIntersecting || !pe || A.current.has(pe)) continue;
        A.current.add(pe);
        const ae = Number(J.target.dataset.position);
        u == null || u("product_viewed", { productId: pe, name: (Y = x[ae]) == null ? void 0 : Y.name, position: ae + 1 });
      }
    }, { root: D, threshold: 0.6 });
    return D.querySelectorAll("[data-product-id]").forEach((m) => U.observe(m)), () => U.disconnect();
  }, [x.length]), x.length === 0) return /* @__PURE__ */ o("div", { role: "status", children: ce("productsUnavailable", d) });
  const Q = (D) => {
    var pe;
    const U = P.current;
    if (!U) return;
    const m = U.firstElementChild, Y = (m ? m.getBoundingClientRect().width : U.clientWidth * 0.8) + 10, J = typeof window < "u" && ((pe = window.matchMedia) == null ? void 0 : pe.call(window, "(prefers-reduced-motion: reduce)").matches);
    U.scrollBy({ left: D * Y, behavior: J ? "auto" : "smooth" });
  }, be = (D, U, m) => {
    u == null || u("product_clicked", { productId: D.id, name: D.name, position: U + 1, kind: m, url: m === "buy" ? D.buyUrl : D.url });
  };
  return /* @__PURE__ */ o("div", { className: "pitaj-inline-widget-card pitaj-pc", children: [
    /* @__PURE__ */ o("div", { className: "pitaj-widget-bar", children: [
      /* @__PURE__ */ o("span", { className: "pitaj-widget-badge-icon", children: /* @__PURE__ */ o(ct, { size: 14 }) }),
      /* @__PURE__ */ o("span", { className: "pitaj-widget-bar-title", children: B }),
      x.length > 1 && /* @__PURE__ */ o("span", { className: "pitaj-widget-counter", children: [
        L + 1,
        " / ",
        x.length
      ] })
    ] }),
    /* @__PURE__ */ o("div", { className: "pitaj-pc-viewport", children: [
      x.length > 1 && /* @__PURE__ */ o("button", { type: "button", className: "pitaj-pc-arrow pitaj-pc-arrow-prev", "aria-label": ce("productsPrevious", d), disabled: N.start, onClick: () => Q(-1), children: /* @__PURE__ */ o(ea, { size: 16 }) }),
      /* @__PURE__ */ o(
        "div",
        {
          className: "pitaj-pc-track",
          ref: P,
          role: "region",
          "aria-roledescription": "carousel",
          "aria-label": B,
          tabIndex: 0,
          onScroll: q,
          onKeyDown: (D) => {
            D.key === "ArrowRight" && (D.preventDefault(), Q(1)), D.key === "ArrowLeft" && (D.preventDefault(), Q(-1));
          },
          children: x.map((D, U) => /* @__PURE__ */ o(
            "article",
            {
              className: "pitaj-pc-card",
              role: "group",
              "aria-roledescription": "slide",
              "aria-label": `${U + 1} / ${x.length}`,
              "data-product-id": D.id,
              "data-position": U,
              children: [
                /* @__PURE__ */ o(Xa, { item: D }),
                /* @__PURE__ */ o("div", { className: "pitaj-pc-body", children: [
                  /* @__PURE__ */ o("h4", { className: "pitaj-pc-name", children: D.name }),
                  D.subtitle && /* @__PURE__ */ o("p", { className: "pitaj-pc-sub", children: D.subtitle }),
                  D.price && /* @__PURE__ */ o("div", { className: "pitaj-pc-price-row", children: [
                    /* @__PURE__ */ o("span", { className: "pitaj-pc-price", children: [
                      D.priceFrom ? `${ce("productsFrom", d)} ` : "",
                      D.price
                    ] }),
                    D.compareAtPrice && /* @__PURE__ */ o("s", { className: "pitaj-pc-compare", children: D.compareAtPrice }),
                    D.discountPercent && /* @__PURE__ */ o("span", { className: "pitaj-pc-discount", children: [
                      "-",
                      D.discountPercent,
                      "%"
                    ] }),
                    (D.priceNote || b && /\d/.test(D.price)) && /* @__PURE__ */ o(Ya, { note: D.priceNote || ce("priceStaleNote", d).replace("{date}", b), language: d })
                  ] }),
                  D.stockStatus && /* @__PURE__ */ o("span", { className: `pitaj-pc-stock ${D.availability === "out_of_stock" ? "is-out" : D.availability === "in_stock" ? "is-in" : ""}`, children: D.stockStatus }),
                  /* @__PURE__ */ o("div", { className: "pitaj-pc-actions", children: [
                    D.url ? /* @__PURE__ */ o("a", { className: "pitaj-pc-cta", href: D.url, target: "_blank", rel: "noopener noreferrer", onClick: () => be(D, U, "view"), children: D.ctaLabel || ce("productsView", d) }) : /* @__PURE__ */ o("button", { type: "button", className: "pitaj-pc-cta", onClick: () => {
                      be(D, U, "view"), h == null || h(`${ce("productsAsk", d)} ${D.name}`);
                    }, children: D.ctaLabel || ce("productsView", d) }),
                    fr(D) && /* @__PURE__ */ o("a", { className: "pitaj-pc-buy", href: D.buyUrl, target: "_blank", rel: "noopener noreferrer", onClick: () => be(D, U, "buy"), children: ce("productsBuy", d) })
                  ] })
                ] })
              ]
            },
            D.id
          ))
        }
      ),
      x.length > 1 && /* @__PURE__ */ o("button", { type: "button", className: "pitaj-pc-arrow pitaj-pc-arrow-next", "aria-label": ce("productsNext", d), disabled: N.end, onClick: () => Q(1), children: /* @__PURE__ */ o(tr, { size: 16 }) })
    ] }),
    x.length > 1 && /* @__PURE__ */ o("div", { className: "pitaj-pc-dots", "aria-hidden": "true", children: x.map((D, U) => /* @__PURE__ */ o("span", { className: U === L ? "is-active" : "" }, D.id)) })
  ] });
}
function Qa(l, h, u) {
  return l === "rate_limit" ? "rate_limit" : l === "api" && h === "FUNCTION_INVALID_INPUT" ? "input" : l === "api" && (h === "FUNCTION_UNAVAILABLE" || u === 404) ? "unavailable" : "failed";
}
function en(l, h) {
  const u = Number.isFinite(h) ? Math.min(2592e3, Math.max(1, Math.ceil(h))) : 60;
  return l + u * 1e3;
}
function tn(l, h) {
  const u = Array.isArray(h.function_names) ? h.function_names : [], d = Array.isArray(h.functions) ? h.functions : [];
  return u.includes(l) || d.some((x) => x && (x.id === l || x.name === l));
}
function sn(l, h) {
  if (h.function_execution_enabled !== !0 || !h.function_actions || typeof h.function_actions != "object") return null;
  const u = Object.prototype.hasOwnProperty.call(h.function_actions, l) ? h.function_actions[l] : null;
  return typeof u == "string" && /^[a-zA-Z0-9_-]{1,100}$/.test(u) ? u : null;
}
function rn(l, h, u) {
  const d = /* @__PURE__ */ Object.create(null), x = h.function_inputs && Object.prototype.hasOwnProperty.call(h.function_inputs, l) ? h.function_inputs[l] : [];
  if (!Array.isArray(x) || x.length > 10) return d;
  for (const b of x)
    typeof b == "string" && /^[a-zA-Z][a-zA-Z0-9_]{0,63}$/.test(b) && Object.prototype.hasOwnProperty.call(u, b) && typeof u[b] == "string" && (d[b] = u[b]);
  return d;
}
function an(l, h, u) {
  const d = { ...l.default_data || {}, ...l.data || {} };
  if (!u && Array.isArray(l.function_output_fields))
    for (const x of l.function_output_fields)
      typeof x == "string" && x !== "function_state" && /^[a-zA-Z][a-zA-Z0-9_]{0,63}$/.test(x) && delete d[x];
  return { ...d, ...h };
}
function nn(l, h) {
  if (h || l.data_is_sample !== !0) return !1;
  const u = l.data && typeof l.data == "object" && Object.keys(l.data).length > 0, d = l.function_actions && typeof l.function_actions == "object" ? Object.keys(l.function_actions) : [], x = l.function_execution_enabled === !0 && d.length > 0;
  return !u && !x;
}
function on(l) {
  var u;
  const h = (u = l.data_state) == null ? void 0 : u.status;
  return h === "empty" ? "Nismo pronašli podatke za ovaj upit." : h === "unavailable" ? "Podaci trenutno nisu dostupni." : h === "needs_input" ? "Napišite podatke koji su potrebni da bismo nastavili." : null;
}
async function ln(l, h, u, d, x, b = {}) {
  if (!Number.isSafeInteger(h) || h < 1 || !/^[a-zA-Z0-9_-]{1,100}$/.test(u) || !/^[1-9]\d*$/.test(d)) throw new Error("Funkcija nije dostupna.");
  const P = (x || window.location.origin).replace(/\/$/, ""), A = await hs(l, x), L = `${P}/api/widget/${encodeURIComponent(l)}/v2/inline-widgets/${h}/functions/${encodeURIComponent(u)}/execute`, S = await fetch(L, { method: "POST", cache: "no-store", headers: { Accept: "application/json", "Content-Type": "application/json", Authorization: `Bearer ${A}` }, body: JSON.stringify({ conversation_id: Number(d), inputs: b }) });
  S.ok || await sr(S, "Funkciju trenutno nije moguće izvršiti.");
  const { data: N } = await S.json();
  if (!N || typeof N != "object" || Array.isArray(N) || Object.keys(N).length > 30 || Object.entries(N).some(([w, B]) => !/^[a-zA-Z][a-zA-Z0-9_]{0,63}$/.test(w) || !["string", "number", "boolean"].includes(typeof B)))
    throw new Error("Neispravan odgovor funkcije.");
  return N;
}
const cn = ".pitaj-product-card{display:flex;flex-direction:column;gap:10px}.pitaj-product-image-wrap{position:relative;width:100%;height:160px;border-radius:var(--pitaj-radius-btn, 8px);overflow:hidden;background:#f8fafc}.pitaj-product-img{width:100%;height:100%;object-fit:cover}.pitaj-carousel-controls{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;align-items:center;justify-content:space-between;padding:0 8px;pointer-events:none}.pitaj-carousel-btn{pointer-events:auto;width:28px;height:28px;border-radius:50%;background:#ffffffe0;border:1px solid rgba(0,0,0,.08);box-shadow:0 1px 4px #0000001f;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:16px;font-weight:700;color:#1e293b}.pitaj-product-info{display:flex;flex-direction:column;gap:4px}.pitaj-product-name{font-size:14.5px;font-weight:600}.pitaj-product-sub{font-size:12px;color:var(--pitaj-muted, #64748b)}.pitaj-product-price{font-size:15px;font-weight:700;color:var(--pitaj-accent, #0f172a);margin-top:2px}.pitaj-cart-items-list{display:flex;flex-direction:column;gap:10px}.pitaj-cart-item-row{display:flex;align-items:center;gap:10px}.pitaj-cart-thumb{width:44px;height:44px;border-radius:var(--pitaj-radius-corner-sm, 6px);object-fit:cover;background:#f1f5f9}.pitaj-cart-details{flex:1;min-width:0}.pitaj-cart-item-name{font-size:13px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pitaj-cart-item-sub{font-size:11.5px;color:var(--pitaj-muted, #64748b)}.pitaj-cart-item-price{font-size:13.5px;font-weight:600}.pitaj-cart-divider{height:1px;background:var(--pitaj-border, #e5e7eb);margin:10px 0}.pitaj-cart-summary{display:flex;justify-content:space-between;align-items:center;font-size:13.5px;font-weight:600;margin-bottom:8px}.pitaj-cart-payment{display:flex;justify-content:space-between;align-items:center;font-size:12px;color:var(--pitaj-muted, #64748b);margin-bottom:12px}.pitaj-cart-card-pill{font-weight:600;color:#1e293b;background:#f1f5f9;padding:3px 8px;border-radius:6px}.chart-widget .pitaj-chart-label{font-size:12px;color:var(--pitaj-muted, #64748b)}.chart-widget .pitaj-chart-big-number{font-size:26px;font-weight:700;color:var(--pitaj-fg, #0f172a);margin:4px 0 16px}.pitaj-bar-chart-container{display:flex;align-items:flex-end;justify-content:space-between;height:110px;padding:6px 4px 0;border-bottom:1px solid var(--pitaj-border, #e2e8f0)}.pitaj-bar-col{display:flex;flex-direction:column;align-items:center;gap:6px;flex:1}.pitaj-bar-track{width:14px;height:85px;background:#f1f5f9;border-radius:4px;display:flex;align-items:flex-end;overflow:hidden}.pitaj-bar-fill{width:100%;background:var(--pitaj-accent, #3b82f6);border-radius:4px 4px 0 0;transition:height .3s ease}.pitaj-bar-day{font-size:10px;color:var(--pitaj-muted, #94a3b8);font-weight:600}.pitaj-classes-list{display:flex;flex-direction:column;gap:10px}.pitaj-class-item{display:flex;align-items:center;gap:10px;padding:8px;border-radius:var(--pitaj-radius-btn, 8px);background:var(--pitaj-surface-subtle, #f8fafc);border:1px solid var(--pitaj-border, #e2e8f0)}.pitaj-class-thumb{width:52px;height:52px;border-radius:var(--pitaj-radius-corner-sm, 6px);object-fit:cover}.pitaj-class-info{flex:1;min-width:0}.pitaj-class-header{display:flex;align-items:center;gap:6px}.pitaj-class-title{font-size:13px;font-weight:600}.pitaj-level-badge{font-size:10px;font-weight:600;padding:1px 6px;border-radius:10px}.pitaj-level-badge.level-green{background:#dcfce7;color:#15803d}.pitaj-level-badge.level-purple{background:#f3e8ff;color:#7e22ce}.pitaj-class-time{font-size:11.5px;font-weight:500;color:var(--pitaj-fg, #1e293b);margin-top:1px}.pitaj-class-instructor{font-size:10.5px;color:var(--pitaj-muted, #64748b)}.pitaj-book-btn{padding:6px 12px;font-size:12px;font-weight:600;background:#16a34a;color:#fff;border:none;border-radius:var(--pitaj-radius-btn, 14px);cursor:pointer;white-space:nowrap}.pitaj-book-btn.is-booked{background:#e2e8f0;color:#475569}.pitaj-hotel-image-wrap{position:relative;width:100%;height:140px;border-radius:var(--pitaj-radius-btn, 8px);overflow:hidden;margin-bottom:10px}.pitaj-hotel-img{width:100%;height:100%;object-fit:cover}.pitaj-hotel-badge-price{position:absolute;top:8px;right:8px;background:#0f172ad9;color:#fff;font-size:12px;font-weight:600;padding:3px 8px;border-radius:6px;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.pitaj-hotel-name{font-size:15px;font-weight:600}.pitaj-hotel-meta{display:flex;justify-content:space-between;align-items:center;font-size:11.5px;color:var(--pitaj-muted, #64748b);margin:4px 0 10px}.pitaj-meta-item{display:inline-flex;align-items:center;gap:4px}.pitaj-meta-icon{color:var(--pitaj-muted, #64748b)}.pitaj-rating{color:#f59e0b;font-weight:600}.pitaj-star-icon{color:#f59e0b}.pitaj-amenities-row{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px}.pitaj-amenity-chip{display:inline-flex;align-items:center;gap:5px;font-size:11px;font-weight:500;padding:3px 8px;background:var(--pitaj-surface-subtle, #f1f5f9);border:1px solid var(--pitaj-border, #e2e8f0);border-radius:6px;color:var(--pitaj-fg, #334155)}.pitaj-amenity-icon{flex-shrink:0;color:var(--pitaj-muted, #64748b)}.pitaj-inline-widget-card.weather-widget{background:linear-gradient(135deg,#2563eb,#3b82f6,#60a5fa);color:#fff;border:none;padding:16px}.pitaj-weather-top{display:flex;align-items:center;justify-content:space-between}.pitaj-weather-svg{color:#fef08a}.pitaj-weather-temp{font-size:32px;font-weight:700}.pitaj-weather-city{font-size:16px;font-weight:600;margin-top:6px}.pitaj-weather-cond{font-size:13px;font-weight:500;opacity:.9}.pitaj-weather-desc{font-size:11.5px;opacity:.82;margin-top:6px;line-height:1.4}.pitaj-iframe-container{position:relative;width:100%;border-radius:8px;overflow:hidden;background:#f8fafc}.pitaj-iframe-frame{width:100%;height:100%;border:none}.pitaj-iframe-loading{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;background:#ffffffb3}.pitaj-iframe-open-btn{font-size:14px;text-decoration:none;color:var(--pitaj-muted, #64748b);padding:2px 6px;border-radius:4px}.pitaj-iframe-open-btn:hover{background:var(--pitaj-surface-subtle, #f1f5f9);color:var(--pitaj-fg, #0f172a)}.pitaj-booking-card{padding:12px;border-radius:12px;background:var(--pitaj-surface, #ffffff);border:1px solid var(--pitaj-border, #e2e8f0)}.pitaj-booking-header{display:flex;align-items:center;gap:10px;margin-bottom:6px}.pitaj-booking-brand-icon{width:36px;height:36px;border-radius:8px;background:var(--pitaj-surface-subtle, #f1f5f9);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;color:var(--pitaj-fg, #0f172a);flex-shrink:0;border:1px solid var(--pitaj-border, #e2e8f0)}.pitaj-cal-logo{font-weight:800;font-size:12px;letter-spacing:-.5px;color:#000}.pitaj-calendly-logo{font-weight:800;font-size:15px;color:#006bff}.pitaj-booking-info{flex:1;min-width:0}.pitaj-booking-title{font-size:13px;font-weight:600;color:var(--pitaj-fg, #0f172a);line-height:1.25;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pitaj-booking-meta{display:flex;align-items:center;gap:5px;margin-top:3px}.pitaj-booking-tag{font-size:10.5px;font-weight:500;color:var(--pitaj-muted, #64748b);background:var(--pitaj-surface-subtle, #f8fafc);padding:1px 6px;border-radius:4px;border:1px solid var(--pitaj-border, #e2e8f0)}.pitaj-booking-desc{font-size:11.5px;color:var(--pitaj-muted, #64748b);margin-bottom:8px;line-height:1.4}.pitaj-booking-open-btn{font-size:14px;text-decoration:none;color:var(--pitaj-muted, #64748b);padding:3px 6px;border-radius:4px;transition:all .15s ease;display:flex;align-items:center;justify-content:center}.pitaj-booking-open-btn:hover{background:var(--pitaj-surface-subtle, #f1f5f9);color:var(--pitaj-fg, #0f172a)}.pitaj-booking-frame-wrap{position:relative;width:100%;border-radius:8px;overflow:hidden;background:#f8fafc;border:1px solid var(--pitaj-border, #e2e8f0)}.pitaj-booking-frame{width:100%;height:100%;border:none}.pitaj-booking-loading{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;background:#ffffffd9;z-index:2}.pitaj-api-widget{background:var(--pitaj-surface, #ffffff);border:1px solid var(--pitaj-border, #e2e8f0);border-radius:12px;padding:12px 14px;font-family:inherit;box-shadow:0 1px 3px #0000000d;margin:4px 0;max-width:100%}.pitaj-api-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid var(--pitaj-border, #e2e8f0)}.pitaj-api-title-row{display:flex;align-items:center;gap:6px}.pitaj-api-icon{font-size:14px}.pitaj-api-title{font-size:13px;font-weight:600;color:var(--pitaj-fg, #0f172a)}.pitaj-api-badge{font-size:10px;font-weight:600;color:#059669;background:#ecfdf5;border:1px solid #a7f3d0;padding:1px 7px;border-radius:9999px;text-transform:uppercase;letter-spacing:.03em}.pitaj-api-body{display:flex;flex-direction:column;gap:6px}.pitaj-api-row{display:flex;justify-content:space-between;align-items:center;font-size:12px;gap:8px;padding:3px 0;border-bottom:1px dashed var(--pitaj-border, #f1f5f9)}.pitaj-api-row:last-child{border-bottom:none}.pitaj-api-key{color:var(--pitaj-muted, #64748b);font-weight:500;text-transform:capitalize}.pitaj-api-val{color:var(--pitaj-fg, #0f172a);font-weight:600;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;word-break:break-all;text-align:right}.pitaj-api-empty{font-size:12px;color:var(--pitaj-muted, #64748b);font-style:italic;padding:4px 0}.pitaj-order-card{background:var(--pitaj-surface, #ffffff);border:1px solid var(--pitaj-border, #e2e8f0);border-radius:12px;padding:12px 14px;font-family:inherit;box-shadow:0 1px 3px #0000000d;margin:4px 0;max-width:100%}.pitaj-order-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid var(--pitaj-border, #e2e8f0)}.pitaj-order-id-group{display:flex;align-items:center;gap:6px}.pitaj-order-icon{font-size:15px}.pitaj-order-number{font-size:13.5px;font-weight:700;color:var(--pitaj-fg, #0f172a)}.pitaj-order-status-badge{font-size:11px;font-weight:600;padding:2px 8px;border-radius:9999px}.pitaj-order-badge-success{color:#059669;background:#ecfdf5;border:1px solid #a7f3d0}.pitaj-order-badge-info{color:#0284c7;background:#f0f9ff;border:1px solid #bae6fd}.pitaj-order-badge-pending{color:#d97706;background:#fffbeb;border:1px solid #fde68a}.pitaj-order-details{display:flex;flex-direction:column;gap:8px}.pitaj-order-tracking-box{background:var(--pitaj-surface-subtle, #f8fafc);border:1px solid var(--pitaj-border, #e2e8f0);border-radius:8px;padding:8px 10px}.pitaj-order-tracking-title{font-size:11px;color:var(--pitaj-muted, #64748b);margin-bottom:3px}.pitaj-order-tracking-val{display:flex;align-items:center;justify-content:space-between;font-size:12px;color:var(--pitaj-fg, #0f172a)}.pitaj-order-tracking-link{font-size:11.5px;font-weight:600;color:#2563eb;text-decoration:none;padding:2px 6px;background:#eff6ff;border-radius:4px}.pitaj-order-notice{font-size:11.5px;color:var(--pitaj-muted, #64748b);font-style:italic;padding:4px 0}.pitaj-order-meta-grid{display:flex;flex-direction:column;gap:4px;padding-top:4px}.pitaj-order-meta-item{display:flex;justify-content:space-between;font-size:11.5px}.pitaj-order-meta-label{color:var(--pitaj-muted, #64748b)}.pitaj-order-meta-val{color:var(--pitaj-fg, #0f172a);font-weight:500;text-align:right}.pitaj-pc-viewport{position:relative}.pitaj-pc-track{display:flex;gap:10px;overflow-x:auto;scroll-snap-type:x mandatory;scroll-padding:0 12px;padding:12px;overscroll-behavior-x:contain;-webkit-overflow-scrolling:touch;scrollbar-width:none}.pitaj-pc-track::-webkit-scrollbar{display:none}.pitaj-pc-track:focus-visible{outline:2px solid var(--pitaj-accent-ring, rgba(37, 99, 235, .25));outline-offset:-2px}.pitaj-pc-card{flex:0 0 min(74%,210px);scroll-snap-align:start;display:flex;flex-direction:column;border:1px solid var(--pitaj-card-border, #e2e8f0);border-radius:var(--pitaj-radius-btn, 10px);background:var(--pitaj-surface, #fff);overflow:hidden}.pitaj-pc-image{position:relative;width:100%;aspect-ratio:4 / 3;background:var(--pitaj-surface-subtle, #f8fafc);display:flex;align-items:center;justify-content:center}.pitaj-pc-image img{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;object-fit:contain}.pitaj-pc-image-empty{color:var(--pitaj-muted, #64748b)}.pitaj-pc-body{display:flex;flex-direction:column;gap:6px;padding:10px 12px 12px;flex:1}.pitaj-pc-name{margin:0;font-size:13px;font-weight:600;line-height:1.35;color:var(--pitaj-fg, #0f172a);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.pitaj-pc-sub{margin:0;font-size:11px;color:var(--pitaj-muted, #64748b)}.pitaj-pc-price-row{position:relative;display:flex;flex-wrap:wrap;align-items:baseline;gap:4px 8px}.pitaj-pc-price{font-size:15px;font-weight:700;color:var(--pitaj-fg, #0f172a)}.pitaj-pc-compare{font-size:11px;color:var(--pitaj-muted, #64748b)}.pitaj-pc-discount{font-size:10px;font-weight:700;padding:1px 6px;border-radius:var(--pitaj-radius-full, 999px);color:var(--pitaj-success, #10b981);background:#10b9811f}.pitaj-pc-note{display:inline-flex;align-self:center}.pitaj-pc-note-btn{display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;padding:0;border:0;border-radius:50%;background:transparent;color:var(--pitaj-muted, #64748b);opacity:.75;cursor:help}.pitaj-pc-note-btn:hover,.pitaj-pc-note-btn:focus-visible{opacity:1;color:var(--pitaj-fg, #0f172a)}.pitaj-pc-note-tip{position:absolute;z-index:5;left:0;right:0;bottom:calc(100% + 6px);padding:6px 8px;border-radius:8px;font-size:11px;font-weight:400;line-height:1.35;text-align:left;color:var(--pitaj-surface, #fff);background:var(--pitaj-fg, #0f172a);box-shadow:0 4px 12px #0f172a2e;pointer-events:none}.pitaj-pc-stock{align-self:flex-start;font-size:11px;font-weight:500;color:var(--pitaj-muted, #64748b)}.pitaj-pc-stock.is-in{color:var(--pitaj-success, #10b981)}.pitaj-pc-stock.is-out{color:var(--pitaj-danger, #ef4444)}.pitaj-pc-actions{display:flex;align-items:center;gap:10px;margin-top:auto;padding-top:4px}.pitaj-pc-cta{display:inline-flex;align-items:center;justify-content:center;flex:1;min-height:32px;padding:0 10px;border:0;border-radius:var(--pitaj-radius-btn, 10px);font:inherit;font-size:12px;font-weight:600;text-decoration:none;color:var(--pitaj-accent-contrast, #fff);background:var(--pitaj-accent, #2563eb);cursor:pointer}.pitaj-pc-cta:hover{background:var(--pitaj-accent-hover, #1d4ed8)}.pitaj-pc-buy{font-size:12px;font-weight:600;color:var(--pitaj-accent, #2563eb);text-decoration:none}.pitaj-pc-buy:hover{text-decoration:underline}.pitaj-pc-arrow{position:absolute;top:38%;z-index:2;display:none;align-items:center;justify-content:center;width:30px;height:30px;padding:0;border:1px solid var(--pitaj-card-border, #e2e8f0);border-radius:50%;background:var(--pitaj-surface, #fff);color:var(--pitaj-fg, #0f172a);box-shadow:0 2px 8px #0f172a1f;cursor:pointer}.pitaj-pc-arrow:disabled{opacity:0;pointer-events:none}.pitaj-pc-arrow-prev{left:4px}.pitaj-pc-arrow-next{right:4px}@media(hover:hover)and (pointer:fine){.pitaj-pc-arrow{display:inline-flex}}.pitaj-pc-dots{display:flex;justify-content:center;gap:5px;padding:0 12px 10px}.pitaj-pc-dots span{width:5px;height:5px;border-radius:50%;background:var(--pitaj-border, #e2e8f0)}.pitaj-pc-dots span.is-active{background:var(--pitaj-accent, #2563eb)}@media(prefers-reduced-motion:reduce){.pitaj-pc-track{scroll-behavior:auto}}.pitaj-cv-scroll{overflow-x:auto;padding:0 12px 12px}.pitaj-cv-table{width:100%;border-collapse:collapse;font-size:13px}.pitaj-cv-table th,.pitaj-cv-table td{padding:8px;text-align:left;vertical-align:top;border-bottom:1px solid var(--pitaj-border, #e2e8f0)}.pitaj-cv-table thead th{font-weight:600;color:var(--pitaj-text-muted, #64748b)}.pitaj-cv-table tbody th{font-weight:500;color:var(--pitaj-text-muted, #64748b);white-space:nowrap}.pitaj-cv-list td:last-child,.pitaj-cv-list th:last-child{text-align:right;white-space:nowrap}.pitaj-cv-table a:not(.pitaj-pc-cta):not(.pitaj-pc-buy){color:var(--pitaj-accent, #2563eb);text-decoration:none}.pitaj-cv-table .pitaj-pc-stock{display:block;margin-top:2px}.pitaj-cv-price{display:inline-flex;flex-wrap:wrap;align-items:baseline;gap:6px;font-weight:600}.pitaj-cv-card{display:flex;flex-direction:column}.pitaj-cv-card-image{width:100%;aspect-ratio:16 / 9;object-fit:cover}.pitaj-ml-list{list-style:none;margin:0;padding:0 12px 12px;display:flex;flex-direction:column;gap:10px}.pitaj-ml-item{padding:10px 12px;border:1px solid var(--pitaj-card-border, #e2e8f0);border-radius:var(--pitaj-radius-btn, 10px);background:var(--pitaj-surface, #fff)}.pitaj-ml-title{font-size:14px;font-weight:600}.pitaj-ml-sub,.pitaj-ml-details{margin-top:2px;font-size:12px;color:var(--pitaj-muted, #64748b)}.pitaj-ml-actions{display:flex;flex-wrap:wrap;align-items:center;gap:8px 14px;margin-top:8px;font-size:12px}.pitaj-ml-actions a{color:var(--pitaj-accent, #2563eb);font-weight:600;text-decoration:none}.pitaj-ml-actions .pitaj-pc-cta{flex:0 0 auto;min-height:30px}.pitaj-cal-picker{display:flex;flex-direction:column;gap:10px}.pitaj-cal-days,.pitaj-cal-times{display:flex;flex-wrap:wrap;gap:6px}.pitaj-cal-chip{border:1px solid var(--pitaj-border, #e5e7eb);background:transparent;color:inherit;border-radius:8px;padding:6px 10px;font:inherit;font-size:13px;cursor:pointer}.pitaj-cal-chip.is-active{border-color:currentColor;font-weight:600}.pitaj-cal-chip:focus-visible{outline:2px solid currentColor;outline-offset:2px}.pitaj-cal-form{display:flex;flex-direction:column;gap:8px}.pitaj-cal-form input{border:1px solid var(--pitaj-border, #e5e7eb);border-radius:8px;padding:8px 10px;font:inherit;font-size:14px;background:transparent;color:inherit}";
var wt = {}, Qi;
function hn() {
  if (Qi) return wt;
  Qi = 1, Object.defineProperty(wt, "__esModule", {
    value: !0
  });
  function l(a, t) {
    if (a == null) return {};
    var e = {};
    for (var s in a) if ({}.hasOwnProperty.call(a, s)) {
      if (t.indexOf(s) !== -1) continue;
      e[s] = a[s];
    }
    return e;
  }
  class h {
    constructor(t, e, s) {
      this.line = void 0, this.column = void 0, this.index = void 0, this.line = t, this.column = e, this.index = s;
    }
  }
  class u {
    constructor(t, e) {
      this.start = void 0, this.end = void 0, this.filename = void 0, this.identifierName = void 0, this.start = t, this.end = e;
    }
  }
  function d(a, t) {
    const {
      line: e,
      column: s,
      index: i
    } = a;
    return new h(e, s + t, i + t);
  }
  const x = "BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED";
  var b = {
    ImportMetaOutsideModule: {
      message: `import.meta may appear only with 'sourceType: "module"'`,
      code: x
    },
    ImportOutsideModule: {
      message: `'import' and 'export' may appear only with 'sourceType: "module"'`,
      code: x
    }
  };
  const P = {
    ArrayPattern: "array destructuring pattern",
    AssignmentExpression: "assignment expression",
    AssignmentPattern: "assignment expression",
    ArrowFunctionExpression: "arrow function expression",
    ConditionalExpression: "conditional expression",
    CatchClause: "catch clause",
    ForOfStatement: "for-of statement",
    ForInStatement: "for-in statement",
    ForStatement: "for-loop",
    FormalParameters: "function parameter list",
    Identifier: "identifier",
    ImportSpecifier: "import specifier",
    ImportDefaultSpecifier: "import default specifier",
    ImportNamespaceSpecifier: "import namespace specifier",
    ObjectPattern: "object destructuring pattern",
    ParenthesizedExpression: "parenthesized expression",
    RestElement: "rest element",
    UpdateExpression: {
      true: "prefix operation",
      false: "postfix operation"
    },
    VariableDeclarator: "variable declaration",
    YieldExpression: "yield expression"
  }, A = (a) => a.type === "UpdateExpression" ? P.UpdateExpression[`${a.prefix}`] : P[a.type];
  var L = {
    AccessorIsGenerator: ({
      kind: a
    }) => `A ${a}ter cannot be a generator.`,
    ArgumentsInClass: "'arguments' is only allowed in functions and class methods.",
    AsyncFunctionInSingleStatementContext: "Async functions can only be declared at the top level or inside a block.",
    AwaitBindingIdentifier: "Can not use 'await' as identifier inside an async function.",
    AwaitBindingIdentifierInStaticBlock: "Can not use 'await' as identifier inside a static block.",
    AwaitExpressionFormalParameter: "'await' is not allowed in async function parameters.",
    AwaitUsingNotInAsyncContext: "'await using' is only allowed within async functions and at the top levels of modules.",
    AwaitNotInAsyncContext: "'await' is only allowed within async functions and at the top levels of modules.",
    BadGetterArity: "A 'get' accessor must not have any formal parameters.",
    BadSetterArity: "A 'set' accessor must have exactly one formal parameter.",
    BadSetterRestParameter: "A 'set' accessor function argument must not be a rest parameter.",
    ConstructorClassField: "Classes may not have a field named 'constructor'.",
    ConstructorClassPrivateField: "Classes may not have a private field named '#constructor'.",
    ConstructorIsAccessor: "Class constructor may not be an accessor.",
    ConstructorIsAsync: "Constructor can't be an async function.",
    ConstructorIsGenerator: "Constructor can't be a generator.",
    DeclarationMissingInitializer: ({
      kind: a
    }) => `Missing initializer in ${a} declaration.`,
    DecoratorArgumentsOutsideParentheses: "Decorator arguments must be moved inside parentheses: use '@(decorator(args))' instead of '@(decorator)(args)'.",
    DecoratorBeforeExport: "Decorators must be placed *before* the 'export' keyword. Remove the 'decoratorsBeforeExport: true' option to use the 'export @decorator class {}' syntax.",
    DecoratorsBeforeAfterExport: "Decorators can be placed *either* before or after the 'export' keyword, but not in both locations at the same time.",
    DecoratorConstructor: "Decorators can't be used with a constructor. Did you mean '@dec class { ... }'?",
    DecoratorExportClass: "Decorators must be placed *after* the 'export' keyword. Remove the 'decoratorsBeforeExport: false' option to use the '@decorator export class {}' syntax.",
    DecoratorSemicolon: "Decorators must not be followed by a semicolon.",
    DecoratorStaticBlock: "Decorators can't be used with a static block.",
    DeferImportRequiresNamespace: 'Only `import defer * as x from "./module"` is valid.',
    DeletePrivateField: "Deleting a private field is not allowed.",
    DestructureNamedImport: "ES2015 named imports do not destructure. Use another statement for destructuring after the import.",
    DuplicateConstructor: "Duplicate constructor in the same class.",
    DuplicateDefaultExport: "Only one default export allowed per module.",
    DuplicateExport: ({
      exportName: a
    }) => `\`${a}\` has already been exported. Exported identifiers must be unique.`,
    DuplicateProto: "Redefinition of __proto__ property.",
    DuplicateRegExpFlags: "Duplicate regular expression flag.",
    ElementAfterRest: "Rest element must be last element.",
    EscapedCharNotAnIdentifier: "Invalid Unicode escape.",
    ExportBindingIsString: ({
      localName: a,
      exportName: t
    }) => `A string literal cannot be used as an exported binding without \`from\`.
- Did you mean \`export { '${a}' as '${t}' } from 'some-module'\`?`,
    ExportDefaultFromAsIdentifier: "'from' is not allowed as an identifier after 'export default'.",
    ForInOfLoopInitializer: ({
      type: a
    }) => `'${a === "ForInStatement" ? "for-in" : "for-of"}' loop variable declaration may not have an initializer.`,
    ForInUsing: "For-in loop may not start with 'using' declaration.",
    ForOfAsync: "The left-hand side of a for-of loop may not be 'async'.",
    ForOfLet: "The left-hand side of a for-of loop may not start with 'let'.",
    GeneratorInSingleStatementContext: "Generators can only be declared at the top level or inside a block.",
    IllegalBreakContinue: ({
      type: a
    }) => `Unsyntactic ${a === "BreakStatement" ? "break" : "continue"}.`,
    IllegalLanguageModeDirective: "Illegal 'use strict' directive in function with non-simple parameter list.",
    IllegalReturn: "'return' outside of function.",
    ImportAttributesUseAssert: "The `assert` keyword in import attributes is deprecated and it has been replaced by the `with` keyword. You can enable the `deprecatedImportAssert` parser plugin to suppress this error.",
    ImportBindingIsString: ({
      importName: a
    }) => `A string literal cannot be used as an imported binding.
- Did you mean \`import { "${a}" as foo }\`?`,
    ImportCallArity: "`import()` requires exactly one or two arguments.",
    ImportCallNotNewExpression: "Cannot use new with import(...).",
    ImportCallSpreadArgument: "`...` is not allowed in `import()`.",
    ImportJSONBindingNotDefault: "A JSON module can only be imported with `default`.",
    ImportReflectionHasAssertion: "`import module x` cannot have assertions.",
    ImportReflectionNotBinding: 'Only `import module x from "./module"` is valid.',
    IncompatibleRegExpUVFlags: "The 'u' and 'v' regular expression flags cannot be enabled at the same time.",
    InvalidBigIntLiteral: "Invalid BigIntLiteral.",
    InvalidCodePoint: "Code point out of bounds.",
    InvalidCoverDiscardElement: "'void' must be followed by an expression when not used in a binding position.",
    InvalidCoverInitializedName: "Invalid shorthand property initializer.",
    InvalidDecimal: "Invalid decimal.",
    InvalidDigit: ({
      radix: a
    }) => `Expected number in radix ${a}.`,
    InvalidEscapeSequence: "Bad character escape sequence.",
    InvalidEscapeSequenceTemplate: "Invalid escape sequence in template.",
    InvalidEscapedReservedWord: ({
      reservedWord: a
    }) => `Escape sequence in keyword ${a}.`,
    InvalidIdentifier: ({
      identifierName: a
    }) => `Invalid identifier ${a}.`,
    InvalidLhs: ({
      ancestor: a
    }) => `Invalid left-hand side in ${A(a)}.`,
    InvalidLhsBinding: ({
      ancestor: a
    }) => `Binding invalid left-hand side in ${A(a)}.`,
    InvalidLhsOptionalChaining: ({
      ancestor: a
    }) => `Invalid optional chaining in the left-hand side of ${A(a)}.`,
    InvalidNumber: "Invalid number.",
    InvalidOrMissingExponent: "Floating-point numbers require a valid exponent after the 'e'.",
    InvalidOrUnexpectedToken: ({
      unexpected: a
    }) => `Unexpected character '${a}'.`,
    InvalidParenthesizedAssignment: "Invalid parenthesized assignment pattern.",
    InvalidPrivateFieldResolution: ({
      identifierName: a
    }) => `Private name #${a} is not defined.`,
    InvalidPropertyBindingPattern: "Binding member expression.",
    InvalidRecordProperty: "Only properties and spread elements are allowed in record definitions.",
    InvalidRestAssignmentPattern: "Invalid rest operator's argument.",
    LabelRedeclaration: ({
      labelName: a
    }) => `Label '${a}' is already declared.`,
    LetInLexicalBinding: "'let' is disallowed as a lexically bound name.",
    LineTerminatorBeforeArrow: "No line break is allowed before '=>'.",
    MalformedRegExpFlags: "Invalid regular expression flag.",
    MissingClassName: "A class name is required.",
    MissingEqInAssignment: "Only '=' operator can be used for specifying default value.",
    MissingSemicolon: "Missing semicolon.",
    MissingPlugin: ({
      missingPlugin: a
    }) => `This experimental syntax requires enabling the parser plugin: ${a.map((t) => JSON.stringify(t)).join(", ")}.`,
    MissingOneOfPlugins: ({
      missingPlugin: a
    }) => `This experimental syntax requires enabling one of the following parser plugin(s): ${a.map((t) => JSON.stringify(t)).join(", ")}.`,
    MissingUnicodeEscape: "Expecting Unicode escape sequence \\uXXXX.",
    MixingCoalesceWithLogical: "Nullish coalescing operator(??) requires parens when mixing with logical operators.",
    ModuleAttributeDifferentFromType: "The only accepted module attribute is `type`.",
    ModuleAttributeInvalidValue: "Only string literals are allowed as module attribute values.",
    ModuleAttributesWithDuplicateKeys: ({
      key: a
    }) => `Duplicate key "${a}" is not allowed in module attributes.`,
    ModuleExportNameHasLoneSurrogate: ({
      surrogateCharCode: a
    }) => `An export name cannot include a lone surrogate, found '\\u${a.toString(16)}'.`,
    ModuleExportUndefined: ({
      localName: a
    }) => `Export '${a}' is not defined.`,
    MultipleDefaultsInSwitch: "Multiple default clauses.",
    NewlineAfterThrow: "Illegal newline after throw.",
    NoCatchOrFinally: "Missing catch or finally clause.",
    NumberIdentifier: "Identifier directly after number.",
    NumericSeparatorInEscapeSequence: "Numeric separators are not allowed inside unicode escape sequences or hex escape sequences.",
    ObsoleteAwaitStar: "'await*' has been removed from the async functions proposal. Use Promise.all() instead.",
    OptionalChainingNoNew: "Constructors in/after an Optional Chain are not allowed.",
    OptionalChainingNoTemplate: "Tagged Template Literals are not allowed in optionalChain.",
    OverrideOnConstructor: "'override' modifier cannot appear on a constructor declaration.",
    ParamDupe: "Argument name clash.",
    PatternHasAccessor: "Object pattern can't contain getter or setter.",
    PatternHasMethod: "Object pattern can't contain methods.",
    PrivateInExpectedIn: ({
      identifierName: a
    }) => `Private names are only allowed in property accesses (\`obj.#${a}\`) or in \`in\` expressions (\`#${a} in obj\`).`,
    PrivateNameRedeclaration: ({
      identifierName: a
    }) => `Duplicate private name #${a}.`,
    RecordExpressionBarIncorrectEndSyntaxType: "Record expressions ending with '|}' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
    RecordExpressionBarIncorrectStartSyntaxType: "Record expressions starting with '{|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
    RecordExpressionHashIncorrectStartSyntaxType: "Record expressions starting with '#{' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'.",
    RecordNoProto: "'__proto__' is not allowed in Record expressions.",
    RestTrailingComma: "Unexpected trailing comma after rest element.",
    SloppyFunction: "In non-strict mode code, functions can only be declared at top level or inside a block.",
    SloppyFunctionAnnexB: "In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement.",
    SourcePhaseImportRequiresDefault: 'Only `import source x from "./module"` is valid.',
    StaticPrototype: "Classes may not have static property named prototype.",
    SuperCallNotNewExpression: "Cannot use new with super(...).",
    SuperNotAllowed: "`super()` is only valid inside a class constructor of a subclass. Maybe a typo in the method name ('constructor') or not extending another class?",
    SuperPrivateField: "Private fields can't be accessed on super.",
    TrailingDecorator: "Decorators must be attached to a class element.",
    TupleExpressionBarIncorrectEndSyntaxType: "Tuple expressions ending with '|]' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
    TupleExpressionBarIncorrectStartSyntaxType: "Tuple expressions starting with '[|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
    TupleExpressionHashIncorrectStartSyntaxType: "Tuple expressions starting with '#[' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'.",
    UnexpectedArgumentPlaceholder: "Unexpected argument placeholder.",
    UnexpectedAwaitAfterPipelineBody: 'Unexpected "await" after pipeline body; await must have parentheses in minimal proposal.',
    UnexpectedDigitAfterHash: "Unexpected digit after hash token.",
    UnexpectedImportExport: "'import' and 'export' may only appear at the top level.",
    UnexpectedKeyword: ({
      keyword: a
    }) => `Unexpected keyword '${a}'.`,
    UnexpectedLeadingDecorator: "Leading decorators must be attached to a class declaration.",
    UnexpectedLexicalDeclaration: "Lexical declaration cannot appear in a single-statement context.",
    UnexpectedNewTarget: "`new.target` can only be used in functions or class properties.",
    UnexpectedNumericSeparator: "A numeric separator is only allowed between two digits.",
    UnexpectedPrivateField: "Unexpected private name.",
    UnexpectedReservedWord: ({
      reservedWord: a
    }) => `Unexpected reserved word '${a}'.`,
    UnexpectedSuper: "'super' is only allowed in object methods and classes.",
    UnexpectedToken: ({
      expected: a,
      unexpected: t
    }) => `Unexpected token${t ? ` '${t}'.` : ""}${a ? `, expected "${a}"` : ""}`,
    UnexpectedTokenUnaryExponentiation: "Illegal expression. Wrap left hand side or entire exponentiation in parentheses.",
    UnexpectedUsingDeclaration: "Using declaration cannot appear in the top level when source type is `script` or in the bare case statement.",
    UnexpectedVoidPattern: "Unexpected void binding.",
    UnsupportedDecoratorExport: "A decorated export must export a class declaration.",
    UnsupportedDefaultExport: "Only expressions, functions or classes are allowed as the `default` export.",
    UnsupportedImport: "`import` can only be used in `import()` or `import.meta`.",
    UnsupportedMetaProperty: ({
      target: a,
      onlyValidPropertyName: t
    }) => `The only valid meta property for ${a} is ${a}.${t}.`,
    UnsupportedParameterDecorator: "Decorators cannot be used to decorate parameters.",
    UnsupportedPropertyDecorator: "Decorators cannot be used to decorate object literal properties.",
    UnsupportedSuper: "'super' can only be used with function calls (i.e. super()) or in property accesses (i.e. super.prop or super[prop]).",
    UnterminatedComment: "Unterminated comment.",
    UnterminatedRegExp: "Unterminated regular expression.",
    UnterminatedString: "Unterminated string constant.",
    UnterminatedTemplate: "Unterminated template.",
    UsingDeclarationExport: "Using declaration cannot be exported.",
    UsingDeclarationHasBindingPattern: "Using declaration cannot have destructuring patterns.",
    VarRedeclaration: ({
      identifierName: a
    }) => `Identifier '${a}' has already been declared.`,
    VoidPatternCatchClauseParam: "A void binding can not be the catch clause parameter. Use `try { ... } catch { ... }` if you want to discard the caught error.",
    VoidPatternInitializer: "A void binding may not have an initializer.",
    YieldBindingIdentifier: "Can not use 'yield' as identifier inside a generator.",
    YieldInParameter: "Yield expression is not allowed in formal parameters.",
    YieldNotInGeneratorFunction: "'yield' is only allowed within generator functions.",
    ZeroDigitNumericSeparator: "Numeric separator can not be used after leading 0."
  }, S = {
    StrictDelete: "Deleting local variable in strict mode.",
    StrictEvalArguments: ({
      referenceName: a
    }) => `Assigning to '${a}' in strict mode.`,
    StrictEvalArgumentsBinding: ({
      bindingName: a
    }) => `Binding '${a}' in strict mode.`,
    StrictFunction: "In strict mode code, functions can only be declared at top level or inside a block.",
    StrictNumericEscape: "The only valid numeric escape in strict mode is '\\0'.",
    StrictOctalLiteral: "Legacy octal literals are not allowed in strict mode.",
    StrictWith: "'with' in strict mode."
  }, N = {
    ParseExpressionEmptyInput: "Unexpected parseExpression() input: The input is empty or contains only comments.",
    ParseExpressionExpectsEOF: ({
      unexpected: a
    }) => `Unexpected parseExpression() input: The input should contain exactly one expression, but the first expression is followed by the unexpected character \`${String.fromCodePoint(a)}\`.`
  };
  const w = /* @__PURE__ */ new Set(["ArrowFunctionExpression", "AssignmentExpression", "ConditionalExpression", "YieldExpression"]);
  var B = Object.assign({
    PipeBodyIsTighter: "Unexpected yield after pipeline body; any yield expression acting as Hack-style pipe body must be parenthesized due to its loose operator precedence.",
    PipeTopicRequiresHackPipes: 'Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.',
    PipeTopicUnbound: "Topic reference is unbound; it must be inside a pipe body.",
    PipeTopicUnconfiguredToken: ({
      token: a
    }) => `Invalid topic token ${a}. In order to use ${a} as a topic reference, the pipelineOperator plugin must be configured with { "proposal": "hack", "topicToken": "${a}" }.`,
    PipeTopicUnused: "Hack-style pipe body does not contain a topic reference; Hack-style pipes must use topic at least once.",
    PipeUnparenthesizedBody: ({
      type: a
    }) => `Hack-style pipe body cannot be an unparenthesized ${A({
      type: a
    })}; please wrap it in parentheses.`
  }, {
    PipelineBodyNoArrow: 'Unexpected arrow "=>" after pipeline body; arrow function in pipeline body must be parenthesized.',
    PipelineBodySequenceExpression: "Pipeline body may not be a comma-separated sequence expression.",
    PipelineHeadSequenceExpression: "Pipeline head should not be a comma-separated sequence expression.",
    PipelineTopicUnused: "Pipeline is in topic style but does not use topic reference.",
    PrimaryTopicNotAllowed: "Topic reference was used in a lexical context without topic binding.",
    PrimaryTopicRequiresSmartPipeline: 'Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.'
  }), q = {
    UnsupportedBind: "Binding should be performed on object property.",
    UnsupportedBindRHS: "The right-hand side of binding can not be super or import."
  };
  const Q = ["message"];
  function be(a, t, e) {
    Object.defineProperty(a, t, {
      enumerable: !1,
      configurable: !0,
      value: e
    });
  }
  function D({
    toMessage: a,
    code: t,
    reasonCode: e,
    syntaxPlugin: s
  }) {
    const i = e === "MissingPlugin" || e === "MissingOneOfPlugins", r = {
      AccessorCannotDeclareThisParameter: "AccesorCannotDeclareThisParameter",
      AccessorCannotHaveTypeParameters: "AccesorCannotHaveTypeParameters",
      ConstInitializerMustBeStringOrNumericLiteralOrLiteralEnumReference: "ConstInitiailizerMustBeStringOrNumericLiteralOrLiteralEnumReference",
      SetAccessorCannotHaveOptionalParameter: "SetAccesorCannotHaveOptionalParameter",
      SetAccessorCannotHaveRestParameter: "SetAccesorCannotHaveRestParameter",
      SetAccessorCannotHaveReturnType: "SetAccesorCannotHaveReturnType"
    };
    return r[e] && (e = r[e]), function n(c, p) {
      const f = new SyntaxError();
      return f.code = t, f.reasonCode = e, f.loc = c, f.pos = c.index, f.syntaxPlugin = s, i && (f.missingPlugin = p.missingPlugin), be(f, "clone", function(T = {}) {
        var I;
        const {
          line: E,
          column: M,
          index: X
        } = (I = T.loc) != null ? I : c;
        return n(new h(E, M, X), Object.assign({}, p, T.details));
      }), be(f, "details", p), Object.defineProperty(f, "message", {
        configurable: !0,
        get() {
          const y = `${a(p)} (${c.line}:${c.column})`;
          return this.message = y, y;
        },
        set(y) {
          Object.defineProperty(this, "message", {
            value: y,
            writable: !0
          });
        }
      }), f;
    };
  }
  function U(a, t) {
    if (Array.isArray(a))
      return (s) => U(s, a[0]);
    const e = {};
    for (const s of Object.keys(a)) {
      const i = a[s], r = typeof i == "string" ? {
        message: () => i
      } : typeof i == "function" ? {
        message: i
      } : i, {
        message: n
      } = r, c = l(r, Q), p = typeof n == "string" ? () => n : n;
      e[s] = D(Object.assign({
        code: "BABEL_PARSER_SYNTAX_ERROR",
        reasonCode: s,
        toMessage: p
      }, t ? {
        syntaxPlugin: t
      } : {}, c));
    }
    return e;
  }
  const m = Object.assign({}, U(b), U(L), U(S), U(N), U`pipelineOperator`(B), U`functionBind`(q));
  function Y() {
    return {
      sourceType: "script",
      sourceFilename: void 0,
      startIndex: 0,
      startColumn: 0,
      startLine: 1,
      allowAwaitOutsideFunction: !1,
      allowReturnOutsideFunction: !1,
      allowNewTargetOutsideFunction: !1,
      allowImportExportEverywhere: !1,
      allowSuperOutsideMethod: !1,
      allowUndeclaredExports: !1,
      allowYieldOutsideFunction: !1,
      plugins: [],
      strictMode: void 0,
      ranges: !1,
      tokens: !1,
      createImportExpressions: !1,
      createParenthesizedExpressions: !1,
      errorRecovery: !1,
      attachComment: !0,
      annexB: !0
    };
  }
  function J(a) {
    const t = Y();
    if (a == null)
      return t;
    if (a.annexB != null && a.annexB !== !1)
      throw new Error("The `annexB` option can only be set to `false`.");
    for (const e of Object.keys(t))
      a[e] != null && (t[e] = a[e]);
    if (t.startLine === 1)
      a.startIndex == null && t.startColumn > 0 ? t.startIndex = t.startColumn : a.startColumn == null && t.startIndex > 0 && (t.startColumn = t.startIndex);
    else if ((a.startColumn == null || a.startIndex == null) && a.startIndex != null)
      throw new Error("With a `startLine > 1` you must also specify `startIndex` and `startColumn`.");
    if (t.sourceType === "commonjs") {
      if (a.allowAwaitOutsideFunction != null)
        throw new Error("The `allowAwaitOutsideFunction` option cannot be used with `sourceType: 'commonjs'`.");
      if (a.allowReturnOutsideFunction != null)
        throw new Error("`sourceType: 'commonjs'` implies `allowReturnOutsideFunction: true`, please remove the `allowReturnOutsideFunction` option or use `sourceType: 'script'`.");
      if (a.allowNewTargetOutsideFunction != null)
        throw new Error("`sourceType: 'commonjs'` implies `allowNewTargetOutsideFunction: true`, please remove the `allowNewTargetOutsideFunction` option or use `sourceType: 'script'`.");
    }
    return t;
  }
  const {
    defineProperty: pe
  } = Object, ae = (a, t) => {
    a && pe(a, t, {
      enumerable: !1,
      value: a[t]
    });
  };
  function Ce(a) {
    return ae(a.loc.start, "index"), ae(a.loc.end, "index"), a;
  }
  var ht = (a) => class extends a {
    parse() {
      const e = Ce(super.parse());
      return this.optionFlags & 256 && (e.tokens = e.tokens.map(Ce)), e;
    }
    parseRegExpLiteral({
      pattern: e,
      flags: s
    }) {
      let i = null;
      try {
        i = new RegExp(e, s);
      } catch {
      }
      const r = this.estreeParseLiteral(i);
      return r.regex = {
        pattern: e,
        flags: s
      }, r;
    }
    parseBigIntLiteral(e) {
      let s;
      try {
        s = BigInt(e);
      } catch {
        s = null;
      }
      const i = this.estreeParseLiteral(s);
      return i.bigint = String(i.value || e), i;
    }
    parseDecimalLiteral(e) {
      const i = this.estreeParseLiteral(null);
      return i.decimal = String(i.value || e), i;
    }
    estreeParseLiteral(e) {
      return this.parseLiteral(e, "Literal");
    }
    parseStringLiteral(e) {
      return this.estreeParseLiteral(e);
    }
    parseNumericLiteral(e) {
      return this.estreeParseLiteral(e);
    }
    parseNullLiteral() {
      return this.estreeParseLiteral(null);
    }
    parseBooleanLiteral(e) {
      return this.estreeParseLiteral(e);
    }
    estreeParseChainExpression(e, s) {
      const i = this.startNodeAtNode(e);
      return i.expression = e, this.finishNodeAt(i, "ChainExpression", s);
    }
    directiveToStmt(e) {
      const s = e.value;
      delete e.value, this.castNodeTo(s, "Literal"), s.raw = s.extra.raw, s.value = s.extra.expressionValue;
      const i = this.castNodeTo(e, "ExpressionStatement");
      return i.expression = s, i.directive = s.extra.rawValue, delete s.extra, i;
    }
    fillOptionalPropertiesForTSESLint(e) {
    }
    cloneEstreeStringLiteral(e) {
      const {
        start: s,
        end: i,
        loc: r,
        range: n,
        raw: c,
        value: p
      } = e, f = Object.create(e.constructor.prototype);
      return f.type = "Literal", f.start = s, f.end = i, f.loc = r, f.range = n, f.raw = c, f.value = p, f;
    }
    initFunction(e, s) {
      super.initFunction(e, s), e.expression = !1;
    }
    checkDeclaration(e) {
      e != null && this.isObjectProperty(e) ? this.checkDeclaration(e.value) : super.checkDeclaration(e);
    }
    getObjectOrClassMethodParams(e) {
      return e.value.params;
    }
    isValidDirective(e) {
      var s;
      return e.type === "ExpressionStatement" && e.expression.type === "Literal" && typeof e.expression.value == "string" && !((s = e.expression.extra) != null && s.parenthesized);
    }
    parseBlockBody(e, s, i, r, n) {
      super.parseBlockBody(e, s, i, r, n);
      const c = e.directives.map((p) => this.directiveToStmt(p));
      e.body = c.concat(e.body), delete e.directives;
    }
    parsePrivateName() {
      const e = super.parsePrivateName();
      return this.getPluginOption("estree", "classFeatures") ? this.convertPrivateNameToPrivateIdentifier(e) : e;
    }
    convertPrivateNameToPrivateIdentifier(e) {
      const s = super.getPrivateNameSV(e);
      return delete e.id, e.name = s, this.castNodeTo(e, "PrivateIdentifier");
    }
    isPrivateName(e) {
      return this.getPluginOption("estree", "classFeatures") ? e.type === "PrivateIdentifier" : super.isPrivateName(e);
    }
    getPrivateNameSV(e) {
      return this.getPluginOption("estree", "classFeatures") ? e.name : super.getPrivateNameSV(e);
    }
    parseLiteral(e, s) {
      const i = super.parseLiteral(e, s);
      return i.raw = i.extra.raw, delete i.extra, i;
    }
    parseFunctionBody(e, s, i = !1) {
      super.parseFunctionBody(e, s, i), e.expression = e.body.type !== "BlockStatement";
    }
    parseMethod(e, s, i, r, n, c, p = !1) {
      let f = this.startNode();
      f.kind = e.kind, f = super.parseMethod(f, s, i, r, n, c, p), delete f.kind;
      const {
        typeParameters: y
      } = e;
      y && (delete e.typeParameters, f.typeParameters = y, this.resetStartLocationFromNode(f, y));
      const T = this.castNodeTo(f, "FunctionExpression");
      return e.value = T, c === "ClassPrivateMethod" && (e.computed = !1), c === "ObjectMethod" ? (e.kind === "method" && (e.kind = "init"), e.shorthand = !1, this.finishNode(e, "Property")) : this.finishNode(e, "MethodDefinition");
    }
    nameIsConstructor(e) {
      return e.type === "Literal" ? e.value === "constructor" : super.nameIsConstructor(e);
    }
    parseClassProperty(...e) {
      const s = super.parseClassProperty(...e);
      return this.getPluginOption("estree", "classFeatures") && this.castNodeTo(s, "PropertyDefinition"), s;
    }
    parseClassPrivateProperty(...e) {
      const s = super.parseClassPrivateProperty(...e);
      return this.getPluginOption("estree", "classFeatures") && (this.castNodeTo(s, "PropertyDefinition"), s.computed = !1), s;
    }
    parseClassAccessorProperty(e) {
      const s = super.parseClassAccessorProperty(e);
      return this.getPluginOption("estree", "classFeatures") && (s.abstract && this.hasPlugin("typescript") ? (delete s.abstract, this.castNodeTo(s, "TSAbstractAccessorProperty")) : this.castNodeTo(s, "AccessorProperty")), s;
    }
    parseObjectProperty(e, s, i, r) {
      const n = super.parseObjectProperty(e, s, i, r);
      return n && (n.kind = "init", this.castNodeTo(n, "Property")), n;
    }
    finishObjectProperty(e) {
      return e.kind = "init", this.finishNode(e, "Property");
    }
    isValidLVal(e, s, i, r) {
      return e === "Property" ? "value" : super.isValidLVal(e, s, i, r);
    }
    isAssignable(e, s) {
      return e != null && this.isObjectProperty(e) ? this.isAssignable(e.value, s) : super.isAssignable(e, s);
    }
    toAssignable(e, s = !1) {
      if (e != null && this.isObjectProperty(e)) {
        const {
          key: i,
          value: r
        } = e;
        this.isPrivateName(i) && this.classScope.usePrivateName(this.getPrivateNameSV(i), i.loc.start), this.toAssignable(r, s);
      } else
        super.toAssignable(e, s);
    }
    toAssignableObjectExpressionProp(e, s, i) {
      e.type === "Property" && (e.kind === "get" || e.kind === "set") ? this.raise(m.PatternHasAccessor, e.key) : e.type === "Property" && e.method ? this.raise(m.PatternHasMethod, e.key) : super.toAssignableObjectExpressionProp(e, s, i);
    }
    finishCallExpression(e, s) {
      const i = super.finishCallExpression(e, s);
      if (i.callee.type === "Import") {
        var r, n;
        this.castNodeTo(i, "ImportExpression"), i.source = i.arguments[0], i.options = (r = i.arguments[1]) != null ? r : null, i.attributes = (n = i.arguments[1]) != null ? n : null, delete i.arguments, delete i.callee;
      } else i.type === "OptionalCallExpression" ? this.castNodeTo(i, "CallExpression") : i.optional = !1;
      return i;
    }
    toReferencedArguments(e) {
      e.type !== "ImportExpression" && super.toReferencedArguments(e);
    }
    parseExport(e, s) {
      const i = this.state.lastTokStartLoc, r = super.parseExport(e, s);
      switch (r.type) {
        case "ExportAllDeclaration":
          r.exported = null;
          break;
        case "ExportNamedDeclaration":
          r.specifiers.length === 1 && r.specifiers[0].type === "ExportNamespaceSpecifier" && (this.castNodeTo(r, "ExportAllDeclaration"), r.exported = r.specifiers[0].exported, delete r.specifiers);
        case "ExportDefaultDeclaration":
          {
            var n;
            const {
              declaration: c
            } = r;
            (c == null ? void 0 : c.type) === "ClassDeclaration" && ((n = c.decorators) == null ? void 0 : n.length) > 0 && c.start === r.start && this.resetStartLocation(r, i);
          }
          break;
      }
      return r;
    }
    stopParseSubscript(e, s) {
      const i = super.stopParseSubscript(e, s);
      return s.optionalChainMember ? this.estreeParseChainExpression(i, e.loc.end) : i;
    }
    parseMember(e, s, i, r, n) {
      const c = super.parseMember(e, s, i, r, n);
      return c.type === "OptionalMemberExpression" ? this.castNodeTo(c, "MemberExpression") : c.optional = !1, c;
    }
    isOptionalMemberExpression(e) {
      return e.type === "ChainExpression" ? e.expression.type === "MemberExpression" : super.isOptionalMemberExpression(e);
    }
    hasPropertyAsPrivateName(e) {
      return e.type === "ChainExpression" && (e = e.expression), super.hasPropertyAsPrivateName(e);
    }
    isObjectProperty(e) {
      return e.type === "Property" && e.kind === "init" && !e.method;
    }
    isObjectMethod(e) {
      return e.type === "Property" && (e.method || e.kind === "get" || e.kind === "set");
    }
    castNodeTo(e, s) {
      const i = super.castNodeTo(e, s);
      return this.fillOptionalPropertiesForTSESLint(i), i;
    }
    cloneIdentifier(e) {
      const s = super.cloneIdentifier(e);
      return this.fillOptionalPropertiesForTSESLint(s), s;
    }
    cloneStringLiteral(e) {
      return e.type === "Literal" ? this.cloneEstreeStringLiteral(e) : super.cloneStringLiteral(e);
    }
    finishNodeAt(e, s, i) {
      return Ce(super.finishNodeAt(e, s, i));
    }
    finishNode(e, s) {
      const i = super.finishNode(e, s);
      return this.fillOptionalPropertiesForTSESLint(i), i;
    }
    resetStartLocation(e, s) {
      super.resetStartLocation(e, s), Ce(e);
    }
    resetEndLocation(e, s = this.state.lastTokEndLoc) {
      super.resetEndLocation(e, s), Ce(e);
    }
  };
  class we {
    constructor(t, e) {
      this.token = void 0, this.preserveSpace = void 0, this.token = t, this.preserveSpace = !!e;
    }
  }
  const V = {
    brace: new we("{"),
    j_oTag: new we("<tag"),
    j_cTag: new we("</tag"),
    j_expr: new we("<tag>...</tag>", !0)
  };
  V.template = new we("`", !0);
  const k = !0, v = !0, de = !0, Ae = !0, ue = !0, St = !0;
  class pt {
    constructor(t, e = {}) {
      this.label = void 0, this.keyword = void 0, this.beforeExpr = void 0, this.startsExpr = void 0, this.rightAssociative = void 0, this.isLoop = void 0, this.isAssign = void 0, this.prefix = void 0, this.postfix = void 0, this.binop = void 0, this.label = t, this.keyword = e.keyword, this.beforeExpr = !!e.beforeExpr, this.startsExpr = !!e.startsExpr, this.rightAssociative = !!e.rightAssociative, this.isLoop = !!e.isLoop, this.isAssign = !!e.isAssign, this.prefix = !!e.prefix, this.postfix = !!e.postfix, this.binop = e.binop != null ? e.binop : null, this.updateContext = null;
    }
  }
  const $e = /* @__PURE__ */ new Map();
  function H(a, t = {}) {
    t.keyword = a;
    const e = j(a, t);
    return $e.set(a, e), e;
  }
  function fe(a, t) {
    return j(a, {
      beforeExpr: k,
      binop: t
    });
  }
  let se = -1;
  const Ne = [], le = [], He = [], ee = [], Le = [], _e = [];
  function j(a, t = {}) {
    var e, s, i, r;
    return ++se, le.push(a), He.push((e = t.binop) != null ? e : -1), ee.push((s = t.beforeExpr) != null ? s : !1), Le.push((i = t.startsExpr) != null ? i : !1), _e.push((r = t.prefix) != null ? r : !1), Ne.push(new pt(a, t)), se;
  }
  function z(a, t = {}) {
    var e, s, i, r;
    return ++se, $e.set(a, se), le.push(a), He.push((e = t.binop) != null ? e : -1), ee.push((s = t.beforeExpr) != null ? s : !1), Le.push((i = t.startsExpr) != null ? i : !1), _e.push((r = t.prefix) != null ? r : !1), Ne.push(new pt("name", t)), se;
  }
  const it = {
    bracketL: j("[", {
      beforeExpr: k,
      startsExpr: v
    }),
    bracketHashL: j("#[", {
      beforeExpr: k,
      startsExpr: v
    }),
    bracketBarL: j("[|", {
      beforeExpr: k,
      startsExpr: v
    }),
    bracketR: j("]"),
    bracketBarR: j("|]"),
    braceL: j("{", {
      beforeExpr: k,
      startsExpr: v
    }),
    braceBarL: j("{|", {
      beforeExpr: k,
      startsExpr: v
    }),
    braceHashL: j("#{", {
      beforeExpr: k,
      startsExpr: v
    }),
    braceR: j("}"),
    braceBarR: j("|}"),
    parenL: j("(", {
      beforeExpr: k,
      startsExpr: v
    }),
    parenR: j(")"),
    comma: j(",", {
      beforeExpr: k
    }),
    semi: j(";", {
      beforeExpr: k
    }),
    colon: j(":", {
      beforeExpr: k
    }),
    doubleColon: j("::", {
      beforeExpr: k
    }),
    dot: j("."),
    question: j("?", {
      beforeExpr: k
    }),
    questionDot: j("?."),
    arrow: j("=>", {
      beforeExpr: k
    }),
    template: j("template"),
    ellipsis: j("...", {
      beforeExpr: k
    }),
    backQuote: j("`", {
      startsExpr: v
    }),
    dollarBraceL: j("${", {
      beforeExpr: k,
      startsExpr: v
    }),
    templateTail: j("...`", {
      startsExpr: v
    }),
    templateNonTail: j("...${", {
      beforeExpr: k,
      startsExpr: v
    }),
    at: j("@"),
    hash: j("#", {
      startsExpr: v
    }),
    interpreterDirective: j("#!..."),
    eq: j("=", {
      beforeExpr: k,
      isAssign: Ae
    }),
    assign: j("_=", {
      beforeExpr: k,
      isAssign: Ae
    }),
    slashAssign: j("_=", {
      beforeExpr: k,
      isAssign: Ae
    }),
    xorAssign: j("_=", {
      beforeExpr: k,
      isAssign: Ae
    }),
    moduloAssign: j("_=", {
      beforeExpr: k,
      isAssign: Ae
    }),
    incDec: j("++/--", {
      prefix: ue,
      postfix: St,
      startsExpr: v
    }),
    bang: j("!", {
      beforeExpr: k,
      prefix: ue,
      startsExpr: v
    }),
    tilde: j("~", {
      beforeExpr: k,
      prefix: ue,
      startsExpr: v
    }),
    doubleCaret: j("^^", {
      startsExpr: v
    }),
    doubleAt: j("@@", {
      startsExpr: v
    }),
    pipeline: fe("|>", 0),
    nullishCoalescing: fe("??", 1),
    logicalOR: fe("||", 1),
    logicalAND: fe("&&", 2),
    bitwiseOR: fe("|", 3),
    bitwiseXOR: fe("^", 4),
    bitwiseAND: fe("&", 5),
    equality: fe("==/!=/===/!==", 6),
    lt: fe("</>/<=/>=", 7),
    gt: fe("</>/<=/>=", 7),
    relational: fe("</>/<=/>=", 7),
    bitShift: fe("<</>>/>>>", 8),
    bitShiftL: fe("<</>>/>>>", 8),
    bitShiftR: fe("<</>>/>>>", 8),
    plusMin: j("+/-", {
      beforeExpr: k,
      binop: 9,
      prefix: ue,
      startsExpr: v
    }),
    modulo: j("%", {
      binop: 10,
      startsExpr: v
    }),
    star: j("*", {
      binop: 10
    }),
    slash: fe("/", 10),
    exponent: j("**", {
      beforeExpr: k,
      binop: 11,
      rightAssociative: !0
    }),
    _in: H("in", {
      beforeExpr: k,
      binop: 7
    }),
    _instanceof: H("instanceof", {
      beforeExpr: k,
      binop: 7
    }),
    _break: H("break"),
    _case: H("case", {
      beforeExpr: k
    }),
    _catch: H("catch"),
    _continue: H("continue"),
    _debugger: H("debugger"),
    _default: H("default", {
      beforeExpr: k
    }),
    _else: H("else", {
      beforeExpr: k
    }),
    _finally: H("finally"),
    _function: H("function", {
      startsExpr: v
    }),
    _if: H("if"),
    _return: H("return", {
      beforeExpr: k
    }),
    _switch: H("switch"),
    _throw: H("throw", {
      beforeExpr: k,
      prefix: ue,
      startsExpr: v
    }),
    _try: H("try"),
    _var: H("var"),
    _const: H("const"),
    _with: H("with"),
    _new: H("new", {
      beforeExpr: k,
      startsExpr: v
    }),
    _this: H("this", {
      startsExpr: v
    }),
    _super: H("super", {
      startsExpr: v
    }),
    _class: H("class", {
      startsExpr: v
    }),
    _extends: H("extends", {
      beforeExpr: k
    }),
    _export: H("export"),
    _import: H("import", {
      startsExpr: v
    }),
    _null: H("null", {
      startsExpr: v
    }),
    _true: H("true", {
      startsExpr: v
    }),
    _false: H("false", {
      startsExpr: v
    }),
    _typeof: H("typeof", {
      beforeExpr: k,
      prefix: ue,
      startsExpr: v
    }),
    _void: H("void", {
      beforeExpr: k,
      prefix: ue,
      startsExpr: v
    }),
    _delete: H("delete", {
      beforeExpr: k,
      prefix: ue,
      startsExpr: v
    }),
    _do: H("do", {
      isLoop: de,
      beforeExpr: k
    }),
    _for: H("for", {
      isLoop: de
    }),
    _while: H("while", {
      isLoop: de
    }),
    _as: z("as", {
      startsExpr: v
    }),
    _assert: z("assert", {
      startsExpr: v
    }),
    _async: z("async", {
      startsExpr: v
    }),
    _await: z("await", {
      startsExpr: v
    }),
    _defer: z("defer", {
      startsExpr: v
    }),
    _from: z("from", {
      startsExpr: v
    }),
    _get: z("get", {
      startsExpr: v
    }),
    _let: z("let", {
      startsExpr: v
    }),
    _meta: z("meta", {
      startsExpr: v
    }),
    _of: z("of", {
      startsExpr: v
    }),
    _sent: z("sent", {
      startsExpr: v
    }),
    _set: z("set", {
      startsExpr: v
    }),
    _source: z("source", {
      startsExpr: v
    }),
    _static: z("static", {
      startsExpr: v
    }),
    _using: z("using", {
      startsExpr: v
    }),
    _yield: z("yield", {
      startsExpr: v
    }),
    _asserts: z("asserts", {
      startsExpr: v
    }),
    _checks: z("checks", {
      startsExpr: v
    }),
    _exports: z("exports", {
      startsExpr: v
    }),
    _global: z("global", {
      startsExpr: v
    }),
    _implements: z("implements", {
      startsExpr: v
    }),
    _intrinsic: z("intrinsic", {
      startsExpr: v
    }),
    _infer: z("infer", {
      startsExpr: v
    }),
    _is: z("is", {
      startsExpr: v
    }),
    _mixins: z("mixins", {
      startsExpr: v
    }),
    _proto: z("proto", {
      startsExpr: v
    }),
    _require: z("require", {
      startsExpr: v
    }),
    _satisfies: z("satisfies", {
      startsExpr: v
    }),
    _keyof: z("keyof", {
      startsExpr: v
    }),
    _readonly: z("readonly", {
      startsExpr: v
    }),
    _unique: z("unique", {
      startsExpr: v
    }),
    _abstract: z("abstract", {
      startsExpr: v
    }),
    _declare: z("declare", {
      startsExpr: v
    }),
    _enum: z("enum", {
      startsExpr: v
    }),
    _module: z("module", {
      startsExpr: v
    }),
    _namespace: z("namespace", {
      startsExpr: v
    }),
    _interface: z("interface", {
      startsExpr: v
    }),
    _type: z("type", {
      startsExpr: v
    }),
    _opaque: z("opaque", {
      startsExpr: v
    }),
    name: j("name", {
      startsExpr: v
    }),
    placeholder: j("%%", {
      startsExpr: v
    }),
    string: j("string", {
      startsExpr: v
    }),
    num: j("num", {
      startsExpr: v
    }),
    bigint: j("bigint", {
      startsExpr: v
    }),
    decimal: j("decimal", {
      startsExpr: v
    }),
    regexp: j("regexp", {
      startsExpr: v
    }),
    privateName: j("#name", {
      startsExpr: v
    }),
    eof: j("eof"),
    jsxName: j("jsxName"),
    jsxText: j("jsxText", {
      beforeExpr: k
    }),
    jsxTagStart: j("jsxTagStart", {
      startsExpr: v
    }),
    jsxTagEnd: j("jsxTagEnd")
  };
  function K(a) {
    return a >= 93 && a <= 133;
  }
  function Pe(a) {
    return a <= 92;
  }
  function G(a) {
    return a >= 58 && a <= 133;
  }
  function Z(a) {
    return a >= 58 && a <= 137;
  }
  function De(a) {
    return ee[a];
  }
  function ne(a) {
    return Le[a];
  }
  function Xe(a) {
    return a >= 29 && a <= 33;
  }
  function Ye(a) {
    return a >= 129 && a <= 131;
  }
  function Ze(a) {
    return a >= 90 && a <= 92;
  }
  function bt(a) {
    return a >= 58 && a <= 92;
  }
  function Rt(a) {
    return a >= 39 && a <= 59;
  }
  function fs(a) {
    return a === 34;
  }
  function vt(a) {
    return _e[a];
  }
  function ut(a) {
    return a >= 121 && a <= 123;
  }
  function rt(a) {
    return a >= 124 && a <= 130;
  }
  function Ie(a) {
    return le[a];
  }
  function dt(a) {
    return He[a];
  }
  function Ut(a) {
    return a === 57;
  }
  function ft(a) {
    return a >= 24 && a <= 25;
  }
  function Me(a) {
    return Ne[a];
  }
  Ne[8].updateContext = (a) => {
    a.pop();
  }, Ne[5].updateContext = Ne[7].updateContext = Ne[23].updateContext = (a) => {
    a.push(V.brace);
  }, Ne[22].updateContext = (a) => {
    a[a.length - 1] === V.template ? a.pop() : a.push(V.template);
  }, Ne[143].updateContext = (a) => {
    a.push(V.j_expr, V.j_oTag);
  };
  let Pt = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-࢏ࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚ౜ౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽ೜-ೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲊᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-Ƛ꟱-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", mt = "·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࢗ-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-᫝᫠-᫫ᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‌‍‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯・꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿･";
  const Tt = new RegExp("[" + Pt + "]"), Ve = new RegExp("[" + Pt + mt + "]");
  Pt = mt = null;
  const Qe = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 4, 51, 13, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 7, 25, 39, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 39, 27, 10, 22, 251, 41, 7, 1, 17, 5, 57, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 31, 9, 2, 0, 3, 0, 2, 37, 2, 0, 26, 0, 2, 0, 45, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 200, 32, 32, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 24, 43, 261, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 26, 3994, 6, 582, 6842, 29, 1763, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 433, 44, 212, 63, 33, 24, 3, 24, 45, 74, 6, 0, 67, 12, 65, 1, 2, 0, 15, 4, 10, 7381, 42, 31, 98, 114, 8702, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 229, 29, 3, 0, 208, 30, 2, 2, 2, 1, 2, 6, 3, 4, 10, 1, 225, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4381, 3, 5773, 3, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 8489], Nt = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 7, 9, 32, 4, 318, 1, 78, 5, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 68, 8, 2, 0, 3, 0, 2, 3, 2, 4, 2, 0, 15, 1, 83, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 7, 19, 58, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 199, 7, 137, 9, 54, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 55, 9, 266, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 10, 5350, 0, 7, 14, 11465, 27, 2343, 9, 87, 9, 39, 4, 60, 6, 26, 9, 535, 9, 470, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4178, 9, 519, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 245, 1, 2, 9, 233, 0, 3, 0, 8, 1, 6, 0, 475, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
  function yt(a, t) {
    let e = 65536;
    for (let s = 0, i = t.length; s < i; s += 2) {
      if (e += t[s], e > a) return !1;
      if (e += t[s + 1], e >= a) return !0;
    }
    return !1;
  }
  function Fe(a) {
    return a < 65 ? a === 36 : a <= 90 ? !0 : a < 97 ? a === 95 : a <= 122 ? !0 : a <= 65535 ? a >= 170 && Tt.test(String.fromCharCode(a)) : yt(a, Qe);
  }
  function Be(a) {
    return a < 48 ? a === 36 : a < 58 ? !0 : a < 65 ? !1 : a <= 90 ? !0 : a < 97 ? a === 95 : a <= 122 ? !0 : a <= 65535 ? a >= 170 && Ve.test(String.fromCharCode(a)) : yt(a, Qe) || yt(a, Nt);
  }
  const at = {
    keyword: ["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"],
    strict: ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"],
    strictBind: ["eval", "arguments"]
  }, ms = new Set(at.keyword), xt = new Set(at.strict), ys = new Set(at.strictBind);
  function zt(a, t) {
    return t && a === "await" || a === "enum";
  }
  function ye(a, t) {
    return zt(a, t) || xt.has(a);
  }
  function et(a) {
    return ys.has(a);
  }
  function $t(a, t) {
    return ye(a, t) || et(a);
  }
  function Ht(a) {
    return ms.has(a);
  }
  function Ct(a, t, e) {
    return a === 64 && t === 64 && Fe(e);
  }
  const Vt = /* @__PURE__ */ new Set(["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete", "implements", "interface", "let", "package", "private", "protected", "public", "static", "yield", "eval", "arguments", "enum", "await"]);
  function qt(a) {
    return Vt.has(a);
  }
  class It {
    constructor(t) {
      this.flags = 0, this.names = /* @__PURE__ */ new Map(), this.firstLexicalName = "", this.flags = t;
    }
  }
  class Oe {
    constructor(t, e) {
      this.parser = void 0, this.scopeStack = [], this.inModule = void 0, this.undefinedExports = /* @__PURE__ */ new Map(), this.parser = t, this.inModule = e;
    }
    get inTopLevel() {
      return (this.currentScope().flags & 1) > 0;
    }
    get inFunction() {
      return (this.currentVarScopeFlags() & 2) > 0;
    }
    get allowSuper() {
      return (this.currentThisScopeFlags() & 16) > 0;
    }
    get allowDirectSuper() {
      return (this.currentThisScopeFlags() & 32) > 0;
    }
    get allowNewTarget() {
      return (this.currentThisScopeFlags() & 512) > 0;
    }
    get inClass() {
      return (this.currentThisScopeFlags() & 64) > 0;
    }
    get inClassAndNotInNonArrowFunction() {
      const t = this.currentThisScopeFlags();
      return (t & 64) > 0 && (t & 2) === 0;
    }
    get inStaticBlock() {
      for (let t = this.scopeStack.length - 1; ; t--) {
        const {
          flags: e
        } = this.scopeStack[t];
        if (e & 128)
          return !0;
        if (e & 1731)
          return !1;
      }
    }
    get inNonArrowFunction() {
      return (this.currentThisScopeFlags() & 2) > 0;
    }
    get inBareCaseStatement() {
      return (this.currentScope().flags & 256) > 0;
    }
    get treatFunctionsAsVar() {
      return this.treatFunctionsAsVarInScope(this.currentScope());
    }
    createScope(t) {
      return new It(t);
    }
    enter(t) {
      this.scopeStack.push(this.createScope(t));
    }
    exit() {
      return this.scopeStack.pop().flags;
    }
    treatFunctionsAsVarInScope(t) {
      return !!(t.flags & 130 || !this.parser.inModule && t.flags & 1);
    }
    declareName(t, e, s) {
      let i = this.currentScope();
      if (e & 8 || e & 16) {
        this.checkRedeclarationInScope(i, t, e, s);
        let r = i.names.get(t) || 0;
        e & 16 ? r = r | 4 : (i.firstLexicalName || (i.firstLexicalName = t), r = r | 2), i.names.set(t, r), e & 8 && this.maybeExportDefined(i, t);
      } else if (e & 4)
        for (let r = this.scopeStack.length - 1; r >= 0 && (i = this.scopeStack[r], this.checkRedeclarationInScope(i, t, e, s), i.names.set(t, (i.names.get(t) || 0) | 1), this.maybeExportDefined(i, t), !(i.flags & 1667)); --r)
          ;
      this.parser.inModule && i.flags & 1 && this.undefinedExports.delete(t);
    }
    maybeExportDefined(t, e) {
      this.parser.inModule && t.flags & 1 && this.undefinedExports.delete(e);
    }
    checkRedeclarationInScope(t, e, s, i) {
      this.isRedeclaredInScope(t, e, s) && this.parser.raise(m.VarRedeclaration, i, {
        identifierName: e
      });
    }
    isRedeclaredInScope(t, e, s) {
      if (!(s & 1)) return !1;
      if (s & 8)
        return t.names.has(e);
      const i = t.names.get(e) || 0;
      return s & 16 ? (i & 2) > 0 || !this.treatFunctionsAsVarInScope(t) && (i & 1) > 0 : (i & 2) > 0 && !(t.flags & 8 && t.firstLexicalName === e) || !this.treatFunctionsAsVarInScope(t) && (i & 4) > 0;
    }
    checkLocalExport(t) {
      const {
        name: e
      } = t;
      this.scopeStack[0].names.has(e) || this.undefinedExports.set(e, t.loc.start);
    }
    currentScope() {
      return this.scopeStack[this.scopeStack.length - 1];
    }
    currentVarScopeFlags() {
      for (let t = this.scopeStack.length - 1; ; t--) {
        const {
          flags: e
        } = this.scopeStack[t];
        if (e & 1667)
          return e;
      }
    }
    currentThisScopeFlags() {
      for (let t = this.scopeStack.length - 1; ; t--) {
        const {
          flags: e
        } = this.scopeStack[t];
        if (e & 1731 && !(e & 4))
          return e;
      }
    }
  }
  class nt extends It {
    constructor(...t) {
      super(...t), this.declareFunctions = /* @__PURE__ */ new Set();
    }
  }
  class Wt extends Oe {
    createScope(t) {
      return new nt(t);
    }
    declareName(t, e, s) {
      const i = this.currentScope();
      if (e & 2048) {
        this.checkRedeclarationInScope(i, t, e, s), this.maybeExportDefined(i, t), i.declareFunctions.add(t);
        return;
      }
      super.declareName(t, e, s);
    }
    isRedeclaredInScope(t, e, s) {
      if (super.isRedeclaredInScope(t, e, s)) return !0;
      if (s & 2048 && !t.declareFunctions.has(e)) {
        const i = t.names.get(e);
        return (i & 4) > 0 || (i & 2) > 0;
      }
      return !1;
    }
    checkLocalExport(t) {
      this.scopeStack[0].declareFunctions.has(t.name) || super.checkLocalExport(t);
    }
  }
  const Kt = /* @__PURE__ */ new Set(["_", "any", "bool", "boolean", "empty", "extends", "false", "interface", "mixed", "null", "number", "static", "string", "true", "typeof", "void"]), F = U`flow`({
    AmbiguousConditionalArrow: "Ambiguous expression: wrap the arrow functions in parentheses to disambiguate.",
    AmbiguousDeclareModuleKind: "Found both `declare module.exports` and `declare export` in the same module. Modules can only have 1 since they are either an ES module or they are a CommonJS module.",
    AssignReservedType: ({
      reservedType: a
    }) => `Cannot overwrite reserved type ${a}.`,
    DeclareClassElement: "The `declare` modifier can only appear on class fields.",
    DeclareClassFieldInitializer: "Initializers are not allowed in fields with the `declare` modifier.",
    DuplicateDeclareModuleExports: "Duplicate `declare module.exports` statement.",
    EnumBooleanMemberNotInitialized: ({
      memberName: a,
      enumName: t
    }) => `Boolean enum members need to be initialized. Use either \`${a} = true,\` or \`${a} = false,\` in enum \`${t}\`.`,
    EnumDuplicateMemberName: ({
      memberName: a,
      enumName: t
    }) => `Enum member names need to be unique, but the name \`${a}\` has already been used before in enum \`${t}\`.`,
    EnumInconsistentMemberValues: ({
      enumName: a
    }) => `Enum \`${a}\` has inconsistent member initializers. Either use no initializers, or consistently use literals (either booleans, numbers, or strings) for all member initializers.`,
    EnumInvalidExplicitType: ({
      invalidEnumType: a,
      enumName: t
    }) => `Enum type \`${a}\` is not valid. Use one of \`boolean\`, \`number\`, \`string\`, or \`symbol\` in enum \`${t}\`.`,
    EnumInvalidExplicitTypeUnknownSupplied: ({
      enumName: a
    }) => `Supplied enum type is not valid. Use one of \`boolean\`, \`number\`, \`string\`, or \`symbol\` in enum \`${a}\`.`,
    EnumInvalidMemberInitializerPrimaryType: ({
      enumName: a,
      memberName: t,
      explicitType: e
    }) => `Enum \`${a}\` has type \`${e}\`, so the initializer of \`${t}\` needs to be a ${e} literal.`,
    EnumInvalidMemberInitializerSymbolType: ({
      enumName: a,
      memberName: t
    }) => `Symbol enum members cannot be initialized. Use \`${t},\` in enum \`${a}\`.`,
    EnumInvalidMemberInitializerUnknownType: ({
      enumName: a,
      memberName: t
    }) => `The enum member initializer for \`${t}\` needs to be a literal (either a boolean, number, or string) in enum \`${a}\`.`,
    EnumInvalidMemberName: ({
      enumName: a,
      memberName: t,
      suggestion: e
    }) => `Enum member names cannot start with lowercase 'a' through 'z'. Instead of using \`${t}\`, consider using \`${e}\`, in enum \`${a}\`.`,
    EnumNumberMemberNotInitialized: ({
      enumName: a,
      memberName: t
    }) => `Number enum members need to be initialized, e.g. \`${t} = 1\` in enum \`${a}\`.`,
    EnumStringMemberInconsistentlyInitialized: ({
      enumName: a
    }) => `String enum members need to consistently either all use initializers, or use no initializers, in enum \`${a}\`.`,
    GetterMayNotHaveThisParam: "A getter cannot have a `this` parameter.",
    ImportReflectionHasImportType: "An `import module` declaration can not use `type` or `typeof` keyword.",
    ImportTypeShorthandOnlyInPureImport: "The `type` and `typeof` keywords on named imports can only be used on regular `import` statements. It cannot be used with `import type` or `import typeof` statements.",
    InexactInsideExact: "Explicit inexact syntax cannot appear inside an explicit exact object type.",
    InexactInsideNonObject: "Explicit inexact syntax cannot appear in class or interface definitions.",
    InexactVariance: "Explicit inexact syntax cannot have variance.",
    InvalidNonTypeImportInDeclareModule: "Imports within a `declare module` body must always be `import type` or `import typeof`.",
    MissingTypeParamDefault: "Type parameter declaration needs a default, since a preceding type parameter declaration has a default.",
    NestedDeclareModule: "`declare module` cannot be used inside another `declare module`.",
    NestedFlowComment: "Cannot have a flow comment inside another flow comment.",
    PatternIsOptional: Object.assign({
      message: "A binding pattern parameter cannot be optional in an implementation signature."
    }, {
      reasonCode: "OptionalBindingPattern"
    }),
    SetterMayNotHaveThisParam: "A setter cannot have a `this` parameter.",
    SpreadVariance: "Spread properties cannot have variance.",
    ThisParamAnnotationRequired: "A type annotation is required for the `this` parameter.",
    ThisParamBannedInConstructor: "Constructors cannot have a `this` parameter; constructors don't bind `this` like other functions.",
    ThisParamMayNotBeOptional: "The `this` parameter cannot be optional.",
    ThisParamMustBeFirst: "The `this` parameter must be the first function parameter.",
    ThisParamNoDefault: "The `this` parameter may not have a default value.",
    TypeBeforeInitializer: "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.",
    TypeCastInPattern: "The type cast expression is expected to be wrapped with parenthesis.",
    UnexpectedExplicitInexactInObject: "Explicit inexact syntax must appear at the end of an inexact object.",
    UnexpectedReservedType: ({
      reservedType: a
    }) => `Unexpected reserved type ${a}.`,
    UnexpectedReservedUnderscore: "`_` is only allowed as a type argument to call or new.",
    UnexpectedSpaceBetweenModuloChecks: "Spaces between `%` and `checks` are not allowed here.",
    UnexpectedSpreadType: "Spread operator cannot appear in class or interface definitions.",
    UnexpectedSubtractionOperand: 'Unexpected token, expected "number" or "bigint".',
    UnexpectedTokenAfterTypeParameter: "Expected an arrow function after this type parameter declaration.",
    UnexpectedTypeParameterBeforeAsyncArrowFunction: "Type parameters must come after the async keyword, e.g. instead of `<T> async () => {}`, use `async <T>() => {}`.",
    UnsupportedDeclareExportKind: ({
      unsupportedExportKind: a,
      suggestion: t
    }) => `\`declare export ${a}\` is not supported. Use \`${t}\` instead.`,
    UnsupportedStatementInDeclareModule: "Only declares and type imports are allowed inside declare module.",
    UnterminatedFlowComment: "Unterminated flow-comment."
  });
  function Gt(a) {
    return a.type === "DeclareExportAllDeclaration" || a.type === "DeclareExportDeclaration" && (!a.declaration || a.declaration.type !== "TypeAlias" && a.declaration.type !== "InterfaceDeclaration");
  }
  function Re(a) {
    return a.importKind === "type" || a.importKind === "typeof";
  }
  const Jt = {
    const: "declare export var",
    let: "declare export var",
    type: "export type",
    interface: "export interface"
  };
  function Xt(a, t) {
    const e = [], s = [];
    for (let i = 0; i < a.length; i++)
      (t(a[i], i, a) ? e : s).push(a[i]);
    return [e, s];
  }
  const Yt = /\*?\s*@((?:no)?flow)\b/;
  var Zt = (a) => class extends a {
    constructor(...e) {
      super(...e), this.flowPragma = void 0;
    }
    getScopeHandler() {
      return Wt;
    }
    shouldParseTypes() {
      return this.getPluginOption("flow", "all") || this.flowPragma === "flow";
    }
    finishToken(e, s) {
      e !== 134 && e !== 13 && e !== 28 && this.flowPragma === void 0 && (this.flowPragma = null), super.finishToken(e, s);
    }
    addComment(e) {
      if (this.flowPragma === void 0) {
        const s = Yt.exec(e.value);
        if (s) if (s[1] === "flow")
          this.flowPragma = "flow";
        else if (s[1] === "noflow")
          this.flowPragma = "noflow";
        else
          throw new Error("Unexpected flow pragma");
      }
      super.addComment(e);
    }
    flowParseTypeInitialiser(e) {
      const s = this.state.inType;
      this.state.inType = !0, this.expect(e || 14);
      const i = this.flowParseType();
      return this.state.inType = s, i;
    }
    flowParsePredicate() {
      const e = this.startNode(), s = this.state.startLoc;
      return this.next(), this.expectContextual(110), this.state.lastTokStartLoc.index > s.index + 1 && this.raise(F.UnexpectedSpaceBetweenModuloChecks, s), this.eat(10) ? (e.value = super.parseExpression(), this.expect(11), this.finishNode(e, "DeclaredPredicate")) : this.finishNode(e, "InferredPredicate");
    }
    flowParseTypeAndPredicateInitialiser() {
      const e = this.state.inType;
      this.state.inType = !0, this.expect(14);
      let s = null, i = null;
      return this.match(54) ? (this.state.inType = e, i = this.flowParsePredicate()) : (s = this.flowParseType(), this.state.inType = e, this.match(54) && (i = this.flowParsePredicate())), [s, i];
    }
    flowParseDeclareClass(e) {
      return this.next(), this.flowParseInterfaceish(e, !0), this.finishNode(e, "DeclareClass");
    }
    flowParseDeclareFunction(e) {
      this.next();
      const s = e.id = this.parseIdentifier(), i = this.startNode(), r = this.startNode();
      this.match(47) ? i.typeParameters = this.flowParseTypeParameterDeclaration() : i.typeParameters = null, this.expect(10);
      const n = this.flowParseFunctionTypeParams();
      return i.params = n.params, i.rest = n.rest, i.this = n._this, this.expect(11), [i.returnType, e.predicate] = this.flowParseTypeAndPredicateInitialiser(), r.typeAnnotation = this.finishNode(i, "FunctionTypeAnnotation"), s.typeAnnotation = this.finishNode(r, "TypeAnnotation"), this.resetEndLocation(s), this.semicolon(), this.scope.declareName(e.id.name, 2048, e.id.loc.start), this.finishNode(e, "DeclareFunction");
    }
    flowParseDeclare(e, s) {
      if (this.match(80))
        return this.flowParseDeclareClass(e);
      if (this.match(68))
        return this.flowParseDeclareFunction(e);
      if (this.match(74))
        return this.flowParseDeclareVariable(e);
      if (this.eatContextual(127))
        return this.match(16) ? this.flowParseDeclareModuleExports(e) : (s && this.raise(F.NestedDeclareModule, this.state.lastTokStartLoc), this.flowParseDeclareModule(e));
      if (this.isContextual(130))
        return this.flowParseDeclareTypeAlias(e);
      if (this.isContextual(131))
        return this.flowParseDeclareOpaqueType(e);
      if (this.isContextual(129))
        return this.flowParseDeclareInterface(e);
      if (this.match(82))
        return this.flowParseDeclareExportDeclaration(e, s);
      throw this.unexpected();
    }
    flowParseDeclareVariable(e) {
      return this.next(), e.id = this.flowParseTypeAnnotatableIdentifier(), this.scope.declareName(e.id.name, 5, e.id.loc.start), this.semicolon(), this.finishNode(e, "DeclareVariable");
    }
    flowParseDeclareModule(e) {
      this.scope.enter(0), this.match(134) ? e.id = super.parseExprAtom() : e.id = this.parseIdentifier();
      const s = e.body = this.startNode(), i = s.body = [];
      for (this.expect(5); !this.match(8); ) {
        const c = this.startNode();
        this.match(83) ? (this.next(), !this.isContextual(130) && !this.match(87) && this.raise(F.InvalidNonTypeImportInDeclareModule, this.state.lastTokStartLoc), i.push(super.parseImport(c))) : (this.expectContextual(125, F.UnsupportedStatementInDeclareModule), i.push(this.flowParseDeclare(c, !0)));
      }
      this.scope.exit(), this.expect(8), this.finishNode(s, "BlockStatement");
      let r = null, n = !1;
      return i.forEach((c) => {
        Gt(c) ? (r === "CommonJS" && this.raise(F.AmbiguousDeclareModuleKind, c), r = "ES") : c.type === "DeclareModuleExports" && (n && this.raise(F.DuplicateDeclareModuleExports, c), r === "ES" && this.raise(F.AmbiguousDeclareModuleKind, c), r = "CommonJS", n = !0);
      }), e.kind = r || "CommonJS", this.finishNode(e, "DeclareModule");
    }
    flowParseDeclareExportDeclaration(e, s) {
      if (this.expect(82), this.eat(65))
        return this.match(68) || this.match(80) ? e.declaration = this.flowParseDeclare(this.startNode()) : (e.declaration = this.flowParseType(), this.semicolon()), e.default = !0, this.finishNode(e, "DeclareExportDeclaration");
      if (this.match(75) || this.isLet() || (this.isContextual(130) || this.isContextual(129)) && !s) {
        const i = this.state.value;
        throw this.raise(F.UnsupportedDeclareExportKind, this.state.startLoc, {
          unsupportedExportKind: i,
          suggestion: Jt[i]
        });
      }
      if (this.match(74) || this.match(68) || this.match(80) || this.isContextual(131))
        return e.declaration = this.flowParseDeclare(this.startNode()), e.default = !1, this.finishNode(e, "DeclareExportDeclaration");
      if (this.match(55) || this.match(5) || this.isContextual(129) || this.isContextual(130) || this.isContextual(131))
        return e = this.parseExport(e, null), e.type === "ExportNamedDeclaration" ? (e.default = !1, delete e.exportKind, this.castNodeTo(e, "DeclareExportDeclaration")) : this.castNodeTo(e, "DeclareExportAllDeclaration");
      throw this.unexpected();
    }
    flowParseDeclareModuleExports(e) {
      return this.next(), this.expectContextual(111), e.typeAnnotation = this.flowParseTypeAnnotation(), this.semicolon(), this.finishNode(e, "DeclareModuleExports");
    }
    flowParseDeclareTypeAlias(e) {
      this.next();
      const s = this.flowParseTypeAlias(e);
      return this.castNodeTo(s, "DeclareTypeAlias"), s;
    }
    flowParseDeclareOpaqueType(e) {
      this.next();
      const s = this.flowParseOpaqueType(e, !0);
      return this.castNodeTo(s, "DeclareOpaqueType"), s;
    }
    flowParseDeclareInterface(e) {
      return this.next(), this.flowParseInterfaceish(e, !1), this.finishNode(e, "DeclareInterface");
    }
    flowParseInterfaceish(e, s) {
      if (e.id = this.flowParseRestrictedIdentifier(!s, !0), this.scope.declareName(e.id.name, s ? 17 : 8201, e.id.loc.start), this.match(47) ? e.typeParameters = this.flowParseTypeParameterDeclaration() : e.typeParameters = null, e.extends = [], this.eat(81))
        do
          e.extends.push(this.flowParseInterfaceExtends());
        while (!s && this.eat(12));
      if (s) {
        if (e.implements = [], e.mixins = [], this.eatContextual(117))
          do
            e.mixins.push(this.flowParseInterfaceExtends());
          while (this.eat(12));
        if (this.eatContextual(113))
          do
            e.implements.push(this.flowParseInterfaceExtends());
          while (this.eat(12));
      }
      e.body = this.flowParseObjectType({
        allowStatic: s,
        allowExact: !1,
        allowSpread: !1,
        allowProto: s,
        allowInexact: !1
      });
    }
    flowParseInterfaceExtends() {
      const e = this.startNode();
      return e.id = this.flowParseQualifiedTypeIdentifier(), this.match(47) ? e.typeParameters = this.flowParseTypeParameterInstantiation() : e.typeParameters = null, this.finishNode(e, "InterfaceExtends");
    }
    flowParseInterface(e) {
      return this.flowParseInterfaceish(e, !1), this.finishNode(e, "InterfaceDeclaration");
    }
    checkNotUnderscore(e) {
      e === "_" && this.raise(F.UnexpectedReservedUnderscore, this.state.startLoc);
    }
    checkReservedType(e, s, i) {
      Kt.has(e) && this.raise(i ? F.AssignReservedType : F.UnexpectedReservedType, s, {
        reservedType: e
      });
    }
    flowParseRestrictedIdentifierName(e, s) {
      return this.checkReservedType(this.state.value, this.state.startLoc, s), this.parseIdentifierName(e);
    }
    flowParseRestrictedIdentifier(e, s) {
      const i = this.startNode(), r = this.flowParseRestrictedIdentifierName(e, s);
      return this.createIdentifier(i, r);
    }
    flowParseTypeAlias(e) {
      return e.id = this.flowParseRestrictedIdentifier(!1, !0), this.scope.declareName(e.id.name, 8201, e.id.loc.start), this.match(47) ? e.typeParameters = this.flowParseTypeParameterDeclaration() : e.typeParameters = null, e.right = this.flowParseTypeInitialiser(29), this.semicolon(), this.finishNode(e, "TypeAlias");
    }
    flowParseOpaqueType(e, s) {
      return this.expectContextual(130), e.id = this.flowParseRestrictedIdentifier(!0, !0), this.scope.declareName(e.id.name, 8201, e.id.loc.start), this.match(47) ? e.typeParameters = this.flowParseTypeParameterDeclaration() : e.typeParameters = null, e.supertype = null, this.match(14) && (e.supertype = this.flowParseTypeInitialiser(14)), e.impltype = null, s || (e.impltype = this.flowParseTypeInitialiser(29)), this.semicolon(), this.finishNode(e, "OpaqueType");
    }
    flowParseTypeParameterBound() {
      if (this.match(14) || this.isContextual(81)) {
        const e = this.startNode();
        return this.next(), e.typeAnnotation = this.flowParseType(), this.finishNode(e, "TypeAnnotation");
      }
    }
    flowParseTypeParameter(e = !1) {
      const s = this.state.startLoc, i = this.startNode(), r = this.flowParseVariance();
      return i.name = this.flowParseRestrictedIdentifierName(), i.variance = r, i.bound = this.flowParseTypeParameterBound(), this.match(29) ? (this.eat(29), i.default = this.flowParseType()) : e && this.raise(F.MissingTypeParamDefault, s), this.finishNode(i, "TypeParameter");
    }
    flowParseTypeParameterDeclaration() {
      const e = this.state.inType, s = this.startNode();
      s.params = [], this.state.inType = !0, this.match(47) || this.match(143) ? this.next() : this.unexpected();
      let i = !1;
      do {
        const r = this.flowParseTypeParameter(i);
        s.params.push(r), r.default && (i = !0), this.match(48) || this.expect(12);
      } while (!this.match(48));
      return this.expect(48), this.state.inType = e, this.finishNode(s, "TypeParameterDeclaration");
    }
    flowInTopLevelContext(e) {
      if (this.curContext() !== V.brace) {
        const s = this.state.context;
        this.state.context = [s[0]];
        try {
          return e();
        } finally {
          this.state.context = s;
        }
      } else
        return e();
    }
    flowParseTypeParameterInstantiationInExpression() {
      if (this.reScan_lt() === 47)
        return this.flowParseTypeParameterInstantiation();
    }
    flowParseTypeParameterInstantiation() {
      const e = this.startNode(), s = this.state.inType;
      return this.state.inType = !0, e.params = [], this.flowInTopLevelContext(() => {
        this.expect(47);
        const i = this.state.noAnonFunctionType;
        for (this.state.noAnonFunctionType = !1; !this.match(48); )
          e.params.push(this.flowParseType()), this.match(48) || this.expect(12);
        this.state.noAnonFunctionType = i;
      }), this.state.inType = s, !this.state.inType && this.curContext() === V.brace && this.reScan_lt_gt(), this.expect(48), this.finishNode(e, "TypeParameterInstantiation");
    }
    flowParseTypeParameterInstantiationCallOrNew() {
      if (this.reScan_lt() !== 47) return null;
      const e = this.startNode(), s = this.state.inType;
      for (e.params = [], this.state.inType = !0, this.expect(47); !this.match(48); )
        e.params.push(this.flowParseTypeOrImplicitInstantiation()), this.match(48) || this.expect(12);
      return this.expect(48), this.state.inType = s, this.finishNode(e, "TypeParameterInstantiation");
    }
    flowParseInterfaceType() {
      const e = this.startNode();
      if (this.expectContextual(129), e.extends = [], this.eat(81))
        do
          e.extends.push(this.flowParseInterfaceExtends());
        while (this.eat(12));
      return e.body = this.flowParseObjectType({
        allowStatic: !1,
        allowExact: !1,
        allowSpread: !1,
        allowProto: !1,
        allowInexact: !1
      }), this.finishNode(e, "InterfaceTypeAnnotation");
    }
    flowParseObjectPropertyKey() {
      return this.match(135) || this.match(134) ? super.parseExprAtom() : this.parseIdentifier(!0);
    }
    flowParseObjectTypeIndexer(e, s, i) {
      return e.static = s, this.lookahead().type === 14 ? (e.id = this.flowParseObjectPropertyKey(), e.key = this.flowParseTypeInitialiser()) : (e.id = null, e.key = this.flowParseType()), this.expect(3), e.value = this.flowParseTypeInitialiser(), e.variance = i, this.finishNode(e, "ObjectTypeIndexer");
    }
    flowParseObjectTypeInternalSlot(e, s) {
      return e.static = s, e.id = this.flowParseObjectPropertyKey(), this.expect(3), this.expect(3), this.match(47) || this.match(10) ? (e.method = !0, e.optional = !1, e.value = this.flowParseObjectTypeMethodish(this.startNodeAt(e.loc.start))) : (e.method = !1, this.eat(17) && (e.optional = !0), e.value = this.flowParseTypeInitialiser()), this.finishNode(e, "ObjectTypeInternalSlot");
    }
    flowParseObjectTypeMethodish(e) {
      for (e.params = [], e.rest = null, e.typeParameters = null, e.this = null, this.match(47) && (e.typeParameters = this.flowParseTypeParameterDeclaration()), this.expect(10), this.match(78) && (e.this = this.flowParseFunctionTypeParam(!0), e.this.name = null, this.match(11) || this.expect(12)); !this.match(11) && !this.match(21); )
        e.params.push(this.flowParseFunctionTypeParam(!1)), this.match(11) || this.expect(12);
      return this.eat(21) && (e.rest = this.flowParseFunctionTypeParam(!1)), this.expect(11), e.returnType = this.flowParseTypeInitialiser(), this.finishNode(e, "FunctionTypeAnnotation");
    }
    flowParseObjectTypeCallProperty(e, s) {
      const i = this.startNode();
      return e.static = s, e.value = this.flowParseObjectTypeMethodish(i), this.finishNode(e, "ObjectTypeCallProperty");
    }
    flowParseObjectType({
      allowStatic: e,
      allowExact: s,
      allowSpread: i,
      allowProto: r,
      allowInexact: n
    }) {
      const c = this.state.inType;
      this.state.inType = !0;
      const p = this.startNode();
      p.callProperties = [], p.properties = [], p.indexers = [], p.internalSlots = [];
      let f, y, T = !1;
      for (s && this.match(6) ? (this.expect(6), f = 9, y = !0) : (this.expect(5), f = 8, y = !1), p.exact = y; !this.match(f); ) {
        let E = !1, M = null, X = null;
        const oe = this.startNode();
        if (r && this.isContextual(118)) {
          const ie = this.lookahead();
          ie.type !== 14 && ie.type !== 17 && (this.next(), M = this.state.startLoc, e = !1);
        }
        if (e && this.isContextual(106)) {
          const ie = this.lookahead();
          ie.type !== 14 && ie.type !== 17 && (this.next(), E = !0);
        }
        const $ = this.flowParseVariance();
        if (this.eat(0))
          M != null && this.unexpected(M), this.eat(0) ? ($ && this.unexpected($.loc.start), p.internalSlots.push(this.flowParseObjectTypeInternalSlot(oe, E))) : p.indexers.push(this.flowParseObjectTypeIndexer(oe, E, $));
        else if (this.match(10) || this.match(47))
          M != null && this.unexpected(M), $ && this.unexpected($.loc.start), p.callProperties.push(this.flowParseObjectTypeCallProperty(oe, E));
        else {
          let ie = "init";
          if (this.isContextual(99) || this.isContextual(104)) {
            const lt = this.lookahead();
            Z(lt.type) && (ie = this.state.value, this.next());
          }
          const gt = this.flowParseObjectTypeProperty(oe, E, M, $, ie, i, n ?? !y);
          gt === null ? (T = !0, X = this.state.lastTokStartLoc) : p.properties.push(gt);
        }
        this.flowObjectTypeSemicolon(), X && !this.match(8) && !this.match(9) && this.raise(F.UnexpectedExplicitInexactInObject, X);
      }
      this.expect(f), i && (p.inexact = T);
      const I = this.finishNode(p, "ObjectTypeAnnotation");
      return this.state.inType = c, I;
    }
    flowParseObjectTypeProperty(e, s, i, r, n, c, p) {
      if (this.eat(21))
        return this.match(12) || this.match(13) || this.match(8) || this.match(9) ? (c ? p || this.raise(F.InexactInsideExact, this.state.lastTokStartLoc) : this.raise(F.InexactInsideNonObject, this.state.lastTokStartLoc), r && this.raise(F.InexactVariance, r), null) : (c || this.raise(F.UnexpectedSpreadType, this.state.lastTokStartLoc), i != null && this.unexpected(i), r && this.raise(F.SpreadVariance, r), e.argument = this.flowParseType(), this.finishNode(e, "ObjectTypeSpreadProperty"));
      {
        e.key = this.flowParseObjectPropertyKey(), e.static = s, e.proto = i != null, e.kind = n;
        let f = !1;
        return this.match(47) || this.match(10) ? (e.method = !0, i != null && this.unexpected(i), r && this.unexpected(r.loc.start), e.value = this.flowParseObjectTypeMethodish(this.startNodeAt(e.loc.start)), (n === "get" || n === "set") && this.flowCheckGetterSetterParams(e), !c && e.key.name === "constructor" && e.value.this && this.raise(F.ThisParamBannedInConstructor, e.value.this)) : (n !== "init" && this.unexpected(), e.method = !1, this.eat(17) && (f = !0), e.value = this.flowParseTypeInitialiser(), e.variance = r), e.optional = f, this.finishNode(e, "ObjectTypeProperty");
      }
    }
    flowCheckGetterSetterParams(e) {
      const s = e.kind === "get" ? 0 : 1, i = e.value.params.length + (e.value.rest ? 1 : 0);
      e.value.this && this.raise(e.kind === "get" ? F.GetterMayNotHaveThisParam : F.SetterMayNotHaveThisParam, e.value.this), i !== s && this.raise(e.kind === "get" ? m.BadGetterArity : m.BadSetterArity, e), e.kind === "set" && e.value.rest && this.raise(m.BadSetterRestParameter, e);
    }
    flowObjectTypeSemicolon() {
      !this.eat(13) && !this.eat(12) && !this.match(8) && !this.match(9) && this.unexpected();
    }
    flowParseQualifiedTypeIdentifier(e, s) {
      e ?? (e = this.state.startLoc);
      let i = s || this.flowParseRestrictedIdentifier(!0);
      for (; this.eat(16); ) {
        const r = this.startNodeAt(e);
        r.qualification = i, r.id = this.flowParseRestrictedIdentifier(!0), i = this.finishNode(r, "QualifiedTypeIdentifier");
      }
      return i;
    }
    flowParseGenericType(e, s) {
      const i = this.startNodeAt(e);
      return i.typeParameters = null, i.id = this.flowParseQualifiedTypeIdentifier(e, s), this.match(47) && (i.typeParameters = this.flowParseTypeParameterInstantiation()), this.finishNode(i, "GenericTypeAnnotation");
    }
    flowParseTypeofType() {
      const e = this.startNode();
      return this.expect(87), e.argument = this.flowParsePrimaryType(), this.finishNode(e, "TypeofTypeAnnotation");
    }
    flowParseTupleType() {
      const e = this.startNode();
      for (e.types = [], this.expect(0); this.state.pos < this.length && !this.match(3) && (e.types.push(this.flowParseType()), !this.match(3)); )
        this.expect(12);
      return this.expect(3), this.finishNode(e, "TupleTypeAnnotation");
    }
    flowParseFunctionTypeParam(e) {
      let s = null, i = !1, r = null;
      const n = this.startNode(), c = this.lookahead(), p = this.state.type === 78;
      return c.type === 14 || c.type === 17 ? (p && !e && this.raise(F.ThisParamMustBeFirst, n), s = this.parseIdentifier(p), this.eat(17) && (i = !0, p && this.raise(F.ThisParamMayNotBeOptional, n)), r = this.flowParseTypeInitialiser()) : r = this.flowParseType(), n.name = s, n.optional = i, n.typeAnnotation = r, this.finishNode(n, "FunctionTypeParam");
    }
    reinterpretTypeAsFunctionTypeParam(e) {
      const s = this.startNodeAt(e.loc.start);
      return s.name = null, s.optional = !1, s.typeAnnotation = e, this.finishNode(s, "FunctionTypeParam");
    }
    flowParseFunctionTypeParams(e = []) {
      let s = null, i = null;
      for (this.match(78) && (i = this.flowParseFunctionTypeParam(!0), i.name = null, this.match(11) || this.expect(12)); !this.match(11) && !this.match(21); )
        e.push(this.flowParseFunctionTypeParam(!1)), this.match(11) || this.expect(12);
      return this.eat(21) && (s = this.flowParseFunctionTypeParam(!1)), {
        params: e,
        rest: s,
        _this: i
      };
    }
    flowIdentToTypeAnnotation(e, s, i) {
      switch (i.name) {
        case "any":
          return this.finishNode(s, "AnyTypeAnnotation");
        case "bool":
        case "boolean":
          return this.finishNode(s, "BooleanTypeAnnotation");
        case "mixed":
          return this.finishNode(s, "MixedTypeAnnotation");
        case "empty":
          return this.finishNode(s, "EmptyTypeAnnotation");
        case "number":
          return this.finishNode(s, "NumberTypeAnnotation");
        case "string":
          return this.finishNode(s, "StringTypeAnnotation");
        case "symbol":
          return this.finishNode(s, "SymbolTypeAnnotation");
        default:
          return this.checkNotUnderscore(i.name), this.flowParseGenericType(e, i);
      }
    }
    flowParsePrimaryType() {
      const e = this.state.startLoc, s = this.startNode();
      let i, r, n = !1;
      const c = this.state.noAnonFunctionType;
      switch (this.state.type) {
        case 5:
          return this.flowParseObjectType({
            allowStatic: !1,
            allowExact: !1,
            allowSpread: !0,
            allowProto: !1,
            allowInexact: !0
          });
        case 6:
          return this.flowParseObjectType({
            allowStatic: !1,
            allowExact: !0,
            allowSpread: !0,
            allowProto: !1,
            allowInexact: !1
          });
        case 0:
          return this.state.noAnonFunctionType = !1, r = this.flowParseTupleType(), this.state.noAnonFunctionType = c, r;
        case 47: {
          const p = this.startNode();
          return p.typeParameters = this.flowParseTypeParameterDeclaration(), this.expect(10), i = this.flowParseFunctionTypeParams(), p.params = i.params, p.rest = i.rest, p.this = i._this, this.expect(11), this.expect(19), p.returnType = this.flowParseType(), this.finishNode(p, "FunctionTypeAnnotation");
        }
        case 10: {
          const p = this.startNode();
          if (this.next(), !this.match(11) && !this.match(21))
            if (K(this.state.type) || this.match(78)) {
              const f = this.lookahead().type;
              n = f !== 17 && f !== 14;
            } else
              n = !0;
          if (n) {
            if (this.state.noAnonFunctionType = !1, r = this.flowParseType(), this.state.noAnonFunctionType = c, this.state.noAnonFunctionType || !(this.match(12) || this.match(11) && this.lookahead().type === 19))
              return this.expect(11), r;
            this.eat(12);
          }
          return r ? i = this.flowParseFunctionTypeParams([this.reinterpretTypeAsFunctionTypeParam(r)]) : i = this.flowParseFunctionTypeParams(), p.params = i.params, p.rest = i.rest, p.this = i._this, this.expect(11), this.expect(19), p.returnType = this.flowParseType(), p.typeParameters = null, this.finishNode(p, "FunctionTypeAnnotation");
        }
        case 134:
          return this.parseLiteral(this.state.value, "StringLiteralTypeAnnotation");
        case 85:
        case 86:
          return s.value = this.match(85), this.next(), this.finishNode(s, "BooleanLiteralTypeAnnotation");
        case 53:
          if (this.state.value === "-") {
            if (this.next(), this.match(135))
              return this.parseLiteralAtNode(-this.state.value, "NumberLiteralTypeAnnotation", s);
            if (this.match(136))
              return this.parseLiteralAtNode(-this.state.value, "BigIntLiteralTypeAnnotation", s);
            throw this.raise(F.UnexpectedSubtractionOperand, this.state.startLoc);
          }
          throw this.unexpected();
        case 135:
          return this.parseLiteral(this.state.value, "NumberLiteralTypeAnnotation");
        case 136:
          return this.parseLiteral(this.state.value, "BigIntLiteralTypeAnnotation");
        case 88:
          return this.next(), this.finishNode(s, "VoidTypeAnnotation");
        case 84:
          return this.next(), this.finishNode(s, "NullLiteralTypeAnnotation");
        case 78:
          return this.next(), this.finishNode(s, "ThisTypeAnnotation");
        case 55:
          return this.next(), this.finishNode(s, "ExistsTypeAnnotation");
        case 87:
          return this.flowParseTypeofType();
        default:
          if (bt(this.state.type)) {
            const p = Ie(this.state.type);
            return this.next(), super.createIdentifier(s, p);
          } else if (K(this.state.type))
            return this.isContextual(129) ? this.flowParseInterfaceType() : this.flowIdentToTypeAnnotation(e, s, this.parseIdentifier());
      }
      throw this.unexpected();
    }
    flowParsePostfixType() {
      const e = this.state.startLoc;
      let s = this.flowParsePrimaryType(), i = !1;
      for (; (this.match(0) || this.match(18)) && !this.canInsertSemicolon(); ) {
        const r = this.startNodeAt(e), n = this.eat(18);
        i = i || n, this.expect(0), !n && this.match(3) ? (r.elementType = s, this.next(), s = this.finishNode(r, "ArrayTypeAnnotation")) : (r.objectType = s, r.indexType = this.flowParseType(), this.expect(3), i ? (r.optional = n, s = this.finishNode(r, "OptionalIndexedAccessType")) : s = this.finishNode(r, "IndexedAccessType"));
      }
      return s;
    }
    flowParsePrefixType() {
      const e = this.startNode();
      return this.eat(17) ? (e.typeAnnotation = this.flowParsePrefixType(), this.finishNode(e, "NullableTypeAnnotation")) : this.flowParsePostfixType();
    }
    flowParseAnonFunctionWithoutParens() {
      const e = this.flowParsePrefixType();
      if (!this.state.noAnonFunctionType && this.eat(19)) {
        const s = this.startNodeAt(e.loc.start);
        return s.params = [this.reinterpretTypeAsFunctionTypeParam(e)], s.rest = null, s.this = null, s.returnType = this.flowParseType(), s.typeParameters = null, this.finishNode(s, "FunctionTypeAnnotation");
      }
      return e;
    }
    flowParseIntersectionType() {
      const e = this.startNode();
      this.eat(45);
      const s = this.flowParseAnonFunctionWithoutParens();
      for (e.types = [s]; this.eat(45); )
        e.types.push(this.flowParseAnonFunctionWithoutParens());
      return e.types.length === 1 ? s : this.finishNode(e, "IntersectionTypeAnnotation");
    }
    flowParseUnionType() {
      const e = this.startNode();
      this.eat(43);
      const s = this.flowParseIntersectionType();
      for (e.types = [s]; this.eat(43); )
        e.types.push(this.flowParseIntersectionType());
      return e.types.length === 1 ? s : this.finishNode(e, "UnionTypeAnnotation");
    }
    flowParseType() {
      const e = this.state.inType;
      this.state.inType = !0;
      const s = this.flowParseUnionType();
      return this.state.inType = e, s;
    }
    flowParseTypeOrImplicitInstantiation() {
      if (this.state.type === 132 && this.state.value === "_") {
        const e = this.state.startLoc, s = this.parseIdentifier();
        return this.flowParseGenericType(e, s);
      } else
        return this.flowParseType();
    }
    flowParseTypeAnnotation() {
      const e = this.startNode();
      return e.typeAnnotation = this.flowParseTypeInitialiser(), this.finishNode(e, "TypeAnnotation");
    }
    flowParseTypeAnnotatableIdentifier() {
      const e = this.startNode(), s = this.parseIdentifierName();
      return this.match(14) && (e.typeAnnotation = this.flowParseTypeAnnotation()), this.createIdentifier(e, s);
    }
    typeCastToParameter(e) {
      return e.expression.typeAnnotation = e.typeAnnotation, this.resetEndLocation(e.expression, e.typeAnnotation.loc.end), e.expression;
    }
    flowParseVariance() {
      let e = null;
      return this.match(53) ? (e = this.startNode(), this.state.value === "+" ? e.kind = "plus" : e.kind = "minus", this.next(), this.finishNode(e, "Variance")) : e;
    }
    parseFunctionBody(e, s, i = !1) {
      if (s) {
        this.forwardNoArrowParamsConversionAt(e, () => super.parseFunctionBody(e, !0, i));
        return;
      }
      super.parseFunctionBody(e, !1, i);
    }
    parseFunctionBodyAndFinish(e, s, i = !1) {
      if (this.match(14)) {
        const r = this.startNode();
        [r.typeAnnotation, e.predicate] = this.flowParseTypeAndPredicateInitialiser(), e.returnType = r.typeAnnotation ? this.finishNode(r, "TypeAnnotation") : null;
      }
      return super.parseFunctionBodyAndFinish(e, s, i);
    }
    parseStatementLike(e) {
      if (this.state.strict && this.isContextual(129)) {
        const i = this.lookahead();
        if (G(i.type)) {
          const r = this.startNode();
          return this.next(), this.flowParseInterface(r);
        }
      } else if (this.isContextual(126)) {
        const i = this.startNode();
        return this.next(), this.flowParseEnumDeclaration(i);
      }
      const s = super.parseStatementLike(e);
      return this.flowPragma === void 0 && !this.isValidDirective(s) && (this.flowPragma = null), s;
    }
    parseExpressionStatement(e, s, i) {
      if (s.type === "Identifier") {
        if (s.name === "declare") {
          if (this.match(80) || K(this.state.type) || this.match(68) || this.match(74) || this.match(82))
            return this.flowParseDeclare(e);
        } else if (K(this.state.type)) {
          if (s.name === "interface")
            return this.flowParseInterface(e);
          if (s.name === "type")
            return this.flowParseTypeAlias(e);
          if (s.name === "opaque")
            return this.flowParseOpaqueType(e, !1);
        }
      }
      return super.parseExpressionStatement(e, s, i);
    }
    shouldParseExportDeclaration() {
      const {
        type: e
      } = this.state;
      return e === 126 || Ye(e) ? !this.state.containsEsc : super.shouldParseExportDeclaration();
    }
    isExportDefaultSpecifier() {
      const {
        type: e
      } = this.state;
      return e === 126 || Ye(e) ? this.state.containsEsc : super.isExportDefaultSpecifier();
    }
    parseExportDefaultExpression() {
      if (this.isContextual(126)) {
        const e = this.startNode();
        return this.next(), this.flowParseEnumDeclaration(e);
      }
      return super.parseExportDefaultExpression();
    }
    parseConditional(e, s, i) {
      if (!this.match(17)) return e;
      if (this.state.maybeInArrowParameters) {
        const I = this.lookaheadCharCode();
        if (I === 44 || I === 61 || I === 58 || I === 41)
          return this.setOptionalParametersError(i), e;
      }
      this.expect(17);
      const r = this.state.clone(), n = this.state.noArrowAt, c = this.startNodeAt(s);
      let {
        consequent: p,
        failed: f
      } = this.tryParseConditionalConsequent(), [y, T] = this.getArrowLikeExpressions(p);
      if (f || T.length > 0) {
        const I = [...n];
        if (T.length > 0) {
          this.state = r, this.state.noArrowAt = I;
          for (let E = 0; E < T.length; E++)
            I.push(T[E].start);
          ({
            consequent: p,
            failed: f
          } = this.tryParseConditionalConsequent()), [y, T] = this.getArrowLikeExpressions(p);
        }
        f && y.length > 1 && this.raise(F.AmbiguousConditionalArrow, r.startLoc), f && y.length === 1 && (this.state = r, I.push(y[0].start), this.state.noArrowAt = I, {
          consequent: p,
          failed: f
        } = this.tryParseConditionalConsequent());
      }
      return this.getArrowLikeExpressions(p, !0), this.state.noArrowAt = n, this.expect(14), c.test = e, c.consequent = p, c.alternate = this.forwardNoArrowParamsConversionAt(c, () => this.parseMaybeAssign(void 0, void 0)), this.finishNode(c, "ConditionalExpression");
    }
    tryParseConditionalConsequent() {
      this.state.noArrowParamsConversionAt.push(this.state.start);
      const e = this.parseMaybeAssignAllowIn(), s = !this.match(14);
      return this.state.noArrowParamsConversionAt.pop(), {
        consequent: e,
        failed: s
      };
    }
    getArrowLikeExpressions(e, s) {
      const i = [e], r = [];
      for (; i.length !== 0; ) {
        const n = i.pop();
        n.type === "ArrowFunctionExpression" && n.body.type !== "BlockStatement" ? (n.typeParameters || !n.returnType ? this.finishArrowValidation(n) : r.push(n), i.push(n.body)) : n.type === "ConditionalExpression" && (i.push(n.consequent), i.push(n.alternate));
      }
      return s ? (r.forEach((n) => this.finishArrowValidation(n)), [r, []]) : Xt(r, (n) => n.params.every((c) => this.isAssignable(c, !0)));
    }
    finishArrowValidation(e) {
      var s;
      this.toAssignableList(e.params, (s = e.extra) == null ? void 0 : s.trailingCommaLoc, !1), this.scope.enter(518), super.checkParams(e, !1, !0), this.scope.exit();
    }
    forwardNoArrowParamsConversionAt(e, s) {
      let i;
      return this.state.noArrowParamsConversionAt.includes(this.offsetToSourcePos(e.start)) ? (this.state.noArrowParamsConversionAt.push(this.state.start), i = s(), this.state.noArrowParamsConversionAt.pop()) : i = s(), i;
    }
    parseParenItem(e, s) {
      const i = super.parseParenItem(e, s);
      if (this.eat(17) && (i.optional = !0, this.resetEndLocation(e)), this.match(14)) {
        const r = this.startNodeAt(s);
        return r.expression = i, r.typeAnnotation = this.flowParseTypeAnnotation(), this.finishNode(r, "TypeCastExpression");
      }
      return i;
    }
    assertModuleNodeAllowed(e) {
      e.type === "ImportDeclaration" && (e.importKind === "type" || e.importKind === "typeof") || e.type === "ExportNamedDeclaration" && e.exportKind === "type" || e.type === "ExportAllDeclaration" && e.exportKind === "type" || super.assertModuleNodeAllowed(e);
    }
    parseExportDeclaration(e) {
      if (this.isContextual(130)) {
        e.exportKind = "type";
        const s = this.startNode();
        return this.next(), this.match(5) ? (e.specifiers = this.parseExportSpecifiers(!0), super.parseExportFrom(e), null) : this.flowParseTypeAlias(s);
      } else if (this.isContextual(131)) {
        e.exportKind = "type";
        const s = this.startNode();
        return this.next(), this.flowParseOpaqueType(s, !1);
      } else if (this.isContextual(129)) {
        e.exportKind = "type";
        const s = this.startNode();
        return this.next(), this.flowParseInterface(s);
      } else if (this.isContextual(126)) {
        e.exportKind = "value";
        const s = this.startNode();
        return this.next(), this.flowParseEnumDeclaration(s);
      } else
        return super.parseExportDeclaration(e);
    }
    eatExportStar(e) {
      return super.eatExportStar(e) ? !0 : this.isContextual(130) && this.lookahead().type === 55 ? (e.exportKind = "type", this.next(), this.next(), !0) : !1;
    }
    maybeParseExportNamespaceSpecifier(e) {
      const {
        startLoc: s
      } = this.state, i = super.maybeParseExportNamespaceSpecifier(e);
      return i && e.exportKind === "type" && this.unexpected(s), i;
    }
    parseClassId(e, s, i) {
      super.parseClassId(e, s, i), this.match(47) && (e.typeParameters = this.flowParseTypeParameterDeclaration());
    }
    parseClassMember(e, s, i) {
      const {
        startLoc: r
      } = this.state;
      if (this.isContextual(125)) {
        if (super.parseClassMemberFromModifier(e, s))
          return;
        s.declare = !0;
      }
      super.parseClassMember(e, s, i), s.declare && (s.type !== "ClassProperty" && s.type !== "ClassPrivateProperty" && s.type !== "PropertyDefinition" ? this.raise(F.DeclareClassElement, r) : s.value && this.raise(F.DeclareClassFieldInitializer, s.value));
    }
    isIterator(e) {
      return e === "iterator" || e === "asyncIterator";
    }
    readIterator() {
      const e = super.readWord1(), s = "@@" + e;
      (!this.isIterator(e) || !this.state.inType) && this.raise(m.InvalidIdentifier, this.state.curPosition(), {
        identifierName: s
      }), this.finishToken(132, s);
    }
    getTokenFromCode(e) {
      const s = this.input.charCodeAt(this.state.pos + 1);
      e === 123 && s === 124 ? this.finishOp(6, 2) : this.state.inType && (e === 62 || e === 60) ? this.finishOp(e === 62 ? 48 : 47, 1) : this.state.inType && e === 63 ? s === 46 ? this.finishOp(18, 2) : this.finishOp(17, 1) : Ct(e, s, this.input.charCodeAt(this.state.pos + 2)) ? (this.state.pos += 2, this.readIterator()) : super.getTokenFromCode(e);
    }
    isAssignable(e, s) {
      return e.type === "TypeCastExpression" ? this.isAssignable(e.expression, s) : super.isAssignable(e, s);
    }
    toAssignable(e, s = !1) {
      !s && e.type === "AssignmentExpression" && e.left.type === "TypeCastExpression" && (e.left = this.typeCastToParameter(e.left)), super.toAssignable(e, s);
    }
    toAssignableList(e, s, i) {
      for (let r = 0; r < e.length; r++) {
        const n = e[r];
        (n == null ? void 0 : n.type) === "TypeCastExpression" && (e[r] = this.typeCastToParameter(n));
      }
      super.toAssignableList(e, s, i);
    }
    toReferencedList(e, s) {
      for (let r = 0; r < e.length; r++) {
        var i;
        const n = e[r];
        n && n.type === "TypeCastExpression" && !((i = n.extra) != null && i.parenthesized) && (e.length > 1 || !s) && this.raise(F.TypeCastInPattern, n.typeAnnotation);
      }
      return e;
    }
    parseArrayLike(e, s, i) {
      const r = super.parseArrayLike(e, s, i);
      return i != null && !this.state.maybeInArrowParameters && this.toReferencedList(r.elements), r;
    }
    isValidLVal(e, s, i, r) {
      return e === "TypeCastExpression" || super.isValidLVal(e, s, i, r);
    }
    parseClassProperty(e) {
      return this.match(14) && (e.typeAnnotation = this.flowParseTypeAnnotation()), super.parseClassProperty(e);
    }
    parseClassPrivateProperty(e) {
      return this.match(14) && (e.typeAnnotation = this.flowParseTypeAnnotation()), super.parseClassPrivateProperty(e);
    }
    isClassMethod() {
      return this.match(47) || super.isClassMethod();
    }
    isClassProperty() {
      return this.match(14) || super.isClassProperty();
    }
    isNonstaticConstructor(e) {
      return !this.match(14) && super.isNonstaticConstructor(e);
    }
    pushClassMethod(e, s, i, r, n, c) {
      if (s.variance && this.unexpected(s.variance.loc.start), delete s.variance, this.match(47) && (s.typeParameters = this.flowParseTypeParameterDeclaration()), super.pushClassMethod(e, s, i, r, n, c), s.params && n) {
        const p = s.params;
        p.length > 0 && this.isThisParam(p[0]) && this.raise(F.ThisParamBannedInConstructor, s);
      } else if (s.type === "MethodDefinition" && n && s.value.params) {
        const p = s.value.params;
        p.length > 0 && this.isThisParam(p[0]) && this.raise(F.ThisParamBannedInConstructor, s);
      }
    }
    pushClassPrivateMethod(e, s, i, r) {
      s.variance && this.unexpected(s.variance.loc.start), delete s.variance, this.match(47) && (s.typeParameters = this.flowParseTypeParameterDeclaration()), super.pushClassPrivateMethod(e, s, i, r);
    }
    parseClassSuper(e) {
      if (super.parseClassSuper(e), e.superClass && (this.match(47) || this.match(51)) && (e.superTypeParameters = this.flowParseTypeParameterInstantiationInExpression()), this.isContextual(113)) {
        this.next();
        const s = e.implements = [];
        do {
          const i = this.startNode();
          i.id = this.flowParseRestrictedIdentifier(!0), this.match(47) ? i.typeParameters = this.flowParseTypeParameterInstantiation() : i.typeParameters = null, s.push(this.finishNode(i, "ClassImplements"));
        } while (this.eat(12));
      }
    }
    checkGetterSetterParams(e) {
      super.checkGetterSetterParams(e);
      const s = this.getObjectOrClassMethodParams(e);
      if (s.length > 0) {
        const i = s[0];
        this.isThisParam(i) && e.kind === "get" ? this.raise(F.GetterMayNotHaveThisParam, i) : this.isThisParam(i) && this.raise(F.SetterMayNotHaveThisParam, i);
      }
    }
    parsePropertyNamePrefixOperator(e) {
      e.variance = this.flowParseVariance();
    }
    parseObjPropValue(e, s, i, r, n, c, p) {
      e.variance && this.unexpected(e.variance.loc.start), delete e.variance;
      let f;
      this.match(47) && !c && (f = this.flowParseTypeParameterDeclaration(), this.match(10) || this.unexpected());
      const y = super.parseObjPropValue(e, s, i, r, n, c, p);
      return f && ((y.value || y).typeParameters = f), y;
    }
    parseFunctionParamType(e) {
      return this.eat(17) && (e.type !== "Identifier" && this.raise(F.PatternIsOptional, e), this.isThisParam(e) && this.raise(F.ThisParamMayNotBeOptional, e), e.optional = !0), this.match(14) ? e.typeAnnotation = this.flowParseTypeAnnotation() : this.isThisParam(e) && this.raise(F.ThisParamAnnotationRequired, e), this.match(29) && this.isThisParam(e) && this.raise(F.ThisParamNoDefault, e), this.resetEndLocation(e), e;
    }
    parseMaybeDefault(e, s) {
      const i = super.parseMaybeDefault(e, s);
      return i.type === "AssignmentPattern" && i.typeAnnotation && i.right.start < i.typeAnnotation.start && this.raise(F.TypeBeforeInitializer, i.typeAnnotation), i;
    }
    checkImportReflection(e) {
      super.checkImportReflection(e), e.module && e.importKind !== "value" && this.raise(F.ImportReflectionHasImportType, e.specifiers[0].loc.start);
    }
    parseImportSpecifierLocal(e, s, i) {
      s.local = Re(e) ? this.flowParseRestrictedIdentifier(!0, !0) : this.parseIdentifier(), e.specifiers.push(this.finishImportSpecifier(s, i));
    }
    isPotentialImportPhase(e) {
      if (super.isPotentialImportPhase(e)) return !0;
      if (this.isContextual(130)) {
        if (!e) return !0;
        const s = this.lookaheadCharCode();
        return s === 123 || s === 42;
      }
      return !e && this.isContextual(87);
    }
    applyImportPhase(e, s, i, r) {
      if (super.applyImportPhase(e, s, i, r), s) {
        if (!i && this.match(65))
          return;
        e.exportKind = i === "type" ? i : "value";
      } else
        i === "type" && this.match(55) && this.unexpected(), e.importKind = i === "type" || i === "typeof" ? i : "value";
    }
    parseImportSpecifier(e, s, i, r, n) {
      const c = e.imported;
      let p = null;
      c.type === "Identifier" && (c.name === "type" ? p = "type" : c.name === "typeof" && (p = "typeof"));
      let f = !1;
      if (this.isContextual(93) && !this.isLookaheadContextual("as")) {
        const T = this.parseIdentifier(!0);
        p !== null && !G(this.state.type) ? (e.imported = T, e.importKind = p, e.local = this.cloneIdentifier(T)) : (e.imported = c, e.importKind = null, e.local = this.parseIdentifier());
      } else {
        if (p !== null && G(this.state.type))
          e.imported = this.parseIdentifier(!0), e.importKind = p;
        else {
          if (s)
            throw this.raise(m.ImportBindingIsString, e, {
              importName: c.value
            });
          e.imported = c, e.importKind = null;
        }
        this.eatContextual(93) ? e.local = this.parseIdentifier() : (f = !0, e.local = this.cloneIdentifier(e.imported));
      }
      const y = Re(e);
      return i && y && this.raise(F.ImportTypeShorthandOnlyInPureImport, e), (i || y) && this.checkReservedType(e.local.name, e.local.loc.start, !0), f && !i && !y && this.checkReservedWord(e.local.name, e.loc.start, !0, !0), this.finishImportSpecifier(e, "ImportSpecifier");
    }
    parseBindingAtom() {
      switch (this.state.type) {
        case 78:
          return this.parseIdentifier(!0);
        default:
          return super.parseBindingAtom();
      }
    }
    parseFunctionParams(e, s) {
      const i = e.kind;
      i !== "get" && i !== "set" && this.match(47) && (e.typeParameters = this.flowParseTypeParameterDeclaration()), super.parseFunctionParams(e, s);
    }
    parseVarId(e, s) {
      super.parseVarId(e, s), this.match(14) && (e.id.typeAnnotation = this.flowParseTypeAnnotation(), this.resetEndLocation(e.id));
    }
    parseAsyncArrowFromCallExpression(e, s) {
      if (this.match(14)) {
        const i = this.state.noAnonFunctionType;
        this.state.noAnonFunctionType = !0, e.returnType = this.flowParseTypeAnnotation(), this.state.noAnonFunctionType = i;
      }
      return super.parseAsyncArrowFromCallExpression(e, s);
    }
    shouldParseAsyncArrow() {
      return this.match(14) || super.shouldParseAsyncArrow();
    }
    parseMaybeAssign(e, s) {
      var i;
      let r = null, n;
      if (this.hasPlugin("jsx") && (this.match(143) || this.match(47))) {
        if (r = this.state.clone(), n = this.tryParse(() => super.parseMaybeAssign(e, s), r), !n.error) return n.node;
        const {
          context: f
        } = this.state, y = f[f.length - 1];
        (y === V.j_oTag || y === V.j_expr) && f.pop();
      }
      if ((i = n) != null && i.error || this.match(47)) {
        var c, p;
        r = r || this.state.clone();
        let f;
        const y = this.tryParse((I) => {
          var E;
          f = this.flowParseTypeParameterDeclaration();
          const M = this.forwardNoArrowParamsConversionAt(f, () => {
            const oe = super.parseMaybeAssign(e, s);
            return this.resetStartLocationFromNode(oe, f), oe;
          });
          (E = M.extra) != null && E.parenthesized && I();
          const X = this.maybeUnwrapTypeCastExpression(M);
          return X.type !== "ArrowFunctionExpression" && I(), X.typeParameters = f, this.resetStartLocationFromNode(X, f), M;
        }, r);
        let T = null;
        if (y.node && this.maybeUnwrapTypeCastExpression(y.node).type === "ArrowFunctionExpression") {
          if (!y.error && !y.aborted)
            return y.node.async && this.raise(F.UnexpectedTypeParameterBeforeAsyncArrowFunction, f), y.node;
          T = y.node;
        }
        if ((c = n) != null && c.node)
          return this.state = n.failState, n.node;
        if (T)
          return this.state = y.failState, T;
        throw (p = n) != null && p.thrown ? n.error : y.thrown ? y.error : this.raise(F.UnexpectedTokenAfterTypeParameter, f);
      }
      return super.parseMaybeAssign(e, s);
    }
    parseArrow(e) {
      if (this.match(14)) {
        const s = this.tryParse(() => {
          const i = this.state.noAnonFunctionType;
          this.state.noAnonFunctionType = !0;
          const r = this.startNode();
          return [r.typeAnnotation, e.predicate] = this.flowParseTypeAndPredicateInitialiser(), this.state.noAnonFunctionType = i, this.canInsertSemicolon() && this.unexpected(), this.match(19) || this.unexpected(), r;
        });
        if (s.thrown) return null;
        s.error && (this.state = s.failState), e.returnType = s.node.typeAnnotation ? this.finishNode(s.node, "TypeAnnotation") : null;
      }
      return super.parseArrow(e);
    }
    shouldParseArrow(e) {
      return this.match(14) || super.shouldParseArrow(e);
    }
    setArrowFunctionParameters(e, s) {
      this.state.noArrowParamsConversionAt.includes(this.offsetToSourcePos(e.start)) ? e.params = s : super.setArrowFunctionParameters(e, s);
    }
    checkParams(e, s, i, r = !0) {
      if (!(i && this.state.noArrowParamsConversionAt.includes(this.offsetToSourcePos(e.start)))) {
        for (let n = 0; n < e.params.length; n++)
          this.isThisParam(e.params[n]) && n > 0 && this.raise(F.ThisParamMustBeFirst, e.params[n]);
        super.checkParams(e, s, i, r);
      }
    }
    parseParenAndDistinguishExpression(e) {
      return super.parseParenAndDistinguishExpression(e && !this.state.noArrowAt.includes(this.sourceToOffsetPos(this.state.start)));
    }
    parseSubscripts(e, s, i) {
      if (e.type === "Identifier" && e.name === "async" && this.state.noArrowAt.includes(s.index)) {
        this.next();
        const r = this.startNodeAt(s);
        r.callee = e, r.arguments = super.parseCallExpressionArguments(), e = this.finishNode(r, "CallExpression");
      } else if (e.type === "Identifier" && e.name === "async" && this.match(47)) {
        const r = this.state.clone(), n = this.tryParse((p) => this.parseAsyncArrowWithTypeParameters(s) || p(), r);
        if (!n.error && !n.aborted) return n.node;
        const c = this.tryParse(() => super.parseSubscripts(e, s, i), r);
        if (c.node && !c.error) return c.node;
        if (n.node)
          return this.state = n.failState, n.node;
        if (c.node)
          return this.state = c.failState, c.node;
        throw n.error || c.error;
      }
      return super.parseSubscripts(e, s, i);
    }
    parseSubscript(e, s, i, r) {
      if (this.match(18) && this.isLookaheadToken_lt()) {
        if (r.optionalChainMember = !0, i)
          return r.stop = !0, e;
        this.next();
        const n = this.startNodeAt(s);
        return n.callee = e, n.typeArguments = this.flowParseTypeParameterInstantiationInExpression(), this.expect(10), n.arguments = this.parseCallExpressionArguments(), n.optional = !0, this.finishCallExpression(n, !0);
      } else if (!i && this.shouldParseTypes() && (this.match(47) || this.match(51))) {
        const n = this.startNodeAt(s);
        n.callee = e;
        const c = this.tryParse(() => (n.typeArguments = this.flowParseTypeParameterInstantiationCallOrNew(), this.expect(10), n.arguments = super.parseCallExpressionArguments(), r.optionalChainMember && (n.optional = !1), this.finishCallExpression(n, r.optionalChainMember)));
        if (c.node)
          return c.error && (this.state = c.failState), c.node;
      }
      return super.parseSubscript(e, s, i, r);
    }
    parseNewCallee(e) {
      super.parseNewCallee(e);
      let s = null;
      this.shouldParseTypes() && this.match(47) && (s = this.tryParse(() => this.flowParseTypeParameterInstantiationCallOrNew()).node), e.typeArguments = s;
    }
    parseAsyncArrowWithTypeParameters(e) {
      const s = this.startNodeAt(e);
      if (this.parseFunctionParams(s, !1), !!this.parseArrow(s))
        return super.parseArrowExpression(s, void 0, !0);
    }
    readToken_mult_modulo(e) {
      const s = this.input.charCodeAt(this.state.pos + 1);
      if (e === 42 && s === 47 && this.state.hasFlowComment) {
        this.state.hasFlowComment = !1, this.state.pos += 2, this.nextToken();
        return;
      }
      super.readToken_mult_modulo(e);
    }
    readToken_pipe_amp(e) {
      const s = this.input.charCodeAt(this.state.pos + 1);
      if (e === 124 && s === 125) {
        this.finishOp(9, 2);
        return;
      }
      super.readToken_pipe_amp(e);
    }
    parseTopLevel(e, s) {
      const i = super.parseTopLevel(e, s);
      return this.state.hasFlowComment && this.raise(F.UnterminatedFlowComment, this.state.curPosition()), i;
    }
    skipBlockComment() {
      if (this.hasPlugin("flowComments") && this.skipFlowComment()) {
        if (this.state.hasFlowComment)
          throw this.raise(F.NestedFlowComment, this.state.startLoc);
        this.hasFlowCommentCompletion();
        const e = this.skipFlowComment();
        e && (this.state.pos += e, this.state.hasFlowComment = !0);
        return;
      }
      return super.skipBlockComment(this.state.hasFlowComment ? "*-/" : "*/");
    }
    skipFlowComment() {
      const {
        pos: e
      } = this.state;
      let s = 2;
      for (; [32, 9].includes(this.input.charCodeAt(e + s)); )
        s++;
      const i = this.input.charCodeAt(s + e), r = this.input.charCodeAt(s + e + 1);
      return i === 58 && r === 58 ? s + 2 : this.input.slice(s + e, s + e + 12) === "flow-include" ? s + 12 : i === 58 && r !== 58 ? s : !1;
    }
    hasFlowCommentCompletion() {
      if (this.input.indexOf("*/", this.state.pos) === -1)
        throw this.raise(m.UnterminatedComment, this.state.curPosition());
    }
    flowEnumErrorBooleanMemberNotInitialized(e, {
      enumName: s,
      memberName: i
    }) {
      this.raise(F.EnumBooleanMemberNotInitialized, e, {
        memberName: i,
        enumName: s
      });
    }
    flowEnumErrorInvalidMemberInitializer(e, s) {
      return this.raise(s.explicitType ? s.explicitType === "symbol" ? F.EnumInvalidMemberInitializerSymbolType : F.EnumInvalidMemberInitializerPrimaryType : F.EnumInvalidMemberInitializerUnknownType, e, s);
    }
    flowEnumErrorNumberMemberNotInitialized(e, s) {
      this.raise(F.EnumNumberMemberNotInitialized, e, s);
    }
    flowEnumErrorStringMemberInconsistentlyInitialized(e, s) {
      this.raise(F.EnumStringMemberInconsistentlyInitialized, e, s);
    }
    flowEnumMemberInit() {
      const e = this.state.startLoc, s = () => this.match(12) || this.match(8);
      switch (this.state.type) {
        case 135: {
          const i = this.parseNumericLiteral(this.state.value);
          return s() ? {
            type: "number",
            loc: i.loc.start,
            value: i
          } : {
            type: "invalid",
            loc: e
          };
        }
        case 134: {
          const i = this.parseStringLiteral(this.state.value);
          return s() ? {
            type: "string",
            loc: i.loc.start,
            value: i
          } : {
            type: "invalid",
            loc: e
          };
        }
        case 85:
        case 86: {
          const i = this.parseBooleanLiteral(this.match(85));
          return s() ? {
            type: "boolean",
            loc: i.loc.start,
            value: i
          } : {
            type: "invalid",
            loc: e
          };
        }
        default:
          return {
            type: "invalid",
            loc: e
          };
      }
    }
    flowEnumMemberRaw() {
      const e = this.state.startLoc, s = this.parseIdentifier(!0), i = this.eat(29) ? this.flowEnumMemberInit() : {
        type: "none",
        loc: e
      };
      return {
        id: s,
        init: i
      };
    }
    flowEnumCheckExplicitTypeMismatch(e, s, i) {
      const {
        explicitType: r
      } = s;
      r !== null && r !== i && this.flowEnumErrorInvalidMemberInitializer(e, s);
    }
    flowEnumMembers({
      enumName: e,
      explicitType: s
    }) {
      const i = /* @__PURE__ */ new Set(), r = {
        booleanMembers: [],
        numberMembers: [],
        stringMembers: [],
        defaultedMembers: []
      };
      let n = !1;
      for (; !this.match(8); ) {
        if (this.eat(21)) {
          n = !0;
          break;
        }
        const c = this.startNode(), {
          id: p,
          init: f
        } = this.flowEnumMemberRaw(), y = p.name;
        if (y === "")
          continue;
        /^[a-z]/.test(y) && this.raise(F.EnumInvalidMemberName, p, {
          memberName: y,
          suggestion: y[0].toUpperCase() + y.slice(1),
          enumName: e
        }), i.has(y) && this.raise(F.EnumDuplicateMemberName, p, {
          memberName: y,
          enumName: e
        }), i.add(y);
        const T = {
          enumName: e,
          explicitType: s,
          memberName: y
        };
        switch (c.id = p, f.type) {
          case "boolean": {
            this.flowEnumCheckExplicitTypeMismatch(f.loc, T, "boolean"), c.init = f.value, r.booleanMembers.push(this.finishNode(c, "EnumBooleanMember"));
            break;
          }
          case "number": {
            this.flowEnumCheckExplicitTypeMismatch(f.loc, T, "number"), c.init = f.value, r.numberMembers.push(this.finishNode(c, "EnumNumberMember"));
            break;
          }
          case "string": {
            this.flowEnumCheckExplicitTypeMismatch(f.loc, T, "string"), c.init = f.value, r.stringMembers.push(this.finishNode(c, "EnumStringMember"));
            break;
          }
          case "invalid":
            throw this.flowEnumErrorInvalidMemberInitializer(f.loc, T);
          case "none":
            switch (s) {
              case "boolean":
                this.flowEnumErrorBooleanMemberNotInitialized(f.loc, T);
                break;
              case "number":
                this.flowEnumErrorNumberMemberNotInitialized(f.loc, T);
                break;
              default:
                r.defaultedMembers.push(this.finishNode(c, "EnumDefaultedMember"));
            }
        }
        this.match(8) || this.expect(12);
      }
      return {
        members: r,
        hasUnknownMembers: n
      };
    }
    flowEnumStringMembers(e, s, {
      enumName: i
    }) {
      if (e.length === 0)
        return s;
      if (s.length === 0)
        return e;
      if (s.length > e.length) {
        for (const r of e)
          this.flowEnumErrorStringMemberInconsistentlyInitialized(r, {
            enumName: i
          });
        return s;
      } else {
        for (const r of s)
          this.flowEnumErrorStringMemberInconsistentlyInitialized(r, {
            enumName: i
          });
        return e;
      }
    }
    flowEnumParseExplicitType({
      enumName: e
    }) {
      if (!this.eatContextual(102)) return null;
      if (!K(this.state.type))
        throw this.raise(F.EnumInvalidExplicitTypeUnknownSupplied, this.state.startLoc, {
          enumName: e
        });
      const {
        value: s
      } = this.state;
      return this.next(), s !== "boolean" && s !== "number" && s !== "string" && s !== "symbol" && this.raise(F.EnumInvalidExplicitType, this.state.startLoc, {
        enumName: e,
        invalidEnumType: s
      }), s;
    }
    flowEnumBody(e, s) {
      const i = s.name, r = s.loc.start, n = this.flowEnumParseExplicitType({
        enumName: i
      });
      this.expect(5);
      const {
        members: c,
        hasUnknownMembers: p
      } = this.flowEnumMembers({
        enumName: i,
        explicitType: n
      });
      switch (e.hasUnknownMembers = p, n) {
        case "boolean":
          return e.explicitType = !0, e.members = c.booleanMembers, this.expect(8), this.finishNode(e, "EnumBooleanBody");
        case "number":
          return e.explicitType = !0, e.members = c.numberMembers, this.expect(8), this.finishNode(e, "EnumNumberBody");
        case "string":
          return e.explicitType = !0, e.members = this.flowEnumStringMembers(c.stringMembers, c.defaultedMembers, {
            enumName: i
          }), this.expect(8), this.finishNode(e, "EnumStringBody");
        case "symbol":
          return e.members = c.defaultedMembers, this.expect(8), this.finishNode(e, "EnumSymbolBody");
        default: {
          const f = () => (e.members = [], this.expect(8), this.finishNode(e, "EnumStringBody"));
          e.explicitType = !1;
          const y = c.booleanMembers.length, T = c.numberMembers.length, I = c.stringMembers.length, E = c.defaultedMembers.length;
          if (!y && !T && !I && !E)
            return f();
          if (!y && !T)
            return e.members = this.flowEnumStringMembers(c.stringMembers, c.defaultedMembers, {
              enumName: i
            }), this.expect(8), this.finishNode(e, "EnumStringBody");
          if (!T && !I && y >= E) {
            for (const M of c.defaultedMembers)
              this.flowEnumErrorBooleanMemberNotInitialized(M.loc.start, {
                enumName: i,
                memberName: M.id.name
              });
            return e.members = c.booleanMembers, this.expect(8), this.finishNode(e, "EnumBooleanBody");
          } else if (!y && !I && T >= E) {
            for (const M of c.defaultedMembers)
              this.flowEnumErrorNumberMemberNotInitialized(M.loc.start, {
                enumName: i,
                memberName: M.id.name
              });
            return e.members = c.numberMembers, this.expect(8), this.finishNode(e, "EnumNumberBody");
          } else
            return this.raise(F.EnumInconsistentMemberValues, r, {
              enumName: i
            }), f();
        }
      }
    }
    flowParseEnumDeclaration(e) {
      const s = this.parseIdentifier();
      return e.id = s, e.body = this.flowEnumBody(this.startNode(), s), this.finishNode(e, "EnumDeclaration");
    }
    jsxParseOpeningElementAfterName(e) {
      return this.shouldParseTypes() && (this.match(47) || this.match(51)) && (e.typeArguments = this.flowParseTypeParameterInstantiationInExpression()), super.jsxParseOpeningElementAfterName(e);
    }
    isLookaheadToken_lt() {
      const e = this.nextTokenStart();
      if (this.input.charCodeAt(e) === 60) {
        const s = this.input.charCodeAt(e + 1);
        return s !== 60 && s !== 61;
      }
      return !1;
    }
    reScan_lt_gt() {
      const {
        type: e
      } = this.state;
      e === 47 ? (this.state.pos -= 1, this.readToken_lt()) : e === 48 && (this.state.pos -= 1, this.readToken_gt());
    }
    reScan_lt() {
      const {
        type: e
      } = this.state;
      return e === 51 ? (this.state.pos -= 2, this.finishOp(47, 1), 47) : e;
    }
    maybeUnwrapTypeCastExpression(e) {
      return e.type === "TypeCastExpression" ? e.expression : e;
    }
  };
  const xs = {
    __proto__: null,
    quot: '"',
    amp: "&",
    apos: "'",
    lt: "<",
    gt: ">",
    nbsp: " ",
    iexcl: "¡",
    cent: "¢",
    pound: "£",
    curren: "¤",
    yen: "¥",
    brvbar: "¦",
    sect: "§",
    uml: "¨",
    copy: "©",
    ordf: "ª",
    laquo: "«",
    not: "¬",
    shy: "­",
    reg: "®",
    macr: "¯",
    deg: "°",
    plusmn: "±",
    sup2: "²",
    sup3: "³",
    acute: "´",
    micro: "µ",
    para: "¶",
    middot: "·",
    cedil: "¸",
    sup1: "¹",
    ordm: "º",
    raquo: "»",
    frac14: "¼",
    frac12: "½",
    frac34: "¾",
    iquest: "¿",
    Agrave: "À",
    Aacute: "Á",
    Acirc: "Â",
    Atilde: "Ã",
    Auml: "Ä",
    Aring: "Å",
    AElig: "Æ",
    Ccedil: "Ç",
    Egrave: "È",
    Eacute: "É",
    Ecirc: "Ê",
    Euml: "Ë",
    Igrave: "Ì",
    Iacute: "Í",
    Icirc: "Î",
    Iuml: "Ï",
    ETH: "Ð",
    Ntilde: "Ñ",
    Ograve: "Ò",
    Oacute: "Ó",
    Ocirc: "Ô",
    Otilde: "Õ",
    Ouml: "Ö",
    times: "×",
    Oslash: "Ø",
    Ugrave: "Ù",
    Uacute: "Ú",
    Ucirc: "Û",
    Uuml: "Ü",
    Yacute: "Ý",
    THORN: "Þ",
    szlig: "ß",
    agrave: "à",
    aacute: "á",
    acirc: "â",
    atilde: "ã",
    auml: "ä",
    aring: "å",
    aelig: "æ",
    ccedil: "ç",
    egrave: "è",
    eacute: "é",
    ecirc: "ê",
    euml: "ë",
    igrave: "ì",
    iacute: "í",
    icirc: "î",
    iuml: "ï",
    eth: "ð",
    ntilde: "ñ",
    ograve: "ò",
    oacute: "ó",
    ocirc: "ô",
    otilde: "õ",
    ouml: "ö",
    divide: "÷",
    oslash: "ø",
    ugrave: "ù",
    uacute: "ú",
    ucirc: "û",
    uuml: "ü",
    yacute: "ý",
    thorn: "þ",
    yuml: "ÿ",
    OElig: "Œ",
    oelig: "œ",
    Scaron: "Š",
    scaron: "š",
    Yuml: "Ÿ",
    fnof: "ƒ",
    circ: "ˆ",
    tilde: "˜",
    Alpha: "Α",
    Beta: "Β",
    Gamma: "Γ",
    Delta: "Δ",
    Epsilon: "Ε",
    Zeta: "Ζ",
    Eta: "Η",
    Theta: "Θ",
    Iota: "Ι",
    Kappa: "Κ",
    Lambda: "Λ",
    Mu: "Μ",
    Nu: "Ν",
    Xi: "Ξ",
    Omicron: "Ο",
    Pi: "Π",
    Rho: "Ρ",
    Sigma: "Σ",
    Tau: "Τ",
    Upsilon: "Υ",
    Phi: "Φ",
    Chi: "Χ",
    Psi: "Ψ",
    Omega: "Ω",
    alpha: "α",
    beta: "β",
    gamma: "γ",
    delta: "δ",
    epsilon: "ε",
    zeta: "ζ",
    eta: "η",
    theta: "θ",
    iota: "ι",
    kappa: "κ",
    lambda: "λ",
    mu: "μ",
    nu: "ν",
    xi: "ξ",
    omicron: "ο",
    pi: "π",
    rho: "ρ",
    sigmaf: "ς",
    sigma: "σ",
    tau: "τ",
    upsilon: "υ",
    phi: "φ",
    chi: "χ",
    psi: "ψ",
    omega: "ω",
    thetasym: "ϑ",
    upsih: "ϒ",
    piv: "ϖ",
    ensp: " ",
    emsp: " ",
    thinsp: " ",
    zwnj: "‌",
    zwj: "‍",
    lrm: "‎",
    rlm: "‏",
    ndash: "–",
    mdash: "—",
    lsquo: "‘",
    rsquo: "’",
    sbquo: "‚",
    ldquo: "“",
    rdquo: "”",
    bdquo: "„",
    dagger: "†",
    Dagger: "‡",
    bull: "•",
    hellip: "…",
    permil: "‰",
    prime: "′",
    Prime: "″",
    lsaquo: "‹",
    rsaquo: "›",
    oline: "‾",
    frasl: "⁄",
    euro: "€",
    image: "ℑ",
    weierp: "℘",
    real: "ℜ",
    trade: "™",
    alefsym: "ℵ",
    larr: "←",
    uarr: "↑",
    rarr: "→",
    darr: "↓",
    harr: "↔",
    crarr: "↵",
    lArr: "⇐",
    uArr: "⇑",
    rArr: "⇒",
    dArr: "⇓",
    hArr: "⇔",
    forall: "∀",
    part: "∂",
    exist: "∃",
    empty: "∅",
    nabla: "∇",
    isin: "∈",
    notin: "∉",
    ni: "∋",
    prod: "∏",
    sum: "∑",
    minus: "−",
    lowast: "∗",
    radic: "√",
    prop: "∝",
    infin: "∞",
    ang: "∠",
    and: "∧",
    or: "∨",
    cap: "∩",
    cup: "∪",
    int: "∫",
    there4: "∴",
    sim: "∼",
    cong: "≅",
    asymp: "≈",
    ne: "≠",
    equiv: "≡",
    le: "≤",
    ge: "≥",
    sub: "⊂",
    sup: "⊃",
    nsub: "⊄",
    sube: "⊆",
    supe: "⊇",
    oplus: "⊕",
    otimes: "⊗",
    perp: "⊥",
    sdot: "⋅",
    lceil: "⌈",
    rceil: "⌉",
    lfloor: "⌊",
    rfloor: "⌋",
    lang: "〈",
    rang: "〉",
    loz: "◊",
    spades: "♠",
    clubs: "♣",
    hearts: "♥",
    diams: "♦"
  }, R = /\r\n|[\r\n\u2028\u2029]/, g = new RegExp(R.source, "g");
  function C(a) {
    switch (a) {
      case 10:
      case 13:
      case 8232:
      case 8233:
        return !0;
      default:
        return !1;
    }
  }
  function _(a, t, e) {
    for (let s = t; s < e; s++)
      if (C(a.charCodeAt(s)))
        return !0;
    return !1;
  }
  const te = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g, Te = /(?:[^\S\n\r\u2028\u2029]|\/\/.*|\/\*.*?\*\/)*/g;
  function xe(a) {
    switch (a) {
      case 9:
      case 11:
      case 12:
      case 32:
      case 160:
      case 5760:
      case 8192:
      case 8193:
      case 8194:
      case 8195:
      case 8196:
      case 8197:
      case 8198:
      case 8199:
      case 8200:
      case 8201:
      case 8202:
      case 8239:
      case 8287:
      case 12288:
      case 65279:
        return !0;
      default:
        return !1;
    }
  }
  const me = U`jsx`({
    AttributeIsEmpty: "JSX attributes must only be assigned a non-empty expression.",
    MissingClosingTagElement: ({
      openingTagName: a
    }) => `Expected corresponding JSX closing tag for <${a}>.`,
    MissingClosingTagFragment: "Expected corresponding JSX closing tag for <>.",
    UnexpectedSequenceExpression: "Sequence expressions cannot be directly nested inside JSX. Did you mean to wrap it in parentheses (...)?",
    UnexpectedToken: ({
      unexpected: a,
      HTMLEntity: t
    }) => `Unexpected token \`${a}\`. Did you mean \`${t}\` or \`{'${a}'}\`?`,
    UnsupportedJsxValue: "JSX value should be either an expression or a quoted JSX text.",
    UnterminatedJsxContent: "Unterminated JSX contents.",
    UnwrappedAdjacentJSXElements: "Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?"
  });
  function Se(a) {
    return a ? a.type === "JSXOpeningFragment" || a.type === "JSXClosingFragment" : !1;
  }
  function Ue(a) {
    if (a.type === "JSXIdentifier")
      return a.name;
    if (a.type === "JSXNamespacedName")
      return a.namespace.name + ":" + a.name.name;
    if (a.type === "JSXMemberExpression")
      return Ue(a.object) + "." + Ue(a.property);
    throw new Error("Node had unexpected type: " + a.type);
  }
  var kt = (a) => class extends a {
    jsxReadToken() {
      let e = "", s = this.state.pos;
      for (; ; ) {
        if (this.state.pos >= this.length)
          throw this.raise(me.UnterminatedJsxContent, this.state.startLoc);
        const i = this.input.charCodeAt(this.state.pos);
        switch (i) {
          case 60:
          case 123:
            if (this.state.pos === this.state.start) {
              i === 60 && this.state.canStartJSXElement ? (++this.state.pos, this.finishToken(143)) : super.getTokenFromCode(i);
              return;
            }
            e += this.input.slice(s, this.state.pos), this.finishToken(142, e);
            return;
          case 38:
            e += this.input.slice(s, this.state.pos), e += this.jsxReadEntity(), s = this.state.pos;
            break;
          case 62:
          case 125:
          default:
            C(i) ? (e += this.input.slice(s, this.state.pos), e += this.jsxReadNewLine(!0), s = this.state.pos) : ++this.state.pos;
        }
      }
    }
    jsxReadNewLine(e) {
      const s = this.input.charCodeAt(this.state.pos);
      let i;
      return ++this.state.pos, s === 13 && this.input.charCodeAt(this.state.pos) === 10 ? (++this.state.pos, i = e ? `
` : `\r
`) : i = String.fromCharCode(s), ++this.state.curLine, this.state.lineStart = this.state.pos, i;
    }
    jsxReadString(e) {
      let s = "", i = ++this.state.pos;
      for (; ; ) {
        if (this.state.pos >= this.length)
          throw this.raise(m.UnterminatedString, this.state.startLoc);
        const r = this.input.charCodeAt(this.state.pos);
        if (r === e) break;
        r === 38 ? (s += this.input.slice(i, this.state.pos), s += this.jsxReadEntity(), i = this.state.pos) : C(r) ? (s += this.input.slice(i, this.state.pos), s += this.jsxReadNewLine(!1), i = this.state.pos) : ++this.state.pos;
      }
      s += this.input.slice(i, this.state.pos++), this.finishToken(134, s);
    }
    jsxReadEntity() {
      const e = ++this.state.pos;
      if (this.codePointAtPos(this.state.pos) === 35) {
        ++this.state.pos;
        let s = 10;
        this.codePointAtPos(this.state.pos) === 120 && (s = 16, ++this.state.pos);
        const i = this.readInt(s, void 0, !1, "bail");
        if (i !== null && this.codePointAtPos(this.state.pos) === 59)
          return ++this.state.pos, String.fromCodePoint(i);
      } else {
        let s = 0, i = !1;
        for (; s++ < 10 && this.state.pos < this.length && !(i = this.codePointAtPos(this.state.pos) === 59); )
          ++this.state.pos;
        if (i) {
          const r = this.input.slice(e, this.state.pos), n = xs[r];
          if (++this.state.pos, n)
            return n;
        }
      }
      return this.state.pos = e, "&";
    }
    jsxReadWord() {
      let e;
      const s = this.state.pos;
      do
        e = this.input.charCodeAt(++this.state.pos);
      while (Be(e) || e === 45);
      this.finishToken(141, this.input.slice(s, this.state.pos));
    }
    jsxParseIdentifier() {
      const e = this.startNode();
      return this.match(141) ? e.name = this.state.value : bt(this.state.type) ? e.name = Ie(this.state.type) : this.unexpected(), this.next(), this.finishNode(e, "JSXIdentifier");
    }
    jsxParseNamespacedName() {
      const e = this.state.startLoc, s = this.jsxParseIdentifier();
      if (!this.eat(14)) return s;
      const i = this.startNodeAt(e);
      return i.namespace = s, i.name = this.jsxParseIdentifier(), this.finishNode(i, "JSXNamespacedName");
    }
    jsxParseElementName() {
      const e = this.state.startLoc;
      let s = this.jsxParseNamespacedName();
      if (s.type === "JSXNamespacedName")
        return s;
      for (; this.eat(16); ) {
        const i = this.startNodeAt(e);
        i.object = s, i.property = this.jsxParseIdentifier(), s = this.finishNode(i, "JSXMemberExpression");
      }
      return s;
    }
    jsxParseAttributeValue() {
      let e;
      switch (this.state.type) {
        case 5:
          return e = this.startNode(), this.setContext(V.brace), this.next(), e = this.jsxParseExpressionContainer(e, V.j_oTag), e.expression.type === "JSXEmptyExpression" && this.raise(me.AttributeIsEmpty, e), e;
        case 143:
        case 134:
          return this.parseExprAtom();
        default:
          throw this.raise(me.UnsupportedJsxValue, this.state.startLoc);
      }
    }
    jsxParseEmptyExpression() {
      const e = this.startNodeAt(this.state.lastTokEndLoc);
      return this.finishNodeAt(e, "JSXEmptyExpression", this.state.startLoc);
    }
    jsxParseSpreadChild(e) {
      return this.next(), e.expression = this.parseExpression(), this.setContext(V.j_expr), this.state.canStartJSXElement = !0, this.expect(8), this.finishNode(e, "JSXSpreadChild");
    }
    jsxParseExpressionContainer(e, s) {
      if (this.match(8))
        e.expression = this.jsxParseEmptyExpression();
      else {
        const i = this.parseExpression();
        e.expression = i;
      }
      return this.setContext(s), this.state.canStartJSXElement = !0, this.expect(8), this.finishNode(e, "JSXExpressionContainer");
    }
    jsxParseAttribute() {
      const e = this.startNode();
      return this.match(5) ? (this.setContext(V.brace), this.next(), this.expect(21), e.argument = this.parseMaybeAssignAllowIn(), this.setContext(V.j_oTag), this.state.canStartJSXElement = !0, this.expect(8), this.finishNode(e, "JSXSpreadAttribute")) : (e.name = this.jsxParseNamespacedName(), e.value = this.eat(29) ? this.jsxParseAttributeValue() : null, this.finishNode(e, "JSXAttribute"));
    }
    jsxParseOpeningElementAt(e) {
      const s = this.startNodeAt(e);
      return this.eat(144) ? this.finishNode(s, "JSXOpeningFragment") : (s.name = this.jsxParseElementName(), this.jsxParseOpeningElementAfterName(s));
    }
    jsxParseOpeningElementAfterName(e) {
      const s = [];
      for (; !this.match(56) && !this.match(144); )
        s.push(this.jsxParseAttribute());
      return e.attributes = s, e.selfClosing = this.eat(56), this.expect(144), this.finishNode(e, "JSXOpeningElement");
    }
    jsxParseClosingElementAt(e) {
      const s = this.startNodeAt(e);
      return this.eat(144) ? this.finishNode(s, "JSXClosingFragment") : (s.name = this.jsxParseElementName(), this.expect(144), this.finishNode(s, "JSXClosingElement"));
    }
    jsxParseElementAt(e) {
      const s = this.startNodeAt(e), i = [], r = this.jsxParseOpeningElementAt(e);
      let n = null;
      if (!r.selfClosing) {
        e: for (; ; )
          switch (this.state.type) {
            case 143:
              if (e = this.state.startLoc, this.next(), this.eat(56)) {
                n = this.jsxParseClosingElementAt(e);
                break e;
              }
              i.push(this.jsxParseElementAt(e));
              break;
            case 142:
              i.push(this.parseLiteral(this.state.value, "JSXText"));
              break;
            case 5: {
              const c = this.startNode();
              this.setContext(V.brace), this.next(), this.match(21) ? i.push(this.jsxParseSpreadChild(c)) : i.push(this.jsxParseExpressionContainer(c, V.j_expr));
              break;
            }
            default:
              this.unexpected();
          }
        Se(r) && !Se(n) && n !== null ? this.raise(me.MissingClosingTagFragment, n) : !Se(r) && Se(n) ? this.raise(me.MissingClosingTagElement, n, {
          openingTagName: Ue(r.name)
        }) : !Se(r) && !Se(n) && Ue(n.name) !== Ue(r.name) && this.raise(me.MissingClosingTagElement, n, {
          openingTagName: Ue(r.name)
        });
      }
      if (Se(r) ? (s.openingFragment = r, s.closingFragment = n) : (s.openingElement = r, s.closingElement = n), s.children = i, this.match(47))
        throw this.raise(me.UnwrappedAdjacentJSXElements, this.state.startLoc);
      return Se(r) ? this.finishNode(s, "JSXFragment") : this.finishNode(s, "JSXElement");
    }
    jsxParseElement() {
      const e = this.state.startLoc;
      return this.next(), this.jsxParseElementAt(e);
    }
    setContext(e) {
      const {
        context: s
      } = this.state;
      s[s.length - 1] = e;
    }
    parseExprAtom(e) {
      return this.match(143) ? this.jsxParseElement() : this.match(47) && this.input.charCodeAt(this.state.pos) !== 33 ? (this.replaceToken(143), this.jsxParseElement()) : super.parseExprAtom(e);
    }
    skipSpace() {
      this.curContext().preserveSpace || super.skipSpace();
    }
    getTokenFromCode(e) {
      const s = this.curContext();
      if (s === V.j_expr) {
        this.jsxReadToken();
        return;
      }
      if (s === V.j_oTag || s === V.j_cTag) {
        if (Fe(e)) {
          this.jsxReadWord();
          return;
        }
        if (e === 62) {
          ++this.state.pos, this.finishToken(144);
          return;
        }
        if ((e === 34 || e === 39) && s === V.j_oTag) {
          this.jsxReadString(e);
          return;
        }
      }
      if (e === 60 && this.state.canStartJSXElement && this.input.charCodeAt(this.state.pos + 1) !== 33) {
        ++this.state.pos, this.finishToken(143);
        return;
      }
      super.getTokenFromCode(e);
    }
    updateContext(e) {
      const {
        context: s,
        type: i
      } = this.state;
      if (i === 56 && e === 143)
        s.splice(-2, 2, V.j_cTag), this.state.canStartJSXElement = !1;
      else if (i === 143)
        s.push(V.j_oTag);
      else if (i === 144) {
        const r = s[s.length - 1];
        r === V.j_oTag && e === 56 || r === V.j_cTag ? (s.pop(), this.state.canStartJSXElement = s[s.length - 1] === V.j_expr) : (this.setContext(V.j_expr), this.state.canStartJSXElement = !0);
      } else
        this.state.canStartJSXElement = De(i);
    }
  };
  class ve extends It {
    constructor(...t) {
      super(...t), this.tsNames = /* @__PURE__ */ new Map();
    }
  }
  class Qt extends Oe {
    constructor(...t) {
      super(...t), this.importsStack = [];
    }
    createScope(t) {
      return this.importsStack.push(/* @__PURE__ */ new Set()), new ve(t);
    }
    enter(t) {
      t === 1024 && this.importsStack.push(/* @__PURE__ */ new Set()), super.enter(t);
    }
    exit() {
      const t = super.exit();
      return t === 1024 && this.importsStack.pop(), t;
    }
    hasImport(t, e) {
      const s = this.importsStack.length;
      if (this.importsStack[s - 1].has(t))
        return !0;
      if (!e && s > 1) {
        for (let i = 0; i < s - 1; i++)
          if (this.importsStack[i].has(t)) return !0;
      }
      return !1;
    }
    declareName(t, e, s) {
      if (e & 4096) {
        this.hasImport(t, !0) && this.parser.raise(m.VarRedeclaration, s, {
          identifierName: t
        }), this.importsStack[this.importsStack.length - 1].add(t);
        return;
      }
      const i = this.currentScope();
      let r = i.tsNames.get(t) || 0;
      if (e & 1024) {
        this.maybeExportDefined(i, t), i.tsNames.set(t, r | 16);
        return;
      }
      super.declareName(t, e, s), e & 2 && (e & 1 || (this.checkRedeclarationInScope(i, t, e, s), this.maybeExportDefined(i, t)), r = r | 1), e & 256 && (r = r | 2), e & 512 && (r = r | 4), e & 128 && (r = r | 8), r && i.tsNames.set(t, r);
    }
    isRedeclaredInScope(t, e, s) {
      const i = t.tsNames.get(e);
      if ((i & 2) > 0) {
        if (s & 256) {
          const r = !!(s & 512), n = (i & 4) > 0;
          return r !== n;
        }
        return !0;
      }
      return s & 128 && (i & 8) > 0 ? t.names.get(e) & 2 ? !!(s & 1) : !1 : s & 2 && (i & 1) > 0 ? !0 : super.isRedeclaredInScope(t, e, s);
    }
    checkLocalExport(t) {
      const {
        name: e
      } = t;
      if (this.hasImport(e)) return;
      const s = this.scopeStack.length;
      for (let i = s - 1; i >= 0; i--) {
        const n = this.scopeStack[i].tsNames.get(e);
        if ((n & 1) > 0 || (n & 16) > 0)
          return;
      }
      super.checkLocalExport(t);
    }
  }
  class es {
    constructor() {
      this.stacks = [];
    }
    enter(t) {
      this.stacks.push(t);
    }
    exit() {
      this.stacks.pop();
    }
    currentFlags() {
      return this.stacks[this.stacks.length - 1];
    }
    get hasAwait() {
      return (this.currentFlags() & 2) > 0;
    }
    get hasYield() {
      return (this.currentFlags() & 1) > 0;
    }
    get hasReturn() {
      return (this.currentFlags() & 4) > 0;
    }
    get hasIn() {
      return (this.currentFlags() & 8) > 0;
    }
  }
  function ts(a, t) {
    return (a ? 2 : 0) | (t ? 1 : 0);
  }
  class mr {
    constructor() {
      this.sawUnambiguousESM = !1, this.ambiguousScriptDifferentAst = !1;
    }
    sourceToOffsetPos(t) {
      return t + this.startIndex;
    }
    offsetToSourcePos(t) {
      return t - this.startIndex;
    }
    hasPlugin(t) {
      if (typeof t == "string")
        return this.plugins.has(t);
      {
        const [e, s] = t;
        if (!this.hasPlugin(e))
          return !1;
        const i = this.plugins.get(e);
        for (const r of Object.keys(s))
          if ((i == null ? void 0 : i[r]) !== s[r])
            return !1;
        return !0;
      }
    }
    getPluginOption(t, e) {
      var s;
      return (s = this.plugins.get(t)) == null ? void 0 : s[e];
    }
  }
  function zs(a, t) {
    a.trailingComments === void 0 ? a.trailingComments = t : a.trailingComments.unshift(...t);
  }
  function yr(a, t) {
    a.leadingComments === void 0 ? a.leadingComments = t : a.leadingComments.unshift(...t);
  }
  function Et(a, t) {
    a.innerComments === void 0 ? a.innerComments = t : a.innerComments.unshift(...t);
  }
  function qe(a, t, e) {
    let s = null, i = t.length;
    for (; s === null && i > 0; )
      s = t[--i];
    s === null || s.start > e.start ? Et(a, e.comments) : zs(s, e.comments);
  }
  class xr extends mr {
    addComment(t) {
      this.filename && (t.loc.filename = this.filename);
      const {
        commentsLen: e
      } = this.state;
      this.comments.length !== e && (this.comments.length = e), this.comments.push(t), this.state.commentsLen++;
    }
    processComment(t) {
      const {
        commentStack: e
      } = this.state, s = e.length;
      if (s === 0) return;
      let i = s - 1;
      const r = e[i];
      r.start === t.end && (r.leadingNode = t, i--);
      const {
        start: n
      } = t;
      for (; i >= 0; i--) {
        const c = e[i], p = c.end;
        if (p > n)
          c.containingNode = t, this.finalizeComment(c), e.splice(i, 1);
        else {
          p === n && (c.trailingNode = t);
          break;
        }
      }
    }
    finalizeComment(t) {
      var e;
      const {
        comments: s
      } = t;
      if (t.leadingNode !== null || t.trailingNode !== null)
        t.leadingNode !== null && zs(t.leadingNode, s), t.trailingNode !== null && yr(t.trailingNode, s);
      else {
        const i = t.containingNode, r = t.start;
        if (this.input.charCodeAt(this.offsetToSourcePos(r) - 1) === 44)
          switch (i.type) {
            case "ObjectExpression":
            case "ObjectPattern":
              qe(i, i.properties, t);
              break;
            case "CallExpression":
            case "NewExpression":
            case "OptionalCallExpression":
              qe(i, i.arguments, t);
              break;
            case "ImportExpression":
              qe(i, [i.source, (e = i.options) != null ? e : null], t);
              break;
            case "FunctionDeclaration":
            case "FunctionExpression":
            case "ArrowFunctionExpression":
            case "ObjectMethod":
            case "ClassMethod":
            case "ClassPrivateMethod":
            case "TSTypeParameterDeclaration":
              qe(i, i.params, t);
              break;
            case "ArrayExpression":
            case "ArrayPattern":
              qe(i, i.elements, t);
              break;
            case "ExportNamedDeclaration":
            case "ImportDeclaration":
              qe(i, i.specifiers, t);
              break;
            case "TSEnumDeclaration":
              qe(i, i.members, t);
              break;
            case "TSEnumBody":
              qe(i, i.members, t);
              break;
            case "TSInterfaceBody":
              qe(i, i.body, t);
              break;
            default: {
              if (i.type === "RecordExpression") {
                qe(i, i.properties, t);
                break;
              }
              if (i.type === "TupleExpression") {
                qe(i, i.elements, t);
                break;
              }
              Et(i, s);
            }
          }
        else
          Et(i, s);
      }
    }
    finalizeRemainingComments() {
      const {
        commentStack: t
      } = this.state;
      for (let e = t.length - 1; e >= 0; e--)
        this.finalizeComment(t[e]);
      this.state.commentStack = [];
    }
    resetPreviousNodeTrailingComments(t) {
      const {
        commentStack: e
      } = this.state, {
        length: s
      } = e;
      if (s === 0) return;
      const i = e[s - 1];
      i.leadingNode === t && (i.leadingNode = null);
    }
    takeSurroundingComments(t, e, s) {
      const {
        commentStack: i
      } = this.state, r = i.length;
      if (r === 0) return;
      let n = r - 1;
      for (; n >= 0; n--) {
        const c = i[n], p = c.end;
        if (c.start === s)
          c.leadingNode = t;
        else if (p === e)
          c.trailingNode = t;
        else if (p < e)
          break;
      }
    }
  }
  class gs {
    constructor() {
      this.flags = 1024, this.startIndex = void 0, this.curLine = void 0, this.lineStart = void 0, this.startLoc = void 0, this.endLoc = void 0, this.errors = [], this.potentialArrowAt = -1, this.noArrowAt = [], this.noArrowParamsConversionAt = [], this.topicContext = {
        maxNumOfResolvableTopics: 0,
        maxTopicIndex: null
      }, this.labels = [], this.commentsLen = 0, this.commentStack = [], this.pos = 0, this.type = 140, this.value = null, this.start = 0, this.end = 0, this.lastTokEndLoc = null, this.lastTokStartLoc = null, this.context = [V.brace], this.firstInvalidTemplateEscapePos = null, this.strictErrors = /* @__PURE__ */ new Map(), this.tokensLength = 0;
    }
    get strict() {
      return (this.flags & 1) > 0;
    }
    set strict(t) {
      t ? this.flags |= 1 : this.flags &= -2;
    }
    init({
      strictMode: t,
      sourceType: e,
      startIndex: s,
      startLine: i,
      startColumn: r
    }) {
      this.strict = t === !1 ? !1 : t === !0 ? !0 : e === "module", this.startIndex = s, this.curLine = i, this.lineStart = -r, this.startLoc = this.endLoc = new h(i, r, s);
    }
    get maybeInArrowParameters() {
      return (this.flags & 2) > 0;
    }
    set maybeInArrowParameters(t) {
      t ? this.flags |= 2 : this.flags &= -3;
    }
    get inType() {
      return (this.flags & 4) > 0;
    }
    set inType(t) {
      t ? this.flags |= 4 : this.flags &= -5;
    }
    get noAnonFunctionType() {
      return (this.flags & 8) > 0;
    }
    set noAnonFunctionType(t) {
      t ? this.flags |= 8 : this.flags &= -9;
    }
    get hasFlowComment() {
      return (this.flags & 16) > 0;
    }
    set hasFlowComment(t) {
      t ? this.flags |= 16 : this.flags &= -17;
    }
    get isAmbientContext() {
      return (this.flags & 32) > 0;
    }
    set isAmbientContext(t) {
      t ? this.flags |= 32 : this.flags &= -33;
    }
    get inAbstractClass() {
      return (this.flags & 64) > 0;
    }
    set inAbstractClass(t) {
      t ? this.flags |= 64 : this.flags &= -65;
    }
    get inDisallowConditionalTypesContext() {
      return (this.flags & 128) > 0;
    }
    set inDisallowConditionalTypesContext(t) {
      t ? this.flags |= 128 : this.flags &= -129;
    }
    get soloAwait() {
      return (this.flags & 256) > 0;
    }
    set soloAwait(t) {
      t ? this.flags |= 256 : this.flags &= -257;
    }
    get inFSharpPipelineDirectBody() {
      return (this.flags & 512) > 0;
    }
    set inFSharpPipelineDirectBody(t) {
      t ? this.flags |= 512 : this.flags &= -513;
    }
    get canStartJSXElement() {
      return (this.flags & 1024) > 0;
    }
    set canStartJSXElement(t) {
      t ? this.flags |= 1024 : this.flags &= -1025;
    }
    get containsEsc() {
      return (this.flags & 2048) > 0;
    }
    set containsEsc(t) {
      t ? this.flags |= 2048 : this.flags &= -2049;
    }
    get hasTopLevelAwait() {
      return (this.flags & 4096) > 0;
    }
    set hasTopLevelAwait(t) {
      t ? this.flags |= 4096 : this.flags &= -4097;
    }
    curPosition() {
      return new h(this.curLine, this.pos - this.lineStart, this.pos + this.startIndex);
    }
    clone() {
      const t = new gs();
      return t.flags = this.flags, t.startIndex = this.startIndex, t.curLine = this.curLine, t.lineStart = this.lineStart, t.startLoc = this.startLoc, t.endLoc = this.endLoc, t.errors = this.errors.slice(), t.potentialArrowAt = this.potentialArrowAt, t.noArrowAt = this.noArrowAt.slice(), t.noArrowParamsConversionAt = this.noArrowParamsConversionAt.slice(), t.topicContext = this.topicContext, t.labels = this.labels.slice(), t.commentsLen = this.commentsLen, t.commentStack = this.commentStack.slice(), t.pos = this.pos, t.type = this.type, t.value = this.value, t.start = this.start, t.end = this.end, t.lastTokEndLoc = this.lastTokEndLoc, t.lastTokStartLoc = this.lastTokStartLoc, t.context = this.context.slice(), t.firstInvalidTemplateEscapePos = this.firstInvalidTemplateEscapePos, t.strictErrors = this.strictErrors, t.tokensLength = this.tokensLength, t;
    }
  }
  var gr = function(t) {
    return t >= 48 && t <= 57;
  };
  const $s = {
    decBinOct: /* @__PURE__ */ new Set([46, 66, 69, 79, 95, 98, 101, 111]),
    hex: /* @__PURE__ */ new Set([46, 88, 95, 120])
  }, ss = {
    bin: (a) => a === 48 || a === 49,
    oct: (a) => a >= 48 && a <= 55,
    dec: (a) => a >= 48 && a <= 57,
    hex: (a) => a >= 48 && a <= 57 || a >= 65 && a <= 70 || a >= 97 && a <= 102
  };
  function Hs(a, t, e, s, i, r) {
    const n = e, c = s, p = i;
    let f = "", y = null, T = e;
    const {
      length: I
    } = t;
    for (; ; ) {
      if (e >= I) {
        r.unterminated(n, c, p), f += t.slice(T, e);
        break;
      }
      const E = t.charCodeAt(e);
      if (br(a, E, t, e)) {
        f += t.slice(T, e);
        break;
      }
      if (E === 92) {
        f += t.slice(T, e);
        const M = Pr(t, e, s, i, a === "template", r);
        M.ch === null && !y ? y = {
          pos: e,
          lineStart: s,
          curLine: i
        } : f += M.ch, {
          pos: e,
          lineStart: s,
          curLine: i
        } = M, T = e;
      } else E === 8232 || E === 8233 ? (++e, ++i, s = e) : E === 10 || E === 13 ? a === "template" ? (f += t.slice(T, e) + `
`, ++e, E === 13 && t.charCodeAt(e) === 10 && ++e, ++i, T = s = e) : r.unterminated(n, c, p) : ++e;
    }
    return {
      pos: e,
      str: f,
      firstInvalidLoc: y,
      lineStart: s,
      curLine: i,
      containsInvalid: !!y
    };
  }
  function br(a, t, e, s) {
    return a === "template" ? t === 96 || t === 36 && e.charCodeAt(s + 1) === 123 : t === (a === "double" ? 34 : 39);
  }
  function Pr(a, t, e, s, i, r) {
    const n = !i;
    t++;
    const c = (f) => ({
      pos: t,
      ch: f,
      lineStart: e,
      curLine: s
    }), p = a.charCodeAt(t++);
    switch (p) {
      case 110:
        return c(`
`);
      case 114:
        return c("\r");
      case 120: {
        let f;
        return {
          code: f,
          pos: t
        } = bs(a, t, e, s, 2, !1, n, r), c(f === null ? null : String.fromCharCode(f));
      }
      case 117: {
        let f;
        return {
          code: f,
          pos: t
        } = qs(a, t, e, s, n, r), c(f === null ? null : String.fromCodePoint(f));
      }
      case 116:
        return c("	");
      case 98:
        return c("\b");
      case 118:
        return c("\v");
      case 102:
        return c("\f");
      case 13:
        a.charCodeAt(t) === 10 && ++t;
      case 10:
        e = t, ++s;
      case 8232:
      case 8233:
        return c("");
      case 56:
      case 57:
        if (i)
          return c(null);
        r.strictNumericEscape(t - 1, e, s);
      default:
        if (p >= 48 && p <= 55) {
          const f = t - 1;
          let T = /^[0-7]+/.exec(a.slice(f, t + 2))[0], I = parseInt(T, 8);
          I > 255 && (T = T.slice(0, -1), I = parseInt(T, 8)), t += T.length - 1;
          const E = a.charCodeAt(t);
          if (T !== "0" || E === 56 || E === 57) {
            if (i)
              return c(null);
            r.strictNumericEscape(f, e, s);
          }
          return c(String.fromCharCode(I));
        }
        return c(String.fromCharCode(p));
    }
  }
  function bs(a, t, e, s, i, r, n, c) {
    const p = t;
    let f;
    return {
      n: f,
      pos: t
    } = Vs(a, t, e, s, 16, i, r, !1, c, !n), f === null && (n ? c.invalidEscapeSequence(p, e, s) : t = p - 1), {
      code: f,
      pos: t
    };
  }
  function Vs(a, t, e, s, i, r, n, c, p, f) {
    const y = t, T = i === 16 ? $s.hex : $s.decBinOct, I = i === 16 ? ss.hex : i === 10 ? ss.dec : i === 8 ? ss.oct : ss.bin;
    let E = !1, M = 0;
    for (let X = 0, oe = r ?? 1 / 0; X < oe; ++X) {
      const $ = a.charCodeAt(t);
      let ie;
      if ($ === 95 && c !== "bail") {
        const gt = a.charCodeAt(t - 1), lt = a.charCodeAt(t + 1);
        if (c) {
          if (Number.isNaN(lt) || !I(lt) || T.has(gt) || T.has(lt)) {
            if (f) return {
              n: null,
              pos: t
            };
            p.unexpectedNumericSeparator(t, e, s);
          }
        } else {
          if (f) return {
            n: null,
            pos: t
          };
          p.numericSeparatorInEscapeSequence(t, e, s);
        }
        ++t;
        continue;
      }
      if ($ >= 97 ? ie = $ - 97 + 10 : $ >= 65 ? ie = $ - 65 + 10 : gr($) ? ie = $ - 48 : ie = 1 / 0, ie >= i) {
        if (ie <= 9 && f)
          return {
            n: null,
            pos: t
          };
        if (ie <= 9 && p.invalidDigit(t, e, s, i))
          ie = 0;
        else if (n)
          ie = 0, E = !0;
        else
          break;
      }
      ++t, M = M * i + ie;
    }
    return t === y || r != null && t - y !== r || E ? {
      n: null,
      pos: t
    } : {
      n: M,
      pos: t
    };
  }
  function qs(a, t, e, s, i, r) {
    const n = a.charCodeAt(t);
    let c;
    if (n === 123) {
      if (++t, {
        code: c,
        pos: t
      } = bs(a, t, e, s, a.indexOf("}", t) - t, !0, i, r), ++t, c !== null && c > 1114111)
        if (i)
          r.invalidCodePoint(t, e, s);
        else
          return {
            code: null,
            pos: t
          };
    } else
      ({
        code: c,
        pos: t
      } = bs(a, t, e, s, 4, !1, i, r));
    return {
      code: c,
      pos: t
    };
  }
  function jt(a, t, e) {
    return new h(e, a - t, a);
  }
  const Tr = /* @__PURE__ */ new Set([103, 109, 115, 105, 121, 117, 100, 118]);
  class ot {
    constructor(t) {
      const e = t.startIndex || 0;
      this.type = t.type, this.value = t.value, this.start = e + t.start, this.end = e + t.end, this.loc = new u(t.startLoc, t.endLoc);
    }
  }
  class wr extends xr {
    constructor(t, e) {
      super(), this.isLookahead = void 0, this.tokens = [], this.errorHandlers_readInt = {
        invalidDigit: (s, i, r, n) => this.optionFlags & 2048 ? (this.raise(m.InvalidDigit, jt(s, i, r), {
          radix: n
        }), !0) : !1,
        numericSeparatorInEscapeSequence: this.errorBuilder(m.NumericSeparatorInEscapeSequence),
        unexpectedNumericSeparator: this.errorBuilder(m.UnexpectedNumericSeparator)
      }, this.errorHandlers_readCodePoint = Object.assign({}, this.errorHandlers_readInt, {
        invalidEscapeSequence: this.errorBuilder(m.InvalidEscapeSequence),
        invalidCodePoint: this.errorBuilder(m.InvalidCodePoint)
      }), this.errorHandlers_readStringContents_string = Object.assign({}, this.errorHandlers_readCodePoint, {
        strictNumericEscape: (s, i, r) => {
          this.recordStrictModeErrors(m.StrictNumericEscape, jt(s, i, r));
        },
        unterminated: (s, i, r) => {
          throw this.raise(m.UnterminatedString, jt(s - 1, i, r));
        }
      }), this.errorHandlers_readStringContents_template = Object.assign({}, this.errorHandlers_readCodePoint, {
        strictNumericEscape: this.errorBuilder(m.StrictNumericEscape),
        unterminated: (s, i, r) => {
          throw this.raise(m.UnterminatedTemplate, jt(s, i, r));
        }
      }), this.state = new gs(), this.state.init(t), this.input = e, this.length = e.length, this.comments = [], this.isLookahead = !1;
    }
    pushToken(t) {
      this.tokens.length = this.state.tokensLength, this.tokens.push(t), ++this.state.tokensLength;
    }
    next() {
      this.checkKeywordEscapes(), this.optionFlags & 256 && this.pushToken(new ot(this.state)), this.state.lastTokEndLoc = this.state.endLoc, this.state.lastTokStartLoc = this.state.startLoc, this.nextToken();
    }
    eat(t) {
      return this.match(t) ? (this.next(), !0) : !1;
    }
    match(t) {
      return this.state.type === t;
    }
    createLookaheadState(t) {
      return {
        pos: t.pos,
        value: null,
        type: t.type,
        start: t.start,
        end: t.end,
        context: [this.curContext()],
        inType: t.inType,
        startLoc: t.startLoc,
        lastTokEndLoc: t.lastTokEndLoc,
        curLine: t.curLine,
        lineStart: t.lineStart,
        curPosition: t.curPosition
      };
    }
    lookahead() {
      const t = this.state;
      this.state = this.createLookaheadState(t), this.isLookahead = !0, this.nextToken(), this.isLookahead = !1;
      const e = this.state;
      return this.state = t, e;
    }
    nextTokenStart() {
      return this.nextTokenStartSince(this.state.pos);
    }
    nextTokenStartSince(t) {
      return te.lastIndex = t, te.test(this.input) ? te.lastIndex : t;
    }
    lookaheadCharCode() {
      return this.lookaheadCharCodeSince(this.state.pos);
    }
    lookaheadCharCodeSince(t) {
      return this.input.charCodeAt(this.nextTokenStartSince(t));
    }
    nextTokenInLineStart() {
      return this.nextTokenInLineStartSince(this.state.pos);
    }
    nextTokenInLineStartSince(t) {
      return Te.lastIndex = t, Te.test(this.input) ? Te.lastIndex : t;
    }
    lookaheadInLineCharCode() {
      return this.input.charCodeAt(this.nextTokenInLineStart());
    }
    codePointAtPos(t) {
      let e = this.input.charCodeAt(t);
      if ((e & 64512) === 55296 && ++t < this.input.length) {
        const s = this.input.charCodeAt(t);
        (s & 64512) === 56320 && (e = 65536 + ((e & 1023) << 10) + (s & 1023));
      }
      return e;
    }
    setStrict(t) {
      this.state.strict = t, t && (this.state.strictErrors.forEach(([e, s]) => this.raise(e, s)), this.state.strictErrors.clear());
    }
    curContext() {
      return this.state.context[this.state.context.length - 1];
    }
    nextToken() {
      if (this.skipSpace(), this.state.start = this.state.pos, this.isLookahead || (this.state.startLoc = this.state.curPosition()), this.state.pos >= this.length) {
        this.finishToken(140);
        return;
      }
      this.getTokenFromCode(this.codePointAtPos(this.state.pos));
    }
    skipBlockComment(t) {
      let e;
      this.isLookahead || (e = this.state.curPosition());
      const s = this.state.pos, i = this.input.indexOf(t, s + 2);
      if (i === -1)
        throw this.raise(m.UnterminatedComment, this.state.curPosition());
      for (this.state.pos = i + t.length, g.lastIndex = s + 2; g.test(this.input) && g.lastIndex <= i; )
        ++this.state.curLine, this.state.lineStart = g.lastIndex;
      if (this.isLookahead) return;
      const r = {
        type: "CommentBlock",
        value: this.input.slice(s + 2, i),
        start: this.sourceToOffsetPos(s),
        end: this.sourceToOffsetPos(i + t.length),
        loc: new u(e, this.state.curPosition())
      };
      return this.optionFlags & 256 && this.pushToken(r), r;
    }
    skipLineComment(t) {
      const e = this.state.pos;
      let s;
      this.isLookahead || (s = this.state.curPosition());
      let i = this.input.charCodeAt(this.state.pos += t);
      if (this.state.pos < this.length)
        for (; !C(i) && ++this.state.pos < this.length; )
          i = this.input.charCodeAt(this.state.pos);
      if (this.isLookahead) return;
      const r = this.state.pos, c = {
        type: "CommentLine",
        value: this.input.slice(e + t, r),
        start: this.sourceToOffsetPos(e),
        end: this.sourceToOffsetPos(r),
        loc: new u(s, this.state.curPosition())
      };
      return this.optionFlags & 256 && this.pushToken(c), c;
    }
    skipSpace() {
      const t = this.state.pos, e = this.optionFlags & 4096 ? [] : null;
      e: for (; this.state.pos < this.length; ) {
        const s = this.input.charCodeAt(this.state.pos);
        switch (s) {
          case 32:
          case 160:
          case 9:
            ++this.state.pos;
            break;
          case 13:
            this.input.charCodeAt(this.state.pos + 1) === 10 && ++this.state.pos;
          case 10:
          case 8232:
          case 8233:
            ++this.state.pos, ++this.state.curLine, this.state.lineStart = this.state.pos;
            break;
          case 47:
            switch (this.input.charCodeAt(this.state.pos + 1)) {
              case 42: {
                const i = this.skipBlockComment("*/");
                i !== void 0 && (this.addComment(i), e == null || e.push(i));
                break;
              }
              case 47: {
                const i = this.skipLineComment(2);
                i !== void 0 && (this.addComment(i), e == null || e.push(i));
                break;
              }
              default:
                break e;
            }
            break;
          default:
            if (xe(s))
              ++this.state.pos;
            else if (s === 45 && !this.inModule && this.optionFlags & 8192) {
              const i = this.state.pos;
              if (this.input.charCodeAt(i + 1) === 45 && this.input.charCodeAt(i + 2) === 62 && (t === 0 || this.state.lineStart > t)) {
                const r = this.skipLineComment(3);
                r !== void 0 && (this.addComment(r), e == null || e.push(r));
              } else
                break e;
            } else if (s === 60 && !this.inModule && this.optionFlags & 8192) {
              const i = this.state.pos;
              if (this.input.charCodeAt(i + 1) === 33 && this.input.charCodeAt(i + 2) === 45 && this.input.charCodeAt(i + 3) === 45) {
                const r = this.skipLineComment(4);
                r !== void 0 && (this.addComment(r), e == null || e.push(r));
              } else
                break e;
            } else
              break e;
        }
      }
      if ((e == null ? void 0 : e.length) > 0) {
        const s = this.state.pos, i = {
          start: this.sourceToOffsetPos(t),
          end: this.sourceToOffsetPos(s),
          comments: e,
          leadingNode: null,
          trailingNode: null,
          containingNode: null
        };
        this.state.commentStack.push(i);
      }
    }
    finishToken(t, e) {
      this.state.end = this.state.pos, this.state.endLoc = this.state.curPosition();
      const s = this.state.type;
      this.state.type = t, this.state.value = e, this.isLookahead || this.updateContext(s);
    }
    replaceToken(t) {
      this.state.type = t, this.updateContext();
    }
    readToken_numberSign() {
      if (this.state.pos === 0 && this.readToken_interpreter())
        return;
      const t = this.state.pos + 1, e = this.codePointAtPos(t);
      if (e >= 48 && e <= 57)
        throw this.raise(m.UnexpectedDigitAfterHash, this.state.curPosition());
      if (e === 123 || e === 91 && this.hasPlugin("recordAndTuple")) {
        if (this.expectPlugin("recordAndTuple"), this.getPluginOption("recordAndTuple", "syntaxType") === "bar")
          throw this.raise(e === 123 ? m.RecordExpressionHashIncorrectStartSyntaxType : m.TupleExpressionHashIncorrectStartSyntaxType, this.state.curPosition());
        this.state.pos += 2, e === 123 ? this.finishToken(7) : this.finishToken(1);
      } else Fe(e) ? (++this.state.pos, this.finishToken(139, this.readWord1(e))) : e === 92 ? (++this.state.pos, this.finishToken(139, this.readWord1())) : this.finishOp(27, 1);
    }
    readToken_dot() {
      const t = this.input.charCodeAt(this.state.pos + 1);
      if (t >= 48 && t <= 57) {
        this.readNumber(!0);
        return;
      }
      t === 46 && this.input.charCodeAt(this.state.pos + 2) === 46 ? (this.state.pos += 3, this.finishToken(21)) : (++this.state.pos, this.finishToken(16));
    }
    readToken_slash() {
      this.input.charCodeAt(this.state.pos + 1) === 61 ? this.finishOp(31, 2) : this.finishOp(56, 1);
    }
    readToken_interpreter() {
      if (this.state.pos !== 0 || this.length < 2) return !1;
      let t = this.input.charCodeAt(this.state.pos + 1);
      if (t !== 33) return !1;
      const e = this.state.pos;
      for (this.state.pos += 1; !C(t) && ++this.state.pos < this.length; )
        t = this.input.charCodeAt(this.state.pos);
      const s = this.input.slice(e + 2, this.state.pos);
      return this.finishToken(28, s), !0;
    }
    readToken_mult_modulo(t) {
      let e = t === 42 ? 55 : 54, s = 1, i = this.input.charCodeAt(this.state.pos + 1);
      t === 42 && i === 42 && (s++, i = this.input.charCodeAt(this.state.pos + 2), e = 57), i === 61 && !this.state.inType && (s++, e = t === 37 ? 33 : 30), this.finishOp(e, s);
    }
    readToken_pipe_amp(t) {
      const e = this.input.charCodeAt(this.state.pos + 1);
      if (e === t) {
        this.input.charCodeAt(this.state.pos + 2) === 61 ? this.finishOp(30, 3) : this.finishOp(t === 124 ? 41 : 42, 2);
        return;
      }
      if (t === 124) {
        if (e === 62) {
          this.finishOp(39, 2);
          return;
        }
        if (this.hasPlugin("recordAndTuple") && e === 125) {
          if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar")
            throw this.raise(m.RecordExpressionBarIncorrectEndSyntaxType, this.state.curPosition());
          this.state.pos += 2, this.finishToken(9);
          return;
        }
        if (this.hasPlugin("recordAndTuple") && e === 93) {
          if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar")
            throw this.raise(m.TupleExpressionBarIncorrectEndSyntaxType, this.state.curPosition());
          this.state.pos += 2, this.finishToken(4);
          return;
        }
      }
      if (e === 61) {
        this.finishOp(30, 2);
        return;
      }
      this.finishOp(t === 124 ? 43 : 45, 1);
    }
    readToken_caret() {
      const t = this.input.charCodeAt(this.state.pos + 1);
      t === 61 && !this.state.inType ? this.finishOp(32, 2) : t === 94 && this.hasPlugin(["pipelineOperator", {
        proposal: "hack",
        topicToken: "^^"
      }]) ? (this.finishOp(37, 2), this.input.codePointAt(this.state.pos) === 94 && this.unexpected()) : this.finishOp(44, 1);
    }
    readToken_atSign() {
      this.input.charCodeAt(this.state.pos + 1) === 64 && this.hasPlugin(["pipelineOperator", {
        proposal: "hack",
        topicToken: "@@"
      }]) ? this.finishOp(38, 2) : this.finishOp(26, 1);
    }
    readToken_plus_min(t) {
      const e = this.input.charCodeAt(this.state.pos + 1);
      if (e === t) {
        this.finishOp(34, 2);
        return;
      }
      e === 61 ? this.finishOp(30, 2) : this.finishOp(53, 1);
    }
    readToken_lt() {
      const {
        pos: t
      } = this.state, e = this.input.charCodeAt(t + 1);
      if (e === 60) {
        if (this.input.charCodeAt(t + 2) === 61) {
          this.finishOp(30, 3);
          return;
        }
        this.finishOp(51, 2);
        return;
      }
      if (e === 61) {
        this.finishOp(49, 2);
        return;
      }
      this.finishOp(47, 1);
    }
    readToken_gt() {
      const {
        pos: t
      } = this.state, e = this.input.charCodeAt(t + 1);
      if (e === 62) {
        const s = this.input.charCodeAt(t + 2) === 62 ? 3 : 2;
        if (this.input.charCodeAt(t + s) === 61) {
          this.finishOp(30, s + 1);
          return;
        }
        this.finishOp(52, s);
        return;
      }
      if (e === 61) {
        this.finishOp(49, 2);
        return;
      }
      this.finishOp(48, 1);
    }
    readToken_eq_excl(t) {
      const e = this.input.charCodeAt(this.state.pos + 1);
      if (e === 61) {
        this.finishOp(46, this.input.charCodeAt(this.state.pos + 2) === 61 ? 3 : 2);
        return;
      }
      if (t === 61 && e === 62) {
        this.state.pos += 2, this.finishToken(19);
        return;
      }
      this.finishOp(t === 61 ? 29 : 35, 1);
    }
    readToken_question() {
      const t = this.input.charCodeAt(this.state.pos + 1), e = this.input.charCodeAt(this.state.pos + 2);
      t === 63 ? e === 61 ? this.finishOp(30, 3) : this.finishOp(40, 2) : t === 46 && !(e >= 48 && e <= 57) ? (this.state.pos += 2, this.finishToken(18)) : (++this.state.pos, this.finishToken(17));
    }
    getTokenFromCode(t) {
      switch (t) {
        case 46:
          this.readToken_dot();
          return;
        case 40:
          ++this.state.pos, this.finishToken(10);
          return;
        case 41:
          ++this.state.pos, this.finishToken(11);
          return;
        case 59:
          ++this.state.pos, this.finishToken(13);
          return;
        case 44:
          ++this.state.pos, this.finishToken(12);
          return;
        case 91:
          if (this.hasPlugin("recordAndTuple") && this.input.charCodeAt(this.state.pos + 1) === 124) {
            if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar")
              throw this.raise(m.TupleExpressionBarIncorrectStartSyntaxType, this.state.curPosition());
            this.state.pos += 2, this.finishToken(2);
          } else
            ++this.state.pos, this.finishToken(0);
          return;
        case 93:
          ++this.state.pos, this.finishToken(3);
          return;
        case 123:
          if (this.hasPlugin("recordAndTuple") && this.input.charCodeAt(this.state.pos + 1) === 124) {
            if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar")
              throw this.raise(m.RecordExpressionBarIncorrectStartSyntaxType, this.state.curPosition());
            this.state.pos += 2, this.finishToken(6);
          } else
            ++this.state.pos, this.finishToken(5);
          return;
        case 125:
          ++this.state.pos, this.finishToken(8);
          return;
        case 58:
          this.hasPlugin("functionBind") && this.input.charCodeAt(this.state.pos + 1) === 58 ? this.finishOp(15, 2) : (++this.state.pos, this.finishToken(14));
          return;
        case 63:
          this.readToken_question();
          return;
        case 96:
          this.readTemplateToken();
          return;
        case 48: {
          const e = this.input.charCodeAt(this.state.pos + 1);
          if (e === 120 || e === 88) {
            this.readRadixNumber(16);
            return;
          }
          if (e === 111 || e === 79) {
            this.readRadixNumber(8);
            return;
          }
          if (e === 98 || e === 66) {
            this.readRadixNumber(2);
            return;
          }
        }
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
          this.readNumber(!1);
          return;
        case 34:
        case 39:
          this.readString(t);
          return;
        case 47:
          this.readToken_slash();
          return;
        case 37:
        case 42:
          this.readToken_mult_modulo(t);
          return;
        case 124:
        case 38:
          this.readToken_pipe_amp(t);
          return;
        case 94:
          this.readToken_caret();
          return;
        case 43:
        case 45:
          this.readToken_plus_min(t);
          return;
        case 60:
          this.readToken_lt();
          return;
        case 62:
          this.readToken_gt();
          return;
        case 61:
        case 33:
          this.readToken_eq_excl(t);
          return;
        case 126:
          this.finishOp(36, 1);
          return;
        case 64:
          this.readToken_atSign();
          return;
        case 35:
          this.readToken_numberSign();
          return;
        case 92:
          this.readWord();
          return;
        default:
          if (Fe(t)) {
            this.readWord(t);
            return;
          }
      }
      throw this.raise(m.InvalidOrUnexpectedToken, this.state.curPosition(), {
        unexpected: String.fromCodePoint(t)
      });
    }
    finishOp(t, e) {
      const s = this.input.slice(this.state.pos, this.state.pos + e);
      this.state.pos += e, this.finishToken(t, s);
    }
    readRegexp() {
      const t = this.state.startLoc, e = this.state.start + 1;
      let s, i, {
        pos: r
      } = this.state;
      for (; ; ++r) {
        if (r >= this.length)
          throw this.raise(m.UnterminatedRegExp, d(t, 1));
        const f = this.input.charCodeAt(r);
        if (C(f))
          throw this.raise(m.UnterminatedRegExp, d(t, 1));
        if (s)
          s = !1;
        else {
          if (f === 91)
            i = !0;
          else if (f === 93 && i)
            i = !1;
          else if (f === 47 && !i)
            break;
          s = f === 92;
        }
      }
      const n = this.input.slice(e, r);
      ++r;
      let c = "";
      const p = () => d(t, r + 2 - e);
      for (; r < this.length; ) {
        const f = this.codePointAtPos(r), y = String.fromCharCode(f);
        if (Tr.has(f))
          f === 118 ? c.includes("u") && this.raise(m.IncompatibleRegExpUVFlags, p()) : f === 117 && c.includes("v") && this.raise(m.IncompatibleRegExpUVFlags, p()), c.includes(y) && this.raise(m.DuplicateRegExpFlags, p());
        else if (Be(f) || f === 92)
          this.raise(m.MalformedRegExpFlags, p());
        else
          break;
        ++r, c += y;
      }
      this.state.pos = r, this.finishToken(138, {
        pattern: n,
        flags: c
      });
    }
    readInt(t, e, s = !1, i = !0) {
      const {
        n: r,
        pos: n
      } = Vs(this.input, this.state.pos, this.state.lineStart, this.state.curLine, t, e, s, i, this.errorHandlers_readInt, !1);
      return this.state.pos = n, r;
    }
    readRadixNumber(t) {
      const e = this.state.pos, s = this.state.curPosition();
      let i = !1;
      this.state.pos += 2;
      const r = this.readInt(t);
      r == null && this.raise(m.InvalidDigit, d(s, 2), {
        radix: t
      });
      const n = this.input.charCodeAt(this.state.pos);
      if (n === 110)
        ++this.state.pos, i = !0;
      else if (n === 109)
        throw this.raise(m.InvalidDecimal, s);
      if (Fe(this.codePointAtPos(this.state.pos)))
        throw this.raise(m.NumberIdentifier, this.state.curPosition());
      if (i) {
        const c = this.input.slice(e, this.state.pos).replace(/[_n]/g, "");
        this.finishToken(136, c);
        return;
      }
      this.finishToken(135, r);
    }
    readNumber(t) {
      const e = this.state.pos, s = this.state.curPosition();
      let i = !1, r = !1, n = !1, c = !1;
      !t && this.readInt(10) === null && this.raise(m.InvalidNumber, this.state.curPosition());
      const p = this.state.pos - e >= 2 && this.input.charCodeAt(e) === 48;
      if (p) {
        const E = this.input.slice(e, this.state.pos);
        if (this.recordStrictModeErrors(m.StrictOctalLiteral, s), !this.state.strict) {
          const M = E.indexOf("_");
          M > 0 && this.raise(m.ZeroDigitNumericSeparator, d(s, M));
        }
        c = p && !/[89]/.test(E);
      }
      let f = this.input.charCodeAt(this.state.pos);
      if (f === 46 && !c && (++this.state.pos, this.readInt(10), i = !0, f = this.input.charCodeAt(this.state.pos)), (f === 69 || f === 101) && !c && (f = this.input.charCodeAt(++this.state.pos), (f === 43 || f === 45) && ++this.state.pos, this.readInt(10) === null && this.raise(m.InvalidOrMissingExponent, s), i = !0, n = !0, f = this.input.charCodeAt(this.state.pos)), f === 110 && ((i || p) && this.raise(m.InvalidBigIntLiteral, s), ++this.state.pos, r = !0), f === 109) {
        this.expectPlugin("decimal", this.state.curPosition()), (n || p) && this.raise(m.InvalidDecimal, s), ++this.state.pos;
        var y = !0;
      }
      if (Fe(this.codePointAtPos(this.state.pos)))
        throw this.raise(m.NumberIdentifier, this.state.curPosition());
      const T = this.input.slice(e, this.state.pos).replace(/[_mn]/g, "");
      if (r) {
        this.finishToken(136, T);
        return;
      }
      if (y) {
        this.finishToken(137, T);
        return;
      }
      const I = c ? parseInt(T, 8) : parseFloat(T);
      this.finishToken(135, I);
    }
    readCodePoint(t) {
      const {
        code: e,
        pos: s
      } = qs(this.input, this.state.pos, this.state.lineStart, this.state.curLine, t, this.errorHandlers_readCodePoint);
      return this.state.pos = s, e;
    }
    readString(t) {
      const {
        str: e,
        pos: s,
        curLine: i,
        lineStart: r
      } = Hs(t === 34 ? "double" : "single", this.input, this.state.pos + 1, this.state.lineStart, this.state.curLine, this.errorHandlers_readStringContents_string);
      this.state.pos = s + 1, this.state.lineStart = r, this.state.curLine = i, this.finishToken(134, e);
    }
    readTemplateContinuation() {
      this.match(8) || this.unexpected(null, 8), this.state.pos--, this.readTemplateToken();
    }
    readTemplateToken() {
      const t = this.input[this.state.pos], {
        str: e,
        firstInvalidLoc: s,
        pos: i,
        curLine: r,
        lineStart: n
      } = Hs("template", this.input, this.state.pos + 1, this.state.lineStart, this.state.curLine, this.errorHandlers_readStringContents_template);
      this.state.pos = i + 1, this.state.lineStart = n, this.state.curLine = r, s && (this.state.firstInvalidTemplateEscapePos = new h(s.curLine, s.pos - s.lineStart, this.sourceToOffsetPos(s.pos))), this.input.codePointAt(i) === 96 ? this.finishToken(24, s ? null : t + e + "`") : (this.state.pos++, this.finishToken(25, s ? null : t + e + "${"));
    }
    recordStrictModeErrors(t, e) {
      const s = e.index;
      this.state.strict && !this.state.strictErrors.has(s) ? this.raise(t, e) : this.state.strictErrors.set(s, [t, e]);
    }
    readWord1(t) {
      this.state.containsEsc = !1;
      let e = "";
      const s = this.state.pos;
      let i = this.state.pos;
      for (t !== void 0 && (this.state.pos += t <= 65535 ? 1 : 2); this.state.pos < this.length; ) {
        const r = this.codePointAtPos(this.state.pos);
        if (Be(r))
          this.state.pos += r <= 65535 ? 1 : 2;
        else if (r === 92) {
          this.state.containsEsc = !0, e += this.input.slice(i, this.state.pos);
          const n = this.state.curPosition(), c = this.state.pos === s ? Fe : Be;
          if (this.input.charCodeAt(++this.state.pos) !== 117) {
            this.raise(m.MissingUnicodeEscape, this.state.curPosition()), i = this.state.pos - 1;
            continue;
          }
          ++this.state.pos;
          const p = this.readCodePoint(!0);
          p !== null && (c(p) || this.raise(m.EscapedCharNotAnIdentifier, n), e += String.fromCodePoint(p)), i = this.state.pos;
        } else
          break;
      }
      return e + this.input.slice(i, this.state.pos);
    }
    readWord(t) {
      const e = this.readWord1(t), s = $e.get(e);
      s !== void 0 ? this.finishToken(s, Ie(s)) : this.finishToken(132, e);
    }
    checkKeywordEscapes() {
      const {
        type: t
      } = this.state;
      bt(t) && this.state.containsEsc && this.raise(m.InvalidEscapedReservedWord, this.state.startLoc, {
        reservedWord: Ie(t)
      });
    }
    raise(t, e, s = {}) {
      const i = e instanceof h ? e : e.loc.start, r = t(i, s);
      if (!(this.optionFlags & 2048)) throw r;
      return this.isLookahead || this.state.errors.push(r), r;
    }
    raiseOverwrite(t, e, s = {}) {
      const i = e instanceof h ? e : e.loc.start, r = i.index, n = this.state.errors;
      for (let c = n.length - 1; c >= 0; c--) {
        const p = n[c];
        if (p.loc.index === r)
          return n[c] = t(i, s);
        if (p.loc.index < r) break;
      }
      return this.raise(t, e, s);
    }
    updateContext(t) {
    }
    unexpected(t, e) {
      throw this.raise(m.UnexpectedToken, t ?? this.state.startLoc, {
        expected: e ? Ie(e) : null
      });
    }
    expectPlugin(t, e) {
      if (this.hasPlugin(t))
        return !0;
      throw this.raise(m.MissingPlugin, e ?? this.state.startLoc, {
        missingPlugin: [t]
      });
    }
    expectOnePlugin(t) {
      if (!t.some((e) => this.hasPlugin(e)))
        throw this.raise(m.MissingOneOfPlugins, this.state.startLoc, {
          missingPlugin: t
        });
    }
    errorBuilder(t) {
      return (e, s, i) => {
        this.raise(t, jt(e, s, i));
      };
    }
  }
  class Ar {
    constructor() {
      this.privateNames = /* @__PURE__ */ new Set(), this.loneAccessors = /* @__PURE__ */ new Map(), this.undefinedPrivateNames = /* @__PURE__ */ new Map();
    }
  }
  class Sr {
    constructor(t) {
      this.parser = void 0, this.stack = [], this.undefinedPrivateNames = /* @__PURE__ */ new Map(), this.parser = t;
    }
    current() {
      return this.stack[this.stack.length - 1];
    }
    enter() {
      this.stack.push(new Ar());
    }
    exit() {
      const t = this.stack.pop(), e = this.current();
      for (const [s, i] of Array.from(t.undefinedPrivateNames))
        e ? e.undefinedPrivateNames.has(s) || e.undefinedPrivateNames.set(s, i) : this.parser.raise(m.InvalidPrivateFieldResolution, i, {
          identifierName: s
        });
    }
    declarePrivateName(t, e, s) {
      const {
        privateNames: i,
        loneAccessors: r,
        undefinedPrivateNames: n
      } = this.current();
      let c = i.has(t);
      if (e & 3) {
        const p = c && r.get(t);
        if (p) {
          const f = p & 4, y = e & 4, T = p & 3, I = e & 3;
          c = T === I || f !== y, c || r.delete(t);
        } else c || r.set(t, e);
      }
      c && this.parser.raise(m.PrivateNameRedeclaration, s, {
        identifierName: t
      }), i.add(t), n.delete(t);
    }
    usePrivateName(t, e) {
      let s;
      for (s of this.stack)
        if (s.privateNames.has(t)) return;
      s ? s.undefinedPrivateNames.set(t, e) : this.parser.raise(m.InvalidPrivateFieldResolution, e, {
        identifierName: t
      });
    }
  }
  class is {
    constructor(t = 0) {
      this.type = t;
    }
    canBeArrowParameterDeclaration() {
      return this.type === 2 || this.type === 1;
    }
    isCertainlyParameterDeclaration() {
      return this.type === 3;
    }
  }
  class Ws extends is {
    constructor(t) {
      super(t), this.declarationErrors = /* @__PURE__ */ new Map();
    }
    recordDeclarationError(t, e) {
      const s = e.index;
      this.declarationErrors.set(s, [t, e]);
    }
    clearDeclarationError(t) {
      this.declarationErrors.delete(t);
    }
    iterateErrors(t) {
      this.declarationErrors.forEach(t);
    }
  }
  class vr {
    constructor(t) {
      this.parser = void 0, this.stack = [new is()], this.parser = t;
    }
    enter(t) {
      this.stack.push(t);
    }
    exit() {
      this.stack.pop();
    }
    recordParameterInitializerError(t, e) {
      const s = e.loc.start, {
        stack: i
      } = this;
      let r = i.length - 1, n = i[r];
      for (; !n.isCertainlyParameterDeclaration(); ) {
        if (n.canBeArrowParameterDeclaration())
          n.recordDeclarationError(t, s);
        else
          return;
        n = i[--r];
      }
      this.parser.raise(t, s);
    }
    recordArrowParameterBindingError(t, e) {
      const {
        stack: s
      } = this, i = s[s.length - 1], r = e.loc.start;
      if (i.isCertainlyParameterDeclaration())
        this.parser.raise(t, r);
      else if (i.canBeArrowParameterDeclaration())
        i.recordDeclarationError(t, r);
      else
        return;
    }
    recordAsyncArrowParametersError(t) {
      const {
        stack: e
      } = this;
      let s = e.length - 1, i = e[s];
      for (; i.canBeArrowParameterDeclaration(); )
        i.type === 2 && i.recordDeclarationError(m.AwaitBindingIdentifier, t), i = e[--s];
    }
    validateAsPattern() {
      const {
        stack: t
      } = this, e = t[t.length - 1];
      e.canBeArrowParameterDeclaration() && e.iterateErrors(([s, i]) => {
        this.parser.raise(s, i);
        let r = t.length - 2, n = t[r];
        for (; n.canBeArrowParameterDeclaration(); )
          n.clearDeclarationError(i.index), n = t[--r];
      });
    }
  }
  function Nr() {
    return new is(3);
  }
  function Cr() {
    return new Ws(1);
  }
  function Ir() {
    return new Ws(2);
  }
  function Ks() {
    return new is();
  }
  class kr extends wr {
    addExtra(t, e, s, i = !0) {
      if (!t) return;
      let {
        extra: r
      } = t;
      r == null && (r = {}, t.extra = r), i ? r[e] = s : Object.defineProperty(r, e, {
        enumerable: i,
        value: s
      });
    }
    isContextual(t) {
      return this.state.type === t && !this.state.containsEsc;
    }
    isUnparsedContextual(t, e) {
      if (this.input.startsWith(e, t)) {
        const s = this.input.charCodeAt(t + e.length);
        return !(Be(s) || (s & 64512) === 55296);
      }
      return !1;
    }
    isLookaheadContextual(t) {
      const e = this.nextTokenStart();
      return this.isUnparsedContextual(e, t);
    }
    eatContextual(t) {
      return this.isContextual(t) ? (this.next(), !0) : !1;
    }
    expectContextual(t, e) {
      if (!this.eatContextual(t)) {
        if (e != null)
          throw this.raise(e, this.state.startLoc);
        this.unexpected(null, t);
      }
    }
    canInsertSemicolon() {
      return this.match(140) || this.match(8) || this.hasPrecedingLineBreak();
    }
    hasPrecedingLineBreak() {
      return _(this.input, this.offsetToSourcePos(this.state.lastTokEndLoc.index), this.state.start);
    }
    hasFollowingLineBreak() {
      return _(this.input, this.state.end, this.nextTokenStart());
    }
    isLineTerminator() {
      return this.eat(13) || this.canInsertSemicolon();
    }
    semicolon(t = !0) {
      (t ? this.isLineTerminator() : this.eat(13)) || this.raise(m.MissingSemicolon, this.state.lastTokEndLoc);
    }
    expect(t, e) {
      this.eat(t) || this.unexpected(e, t);
    }
    tryParse(t, e = this.state.clone()) {
      const s = {
        node: null
      };
      try {
        const i = t((r = null) => {
          throw s.node = r, s;
        });
        if (this.state.errors.length > e.errors.length) {
          const r = this.state;
          return this.state = e, this.state.tokensLength = r.tokensLength, {
            node: i,
            error: r.errors[e.errors.length],
            thrown: !1,
            aborted: !1,
            failState: r
          };
        }
        return {
          node: i,
          error: null,
          thrown: !1,
          aborted: !1,
          failState: null
        };
      } catch (i) {
        const r = this.state;
        if (this.state = e, i instanceof SyntaxError)
          return {
            node: null,
            error: i,
            thrown: !0,
            aborted: !1,
            failState: r
          };
        if (i === s)
          return {
            node: s.node,
            error: null,
            thrown: !1,
            aborted: !0,
            failState: r
          };
        throw i;
      }
    }
    checkExpressionErrors(t, e) {
      if (!t) return !1;
      const {
        shorthandAssignLoc: s,
        doubleProtoLoc: i,
        privateKeyLoc: r,
        optionalParametersLoc: n,
        voidPatternLoc: c
      } = t, p = !!s || !!i || !!n || !!r || !!c;
      if (!e)
        return p;
      s != null && this.raise(m.InvalidCoverInitializedName, s), i != null && this.raise(m.DuplicateProto, i), r != null && this.raise(m.UnexpectedPrivateField, r), n != null && this.unexpected(n), c != null && this.raise(m.InvalidCoverDiscardElement, c);
    }
    isLiteralPropertyName() {
      return Z(this.state.type);
    }
    isPrivateName(t) {
      return t.type === "PrivateName";
    }
    getPrivateNameSV(t) {
      return t.id.name;
    }
    hasPropertyAsPrivateName(t) {
      return (t.type === "MemberExpression" || t.type === "OptionalMemberExpression") && this.isPrivateName(t.property);
    }
    isObjectProperty(t) {
      return t.type === "ObjectProperty";
    }
    isObjectMethod(t) {
      return t.type === "ObjectMethod";
    }
    initializeScopes(t = this.options.sourceType === "module") {
      const e = this.state.labels;
      this.state.labels = [];
      const s = this.exportedIdentifiers;
      this.exportedIdentifiers = /* @__PURE__ */ new Set();
      const i = this.inModule;
      this.inModule = t;
      const r = this.scope, n = this.getScopeHandler();
      this.scope = new n(this, t);
      const c = this.prodParam;
      this.prodParam = new es();
      const p = this.classScope;
      this.classScope = new Sr(this);
      const f = this.expressionScope;
      return this.expressionScope = new vr(this), () => {
        this.state.labels = e, this.exportedIdentifiers = s, this.inModule = i, this.scope = r, this.prodParam = c, this.classScope = p, this.expressionScope = f;
      };
    }
    enterInitialScopes() {
      let t = 0;
      (this.inModule || this.optionFlags & 1) && (t |= 2), this.optionFlags & 32 && (t |= 1);
      const e = !this.inModule && this.options.sourceType === "commonjs";
      (e || this.optionFlags & 2) && (t |= 4), this.prodParam.enter(t);
      let s = e ? 514 : 1;
      this.optionFlags & 4 && (s |= 512), this.scope.enter(s);
    }
    checkDestructuringPrivate(t) {
      const {
        privateKeyLoc: e
      } = t;
      e !== null && this.expectPlugin("destructuringPrivate", e);
    }
  }
  class rs {
    constructor() {
      this.shorthandAssignLoc = null, this.doubleProtoLoc = null, this.privateKeyLoc = null, this.optionalParametersLoc = null, this.voidPatternLoc = null;
    }
  }
  class as {
    constructor(t, e, s) {
      this.type = "", this.start = e, this.end = 0, this.loc = new u(s), (t == null ? void 0 : t.optionFlags) & 128 && (this.range = [e, 0]), t != null && t.filename && (this.loc.filename = t.filename);
    }
  }
  const Ps = as.prototype;
  Ps.__clone = function() {
    const a = new as(void 0, this.start, this.loc.start), t = Object.keys(this);
    for (let e = 0, s = t.length; e < s; e++) {
      const i = t[e];
      i !== "leadingComments" && i !== "trailingComments" && i !== "innerComments" && (a[i] = this[i]);
    }
    return a;
  };
  class Er extends kr {
    startNode() {
      const t = this.state.startLoc;
      return new as(this, t.index, t);
    }
    startNodeAt(t) {
      return new as(this, t.index, t);
    }
    startNodeAtNode(t) {
      return this.startNodeAt(t.loc.start);
    }
    finishNode(t, e) {
      return this.finishNodeAt(t, e, this.state.lastTokEndLoc);
    }
    finishNodeAt(t, e, s) {
      return t.type = e, t.end = s.index, t.loc.end = s, this.optionFlags & 128 && (t.range[1] = s.index), this.optionFlags & 4096 && this.processComment(t), t;
    }
    resetStartLocation(t, e) {
      t.start = e.index, t.loc.start = e, this.optionFlags & 128 && (t.range[0] = e.index);
    }
    resetEndLocation(t, e = this.state.lastTokEndLoc) {
      t.end = e.index, t.loc.end = e, this.optionFlags & 128 && (t.range[1] = e.index);
    }
    resetStartLocationFromNode(t, e) {
      this.resetStartLocation(t, e.loc.start);
    }
    castNodeTo(t, e) {
      return t.type = e, t;
    }
    cloneIdentifier(t) {
      const {
        type: e,
        start: s,
        end: i,
        loc: r,
        range: n,
        name: c
      } = t, p = Object.create(Ps);
      return p.type = e, p.start = s, p.end = i, p.loc = r, p.range = n, p.name = c, t.extra && (p.extra = t.extra), p;
    }
    cloneStringLiteral(t) {
      const {
        type: e,
        start: s,
        end: i,
        loc: r,
        range: n,
        extra: c
      } = t, p = Object.create(Ps);
      return p.type = e, p.start = s, p.end = i, p.loc = r, p.range = n, p.extra = c, p.value = t.value, p;
    }
  }
  const Ts = (a) => a.type === "ParenthesizedExpression" ? Ts(a.expression) : a;
  class jr extends Er {
    toAssignable(t, e = !1) {
      var s, i;
      let r;
      switch ((t.type === "ParenthesizedExpression" || (s = t.extra) != null && s.parenthesized) && (r = Ts(t), e ? r.type === "Identifier" ? this.expressionScope.recordArrowParameterBindingError(m.InvalidParenthesizedAssignment, t) : r.type !== "CallExpression" && r.type !== "MemberExpression" && !this.isOptionalMemberExpression(r) && this.raise(m.InvalidParenthesizedAssignment, t) : this.raise(m.InvalidParenthesizedAssignment, t)), t.type) {
        case "Identifier":
        case "ObjectPattern":
        case "ArrayPattern":
        case "AssignmentPattern":
        case "RestElement":
        case "VoidPattern":
          break;
        case "ObjectExpression":
          this.castNodeTo(t, "ObjectPattern");
          for (let c = 0, p = t.properties.length, f = p - 1; c < p; c++) {
            var n;
            const y = t.properties[c], T = c === f;
            this.toAssignableObjectExpressionProp(y, T, e), T && y.type === "RestElement" && (n = t.extra) != null && n.trailingCommaLoc && this.raise(m.RestTrailingComma, t.extra.trailingCommaLoc);
          }
          break;
        case "ObjectProperty": {
          const {
            key: c,
            value: p
          } = t;
          this.isPrivateName(c) && this.classScope.usePrivateName(this.getPrivateNameSV(c), c.loc.start), this.toAssignable(p, e);
          break;
        }
        case "SpreadElement":
          throw new Error("Internal @babel/parser error (this is a bug, please report it). SpreadElement should be converted by .toAssignable's caller.");
        case "ArrayExpression":
          this.castNodeTo(t, "ArrayPattern"), this.toAssignableList(t.elements, (i = t.extra) == null ? void 0 : i.trailingCommaLoc, e);
          break;
        case "AssignmentExpression":
          t.operator !== "=" && this.raise(m.MissingEqInAssignment, t.left.loc.end), this.castNodeTo(t, "AssignmentPattern"), delete t.operator, t.left.type === "VoidPattern" && this.raise(m.VoidPatternInitializer, t.left), this.toAssignable(t.left, e);
          break;
        case "ParenthesizedExpression":
          this.toAssignable(r, e);
          break;
      }
    }
    toAssignableObjectExpressionProp(t, e, s) {
      if (t.type === "ObjectMethod")
        this.raise(t.kind === "get" || t.kind === "set" ? m.PatternHasAccessor : m.PatternHasMethod, t.key);
      else if (t.type === "SpreadElement") {
        this.castNodeTo(t, "RestElement");
        const i = t.argument;
        this.checkToRestConversion(i, !1), this.toAssignable(i, s), e || this.raise(m.RestTrailingComma, t);
      } else
        this.toAssignable(t, s);
    }
    toAssignableList(t, e, s) {
      const i = t.length - 1;
      for (let r = 0; r <= i; r++) {
        const n = t[r];
        n && (this.toAssignableListItem(t, r, s), n.type === "RestElement" && (r < i ? this.raise(m.RestTrailingComma, n) : e && this.raise(m.RestTrailingComma, e)));
      }
    }
    toAssignableListItem(t, e, s) {
      const i = t[e];
      if (i.type === "SpreadElement") {
        this.castNodeTo(i, "RestElement");
        const r = i.argument;
        this.checkToRestConversion(r, !0), this.toAssignable(r, s);
      } else
        this.toAssignable(i, s);
    }
    isAssignable(t, e) {
      switch (t.type) {
        case "Identifier":
        case "ObjectPattern":
        case "ArrayPattern":
        case "AssignmentPattern":
        case "RestElement":
        case "VoidPattern":
          return !0;
        case "ObjectExpression": {
          const s = t.properties.length - 1;
          return t.properties.every((i, r) => i.type !== "ObjectMethod" && (r === s || i.type !== "SpreadElement") && this.isAssignable(i));
        }
        case "ObjectProperty":
          return this.isAssignable(t.value);
        case "SpreadElement":
          return this.isAssignable(t.argument);
        case "ArrayExpression":
          return t.elements.every((s) => s === null || this.isAssignable(s));
        case "AssignmentExpression":
          return t.operator === "=";
        case "ParenthesizedExpression":
          return this.isAssignable(t.expression);
        case "MemberExpression":
        case "OptionalMemberExpression":
          return !e;
        default:
          return !1;
      }
    }
    toReferencedList(t, e) {
      return t;
    }
    toReferencedListDeep(t, e) {
      this.toReferencedList(t, e);
      for (const s of t)
        (s == null ? void 0 : s.type) === "ArrayExpression" && this.toReferencedListDeep(s.elements);
    }
    parseSpread(t) {
      const e = this.startNode();
      return this.next(), e.argument = this.parseMaybeAssignAllowIn(t, void 0), this.finishNode(e, "SpreadElement");
    }
    parseRestBinding() {
      const t = this.startNode();
      this.next();
      const e = this.parseBindingAtom();
      return e.type === "VoidPattern" && this.raise(m.UnexpectedVoidPattern, e), t.argument = e, this.finishNode(t, "RestElement");
    }
    parseBindingAtom() {
      switch (this.state.type) {
        case 0: {
          const t = this.startNode();
          return this.next(), t.elements = this.parseBindingList(3, 93, 1), this.finishNode(t, "ArrayPattern");
        }
        case 5:
          return this.parseObjectLike(8, !0);
        case 88:
          return this.parseVoidPattern(null);
      }
      return this.parseIdentifier();
    }
    parseBindingList(t, e, s) {
      const i = s & 1, r = [];
      let n = !0;
      for (; !this.eat(t); )
        if (n ? n = !1 : this.expect(12), i && this.match(12))
          r.push(null);
        else {
          if (this.eat(t))
            break;
          if (this.match(21)) {
            let c = this.parseRestBinding();
            if ((this.hasPlugin("flow") || s & 2) && (c = this.parseFunctionParamType(c)), r.push(c), !this.checkCommaAfterRest(e)) {
              this.expect(t);
              break;
            }
          } else {
            const c = [];
            if (s & 2)
              for (this.match(26) && this.hasPlugin("decorators") && this.raise(m.UnsupportedParameterDecorator, this.state.startLoc); this.match(26); )
                c.push(this.parseDecorator());
            r.push(this.parseBindingElement(s, c));
          }
        }
      return r;
    }
    parseBindingRestProperty(t) {
      return this.next(), this.hasPlugin("discardBinding") && this.match(88) ? (t.argument = this.parseVoidPattern(null), this.raise(m.UnexpectedVoidPattern, t.argument)) : t.argument = this.parseIdentifier(), this.checkCommaAfterRest(125), this.finishNode(t, "RestElement");
    }
    parseBindingProperty() {
      const {
        type: t,
        startLoc: e
      } = this.state;
      if (t === 21)
        return this.parseBindingRestProperty(this.startNode());
      const s = this.startNode();
      return t === 139 ? (this.expectPlugin("destructuringPrivate", e), this.classScope.usePrivateName(this.state.value, e), s.key = this.parsePrivateName()) : this.parsePropertyName(s), s.method = !1, this.parseObjPropValue(s, e, !1, !1, !0, !1);
    }
    parseBindingElement(t, e) {
      const s = this.parseMaybeDefault();
      return (this.hasPlugin("flow") || t & 2) && this.parseFunctionParamType(s), e.length && (s.decorators = e, this.resetStartLocationFromNode(s, e[0])), this.parseMaybeDefault(s.loc.start, s);
    }
    parseFunctionParamType(t) {
      return t;
    }
    parseMaybeDefault(t, e) {
      if (t ?? (t = this.state.startLoc), e = e ?? this.parseBindingAtom(), !this.eat(29)) return e;
      const s = this.startNodeAt(t);
      return e.type === "VoidPattern" && this.raise(m.VoidPatternInitializer, e), s.left = e, s.right = this.parseMaybeAssignAllowIn(), this.finishNode(s, "AssignmentPattern");
    }
    isValidLVal(t, e, s, i) {
      switch (t) {
        case "AssignmentPattern":
          return "left";
        case "RestElement":
          return "argument";
        case "ObjectProperty":
          return "value";
        case "ParenthesizedExpression":
          return "expression";
        case "ArrayPattern":
          return "elements";
        case "ObjectPattern":
          return "properties";
        case "VoidPattern":
          return !0;
        case "CallExpression":
          if (!e && !this.state.strict && this.optionFlags & 8192)
            return !0;
      }
      return !1;
    }
    isOptionalMemberExpression(t) {
      return t.type === "OptionalMemberExpression";
    }
    checkLVal(t, e, s = 64, i = !1, r = !1, n = !1, c = !1) {
      var p;
      const f = t.type;
      if (this.isObjectMethod(t)) return;
      const y = this.isOptionalMemberExpression(t);
      if (y || f === "MemberExpression") {
        y && (this.expectPlugin("optionalChainingAssign", t.loc.start), e.type !== "AssignmentExpression" && this.raise(m.InvalidLhsOptionalChaining, t, {
          ancestor: e
        })), s !== 64 && this.raise(m.InvalidPropertyBindingPattern, t);
        return;
      }
      if (f === "Identifier") {
        this.checkIdentifier(t, s, r);
        const {
          name: $
        } = t;
        i && (i.has($) ? this.raise(m.ParamDupe, t) : i.add($));
        return;
      } else f === "VoidPattern" && e.type === "CatchClause" && this.raise(m.VoidPatternCatchClauseParam, t);
      const T = Ts(t);
      c || (c = T.type === "CallExpression" && (T.callee.type === "Import" || T.callee.type === "Super"));
      const I = this.isValidLVal(f, c, !(n || (p = t.extra) != null && p.parenthesized) && e.type === "AssignmentExpression", s);
      if (I === !0) return;
      if (I === !1) {
        const $ = s === 64 ? m.InvalidLhs : m.InvalidLhsBinding;
        this.raise($, t, {
          ancestor: e
        });
        return;
      }
      let E, M;
      typeof I == "string" ? (E = I, M = f === "ParenthesizedExpression") : [E, M] = I;
      const X = f === "ArrayPattern" || f === "ObjectPattern" ? {
        type: f
      } : e, oe = t[E];
      if (Array.isArray(oe))
        for (const $ of oe)
          $ && this.checkLVal($, X, s, i, r, M, !0);
      else oe && this.checkLVal(oe, X, s, i, r, M, c);
    }
    checkIdentifier(t, e, s = !1) {
      this.state.strict && (s ? $t(t.name, this.inModule) : et(t.name)) && (e === 64 ? this.raise(m.StrictEvalArguments, t, {
        referenceName: t.name
      }) : this.raise(m.StrictEvalArgumentsBinding, t, {
        bindingName: t.name
      })), e & 8192 && t.name === "let" && this.raise(m.LetInLexicalBinding, t), e & 64 || this.declareNameFromIdentifier(t, e);
    }
    declareNameFromIdentifier(t, e) {
      this.scope.declareName(t.name, e, t.loc.start);
    }
    checkToRestConversion(t, e) {
      switch (t.type) {
        case "ParenthesizedExpression":
          this.checkToRestConversion(t.expression, e);
          break;
        case "Identifier":
        case "MemberExpression":
          break;
        case "ArrayExpression":
        case "ObjectExpression":
          if (e) break;
        default:
          this.raise(m.InvalidRestAssignmentPattern, t);
      }
    }
    checkCommaAfterRest(t) {
      return this.match(12) ? (this.raise(this.lookaheadCharCode() === t ? m.RestTrailingComma : m.ElementAfterRest, this.state.startLoc), !0) : !1;
    }
  }
  const ws = /in(?:stanceof)?|as|satisfies/y;
  function Lr(a) {
    if (a == null)
      throw new Error(`Unexpected ${a} value.`);
    return a;
  }
  function Gs(a) {
    if (!a)
      throw new Error("Assert fail");
  }
  const O = U`typescript`({
    AbstractMethodHasImplementation: ({
      methodName: a
    }) => `Method '${a}' cannot have an implementation because it is marked abstract.`,
    AbstractPropertyHasInitializer: ({
      propertyName: a
    }) => `Property '${a}' cannot have an initializer because it is marked abstract.`,
    AccessorCannotBeOptional: "An 'accessor' property cannot be declared optional.",
    AccessorCannotDeclareThisParameter: "'get' and 'set' accessors cannot declare 'this' parameters.",
    AccessorCannotHaveTypeParameters: "An accessor cannot have type parameters.",
    ClassMethodHasDeclare: "Class methods cannot have the 'declare' modifier.",
    ClassMethodHasReadonly: "Class methods cannot have the 'readonly' modifier.",
    ConstInitializerMustBeStringOrNumericLiteralOrLiteralEnumReference: "A 'const' initializer in an ambient context must be a string or numeric literal or literal enum reference.",
    ConstructorHasTypeParameters: "Type parameters cannot appear on a constructor declaration.",
    DeclareAccessor: ({
      kind: a
    }) => `'declare' is not allowed in ${a}ters.`,
    DeclareClassFieldHasInitializer: "Initializers are not allowed in ambient contexts.",
    DeclareFunctionHasImplementation: "An implementation cannot be declared in ambient contexts.",
    DuplicateAccessibilityModifier: ({
      modifier: a
    }) => `Accessibility modifier already seen: '${a}'.`,
    DuplicateModifier: ({
      modifier: a
    }) => `Duplicate modifier: '${a}'.`,
    EmptyHeritageClauseType: ({
      token: a
    }) => `'${a}' list cannot be empty.`,
    EmptyTypeArguments: "Type argument list cannot be empty.",
    EmptyTypeParameters: "Type parameter list cannot be empty.",
    ExpectedAmbientAfterExportDeclare: "'export declare' must be followed by an ambient declaration.",
    ImportAliasHasImportType: "An import alias can not use 'import type'.",
    ImportReflectionHasImportType: "An `import module` declaration can not use `type` modifier",
    IncompatibleModifiers: ({
      modifiers: a
    }) => `'${a[0]}' modifier cannot be used with '${a[1]}' modifier.`,
    IndexSignatureHasAbstract: "Index signatures cannot have the 'abstract' modifier.",
    IndexSignatureHasAccessibility: ({
      modifier: a
    }) => `Index signatures cannot have an accessibility modifier ('${a}').`,
    IndexSignatureHasDeclare: "Index signatures cannot have the 'declare' modifier.",
    IndexSignatureHasOverride: "'override' modifier cannot appear on an index signature.",
    IndexSignatureHasStatic: "Index signatures cannot have the 'static' modifier.",
    InitializerNotAllowedInAmbientContext: "Initializers are not allowed in ambient contexts.",
    InvalidHeritageClauseType: ({
      token: a
    }) => `'${a}' list can only include identifiers or qualified-names with optional type arguments.`,
    InvalidModifierOnAwaitUsingDeclaration: (a) => `'${a}' modifier cannot appear on an await using declaration.`,
    InvalidModifierOnTypeMember: ({
      modifier: a
    }) => `'${a}' modifier cannot appear on a type member.`,
    InvalidModifierOnTypeParameter: ({
      modifier: a
    }) => `'${a}' modifier cannot appear on a type parameter.`,
    InvalidModifierOnTypeParameterPositions: ({
      modifier: a
    }) => `'${a}' modifier can only appear on a type parameter of a class, interface or type alias.`,
    InvalidModifierOnUsingDeclaration: (a) => `'${a}' modifier cannot appear on a using declaration.`,
    InvalidModifiersOrder: ({
      orderedModifiers: a
    }) => `'${a[0]}' modifier must precede '${a[1]}' modifier.`,
    InvalidPropertyAccessAfterInstantiationExpression: "Invalid property access after an instantiation expression. You can either wrap the instantiation expression in parentheses, or delete the type arguments.",
    InvalidTupleMemberLabel: "Tuple members must be labeled with a simple identifier.",
    MissingInterfaceName: "'interface' declarations must be followed by an identifier.",
    NonAbstractClassHasAbstractMethod: "Abstract methods can only appear within an abstract class.",
    NonClassMethodPropertyHasAbstractModifier: "'abstract' modifier can only appear on a class, method, or property declaration.",
    OptionalTypeBeforeRequired: "A required element cannot follow an optional element.",
    OverrideNotInSubClass: "This member cannot have an 'override' modifier because its containing class does not extend another class.",
    PatternIsOptional: "A binding pattern parameter cannot be optional in an implementation signature.",
    PrivateElementHasAbstract: "Private elements cannot have the 'abstract' modifier.",
    PrivateElementHasAccessibility: ({
      modifier: a
    }) => `Private elements cannot have an accessibility modifier ('${a}').`,
    ReadonlyForMethodSignature: "'readonly' modifier can only appear on a property declaration or index signature.",
    ReservedArrowTypeParam: "This syntax is reserved in files with the .mts or .cts extension. Add a trailing comma, as in `<T,>() => ...`.",
    ReservedTypeAssertion: "This syntax is reserved in files with the .mts or .cts extension. Use an `as` expression instead.",
    SetAccessorCannotHaveOptionalParameter: "A 'set' accessor cannot have an optional parameter.",
    SetAccessorCannotHaveRestParameter: "A 'set' accessor cannot have rest parameter.",
    SetAccessorCannotHaveReturnType: "A 'set' accessor cannot have a return type annotation.",
    SingleTypeParameterWithoutTrailingComma: ({
      typeParameterName: a
    }) => `Single type parameter ${a} should have a trailing comma. Example usage: <${a},>.`,
    StaticBlockCannotHaveModifier: "Static class blocks cannot have any modifier.",
    TupleOptionalAfterType: "A labeled tuple optional element must be declared using a question mark after the name and before the colon (`name?: type`), rather than after the type (`name: type?`).",
    TypeAnnotationAfterAssign: "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.",
    TypeImportCannotSpecifyDefaultAndNamed: "A type-only import can specify a default import or named bindings, but not both.",
    TypeModifierIsUsedInTypeExports: "The 'type' modifier cannot be used on a named export when 'export type' is used on its export statement.",
    TypeModifierIsUsedInTypeImports: "The 'type' modifier cannot be used on a named import when 'import type' is used on its import statement.",
    UnexpectedParameterModifier: "A parameter property is only allowed in a constructor implementation.",
    UnexpectedReadonly: "'readonly' type modifier is only permitted on array and tuple literal types.",
    UnexpectedTypeAnnotation: "Did not expect a type annotation here.",
    UnexpectedTypeCastInParameter: "Unexpected type cast in parameter position.",
    UnsupportedImportTypeArgument: "Argument in a type import must be a string literal.",
    UnsupportedParameterPropertyKind: "A parameter property may not be declared using a binding pattern.",
    UnsupportedSignatureParameterKind: ({
      type: a
    }) => `Name in a signature must be an Identifier, ObjectPattern or ArrayPattern, instead got ${a}.`,
    UsingDeclarationInAmbientContext: (a) => `'${a}' declarations are not allowed in ambient contexts.`
  });
  function Dr(a) {
    switch (a) {
      case "any":
        return "TSAnyKeyword";
      case "boolean":
        return "TSBooleanKeyword";
      case "bigint":
        return "TSBigIntKeyword";
      case "never":
        return "TSNeverKeyword";
      case "number":
        return "TSNumberKeyword";
      case "object":
        return "TSObjectKeyword";
      case "string":
        return "TSStringKeyword";
      case "symbol":
        return "TSSymbolKeyword";
      case "undefined":
        return "TSUndefinedKeyword";
      case "unknown":
        return "TSUnknownKeyword";
      default:
        return;
    }
  }
  function Js(a) {
    return a === "private" || a === "public" || a === "protected";
  }
  function Or(a) {
    return a === "in" || a === "out";
  }
  var Mr = (a) => class extends a {
    constructor(...e) {
      super(...e), this.tsParseInOutModifiers = this.tsParseModifiers.bind(this, {
        allowedModifiers: ["in", "out"],
        disallowedModifiers: ["const", "public", "private", "protected", "readonly", "declare", "abstract", "override"],
        errorTemplate: O.InvalidModifierOnTypeParameter
      }), this.tsParseConstModifier = this.tsParseModifiers.bind(this, {
        allowedModifiers: ["const"],
        disallowedModifiers: ["in", "out"],
        errorTemplate: O.InvalidModifierOnTypeParameterPositions
      }), this.tsParseInOutConstModifiers = this.tsParseModifiers.bind(this, {
        allowedModifiers: ["in", "out", "const"],
        disallowedModifiers: ["public", "private", "protected", "readonly", "declare", "abstract", "override"],
        errorTemplate: O.InvalidModifierOnTypeParameter
      });
    }
    getScopeHandler() {
      return Qt;
    }
    tsIsIdentifier() {
      return K(this.state.type);
    }
    tsTokenCanFollowModifier() {
      return this.match(0) || this.match(5) || this.match(55) || this.match(21) || this.match(139) || this.isLiteralPropertyName();
    }
    tsNextTokenOnSameLineAndCanFollowModifier() {
      return this.next(), this.hasPrecedingLineBreak() ? !1 : this.tsTokenCanFollowModifier();
    }
    tsNextTokenCanFollowModifier() {
      return this.match(106) ? (this.next(), this.tsTokenCanFollowModifier()) : this.tsNextTokenOnSameLineAndCanFollowModifier();
    }
    tsParseModifier(e, s, i) {
      if (!K(this.state.type) && this.state.type !== 58 && this.state.type !== 75)
        return;
      const r = this.state.value;
      if (e.includes(r)) {
        if (i && this.match(106) || s && this.tsIsStartOfStaticBlocks())
          return;
        if (this.tsTryParse(this.tsNextTokenCanFollowModifier.bind(this)))
          return r;
      }
    }
    tsParseModifiers({
      allowedModifiers: e,
      disallowedModifiers: s,
      stopOnStartOfClassStaticBlock: i,
      errorTemplate: r = O.InvalidModifierOnTypeMember
    }, n) {
      const c = (f, y, T, I) => {
        y === T && n[I] && this.raise(O.InvalidModifiersOrder, f, {
          orderedModifiers: [T, I]
        });
      }, p = (f, y, T, I) => {
        (n[T] && y === I || n[I] && y === T) && this.raise(O.IncompatibleModifiers, f, {
          modifiers: [T, I]
        });
      };
      for (; ; ) {
        const {
          startLoc: f
        } = this.state, y = this.tsParseModifier(e.concat(s ?? []), i, n.static);
        if (!y) break;
        Js(y) ? n.accessibility ? this.raise(O.DuplicateAccessibilityModifier, f, {
          modifier: y
        }) : (c(f, y, y, "override"), c(f, y, y, "static"), c(f, y, y, "readonly"), n.accessibility = y) : Or(y) ? (n[y] && this.raise(O.DuplicateModifier, f, {
          modifier: y
        }), n[y] = !0, c(f, y, "in", "out")) : (hasOwnProperty.call(n, y) ? this.raise(O.DuplicateModifier, f, {
          modifier: y
        }) : (c(f, y, "static", "readonly"), c(f, y, "static", "override"), c(f, y, "override", "readonly"), c(f, y, "abstract", "override"), p(f, y, "declare", "override"), p(f, y, "static", "abstract")), n[y] = !0), s != null && s.includes(y) && this.raise(r, f, {
          modifier: y
        });
      }
    }
    tsIsListTerminator(e) {
      switch (e) {
        case "EnumMembers":
        case "TypeMembers":
          return this.match(8);
        case "HeritageClauseElement":
          return this.match(5);
        case "TupleElementTypes":
          return this.match(3);
        case "TypeParametersOrArguments":
          return this.match(48);
      }
    }
    tsParseList(e, s) {
      const i = [];
      for (; !this.tsIsListTerminator(e); )
        i.push(s());
      return i;
    }
    tsParseDelimitedList(e, s, i) {
      return Lr(this.tsParseDelimitedListWorker(e, s, !0, i));
    }
    tsParseDelimitedListWorker(e, s, i, r) {
      const n = [];
      let c = -1;
      for (; !this.tsIsListTerminator(e); ) {
        c = -1;
        const p = s();
        if (p == null)
          return;
        if (n.push(p), this.eat(12)) {
          c = this.state.lastTokStartLoc.index;
          continue;
        }
        if (this.tsIsListTerminator(e))
          break;
        i && this.expect(12);
        return;
      }
      return r && (r.value = c), n;
    }
    tsParseBracketedList(e, s, i, r, n) {
      r || (i ? this.expect(0) : this.expect(47));
      const c = this.tsParseDelimitedList(e, s, n);
      return i ? this.expect(3) : this.expect(48), c;
    }
    tsParseImportType() {
      const e = this.startNode();
      return this.expect(83), this.expect(10), this.match(134) ? e.argument = this.parseStringLiteral(this.state.value) : (this.raise(O.UnsupportedImportTypeArgument, this.state.startLoc), e.argument = super.parseExprAtom()), this.eat(12) ? e.options = this.tsParseImportTypeOptions() : e.options = null, this.expect(11), this.eat(16) && (e.qualifier = this.tsParseEntityName(3)), this.match(47) && (e.typeParameters = this.tsParseTypeArguments()), this.finishNode(e, "TSImportType");
    }
    tsParseImportTypeOptions() {
      const e = this.startNode();
      this.expect(5);
      const s = this.startNode();
      return this.isContextual(76) ? (s.method = !1, s.key = this.parseIdentifier(!0), s.computed = !1, s.shorthand = !1) : this.unexpected(null, 76), this.expect(14), s.value = this.tsParseImportTypeWithPropertyValue(), e.properties = [this.finishObjectProperty(s)], this.eat(12), this.expect(8), this.finishNode(e, "ObjectExpression");
    }
    tsParseImportTypeWithPropertyValue() {
      const e = this.startNode(), s = [];
      for (this.expect(5); !this.match(8); ) {
        const i = this.state.type;
        K(i) || i === 134 ? s.push(super.parsePropertyDefinition(null)) : this.unexpected(), this.eat(12);
      }
      return e.properties = s, this.next(), this.finishNode(e, "ObjectExpression");
    }
    tsParseEntityName(e) {
      let s;
      if (e & 1 && this.match(78))
        if (e & 2)
          s = this.parseIdentifier(!0);
        else {
          const i = this.startNode();
          this.next(), s = this.finishNode(i, "ThisExpression");
        }
      else
        s = this.parseIdentifier(!!(e & 1));
      for (; this.eat(16); ) {
        const i = this.startNodeAtNode(s);
        i.left = s, i.right = this.parseIdentifier(!!(e & 1)), s = this.finishNode(i, "TSQualifiedName");
      }
      return s;
    }
    tsParseTypeReference() {
      const e = this.startNode();
      return e.typeName = this.tsParseEntityName(1), !this.hasPrecedingLineBreak() && this.match(47) && (e.typeParameters = this.tsParseTypeArguments()), this.finishNode(e, "TSTypeReference");
    }
    tsParseThisTypePredicate(e) {
      this.next();
      const s = this.startNodeAtNode(e);
      return s.parameterName = e, s.typeAnnotation = this.tsParseTypeAnnotation(!1), s.asserts = !1, this.finishNode(s, "TSTypePredicate");
    }
    tsParseThisTypeNode() {
      const e = this.startNode();
      return this.next(), this.finishNode(e, "TSThisType");
    }
    tsParseTypeQuery() {
      const e = this.startNode();
      return this.expect(87), this.match(83) ? e.exprName = this.tsParseImportType() : e.exprName = this.tsParseEntityName(3), !this.hasPrecedingLineBreak() && this.match(47) && (e.typeParameters = this.tsParseTypeArguments()), this.finishNode(e, "TSTypeQuery");
    }
    tsParseTypeParameter(e) {
      const s = this.startNode();
      return e(s), s.name = this.tsParseTypeParameterName(), s.constraint = this.tsEatThenParseType(81), s.default = this.tsEatThenParseType(29), this.finishNode(s, "TSTypeParameter");
    }
    tsTryParseTypeParameters(e) {
      if (this.match(47))
        return this.tsParseTypeParameters(e);
    }
    tsParseTypeParameters(e) {
      const s = this.startNode();
      this.match(47) || this.match(143) ? this.next() : this.unexpected();
      const i = {
        value: -1
      };
      return s.params = this.tsParseBracketedList("TypeParametersOrArguments", this.tsParseTypeParameter.bind(this, e), !1, !0, i), s.params.length === 0 && this.raise(O.EmptyTypeParameters, s), i.value !== -1 && this.addExtra(s, "trailingComma", i.value), this.finishNode(s, "TSTypeParameterDeclaration");
    }
    tsFillSignature(e, s) {
      const i = e === 19, r = "parameters", n = "typeAnnotation";
      s.typeParameters = this.tsTryParseTypeParameters(this.tsParseConstModifier), this.expect(10), s[r] = this.tsParseBindingListForSignature(), i ? s[n] = this.tsParseTypeOrTypePredicateAnnotation(e) : this.match(e) && (s[n] = this.tsParseTypeOrTypePredicateAnnotation(e));
    }
    tsParseBindingListForSignature() {
      const e = super.parseBindingList(11, 41, 2);
      for (const s of e) {
        const {
          type: i
        } = s;
        (i === "AssignmentPattern" || i === "TSParameterProperty") && this.raise(O.UnsupportedSignatureParameterKind, s, {
          type: i
        });
      }
      return e;
    }
    tsParseTypeMemberSemicolon() {
      !this.eat(12) && !this.isLineTerminator() && this.expect(13);
    }
    tsParseSignatureMember(e, s) {
      return this.tsFillSignature(14, s), this.tsParseTypeMemberSemicolon(), this.finishNode(s, e);
    }
    tsIsUnambiguouslyIndexSignature() {
      return this.next(), K(this.state.type) ? (this.next(), this.match(14)) : !1;
    }
    tsTryParseIndexSignature(e) {
      if (!(this.match(0) && this.tsLookAhead(this.tsIsUnambiguouslyIndexSignature.bind(this))))
        return;
      this.expect(0);
      const s = this.parseIdentifier();
      s.typeAnnotation = this.tsParseTypeAnnotation(), this.resetEndLocation(s), this.expect(3), e.parameters = [s];
      const i = this.tsTryParseTypeAnnotation();
      return i && (e.typeAnnotation = i), this.tsParseTypeMemberSemicolon(), this.finishNode(e, "TSIndexSignature");
    }
    tsParsePropertyOrMethodSignature(e, s) {
      if (this.eat(17) && (e.optional = !0), this.match(10) || this.match(47)) {
        s && this.raise(O.ReadonlyForMethodSignature, e);
        const i = e;
        i.kind && this.match(47) && this.raise(O.AccessorCannotHaveTypeParameters, this.state.curPosition()), this.tsFillSignature(14, i), this.tsParseTypeMemberSemicolon();
        const r = "parameters", n = "typeAnnotation";
        if (i.kind === "get")
          i[r].length > 0 && (this.raise(m.BadGetterArity, this.state.curPosition()), this.isThisParam(i[r][0]) && this.raise(O.AccessorCannotDeclareThisParameter, this.state.curPosition()));
        else if (i.kind === "set") {
          if (i[r].length !== 1)
            this.raise(m.BadSetterArity, this.state.curPosition());
          else {
            const c = i[r][0];
            this.isThisParam(c) && this.raise(O.AccessorCannotDeclareThisParameter, this.state.curPosition()), c.type === "Identifier" && c.optional && this.raise(O.SetAccessorCannotHaveOptionalParameter, this.state.curPosition()), c.type === "RestElement" && this.raise(O.SetAccessorCannotHaveRestParameter, this.state.curPosition());
          }
          i[n] && this.raise(O.SetAccessorCannotHaveReturnType, i[n]);
        } else
          i.kind = "method";
        return this.finishNode(i, "TSMethodSignature");
      } else {
        const i = e;
        s && (i.readonly = !0);
        const r = this.tsTryParseTypeAnnotation();
        return r && (i.typeAnnotation = r), this.tsParseTypeMemberSemicolon(), this.finishNode(i, "TSPropertySignature");
      }
    }
    tsParseTypeMember() {
      const e = this.startNode();
      if (this.match(10) || this.match(47))
        return this.tsParseSignatureMember("TSCallSignatureDeclaration", e);
      if (this.match(77)) {
        const i = this.startNode();
        return this.next(), this.match(10) || this.match(47) ? this.tsParseSignatureMember("TSConstructSignatureDeclaration", e) : (e.key = this.createIdentifier(i, "new"), this.tsParsePropertyOrMethodSignature(e, !1));
      }
      this.tsParseModifiers({
        allowedModifiers: ["readonly"],
        disallowedModifiers: ["declare", "abstract", "private", "protected", "public", "static", "override"]
      }, e);
      const s = this.tsTryParseIndexSignature(e);
      return s || (super.parsePropertyName(e), !e.computed && e.key.type === "Identifier" && (e.key.name === "get" || e.key.name === "set") && this.tsTokenCanFollowModifier() && (e.kind = e.key.name, super.parsePropertyName(e), !this.match(10) && !this.match(47) && this.unexpected(null, 10)), this.tsParsePropertyOrMethodSignature(e, !!e.readonly));
    }
    tsParseTypeLiteral() {
      const e = this.startNode();
      return e.members = this.tsParseObjectTypeMembers(), this.finishNode(e, "TSTypeLiteral");
    }
    tsParseObjectTypeMembers() {
      this.expect(5);
      const e = this.tsParseList("TypeMembers", this.tsParseTypeMember.bind(this));
      return this.expect(8), e;
    }
    tsIsStartOfMappedType() {
      return this.next(), this.eat(53) ? this.isContextual(122) : (this.isContextual(122) && this.next(), !this.match(0) || (this.next(), !this.tsIsIdentifier()) ? !1 : (this.next(), this.match(58)));
    }
    tsParseMappedType() {
      const e = this.startNode();
      this.expect(5), this.match(53) ? (e.readonly = this.state.value, this.next(), this.expectContextual(122)) : this.eatContextual(122) && (e.readonly = !0), this.expect(0);
      const s = this.startNode();
      return s.name = this.tsParseTypeParameterName(), s.constraint = this.tsExpectThenParseType(58), e.typeParameter = this.finishNode(s, "TSTypeParameter"), e.nameType = this.eatContextual(93) ? this.tsParseType() : null, this.expect(3), this.match(53) ? (e.optional = this.state.value, this.next(), this.expect(17)) : this.eat(17) && (e.optional = !0), e.typeAnnotation = this.tsTryParseType(), this.semicolon(), this.expect(8), this.finishNode(e, "TSMappedType");
    }
    tsParseTupleType() {
      const e = this.startNode();
      e.elementTypes = this.tsParseBracketedList("TupleElementTypes", this.tsParseTupleElementType.bind(this), !0, !1);
      let s = !1;
      return e.elementTypes.forEach((i) => {
        const {
          type: r
        } = i;
        s && r !== "TSRestType" && r !== "TSOptionalType" && !(r === "TSNamedTupleMember" && i.optional) && this.raise(O.OptionalTypeBeforeRequired, i), s || (s = r === "TSNamedTupleMember" && i.optional || r === "TSOptionalType");
      }), this.finishNode(e, "TSTupleType");
    }
    tsParseTupleElementType() {
      const e = this.state.startLoc, s = this.eat(21), {
        startLoc: i
      } = this.state;
      let r, n, c, p;
      const y = G(this.state.type) ? this.lookaheadCharCode() : null;
      if (y === 58)
        r = !0, c = !1, n = this.parseIdentifier(!0), this.expect(14), p = this.tsParseType();
      else if (y === 63) {
        c = !0;
        const T = this.state.value, I = this.tsParseNonArrayType();
        this.lookaheadCharCode() === 58 ? (r = !0, n = this.createIdentifier(this.startNodeAt(i), T), this.expect(17), this.expect(14), p = this.tsParseType()) : (r = !1, p = I, this.expect(17));
      } else
        p = this.tsParseType(), c = this.eat(17), r = this.eat(14);
      if (r) {
        let T;
        n ? (T = this.startNodeAt(i), T.optional = c, T.label = n, T.elementType = p, this.eat(17) && (T.optional = !0, this.raise(O.TupleOptionalAfterType, this.state.lastTokStartLoc))) : (T = this.startNodeAt(i), T.optional = c, this.raise(O.InvalidTupleMemberLabel, p), T.label = p, T.elementType = this.tsParseType()), p = this.finishNode(T, "TSNamedTupleMember");
      } else if (c) {
        const T = this.startNodeAt(i);
        T.typeAnnotation = p, p = this.finishNode(T, "TSOptionalType");
      }
      if (s) {
        const T = this.startNodeAt(e);
        T.typeAnnotation = p, p = this.finishNode(T, "TSRestType");
      }
      return p;
    }
    tsParseParenthesizedType() {
      const e = this.startNode();
      return this.expect(10), e.typeAnnotation = this.tsParseType(), this.expect(11), this.finishNode(e, "TSParenthesizedType");
    }
    tsParseFunctionOrConstructorType(e, s) {
      const i = this.startNode();
      return e === "TSConstructorType" && (i.abstract = !!s, s && this.next(), this.next()), this.tsInAllowConditionalTypesContext(() => this.tsFillSignature(19, i)), this.finishNode(i, e);
    }
    tsParseLiteralTypeNode() {
      const e = this.startNode();
      switch (this.state.type) {
        case 135:
        case 136:
        case 134:
        case 85:
        case 86:
          e.literal = super.parseExprAtom();
          break;
        default:
          this.unexpected();
      }
      return this.finishNode(e, "TSLiteralType");
    }
    tsParseTemplateLiteralType() {
      const e = this.startNode();
      return e.literal = super.parseTemplate(!1), this.finishNode(e, "TSLiteralType");
    }
    parseTemplateSubstitution() {
      return this.state.inType ? this.tsParseType() : super.parseTemplateSubstitution();
    }
    tsParseThisTypeOrThisTypePredicate() {
      const e = this.tsParseThisTypeNode();
      return this.isContextual(116) && !this.hasPrecedingLineBreak() ? this.tsParseThisTypePredicate(e) : e;
    }
    tsParseNonArrayType() {
      switch (this.state.type) {
        case 134:
        case 135:
        case 136:
        case 85:
        case 86:
          return this.tsParseLiteralTypeNode();
        case 53:
          if (this.state.value === "-") {
            const e = this.startNode(), s = this.lookahead();
            return s.type !== 135 && s.type !== 136 && this.unexpected(), e.literal = this.parseMaybeUnary(), this.finishNode(e, "TSLiteralType");
          }
          break;
        case 78:
          return this.tsParseThisTypeOrThisTypePredicate();
        case 87:
          return this.tsParseTypeQuery();
        case 83:
          return this.tsParseImportType();
        case 5:
          return this.tsLookAhead(this.tsIsStartOfMappedType.bind(this)) ? this.tsParseMappedType() : this.tsParseTypeLiteral();
        case 0:
          return this.tsParseTupleType();
        case 10:
          return this.tsParseParenthesizedType();
        case 25:
        case 24:
          return this.tsParseTemplateLiteralType();
        default: {
          const {
            type: e
          } = this.state;
          if (K(e) || e === 88 || e === 84) {
            const s = e === 88 ? "TSVoidKeyword" : e === 84 ? "TSNullKeyword" : Dr(this.state.value);
            if (s !== void 0 && this.lookaheadCharCode() !== 46) {
              const i = this.startNode();
              return this.next(), this.finishNode(i, s);
            }
            return this.tsParseTypeReference();
          }
        }
      }
      throw this.unexpected();
    }
    tsParseArrayTypeOrHigher() {
      const {
        startLoc: e
      } = this.state;
      let s = this.tsParseNonArrayType();
      for (; !this.hasPrecedingLineBreak() && this.eat(0); )
        if (this.match(3)) {
          const i = this.startNodeAt(e);
          i.elementType = s, this.expect(3), s = this.finishNode(i, "TSArrayType");
        } else {
          const i = this.startNodeAt(e);
          i.objectType = s, i.indexType = this.tsParseType(), this.expect(3), s = this.finishNode(i, "TSIndexedAccessType");
        }
      return s;
    }
    tsParseTypeOperator() {
      const e = this.startNode(), s = this.state.value;
      return this.next(), e.operator = s, e.typeAnnotation = this.tsParseTypeOperatorOrHigher(), s === "readonly" && this.tsCheckTypeAnnotationForReadOnly(e), this.finishNode(e, "TSTypeOperator");
    }
    tsCheckTypeAnnotationForReadOnly(e) {
      switch (e.typeAnnotation.type) {
        case "TSTupleType":
        case "TSArrayType":
          return;
        default:
          this.raise(O.UnexpectedReadonly, e);
      }
    }
    tsParseInferType() {
      const e = this.startNode();
      this.expectContextual(115);
      const s = this.startNode();
      return s.name = this.tsParseTypeParameterName(), s.constraint = this.tsTryParse(() => this.tsParseConstraintForInferType()), e.typeParameter = this.finishNode(s, "TSTypeParameter"), this.finishNode(e, "TSInferType");
    }
    tsParseConstraintForInferType() {
      if (this.eat(81)) {
        const e = this.tsInDisallowConditionalTypesContext(() => this.tsParseType());
        if (this.state.inDisallowConditionalTypesContext || !this.match(17))
          return e;
      }
    }
    tsParseTypeOperatorOrHigher() {
      return ut(this.state.type) && !this.state.containsEsc ? this.tsParseTypeOperator() : this.isContextual(115) ? this.tsParseInferType() : this.tsInAllowConditionalTypesContext(() => this.tsParseArrayTypeOrHigher());
    }
    tsParseUnionOrIntersectionType(e, s, i) {
      const r = this.startNode(), n = this.eat(i), c = [];
      do
        c.push(s());
      while (this.eat(i));
      return c.length === 1 && !n ? c[0] : (r.types = c, this.finishNode(r, e));
    }
    tsParseIntersectionTypeOrHigher() {
      return this.tsParseUnionOrIntersectionType("TSIntersectionType", this.tsParseTypeOperatorOrHigher.bind(this), 45);
    }
    tsParseUnionTypeOrHigher() {
      return this.tsParseUnionOrIntersectionType("TSUnionType", this.tsParseIntersectionTypeOrHigher.bind(this), 43);
    }
    tsIsStartOfFunctionType() {
      return this.match(47) ? !0 : this.match(10) && this.tsLookAhead(this.tsIsUnambiguouslyStartOfFunctionType.bind(this));
    }
    tsSkipParameterStart() {
      if (K(this.state.type) || this.match(78))
        return this.next(), !0;
      if (this.match(5)) {
        const {
          errors: e
        } = this.state, s = e.length;
        try {
          return this.parseObjectLike(8, !0), e.length === s;
        } catch {
          return !1;
        }
      }
      if (this.match(0)) {
        this.next();
        const {
          errors: e
        } = this.state, s = e.length;
        try {
          return super.parseBindingList(3, 93, 1), e.length === s;
        } catch {
          return !1;
        }
      }
      return !1;
    }
    tsIsUnambiguouslyStartOfFunctionType() {
      return this.next(), !!(this.match(11) || this.match(21) || this.tsSkipParameterStart() && (this.match(14) || this.match(12) || this.match(17) || this.match(29) || this.match(11) && (this.next(), this.match(19))));
    }
    tsParseTypeOrTypePredicateAnnotation(e) {
      return this.tsInType(() => {
        const s = this.startNode();
        this.expect(e);
        const i = this.startNode(), r = !!this.tsTryParse(this.tsParseTypePredicateAsserts.bind(this));
        if (r && this.match(78)) {
          let p = this.tsParseThisTypeOrThisTypePredicate();
          return p.type === "TSThisType" ? (i.parameterName = p, i.asserts = !0, i.typeAnnotation = null, p = this.finishNode(i, "TSTypePredicate")) : (this.resetStartLocationFromNode(p, i), p.asserts = !0), s.typeAnnotation = p, this.finishNode(s, "TSTypeAnnotation");
        }
        const n = this.tsIsIdentifier() && this.tsTryParse(this.tsParseTypePredicatePrefix.bind(this));
        if (!n)
          return r ? (i.parameterName = this.parseIdentifier(), i.asserts = r, i.typeAnnotation = null, s.typeAnnotation = this.finishNode(i, "TSTypePredicate"), this.finishNode(s, "TSTypeAnnotation")) : this.tsParseTypeAnnotation(!1, s);
        const c = this.tsParseTypeAnnotation(!1);
        return i.parameterName = n, i.typeAnnotation = c, i.asserts = r, s.typeAnnotation = this.finishNode(i, "TSTypePredicate"), this.finishNode(s, "TSTypeAnnotation");
      });
    }
    tsTryParseTypeOrTypePredicateAnnotation() {
      if (this.match(14))
        return this.tsParseTypeOrTypePredicateAnnotation(14);
    }
    tsTryParseTypeAnnotation() {
      if (this.match(14))
        return this.tsParseTypeAnnotation();
    }
    tsTryParseType() {
      return this.tsEatThenParseType(14);
    }
    tsParseTypePredicatePrefix() {
      const e = this.parseIdentifier();
      if (this.isContextual(116) && !this.hasPrecedingLineBreak())
        return this.next(), e;
    }
    tsParseTypePredicateAsserts() {
      if (this.state.type !== 109)
        return !1;
      const e = this.state.containsEsc;
      return this.next(), !K(this.state.type) && !this.match(78) ? !1 : (e && this.raise(m.InvalidEscapedReservedWord, this.state.lastTokStartLoc, {
        reservedWord: "asserts"
      }), !0);
    }
    tsParseTypeAnnotation(e = !0, s = this.startNode()) {
      return this.tsInType(() => {
        e && this.expect(14), s.typeAnnotation = this.tsParseType();
      }), this.finishNode(s, "TSTypeAnnotation");
    }
    tsParseType() {
      Gs(this.state.inType);
      const e = this.tsParseNonConditionalType();
      if (this.state.inDisallowConditionalTypesContext || this.hasPrecedingLineBreak() || !this.eat(81))
        return e;
      const s = this.startNodeAtNode(e);
      return s.checkType = e, s.extendsType = this.tsInDisallowConditionalTypesContext(() => this.tsParseNonConditionalType()), this.expect(17), s.trueType = this.tsInAllowConditionalTypesContext(() => this.tsParseType()), this.expect(14), s.falseType = this.tsInAllowConditionalTypesContext(() => this.tsParseType()), this.finishNode(s, "TSConditionalType");
    }
    isAbstractConstructorSignature() {
      return this.isContextual(124) && this.isLookaheadContextual("new");
    }
    tsParseNonConditionalType() {
      return this.tsIsStartOfFunctionType() ? this.tsParseFunctionOrConstructorType("TSFunctionType") : this.match(77) ? this.tsParseFunctionOrConstructorType("TSConstructorType") : this.isAbstractConstructorSignature() ? this.tsParseFunctionOrConstructorType("TSConstructorType", !0) : this.tsParseUnionTypeOrHigher();
    }
    tsParseTypeAssertion() {
      this.getPluginOption("typescript", "disallowAmbiguousJSXLike") && this.raise(O.ReservedTypeAssertion, this.state.startLoc);
      const e = this.startNode();
      return e.typeAnnotation = this.tsInType(() => (this.next(), this.match(75) ? this.tsParseTypeReference() : this.tsParseType())), this.expect(48), e.expression = this.parseMaybeUnary(), this.finishNode(e, "TSTypeAssertion");
    }
    tsParseHeritageClause(e) {
      const s = this.state.startLoc, i = this.tsParseDelimitedList("HeritageClauseElement", () => {
        const r = this.startNode();
        return r.expression = this.tsParseEntityName(3), this.match(47) && (r.typeParameters = this.tsParseTypeArguments()), this.finishNode(r, "TSExpressionWithTypeArguments");
      });
      return i.length || this.raise(O.EmptyHeritageClauseType, s, {
        token: e
      }), i;
    }
    tsParseInterfaceDeclaration(e, s = {}) {
      if (this.hasFollowingLineBreak()) return null;
      this.expectContextual(129), s.declare && (e.declare = !0), K(this.state.type) ? (e.id = this.parseIdentifier(), this.checkIdentifier(e.id, 130)) : (e.id = null, this.raise(O.MissingInterfaceName, this.state.startLoc)), e.typeParameters = this.tsTryParseTypeParameters(this.tsParseInOutConstModifiers), this.eat(81) && (e.extends = this.tsParseHeritageClause("extends"));
      const i = this.startNode();
      return i.body = this.tsInType(this.tsParseObjectTypeMembers.bind(this)), e.body = this.finishNode(i, "TSInterfaceBody"), this.finishNode(e, "TSInterfaceDeclaration");
    }
    tsParseTypeAliasDeclaration(e) {
      return e.id = this.parseIdentifier(), this.checkIdentifier(e.id, 2), e.typeAnnotation = this.tsInType(() => {
        if (e.typeParameters = this.tsTryParseTypeParameters(this.tsParseInOutModifiers), this.expect(29), this.isContextual(114) && this.lookaheadCharCode() !== 46) {
          const s = this.startNode();
          return this.next(), this.finishNode(s, "TSIntrinsicKeyword");
        }
        return this.tsParseType();
      }), this.semicolon(), this.finishNode(e, "TSTypeAliasDeclaration");
    }
    tsInTopLevelContext(e) {
      if (this.curContext() !== V.brace) {
        const s = this.state.context;
        this.state.context = [s[0]];
        try {
          return e();
        } finally {
          this.state.context = s;
        }
      } else
        return e();
    }
    tsInType(e) {
      const s = this.state.inType;
      this.state.inType = !0;
      try {
        return e();
      } finally {
        this.state.inType = s;
      }
    }
    tsInDisallowConditionalTypesContext(e) {
      const s = this.state.inDisallowConditionalTypesContext;
      this.state.inDisallowConditionalTypesContext = !0;
      try {
        return e();
      } finally {
        this.state.inDisallowConditionalTypesContext = s;
      }
    }
    tsInAllowConditionalTypesContext(e) {
      const s = this.state.inDisallowConditionalTypesContext;
      this.state.inDisallowConditionalTypesContext = !1;
      try {
        return e();
      } finally {
        this.state.inDisallowConditionalTypesContext = s;
      }
    }
    tsEatThenParseType(e) {
      if (this.match(e))
        return this.tsNextThenParseType();
    }
    tsExpectThenParseType(e) {
      return this.tsInType(() => (this.expect(e), this.tsParseType()));
    }
    tsNextThenParseType() {
      return this.tsInType(() => (this.next(), this.tsParseType()));
    }
    tsParseEnumMember() {
      const e = this.startNode();
      return e.id = this.match(134) ? super.parseStringLiteral(this.state.value) : this.parseIdentifier(!0), this.eat(29) && (e.initializer = super.parseMaybeAssignAllowIn()), this.finishNode(e, "TSEnumMember");
    }
    tsParseEnumDeclaration(e, s = {}) {
      return s.const && (e.const = !0), s.declare && (e.declare = !0), this.expectContextual(126), e.id = this.parseIdentifier(), this.checkIdentifier(e.id, e.const ? 8971 : 8459), this.expect(5), e.members = this.tsParseDelimitedList("EnumMembers", this.tsParseEnumMember.bind(this)), this.expect(8), this.finishNode(e, "TSEnumDeclaration");
    }
    tsParseEnumBody() {
      const e = this.startNode();
      return this.expect(5), e.members = this.tsParseDelimitedList("EnumMembers", this.tsParseEnumMember.bind(this)), this.expect(8), this.finishNode(e, "TSEnumBody");
    }
    tsParseModuleBlock() {
      const e = this.startNode();
      return this.scope.enter(0), this.expect(5), super.parseBlockOrModuleBlockBody(e.body = [], void 0, !0, 8), this.scope.exit(), this.finishNode(e, "TSModuleBlock");
    }
    tsParseModuleOrNamespaceDeclaration(e, s = !1) {
      if (e.id = this.parseIdentifier(), s || this.checkIdentifier(e.id, 1024), this.eat(16)) {
        const i = this.startNode();
        this.tsParseModuleOrNamespaceDeclaration(i, !0), e.body = i;
      } else
        this.scope.enter(1024), this.prodParam.enter(0), e.body = this.tsParseModuleBlock(), this.prodParam.exit(), this.scope.exit();
      return this.finishNode(e, "TSModuleDeclaration");
    }
    tsParseAmbientExternalModuleDeclaration(e) {
      return this.isContextual(112) ? (e.kind = "global", e.global = !0, e.id = this.parseIdentifier()) : this.match(134) ? (e.kind = "module", e.id = super.parseStringLiteral(this.state.value)) : this.unexpected(), this.match(5) ? (this.scope.enter(1024), this.prodParam.enter(0), e.body = this.tsParseModuleBlock(), this.prodParam.exit(), this.scope.exit()) : this.semicolon(), this.finishNode(e, "TSModuleDeclaration");
    }
    tsParseImportEqualsDeclaration(e, s, i) {
      e.isExport = i || !1, e.id = s || this.parseIdentifier(), this.checkIdentifier(e.id, 4096), this.expect(29);
      const r = this.tsParseModuleReference();
      return e.importKind === "type" && r.type !== "TSExternalModuleReference" && this.raise(O.ImportAliasHasImportType, r), e.moduleReference = r, this.semicolon(), this.finishNode(e, "TSImportEqualsDeclaration");
    }
    tsIsExternalModuleReference() {
      return this.isContextual(119) && this.lookaheadCharCode() === 40;
    }
    tsParseModuleReference() {
      return this.tsIsExternalModuleReference() ? this.tsParseExternalModuleReference() : this.tsParseEntityName(0);
    }
    tsParseExternalModuleReference() {
      const e = this.startNode();
      return this.expectContextual(119), this.expect(10), this.match(134) || this.unexpected(), e.expression = super.parseExprAtom(), this.expect(11), this.sawUnambiguousESM = !0, this.finishNode(e, "TSExternalModuleReference");
    }
    tsLookAhead(e) {
      const s = this.state.clone(), i = e();
      return this.state = s, i;
    }
    tsTryParseAndCatch(e) {
      const s = this.tryParse((i) => e() || i());
      if (!(s.aborted || !s.node))
        return s.error && (this.state = s.failState), s.node;
    }
    tsTryParse(e) {
      const s = this.state.clone(), i = e();
      if (i !== void 0 && i !== !1)
        return i;
      this.state = s;
    }
    tsTryParseDeclare(e) {
      if (this.isLineTerminator())
        return;
      const s = this.state.type;
      return this.tsInAmbientContext(() => {
        switch (s) {
          case 68:
            return e.declare = !0, super.parseFunctionStatement(e, !1, !1);
          case 80:
            return e.declare = !0, this.parseClass(e, !0, !1);
          case 126:
            return this.tsParseEnumDeclaration(e, {
              declare: !0
            });
          case 112:
            return this.tsParseAmbientExternalModuleDeclaration(e);
          case 100:
            if (this.state.containsEsc)
              return;
          case 75:
          case 74:
            return !this.match(75) || !this.isLookaheadContextual("enum") ? (e.declare = !0, this.parseVarStatement(e, this.state.value, !0)) : (this.expect(75), this.tsParseEnumDeclaration(e, {
              const: !0,
              declare: !0
            }));
          case 107:
            if (this.isUsing())
              return this.raise(O.InvalidModifierOnUsingDeclaration, this.state.startLoc, "declare"), e.declare = !0, this.parseVarStatement(e, "using", !0);
            break;
          case 96:
            if (this.isAwaitUsing())
              return this.raise(O.InvalidModifierOnAwaitUsingDeclaration, this.state.startLoc, "declare"), e.declare = !0, this.next(), this.parseVarStatement(e, "await using", !0);
            break;
          case 129: {
            const i = this.tsParseInterfaceDeclaration(e, {
              declare: !0
            });
            if (i) return i;
          }
          default:
            if (K(s))
              return this.tsParseDeclaration(e, this.state.type, !0, null);
        }
      });
    }
    tsTryParseExportDeclaration() {
      return this.tsParseDeclaration(this.startNode(), this.state.type, !0, null);
    }
    tsParseDeclaration(e, s, i, r) {
      switch (s) {
        case 124:
          if (this.tsCheckLineTerminator(i) && (this.match(80) || K(this.state.type)))
            return this.tsParseAbstractDeclaration(e, r);
          break;
        case 127:
          if (this.tsCheckLineTerminator(i)) {
            if (this.match(134))
              return this.tsParseAmbientExternalModuleDeclaration(e);
            if (K(this.state.type))
              return e.kind = "module", this.tsParseModuleOrNamespaceDeclaration(e);
          }
          break;
        case 128:
          if (this.tsCheckLineTerminator(i) && K(this.state.type))
            return e.kind = "namespace", this.tsParseModuleOrNamespaceDeclaration(e);
          break;
        case 130:
          if (this.tsCheckLineTerminator(i) && K(this.state.type))
            return this.tsParseTypeAliasDeclaration(e);
          break;
      }
    }
    tsCheckLineTerminator(e) {
      return e ? this.hasFollowingLineBreak() ? !1 : (this.next(), !0) : !this.isLineTerminator();
    }
    tsTryParseGenericAsyncArrowFunction(e) {
      if (!this.match(47)) return;
      const s = this.state.maybeInArrowParameters;
      this.state.maybeInArrowParameters = !0;
      const i = this.tsTryParseAndCatch(() => {
        const r = this.startNodeAt(e);
        return r.typeParameters = this.tsParseTypeParameters(this.tsParseConstModifier), super.parseFunctionParams(r), r.returnType = this.tsTryParseTypeOrTypePredicateAnnotation(), this.expect(19), r;
      });
      if (this.state.maybeInArrowParameters = s, !!i)
        return super.parseArrowExpression(i, null, !0);
    }
    tsParseTypeArgumentsInExpression() {
      if (this.reScan_lt() === 47)
        return this.tsParseTypeArguments();
    }
    tsParseTypeArguments() {
      const e = this.startNode();
      return e.params = this.tsInType(() => this.tsInTopLevelContext(() => (this.expect(47), this.tsParseDelimitedList("TypeParametersOrArguments", this.tsParseType.bind(this))))), e.params.length === 0 ? this.raise(O.EmptyTypeArguments, e) : !this.state.inType && this.curContext() === V.brace && this.reScan_lt_gt(), this.expect(48), this.finishNode(e, "TSTypeParameterInstantiation");
    }
    tsIsDeclarationStart() {
      return rt(this.state.type);
    }
    isExportDefaultSpecifier() {
      return this.tsIsDeclarationStart() ? !1 : super.isExportDefaultSpecifier();
    }
    parseBindingElement(e, s) {
      const i = s.length ? s[0].loc.start : this.state.startLoc, r = {};
      this.tsParseModifiers({
        allowedModifiers: ["public", "private", "protected", "override", "readonly"]
      }, r);
      const n = r.accessibility, c = r.override, p = r.readonly;
      !(e & 4) && (n || p || c) && this.raise(O.UnexpectedParameterModifier, i);
      const f = this.parseMaybeDefault();
      e & 2 && this.parseFunctionParamType(f);
      const y = this.parseMaybeDefault(f.loc.start, f);
      if (n || p || c) {
        const T = this.startNodeAt(i);
        return s.length && (T.decorators = s), n && (T.accessibility = n), p && (T.readonly = p), c && (T.override = c), y.type !== "Identifier" && y.type !== "AssignmentPattern" && this.raise(O.UnsupportedParameterPropertyKind, T), T.parameter = y, this.finishNode(T, "TSParameterProperty");
      }
      return s.length && (f.decorators = s), y;
    }
    isSimpleParameter(e) {
      return e.type === "TSParameterProperty" && super.isSimpleParameter(e.parameter) || super.isSimpleParameter(e);
    }
    tsDisallowOptionalPattern(e) {
      for (const s of e.params)
        s.type !== "Identifier" && s.optional && !this.state.isAmbientContext && this.raise(O.PatternIsOptional, s);
    }
    setArrowFunctionParameters(e, s, i) {
      super.setArrowFunctionParameters(e, s, i), this.tsDisallowOptionalPattern(e);
    }
    parseFunctionBodyAndFinish(e, s, i = !1) {
      this.match(14) && (e.returnType = this.tsParseTypeOrTypePredicateAnnotation(14));
      const r = s === "FunctionDeclaration" ? "TSDeclareFunction" : s === "ClassMethod" || s === "ClassPrivateMethod" ? "TSDeclareMethod" : void 0;
      return r && !this.match(5) && this.isLineTerminator() ? this.finishNode(e, r) : r === "TSDeclareFunction" && this.state.isAmbientContext && (this.raise(O.DeclareFunctionHasImplementation, e), e.declare) ? super.parseFunctionBodyAndFinish(e, r, i) : (this.tsDisallowOptionalPattern(e), super.parseFunctionBodyAndFinish(e, s, i));
    }
    registerFunctionStatementId(e) {
      !e.body && e.id ? this.checkIdentifier(e.id, 1024) : super.registerFunctionStatementId(e);
    }
    tsCheckForInvalidTypeCasts(e) {
      e.forEach((s) => {
        (s == null ? void 0 : s.type) === "TSTypeCastExpression" && this.raise(O.UnexpectedTypeAnnotation, s.typeAnnotation);
      });
    }
    toReferencedList(e, s) {
      return this.tsCheckForInvalidTypeCasts(e), e;
    }
    parseArrayLike(e, s, i) {
      const r = super.parseArrayLike(e, s, i);
      return r.type === "ArrayExpression" && this.tsCheckForInvalidTypeCasts(r.elements), r;
    }
    parseSubscript(e, s, i, r) {
      if (!this.hasPrecedingLineBreak() && this.match(35)) {
        this.state.canStartJSXElement = !1, this.next();
        const c = this.startNodeAt(s);
        return c.expression = e, this.finishNode(c, "TSNonNullExpression");
      }
      let n = !1;
      if (this.match(18) && this.lookaheadCharCode() === 60) {
        if (i)
          return r.stop = !0, e;
        r.optionalChainMember = n = !0, this.next();
      }
      if (this.match(47) || this.match(51)) {
        let c;
        const p = this.tsTryParseAndCatch(() => {
          if (!i && this.atPossibleAsyncArrow(e)) {
            const I = this.tsTryParseGenericAsyncArrowFunction(s);
            if (I)
              return r.stop = !0, I;
          }
          const f = this.tsParseTypeArgumentsInExpression();
          if (!f) return;
          if (n && !this.match(10)) {
            c = this.state.curPosition();
            return;
          }
          if (ft(this.state.type)) {
            const I = super.parseTaggedTemplateExpression(e, s, r);
            return I.typeParameters = f, I;
          }
          if (!i && this.eat(10)) {
            const I = this.startNodeAt(s);
            return I.callee = e, I.arguments = this.parseCallExpressionArguments(), this.tsCheckForInvalidTypeCasts(I.arguments), I.typeParameters = f, r.optionalChainMember && (I.optional = n), this.finishCallExpression(I, r.optionalChainMember);
          }
          const y = this.state.type;
          if (y === 48 || y === 52 || y !== 10 && y !== 93 && y !== 120 && ne(y) && !this.hasPrecedingLineBreak())
            return;
          const T = this.startNodeAt(s);
          return T.expression = e, T.typeParameters = f, this.finishNode(T, "TSInstantiationExpression");
        });
        if (c && this.unexpected(c, 10), p)
          return p.type === "TSInstantiationExpression" && ((this.match(16) || this.match(18) && this.lookaheadCharCode() !== 40) && this.raise(O.InvalidPropertyAccessAfterInstantiationExpression, this.state.startLoc), !this.match(16) && !this.match(18) && (p.expression = super.stopParseSubscript(e, r))), p;
      }
      return super.parseSubscript(e, s, i, r);
    }
    parseNewCallee(e) {
      var s;
      super.parseNewCallee(e);
      const {
        callee: i
      } = e;
      i.type === "TSInstantiationExpression" && !((s = i.extra) != null && s.parenthesized) && (e.typeParameters = i.typeParameters, e.callee = i.expression);
    }
    parseExprOp(e, s, i) {
      let r;
      if (dt(58) > i && !this.hasPrecedingLineBreak() && (this.isContextual(93) || (r = this.isContextual(120)))) {
        const n = this.startNodeAt(s);
        return n.expression = e, n.typeAnnotation = this.tsInType(() => (this.next(), this.match(75) ? (r && this.raise(m.UnexpectedKeyword, this.state.startLoc, {
          keyword: "const"
        }), this.tsParseTypeReference()) : this.tsParseType())), this.finishNode(n, r ? "TSSatisfiesExpression" : "TSAsExpression"), this.reScan_lt_gt(), this.parseExprOp(n, s, i);
      }
      return super.parseExprOp(e, s, i);
    }
    checkReservedWord(e, s, i, r) {
      this.state.isAmbientContext || super.checkReservedWord(e, s, i, r);
    }
    checkImportReflection(e) {
      super.checkImportReflection(e), e.module && e.importKind !== "value" && this.raise(O.ImportReflectionHasImportType, e.specifiers[0].loc.start);
    }
    checkDuplicateExports() {
    }
    isPotentialImportPhase(e) {
      if (super.isPotentialImportPhase(e)) return !0;
      if (this.isContextual(130)) {
        const s = this.lookaheadCharCode();
        return e ? s === 123 || s === 42 : s !== 61;
      }
      return !e && this.isContextual(87);
    }
    applyImportPhase(e, s, i, r) {
      super.applyImportPhase(e, s, i, r), s ? e.exportKind = i === "type" ? "type" : "value" : e.importKind = i === "type" || i === "typeof" ? i : "value";
    }
    parseImport(e) {
      if (this.match(134))
        return e.importKind = "value", super.parseImport(e);
      let s;
      if (K(this.state.type) && this.lookaheadCharCode() === 61)
        return e.importKind = "value", this.tsParseImportEqualsDeclaration(e);
      if (this.isContextual(130)) {
        const i = this.parseMaybeImportPhase(e, !1);
        if (this.lookaheadCharCode() === 61)
          return this.tsParseImportEqualsDeclaration(e, i);
        s = super.parseImportSpecifiersAndAfter(e, i);
      } else
        s = super.parseImport(e);
      return s.importKind === "type" && s.specifiers.length > 1 && s.specifiers[0].type === "ImportDefaultSpecifier" && this.raise(O.TypeImportCannotSpecifyDefaultAndNamed, s), s;
    }
    parseExport(e, s) {
      if (this.match(83)) {
        const i = e;
        this.next();
        let r = null;
        return this.isContextual(130) && this.isPotentialImportPhase(!1) ? r = this.parseMaybeImportPhase(i, !1) : i.importKind = "value", this.tsParseImportEqualsDeclaration(i, r, !0);
      } else if (this.eat(29)) {
        const i = e;
        return i.expression = super.parseExpression(), this.semicolon(), this.sawUnambiguousESM = !0, this.finishNode(i, "TSExportAssignment");
      } else if (this.eatContextual(93)) {
        const i = e;
        return this.expectContextual(128), i.id = this.parseIdentifier(), this.semicolon(), this.finishNode(i, "TSNamespaceExportDeclaration");
      } else
        return super.parseExport(e, s);
    }
    isAbstractClass() {
      return this.isContextual(124) && this.isLookaheadContextual("class");
    }
    parseExportDefaultExpression() {
      if (this.isAbstractClass()) {
        const e = this.startNode();
        return this.next(), e.abstract = !0, this.parseClass(e, !0, !0);
      }
      if (this.match(129)) {
        const e = this.tsParseInterfaceDeclaration(this.startNode());
        if (e) return e;
      }
      return super.parseExportDefaultExpression();
    }
    parseVarStatement(e, s, i = !1) {
      const {
        isAmbientContext: r
      } = this.state, n = super.parseVarStatement(e, s, i || r);
      if (!r) return n;
      if (!e.declare && (s === "using" || s === "await using"))
        return this.raiseOverwrite(O.UsingDeclarationInAmbientContext, e, s), n;
      for (const {
        id: c,
        init: p
      } of n.declarations)
        p && (s === "var" || s === "let" || c.typeAnnotation ? this.raise(O.InitializerNotAllowedInAmbientContext, p) : Fr(p, this.hasPlugin("estree")) || this.raise(O.ConstInitializerMustBeStringOrNumericLiteralOrLiteralEnumReference, p));
      return n;
    }
    parseStatementContent(e, s) {
      if (!this.state.containsEsc)
        switch (this.state.type) {
          case 75: {
            if (this.isLookaheadContextual("enum")) {
              const i = this.startNode();
              return this.expect(75), this.tsParseEnumDeclaration(i, {
                const: !0
              });
            }
            break;
          }
          case 124:
          case 125: {
            if (this.nextTokenIsIdentifierAndNotTSRelationalOperatorOnSameLine()) {
              const i = this.state.type, r = this.startNode();
              this.next();
              const n = i === 125 ? this.tsTryParseDeclare(r) : this.tsParseAbstractDeclaration(r, s);
              return n ? (i === 125 && (n.declare = !0), n) : (r.expression = this.createIdentifier(this.startNodeAt(r.loc.start), i === 125 ? "declare" : "abstract"), this.semicolon(!1), this.finishNode(r, "ExpressionStatement"));
            }
            break;
          }
          case 126:
            return this.tsParseEnumDeclaration(this.startNode());
          case 112: {
            if (this.lookaheadCharCode() === 123) {
              const r = this.startNode();
              return this.tsParseAmbientExternalModuleDeclaration(r);
            }
            break;
          }
          case 129: {
            const i = this.tsParseInterfaceDeclaration(this.startNode());
            if (i) return i;
            break;
          }
          case 127: {
            if (this.nextTokenIsIdentifierOrStringLiteralOnSameLine()) {
              const i = this.startNode();
              return this.next(), this.tsParseDeclaration(i, 127, !1, s);
            }
            break;
          }
          case 128: {
            if (this.nextTokenIsIdentifierOnSameLine()) {
              const i = this.startNode();
              return this.next(), this.tsParseDeclaration(i, 128, !1, s);
            }
            break;
          }
          case 130: {
            if (this.nextTokenIsIdentifierOnSameLine()) {
              const i = this.startNode();
              return this.next(), this.tsParseTypeAliasDeclaration(i);
            }
            break;
          }
        }
      return super.parseStatementContent(e, s);
    }
    parseAccessModifier() {
      return this.tsParseModifier(["public", "protected", "private"]);
    }
    tsHasSomeModifiers(e, s) {
      return s.some((i) => Js(i) ? e.accessibility === i : !!e[i]);
    }
    tsIsStartOfStaticBlocks() {
      return this.isContextual(106) && this.lookaheadCharCode() === 123;
    }
    parseClassMember(e, s, i) {
      const r = ["declare", "private", "public", "protected", "override", "abstract", "readonly", "static"];
      this.tsParseModifiers({
        allowedModifiers: r,
        disallowedModifiers: ["in", "out"],
        stopOnStartOfClassStaticBlock: !0,
        errorTemplate: O.InvalidModifierOnTypeParameterPositions
      }, s);
      const n = () => {
        this.tsIsStartOfStaticBlocks() ? (this.next(), this.next(), this.tsHasSomeModifiers(s, r) && this.raise(O.StaticBlockCannotHaveModifier, this.state.curPosition()), super.parseClassStaticBlock(e, s)) : this.parseClassMemberWithIsStatic(e, s, i, !!s.static);
      };
      s.declare ? this.tsInAmbientContext(n) : n();
    }
    parseClassMemberWithIsStatic(e, s, i, r) {
      const n = this.tsTryParseIndexSignature(s);
      if (n) {
        e.body.push(n), s.abstract && this.raise(O.IndexSignatureHasAbstract, s), s.accessibility && this.raise(O.IndexSignatureHasAccessibility, s, {
          modifier: s.accessibility
        }), s.declare && this.raise(O.IndexSignatureHasDeclare, s), s.override && this.raise(O.IndexSignatureHasOverride, s);
        return;
      }
      !this.state.inAbstractClass && s.abstract && this.raise(O.NonAbstractClassHasAbstractMethod, s), s.override && (i.hadSuperClass || this.raise(O.OverrideNotInSubClass, s)), super.parseClassMemberWithIsStatic(e, s, i, r);
    }
    parsePostMemberNameModifiers(e) {
      this.eat(17) && (e.optional = !0), e.readonly && this.match(10) && this.raise(O.ClassMethodHasReadonly, e), e.declare && this.match(10) && this.raise(O.ClassMethodHasDeclare, e);
    }
    shouldParseExportDeclaration() {
      return this.tsIsDeclarationStart() ? !0 : super.shouldParseExportDeclaration();
    }
    parseConditional(e, s, i) {
      if (!this.match(17)) return e;
      if (this.state.maybeInArrowParameters) {
        const r = this.lookaheadCharCode();
        if (r === 44 || r === 61 || r === 58 || r === 41)
          return this.setOptionalParametersError(i), e;
      }
      return super.parseConditional(e, s, i);
    }
    parseParenItem(e, s) {
      const i = super.parseParenItem(e, s);
      if (this.eat(17) && (i.optional = !0, this.resetEndLocation(e)), this.match(14)) {
        const r = this.startNodeAt(s);
        return r.expression = e, r.typeAnnotation = this.tsParseTypeAnnotation(), this.finishNode(r, "TSTypeCastExpression");
      }
      return e;
    }
    parseExportDeclaration(e) {
      if (!this.state.isAmbientContext && this.isContextual(125))
        return this.tsInAmbientContext(() => this.parseExportDeclaration(e));
      const s = this.state.startLoc, i = this.eatContextual(125);
      if (i && (this.isContextual(125) || !this.shouldParseExportDeclaration()))
        throw this.raise(O.ExpectedAmbientAfterExportDeclare, this.state.startLoc);
      const n = K(this.state.type) && this.tsTryParseExportDeclaration() || super.parseExportDeclaration(e);
      return n ? ((n.type === "TSInterfaceDeclaration" || n.type === "TSTypeAliasDeclaration" || i) && (e.exportKind = "type"), i && n.type !== "TSImportEqualsDeclaration" && (this.resetStartLocation(n, s), n.declare = !0), n) : null;
    }
    parseClassId(e, s, i, r) {
      if ((!s || i) && this.isContextual(113))
        return;
      super.parseClassId(e, s, i, e.declare ? 1024 : 8331);
      const n = this.tsTryParseTypeParameters(this.tsParseInOutConstModifiers);
      n && (e.typeParameters = n);
    }
    parseClassPropertyAnnotation(e) {
      e.optional || (this.eat(35) ? e.definite = !0 : this.eat(17) && (e.optional = !0));
      const s = this.tsTryParseTypeAnnotation();
      s && (e.typeAnnotation = s);
    }
    parseClassProperty(e) {
      if (this.parseClassPropertyAnnotation(e), this.state.isAmbientContext && !(e.readonly && !e.typeAnnotation) && this.match(29) && this.raise(O.DeclareClassFieldHasInitializer, this.state.startLoc), e.abstract && this.match(29)) {
        const {
          key: s
        } = e;
        this.raise(O.AbstractPropertyHasInitializer, this.state.startLoc, {
          propertyName: s.type === "Identifier" && !e.computed ? s.name : `[${this.input.slice(this.offsetToSourcePos(s.start), this.offsetToSourcePos(s.end))}]`
        });
      }
      return super.parseClassProperty(e);
    }
    parseClassPrivateProperty(e) {
      return e.abstract && this.raise(O.PrivateElementHasAbstract, e), e.accessibility && this.raise(O.PrivateElementHasAccessibility, e, {
        modifier: e.accessibility
      }), this.parseClassPropertyAnnotation(e), super.parseClassPrivateProperty(e);
    }
    parseClassAccessorProperty(e) {
      return this.parseClassPropertyAnnotation(e), e.optional && this.raise(O.AccessorCannotBeOptional, e), super.parseClassAccessorProperty(e);
    }
    pushClassMethod(e, s, i, r, n, c) {
      const p = this.tsTryParseTypeParameters(this.tsParseConstModifier);
      p && n && this.raise(O.ConstructorHasTypeParameters, p);
      const {
        declare: f = !1,
        kind: y
      } = s;
      f && (y === "get" || y === "set") && this.raise(O.DeclareAccessor, s, {
        kind: y
      }), p && (s.typeParameters = p), super.pushClassMethod(e, s, i, r, n, c);
    }
    pushClassPrivateMethod(e, s, i, r) {
      const n = this.tsTryParseTypeParameters(this.tsParseConstModifier);
      n && (s.typeParameters = n), super.pushClassPrivateMethod(e, s, i, r);
    }
    declareClassPrivateMethodInScope(e, s) {
      e.type !== "TSDeclareMethod" && (e.type === "MethodDefinition" && e.value.body == null || super.declareClassPrivateMethodInScope(e, s));
    }
    parseClassSuper(e) {
      if (super.parseClassSuper(e), e.superClass)
        if (e.superClass.type === "TSInstantiationExpression") {
          const s = e.superClass, i = s.expression;
          this.takeSurroundingComments(i, i.start, i.end);
          const r = s.typeParameters;
          this.takeSurroundingComments(r, r.start, r.end), e.superClass = i, e.superTypeParameters = r;
        } else (this.match(47) || this.match(51)) && (e.superTypeParameters = this.tsParseTypeArgumentsInExpression());
      this.eatContextual(113) && (e.implements = this.tsParseHeritageClause("implements"));
    }
    parseObjPropValue(e, s, i, r, n, c, p) {
      const f = this.tsTryParseTypeParameters(this.tsParseConstModifier);
      return f && (e.typeParameters = f), super.parseObjPropValue(e, s, i, r, n, c, p);
    }
    parseFunctionParams(e, s) {
      const i = this.tsTryParseTypeParameters(this.tsParseConstModifier);
      i && (e.typeParameters = i), super.parseFunctionParams(e, s);
    }
    parseVarId(e, s) {
      super.parseVarId(e, s), e.id.type === "Identifier" && !this.hasPrecedingLineBreak() && this.eat(35) && (e.definite = !0);
      const i = this.tsTryParseTypeAnnotation();
      i && (e.id.typeAnnotation = i, this.resetEndLocation(e.id));
    }
    parseAsyncArrowFromCallExpression(e, s) {
      return this.match(14) && (e.returnType = this.tsParseTypeAnnotation()), super.parseAsyncArrowFromCallExpression(e, s);
    }
    parseMaybeAssign(e, s) {
      var i, r, n, c, p;
      let f, y, T;
      if (this.hasPlugin("jsx") && (this.match(143) || this.match(47))) {
        if (f = this.state.clone(), y = this.tryParse(() => super.parseMaybeAssign(e, s), f), !y.error) return y.node;
        const {
          context: M
        } = this.state, X = M[M.length - 1];
        (X === V.j_oTag || X === V.j_expr) && M.pop();
      }
      if (!((i = y) != null && i.error) && !this.match(47))
        return super.parseMaybeAssign(e, s);
      (!f || f === this.state) && (f = this.state.clone());
      let I;
      const E = this.tryParse((M) => {
        var X, oe;
        I = this.tsParseTypeParameters(this.tsParseConstModifier);
        const $ = super.parseMaybeAssign(e, s);
        return ($.type !== "ArrowFunctionExpression" || (X = $.extra) != null && X.parenthesized) && M(), ((oe = I) == null ? void 0 : oe.params.length) !== 0 && this.resetStartLocationFromNode($, I), $.typeParameters = I, $;
      }, f);
      if (!E.error && !E.aborted)
        return I && this.reportReservedArrowTypeParam(I), E.node;
      if (!y && (Gs(!this.hasPlugin("jsx")), T = this.tryParse(() => super.parseMaybeAssign(e, s), f), !T.error))
        return T.node;
      if ((r = y) != null && r.node)
        return this.state = y.failState, y.node;
      if (E.node)
        return this.state = E.failState, I && this.reportReservedArrowTypeParam(I), E.node;
      if ((n = T) != null && n.node)
        return this.state = T.failState, T.node;
      throw ((c = y) == null ? void 0 : c.error) || E.error || ((p = T) == null ? void 0 : p.error);
    }
    reportReservedArrowTypeParam(e) {
      var s;
      e.params.length === 1 && !e.params[0].constraint && !((s = e.extra) != null && s.trailingComma) && this.getPluginOption("typescript", "disallowAmbiguousJSXLike") && this.raise(O.ReservedArrowTypeParam, e);
    }
    parseMaybeUnary(e, s) {
      return !this.hasPlugin("jsx") && this.match(47) ? this.tsParseTypeAssertion() : super.parseMaybeUnary(e, s);
    }
    parseArrow(e) {
      if (this.match(14)) {
        const s = this.tryParse((i) => {
          const r = this.tsParseTypeOrTypePredicateAnnotation(14);
          return (this.canInsertSemicolon() || !this.match(19)) && i(), r;
        });
        if (s.aborted) return;
        s.thrown || (s.error && (this.state = s.failState), e.returnType = s.node);
      }
      return super.parseArrow(e);
    }
    parseFunctionParamType(e) {
      this.eat(17) && (e.optional = !0);
      const s = this.tsTryParseTypeAnnotation();
      return s && (e.typeAnnotation = s), this.resetEndLocation(e), e;
    }
    isAssignable(e, s) {
      switch (e.type) {
        case "TSTypeCastExpression":
          return this.isAssignable(e.expression, s);
        case "TSParameterProperty":
          return !0;
        default:
          return super.isAssignable(e, s);
      }
    }
    toAssignable(e, s = !1) {
      switch (e.type) {
        case "ParenthesizedExpression":
          this.toAssignableParenthesizedExpression(e, s);
          break;
        case "TSAsExpression":
        case "TSSatisfiesExpression":
        case "TSNonNullExpression":
        case "TSTypeAssertion":
          s ? this.expressionScope.recordArrowParameterBindingError(O.UnexpectedTypeCastInParameter, e) : this.raise(O.UnexpectedTypeCastInParameter, e), this.toAssignable(e.expression, s);
          break;
        case "AssignmentExpression":
          !s && e.left.type === "TSTypeCastExpression" && (e.left = this.typeCastToParameter(e.left));
        default:
          super.toAssignable(e, s);
      }
    }
    toAssignableParenthesizedExpression(e, s) {
      switch (e.expression.type) {
        case "TSAsExpression":
        case "TSSatisfiesExpression":
        case "TSNonNullExpression":
        case "TSTypeAssertion":
        case "ParenthesizedExpression":
          this.toAssignable(e.expression, s);
          break;
        default:
          super.toAssignable(e, s);
      }
    }
    checkToRestConversion(e, s) {
      switch (e.type) {
        case "TSAsExpression":
        case "TSSatisfiesExpression":
        case "TSTypeAssertion":
        case "TSNonNullExpression":
          this.checkToRestConversion(e.expression, !1);
          break;
        default:
          super.checkToRestConversion(e, s);
      }
    }
    isValidLVal(e, s, i, r) {
      switch (e) {
        case "TSTypeCastExpression":
          return !0;
        case "TSParameterProperty":
          return "parameter";
        case "TSNonNullExpression":
          return "expression";
        case "TSAsExpression":
        case "TSSatisfiesExpression":
        case "TSTypeAssertion":
          return (r !== 64 || !i) && ["expression", !0];
        default:
          return super.isValidLVal(e, s, i, r);
      }
    }
    parseBindingAtom() {
      return this.state.type === 78 ? this.parseIdentifier(!0) : super.parseBindingAtom();
    }
    parseMaybeDecoratorArguments(e, s) {
      if (this.match(47) || this.match(51)) {
        const i = this.tsParseTypeArgumentsInExpression();
        if (this.match(10)) {
          const r = super.parseMaybeDecoratorArguments(e, s);
          return r.typeParameters = i, r;
        }
        this.unexpected(null, 10);
      }
      return super.parseMaybeDecoratorArguments(e, s);
    }
    checkCommaAfterRest(e) {
      return this.state.isAmbientContext && this.match(12) && this.lookaheadCharCode() === e ? (this.next(), !1) : super.checkCommaAfterRest(e);
    }
    isClassMethod() {
      return this.match(47) || super.isClassMethod();
    }
    isClassProperty() {
      return this.match(35) || this.match(14) || super.isClassProperty();
    }
    parseMaybeDefault(e, s) {
      const i = super.parseMaybeDefault(e, s);
      return i.type === "AssignmentPattern" && i.typeAnnotation && i.right.start < i.typeAnnotation.start && this.raise(O.TypeAnnotationAfterAssign, i.typeAnnotation), i;
    }
    getTokenFromCode(e) {
      if (this.state.inType) {
        if (e === 62) {
          this.finishOp(48, 1);
          return;
        }
        if (e === 60) {
          this.finishOp(47, 1);
          return;
        }
      }
      super.getTokenFromCode(e);
    }
    reScan_lt_gt() {
      const {
        type: e
      } = this.state;
      e === 47 ? (this.state.pos -= 1, this.readToken_lt()) : e === 48 && (this.state.pos -= 1, this.readToken_gt());
    }
    reScan_lt() {
      const {
        type: e
      } = this.state;
      return e === 51 ? (this.state.pos -= 2, this.finishOp(47, 1), 47) : e;
    }
    toAssignableListItem(e, s, i) {
      const r = e[s];
      r.type === "TSTypeCastExpression" && (e[s] = this.typeCastToParameter(r)), super.toAssignableListItem(e, s, i);
    }
    typeCastToParameter(e) {
      return e.expression.typeAnnotation = e.typeAnnotation, this.resetEndLocation(e.expression, e.typeAnnotation.loc.end), e.expression;
    }
    shouldParseArrow(e) {
      return this.match(14) ? e.every((s) => this.isAssignable(s, !0)) : super.shouldParseArrow(e);
    }
    shouldParseAsyncArrow() {
      return this.match(14) || super.shouldParseAsyncArrow();
    }
    canHaveLeadingDecorator() {
      return super.canHaveLeadingDecorator() || this.isAbstractClass();
    }
    jsxParseOpeningElementAfterName(e) {
      if (this.match(47) || this.match(51)) {
        const s = this.tsTryParseAndCatch(() => this.tsParseTypeArgumentsInExpression());
        s && (e.typeParameters = s);
      }
      return super.jsxParseOpeningElementAfterName(e);
    }
    getGetterSetterExpectedParamCount(e) {
      const s = super.getGetterSetterExpectedParamCount(e), r = this.getObjectOrClassMethodParams(e)[0];
      return r && this.isThisParam(r) ? s + 1 : s;
    }
    parseCatchClauseParam() {
      const e = super.parseCatchClauseParam(), s = this.tsTryParseTypeAnnotation();
      return s && (e.typeAnnotation = s, this.resetEndLocation(e)), e;
    }
    tsInAmbientContext(e) {
      const {
        isAmbientContext: s,
        strict: i
      } = this.state;
      this.state.isAmbientContext = !0, this.state.strict = !1;
      try {
        return e();
      } finally {
        this.state.isAmbientContext = s, this.state.strict = i;
      }
    }
    parseClass(e, s, i) {
      const r = this.state.inAbstractClass;
      this.state.inAbstractClass = !!e.abstract;
      try {
        return super.parseClass(e, s, i);
      } finally {
        this.state.inAbstractClass = r;
      }
    }
    tsParseAbstractDeclaration(e, s) {
      if (this.match(80))
        return e.abstract = !0, this.maybeTakeDecorators(s, this.parseClass(e, !0, !1));
      if (this.isContextual(129))
        return this.hasFollowingLineBreak() ? null : (e.abstract = !0, this.raise(O.NonClassMethodPropertyHasAbstractModifier, e), this.tsParseInterfaceDeclaration(e));
      throw this.unexpected(null, 80);
    }
    parseMethod(e, s, i, r, n, c, p) {
      const f = super.parseMethod(e, s, i, r, n, c, p);
      if ((f.abstract || f.type === "TSAbstractMethodDefinition") && (this.hasPlugin("estree") ? f.value : f).body) {
        const {
          key: I
        } = f;
        this.raise(O.AbstractMethodHasImplementation, f, {
          methodName: I.type === "Identifier" && !f.computed ? I.name : `[${this.input.slice(this.offsetToSourcePos(I.start), this.offsetToSourcePos(I.end))}]`
        });
      }
      return f;
    }
    tsParseTypeParameterName() {
      return this.parseIdentifier().name;
    }
    shouldParseAsAmbientContext() {
      return !!this.getPluginOption("typescript", "dts");
    }
    parse() {
      return this.shouldParseAsAmbientContext() && (this.state.isAmbientContext = !0), super.parse();
    }
    getExpression() {
      return this.shouldParseAsAmbientContext() && (this.state.isAmbientContext = !0), super.getExpression();
    }
    parseExportSpecifier(e, s, i, r) {
      return !s && r ? (this.parseTypeOnlyImportExportSpecifier(e, !1, i), this.finishNode(e, "ExportSpecifier")) : (e.exportKind = "value", super.parseExportSpecifier(e, s, i, r));
    }
    parseImportSpecifier(e, s, i, r, n) {
      return !s && r ? (this.parseTypeOnlyImportExportSpecifier(e, !0, i), this.finishNode(e, "ImportSpecifier")) : (e.importKind = "value", super.parseImportSpecifier(e, s, i, r, i ? 4098 : 4096));
    }
    parseTypeOnlyImportExportSpecifier(e, s, i) {
      const r = s ? "imported" : "local", n = s ? "local" : "exported";
      let c = e[r], p, f = !1, y = !0;
      const T = c.loc.start;
      if (this.isContextual(93)) {
        const E = this.parseIdentifier();
        if (this.isContextual(93)) {
          const M = this.parseIdentifier();
          G(this.state.type) ? (f = !0, c = E, p = s ? this.parseIdentifier() : this.parseModuleExportName(), y = !1) : (p = M, y = !1);
        } else G(this.state.type) ? (y = !1, p = s ? this.parseIdentifier() : this.parseModuleExportName()) : (f = !0, c = E);
      } else G(this.state.type) && (f = !0, s ? (c = this.parseIdentifier(!0), this.isContextual(93) || this.checkReservedWord(c.name, c.loc.start, !0, !0)) : c = this.parseModuleExportName());
      f && i && this.raise(s ? O.TypeModifierIsUsedInTypeImports : O.TypeModifierIsUsedInTypeExports, T), e[r] = c, e[n] = p;
      const I = s ? "importKind" : "exportKind";
      e[I] = f ? "type" : "value", y && this.eatContextual(93) && (e[n] = s ? this.parseIdentifier() : this.parseModuleExportName()), e[n] || (e[n] = this.cloneIdentifier(e[r])), s && this.checkIdentifier(e[n], f ? 4098 : 4096);
    }
    fillOptionalPropertiesForTSESLint(e) {
      var s, i, r, n, c, p, f, y, T, I, E, M, X, oe, $, ie, gt, lt, ri, ai, ni, oi, li, ci, hi, pi, ui, di, fi, mi, yi, xi, gi, bi, Pi, Ti, wi, Ai, Si, vi, Ni, Ci, Ii, ki, Ei, ji, Li, Di;
      switch (e.type) {
        case "ExpressionStatement":
          (s = e.directive) != null || (e.directive = void 0);
          return;
        case "RestElement":
          e.value = void 0;
        case "Identifier":
        case "ArrayPattern":
        case "AssignmentPattern":
        case "ObjectPattern":
          (i = e.decorators) != null || (e.decorators = []), (r = e.optional) != null || (e.optional = !1), (n = e.typeAnnotation) != null || (e.typeAnnotation = void 0);
          return;
        case "TSParameterProperty":
          (c = e.accessibility) != null || (e.accessibility = void 0), (p = e.decorators) != null || (e.decorators = []), (f = e.override) != null || (e.override = !1), (y = e.readonly) != null || (e.readonly = !1), (T = e.static) != null || (e.static = !1);
          return;
        case "TSEmptyBodyFunctionExpression":
          e.body = null;
        case "TSDeclareFunction":
        case "FunctionDeclaration":
        case "FunctionExpression":
        case "ClassMethod":
        case "ClassPrivateMethod":
          (I = e.declare) != null || (e.declare = !1), (E = e.returnType) != null || (e.returnType = void 0), (M = e.typeParameters) != null || (e.typeParameters = void 0);
          return;
        case "Property":
          (X = e.optional) != null || (e.optional = !1);
          return;
        case "TSMethodSignature":
        case "TSPropertySignature":
          (oe = e.optional) != null || (e.optional = !1);
        case "TSIndexSignature":
          ($ = e.accessibility) != null || (e.accessibility = void 0), (ie = e.readonly) != null || (e.readonly = !1), (gt = e.static) != null || (e.static = !1);
          return;
        case "TSAbstractPropertyDefinition":
        case "PropertyDefinition":
        case "TSAbstractAccessorProperty":
        case "AccessorProperty":
          (lt = e.declare) != null || (e.declare = !1), (ri = e.definite) != null || (e.definite = !1), (ai = e.readonly) != null || (e.readonly = !1), (ni = e.typeAnnotation) != null || (e.typeAnnotation = void 0);
        case "TSAbstractMethodDefinition":
        case "MethodDefinition":
          (oi = e.accessibility) != null || (e.accessibility = void 0), (li = e.decorators) != null || (e.decorators = []), (ci = e.override) != null || (e.override = !1), (hi = e.optional) != null || (e.optional = !1);
          return;
        case "ClassExpression":
          (pi = e.id) != null || (e.id = null);
        case "ClassDeclaration":
          (ui = e.abstract) != null || (e.abstract = !1), (di = e.declare) != null || (e.declare = !1), (fi = e.decorators) != null || (e.decorators = []), (mi = e.implements) != null || (e.implements = []), (yi = e.superTypeArguments) != null || (e.superTypeArguments = void 0), (xi = e.typeParameters) != null || (e.typeParameters = void 0);
          return;
        case "TSTypeAliasDeclaration":
        case "VariableDeclaration":
          (gi = e.declare) != null || (e.declare = !1);
          return;
        case "VariableDeclarator":
          (bi = e.definite) != null || (e.definite = !1);
          return;
        case "TSEnumDeclaration":
          (Pi = e.const) != null || (e.const = !1), (Ti = e.declare) != null || (e.declare = !1);
          return;
        case "TSEnumMember":
          (wi = e.computed) != null || (e.computed = !1);
          return;
        case "TSImportType":
          (Ai = e.qualifier) != null || (e.qualifier = null), (Si = e.options) != null || (e.options = null);
          return;
        case "TSInterfaceDeclaration":
          (vi = e.declare) != null || (e.declare = !1), (Ni = e.extends) != null || (e.extends = []);
          return;
        case "TSMappedType":
          (Ci = e.optional) != null || (e.optional = !1), (Ii = e.readonly) != null || (e.readonly = void 0);
          return;
        case "TSModuleDeclaration":
          (ki = e.declare) != null || (e.declare = !1), (Ei = e.global) != null || (e.global = e.kind === "global");
          return;
        case "TSTypeParameter":
          (ji = e.const) != null || (e.const = !1), (Li = e.in) != null || (e.in = !1), (Di = e.out) != null || (e.out = !1);
          return;
      }
    }
    chStartsBindingIdentifierAndNotRelationalOperator(e, s) {
      if (Fe(e)) {
        if (ws.lastIndex = s, ws.test(this.input)) {
          const i = this.codePointAtPos(ws.lastIndex);
          if (!Be(i) && i !== 92)
            return !1;
        }
        return !0;
      } else return e === 92;
    }
    nextTokenIsIdentifierAndNotTSRelationalOperatorOnSameLine() {
      const e = this.nextTokenInLineStart(), s = this.codePointAtPos(e);
      return this.chStartsBindingIdentifierAndNotRelationalOperator(s, e);
    }
    nextTokenIsIdentifierOrStringLiteralOnSameLine() {
      const e = this.nextTokenInLineStart(), s = this.codePointAtPos(e);
      return this.chStartsBindingIdentifier(s, e) || s === 34 || s === 39;
    }
  };
  function _r(a) {
    if (a.type !== "MemberExpression") return !1;
    const {
      computed: t,
      property: e
    } = a;
    return t && e.type !== "StringLiteral" && (e.type !== "TemplateLiteral" || e.expressions.length > 0) ? !1 : Ys(a.object);
  }
  function Fr(a, t) {
    var e;
    const {
      type: s
    } = a;
    if ((e = a.extra) != null && e.parenthesized)
      return !1;
    if (t) {
      if (s === "Literal") {
        const {
          value: i
        } = a;
        if (typeof i == "string" || typeof i == "boolean")
          return !0;
      }
    } else if (s === "StringLiteral" || s === "BooleanLiteral")
      return !0;
    return !!(Xs(a, t) || Br(a, t) || s === "TemplateLiteral" && a.expressions.length === 0 || _r(a));
  }
  function Xs(a, t) {
    return t ? a.type === "Literal" && (typeof a.value == "number" || "bigint" in a) : a.type === "NumericLiteral" || a.type === "BigIntLiteral";
  }
  function Br(a, t) {
    if (a.type === "UnaryExpression") {
      const {
        operator: e,
        argument: s
      } = a;
      if (e === "-" && Xs(s, t))
        return !0;
    }
    return !1;
  }
  function Ys(a) {
    return a.type === "Identifier" ? !0 : a.type !== "MemberExpression" || a.computed ? !1 : Ys(a.object);
  }
  const Zs = U`placeholders`({
    ClassNameIsRequired: "A class name is required.",
    UnexpectedSpace: "Unexpected space in placeholder."
  });
  var Rr = (a) => class extends a {
    parsePlaceholder(e) {
      if (this.match(133)) {
        const s = this.startNode();
        return this.next(), this.assertNoSpace(), s.name = super.parseIdentifier(!0), this.assertNoSpace(), this.expect(133), this.finishPlaceholder(s, e);
      }
    }
    finishPlaceholder(e, s) {
      let i = e;
      return (!i.expectedNode || !i.type) && (i = this.finishNode(i, "Placeholder")), i.expectedNode = s, i;
    }
    getTokenFromCode(e) {
      e === 37 && this.input.charCodeAt(this.state.pos + 1) === 37 ? this.finishOp(133, 2) : super.getTokenFromCode(e);
    }
    parseExprAtom(e) {
      return this.parsePlaceholder("Expression") || super.parseExprAtom(e);
    }
    parseIdentifier(e) {
      return this.parsePlaceholder("Identifier") || super.parseIdentifier(e);
    }
    checkReservedWord(e, s, i, r) {
      e !== void 0 && super.checkReservedWord(e, s, i, r);
    }
    cloneIdentifier(e) {
      const s = super.cloneIdentifier(e);
      return s.type === "Placeholder" && (s.expectedNode = e.expectedNode), s;
    }
    cloneStringLiteral(e) {
      return e.type === "Placeholder" ? this.cloneIdentifier(e) : super.cloneStringLiteral(e);
    }
    parseBindingAtom() {
      return this.parsePlaceholder("Pattern") || super.parseBindingAtom();
    }
    isValidLVal(e, s, i, r) {
      return e === "Placeholder" || super.isValidLVal(e, s, i, r);
    }
    toAssignable(e, s) {
      e && e.type === "Placeholder" && e.expectedNode === "Expression" ? e.expectedNode = "Pattern" : super.toAssignable(e, s);
    }
    chStartsBindingIdentifier(e, s) {
      if (super.chStartsBindingIdentifier(e, s))
        return !0;
      const i = this.nextTokenStart();
      return this.input.charCodeAt(i) === 37 && this.input.charCodeAt(i + 1) === 37;
    }
    verifyBreakContinue(e, s) {
      var i;
      ((i = e.label) == null ? void 0 : i.type) !== "Placeholder" && super.verifyBreakContinue(e, s);
    }
    parseExpressionStatement(e, s) {
      var i;
      if (s.type !== "Placeholder" || (i = s.extra) != null && i.parenthesized)
        return super.parseExpressionStatement(e, s);
      if (this.match(14)) {
        const n = e;
        return n.label = this.finishPlaceholder(s, "Identifier"), this.next(), n.body = super.parseStatementOrSloppyAnnexBFunctionDeclaration(), this.finishNode(n, "LabeledStatement");
      }
      this.semicolon();
      const r = e;
      return r.name = s.name, this.finishPlaceholder(r, "Statement");
    }
    parseBlock(e, s, i) {
      return this.parsePlaceholder("BlockStatement") || super.parseBlock(e, s, i);
    }
    parseFunctionId(e) {
      return this.parsePlaceholder("Identifier") || super.parseFunctionId(e);
    }
    parseClass(e, s, i) {
      const r = s ? "ClassDeclaration" : "ClassExpression";
      this.next();
      const n = this.state.strict, c = this.parsePlaceholder("Identifier");
      if (c)
        if (this.match(81) || this.match(133) || this.match(5))
          e.id = c;
        else {
          if (i || !s)
            return e.id = null, e.body = this.finishPlaceholder(c, "ClassBody"), this.finishNode(e, r);
          throw this.raise(Zs.ClassNameIsRequired, this.state.startLoc);
        }
      else
        this.parseClassId(e, s, i);
      return super.parseClassSuper(e), e.body = this.parsePlaceholder("ClassBody") || super.parseClassBody(!!e.superClass, n), this.finishNode(e, r);
    }
    parseExport(e, s) {
      const i = this.parsePlaceholder("Identifier");
      if (!i) return super.parseExport(e, s);
      const r = e;
      if (!this.isContextual(98) && !this.match(12))
        return r.specifiers = [], r.source = null, r.declaration = this.finishPlaceholder(i, "Declaration"), this.finishNode(r, "ExportNamedDeclaration");
      this.expectPlugin("exportDefaultFrom");
      const n = this.startNode();
      return n.exported = i, r.specifiers = [this.finishNode(n, "ExportDefaultSpecifier")], super.parseExport(r, s);
    }
    isExportDefaultSpecifier() {
      if (this.match(65)) {
        const e = this.nextTokenStart();
        if (this.isUnparsedContextual(e, "from") && this.input.startsWith(Ie(133), this.nextTokenStartSince(e + 4)))
          return !0;
      }
      return super.isExportDefaultSpecifier();
    }
    maybeParseExportDefaultSpecifier(e, s) {
      var i;
      return (i = e.specifiers) != null && i.length ? !0 : super.maybeParseExportDefaultSpecifier(e, s);
    }
    checkExport(e) {
      const {
        specifiers: s
      } = e;
      s != null && s.length && (e.specifiers = s.filter((i) => i.exported.type === "Placeholder")), super.checkExport(e), e.specifiers = s;
    }
    parseImport(e) {
      const s = this.parsePlaceholder("Identifier");
      if (!s) return super.parseImport(e);
      if (e.specifiers = [], !this.isContextual(98) && !this.match(12))
        return e.source = this.finishPlaceholder(s, "StringLiteral"), this.semicolon(), this.finishNode(e, "ImportDeclaration");
      const i = this.startNodeAtNode(s);
      return i.local = s, e.specifiers.push(this.finishNode(i, "ImportDefaultSpecifier")), this.eat(12) && (this.maybeParseStarImportSpecifier(e) || this.parseNamedImportSpecifiers(e)), this.expectContextual(98), e.source = this.parseImportSource(), this.semicolon(), this.finishNode(e, "ImportDeclaration");
    }
    parseImportSource() {
      return this.parsePlaceholder("StringLiteral") || super.parseImportSource();
    }
    assertNoSpace() {
      this.state.start > this.offsetToSourcePos(this.state.lastTokEndLoc.index) && this.raise(Zs.UnexpectedSpace, this.state.lastTokEndLoc);
    }
  }, Ur = (a) => class extends a {
    parseV8Intrinsic() {
      if (this.match(54)) {
        const e = this.state.startLoc, s = this.startNode();
        if (this.next(), K(this.state.type)) {
          const i = this.parseIdentifierName(), r = this.createIdentifier(s, i);
          if (this.castNodeTo(r, "V8IntrinsicIdentifier"), this.match(10))
            return r;
        }
        this.unexpected(e);
      }
    }
    parseExprAtom(e) {
      return this.parseV8Intrinsic() || super.parseExprAtom(e);
    }
  };
  const Qs = ["minimal", "fsharp", "hack", "smart"], ei = ["^^", "@@", "^", "%", "#"];
  function zr(a) {
    if (a.has("decorators")) {
      if (a.has("decorators-legacy"))
        throw new Error("Cannot use the decorators and decorators-legacy plugin together");
      const s = a.get("decorators").decoratorsBeforeExport;
      if (s != null && typeof s != "boolean")
        throw new Error("'decoratorsBeforeExport' must be a boolean, if specified.");
      const i = a.get("decorators").allowCallParenthesized;
      if (i != null && typeof i != "boolean")
        throw new Error("'allowCallParenthesized' must be a boolean.");
    }
    if (a.has("flow") && a.has("typescript"))
      throw new Error("Cannot combine flow and typescript plugins.");
    if (a.has("placeholders") && a.has("v8intrinsic"))
      throw new Error("Cannot combine placeholders and v8intrinsic plugins.");
    if (a.has("pipelineOperator")) {
      var t;
      const s = a.get("pipelineOperator").proposal;
      if (!Qs.includes(s)) {
        const i = Qs.map((r) => `"${r}"`).join(", ");
        throw new Error(`"pipelineOperator" requires "proposal" option whose value must be one of: ${i}.`);
      }
      if (s === "hack") {
        var e;
        if (a.has("placeholders"))
          throw new Error("Cannot combine placeholders plugin and Hack-style pipes.");
        if (a.has("v8intrinsic"))
          throw new Error("Cannot combine v8intrinsic plugin and Hack-style pipes.");
        const i = a.get("pipelineOperator").topicToken;
        if (!ei.includes(i)) {
          const r = ei.map((n) => `"${n}"`).join(", ");
          throw new Error(`"pipelineOperator" in "proposal": "hack" mode also requires a "topicToken" option whose value must be one of: ${r}.`);
        }
        if (i === "#" && ((e = a.get("recordAndTuple")) == null ? void 0 : e.syntaxType) === "hash")
          throw new Error(`Plugin conflict between \`["pipelineOperator", { proposal: "hack", topicToken: "#" }]\` and \`${JSON.stringify(["recordAndTuple", a.get("recordAndTuple")])}\`.`);
      } else if (s === "smart" && ((t = a.get("recordAndTuple")) == null ? void 0 : t.syntaxType) === "hash")
        throw new Error(`Plugin conflict between \`["pipelineOperator", { proposal: "smart" }]\` and \`${JSON.stringify(["recordAndTuple", a.get("recordAndTuple")])}\`.`);
    }
    if (a.has("moduleAttributes")) {
      if (a.has("deprecatedImportAssert") || a.has("importAssertions"))
        throw new Error("Cannot combine importAssertions, deprecatedImportAssert and moduleAttributes plugins.");
      if (a.get("moduleAttributes").version !== "may-2020")
        throw new Error("The 'moduleAttributes' plugin requires a 'version' option, representing the last proposal update. Currently, the only supported value is 'may-2020'.");
    }
    if (a.has("importAssertions") && a.has("deprecatedImportAssert"))
      throw new Error("Cannot combine importAssertions and deprecatedImportAssert plugins.");
    if (a.has("deprecatedImportAssert") || a.has("importAttributes") && a.get("importAttributes").deprecatedAssertSyntax && a.set("deprecatedImportAssert", {}), a.has("recordAndTuple")) {
      const s = a.get("recordAndTuple").syntaxType;
      if (s != null) {
        const i = ["hash", "bar"];
        if (!i.includes(s))
          throw new Error("The 'syntaxType' option of the 'recordAndTuple' plugin must be one of: " + i.map((r) => `'${r}'`).join(", "));
      }
    }
    if (a.has("asyncDoExpressions") && !a.has("doExpressions")) {
      const s = new Error("'asyncDoExpressions' requires 'doExpressions', please add 'doExpressions' to parser plugins.");
      throw s.missingPlugins = "doExpressions", s;
    }
    if (a.has("optionalChainingAssign") && a.get("optionalChainingAssign").version !== "2023-07")
      throw new Error("The 'optionalChainingAssign' plugin requires a 'version' option, representing the last proposal update. Currently, the only supported value is '2023-07'.");
    if (a.has("discardBinding") && a.get("discardBinding").syntaxType !== "void")
      throw new Error("The 'discardBinding' plugin requires a 'syntaxType' option. Currently the only supported value is 'void'.");
  }
  const ti = {
    estree: ht,
    jsx: kt,
    flow: Zt,
    typescript: Mr,
    v8intrinsic: Ur,
    placeholders: Rr
  }, $r = Object.keys(ti);
  class Hr extends jr {
    checkProto(t, e, s, i) {
      if (t.type === "SpreadElement" || this.isObjectMethod(t) || t.computed || t.shorthand)
        return s;
      const r = t.key;
      return (r.type === "Identifier" ? r.name : r.value) === "__proto__" ? e ? (this.raise(m.RecordNoProto, r), !0) : (s && (i ? i.doubleProtoLoc === null && (i.doubleProtoLoc = r.loc.start) : this.raise(m.DuplicateProto, r)), !0) : s;
    }
    shouldExitDescending(t, e) {
      return t.type === "ArrowFunctionExpression" && this.offsetToSourcePos(t.start) === e;
    }
    getExpression() {
      if (this.enterInitialScopes(), this.nextToken(), this.match(140))
        throw this.raise(m.ParseExpressionEmptyInput, this.state.startLoc);
      const t = this.parseExpression();
      if (!this.match(140))
        throw this.raise(m.ParseExpressionExpectsEOF, this.state.startLoc, {
          unexpected: this.input.codePointAt(this.state.start)
        });
      return this.finalizeRemainingComments(), t.comments = this.comments, t.errors = this.state.errors, this.optionFlags & 256 && (t.tokens = this.tokens), t;
    }
    parseExpression(t, e) {
      return t ? this.disallowInAnd(() => this.parseExpressionBase(e)) : this.allowInAnd(() => this.parseExpressionBase(e));
    }
    parseExpressionBase(t) {
      const e = this.state.startLoc, s = this.parseMaybeAssign(t);
      if (this.match(12)) {
        const i = this.startNodeAt(e);
        for (i.expressions = [s]; this.eat(12); )
          i.expressions.push(this.parseMaybeAssign(t));
        return this.toReferencedList(i.expressions), this.finishNode(i, "SequenceExpression");
      }
      return s;
    }
    parseMaybeAssignDisallowIn(t, e) {
      return this.disallowInAnd(() => this.parseMaybeAssign(t, e));
    }
    parseMaybeAssignAllowIn(t, e) {
      return this.allowInAnd(() => this.parseMaybeAssign(t, e));
    }
    setOptionalParametersError(t) {
      t.optionalParametersLoc = this.state.startLoc;
    }
    parseMaybeAssign(t, e) {
      const s = this.state.startLoc, i = this.isContextual(108);
      if (i && this.prodParam.hasYield) {
        this.next();
        let p = this.parseYield(s);
        return e && (p = e.call(this, p, s)), p;
      }
      let r;
      t ? r = !1 : (t = new rs(), r = !0);
      const {
        type: n
      } = this.state;
      (n === 10 || K(n)) && (this.state.potentialArrowAt = this.state.start);
      let c = this.parseMaybeConditional(t);
      if (e && (c = e.call(this, c, s)), Xe(this.state.type)) {
        const p = this.startNodeAt(s), f = this.state.value;
        if (p.operator = f, this.match(29)) {
          this.toAssignable(c, !0), p.left = c;
          const y = s.index;
          t.doubleProtoLoc != null && t.doubleProtoLoc.index >= y && (t.doubleProtoLoc = null), t.shorthandAssignLoc != null && t.shorthandAssignLoc.index >= y && (t.shorthandAssignLoc = null), t.privateKeyLoc != null && t.privateKeyLoc.index >= y && (this.checkDestructuringPrivate(t), t.privateKeyLoc = null), t.voidPatternLoc != null && t.voidPatternLoc.index >= y && (t.voidPatternLoc = null);
        } else
          p.left = c;
        return this.next(), p.right = this.parseMaybeAssign(), this.checkLVal(c, this.finishNode(p, "AssignmentExpression"), void 0, void 0, void 0, void 0, f === "||=" || f === "&&=" || f === "??="), p;
      } else r && this.checkExpressionErrors(t, !0);
      if (i) {
        const {
          type: p
        } = this.state;
        if ((this.hasPlugin("v8intrinsic") ? ne(p) : ne(p) && !this.match(54)) && !this.isAmbiguousPrefixOrIdentifier())
          return this.raiseOverwrite(m.YieldNotInGeneratorFunction, s), this.parseYield(s);
      }
      return c;
    }
    parseMaybeConditional(t) {
      const e = this.state.startLoc, s = this.state.potentialArrowAt, i = this.parseExprOps(t);
      return this.shouldExitDescending(i, s) ? i : this.parseConditional(i, e, t);
    }
    parseConditional(t, e, s) {
      if (this.eat(17)) {
        const i = this.startNodeAt(e);
        return i.test = t, i.consequent = this.parseMaybeAssignAllowIn(), this.expect(14), i.alternate = this.parseMaybeAssign(), this.finishNode(i, "ConditionalExpression");
      }
      return t;
    }
    parseMaybeUnaryOrPrivate(t) {
      return this.match(139) ? this.parsePrivateName() : this.parseMaybeUnary(t);
    }
    parseExprOps(t) {
      const e = this.state.startLoc, s = this.state.potentialArrowAt, i = this.parseMaybeUnaryOrPrivate(t);
      return this.shouldExitDescending(i, s) ? i : this.parseExprOp(i, e, -1);
    }
    parseExprOp(t, e, s) {
      if (this.isPrivateName(t)) {
        const r = this.getPrivateNameSV(t);
        (s >= dt(58) || !this.prodParam.hasIn || !this.match(58)) && this.raise(m.PrivateInExpectedIn, t, {
          identifierName: r
        }), this.classScope.usePrivateName(r, t.loc.start);
      }
      const i = this.state.type;
      if (Rt(i) && (this.prodParam.hasIn || !this.match(58))) {
        let r = dt(i);
        if (r > s) {
          if (i === 39) {
            if (this.expectPlugin("pipelineOperator"), this.state.inFSharpPipelineDirectBody)
              return t;
            this.checkPipelineAtInfixOperator(t, e);
          }
          const n = this.startNodeAt(e);
          n.left = t, n.operator = this.state.value;
          const c = i === 41 || i === 42, p = i === 40;
          if (p && (r = dt(42)), this.next(), i === 39 && this.hasPlugin(["pipelineOperator", {
            proposal: "minimal"
          }]) && this.state.type === 96 && this.prodParam.hasAwait)
            throw this.raise(m.UnexpectedAwaitAfterPipelineBody, this.state.startLoc);
          n.right = this.parseExprOpRightExpr(i, r);
          const f = this.finishNode(n, c || p ? "LogicalExpression" : "BinaryExpression"), y = this.state.type;
          if (p && (y === 41 || y === 42) || c && y === 40)
            throw this.raise(m.MixingCoalesceWithLogical, this.state.startLoc);
          return this.parseExprOp(f, e, s);
        }
      }
      return t;
    }
    parseExprOpRightExpr(t, e) {
      const s = this.state.startLoc;
      switch (t) {
        case 39:
          switch (this.getPluginOption("pipelineOperator", "proposal")) {
            case "hack":
              return this.withTopicBindingContext(() => this.parseHackPipeBody());
            case "fsharp":
              return this.withSoloAwaitPermittingContext(() => this.parseFSharpPipelineBody(e));
          }
          if (this.getPluginOption("pipelineOperator", "proposal") === "smart")
            return this.withTopicBindingContext(() => {
              if (this.prodParam.hasYield && this.isContextual(108))
                throw this.raise(m.PipeBodyIsTighter, this.state.startLoc);
              return this.parseSmartPipelineBodyInStyle(this.parseExprOpBaseRightExpr(t, e), s);
            });
        default:
          return this.parseExprOpBaseRightExpr(t, e);
      }
    }
    parseExprOpBaseRightExpr(t, e) {
      const s = this.state.startLoc;
      return this.parseExprOp(this.parseMaybeUnaryOrPrivate(), s, Ut(t) ? e - 1 : e);
    }
    parseHackPipeBody() {
      var t;
      const {
        startLoc: e
      } = this.state, s = this.parseMaybeAssign();
      return w.has(s.type) && !((t = s.extra) != null && t.parenthesized) && this.raise(m.PipeUnparenthesizedBody, e, {
        type: s.type
      }), this.topicReferenceWasUsedInCurrentContext() || this.raise(m.PipeTopicUnused, e), s;
    }
    checkExponentialAfterUnary(t) {
      this.match(57) && this.raise(m.UnexpectedTokenUnaryExponentiation, t.argument);
    }
    parseMaybeUnary(t, e) {
      const s = this.state.startLoc, i = this.isContextual(96);
      if (i && this.recordAwaitIfAllowed()) {
        this.next();
        const p = this.parseAwait(s);
        return e || this.checkExponentialAfterUnary(p), p;
      }
      const r = this.match(34), n = this.startNode();
      if (vt(this.state.type)) {
        n.operator = this.state.value, n.prefix = !0, this.match(72) && this.expectPlugin("throwExpressions");
        const p = this.match(89);
        if (this.next(), n.argument = this.parseMaybeUnary(null, !0), this.checkExpressionErrors(t, !0), this.state.strict && p) {
          const f = n.argument;
          f.type === "Identifier" ? this.raise(m.StrictDelete, n) : this.hasPropertyAsPrivateName(f) && this.raise(m.DeletePrivateField, n);
        }
        if (!r)
          return e || this.checkExponentialAfterUnary(n), this.finishNode(n, "UnaryExpression");
      }
      const c = this.parseUpdate(n, r, t);
      if (i) {
        const {
          type: p
        } = this.state;
        if ((this.hasPlugin("v8intrinsic") ? ne(p) : ne(p) && !this.match(54)) && !this.isAmbiguousPrefixOrIdentifier())
          return this.raiseOverwrite(m.AwaitNotInAsyncContext, s), this.parseAwait(s);
      }
      return c;
    }
    parseUpdate(t, e, s) {
      if (e) {
        const n = t;
        return this.checkLVal(n.argument, this.finishNode(n, "UpdateExpression")), t;
      }
      const i = this.state.startLoc;
      let r = this.parseExprSubscripts(s);
      if (this.checkExpressionErrors(s, !1)) return r;
      for (; fs(this.state.type) && !this.canInsertSemicolon(); ) {
        const n = this.startNodeAt(i);
        n.operator = this.state.value, n.prefix = !1, n.argument = r, this.next(), this.checkLVal(r, r = this.finishNode(n, "UpdateExpression"));
      }
      return r;
    }
    parseExprSubscripts(t) {
      const e = this.state.startLoc, s = this.state.potentialArrowAt, i = this.parseExprAtom(t);
      return this.shouldExitDescending(i, s) ? i : this.parseSubscripts(i, e);
    }
    parseSubscripts(t, e, s) {
      const i = {
        optionalChainMember: !1,
        maybeAsyncArrow: this.atPossibleAsyncArrow(t),
        stop: !1
      };
      do
        t = this.parseSubscript(t, e, s, i), i.maybeAsyncArrow = !1;
      while (!i.stop);
      return t;
    }
    parseSubscript(t, e, s, i) {
      const {
        type: r
      } = this.state;
      if (!s && r === 15)
        return this.parseBind(t, e, i);
      if (ft(r))
        return this.parseTaggedTemplateExpression(t, e, i);
      let n = !1;
      if (r === 18) {
        if (s && (this.raise(m.OptionalChainingNoNew, this.state.startLoc), this.lookaheadCharCode() === 40))
          return this.stopParseSubscript(t, i);
        i.optionalChainMember = n = !0, this.next();
      }
      if (!s && this.match(10))
        return this.parseCoverCallAndAsyncArrowHead(t, e, i, n);
      {
        const c = this.eat(0);
        return c || n || this.eat(16) ? this.parseMember(t, e, i, c, n) : this.stopParseSubscript(t, i);
      }
    }
    stopParseSubscript(t, e) {
      return e.stop = !0, t;
    }
    parseMember(t, e, s, i, r) {
      const n = this.startNodeAt(e);
      return n.object = t, n.computed = i, i ? (n.property = this.parseExpression(), this.expect(3)) : this.match(139) ? (t.type === "Super" && this.raise(m.SuperPrivateField, e), this.classScope.usePrivateName(this.state.value, this.state.startLoc), n.property = this.parsePrivateName()) : n.property = this.parseIdentifier(!0), s.optionalChainMember ? (n.optional = r, this.finishNode(n, "OptionalMemberExpression")) : this.finishNode(n, "MemberExpression");
    }
    parseBind(t, e, s) {
      const i = this.startNodeAt(e);
      i.object = t, this.next();
      const r = this.match(83), n = this.parseNoCallExpr();
      if (n.type === "Super" || r && n.type === "ImportExpression" || n.type === "Import")
        throw this.raise(m.UnsupportedBindRHS, n);
      return i.callee = n, s.stop = !0, this.parseSubscripts(this.finishNode(i, "BindExpression"), e, !1);
    }
    parseCoverCallAndAsyncArrowHead(t, e, s, i) {
      const r = this.state.maybeInArrowParameters;
      let n = null;
      this.state.maybeInArrowParameters = !0, this.next();
      const c = this.startNodeAt(e);
      c.callee = t;
      const {
        maybeAsyncArrow: p,
        optionalChainMember: f
      } = s;
      p && (this.expressionScope.enter(Ir()), n = new rs()), f && (c.optional = i), i ? c.arguments = this.parseCallExpressionArguments() : c.arguments = this.parseCallExpressionArguments(t.type !== "Super", c, n);
      let y = this.finishCallExpression(c, f);
      return p && this.shouldParseAsyncArrow() && !i ? (s.stop = !0, this.checkDestructuringPrivate(n), this.expressionScope.validateAsPattern(), this.expressionScope.exit(), y = this.parseAsyncArrowFromCallExpression(this.startNodeAt(e), y)) : (p && (this.checkExpressionErrors(n, !0), this.expressionScope.exit()), this.toReferencedArguments(y)), this.state.maybeInArrowParameters = r, y;
    }
    toReferencedArguments(t, e) {
      this.toReferencedListDeep(t.arguments, e);
    }
    parseTaggedTemplateExpression(t, e, s) {
      const i = this.startNodeAt(e);
      return i.tag = t, i.quasi = this.parseTemplate(!0), s.optionalChainMember && this.raise(m.OptionalChainingNoTemplate, e), this.finishNode(i, "TaggedTemplateExpression");
    }
    atPossibleAsyncArrow(t) {
      return t.type === "Identifier" && t.name === "async" && this.state.lastTokEndLoc.index === t.end && !this.canInsertSemicolon() && t.end - t.start === 5 && this.offsetToSourcePos(t.start) === this.state.potentialArrowAt;
    }
    finishCallExpression(t, e) {
      if (t.callee.type === "Import")
        if (t.arguments.length === 0 || t.arguments.length > 2)
          this.raise(m.ImportCallArity, t);
        else
          for (const s of t.arguments)
            s.type === "SpreadElement" && this.raise(m.ImportCallSpreadArgument, s);
      return this.finishNode(t, e ? "OptionalCallExpression" : "CallExpression");
    }
    parseCallExpressionArguments(t, e, s) {
      const i = [];
      let r = !0;
      const n = this.state.inFSharpPipelineDirectBody;
      for (this.state.inFSharpPipelineDirectBody = !1; !this.eat(11); ) {
        if (r)
          r = !1;
        else if (this.expect(12), this.match(11)) {
          e && this.addTrailingCommaExtraToNode(e), this.next();
          break;
        }
        i.push(this.parseExprListItem(11, !1, s, t));
      }
      return this.state.inFSharpPipelineDirectBody = n, i;
    }
    shouldParseAsyncArrow() {
      return this.match(19) && !this.canInsertSemicolon();
    }
    parseAsyncArrowFromCallExpression(t, e) {
      var s;
      return this.resetPreviousNodeTrailingComments(e), this.expect(19), this.parseArrowExpression(t, e.arguments, !0, (s = e.extra) == null ? void 0 : s.trailingCommaLoc), e.innerComments && Et(t, e.innerComments), e.callee.trailingComments && Et(t, e.callee.trailingComments), t;
    }
    parseNoCallExpr() {
      const t = this.state.startLoc;
      return this.parseSubscripts(this.parseExprAtom(), t, !0);
    }
    parseExprAtom(t) {
      let e, s = null;
      const {
        type: i
      } = this.state;
      switch (i) {
        case 79:
          return this.parseSuper();
        case 83:
          return e = this.startNode(), this.next(), this.match(16) ? this.parseImportMetaPropertyOrPhaseCall(e) : this.match(10) ? this.optionFlags & 512 ? this.parseImportCall(e) : this.finishNode(e, "Import") : (this.raise(m.UnsupportedImport, this.state.lastTokStartLoc), this.finishNode(e, "Import"));
        case 78:
          return e = this.startNode(), this.next(), this.finishNode(e, "ThisExpression");
        case 90:
          return this.parseDo(this.startNode(), !1);
        case 56:
        case 31:
          return this.readRegexp(), this.parseRegExpLiteral(this.state.value);
        case 135:
          return this.parseNumericLiteral(this.state.value);
        case 136:
          return this.parseBigIntLiteral(this.state.value);
        case 134:
          return this.parseStringLiteral(this.state.value);
        case 84:
          return this.parseNullLiteral();
        case 85:
          return this.parseBooleanLiteral(!0);
        case 86:
          return this.parseBooleanLiteral(!1);
        case 10: {
          const r = this.state.potentialArrowAt === this.state.start;
          return this.parseParenAndDistinguishExpression(r);
        }
        case 0:
          return this.parseArrayLike(3, !1, t);
        case 5:
          return this.parseObjectLike(8, !1, !1, t);
        case 68:
          return this.parseFunctionOrFunctionSent();
        case 26:
          s = this.parseDecorators();
        case 80:
          return this.parseClass(this.maybeTakeDecorators(s, this.startNode()), !1);
        case 77:
          return this.parseNewOrNewTarget();
        case 25:
        case 24:
          return this.parseTemplate(!1);
        case 15: {
          e = this.startNode(), this.next(), e.object = null;
          const r = e.callee = this.parseNoCallExpr();
          if (r.type === "MemberExpression")
            return this.finishNode(e, "BindExpression");
          throw this.raise(m.UnsupportedBind, r);
        }
        case 139:
          return this.raise(m.PrivateInExpectedIn, this.state.startLoc, {
            identifierName: this.state.value
          }), this.parsePrivateName();
        case 33:
          return this.parseTopicReferenceThenEqualsSign(54, "%");
        case 32:
          return this.parseTopicReferenceThenEqualsSign(44, "^");
        case 37:
        case 38:
          return this.parseTopicReference("hack");
        case 44:
        case 54:
        case 27: {
          const r = this.getPluginOption("pipelineOperator", "proposal");
          if (r)
            return this.parseTopicReference(r);
          throw this.unexpected();
        }
        case 47: {
          const r = this.input.codePointAt(this.nextTokenStart());
          throw Fe(r) || r === 62 ? this.expectOnePlugin(["jsx", "flow", "typescript"]) : this.unexpected();
        }
        default:
          if (i === 137)
            return this.parseDecimalLiteral(this.state.value);
          if (i === 2 || i === 1)
            return this.parseArrayLike(this.state.type === 2 ? 4 : 3, !0);
          if (i === 6 || i === 7)
            return this.parseObjectLike(this.state.type === 6 ? 9 : 8, !1, !0);
          if (K(i)) {
            if (this.isContextual(127) && this.lookaheadInLineCharCode() === 123)
              return this.parseModuleExpression();
            const r = this.state.potentialArrowAt === this.state.start, n = this.state.containsEsc, c = this.parseIdentifier();
            if (!n && c.name === "async" && !this.canInsertSemicolon()) {
              const {
                type: p
              } = this.state;
              if (p === 68)
                return this.resetPreviousNodeTrailingComments(c), this.next(), this.parseAsyncFunctionExpression(this.startNodeAtNode(c));
              if (K(p))
                return r && this.lookaheadCharCode() === 61 ? this.parseAsyncArrowUnaryFunction(this.startNodeAtNode(c)) : c;
              if (p === 90)
                return this.resetPreviousNodeTrailingComments(c), this.parseDo(this.startNodeAtNode(c), !0);
            }
            return r && this.match(19) && !this.canInsertSemicolon() ? (this.next(), this.parseArrowExpression(this.startNodeAtNode(c), [c], !1)) : c;
          } else
            throw this.unexpected();
      }
    }
    parseTopicReferenceThenEqualsSign(t, e) {
      const s = this.getPluginOption("pipelineOperator", "proposal");
      if (s)
        return this.state.type = t, this.state.value = e, this.state.pos--, this.state.end--, this.state.endLoc = d(this.state.endLoc, -1), this.parseTopicReference(s);
      throw this.unexpected();
    }
    parseTopicReference(t) {
      const e = this.startNode(), s = this.state.startLoc, i = this.state.type;
      return this.next(), this.finishTopicReference(e, s, t, i);
    }
    finishTopicReference(t, e, s, i) {
      if (this.testTopicReferenceConfiguration(s, e, i))
        return s === "hack" ? (this.topicReferenceIsAllowedInCurrentContext() || this.raise(m.PipeTopicUnbound, e), this.registerTopicReference(), this.finishNode(t, "TopicReference")) : (this.topicReferenceIsAllowedInCurrentContext() || this.raise(m.PrimaryTopicNotAllowed, e), this.registerTopicReference(), this.finishNode(t, "PipelinePrimaryTopicReference"));
      throw this.raise(m.PipeTopicUnconfiguredToken, e, {
        token: Ie(i)
      });
    }
    testTopicReferenceConfiguration(t, e, s) {
      switch (t) {
        case "hack":
          return this.hasPlugin(["pipelineOperator", {
            topicToken: Ie(s)
          }]);
        case "smart":
          return s === 27;
        default:
          throw this.raise(m.PipeTopicRequiresHackPipes, e);
      }
    }
    parseAsyncArrowUnaryFunction(t) {
      this.prodParam.enter(ts(!0, this.prodParam.hasYield));
      const e = [this.parseIdentifier()];
      return this.prodParam.exit(), this.hasPrecedingLineBreak() && this.raise(m.LineTerminatorBeforeArrow, this.state.curPosition()), this.expect(19), this.parseArrowExpression(t, e, !0);
    }
    parseDo(t, e) {
      this.expectPlugin("doExpressions"), e && this.expectPlugin("asyncDoExpressions"), t.async = e, this.next();
      const s = this.state.labels;
      return this.state.labels = [], e ? (this.prodParam.enter(2), t.body = this.parseBlock(), this.prodParam.exit()) : t.body = this.parseBlock(), this.state.labels = s, this.finishNode(t, "DoExpression");
    }
    parseSuper() {
      const t = this.startNode();
      return this.next(), this.match(10) && !this.scope.allowDirectSuper ? this.optionFlags & 16 || this.raise(m.SuperNotAllowed, t) : this.scope.allowSuper || this.optionFlags & 16 || this.raise(m.UnexpectedSuper, t), !this.match(10) && !this.match(0) && !this.match(16) && this.raise(m.UnsupportedSuper, t), this.finishNode(t, "Super");
    }
    parsePrivateName() {
      const t = this.startNode(), e = this.startNodeAt(d(this.state.startLoc, 1)), s = this.state.value;
      return this.next(), t.id = this.createIdentifier(e, s), this.finishNode(t, "PrivateName");
    }
    parseFunctionOrFunctionSent() {
      const t = this.startNode();
      if (this.next(), this.prodParam.hasYield && this.match(16)) {
        const e = this.createIdentifier(this.startNodeAtNode(t), "function");
        return this.next(), this.match(103) ? this.expectPlugin("functionSent") : this.hasPlugin("functionSent") || this.unexpected(), this.parseMetaProperty(t, e, "sent");
      }
      return this.parseFunction(t);
    }
    parseMetaProperty(t, e, s) {
      t.meta = e;
      const i = this.state.containsEsc;
      return t.property = this.parseIdentifier(!0), (t.property.name !== s || i) && this.raise(m.UnsupportedMetaProperty, t.property, {
        target: e.name,
        onlyValidPropertyName: s
      }), this.finishNode(t, "MetaProperty");
    }
    parseImportMetaPropertyOrPhaseCall(t) {
      if (this.next(), this.isContextual(105) || this.isContextual(97)) {
        const e = this.isContextual(105);
        return this.expectPlugin(e ? "sourcePhaseImports" : "deferredImportEvaluation"), this.next(), t.phase = e ? "source" : "defer", this.parseImportCall(t);
      } else {
        const e = this.createIdentifierAt(this.startNodeAtNode(t), "import", this.state.lastTokStartLoc);
        return this.isContextual(101) && (this.inModule || this.raise(m.ImportMetaOutsideModule, e), this.sawUnambiguousESM = !0), this.parseMetaProperty(t, e, "meta");
      }
    }
    parseLiteralAtNode(t, e, s) {
      return this.addExtra(s, "rawValue", t), this.addExtra(s, "raw", this.input.slice(this.offsetToSourcePos(s.start), this.state.end)), s.value = t, this.next(), this.finishNode(s, e);
    }
    parseLiteral(t, e) {
      const s = this.startNode();
      return this.parseLiteralAtNode(t, e, s);
    }
    parseStringLiteral(t) {
      return this.parseLiteral(t, "StringLiteral");
    }
    parseNumericLiteral(t) {
      return this.parseLiteral(t, "NumericLiteral");
    }
    parseBigIntLiteral(t) {
      return this.parseLiteral(t, "BigIntLiteral");
    }
    parseDecimalLiteral(t) {
      return this.parseLiteral(t, "DecimalLiteral");
    }
    parseRegExpLiteral(t) {
      const e = this.startNode();
      return this.addExtra(e, "raw", this.input.slice(this.offsetToSourcePos(e.start), this.state.end)), e.pattern = t.pattern, e.flags = t.flags, this.next(), this.finishNode(e, "RegExpLiteral");
    }
    parseBooleanLiteral(t) {
      const e = this.startNode();
      return e.value = t, this.next(), this.finishNode(e, "BooleanLiteral");
    }
    parseNullLiteral() {
      const t = this.startNode();
      return this.next(), this.finishNode(t, "NullLiteral");
    }
    parseParenAndDistinguishExpression(t) {
      const e = this.state.startLoc;
      let s;
      this.next(), this.expressionScope.enter(Cr());
      const i = this.state.maybeInArrowParameters, r = this.state.inFSharpPipelineDirectBody;
      this.state.maybeInArrowParameters = !0, this.state.inFSharpPipelineDirectBody = !1;
      const n = this.state.startLoc, c = [], p = new rs();
      let f = !0, y, T;
      for (; !this.match(11); ) {
        if (f)
          f = !1;
        else if (this.expect(12, p.optionalParametersLoc === null ? null : p.optionalParametersLoc), this.match(11)) {
          T = this.state.startLoc;
          break;
        }
        if (this.match(21)) {
          const M = this.state.startLoc;
          if (y = this.state.startLoc, c.push(this.parseParenItem(this.parseRestBinding(), M)), !this.checkCommaAfterRest(41))
            break;
        } else
          c.push(this.parseMaybeAssignAllowInOrVoidPattern(11, p, this.parseParenItem));
      }
      const I = this.state.lastTokEndLoc;
      this.expect(11), this.state.maybeInArrowParameters = i, this.state.inFSharpPipelineDirectBody = r;
      let E = this.startNodeAt(e);
      return t && this.shouldParseArrow(c) && (E = this.parseArrow(E)) ? (this.checkDestructuringPrivate(p), this.expressionScope.validateAsPattern(), this.expressionScope.exit(), this.parseArrowExpression(E, c, !1), E) : (this.expressionScope.exit(), c.length || this.unexpected(this.state.lastTokStartLoc), T && this.unexpected(T), y && this.unexpected(y), this.checkExpressionErrors(p, !0), this.toReferencedListDeep(c, !0), c.length > 1 ? (s = this.startNodeAt(n), s.expressions = c, this.finishNode(s, "SequenceExpression"), this.resetEndLocation(s, I)) : s = c[0], this.wrapParenthesis(e, s));
    }
    wrapParenthesis(t, e) {
      if (!(this.optionFlags & 1024))
        return this.addExtra(e, "parenthesized", !0), this.addExtra(e, "parenStart", t.index), this.takeSurroundingComments(e, t.index, this.state.lastTokEndLoc.index), e;
      const s = this.startNodeAt(t);
      return s.expression = e, this.finishNode(s, "ParenthesizedExpression");
    }
    shouldParseArrow(t) {
      return !this.canInsertSemicolon();
    }
    parseArrow(t) {
      if (this.eat(19))
        return t;
    }
    parseParenItem(t, e) {
      return t;
    }
    parseNewOrNewTarget() {
      const t = this.startNode();
      if (this.next(), this.match(16)) {
        const e = this.createIdentifier(this.startNodeAtNode(t), "new");
        this.next();
        const s = this.parseMetaProperty(t, e, "target");
        return this.scope.allowNewTarget || this.raise(m.UnexpectedNewTarget, s), s;
      }
      return this.parseNew(t);
    }
    parseNew(t) {
      if (this.parseNewCallee(t), this.eat(10)) {
        const e = this.parseExprList(11);
        this.toReferencedList(e), t.arguments = e;
      } else
        t.arguments = [];
      return this.finishNode(t, "NewExpression");
    }
    parseNewCallee(t) {
      const e = this.match(83), s = this.parseNoCallExpr();
      t.callee = s, (e && s.type === "ImportExpression" || s.type === "Import") && this.raise(m.ImportCallNotNewExpression, s), s.type === "Super" && this.raise(m.SuperCallNotNewExpression, s);
    }
    parseTemplateElement(t) {
      const {
        start: e,
        startLoc: s,
        end: i,
        value: r
      } = this.state, n = e + 1, c = this.startNodeAt(d(s, 1));
      r === null && (t || this.raise(m.InvalidEscapeSequenceTemplate, d(this.state.firstInvalidTemplateEscapePos, 1)));
      const p = this.match(24), f = p ? -1 : -2, y = i + f;
      c.value = {
        raw: this.input.slice(n, y).replace(/\r\n?/g, `
`),
        cooked: r === null ? null : r.slice(1, f)
      }, c.tail = p, this.next();
      const T = this.finishNode(c, "TemplateElement");
      return this.resetEndLocation(T, d(this.state.lastTokEndLoc, f)), T;
    }
    parseTemplate(t) {
      const e = this.startNode();
      let s = this.parseTemplateElement(t);
      const i = [s], r = [];
      for (; !s.tail; )
        r.push(this.parseTemplateSubstitution()), this.readTemplateContinuation(), i.push(s = this.parseTemplateElement(t));
      return e.expressions = r, e.quasis = i, this.finishNode(e, "TemplateLiteral");
    }
    parseTemplateSubstitution() {
      return this.parseExpression();
    }
    parseObjectLike(t, e, s, i) {
      s && this.expectPlugin("recordAndTuple");
      const r = this.state.inFSharpPipelineDirectBody;
      this.state.inFSharpPipelineDirectBody = !1;
      let n = !1, c = !0;
      const p = this.startNode();
      for (p.properties = [], this.next(); !this.match(t); ) {
        if (c)
          c = !1;
        else if (this.expect(12), this.match(t)) {
          this.addTrailingCommaExtraToNode(p);
          break;
        }
        let y;
        e ? y = this.parseBindingProperty() : (y = this.parsePropertyDefinition(i), n = this.checkProto(y, s, n, i)), s && !this.isObjectProperty(y) && y.type !== "SpreadElement" && this.raise(m.InvalidRecordProperty, y), y.shorthand && this.addExtra(y, "shorthand", !0), p.properties.push(y);
      }
      this.next(), this.state.inFSharpPipelineDirectBody = r;
      let f = "ObjectExpression";
      return e ? f = "ObjectPattern" : s && (f = "RecordExpression"), this.finishNode(p, f);
    }
    addTrailingCommaExtraToNode(t) {
      this.addExtra(t, "trailingComma", this.state.lastTokStartLoc.index), this.addExtra(t, "trailingCommaLoc", this.state.lastTokStartLoc, !1);
    }
    maybeAsyncOrAccessorProp(t) {
      return !t.computed && t.key.type === "Identifier" && (this.isLiteralPropertyName() || this.match(0) || this.match(55));
    }
    parsePropertyDefinition(t) {
      let e = [];
      if (this.match(26))
        for (this.hasPlugin("decorators") && this.raise(m.UnsupportedPropertyDecorator, this.state.startLoc); this.match(26); )
          e.push(this.parseDecorator());
      const s = this.startNode();
      let i = !1, r = !1, n;
      if (this.match(21))
        return e.length && this.unexpected(), this.parseSpread();
      e.length && (s.decorators = e, e = []), s.method = !1, t && (n = this.state.startLoc);
      let c = this.eat(55);
      this.parsePropertyNamePrefixOperator(s);
      const p = this.state.containsEsc;
      if (this.parsePropertyName(s, t), !c && !p && this.maybeAsyncOrAccessorProp(s)) {
        const {
          key: f
        } = s, y = f.name;
        y === "async" && !this.hasPrecedingLineBreak() && (i = !0, this.resetPreviousNodeTrailingComments(f), c = this.eat(55), this.parsePropertyName(s)), (y === "get" || y === "set") && (r = !0, this.resetPreviousNodeTrailingComments(f), s.kind = y, this.match(55) && (c = !0, this.raise(m.AccessorIsGenerator, this.state.curPosition(), {
          kind: y
        }), this.next()), this.parsePropertyName(s));
      }
      return this.parseObjPropValue(s, n, c, i, !1, r, t);
    }
    getGetterSetterExpectedParamCount(t) {
      return t.kind === "get" ? 0 : 1;
    }
    getObjectOrClassMethodParams(t) {
      return t.params;
    }
    checkGetterSetterParams(t) {
      var e;
      const s = this.getGetterSetterExpectedParamCount(t), i = this.getObjectOrClassMethodParams(t);
      i.length !== s && this.raise(t.kind === "get" ? m.BadGetterArity : m.BadSetterArity, t), t.kind === "set" && ((e = i[i.length - 1]) == null ? void 0 : e.type) === "RestElement" && this.raise(m.BadSetterRestParameter, t);
    }
    parseObjectMethod(t, e, s, i, r) {
      if (r) {
        const n = this.parseMethod(t, e, !1, !1, !1, "ObjectMethod");
        return this.checkGetterSetterParams(n), n;
      }
      if (s || e || this.match(10))
        return i && this.unexpected(), t.kind = "method", t.method = !0, this.parseMethod(t, e, s, !1, !1, "ObjectMethod");
    }
    parseObjectProperty(t, e, s, i) {
      if (t.shorthand = !1, this.eat(14))
        return t.value = s ? this.parseMaybeDefault(this.state.startLoc) : this.parseMaybeAssignAllowInOrVoidPattern(8, i), this.finishObjectProperty(t);
      if (!t.computed && t.key.type === "Identifier") {
        if (this.checkReservedWord(t.key.name, t.key.loc.start, !0, !1), s)
          t.value = this.parseMaybeDefault(e, this.cloneIdentifier(t.key));
        else if (this.match(29)) {
          const r = this.state.startLoc;
          i != null ? i.shorthandAssignLoc === null && (i.shorthandAssignLoc = r) : this.raise(m.InvalidCoverInitializedName, r), t.value = this.parseMaybeDefault(e, this.cloneIdentifier(t.key));
        } else
          t.value = this.cloneIdentifier(t.key);
        return t.shorthand = !0, this.finishObjectProperty(t);
      }
    }
    finishObjectProperty(t) {
      return this.finishNode(t, "ObjectProperty");
    }
    parseObjPropValue(t, e, s, i, r, n, c) {
      const p = this.parseObjectMethod(t, s, i, r, n) || this.parseObjectProperty(t, e, r, c);
      return p || this.unexpected(), p;
    }
    parsePropertyName(t, e) {
      if (this.eat(0))
        t.computed = !0, t.key = this.parseMaybeAssignAllowIn(), this.expect(3);
      else {
        const {
          type: s,
          value: i
        } = this.state;
        let r;
        if (G(s))
          r = this.parseIdentifier(!0);
        else
          switch (s) {
            case 135:
              r = this.parseNumericLiteral(i);
              break;
            case 134:
              r = this.parseStringLiteral(i);
              break;
            case 136:
              r = this.parseBigIntLiteral(i);
              break;
            case 139: {
              const n = this.state.startLoc;
              e != null ? e.privateKeyLoc === null && (e.privateKeyLoc = n) : this.raise(m.UnexpectedPrivateField, n), r = this.parsePrivateName();
              break;
            }
            default:
              if (s === 137) {
                r = this.parseDecimalLiteral(i);
                break;
              }
              this.unexpected();
          }
        t.key = r, s !== 139 && (t.computed = !1);
      }
    }
    initFunction(t, e) {
      t.id = null, t.generator = !1, t.async = e;
    }
    parseMethod(t, e, s, i, r, n, c = !1) {
      this.initFunction(t, s), t.generator = e, this.scope.enter(530 | (c ? 576 : 0) | (r ? 32 : 0)), this.prodParam.enter(ts(s, t.generator)), this.parseFunctionParams(t, i);
      const p = this.parseFunctionBodyAndFinish(t, n, !0);
      return this.prodParam.exit(), this.scope.exit(), p;
    }
    parseArrayLike(t, e, s) {
      e && this.expectPlugin("recordAndTuple");
      const i = this.state.inFSharpPipelineDirectBody;
      this.state.inFSharpPipelineDirectBody = !1;
      const r = this.startNode();
      return this.next(), r.elements = this.parseExprList(t, !e, s, r), this.state.inFSharpPipelineDirectBody = i, this.finishNode(r, e ? "TupleExpression" : "ArrayExpression");
    }
    parseArrowExpression(t, e, s, i) {
      this.scope.enter(518);
      let r = ts(s, !1);
      !this.match(5) && this.prodParam.hasIn && (r |= 8), this.prodParam.enter(r), this.initFunction(t, s);
      const n = this.state.maybeInArrowParameters;
      return e && (this.state.maybeInArrowParameters = !0, this.setArrowFunctionParameters(t, e, i)), this.state.maybeInArrowParameters = !1, this.parseFunctionBody(t, !0), this.prodParam.exit(), this.scope.exit(), this.state.maybeInArrowParameters = n, this.finishNode(t, "ArrowFunctionExpression");
    }
    setArrowFunctionParameters(t, e, s) {
      this.toAssignableList(e, s, !1), t.params = e;
    }
    parseFunctionBodyAndFinish(t, e, s = !1) {
      return this.parseFunctionBody(t, !1, s), this.finishNode(t, e);
    }
    parseFunctionBody(t, e, s = !1) {
      const i = e && !this.match(5);
      if (this.expressionScope.enter(Ks()), i)
        t.body = this.parseMaybeAssign(), this.checkParams(t, !1, e, !1);
      else {
        const r = this.state.strict, n = this.state.labels;
        this.state.labels = [], this.prodParam.enter(this.prodParam.currentFlags() | 4), t.body = this.parseBlock(!0, !1, (c) => {
          const p = !this.isSimpleParamList(t.params);
          c && p && this.raise(m.IllegalLanguageModeDirective, (t.kind === "method" || t.kind === "constructor") && t.key ? t.key.loc.end : t);
          const f = !r && this.state.strict;
          this.checkParams(t, !this.state.strict && !e && !s && !p, e, f), this.state.strict && t.id && this.checkIdentifier(t.id, 65, f);
        }), this.prodParam.exit(), this.state.labels = n;
      }
      this.expressionScope.exit();
    }
    isSimpleParameter(t) {
      return t.type === "Identifier";
    }
    isSimpleParamList(t) {
      for (let e = 0, s = t.length; e < s; e++)
        if (!this.isSimpleParameter(t[e])) return !1;
      return !0;
    }
    checkParams(t, e, s, i = !0) {
      const r = !e && /* @__PURE__ */ new Set(), n = {
        type: "FormalParameters"
      };
      for (const c of t.params)
        this.checkLVal(c, n, 5, r, i);
    }
    parseExprList(t, e, s, i) {
      const r = [];
      let n = !0;
      for (; !this.eat(t); ) {
        if (n)
          n = !1;
        else if (this.expect(12), this.match(t)) {
          i && this.addTrailingCommaExtraToNode(i), this.next();
          break;
        }
        r.push(this.parseExprListItem(t, e, s));
      }
      return r;
    }
    parseExprListItem(t, e, s, i) {
      let r;
      if (this.match(12))
        e || this.raise(m.UnexpectedToken, this.state.curPosition(), {
          unexpected: ","
        }), r = null;
      else if (this.match(21)) {
        const n = this.state.startLoc;
        r = this.parseParenItem(this.parseSpread(s), n);
      } else if (this.match(17)) {
        this.expectPlugin("partialApplication"), i || this.raise(m.UnexpectedArgumentPlaceholder, this.state.startLoc);
        const n = this.startNode();
        this.next(), r = this.finishNode(n, "ArgumentPlaceholder");
      } else
        r = this.parseMaybeAssignAllowInOrVoidPattern(t, s, this.parseParenItem);
      return r;
    }
    parseIdentifier(t) {
      const e = this.startNode(), s = this.parseIdentifierName(t);
      return this.createIdentifier(e, s);
    }
    createIdentifier(t, e) {
      return t.name = e, t.loc.identifierName = e, this.finishNode(t, "Identifier");
    }
    createIdentifierAt(t, e, s) {
      return t.name = e, t.loc.identifierName = e, this.finishNodeAt(t, "Identifier", s);
    }
    parseIdentifierName(t) {
      let e;
      const {
        startLoc: s,
        type: i
      } = this.state;
      G(i) ? e = this.state.value : this.unexpected();
      const r = Pe(i);
      return t ? r && this.replaceToken(132) : this.checkReservedWord(e, s, r, !1), this.next(), e;
    }
    checkReservedWord(t, e, s, i) {
      if (t.length > 10 || !qt(t))
        return;
      if (s && Ht(t)) {
        this.raise(m.UnexpectedKeyword, e, {
          keyword: t
        });
        return;
      }
      if ((this.state.strict ? i ? $t : ye : zt)(t, this.inModule)) {
        this.raise(m.UnexpectedReservedWord, e, {
          reservedWord: t
        });
        return;
      } else if (t === "yield") {
        if (this.prodParam.hasYield) {
          this.raise(m.YieldBindingIdentifier, e);
          return;
        }
      } else if (t === "await") {
        if (this.prodParam.hasAwait) {
          this.raise(m.AwaitBindingIdentifier, e);
          return;
        }
        if (this.scope.inStaticBlock) {
          this.raise(m.AwaitBindingIdentifierInStaticBlock, e);
          return;
        }
        this.expressionScope.recordAsyncArrowParametersError(e);
      } else if (t === "arguments" && this.scope.inClassAndNotInNonArrowFunction) {
        this.raise(m.ArgumentsInClass, e);
        return;
      }
    }
    recordAwaitIfAllowed() {
      const t = this.prodParam.hasAwait;
      return t && !this.scope.inFunction && (this.state.hasTopLevelAwait = !0), t;
    }
    parseAwait(t) {
      const e = this.startNodeAt(t);
      return this.expressionScope.recordParameterInitializerError(m.AwaitExpressionFormalParameter, e), this.eat(55) && this.raise(m.ObsoleteAwaitStar, e), !this.scope.inFunction && !(this.optionFlags & 1) && (this.isAmbiguousPrefixOrIdentifier() ? this.ambiguousScriptDifferentAst = !0 : this.sawUnambiguousESM = !0), this.state.soloAwait || (e.argument = this.parseMaybeUnary(null, !0)), this.finishNode(e, "AwaitExpression");
    }
    isAmbiguousPrefixOrIdentifier() {
      if (this.hasPrecedingLineBreak()) return !0;
      const {
        type: t
      } = this.state;
      return t === 53 || t === 10 || t === 0 || ft(t) || t === 102 && !this.state.containsEsc || t === 138 || t === 56 || this.hasPlugin("v8intrinsic") && t === 54;
    }
    parseYield(t) {
      const e = this.startNodeAt(t);
      this.expressionScope.recordParameterInitializerError(m.YieldInParameter, e);
      let s = !1, i = null;
      if (!this.hasPrecedingLineBreak())
        switch (s = this.eat(55), this.state.type) {
          case 13:
          case 140:
          case 8:
          case 11:
          case 3:
          case 9:
          case 14:
          case 12:
            if (!s) break;
          default:
            i = this.parseMaybeAssign();
        }
      return e.delegate = s, e.argument = i, this.finishNode(e, "YieldExpression");
    }
    parseImportCall(t) {
      if (this.next(), t.source = this.parseMaybeAssignAllowIn(), t.options = null, this.eat(12)) {
        if (this.match(11))
          this.addTrailingCommaExtraToNode(t.source);
        else if (t.options = this.parseMaybeAssignAllowIn(), this.eat(12) && (this.addTrailingCommaExtraToNode(t.options), !this.match(11))) {
          do
            this.parseMaybeAssignAllowIn();
          while (this.eat(12) && !this.match(11));
          this.raise(m.ImportCallArity, t);
        }
      }
      return this.expect(11), this.finishNode(t, "ImportExpression");
    }
    checkPipelineAtInfixOperator(t, e) {
      this.hasPlugin(["pipelineOperator", {
        proposal: "smart"
      }]) && t.type === "SequenceExpression" && this.raise(m.PipelineHeadSequenceExpression, e);
    }
    parseSmartPipelineBodyInStyle(t, e) {
      if (this.isSimpleReference(t)) {
        const s = this.startNodeAt(e);
        return s.callee = t, this.finishNode(s, "PipelineBareFunction");
      } else {
        const s = this.startNodeAt(e);
        return this.checkSmartPipeTopicBodyEarlyErrors(e), s.expression = t, this.finishNode(s, "PipelineTopicExpression");
      }
    }
    isSimpleReference(t) {
      switch (t.type) {
        case "MemberExpression":
          return !t.computed && this.isSimpleReference(t.object);
        case "Identifier":
          return !0;
        default:
          return !1;
      }
    }
    checkSmartPipeTopicBodyEarlyErrors(t) {
      if (this.match(19))
        throw this.raise(m.PipelineBodyNoArrow, this.state.startLoc);
      this.topicReferenceWasUsedInCurrentContext() || this.raise(m.PipelineTopicUnused, t);
    }
    withTopicBindingContext(t) {
      const e = this.state.topicContext;
      this.state.topicContext = {
        maxNumOfResolvableTopics: 1,
        maxTopicIndex: null
      };
      try {
        return t();
      } finally {
        this.state.topicContext = e;
      }
    }
    withSmartMixTopicForbiddingContext(t) {
      if (this.hasPlugin(["pipelineOperator", {
        proposal: "smart"
      }])) {
        const e = this.state.topicContext;
        this.state.topicContext = {
          maxNumOfResolvableTopics: 0,
          maxTopicIndex: null
        };
        try {
          return t();
        } finally {
          this.state.topicContext = e;
        }
      } else
        return t();
    }
    withSoloAwaitPermittingContext(t) {
      const e = this.state.soloAwait;
      this.state.soloAwait = !0;
      try {
        return t();
      } finally {
        this.state.soloAwait = e;
      }
    }
    allowInAnd(t) {
      const e = this.prodParam.currentFlags();
      if (8 & ~e) {
        this.prodParam.enter(e | 8);
        try {
          return t();
        } finally {
          this.prodParam.exit();
        }
      }
      return t();
    }
    disallowInAnd(t) {
      const e = this.prodParam.currentFlags();
      if (8 & e) {
        this.prodParam.enter(e & -9);
        try {
          return t();
        } finally {
          this.prodParam.exit();
        }
      }
      return t();
    }
    registerTopicReference() {
      this.state.topicContext.maxTopicIndex = 0;
    }
    topicReferenceIsAllowedInCurrentContext() {
      return this.state.topicContext.maxNumOfResolvableTopics >= 1;
    }
    topicReferenceWasUsedInCurrentContext() {
      return this.state.topicContext.maxTopicIndex != null && this.state.topicContext.maxTopicIndex >= 0;
    }
    parseFSharpPipelineBody(t) {
      const e = this.state.startLoc;
      this.state.potentialArrowAt = this.state.start;
      const s = this.state.inFSharpPipelineDirectBody;
      this.state.inFSharpPipelineDirectBody = !0;
      const i = this.parseExprOp(this.parseMaybeUnaryOrPrivate(), e, t);
      return this.state.inFSharpPipelineDirectBody = s, i;
    }
    parseModuleExpression() {
      this.expectPlugin("moduleBlocks");
      const t = this.startNode();
      this.next(), this.match(5) || this.unexpected(null, 5);
      const e = this.startNodeAt(this.state.endLoc);
      this.next();
      const s = this.initializeScopes(!0);
      this.enterInitialScopes();
      try {
        t.body = this.parseProgram(e, 8, "module");
      } finally {
        s();
      }
      return this.finishNode(t, "ModuleExpression");
    }
    parseVoidPattern(t) {
      this.expectPlugin("discardBinding");
      const e = this.startNode();
      return t != null && (t.voidPatternLoc = this.state.startLoc), this.next(), this.finishNode(e, "VoidPattern");
    }
    parseMaybeAssignAllowInOrVoidPattern(t, e, s) {
      if (e != null && this.match(88)) {
        const i = this.lookaheadCharCode();
        if (i === 44 || i === (t === 3 ? 93 : t === 8 ? 125 : 41) || i === 61)
          return this.parseMaybeDefault(this.state.startLoc, this.parseVoidPattern(e));
      }
      return this.parseMaybeAssignAllowIn(e, s);
    }
    parsePropertyNamePrefixOperator(t) {
    }
  }
  const As = {
    kind: 1
  }, Vr = {
    kind: 2
  }, qr = /[\uD800-\uDFFF]/u, Ss = /in(?:stanceof)?/y;
  function Wr(a, t, e) {
    for (let s = 0; s < a.length; s++) {
      const i = a[s], {
        type: r
      } = i;
      if (typeof r == "number") {
        if (r === 139) {
          const {
            loc: n,
            start: c,
            value: p,
            end: f
          } = i, y = c + 1, T = d(n.start, 1);
          a.splice(s, 1, new ot({
            type: Me(27),
            value: "#",
            start: c,
            end: y,
            startLoc: n.start,
            endLoc: T
          }), new ot({
            type: Me(132),
            value: p,
            start: y,
            end: f,
            startLoc: T,
            endLoc: n.end
          })), s++;
          continue;
        }
        if (ft(r)) {
          const {
            loc: n,
            start: c,
            value: p,
            end: f
          } = i, y = c + 1, T = d(n.start, 1);
          let I;
          t.charCodeAt(c - e) === 96 ? I = new ot({
            type: Me(22),
            value: "`",
            start: c,
            end: y,
            startLoc: n.start,
            endLoc: T
          }) : I = new ot({
            type: Me(8),
            value: "}",
            start: c,
            end: y,
            startLoc: n.start,
            endLoc: T
          });
          let E, M, X, oe;
          r === 24 ? (M = f - 1, X = d(n.end, -1), E = p === null ? null : p.slice(1, -1), oe = new ot({
            type: Me(22),
            value: "`",
            start: M,
            end: f,
            startLoc: X,
            endLoc: n.end
          })) : (M = f - 2, X = d(n.end, -2), E = p === null ? null : p.slice(1, -2), oe = new ot({
            type: Me(23),
            value: "${",
            start: M,
            end: f,
            startLoc: X,
            endLoc: n.end
          })), a.splice(s, 1, I, new ot({
            type: Me(20),
            value: E,
            start: y,
            end: M,
            startLoc: T,
            endLoc: X
          }), oe), s += 2;
          continue;
        }
        i.type = Me(r);
      }
    }
    return a;
  }
  class Kr extends Hr {
    parseTopLevel(t, e) {
      return t.program = this.parseProgram(e, 140, this.options.sourceType === "module" ? "module" : "script"), t.comments = this.comments, this.optionFlags & 256 && (t.tokens = Wr(this.tokens, this.input, this.startIndex)), this.finishNode(t, "File");
    }
    parseProgram(t, e, s) {
      if (t.sourceType = s, t.interpreter = this.parseInterpreterDirective(), this.parseBlockBody(t, !0, !0, e), this.inModule) {
        if (!(this.optionFlags & 64) && this.scope.undefinedExports.size > 0)
          for (const [r, n] of Array.from(this.scope.undefinedExports))
            this.raise(m.ModuleExportUndefined, n, {
              localName: r
            });
        this.addExtra(t, "topLevelAwait", this.state.hasTopLevelAwait);
      }
      let i;
      return e === 140 ? i = this.finishNode(t, "Program") : i = this.finishNodeAt(t, "Program", d(this.state.startLoc, -1)), i;
    }
    stmtToDirective(t) {
      const e = this.castNodeTo(t, "Directive"), s = this.castNodeTo(t.expression, "DirectiveLiteral"), i = s.value, r = this.input.slice(this.offsetToSourcePos(s.start), this.offsetToSourcePos(s.end)), n = s.value = r.slice(1, -1);
      return this.addExtra(s, "raw", r), this.addExtra(s, "rawValue", n), this.addExtra(s, "expressionValue", i), e.value = s, delete t.expression, e;
    }
    parseInterpreterDirective() {
      if (!this.match(28))
        return null;
      const t = this.startNode();
      return t.value = this.state.value, this.next(), this.finishNode(t, "InterpreterDirective");
    }
    isLet() {
      return this.isContextual(100) ? this.hasFollowingBindingAtom() : !1;
    }
    isUsing() {
      return this.isContextual(107) ? this.nextTokenIsIdentifierOnSameLine() : !1;
    }
    isForUsing() {
      if (!this.isContextual(107))
        return !1;
      const t = this.nextTokenInLineStart(), e = this.codePointAtPos(t);
      if (this.isUnparsedContextual(t, "of")) {
        const s = this.lookaheadCharCodeSince(t + 2);
        if (s !== 61 && s !== 58 && s !== 59)
          return !1;
      }
      return !!(this.chStartsBindingIdentifier(e, t) || this.isUnparsedContextual(t, "void"));
    }
    nextTokenIsIdentifierOnSameLine() {
      const t = this.nextTokenInLineStart(), e = this.codePointAtPos(t);
      return this.chStartsBindingIdentifier(e, t);
    }
    isAwaitUsing() {
      if (!this.isContextual(96))
        return !1;
      let t = this.nextTokenInLineStart();
      if (this.isUnparsedContextual(t, "using")) {
        t = this.nextTokenInLineStartSince(t + 5);
        const e = this.codePointAtPos(t);
        if (this.chStartsBindingIdentifier(e, t))
          return !0;
      }
      return !1;
    }
    chStartsBindingIdentifier(t, e) {
      if (Fe(t)) {
        if (Ss.lastIndex = e, Ss.test(this.input)) {
          const s = this.codePointAtPos(Ss.lastIndex);
          if (!Be(s) && s !== 92)
            return !1;
        }
        return !0;
      } else return t === 92;
    }
    chStartsBindingPattern(t) {
      return t === 91 || t === 123;
    }
    hasFollowingBindingAtom() {
      const t = this.nextTokenStart(), e = this.codePointAtPos(t);
      return this.chStartsBindingPattern(e) || this.chStartsBindingIdentifier(e, t);
    }
    hasInLineFollowingBindingIdentifierOrBrace() {
      const t = this.nextTokenInLineStart(), e = this.codePointAtPos(t);
      return e === 123 || this.chStartsBindingIdentifier(e, t);
    }
    allowsUsing() {
      return (this.scope.inModule || !this.scope.inTopLevel) && !this.scope.inBareCaseStatement;
    }
    parseModuleItem() {
      return this.parseStatementLike(15);
    }
    parseStatementListItem() {
      return this.parseStatementLike(6 | (!this.options.annexB || this.state.strict ? 0 : 8));
    }
    parseStatementOrSloppyAnnexBFunctionDeclaration(t = !1) {
      let e = 0;
      return this.options.annexB && !this.state.strict && (e |= 4, t && (e |= 8)), this.parseStatementLike(e);
    }
    parseStatement() {
      return this.parseStatementLike(0);
    }
    parseStatementLike(t) {
      let e = null;
      return this.match(26) && (e = this.parseDecorators(!0)), this.parseStatementContent(t, e);
    }
    parseStatementContent(t, e) {
      const s = this.state.type, i = this.startNode(), r = !!(t & 2), n = !!(t & 4), c = t & 1;
      switch (s) {
        case 60:
          return this.parseBreakContinueStatement(i, !0);
        case 63:
          return this.parseBreakContinueStatement(i, !1);
        case 64:
          return this.parseDebuggerStatement(i);
        case 90:
          return this.parseDoWhileStatement(i);
        case 91:
          return this.parseForStatement(i);
        case 68:
          if (this.lookaheadCharCode() === 46) break;
          return n || this.raise(this.state.strict ? m.StrictFunction : this.options.annexB ? m.SloppyFunctionAnnexB : m.SloppyFunction, this.state.startLoc), this.parseFunctionStatement(i, !1, !r && n);
        case 80:
          return r || this.unexpected(), this.parseClass(this.maybeTakeDecorators(e, i), !0);
        case 69:
          return this.parseIfStatement(i);
        case 70:
          return this.parseReturnStatement(i);
        case 71:
          return this.parseSwitchStatement(i);
        case 72:
          return this.parseThrowStatement(i);
        case 73:
          return this.parseTryStatement(i);
        case 96:
          if (this.isAwaitUsing())
            return this.allowsUsing() ? r ? this.recordAwaitIfAllowed() || this.raise(m.AwaitUsingNotInAsyncContext, i) : this.raise(m.UnexpectedLexicalDeclaration, i) : this.raise(m.UnexpectedUsingDeclaration, i), this.next(), this.parseVarStatement(i, "await using");
          break;
        case 107:
          if (this.state.containsEsc || !this.hasInLineFollowingBindingIdentifierOrBrace())
            break;
          return this.allowsUsing() ? r || this.raise(m.UnexpectedLexicalDeclaration, this.state.startLoc) : this.raise(m.UnexpectedUsingDeclaration, this.state.startLoc), this.parseVarStatement(i, "using");
        case 100: {
          if (this.state.containsEsc)
            break;
          const y = this.nextTokenStart(), T = this.codePointAtPos(y);
          if (T !== 91 && (!r && this.hasFollowingLineBreak() || !this.chStartsBindingIdentifier(T, y) && T !== 123))
            break;
        }
        case 75:
          r || this.raise(m.UnexpectedLexicalDeclaration, this.state.startLoc);
        case 74: {
          const y = this.state.value;
          return this.parseVarStatement(i, y);
        }
        case 92:
          return this.parseWhileStatement(i);
        case 76:
          return this.parseWithStatement(i);
        case 5:
          return this.parseBlock();
        case 13:
          return this.parseEmptyStatement(i);
        case 83: {
          const y = this.lookaheadCharCode();
          if (y === 40 || y === 46)
            break;
        }
        case 82: {
          !(this.optionFlags & 8) && !c && this.raise(m.UnexpectedImportExport, this.state.startLoc), this.next();
          let y;
          return s === 83 ? y = this.parseImport(i) : y = this.parseExport(i, e), this.assertModuleNodeAllowed(y), y;
        }
        default:
          if (this.isAsyncFunction())
            return r || this.raise(m.AsyncFunctionInSingleStatementContext, this.state.startLoc), this.next(), this.parseFunctionStatement(i, !0, !r && n);
      }
      const p = this.state.value, f = this.parseExpression();
      return K(s) && f.type === "Identifier" && this.eat(14) ? this.parseLabeledStatement(i, p, f, t) : this.parseExpressionStatement(i, f, e);
    }
    assertModuleNodeAllowed(t) {
      !(this.optionFlags & 8) && !this.inModule && this.raise(m.ImportOutsideModule, t);
    }
    decoratorsEnabledBeforeExport() {
      return this.hasPlugin("decorators-legacy") ? !0 : this.hasPlugin("decorators") && this.getPluginOption("decorators", "decoratorsBeforeExport") !== !1;
    }
    maybeTakeDecorators(t, e, s) {
      if (t) {
        var i;
        (i = e.decorators) != null && i.length ? (typeof this.getPluginOption("decorators", "decoratorsBeforeExport") != "boolean" && this.raise(m.DecoratorsBeforeAfterExport, e.decorators[0]), e.decorators.unshift(...t)) : e.decorators = t, this.resetStartLocationFromNode(e, t[0]), s && this.resetStartLocationFromNode(s, e);
      }
      return e;
    }
    canHaveLeadingDecorator() {
      return this.match(80);
    }
    parseDecorators(t) {
      const e = [];
      do
        e.push(this.parseDecorator());
      while (this.match(26));
      if (this.match(82))
        t || this.unexpected(), this.decoratorsEnabledBeforeExport() || this.raise(m.DecoratorExportClass, this.state.startLoc);
      else if (!this.canHaveLeadingDecorator())
        throw this.raise(m.UnexpectedLeadingDecorator, this.state.startLoc);
      return e;
    }
    parseDecorator() {
      this.expectOnePlugin(["decorators", "decorators-legacy"]);
      const t = this.startNode();
      if (this.next(), this.hasPlugin("decorators")) {
        const e = this.state.startLoc;
        let s;
        if (this.match(10)) {
          const i = this.state.startLoc;
          this.next(), s = this.parseExpression(), this.expect(11), s = this.wrapParenthesis(i, s);
          const r = this.state.startLoc;
          t.expression = this.parseMaybeDecoratorArguments(s, i), this.getPluginOption("decorators", "allowCallParenthesized") === !1 && t.expression !== s && this.raise(m.DecoratorArgumentsOutsideParentheses, r);
        } else {
          for (s = this.parseIdentifier(!1); this.eat(16); ) {
            const i = this.startNodeAt(e);
            i.object = s, this.match(139) ? (this.classScope.usePrivateName(this.state.value, this.state.startLoc), i.property = this.parsePrivateName()) : i.property = this.parseIdentifier(!0), i.computed = !1, s = this.finishNode(i, "MemberExpression");
          }
          t.expression = this.parseMaybeDecoratorArguments(s, e);
        }
      } else
        t.expression = this.parseExprSubscripts();
      return this.finishNode(t, "Decorator");
    }
    parseMaybeDecoratorArguments(t, e) {
      if (this.eat(10)) {
        const s = this.startNodeAt(e);
        return s.callee = t, s.arguments = this.parseCallExpressionArguments(), this.toReferencedList(s.arguments), this.finishNode(s, "CallExpression");
      }
      return t;
    }
    parseBreakContinueStatement(t, e) {
      return this.next(), this.isLineTerminator() ? t.label = null : (t.label = this.parseIdentifier(), this.semicolon()), this.verifyBreakContinue(t, e), this.finishNode(t, e ? "BreakStatement" : "ContinueStatement");
    }
    verifyBreakContinue(t, e) {
      let s;
      for (s = 0; s < this.state.labels.length; ++s) {
        const i = this.state.labels[s];
        if ((t.label == null || i.name === t.label.name) && (i.kind != null && (e || i.kind === 1) || t.label && e))
          break;
      }
      if (s === this.state.labels.length) {
        const i = e ? "BreakStatement" : "ContinueStatement";
        this.raise(m.IllegalBreakContinue, t, {
          type: i
        });
      }
    }
    parseDebuggerStatement(t) {
      return this.next(), this.semicolon(), this.finishNode(t, "DebuggerStatement");
    }
    parseHeaderExpression() {
      this.expect(10);
      const t = this.parseExpression();
      return this.expect(11), t;
    }
    parseDoWhileStatement(t) {
      return this.next(), this.state.labels.push(As), t.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement()), this.state.labels.pop(), this.expect(92), t.test = this.parseHeaderExpression(), this.eat(13), this.finishNode(t, "DoWhileStatement");
    }
    parseForStatement(t) {
      this.next(), this.state.labels.push(As);
      let e = null;
      if (this.isContextual(96) && this.recordAwaitIfAllowed() && (e = this.state.startLoc, this.next()), this.scope.enter(0), this.expect(10), this.match(13))
        return e !== null && this.unexpected(e), this.parseFor(t, null);
      const s = this.isContextual(100);
      {
        const p = this.isAwaitUsing(), f = p || this.isForUsing(), y = s && this.hasFollowingBindingAtom() || f;
        if (this.match(74) || this.match(75) || y) {
          const T = this.startNode();
          let I;
          p ? (I = "await using", this.recordAwaitIfAllowed() || this.raise(m.AwaitUsingNotInAsyncContext, this.state.startLoc), this.next()) : I = this.state.value, this.next(), this.parseVar(T, !0, I);
          const E = this.finishNode(T, "VariableDeclaration"), M = this.match(58);
          return M && f && this.raise(m.ForInUsing, E), (M || this.isContextual(102)) && E.declarations.length === 1 ? this.parseForIn(t, E, e) : (e !== null && this.unexpected(e), this.parseFor(t, E));
        }
      }
      const i = this.isContextual(95), r = new rs(), n = this.parseExpression(!0, r), c = this.isContextual(102);
      if (c && (s && this.raise(m.ForOfLet, n), e === null && i && n.type === "Identifier" && this.raise(m.ForOfAsync, n)), c || this.match(58)) {
        this.checkDestructuringPrivate(r), this.toAssignable(n, !0);
        const p = c ? "ForOfStatement" : "ForInStatement";
        return this.checkLVal(n, {
          type: p
        }), this.parseForIn(t, n, e);
      } else
        this.checkExpressionErrors(r, !0);
      return e !== null && this.unexpected(e), this.parseFor(t, n);
    }
    parseFunctionStatement(t, e, s) {
      return this.next(), this.parseFunction(t, 1 | (s ? 2 : 0) | (e ? 8 : 0));
    }
    parseIfStatement(t) {
      return this.next(), t.test = this.parseHeaderExpression(), t.consequent = this.parseStatementOrSloppyAnnexBFunctionDeclaration(), t.alternate = this.eat(66) ? this.parseStatementOrSloppyAnnexBFunctionDeclaration() : null, this.finishNode(t, "IfStatement");
    }
    parseReturnStatement(t) {
      return this.prodParam.hasReturn || this.raise(m.IllegalReturn, this.state.startLoc), this.next(), this.isLineTerminator() ? t.argument = null : (t.argument = this.parseExpression(), this.semicolon()), this.finishNode(t, "ReturnStatement");
    }
    parseSwitchStatement(t) {
      this.next(), t.discriminant = this.parseHeaderExpression();
      const e = t.cases = [];
      this.expect(5), this.state.labels.push(Vr), this.scope.enter(256);
      let s;
      for (let i; !this.match(8); )
        if (this.match(61) || this.match(65)) {
          const r = this.match(61);
          s && this.finishNode(s, "SwitchCase"), e.push(s = this.startNode()), s.consequent = [], this.next(), r ? s.test = this.parseExpression() : (i && this.raise(m.MultipleDefaultsInSwitch, this.state.lastTokStartLoc), i = !0, s.test = null), this.expect(14);
        } else
          s ? s.consequent.push(this.parseStatementListItem()) : this.unexpected();
      return this.scope.exit(), s && this.finishNode(s, "SwitchCase"), this.next(), this.state.labels.pop(), this.finishNode(t, "SwitchStatement");
    }
    parseThrowStatement(t) {
      return this.next(), this.hasPrecedingLineBreak() && this.raise(m.NewlineAfterThrow, this.state.lastTokEndLoc), t.argument = this.parseExpression(), this.semicolon(), this.finishNode(t, "ThrowStatement");
    }
    parseCatchClauseParam() {
      const t = this.parseBindingAtom();
      return this.scope.enter(this.options.annexB && t.type === "Identifier" ? 8 : 0), this.checkLVal(t, {
        type: "CatchClause"
      }, 9), t;
    }
    parseTryStatement(t) {
      if (this.next(), t.block = this.parseBlock(), t.handler = null, this.match(62)) {
        const e = this.startNode();
        this.next(), this.match(10) ? (this.expect(10), e.param = this.parseCatchClauseParam(), this.expect(11)) : (e.param = null, this.scope.enter(0)), e.body = this.withSmartMixTopicForbiddingContext(() => this.parseBlock(!1, !1)), this.scope.exit(), t.handler = this.finishNode(e, "CatchClause");
      }
      return t.finalizer = this.eat(67) ? this.parseBlock() : null, !t.handler && !t.finalizer && this.raise(m.NoCatchOrFinally, t), this.finishNode(t, "TryStatement");
    }
    parseVarStatement(t, e, s = !1) {
      return this.next(), this.parseVar(t, !1, e, s), this.semicolon(), this.finishNode(t, "VariableDeclaration");
    }
    parseWhileStatement(t) {
      return this.next(), t.test = this.parseHeaderExpression(), this.state.labels.push(As), t.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement()), this.state.labels.pop(), this.finishNode(t, "WhileStatement");
    }
    parseWithStatement(t) {
      return this.state.strict && this.raise(m.StrictWith, this.state.startLoc), this.next(), t.object = this.parseHeaderExpression(), t.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement()), this.finishNode(t, "WithStatement");
    }
    parseEmptyStatement(t) {
      return this.next(), this.finishNode(t, "EmptyStatement");
    }
    parseLabeledStatement(t, e, s, i) {
      for (const n of this.state.labels)
        n.name === e && this.raise(m.LabelRedeclaration, s, {
          labelName: e
        });
      const r = Ze(this.state.type) ? 1 : this.match(71) ? 2 : null;
      for (let n = this.state.labels.length - 1; n >= 0; n--) {
        const c = this.state.labels[n];
        if (c.statementStart === t.start)
          c.statementStart = this.sourceToOffsetPos(this.state.start), c.kind = r;
        else
          break;
      }
      return this.state.labels.push({
        name: e,
        kind: r,
        statementStart: this.sourceToOffsetPos(this.state.start)
      }), t.body = i & 8 ? this.parseStatementOrSloppyAnnexBFunctionDeclaration(!0) : this.parseStatement(), this.state.labels.pop(), t.label = s, this.finishNode(t, "LabeledStatement");
    }
    parseExpressionStatement(t, e, s) {
      return t.expression = e, this.semicolon(), this.finishNode(t, "ExpressionStatement");
    }
    parseBlock(t = !1, e = !0, s) {
      const i = this.startNode();
      return t && this.state.strictErrors.clear(), this.expect(5), e && this.scope.enter(0), this.parseBlockBody(i, t, !1, 8, s), e && this.scope.exit(), this.finishNode(i, "BlockStatement");
    }
    isValidDirective(t) {
      return t.type === "ExpressionStatement" && t.expression.type === "StringLiteral" && !t.expression.extra.parenthesized;
    }
    parseBlockBody(t, e, s, i, r) {
      const n = t.body = [], c = t.directives = [];
      this.parseBlockOrModuleBlockBody(n, e ? c : void 0, s, i, r);
    }
    parseBlockOrModuleBlockBody(t, e, s, i, r) {
      const n = this.state.strict;
      let c = !1, p = !1;
      for (; !this.match(i); ) {
        const f = s ? this.parseModuleItem() : this.parseStatementListItem();
        if (e && !p) {
          if (this.isValidDirective(f)) {
            const y = this.stmtToDirective(f);
            e.push(y), !c && y.value.value === "use strict" && (c = !0, this.setStrict(!0));
            continue;
          }
          p = !0, this.state.strictErrors.clear();
        }
        t.push(f);
      }
      r == null || r.call(this, c), n || this.setStrict(!1), this.next();
    }
    parseFor(t, e) {
      return t.init = e, this.semicolon(!1), t.test = this.match(13) ? null : this.parseExpression(), this.semicolon(!1), t.update = this.match(11) ? null : this.parseExpression(), this.expect(11), t.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement()), this.scope.exit(), this.state.labels.pop(), this.finishNode(t, "ForStatement");
    }
    parseForIn(t, e, s) {
      const i = this.match(58);
      return this.next(), i ? s !== null && this.unexpected(s) : t.await = s !== null, e.type === "VariableDeclaration" && e.declarations[0].init != null && (!i || !this.options.annexB || this.state.strict || e.kind !== "var" || e.declarations[0].id.type !== "Identifier") && this.raise(m.ForInOfLoopInitializer, e, {
        type: i ? "ForInStatement" : "ForOfStatement"
      }), e.type === "AssignmentPattern" && this.raise(m.InvalidLhs, e, {
        ancestor: {
          type: "ForStatement"
        }
      }), t.left = e, t.right = i ? this.parseExpression() : this.parseMaybeAssignAllowIn(), this.expect(11), t.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement()), this.scope.exit(), this.state.labels.pop(), this.finishNode(t, i ? "ForInStatement" : "ForOfStatement");
    }
    parseVar(t, e, s, i = !1) {
      const r = t.declarations = [];
      for (t.kind = s; ; ) {
        const n = this.startNode();
        if (this.parseVarId(n, s), n.init = this.eat(29) ? e ? this.parseMaybeAssignDisallowIn() : this.parseMaybeAssignAllowIn() : null, n.init === null && !i && (n.id.type !== "Identifier" && !(e && (this.match(58) || this.isContextual(102))) ? this.raise(m.DeclarationMissingInitializer, this.state.lastTokEndLoc, {
          kind: "destructuring"
        }) : (s === "const" || s === "using" || s === "await using") && !(this.match(58) || this.isContextual(102)) && this.raise(m.DeclarationMissingInitializer, this.state.lastTokEndLoc, {
          kind: s
        })), r.push(this.finishNode(n, "VariableDeclarator")), !this.eat(12)) break;
      }
      return t;
    }
    parseVarId(t, e) {
      const s = this.parseBindingAtom();
      e === "using" || e === "await using" ? (s.type === "ArrayPattern" || s.type === "ObjectPattern") && this.raise(m.UsingDeclarationHasBindingPattern, s.loc.start) : s.type === "VoidPattern" && this.raise(m.UnexpectedVoidPattern, s.loc.start), this.checkLVal(s, {
        type: "VariableDeclarator"
      }, e === "var" ? 5 : 8201), t.id = s;
    }
    parseAsyncFunctionExpression(t) {
      return this.parseFunction(t, 8);
    }
    parseFunction(t, e = 0) {
      const s = e & 2, i = !!(e & 1), r = i && !(e & 4), n = !!(e & 8);
      this.initFunction(t, n), this.match(55) && (s && this.raise(m.GeneratorInSingleStatementContext, this.state.startLoc), this.next(), t.generator = !0), i && (t.id = this.parseFunctionId(r));
      const c = this.state.maybeInArrowParameters;
      return this.state.maybeInArrowParameters = !1, this.scope.enter(514), this.prodParam.enter(ts(n, t.generator)), i || (t.id = this.parseFunctionId()), this.parseFunctionParams(t, !1), this.withSmartMixTopicForbiddingContext(() => {
        this.parseFunctionBodyAndFinish(t, i ? "FunctionDeclaration" : "FunctionExpression");
      }), this.prodParam.exit(), this.scope.exit(), i && !s && this.registerFunctionStatementId(t), this.state.maybeInArrowParameters = c, t;
    }
    parseFunctionId(t) {
      return t || K(this.state.type) ? this.parseIdentifier() : null;
    }
    parseFunctionParams(t, e) {
      this.expect(10), this.expressionScope.enter(Nr()), t.params = this.parseBindingList(11, 41, 2 | (e ? 4 : 0)), this.expressionScope.exit();
    }
    registerFunctionStatementId(t) {
      t.id && this.scope.declareName(t.id.name, !this.options.annexB || this.state.strict || t.generator || t.async ? this.scope.treatFunctionsAsVar ? 5 : 8201 : 17, t.id.loc.start);
    }
    parseClass(t, e, s) {
      this.next();
      const i = this.state.strict;
      return this.state.strict = !0, this.parseClassId(t, e, s), this.parseClassSuper(t), t.body = this.parseClassBody(!!t.superClass, i), this.finishNode(t, e ? "ClassDeclaration" : "ClassExpression");
    }
    isClassProperty() {
      return this.match(29) || this.match(13) || this.match(8);
    }
    isClassMethod() {
      return this.match(10);
    }
    nameIsConstructor(t) {
      return t.type === "Identifier" && t.name === "constructor" || t.type === "StringLiteral" && t.value === "constructor";
    }
    isNonstaticConstructor(t) {
      return !t.computed && !t.static && this.nameIsConstructor(t.key);
    }
    parseClassBody(t, e) {
      this.classScope.enter();
      const s = {
        hadConstructor: !1,
        hadSuperClass: t
      };
      let i = [];
      const r = this.startNode();
      if (r.body = [], this.expect(5), this.withSmartMixTopicForbiddingContext(() => {
        for (; !this.match(8); ) {
          if (this.eat(13)) {
            if (i.length > 0)
              throw this.raise(m.DecoratorSemicolon, this.state.lastTokEndLoc);
            continue;
          }
          if (this.match(26)) {
            i.push(this.parseDecorator());
            continue;
          }
          const n = this.startNode();
          i.length && (n.decorators = i, this.resetStartLocationFromNode(n, i[0]), i = []), this.parseClassMember(r, n, s), n.kind === "constructor" && n.decorators && n.decorators.length > 0 && this.raise(m.DecoratorConstructor, n);
        }
      }), this.state.strict = e, this.next(), i.length)
        throw this.raise(m.TrailingDecorator, this.state.startLoc);
      return this.classScope.exit(), this.finishNode(r, "ClassBody");
    }
    parseClassMemberFromModifier(t, e) {
      const s = this.parseIdentifier(!0);
      if (this.isClassMethod()) {
        const i = e;
        return i.kind = "method", i.computed = !1, i.key = s, i.static = !1, this.pushClassMethod(t, i, !1, !1, !1, !1), !0;
      } else if (this.isClassProperty()) {
        const i = e;
        return i.computed = !1, i.key = s, i.static = !1, t.body.push(this.parseClassProperty(i)), !0;
      }
      return this.resetPreviousNodeTrailingComments(s), !1;
    }
    parseClassMember(t, e, s) {
      const i = this.isContextual(106);
      if (i) {
        if (this.parseClassMemberFromModifier(t, e))
          return;
        if (this.eat(5)) {
          this.parseClassStaticBlock(t, e);
          return;
        }
      }
      this.parseClassMemberWithIsStatic(t, e, s, i);
    }
    parseClassMemberWithIsStatic(t, e, s, i) {
      const r = e, n = e, c = e, p = e, f = e, y = r, T = r;
      if (e.static = i, this.parsePropertyNamePrefixOperator(e), this.eat(55)) {
        y.kind = "method";
        const $ = this.match(139);
        if (this.parseClassElementName(y), this.parsePostMemberNameModifiers(y), $) {
          this.pushClassPrivateMethod(t, n, !0, !1);
          return;
        }
        this.isNonstaticConstructor(r) && this.raise(m.ConstructorIsGenerator, r.key), this.pushClassMethod(t, r, !0, !1, !1, !1);
        return;
      }
      const I = !this.state.containsEsc && K(this.state.type), E = this.parseClassElementName(e), M = I ? E.name : null, X = this.isPrivateName(E), oe = this.state.startLoc;
      if (this.parsePostMemberNameModifiers(T), this.isClassMethod()) {
        if (y.kind = "method", X) {
          this.pushClassPrivateMethod(t, n, !1, !1);
          return;
        }
        const $ = this.isNonstaticConstructor(r);
        let ie = !1;
        $ && (r.kind = "constructor", s.hadConstructor && !this.hasPlugin("typescript") && this.raise(m.DuplicateConstructor, E), $ && this.hasPlugin("typescript") && e.override && this.raise(m.OverrideOnConstructor, E), s.hadConstructor = !0, ie = s.hadSuperClass), this.pushClassMethod(t, r, !1, !1, $, ie);
      } else if (this.isClassProperty())
        X ? this.pushClassPrivateProperty(t, p) : this.pushClassProperty(t, c);
      else if (M === "async" && !this.isLineTerminator()) {
        this.resetPreviousNodeTrailingComments(E);
        const $ = this.eat(55);
        T.optional && this.unexpected(oe), y.kind = "method";
        const ie = this.match(139);
        this.parseClassElementName(y), this.parsePostMemberNameModifiers(T), ie ? this.pushClassPrivateMethod(t, n, $, !0) : (this.isNonstaticConstructor(r) && this.raise(m.ConstructorIsAsync, r.key), this.pushClassMethod(t, r, $, !0, !1, !1));
      } else if ((M === "get" || M === "set") && !(this.match(55) && this.isLineTerminator())) {
        this.resetPreviousNodeTrailingComments(E), y.kind = M;
        const $ = this.match(139);
        this.parseClassElementName(r), $ ? this.pushClassPrivateMethod(t, n, !1, !1) : (this.isNonstaticConstructor(r) && this.raise(m.ConstructorIsAccessor, r.key), this.pushClassMethod(t, r, !1, !1, !1, !1)), this.checkGetterSetterParams(r);
      } else if (M === "accessor" && !this.isLineTerminator()) {
        this.expectPlugin("decoratorAutoAccessors"), this.resetPreviousNodeTrailingComments(E);
        const $ = this.match(139);
        this.parseClassElementName(c), this.pushClassAccessorProperty(t, f, $);
      } else this.isLineTerminator() ? X ? this.pushClassPrivateProperty(t, p) : this.pushClassProperty(t, c) : this.unexpected();
    }
    parseClassElementName(t) {
      const {
        type: e,
        value: s
      } = this.state;
      if ((e === 132 || e === 134) && t.static && s === "prototype" && this.raise(m.StaticPrototype, this.state.startLoc), e === 139) {
        s === "constructor" && this.raise(m.ConstructorClassPrivateField, this.state.startLoc);
        const i = this.parsePrivateName();
        return t.key = i, i;
      }
      return this.parsePropertyName(t), t.key;
    }
    parseClassStaticBlock(t, e) {
      var s;
      this.scope.enter(720);
      const i = this.state.labels;
      this.state.labels = [], this.prodParam.enter(0);
      const r = e.body = [];
      this.parseBlockOrModuleBlockBody(r, void 0, !1, 8), this.prodParam.exit(), this.scope.exit(), this.state.labels = i, t.body.push(this.finishNode(e, "StaticBlock")), (s = e.decorators) != null && s.length && this.raise(m.DecoratorStaticBlock, e);
    }
    pushClassProperty(t, e) {
      !e.computed && this.nameIsConstructor(e.key) && this.raise(m.ConstructorClassField, e.key), t.body.push(this.parseClassProperty(e));
    }
    pushClassPrivateProperty(t, e) {
      const s = this.parseClassPrivateProperty(e);
      t.body.push(s), this.classScope.declarePrivateName(this.getPrivateNameSV(s.key), 0, s.key.loc.start);
    }
    pushClassAccessorProperty(t, e, s) {
      !s && !e.computed && this.nameIsConstructor(e.key) && this.raise(m.ConstructorClassField, e.key);
      const i = this.parseClassAccessorProperty(e);
      t.body.push(i), s && this.classScope.declarePrivateName(this.getPrivateNameSV(i.key), 0, i.key.loc.start);
    }
    pushClassMethod(t, e, s, i, r, n) {
      t.body.push(this.parseMethod(e, s, i, r, n, "ClassMethod", !0));
    }
    pushClassPrivateMethod(t, e, s, i) {
      const r = this.parseMethod(e, s, i, !1, !1, "ClassPrivateMethod", !0);
      t.body.push(r);
      const n = r.kind === "get" ? r.static ? 6 : 2 : r.kind === "set" ? r.static ? 5 : 1 : 0;
      this.declareClassPrivateMethodInScope(r, n);
    }
    declareClassPrivateMethodInScope(t, e) {
      this.classScope.declarePrivateName(this.getPrivateNameSV(t.key), e, t.key.loc.start);
    }
    parsePostMemberNameModifiers(t) {
    }
    parseClassPrivateProperty(t) {
      return this.parseInitializer(t), this.semicolon(), this.finishNode(t, "ClassPrivateProperty");
    }
    parseClassProperty(t) {
      return this.parseInitializer(t), this.semicolon(), this.finishNode(t, "ClassProperty");
    }
    parseClassAccessorProperty(t) {
      return this.parseInitializer(t), this.semicolon(), this.finishNode(t, "ClassAccessorProperty");
    }
    parseInitializer(t) {
      this.scope.enter(592), this.expressionScope.enter(Ks()), this.prodParam.enter(0), t.value = this.eat(29) ? this.parseMaybeAssignAllowIn() : null, this.expressionScope.exit(), this.prodParam.exit(), this.scope.exit();
    }
    parseClassId(t, e, s, i = 8331) {
      if (K(this.state.type))
        t.id = this.parseIdentifier(), e && this.declareNameFromIdentifier(t.id, i);
      else if (s || !e)
        t.id = null;
      else
        throw this.raise(m.MissingClassName, this.state.startLoc);
    }
    parseClassSuper(t) {
      t.superClass = this.eat(81) ? this.parseExprSubscripts() : null;
    }
    parseExport(t, e) {
      const s = this.parseMaybeImportPhase(t, !0), i = this.maybeParseExportDefaultSpecifier(t, s), r = !i || this.eat(12), n = r && this.eatExportStar(t), c = n && this.maybeParseExportNamespaceSpecifier(t), p = r && (!c || this.eat(12)), f = i || n;
      if (n && !c) {
        if (i && this.unexpected(), e)
          throw this.raise(m.UnsupportedDecoratorExport, t);
        return this.parseExportFrom(t, !0), this.sawUnambiguousESM = !0, this.finishNode(t, "ExportAllDeclaration");
      }
      const y = this.maybeParseExportNamedSpecifiers(t);
      i && r && !n && !y && this.unexpected(null, 5), c && p && this.unexpected(null, 98);
      let T;
      if (f || y) {
        if (T = !1, e)
          throw this.raise(m.UnsupportedDecoratorExport, t);
        this.parseExportFrom(t, f);
      } else
        T = this.maybeParseExportDeclaration(t);
      if (f || y || T) {
        var I;
        const E = t;
        if (this.checkExport(E, !0, !1, !!E.source), ((I = E.declaration) == null ? void 0 : I.type) === "ClassDeclaration")
          this.maybeTakeDecorators(e, E.declaration, E);
        else if (e)
          throw this.raise(m.UnsupportedDecoratorExport, t);
        return this.sawUnambiguousESM = !0, this.finishNode(E, "ExportNamedDeclaration");
      }
      if (this.eat(65)) {
        const E = t, M = this.parseExportDefaultExpression();
        if (E.declaration = M, M.type === "ClassDeclaration")
          this.maybeTakeDecorators(e, M, E);
        else if (e)
          throw this.raise(m.UnsupportedDecoratorExport, t);
        return this.checkExport(E, !0, !0), this.sawUnambiguousESM = !0, this.finishNode(E, "ExportDefaultDeclaration");
      }
      throw this.unexpected(null, 5);
    }
    eatExportStar(t) {
      return this.eat(55);
    }
    maybeParseExportDefaultSpecifier(t, e) {
      if (e || this.isExportDefaultSpecifier()) {
        this.expectPlugin("exportDefaultFrom", e == null ? void 0 : e.loc.start);
        const s = e || this.parseIdentifier(!0), i = this.startNodeAtNode(s);
        return i.exported = s, t.specifiers = [this.finishNode(i, "ExportDefaultSpecifier")], !0;
      }
      return !1;
    }
    maybeParseExportNamespaceSpecifier(t) {
      if (this.isContextual(93)) {
        var e, s;
        (s = (e = t).specifiers) != null || (e.specifiers = []);
        const i = this.startNodeAt(this.state.lastTokStartLoc);
        return this.next(), i.exported = this.parseModuleExportName(), t.specifiers.push(this.finishNode(i, "ExportNamespaceSpecifier")), !0;
      }
      return !1;
    }
    maybeParseExportNamedSpecifiers(t) {
      if (this.match(5)) {
        const e = t;
        e.specifiers || (e.specifiers = []);
        const s = e.exportKind === "type";
        return e.specifiers.push(...this.parseExportSpecifiers(s)), e.source = null, this.hasPlugin("importAssertions") ? e.assertions = [] : e.attributes = [], e.declaration = null, !0;
      }
      return !1;
    }
    maybeParseExportDeclaration(t) {
      return this.shouldParseExportDeclaration() ? (t.specifiers = [], t.source = null, this.hasPlugin("importAssertions") ? t.assertions = [] : t.attributes = [], t.declaration = this.parseExportDeclaration(t), !0) : !1;
    }
    isAsyncFunction() {
      if (!this.isContextual(95)) return !1;
      const t = this.nextTokenInLineStart();
      return this.isUnparsedContextual(t, "function");
    }
    parseExportDefaultExpression() {
      const t = this.startNode();
      if (this.match(68))
        return this.next(), this.parseFunction(t, 5);
      if (this.isAsyncFunction())
        return this.next(), this.next(), this.parseFunction(t, 13);
      if (this.match(80))
        return this.parseClass(t, !0, !0);
      if (this.match(26))
        return this.hasPlugin("decorators") && this.getPluginOption("decorators", "decoratorsBeforeExport") === !0 && this.raise(m.DecoratorBeforeExport, this.state.startLoc), this.parseClass(this.maybeTakeDecorators(this.parseDecorators(!1), this.startNode()), !0, !0);
      if (this.match(75) || this.match(74) || this.isLet() || this.isUsing() || this.isAwaitUsing())
        throw this.raise(m.UnsupportedDefaultExport, this.state.startLoc);
      const e = this.parseMaybeAssignAllowIn();
      return this.semicolon(), e;
    }
    parseExportDeclaration(t) {
      return this.match(80) ? this.parseClass(this.startNode(), !0, !1) : this.parseStatementListItem();
    }
    isExportDefaultSpecifier() {
      const {
        type: t
      } = this.state;
      if (K(t)) {
        if (t === 95 && !this.state.containsEsc || t === 100)
          return !1;
        if ((t === 130 || t === 129) && !this.state.containsEsc) {
          const i = this.nextTokenStart(), r = this.input.charCodeAt(i);
          if (r === 123 || this.chStartsBindingIdentifier(r, i) && !this.input.startsWith("from", i))
            return this.expectOnePlugin(["flow", "typescript"]), !1;
        }
      } else if (!this.match(65))
        return !1;
      const e = this.nextTokenStart(), s = this.isUnparsedContextual(e, "from");
      if (this.input.charCodeAt(e) === 44 || K(this.state.type) && s)
        return !0;
      if (this.match(65) && s) {
        const i = this.input.charCodeAt(this.nextTokenStartSince(e + 4));
        return i === 34 || i === 39;
      }
      return !1;
    }
    parseExportFrom(t, e) {
      this.eatContextual(98) ? (t.source = this.parseImportSource(), this.checkExport(t), this.maybeParseImportAttributes(t), this.checkJSONModuleImport(t)) : e && this.unexpected(), this.semicolon();
    }
    shouldParseExportDeclaration() {
      const {
        type: t
      } = this.state;
      return t === 26 && (this.expectOnePlugin(["decorators", "decorators-legacy"]), this.hasPlugin("decorators")) ? (this.getPluginOption("decorators", "decoratorsBeforeExport") === !0 && this.raise(m.DecoratorBeforeExport, this.state.startLoc), !0) : this.isUsing() ? (this.raise(m.UsingDeclarationExport, this.state.startLoc), !0) : this.isAwaitUsing() ? (this.raise(m.UsingDeclarationExport, this.state.startLoc), !0) : t === 74 || t === 75 || t === 68 || t === 80 || this.isLet() || this.isAsyncFunction();
    }
    checkExport(t, e, s, i) {
      if (e) {
        var r;
        if (s) {
          if (this.checkDuplicateExports(t, "default"), this.hasPlugin("exportDefaultFrom")) {
            var n;
            const c = t.declaration;
            c.type === "Identifier" && c.name === "from" && c.end - c.start === 4 && !((n = c.extra) != null && n.parenthesized) && this.raise(m.ExportDefaultFromAsIdentifier, c);
          }
        } else if ((r = t.specifiers) != null && r.length)
          for (const c of t.specifiers) {
            const {
              exported: p
            } = c, f = p.type === "Identifier" ? p.name : p.value;
            if (this.checkDuplicateExports(c, f), !i && c.local) {
              const {
                local: y
              } = c;
              y.type !== "Identifier" ? this.raise(m.ExportBindingIsString, c, {
                localName: y.value,
                exportName: f
              }) : (this.checkReservedWord(y.name, y.loc.start, !0, !1), this.scope.checkLocalExport(y));
            }
          }
        else if (t.declaration) {
          const c = t.declaration;
          if (c.type === "FunctionDeclaration" || c.type === "ClassDeclaration") {
            const {
              id: p
            } = c;
            if (!p) throw new Error("Assertion failure");
            this.checkDuplicateExports(t, p.name);
          } else if (c.type === "VariableDeclaration")
            for (const p of c.declarations)
              this.checkDeclaration(p.id);
        }
      }
    }
    checkDeclaration(t) {
      if (t.type === "Identifier")
        this.checkDuplicateExports(t, t.name);
      else if (t.type === "ObjectPattern")
        for (const e of t.properties)
          this.checkDeclaration(e);
      else if (t.type === "ArrayPattern")
        for (const e of t.elements)
          e && this.checkDeclaration(e);
      else t.type === "ObjectProperty" ? this.checkDeclaration(t.value) : t.type === "RestElement" ? this.checkDeclaration(t.argument) : t.type === "AssignmentPattern" && this.checkDeclaration(t.left);
    }
    checkDuplicateExports(t, e) {
      this.exportedIdentifiers.has(e) && (e === "default" ? this.raise(m.DuplicateDefaultExport, t) : this.raise(m.DuplicateExport, t, {
        exportName: e
      })), this.exportedIdentifiers.add(e);
    }
    parseExportSpecifiers(t) {
      const e = [];
      let s = !0;
      for (this.expect(5); !this.eat(8); ) {
        if (s)
          s = !1;
        else if (this.expect(12), this.eat(8)) break;
        const i = this.isContextual(130), r = this.match(134), n = this.startNode();
        n.local = this.parseModuleExportName(), e.push(this.parseExportSpecifier(n, r, t, i));
      }
      return e;
    }
    parseExportSpecifier(t, e, s, i) {
      return this.eatContextual(93) ? t.exported = this.parseModuleExportName() : e ? t.exported = this.cloneStringLiteral(t.local) : t.exported || (t.exported = this.cloneIdentifier(t.local)), this.finishNode(t, "ExportSpecifier");
    }
    parseModuleExportName() {
      if (this.match(134)) {
        const t = this.parseStringLiteral(this.state.value), e = qr.exec(t.value);
        return e && this.raise(m.ModuleExportNameHasLoneSurrogate, t, {
          surrogateCharCode: e[0].charCodeAt(0)
        }), t;
      }
      return this.parseIdentifier(!0);
    }
    isJSONModuleImport(t) {
      return t.assertions != null ? t.assertions.some(({
        key: e,
        value: s
      }) => s.value === "json" && (e.type === "Identifier" ? e.name === "type" : e.value === "type")) : !1;
    }
    checkImportReflection(t) {
      const {
        specifiers: e
      } = t, s = e.length === 1 ? e[0].type : null;
      if (t.phase === "source")
        s !== "ImportDefaultSpecifier" && this.raise(m.SourcePhaseImportRequiresDefault, e[0].loc.start);
      else if (t.phase === "defer")
        s !== "ImportNamespaceSpecifier" && this.raise(m.DeferImportRequiresNamespace, e[0].loc.start);
      else if (t.module) {
        var i;
        s !== "ImportDefaultSpecifier" && this.raise(m.ImportReflectionNotBinding, e[0].loc.start), ((i = t.assertions) == null ? void 0 : i.length) > 0 && this.raise(m.ImportReflectionHasAssertion, e[0].loc.start);
      }
    }
    checkJSONModuleImport(t) {
      if (this.isJSONModuleImport(t) && t.type !== "ExportAllDeclaration") {
        const {
          specifiers: e
        } = t;
        if (e != null) {
          const s = e.find((i) => {
            let r;
            if (i.type === "ExportSpecifier" ? r = i.local : i.type === "ImportSpecifier" && (r = i.imported), r !== void 0)
              return r.type === "Identifier" ? r.name !== "default" : r.value !== "default";
          });
          s !== void 0 && this.raise(m.ImportJSONBindingNotDefault, s.loc.start);
        }
      }
    }
    isPotentialImportPhase(t) {
      return t ? !1 : this.isContextual(105) || this.isContextual(97) || this.isContextual(127);
    }
    applyImportPhase(t, e, s, i) {
      e || (s === "module" ? (this.expectPlugin("importReflection", i), t.module = !0) : this.hasPlugin("importReflection") && (t.module = !1), s === "source" ? (this.expectPlugin("sourcePhaseImports", i), t.phase = "source") : s === "defer" ? (this.expectPlugin("deferredImportEvaluation", i), t.phase = "defer") : this.hasPlugin("sourcePhaseImports") && (t.phase = null));
    }
    parseMaybeImportPhase(t, e) {
      if (!this.isPotentialImportPhase(e))
        return this.applyImportPhase(t, e, null), null;
      const s = this.startNode(), i = this.parseIdentifierName(!0), {
        type: r
      } = this.state;
      return (G(r) ? r !== 98 || this.lookaheadCharCode() === 102 : r !== 12) ? (this.applyImportPhase(t, e, i, s.loc.start), null) : (this.applyImportPhase(t, e, null), this.createIdentifier(s, i));
    }
    isPrecedingIdImportPhase(t) {
      const {
        type: e
      } = this.state;
      return K(e) ? e !== 98 || this.lookaheadCharCode() === 102 : e !== 12;
    }
    parseImport(t) {
      return this.match(134) ? this.parseImportSourceAndAttributes(t) : this.parseImportSpecifiersAndAfter(t, this.parseMaybeImportPhase(t, !1));
    }
    parseImportSpecifiersAndAfter(t, e) {
      t.specifiers = [];
      const i = !this.maybeParseDefaultImportSpecifier(t, e) || this.eat(12), r = i && this.maybeParseStarImportSpecifier(t);
      return i && !r && this.parseNamedImportSpecifiers(t), this.expectContextual(98), this.parseImportSourceAndAttributes(t);
    }
    parseImportSourceAndAttributes(t) {
      var e;
      return (e = t.specifiers) != null || (t.specifiers = []), t.source = this.parseImportSource(), this.maybeParseImportAttributes(t), this.checkImportReflection(t), this.checkJSONModuleImport(t), this.semicolon(), this.sawUnambiguousESM = !0, this.finishNode(t, "ImportDeclaration");
    }
    parseImportSource() {
      return this.match(134) || this.unexpected(), this.parseExprAtom();
    }
    parseImportSpecifierLocal(t, e, s) {
      e.local = this.parseIdentifier(), t.specifiers.push(this.finishImportSpecifier(e, s));
    }
    finishImportSpecifier(t, e, s = 8201) {
      return this.checkLVal(t.local, {
        type: e
      }, s), this.finishNode(t, e);
    }
    parseImportAttributes() {
      this.expect(5);
      const t = [], e = /* @__PURE__ */ new Set();
      do {
        if (this.match(8))
          break;
        const s = this.startNode(), i = this.state.value;
        if (e.has(i) && this.raise(m.ModuleAttributesWithDuplicateKeys, this.state.startLoc, {
          key: i
        }), e.add(i), this.match(134) ? s.key = this.parseStringLiteral(i) : s.key = this.parseIdentifier(!0), this.expect(14), !this.match(134))
          throw this.raise(m.ModuleAttributeInvalidValue, this.state.startLoc);
        s.value = this.parseStringLiteral(this.state.value), t.push(this.finishNode(s, "ImportAttribute"));
      } while (this.eat(12));
      return this.expect(8), t;
    }
    parseModuleAttributes() {
      const t = [], e = /* @__PURE__ */ new Set();
      do {
        const s = this.startNode();
        if (s.key = this.parseIdentifier(!0), s.key.name !== "type" && this.raise(m.ModuleAttributeDifferentFromType, s.key), e.has(s.key.name) && this.raise(m.ModuleAttributesWithDuplicateKeys, s.key, {
          key: s.key.name
        }), e.add(s.key.name), this.expect(14), !this.match(134))
          throw this.raise(m.ModuleAttributeInvalidValue, this.state.startLoc);
        s.value = this.parseStringLiteral(this.state.value), t.push(this.finishNode(s, "ImportAttribute"));
      } while (this.eat(12));
      return t;
    }
    maybeParseImportAttributes(t) {
      let e;
      var s = !1;
      if (this.match(76)) {
        if (this.hasPrecedingLineBreak() && this.lookaheadCharCode() === 40)
          return;
        this.next(), this.hasPlugin("moduleAttributes") ? (e = this.parseModuleAttributes(), this.addExtra(t, "deprecatedWithLegacySyntax", !0)) : e = this.parseImportAttributes(), s = !0;
      } else this.isContextual(94) && !this.hasPrecedingLineBreak() ? (!this.hasPlugin("deprecatedImportAssert") && !this.hasPlugin("importAssertions") && this.raise(m.ImportAttributesUseAssert, this.state.startLoc), this.hasPlugin("importAssertions") || this.addExtra(t, "deprecatedAssertSyntax", !0), this.next(), e = this.parseImportAttributes()) : e = [];
      !s && this.hasPlugin("importAssertions") ? t.assertions = e : t.attributes = e;
    }
    maybeParseDefaultImportSpecifier(t, e) {
      if (e) {
        const s = this.startNodeAtNode(e);
        return s.local = e, t.specifiers.push(this.finishImportSpecifier(s, "ImportDefaultSpecifier")), !0;
      } else if (G(this.state.type))
        return this.parseImportSpecifierLocal(t, this.startNode(), "ImportDefaultSpecifier"), !0;
      return !1;
    }
    maybeParseStarImportSpecifier(t) {
      if (this.match(55)) {
        const e = this.startNode();
        return this.next(), this.expectContextual(93), this.parseImportSpecifierLocal(t, e, "ImportNamespaceSpecifier"), !0;
      }
      return !1;
    }
    parseNamedImportSpecifiers(t) {
      let e = !0;
      for (this.expect(5); !this.eat(8); ) {
        if (e)
          e = !1;
        else {
          if (this.eat(14))
            throw this.raise(m.DestructureNamedImport, this.state.startLoc);
          if (this.expect(12), this.eat(8)) break;
        }
        const s = this.startNode(), i = this.match(134), r = this.isContextual(130);
        s.imported = this.parseModuleExportName();
        const n = this.parseImportSpecifier(s, i, t.importKind === "type" || t.importKind === "typeof", r, void 0);
        t.specifiers.push(n);
      }
    }
    parseImportSpecifier(t, e, s, i, r) {
      if (this.eatContextual(93))
        t.local = this.parseIdentifier();
      else {
        const {
          imported: n
        } = t;
        if (e)
          throw this.raise(m.ImportBindingIsString, t, {
            importName: n.value
          });
        this.checkReservedWord(n.name, t.loc.start, !0, !0), t.local || (t.local = this.cloneIdentifier(n));
      }
      return this.finishImportSpecifier(t, "ImportSpecifier", r);
    }
    isThisParam(t) {
      return t.type === "Identifier" && t.name === "this";
    }
  }
  class si extends Kr {
    constructor(t, e, s) {
      const i = J(t);
      super(i, e), this.options = i, this.initializeScopes(), this.plugins = s, this.filename = i.sourceFilename, this.startIndex = i.startIndex;
      let r = 0;
      i.allowAwaitOutsideFunction && (r |= 1), i.allowReturnOutsideFunction && (r |= 2), i.allowImportExportEverywhere && (r |= 8), i.allowSuperOutsideMethod && (r |= 16), i.allowUndeclaredExports && (r |= 64), i.allowNewTargetOutsideFunction && (r |= 4), i.allowYieldOutsideFunction && (r |= 32), i.ranges && (r |= 128), i.tokens && (r |= 256), i.createImportExpressions && (r |= 512), i.createParenthesizedExpressions && (r |= 1024), i.errorRecovery && (r |= 2048), i.attachComment && (r |= 4096), i.annexB && (r |= 8192), this.optionFlags = r;
    }
    getScopeHandler() {
      return Oe;
    }
    parse() {
      this.enterInitialScopes();
      const t = this.startNode(), e = this.startNode();
      this.nextToken(), t.errors = null;
      const s = this.parseTopLevel(t, e);
      return s.errors = this.state.errors, s.comments.length = this.state.commentsLen, s;
    }
  }
  function Gr(a, t) {
    var e;
    if (((e = t) == null ? void 0 : e.sourceType) === "unambiguous") {
      t = Object.assign({}, t);
      try {
        t.sourceType = "module";
        const s = Lt(t, a), i = s.parse();
        if (s.sawUnambiguousESM)
          return i;
        if (s.ambiguousScriptDifferentAst)
          try {
            return t.sourceType = "script", Lt(t, a).parse();
          } catch {
          }
        else
          i.program.sourceType = "script";
        return i;
      } catch (s) {
        try {
          return t.sourceType = "script", Lt(t, a).parse();
        } catch {
        }
        throw s;
      }
    } else
      return Lt(t, a).parse();
  }
  function Jr(a, t) {
    const e = Lt(t, a);
    return e.options.strictMode && (e.state.strict = !0), e.getExpression();
  }
  function Xr(a) {
    const t = {};
    for (const e of Object.keys(a))
      t[e] = Me(a[e]);
    return t;
  }
  const Yr = Xr(it);
  function Lt(a, t) {
    let e = si;
    const s = /* @__PURE__ */ new Map();
    if (a != null && a.plugins) {
      for (const i of a.plugins) {
        let r, n;
        typeof i == "string" ? r = i : [r, n] = i, s.has(r) || s.set(r, n || {});
      }
      zr(s), e = Zr(s);
    }
    return new e(a, t, s);
  }
  const ii = /* @__PURE__ */ new Map();
  function Zr(a) {
    const t = [];
    for (const i of $r)
      a.has(i) && t.push(i);
    const e = t.join("|");
    let s = ii.get(e);
    if (!s) {
      s = si;
      for (const i of t)
        s = ti[i](s);
      ii.set(e, s);
    }
    return s;
  }
  return wt.parse = Gr, wt.parseExpression = Jr, wt.tokTypes = Yr, wt;
}
var pn = hn();
const ge = {
  foreground: "var(--pitaj-fg, #0f172a)",
  muted: "var(--pitaj-muted, #64748b)",
  border: "var(--pitaj-border, #e2e8f0)",
  surface: "var(--pitaj-surface, #ffffff)",
  accent: "var(--pitaj-accent, #2563eb)"
};
function un({ children: l, size: h = "sm", status: u, background: d, className: x = "", style: b }) {
  const P = h === "sm" ? 360 : h === "md" ? 440 : h === "lg" ? 560 : void 0, A = typeof u == "string" ? { text: u } : u;
  return /* @__PURE__ */ o(
    "div",
    {
      className: `pitaj-inline-widget-card ${x}`.trim(),
      style: {
        width: "100%",
        maxWidth: P,
        padding: 16,
        borderRadius: 16,
        background: d || ge.surface,
        color: ge.foreground,
        boxSizing: "border-box",
        ...st(x),
        ...b
      },
      children: [
        A != null && A.text ? /* @__PURE__ */ o("div", { style: { display: "flex", alignItems: "center", gap: 6, marginBottom: 10, color: ge.muted, fontSize: 12 }, children: [
          A.icon ? /* @__PURE__ */ o(Rs, { name: A.icon, size: "xs", color: "secondary" }) : null,
          /* @__PURE__ */ o("span", { children: A.text })
        ] }) : null,
        l
      ]
    }
  );
}
function dn({ children: l, gap: h = 2, justify: u = "start", align: d = "center", wrap: x = !1, flex: b, className: P = "", style: A }) {
  const L = u === "between" ? "space-between" : u === "around" ? "space-around" : u === "end" ? "flex-end" : u === "center" ? "center" : "flex-start", S = d === "start" ? "flex-start" : d === "end" ? "flex-end" : d === "baseline" ? "baseline" : d === "stretch" ? "stretch" : "center";
  return /* @__PURE__ */ o("div", { className: P, style: { display: "flex", flexDirection: "row", flexWrap: x === !0 || x === "wrap" ? "wrap" : "nowrap", gap: Number(h) * 4, justifyContent: L, alignItems: S, flex: b, ...st(P), ...A }, children: l });
}
function fn({ children: l, gap: h = 2, justify: u = "start", align: d = "stretch", flex: x, className: b = "", style: P }) {
  const A = u === "between" ? "space-between" : u === "end" ? "flex-end" : u === "center" ? "center" : "flex-start", L = d === "start" ? "flex-start" : d === "end" ? "flex-end" : d === "center" ? "center" : "stretch";
  return /* @__PURE__ */ o("div", { className: b, style: { display: "flex", flexDirection: "column", gap: Number(h) * 4, justifyContent: A, alignItems: L, flex: x, minWidth: 0, ...st(b), ...P }, children: l });
}
function mn({ children: l, background: h = "transparent", radius: u = "md", padding: d = 0, border: x = !1, flex: b, width: P, height: A, overflow: L, align: S, justify: N, className: w = "", style: B }) {
  const q = {
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
  }, Q = { none: 0, sm: 6, md: 8, lg: 12, full: 9999 }, be = (D) => typeof D == "number" ? `${D}px` : D;
  return /* @__PURE__ */ o("div", { className: w, style: { display: "flex", alignItems: S === "start" ? "flex-start" : S === "end" ? "flex-end" : "center", justifyContent: N === "start" ? "flex-start" : N === "end" ? "flex-end" : N === "between" ? "space-between" : "center", background: q[h] || h, borderRadius: Q[u], padding: Number(d) * 4, border: x ? `1px solid ${typeof x == "string" ? x : ge.border}` : void 0, flex: b, width: be(P), height: be(A), overflow: L, boxSizing: "border-box", ...st(w), ...B }, children: l });
}
function yn({ value: l, size: h = "md", weight: u = "bold", color: d, className: x = "" }) {
  const b = { sm: 14, md: 16, lg: 18, xl: 20, "2xl": 26 }, P = { normal: 400, medium: 500, semibold: 600, bold: 700 };
  return /* @__PURE__ */ o("h3", { className: x, style: { margin: 0, fontSize: b[h] || 16, lineHeight: 1.2, letterSpacing: "-0.02em", fontWeight: P[u] || 700, color: ds(d), ...st(x) }, children: l });
}
function xn({ value: l, size: h = "sm", weight: u = "normal", color: d = "prose", className: x = "" }) {
  const b = { xs: 11, sm: 12, md: 14, lg: 16 }, P = { normal: 400, medium: 500, semibold: 600, bold: 700 };
  return /* @__PURE__ */ o("p", { className: x, style: { margin: 0, fontSize: b[h] || 12, lineHeight: 1.35, fontWeight: P[u] || 400, color: ds(d), ...st(x) }, children: l });
}
function gn({ value: l, maxLines: h, color: u = "secondary", className: d = "" }) {
  return /* @__PURE__ */ o("span", { className: d, style: { display: h ? "-webkit-box" : void 0, WebkitBoxOrient: h ? "vertical" : void 0, WebkitLineClamp: h, overflow: h ? "hidden" : void 0, fontSize: 11, lineHeight: 1.35, color: ds(u), ...st(d) }, children: l });
}
function ds(l) {
  return !l || l === "prose" ? ge.foreground : l === "secondary" || l === "tertiary" ? ge.muted : l === "success" ? "#15803d" : l === "warning" ? "#b45309" : l === "destructive" ? "#b91c1c" : l === "info" ? "#0369a1" : l === "white" || l === "white-80" ? l === "white" ? "#ffffff" : "rgba(255,255,255,.8)" : l === "currentColor" ? "currentColor" : l;
}
function st(l = "") {
  const h = {}, u = new Set(l.split(/\s+/).filter(Boolean));
  return u.has("text-white") && (h.color = "#ffffff"), u.has("text-zinc-400") && (h.color = "#a1a1aa"), u.has("text-center") && (h.textAlign = "center"), u.has("font-medium") && (h.fontWeight = 500), u.has("font-semibold") && (h.fontWeight = 600), u.has("font-bold") && (h.fontWeight = 700), u.has("bg-white/10") && (h.background = "rgba(255,255,255,.1)"), u.has("border-white/20") && (h.borderColor = "rgba(255,255,255,.2)"), u.has("border-zinc-800") && (h.borderColor = "#27272a"), u.has("border-blue-700") && (h.borderColor = "#1d4ed8"), u.has("border-blue-400") && (h.borderColor = "#60a5fa"), u.has("border-blue-400/30") && (h.background = "rgba(96,165,250,.3)"), h;
}
function bn({ label: l, color: h = "default", className: u = "" }) {
  const d = {
    success: ["#dcfce7", "#166534"],
    warning: ["#fef3c7", "#92400e"],
    info: ["#dbeafe", "#1e40af"],
    destructive: ["#fee2e2", "#991b1b"],
    default: ["#f1f5f9", "#475569"],
    neutral: ["#f1f5f9", "#475569"]
  }, x = d[h] || d.default;
  return /* @__PURE__ */ o("span", { className: u, style: { display: "inline-flex", alignItems: "center", borderRadius: 9999, padding: "2px 8px", fontSize: 10, fontWeight: 600, background: x[0], color: x[1], whiteSpace: "nowrap" }, children: l });
}
function Pn({ flush: l = !1, className: h = "" }) {
  return /* @__PURE__ */ o("div", { className: h, role: "separator", style: { height: 1, background: ge.border, margin: l ? "10px -16px" : "10px 0", ...st(h) } });
}
const Tn = {
  package: ct,
  box: ct,
  check: na,
  "check-circle": aa,
  calendar: ps,
  "shopping-bag": ct,
  "shopping-cart": Ds,
  cart: Ds,
  "alert-circle": _i,
  alert: _i,
  "map-pin": Ls,
  location: Ls,
  star: Fs,
  "credit-card": ra,
  file: Mi,
  "file-text": Mi,
  "external-link": ia,
  "chevron-right": tr,
  sparkles: sa,
  chart: js,
  "bar-chart": js,
  wifi: nr,
  coffee: ar,
  globe: rr,
  tag: Bs,
  sun: ir
}, wn = {
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
function Rs({ name: l = "package", size: h = "sm", color: u = "currentColor", className: d = "" }) {
  const x = String(l).toLowerCase().replace(/_/g, "-"), b = Tn[x], P = h === "xs" ? 12 : h === "lg" ? 20 : h === "md" ? 16 : 14, A = wn[x];
  return /* @__PURE__ */ o("span", { style: { display: "inline-flex", alignItems: "center", justifyContent: "center", width: P, height: P, color: ds(u), flexShrink: 0, fontSize: P, lineHeight: 1 }, children: b ? /* @__PURE__ */ o(b, { size: P, className: d }) : A || /* @__PURE__ */ o(Bs, { size: P, className: d }) });
}
function An({ label: l, variant: h = "primary", size: u = "sm", action: d, href: x, target: b = "_blank", onClick: P, disabled: A = !1, flex: L, className: S = "", style: N }) {
  const w = {
    primary: { background: ge.accent, color: "#fff", border: "1px solid transparent" },
    secondary: { background: "#f1f5f9", color: ge.foreground, border: "1px solid transparent" },
    outline: { background: "transparent", color: ge.foreground, border: `1px solid ${ge.border}` },
    ghost: { background: "transparent", color: ge.foreground, border: "1px solid transparent" }
  };
  return /* @__PURE__ */ o("button", { type: "button", disabled: A, "data-widget-action": d, onClick: () => {
    P == null || P(), x && typeof window < "u" && window.open(x, b || "_blank", "noopener,noreferrer");
  }, className: S, style: { width: L ? void 0 : "100%", flex: L, borderRadius: 8, padding: u === "xs" ? "5px 10px" : u === "md" ? "9px 16px" : "7px 12px", fontSize: 12, fontWeight: 600, cursor: A ? "not-allowed" : "pointer", opacity: A ? 0.5 : 1, ...w[h], ...st(S), ...N }, children: l });
}
function Sn({ src: l, alt: h = "", width: u = "100%", height: d = 140, radius: x = "md", className: b = "", style: P }) {
  const A = { none: 0, sm: 6, md: 8, lg: 12, full: 9999 }, L = (S) => typeof S == "number" ? `${S}px` : S;
  return l ? /* @__PURE__ */ o("img", { src: l, alt: h, loading: "lazy", referrerPolicy: "no-referrer", className: b, style: { width: L(u), height: L(d), objectFit: "cover", display: "block", borderRadius: A[x], ...P } }) : /* @__PURE__ */ o("div", { className: b, style: { width: L(u), height: L(d), display: "flex", alignItems: "center", justifyContent: "center", borderRadius: A[x], background: "#f1f5f9", color: "#94a3b8", ...P }, children: /* @__PURE__ */ o(ct, { size: 28 }) });
}
function vn({ value: l = 0, max: h = 100, color: u = "primary", className: d = "" }) {
  const x = Math.min(100, Math.max(0, Number(l) / (Number(h) || 100) * 100));
  return /* @__PURE__ */ o("div", { className: d, style: { width: "100%", height: 8, overflow: "hidden", borderRadius: 9999, background: "#e2e8f0" }, children: /* @__PURE__ */ o("div", { style: { width: `${x}%`, height: "100%", borderRadius: 9999, background: u === "success" ? "#22c55e" : u === "warning" ? "#f59e0b" : u === "destructive" ? "#ef4444" : ge.accent } }) });
}
function Nn({ value: l, max: h = 5, className: u = "" }) {
  return l == null || !Number.isFinite(Number(l)) ? null : /* @__PURE__ */ o("div", { className: u, style: { display: "flex", gap: 3 }, children: Array.from({ length: Number(h) }).map((d, x) => /* @__PURE__ */ o("span", { style: { color: x < Math.round(Number(l)) ? "#f59e0b" : "#cbd5e1" }, children: /* @__PURE__ */ o(Fs, { size: 13 }) }, x)) });
}
function Cn({ src: l, name: h, size: u = "md", className: d = "" }) {
  const x = u === "sm" ? 24 : u === "lg" ? 40 : 32, b = h ? h.split(" ").map((P) => P[0]).slice(0, 2).join("").toUpperCase() : "?";
  return /* @__PURE__ */ o("div", { className: d, style: { width: x, height: x, borderRadius: 9999, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, background: "#e2e8f0", color: "#334155", fontSize: 11, fontWeight: 700 }, children: l ? /* @__PURE__ */ o("img", { src: l, alt: h || "Avatar", style: { width: "100%", height: "100%", objectFit: "cover" } }) : b });
}
function In({ label: l, placeholder: h, value: u, name: d, onInput: x, options: b, type: P = "text", rows: A = 3, className: L = "" }) {
  const S = { width: "100%", boxSizing: "border-box", border: `1px solid ${ge.border}`, borderRadius: 8, padding: "7px 10px", background: ge.surface, color: ge.foreground, fontSize: 12, outline: "none" };
  return /* @__PURE__ */ o("label", { className: L, style: { display: "flex", flexDirection: "column", width: "100%", gap: 4, color: ge.muted, fontSize: 11, fontWeight: 600 }, children: [
    l,
    Array.isArray(b) && b.every((N) => typeof N == "string") ? /* @__PURE__ */ o("select", { name: d, onInput: x, defaultValue: "", style: S, children: [
      /* @__PURE__ */ o("option", { value: "", disabled: !0, children: "Odaberite" }),
      b.map((N) => /* @__PURE__ */ o("option", { value: N, children: N }, N))
    ] }) : P === "textarea" ? /* @__PURE__ */ o("textarea", { name: d, onInput: x, defaultValue: u, placeholder: h, rows: A, style: { ...S, resize: "vertical" } }) : /* @__PURE__ */ o("input", { name: d, onInput: x, type: P, defaultValue: u, placeholder: h, style: S })
  ] });
}
function kn({ bars: l = [], height: h = 115, className: u = "" }) {
  const d = l.map((b) => Number(b.value || 0)), x = Math.max(...d, 1);
  return /* @__PURE__ */ o("div", { className: u, style: { display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 6, width: "100%", height: h }, children: l.map((b, P) => {
    const A = b.height ?? b.h, L = A !== void 0 ? typeof A == "number" ? `${A}px` : A : `${Math.max(8, Number(b.value || 0) / x * Math.max(40, Number(h) - 24))}px`;
    return /* @__PURE__ */ o("div", { style: { display: "flex", flex: 1, height: "100%", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", gap: 6 }, children: [
      /* @__PURE__ */ o("div", { title: b.label || b.day, style: { width: "100%", minHeight: 6, height: L, borderRadius: 6, background: ge.accent } }),
      /* @__PURE__ */ o("span", { style: { color: ge.muted, fontSize: 10, fontWeight: 600 }, children: b.label || b.day })
    ] }, b.id ?? P);
  }) });
}
function En({ items: l = [], className: h = "" }) {
  return /* @__PURE__ */ o("div", { className: h, style: { display: "flex", flexDirection: "column", width: "100%" }, children: l.map((u, d) => {
    const x = !!(u.complete || u.completed), b = !!u.current;
    return /* @__PURE__ */ o("div", { style: { display: "flex", alignItems: "stretch", gap: 10 }, children: [
      /* @__PURE__ */ o("div", { style: { display: "flex", flexDirection: "column", alignItems: "center" }, children: [
        /* @__PURE__ */ o("div", { style: { width: 24, height: 24, borderRadius: 9999, display: "flex", alignItems: "center", justifyContent: "center", background: x ? "#dcfce7" : b ? "#e0f2fe" : "#f1f5f9", color: x ? "#166534" : b ? "#0369a1" : "#94a3b8" }, children: /* @__PURE__ */ o(Rs, { name: u.icon || (x ? "check" : b ? "clock" : "circle"), size: "xs" }) }),
        d < l.length - 1 ? /* @__PURE__ */ o("div", { style: { width: 2, minHeight: 18, flex: 1, margin: "2px 0", background: x ? "#86efac" : "#e2e8f0" } }) : null
      ] }),
      /* @__PURE__ */ o("div", { style: { flex: 1, minWidth: 0, paddingBottom: d < l.length - 1 ? 12 : 2 }, children: [
        /* @__PURE__ */ o("div", { style: { color: ge.foreground, fontSize: 12, lineHeight: 1.3, fontWeight: b ? 700 : 500 }, children: u.label }),
        u.detail ? /* @__PURE__ */ o("div", { style: { color: ge.muted, fontSize: 11, marginTop: 2 }, children: u.detail }) : null
      ] })
    ] }, u.id ?? d);
  }) });
}
const jn = { Card: un, Row: dn, Col: fn, Box: mn, Title: yn, Text: xn, Caption: gn, Badge: bn, Divider: Pn, Icon: Rs, Button: An, Image: Sn, ProgressBar: vn, Rating: Nn, Avatar: Cn, Input: In, BarChart: kn, Timeline: En };
function Ln({ template: l, data: h = {}, onAction: u, onInputChange: d, showErrorDetails: x = !0 }) {
  try {
    const b = Dn(l, h, { onAction: u, onInputChange: d }), P = /<Card\b/.test(l);
    return /* @__PURE__ */ o("div", { className: `dynamic-jsx-widget ${P ? "" : "pitaj-inline-widget-card"}`.trim(), children: b });
  } catch (b) {
    return /* @__PURE__ */ o("div", { className: "pitaj-inline-widget-card", style: { borderColor: "#fecaca", background: "#fff7f7", color: "#991b1b", fontSize: 12, lineHeight: 1.4 }, children: [
      /* @__PURE__ */ o("strong", { style: { display: "block", marginBottom: 4 }, children: "Widget se ne može prikazati" }),
      x ? /* @__PURE__ */ o("span", { children: b instanceof Error ? b.message : "Neispravan JSX template." }) : null
    ] });
  }
}
function Dn(l, h, u) {
  if (!l.trim()) return null;
  const x = pn.parse(`<>${l.trim()}</>`, { sourceType: "module", plugins: ["jsx", "typescript"] }).program.body[0];
  if (!x || x.type !== "ExpressionStatement") throw new Error("Template mora biti JSX izraz.");
  return he(x.expression, h, u);
}
function he(l, h, u) {
  var d, x;
  if (!l) return null;
  switch (l.type) {
    case "JSXElement": {
      const b = _n(l.openingElement.name), P = jn[b];
      if (!P) throw new Error(`Komponenta <${b}> nije podržana.`);
      const A = {};
      for (const S of l.openingElement.attributes)
        if (S.type === "JSXAttribute" && (A[S.name.name] = Mn(S.value, h, u)), S.type === "JSXSpreadAttribute") {
          const N = he(S.argument, h, u);
          N && typeof N == "object" && Object.assign(A, N);
        }
      if (b === "Input" && typeof A.name == "string" && /^[a-zA-Z][a-zA-Z0-9_]{0,63}$/.test(A.name)) {
        const S = A.name;
        A.onInput = (N) => {
          var w;
          return (w = u.onInputChange) == null ? void 0 : w.call(u, S, N.currentTarget.value);
        };
      }
      if (b === "Button" && A.action && u.onAction) {
        const S = A.onClick;
        A.onClick = () => {
          var N;
          S == null || S(), (N = u.onAction) == null || N.call(u, String(A.action));
        };
      }
      const L = er(l.children, h, u);
      return Oi(P, A, ...L);
    }
    case "JSXFragment":
      return Oi(us, null, ...er(l.children, h, u));
    case "JSXText":
      return l.value.trim() ? l.value.replace(/\s+/g, " ") : null;
    case "JSXExpressionContainer":
      return l.expression.type === "JSXEmptyExpression" ? null : he(l.expression, h, u);
    case "Identifier":
      return l.name === "undefined" ? void 0 : h[l.name];
    case "StringLiteral":
    case "NumericLiteral":
    case "BooleanLiteral":
      return l.value;
    case "NullLiteral":
      return null;
    case "TemplateLiteral":
      return l.quasis.reduce((b, P, A) => b + P.value.cooked + (l.expressions[A] ? String(he(l.expressions[A], h, u) ?? "") : ""), "");
    case "MemberExpression": {
      const b = he(l.object, h, u);
      if (b == null) return;
      const P = l.computed ? he(l.property, h, u) : l.property.name;
      if (P === "__proto__" || P === "prototype" || P === "constructor") throw new Error("Nedozvoljen pristup podatku.");
      return b[P];
    }
    case "ObjectExpression": {
      const b = {};
      for (const P of l.properties) {
        if (P.type !== "ObjectProperty") continue;
        const A = P.key.type === "Identifier" && !P.computed ? P.key.name : he(P.key, h, u);
        b[A] = he(P.value, h, u);
      }
      return b;
    }
    case "ArrayExpression":
      return l.elements.map((b) => he(b, h, u));
    case "ConditionalExpression":
      return he(l.test, h, u) ? he(l.consequent, h, u) : he(l.alternate, h, u);
    case "LogicalExpression": {
      const b = he(l.left, h, u);
      return l.operator === "&&" ? b && he(l.right, h, u) : l.operator === "||" ? b || he(l.right, h, u) : l.operator === "??" ? b ?? he(l.right, h, u) : null;
    }
    case "BinaryExpression":
      return On(l.operator, he(l.left, h, u), he(l.right, h, u));
    case "UnaryExpression": {
      const b = he(l.argument, h, u);
      return l.operator === "!" ? !b : l.operator === "-" ? -b : l.operator === "+" ? +b : b;
    }
    case "CallExpression": {
      if (l.callee.type !== "MemberExpression" || l.callee.computed || l.callee.property.name !== "map") throw new Error("Dozvoljeno je samo mapiranje nizova.");
      const b = he(l.callee.object, h, u);
      if (!Array.isArray(b)) return [];
      const P = l.arguments[0];
      if (!P || P.type !== "ArrowFunctionExpression") throw new Error("Neispravna map funkcija.");
      const A = ((d = P.params[0]) == null ? void 0 : d.name) || "item", L = ((x = P.params[1]) == null ? void 0 : x.name) || "index";
      return b.map((S, N) => he(P.body, { ...h, [A]: S, [L]: N }, u));
    }
    case "ParenthesizedExpression":
      return he(l.expression, h, u);
    default:
      throw new Error(`Izraz ${l.type} nije podržan.`);
  }
}
function On(l, h, u) {
  switch (l) {
    case "+":
      return h + u;
    case "-":
      return h - u;
    case "*":
      return h * u;
    case "/":
      return h / u;
    case "%":
      return h % u;
    case "===":
      return h === u;
    case "!==":
      return h !== u;
    case "==":
      return h == u;
    case "!=":
      return h != u;
    case "<":
      return h < u;
    case ">":
      return h > u;
    case "<=":
      return h <= u;
    case ">=":
      return h >= u;
    default:
      throw new Error(`Operator ${l} nije podržan.`);
  }
}
function Mn(l, h, u) {
  return l ? l.type === "StringLiteral" ? l.value : l.type === "JSXExpressionContainer" ? he(l.expression, h, u) : null : !0;
}
function er(l, h, u) {
  const d = [];
  for (const x of l) {
    const b = he(x, h, u);
    b == null || b === !1 || (Array.isArray(b) ? d.push(...b) : d.push(b));
  }
  return d;
}
function _n(l) {
  if (l.type === "JSXIdentifier") return l.name;
  throw new Error("Podržane su samo direktne DSL komponente.");
}
function _s(l) {
  return (l || "").replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]/gu, "").trim();
}
function Fn(l) {
  const h = _s(l).toLowerCase();
  return h.includes("wi-fi") || h.includes("wifi") || h.includes("internet") ? nr : h.includes("doručak") || h.includes("dorucak") || h.includes("kafa") || h.includes("coffee") ? ar : h.includes("restoran") || h.includes("hrana") || h.includes("dining") ? ca : h.includes("parking") || h.includes("garaža") || h.includes("garaza") || h.includes("auto") ? ha : h.includes("spa") || h.includes("bazen") || h.includes("wellness") ? pa : h.includes("klima") || h.includes("hlađenje") || h.includes("hladjenje") ? ua : h.includes("teretana") || h.includes("fitness") || h.includes("gym") ? da : Bs;
}
function ro({ widget: l, onAction: h, apiUrl: u, companyId: d, preview: x, conversationId: b, onApiError: P, onWorkflowState: A, onProductEvent: L, language: S }) {
  const N = l.type || "custom_html", w = l.config || {}, [B, q] = re("idle"), [Q, be] = re(!1), [D, U] = re("idle"), [m, Y] = re(null), [J, pe] = re(null), [ae, Ce] = re(null), [ht, we] = re(() => Date.now()), [V, k] = re(null), v = JSON.stringify([d, b, l.id, w.function_revision, x]), de = Je(0), Ae = Je(v), ue = Ae.current === v ? D : "idle", St = Ae.current === v ? m : null, pt = (ae == null ? void 0 : ae.identity) === v ? Math.max(0, Math.ceil((ae.until - ht) / 1e3)) : 0, $e = Je(/* @__PURE__ */ Object.create(null)), H = Je(!1), fe = Je(null), se = Je(null), [Ne, le] = re("idle"), [He, ee] = re(null), Le = Je(A);
  Le.current = A;
  const _e = Je(P);
  _e.current = P;
  const j = l.workflow;
  At(() => (de.current++, Ae.current = v, H.current = !1, k(null), U("idle"), pe(null), Ce(null), Y(null), be(!1), $e.current = /* @__PURE__ */ Object.create(null), () => {
    de.current++;
  }), [v]), At(() => {
    if (!ae || ae.identity !== v) return;
    const Pe = () => {
      const Z = Date.now();
      we(Z), Z >= ae.until && Ce((De) => De === ae ? null : De);
    };
    Pe();
    const G = window.setInterval(Pe, 1e3);
    return () => window.clearInterval(G);
  }, [ae, v]);
  const z = async () => {
    var Pe, G;
    if (!(!j || !d || x)) {
      le("loading");
      try {
        const Z = await oa(d, j.run_id, u, j.display_node_id);
        ee(la(Z, j, l.id)), le("ready"), (Pe = Le.current) == null || Pe.call(Le, Z);
      } catch (Z) {
        ee(null), le("error"), (G = _e.current) == null || G.call(_e, Z);
      }
    }
  };
  At(() => {
    j && !x && z();
  }, [d, u, x, l.id, j == null ? void 0 : j.run_id, j == null ? void 0 : j.display_node_id, j == null ? void 0 : j.form_revision]);
  const it = async (Pe) => {
    if (B === "sending" || B === "success") return;
    if (x || !d || !l.id || !b || !/^\d+$/.test(b)) {
      q("error");
      return;
    }
    if (j && !He) {
      q("error");
      return;
    }
    const G = JSON.stringify(Pe);
    (!fe.current || se.current !== G) && (fe.current = crypto.randomUUID(), se.current = G), q("sending");
    try {
      const Z = (u || window.location.origin).replace(/\/$/, ""), De = await hs(d, u), ne = await fetch(`${Z}/api/widget/${encodeURIComponent(d)}/v2/inline-widgets/${l.id}/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json", Authorization: `Bearer ${De}` },
        body: JSON.stringify({
          submission_uuid: fe.current,
          conversation_id: Number(b),
          payload: Pe,
          ...j ? { workflow_run_id: j.run_id, workflow_wait_node: He, form_revision: j.form_revision } : {}
        })
      });
      ne.ok || await sr(ne, "Zahtjev nije potvrđen."), q("success"), j && z();
    } catch (Z) {
      Z instanceof Dt && Z.code === "FORM_REVISION_MISMATCH" ? (ee(null), q("changed")) : (q("error"), P == null || P(Z));
    }
  }, K = () => {
    const Pe = !x && (w.jsx_template || N === "dynamic_jsx" || N === "ai_builder") ? on(w) : null;
    if (Pe)
      return /* @__PURE__ */ o("div", { role: "status", className: "pitaj-inline-widget-card", children: Pe });
    if (nn(w, !!x))
      return /* @__PURE__ */ o("div", { role: "status", className: "pitaj-inline-widget-card", children: "Podaci trenutno nisu dostupni." });
    if (w.jsx_template || N === "dynamic_jsx" || N === "ai_builder")
      return /* @__PURE__ */ o(
        Ln,
        {
          template: w.jsx_template || "",
          showErrorDetails: !!x,
          data: {
            ...an(w, (V == null ? void 0 : V.identity) === v ? V.data : {}, !!x),
            ...Array.isArray(w.function_names) && w.function_names.length > 0 ? { function_state: { phase: ue, function_id: St } } : {}
          },
          onInputChange: (G, Z) => {
            $e.current[G] !== Z && (de.current++, H.current = !1, Ae.current = v, k(null), U("idle"), pe(null), Y(null)), $e.current[G] = Z;
          },
          onAction: (G) => {
            if (tn(G, w)) {
              const Z = sn(G, w);
              if (!Z || x || !d || !l.id || !b) {
                be(!0);
                return;
              }
              if (H.current || (ae == null ? void 0 : ae.identity) === v && Date.now() < ae.until) return;
              H.current = !0;
              const De = ++de.current;
              Ae.current = v, k(null), pe(null), Y(Z), be(!1), U("loading"), ln(d, l.id, Z, b, u, rn(Z, w, $e.current)).then((ne) => {
                De === de.current && (k({ identity: v, data: ne }), U("success"));
              }).catch((ne) => {
                if (De !== de.current) return;
                const Xe = ne instanceof Fi ? "rate_limit" : ne instanceof Dt ? "api" : "other", Ye = Qa(Xe, ne instanceof Dt ? ne.code : void 0, ne instanceof Dt ? ne.status : void 0);
                if (pe(Ye), U("error"), ne instanceof Fi) {
                  const Ze = Date.now();
                  we(Ze), Ce({ identity: v, until: en(Ze, ne.retryAfterSeconds) });
                }
                ne instanceof Dt && ["WIDGET_SESSION_INVALID", "WIDGET_SESSION_REQUIRED", "COUNTRY_BLOCKED", "WIDGET_FORMS_DISABLED"].includes(ne.code || "") && (P == null || P(ne));
              }).finally(() => {
                De === de.current && (H.current = !1);
              });
              return;
            }
            be(!1), h == null || h(G);
          }
        }
      );
    switch (N) {
      case "action_client":
        return /* @__PURE__ */ o("div", { role: "status", className: "pitaj-inline-widget-card", children: w.client_action_state === "pending" ? "Čekamo odgovor aplikacije…" : w.client_action_state === "success" ? "Aplikacija je prijavila uspjeh." : w.client_action_state === "failed" ? "Aplikacija je prijavila neuspjeh." : w.client_action_state === "timeout" ? "Aplikacija nije odgovorila na vrijeme. Ishod nije poznat." : "Akcija je zatražena. Rezultat nije potvrđen." });
      case "action_link":
        try {
          const G = new URL(String(w.url || ""));
          if (G.protocol !== "https:" || G.username || G.password || typeof w.label != "string" || !w.label.trim()) throw new Error("Invalid link");
          return /* @__PURE__ */ o("a", { className: "pitaj-widget-btn-primary", href: G.href, target: "_blank", rel: "noopener noreferrer", style: { display: "inline-block", textAlign: "center", textDecoration: "none" }, children: w.label });
        } catch {
          return /* @__PURE__ */ o("div", { role: "status", children: "Link trenutno nije dostupan." });
        }
      case "booking":
      case "calendar":
      case "calendly":
      case "cal":
        return w.source === "calendar" ? /* @__PURE__ */ o(fa, { config: w, widgetId: l.id ?? 0, companyId: d, apiUrl: u, preview: x }) : /* @__PURE__ */ o(Wn, { config: w });
      case "api":
      case "api_widget":
        return /* @__PURE__ */ o(Kn, { config: w });
      case "order_status":
      case "order_tracking":
      case "shopify_order":
        return /* @__PURE__ */ o(Gn, { config: w });
      case "manual_list":
        return /* @__PURE__ */ o(Ja, { config: w, onAction: h, language: S });
      case "catalog_view":
        return /* @__PURE__ */ o(qa, { config: x ? { ...w, preview: !0 } : w, onAction: h, onProductEvent: L, language: S });
      case "ticket_status":
        return /* @__PURE__ */ o(Jn, { config: w });
      case "book_demo":
        return /* @__PURE__ */ o(Bn, { config: w, onSubmit: it });
      case "products":
        return /* @__PURE__ */ o(Za, { config: x ? { ...w, preview: !0 } : w, onAction: h, onProductEvent: L, language: S });
      case "cart":
        return /* @__PURE__ */ o(Rn, { config: w, onAction: h });
      case "usage_chart":
        return !x && (w.metric_value == null || !Array.isArray(w.chart_data) || w.chart_data.length === 0) ? /* @__PURE__ */ o("div", { role: "status", children: "Podaci o potrošnji trenutno nisu dostupni." }) : /* @__PURE__ */ o(Un, { config: w });
      case "upcoming_classes":
        return !x && (!Array.isArray(w.classes) || w.classes.length === 0) ? /* @__PURE__ */ o("div", { role: "status", children: "Trenutno nema dostupnih termina." }) : /* @__PURE__ */ o(zn, { config: w, onAction: h });
      case "hotel_booking":
        return !x && (!w.name || !w.price || !w.location) ? /* @__PURE__ */ o("div", { role: "status", children: "Podaci o smještaju trenutno nisu dostupni." }) : /* @__PURE__ */ o($n, { config: w, onSubmit: it });
      case "contact":
        return /* @__PURE__ */ o(Hn, { config: w, onSubmit: it });
      case "weather":
        return !x && (!w.city || w.temp == null || !w.condition) ? /* @__PURE__ */ o("div", { role: "status", children: "Podaci o vremenu trenutno nisu dostupni." }) : /* @__PURE__ */ o(Vn, { config: w });
      case "custom_iframe":
        return /* @__PURE__ */ o(qn, { config: w, title: l.name });
      case "custom_html":
      default:
        return !x && !w.html ? null : /* @__PURE__ */ o(Xn, { config: w, onAction: h });
    }
  };
  return /* @__PURE__ */ o(us, { children: [
    /* @__PURE__ */ o("style", { children: cn }),
    B === "success" ? /* @__PURE__ */ o("div", { role: "status", children: "Vaš zahtjev je zaprimljen." }) : /* @__PURE__ */ o("fieldset", { disabled: B === "sending" || ue === "loading" || !!(j && ["book_demo", "contact", "hotel_booking"].includes(N) && !He), style: { border: 0, padding: 0, margin: 0, minWidth: 0 }, children: K() }),
    B === "sending" && /* @__PURE__ */ o("div", { role: "status", children: "Slanje zahtjeva..." }),
    B === "error" && /* @__PURE__ */ o("div", { role: "alert", children: "Zahtjev nije potvrđen. Provjerite vezu i pokušajte ponovo." }),
    B === "changed" && /* @__PURE__ */ o("div", { role: "alert", children: [
      "Forma je promijenjena. Osvježite je i provjerite podatke prije slanja. ",
      /* @__PURE__ */ o("button", { type: "button", onClick: () => {
        q("idle"), z();
      }, children: "Osvježi formu" })
    ] }),
    Q && /* @__PURE__ */ o("div", { role: "alert", children: "Ova funkcija trenutno nije povezana. Pokušajte ponovo kasnije." }),
    ue === "loading" && /* @__PURE__ */ o("div", { role: "status", children: "Učitavanje podataka..." }),
    ue === "success" && /* @__PURE__ */ o("div", { role: "status", children: "Podaci su ažurirani." }),
    pt > 0 ? /* @__PURE__ */ o("div", { role: "status", children: [
      "Previše poziva. Pokušajte za ",
      pt,
      "s."
    ] }) : ue === "error" && /* @__PURE__ */ o("div", { role: "alert", children: J === "input" ? "Odaberite dozvoljene vrijednosti i pokušajte ponovo." : J === "unavailable" ? "Ova funkcija trenutno nije dostupna." : J === "rate_limit" ? "Možete ponovo pokušati poziv funkcije." : "Podatke nije moguće učitati. Pokušajte ponovo." }),
    j && Ne === "loading" && /* @__PURE__ */ o("div", { role: "status", children: "Provjeravamo sljedeći korak..." }),
    j && Ne === "error" && /* @__PURE__ */ o("div", { role: "alert", children: [
      "Nije moguće provjeriti korak. ",
      /* @__PURE__ */ o("button", { type: "button", onClick: () => void z(), children: "Pokušaj ponovo" })
    ] }),
    j && Ne === "ready" && !He && B !== "success" && ["book_demo", "contact", "hotel_booking"].includes(N) && /* @__PURE__ */ o("div", { role: "status", children: "Ova forma nije aktivna u trenutnom koraku procedure." })
  ] });
}
function Us({
  fields: l,
  values: h,
  onChange: u
}) {
  return /* @__PURE__ */ o(us, { children: l.map((d, x) => {
    const b = h[d.key] ?? (d.type === "checkbox" ? !1 : ""), P = d.key || `field_${x}`;
    if (d.type === "textarea")
      return /* @__PURE__ */ o("div", { className: "pitaj-widget-field", children: [
        /* @__PURE__ */ o("label", { children: [
          d.label,
          " ",
          d.required && /* @__PURE__ */ o("span", { style: { color: "#ef4444" }, children: "*" })
        ] }),
        /* @__PURE__ */ o(
          "textarea",
          {
            required: d.required,
            rows: 3,
            placeholder: d.placeholder || "",
            value: b,
            onInput: (S) => u(P, S.target.value)
          }
        )
      ] }, P);
    if (d.type === "checkbox")
      return /* @__PURE__ */ o("div", { className: "pitaj-widget-checkbox-row", children: [
        /* @__PURE__ */ o(
          "input",
          {
            id: `widget-chk-${P}-${x}`,
            type: "checkbox",
            required: d.required,
            checked: !!b,
            onChange: (S) => u(P, S.target.checked)
          }
        ),
        /* @__PURE__ */ o("label", { htmlFor: `widget-chk-${P}-${x}`, children: [
          d.label,
          " ",
          d.required && /* @__PURE__ */ o("span", { style: { color: "#ef4444" }, children: "*" })
        ] })
      ] }, P);
    if (d.type === "select")
      return /* @__PURE__ */ o("div", { className: "pitaj-widget-field", children: [
        /* @__PURE__ */ o("label", { children: [
          d.label,
          " ",
          d.required && /* @__PURE__ */ o("span", { style: { color: "#ef4444" }, children: "*" })
        ] }),
        /* @__PURE__ */ o(
          "select",
          {
            required: d.required,
            value: b,
            onChange: (S) => u(P, S.target.value),
            children: [
              /* @__PURE__ */ o("option", { value: "", children: d.placeholder || "Odaberite..." }),
              (d.options || []).map((S, N) => /* @__PURE__ */ o("option", { value: S, children: S }, N))
            ]
          }
        )
      ] }, P);
    const A = d.type === "phone" ? "tel" : d.type === "email" ? "email" : d.type === "date" ? "date" : d.type === "number" ? "number" : "text";
    let L;
    if (d.type === "date") {
      const S = P.toLowerCase();
      if (S.includes("out") || S.includes("odjav") || S.includes("end") || S.includes("do")) {
        const N = h.check_in || h.start || h.od;
        N && typeof N == "string" && (L = N);
      }
    }
    return /* @__PURE__ */ o("div", { className: "pitaj-widget-field", children: [
      /* @__PURE__ */ o("label", { children: [
        d.label,
        " ",
        d.required && /* @__PURE__ */ o("span", { style: { color: "#ef4444" }, children: "*" })
      ] }),
      /* @__PURE__ */ o(
        "input",
        {
          type: A,
          required: d.required,
          placeholder: d.placeholder || "",
          min: L,
          value: b,
          onInput: (S) => u(P, S.target.value)
        }
      )
    ] }, P);
  }) });
}
function Bn({ config: l, onSubmit: h }) {
  const u = [
    { key: "name", type: "text", label: "Ime i prezime", placeholder: "Petar Petrović", required: !0 },
    { key: "phone", type: "phone", label: "Broj telefona", placeholder: "+387 61 123 456", required: !1 },
    { key: "email", type: "email", label: "Poslovni email", placeholder: "petar@kompanija.ba", required: !0 }
  ], d = Array.isArray(l.fields) && l.fields.length > 0 ? l.fields : u, [x, b] = re({}), P = l.title || "Razgovarajte sa prodajom", A = l.subtitle || "Recite nam više o svojoj kompaniji i stupićemo u kontakt.";
  return /* @__PURE__ */ o("div", { className: "pitaj-inline-widget-card", children: [
    /* @__PURE__ */ o("div", { className: "pitaj-widget-header", children: [
      /* @__PURE__ */ o("div", { className: "pitaj-widget-title", children: P }),
      /* @__PURE__ */ o("div", { className: "pitaj-widget-subtitle", children: A })
    ] }),
    /* @__PURE__ */ o("form", { onSubmit: (N) => {
      N.preventDefault();
      for (const w of d)
        if (w.required) {
          const B = x[w.key];
          if (w.type === "checkbox" && !B || w.type !== "checkbox" && (!B || !String(B).trim())) return;
        }
      h(Object.fromEntries(d.filter((w) => x[w.key] !== void 0).map((w) => [w.key, String(x[w.key])])));
    }, className: "pitaj-widget-form", children: [
      /* @__PURE__ */ o(Us, { fields: d, values: x, onChange: (N, w) => {
        b((B) => ({ ...B, [N]: w }));
      } }),
      /* @__PURE__ */ o("button", { type: "submit", className: "pitaj-widget-btn-primary", children: l.submit_label || "Zakaži razgovor" })
    ] })
  ] });
}
function Rn({ config: l, onAction: h }) {
  var P, A, L;
  const u = ((P = l.data) == null ? void 0 : P.items) || ((A = l.data) == null ? void 0 : A.products) || l.items || l.products, d = Array.isArray(u) ? u : [], x = ((L = l.data) == null ? void 0 : L.total) ?? l.total;
  if (d.length === 0) return /* @__PURE__ */ o("div", { role: "status", children: "Podaci o korpi trenutno nisu dostupni." });
  const b = () => {
    var S, N;
    if ((S = l.data) != null && S.checkoutUrl || l.checkoutUrl) {
      window.open(((N = l.data) == null ? void 0 : N.checkoutUrl) || l.checkoutUrl, "_blank", "noopener,noreferrer");
      return;
    }
    h == null || h(`Želim dovršiti narudžbu iz korpe${x != null ? ` (Ukupno: ${x})` : ""}`);
  };
  return /* @__PURE__ */ o("div", { className: "pitaj-inline-widget-card cart-widget", children: [
    /* @__PURE__ */ o("div", { className: "pitaj-widget-bar", children: [
      /* @__PURE__ */ o("span", { className: "pitaj-widget-badge-icon", children: /* @__PURE__ */ o(Ds, { size: 14 }) }),
      /* @__PURE__ */ o("span", { className: "pitaj-widget-bar-title", children: [
        d.length,
        " stavke u korpi"
      ] })
    ] }),
    /* @__PURE__ */ o("div", { className: "pitaj-cart-items-list", children: d.map((S, N) => {
      const w = S.image || S.image_url || S.imageUrl || S.featured_image || (Array.isArray(S.images) ? S.images[0] : "");
      return /* @__PURE__ */ o("div", { className: "pitaj-cart-item-row", children: [
        w ? /* @__PURE__ */ o(
          "img",
          {
            src: w,
            alt: S.name,
            className: "pitaj-cart-thumb",
            loading: "lazy",
            referrerPolicy: "no-referrer",
            onError: (B) => {
              B.currentTarget.style.display = "none";
            }
          }
        ) : /* @__PURE__ */ o("div", { style: "width: 40px; height: 40px; border-radius: 6px; background: #f1f5f9; display: flex; align-items: center; justify-content: center; color: #94a3b8; flex-shrink: 0;", children: /* @__PURE__ */ o(ct, { size: 18 }) }),
        /* @__PURE__ */ o("div", { className: "pitaj-cart-details", children: [
          /* @__PURE__ */ o("div", { className: "pitaj-cart-item-name", children: S.name }),
          /* @__PURE__ */ o("div", { className: "pitaj-cart-item-sub", children: S.subtitle })
        ] }),
        /* @__PURE__ */ o("div", { className: "pitaj-cart-item-price", children: S.price })
      ] }, S.id || N);
    }) }),
    /* @__PURE__ */ o("div", { className: "pitaj-cart-divider" }),
    x != null && /* @__PURE__ */ o("div", { className: "pitaj-cart-summary", children: [
      /* @__PURE__ */ o("span", { className: "pitaj-cart-total-label", children: "Ukupno za plaćanje:" }),
      /* @__PURE__ */ o("span", { className: "pitaj-cart-total-val", children: x })
    ] }),
    /* @__PURE__ */ o("button", { type: "button", onClick: b, className: "pitaj-widget-btn-primary", children: "Završi narudžbu" })
  ] });
}
function Un({ config: l }) {
  const h = l.metric_label || "Ukupno potrošeno kredita", u = l.metric_value ?? "2,214", d = [
    { day: "N", val: 75 },
    { day: "P", val: 40 },
    { day: "U", val: 65 },
    { day: "S", val: 85 },
    { day: "Č", val: 25 },
    { day: "P", val: 70 },
    { day: "S", val: 95 }
  ], x = Array.isArray(l.chart_data) && l.chart_data.length > 0 ? l.chart_data : d;
  return /* @__PURE__ */ o("div", { className: "pitaj-inline-widget-card chart-widget", children: [
    /* @__PURE__ */ o("div", { className: "pitaj-widget-bar", children: [
      /* @__PURE__ */ o("span", { className: "pitaj-widget-badge-icon", children: /* @__PURE__ */ o(js, { size: 14 }) }),
      /* @__PURE__ */ o("span", { className: "pitaj-widget-bar-title", children: l.title || "Potrošnja" })
    ] }),
    /* @__PURE__ */ o("div", { className: "pitaj-chart-body", children: [
      /* @__PURE__ */ o("div", { className: "pitaj-chart-label", children: h }),
      /* @__PURE__ */ o("div", { className: "pitaj-chart-big-number", children: u }),
      /* @__PURE__ */ o("div", { className: "pitaj-bar-chart-container", children: x.map((b, P) => /* @__PURE__ */ o("div", { className: "pitaj-bar-col", children: [
        /* @__PURE__ */ o("div", { className: "pitaj-bar-track", children: /* @__PURE__ */ o(
          "div",
          {
            className: "pitaj-bar-fill",
            style: { height: `${Math.max(10, Math.min(100, b.val))}%` },
            title: `${b.day}: ${b.val}%`
          }
        ) }),
        /* @__PURE__ */ o("span", { className: "pitaj-bar-day", children: b.day })
      ] }, P)) })
    ] })
  ] });
}
function zn({ config: l, onAction: h }) {
  const u = [
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
  ], d = Array.isArray(l.classes) && l.classes.length > 0 ? l.classes : u, x = (b) => {
    h == null || h(`Želim rezervisati termin za: ${b.title} (${b.time})`);
  };
  return /* @__PURE__ */ o("div", { className: "pitaj-inline-widget-card classes-widget", children: [
    /* @__PURE__ */ o("div", { className: "pitaj-widget-bar", children: [
      /* @__PURE__ */ o("span", { className: "pitaj-widget-badge-icon", children: /* @__PURE__ */ o(ps, { size: 14 }) }),
      /* @__PURE__ */ o("span", { className: "pitaj-widget-bar-title", children: l.title || "Nadolazeći termini" })
    ] }),
    /* @__PURE__ */ o("div", { className: "pitaj-classes-list", children: d.map((b, P) => {
      const A = b.id ?? P;
      return /* @__PURE__ */ o("div", { className: "pitaj-class-item", children: [
        /* @__PURE__ */ o("img", { src: b.image, alt: b.title, className: "pitaj-class-thumb" }),
        /* @__PURE__ */ o("div", { className: "pitaj-class-info", children: [
          /* @__PURE__ */ o("div", { className: "pitaj-class-header", children: [
            /* @__PURE__ */ o("span", { className: "pitaj-class-title", children: b.title }),
            b.level && /* @__PURE__ */ o("span", { className: `pitaj-level-badge level-${b.levelColor || "green"}`, children: b.level })
          ] }),
          /* @__PURE__ */ o("div", { className: "pitaj-class-time", children: b.time }),
          /* @__PURE__ */ o("div", { className: "pitaj-class-instructor", children: b.instructor })
        ] }),
        /* @__PURE__ */ o(
          "button",
          {
            type: "button",
            onClick: () => x(b),
            className: "pitaj-book-btn",
            children: "Pošalji upit"
          }
        )
      ] }, A);
    }) })
  ] });
}
function $n({ config: l, onSubmit: h }) {
  const [u, d] = re({}), [x, b] = re(!1), P = l.name || "Hotel Dark Moon", A = l.price ?? "220 KM / noć", L = l.location || "Sarajevo, Bosna i Hercegovina", S = l.rating, N = l.image, B = (Array.isArray(l.amenities) ? l.amenities : []).map(_s), q = [
    { key: "check_in", type: "date", label: "Datum dolaska (Check-in)", required: !0 },
    { key: "check_out", type: "date", label: "Datum odjave (Check-out)", required: !0 },
    { key: "guests", type: "select", label: "Broj gostiju", options: ["1 odrasla osoba", "2 odrasle osobe", "3 odrasle osobe", "Porodica (4+)"], required: !0 },
    { key: "name", type: "text", label: "Ime i prezime", placeholder: "Vaše ime", required: !0 },
    { key: "phone", type: "phone", label: "Broj telefona", placeholder: "+387 61 123 456", required: !1 }
  ], Q = Array.isArray(l.fields) ? l.fields : q, be = (U, m) => {
    b(!1), d((Y) => ({ ...Y, [U]: m }));
  }, D = (U) => {
    if (U.preventDefault(), Q.length > 0) {
      for (const Y of Q)
        if (Y.required) {
          const J = u[Y.key];
          if (Y.type === "checkbox" && !J || Y.type !== "checkbox" && (!J || !String(J).trim())) return;
        }
    }
    const m = { ...u };
    if (m.check_in && m.check_out && m.check_out < m.check_in) {
      b(!0);
      return;
    }
    h(Object.fromEntries(Q.filter((Y) => m[Y.key] !== void 0).map((Y) => [Y.key, String(m[Y.key])])));
  };
  return /* @__PURE__ */ o("div", { className: "pitaj-inline-widget-card hotel-widget", children: [
    /* @__PURE__ */ o("div", { className: "pitaj-hotel-image-wrap", children: [
      N && /* @__PURE__ */ o("img", { src: N, alt: P, className: "pitaj-hotel-img" }),
      /* @__PURE__ */ o("div", { className: "pitaj-hotel-badge-price", children: A })
    ] }),
    /* @__PURE__ */ o("div", { className: "pitaj-hotel-content", children: [
      /* @__PURE__ */ o("div", { className: "pitaj-hotel-title-row", children: /* @__PURE__ */ o("div", { className: "pitaj-hotel-name", children: P }) }),
      /* @__PURE__ */ o("div", { className: "pitaj-hotel-meta", children: [
        /* @__PURE__ */ o("span", { className: "pitaj-meta-item", children: [
          /* @__PURE__ */ o(Ls, { size: 12, className: "pitaj-meta-icon" }),
          /* @__PURE__ */ o("span", { children: L })
        ] }),
        S && /* @__PURE__ */ o("span", { className: "pitaj-meta-item pitaj-rating", children: [
          /* @__PURE__ */ o(Fs, { size: 11, className: "pitaj-star-icon" }),
          /* @__PURE__ */ o("span", { children: S })
        ] })
      ] }),
      B.length > 0 && /* @__PURE__ */ o("div", { className: "pitaj-amenities-row", children: B.map((U, m) => {
        const Y = _s(U), J = Fn(Y);
        return /* @__PURE__ */ o("span", { className: "pitaj-amenity-chip", children: [
          /* @__PURE__ */ o(J, { size: 12, className: "pitaj-amenity-icon" }),
          /* @__PURE__ */ o("span", { children: Y })
        ] }, m);
      }) }),
      /* @__PURE__ */ o("form", { onSubmit: D, className: "pitaj-widget-form", children: [
        x && /* @__PURE__ */ o("div", { role: "alert", children: "Datum odjave mora biti nakon datuma dolaska." }),
        Q.length > 0 && /* @__PURE__ */ o("div", { className: "pitaj-hotel-booking-section", children: [
          /* @__PURE__ */ o("div", { className: "pitaj-hotel-booking-title", children: "Rezerviši smještaj" }),
          /* @__PURE__ */ o(Us, { fields: Q, values: u, onChange: be })
        ] }),
        /* @__PURE__ */ o("button", { type: "submit", className: "pitaj-widget-btn-primary", children: l.submit_label || "Pošalji upit za rezervaciju" })
      ] })
    ] })
  ] });
}
function Hn({ config: l, onSubmit: h }) {
  const u = [
    { key: "name", type: "text", label: "Ime i prezime", placeholder: "Vaše ime", required: !0 },
    { key: "email", type: "email", label: "Email adresa", placeholder: "vas.email@example.com", required: !0 },
    { key: "message", type: "textarea", label: "Poruka", placeholder: "Kako vam možemo pomoći?", required: !0 }
  ], d = Array.isArray(l.fields) && l.fields.length > 0 ? l.fields : u, [x, b] = re({}), P = l.title || "Kontaktirajte nas", A = l.subtitle || "Rado ćemo odgovoriti na vaša pitanja";
  return /* @__PURE__ */ o("div", { className: "pitaj-inline-widget-card contact-widget", children: [
    /* @__PURE__ */ o("div", { className: "pitaj-widget-header", children: [
      /* @__PURE__ */ o("div", { className: "pitaj-widget-title", children: P }),
      /* @__PURE__ */ o("div", { className: "pitaj-widget-subtitle", children: A })
    ] }),
    /* @__PURE__ */ o("form", { onSubmit: (N) => {
      N.preventDefault();
      for (const w of d)
        if (w.required) {
          const B = x[w.key];
          if (w.type === "checkbox" && !B || w.type !== "checkbox" && (!B || !String(B).trim())) return;
        }
      h(Object.fromEntries(d.filter((w) => x[w.key] !== void 0).map((w) => [w.key, String(x[w.key])])));
    }, className: "pitaj-widget-form", children: [
      /* @__PURE__ */ o(Us, { fields: d, values: x, onChange: (N, w) => {
        b((B) => ({ ...B, [N]: w }));
      } }),
      /* @__PURE__ */ o("button", { type: "submit", className: "pitaj-widget-btn-primary", children: l.submit_label || "Pošalji poruku" })
    ] })
  ] });
}
function Vn({ config: l }) {
  const h = l.city || "Sarajevo", u = l.temp ?? "22°C", d = l.condition || "Sunčano i toplo", x = l.description || "";
  return /* @__PURE__ */ o("div", { className: "pitaj-inline-widget-card weather-widget", children: [
    /* @__PURE__ */ o("div", { className: "pitaj-weather-top", children: [
      /* @__PURE__ */ o(ir, { size: 32, className: "pitaj-weather-svg" }),
      /* @__PURE__ */ o("span", { className: "pitaj-weather-temp", children: u })
    ] }),
    /* @__PURE__ */ o("div", { className: "pitaj-weather-city", children: h }),
    /* @__PURE__ */ o("div", { className: "pitaj-weather-cond", children: d }),
    /* @__PURE__ */ o("div", { className: "pitaj-weather-desc", children: x })
  ] });
}
function qn({ config: l, title: h }) {
  const [u, d] = re(!0), x = Ba(l.url), b = l.height || 380;
  return x ? /* @__PURE__ */ o("div", { className: "pitaj-inline-widget-card iframe-widget", children: [
    /* @__PURE__ */ o("div", { className: "pitaj-widget-bar", children: [
      /* @__PURE__ */ o("span", { className: "pitaj-widget-badge-icon", children: /* @__PURE__ */ o(rr, { size: 14 }) }),
      /* @__PURE__ */ o("span", { className: "pitaj-widget-bar-title", children: l.title || h }),
      /* @__PURE__ */ o(
        "a",
        {
          href: x,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "pitaj-iframe-open-btn",
          title: "Otvori u novom prozoru",
          children: "↗"
        }
      )
    ] }),
    /* @__PURE__ */ o("div", { className: "pitaj-iframe-container", style: { height: `${b}px` }, children: [
      u && /* @__PURE__ */ o("div", { className: "pitaj-iframe-loading", children: [
        /* @__PURE__ */ o("span", { className: "pitaj-typing-dot" }),
        /* @__PURE__ */ o("span", { className: "pitaj-typing-dot" }),
        /* @__PURE__ */ o("span", { className: "pitaj-typing-dot" })
      ] }),
      /* @__PURE__ */ o(
        "iframe",
        {
          src: x,
          title: h,
          className: "pitaj-iframe-frame",
          onLoad: () => d(!1),
          sandbox: "allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
        }
      )
    ] })
  ] }) : /* @__PURE__ */ o("div", { role: "status", children: "Sadržaj trenutno nije dostupan." });
}
function Wn({ config: l }) {
  const [h, u] = re(!0), d = String(l.url || "").trim();
  let x = null;
  try {
    d && (x = new URL(d));
  } catch {
  }
  const b = String(l.title || "Zakažite sastanak"), P = String(l.description || "Odaberite datum i termin koji vam najviše odgovara."), A = String(l.duration || "30 min"), L = String(l.provider || (d.includes("cal.com") ? "cal" : "calendly")), S = Number(l.height || 440);
  return !x || x.protocol !== "https:" ? /* @__PURE__ */ o("div", { className: "pitaj-inline-widget-card pitaj-booking-card", children: /* @__PURE__ */ o("div", { className: "pitaj-booking-header", children: [
    /* @__PURE__ */ o("div", { className: "pitaj-booking-brand-icon", children: /* @__PURE__ */ o(ps, { size: 18 }) }),
    /* @__PURE__ */ o("div", { className: "pitaj-booking-info", children: [
      /* @__PURE__ */ o("div", { className: "pitaj-booking-title", children: b }),
      /* @__PURE__ */ o("div", { className: "pitaj-booking-desc", children: "Link za zakazivanje termina trenutno nije dostupan." })
    ] })
  ] }) }) : /* @__PURE__ */ o("div", { className: "pitaj-inline-widget-card pitaj-booking-card", children: [
    /* @__PURE__ */ o("div", { className: "pitaj-booking-header", children: [
      /* @__PURE__ */ o("div", { className: "pitaj-booking-brand-icon", title: L === "cal" ? "Cal.com" : "Calendly", children: L === "cal" ? /* @__PURE__ */ o("span", { className: "pitaj-cal-logo", children: "Cal" }) : L === "calendly" ? /* @__PURE__ */ o("span", { className: "pitaj-calendly-logo", children: "C" }) : /* @__PURE__ */ o(ps, { size: 18 }) }),
      /* @__PURE__ */ o("div", { className: "pitaj-booking-info", children: [
        /* @__PURE__ */ o("div", { className: "pitaj-booking-title", children: b }),
        /* @__PURE__ */ o("div", { className: "pitaj-booking-meta", children: [
          /* @__PURE__ */ o("span", { className: "pitaj-booking-tag", children: [
            "⏱️ ",
            A
          ] }),
          /* @__PURE__ */ o("span", { className: "pitaj-booking-tag", children: "📹 Video poziv" })
        ] })
      ] }),
      /* @__PURE__ */ o(
        "a",
        {
          href: x.href,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "pitaj-booking-open-btn",
          title: "Otvori u novom prozoru",
          children: "↗"
        }
      )
    ] }),
    P && /* @__PURE__ */ o("div", { className: "pitaj-booking-desc", children: P }),
    /* @__PURE__ */ o("div", { className: "pitaj-booking-frame-wrap", style: { height: `${S}px` }, children: [
      h && /* @__PURE__ */ o("div", { className: "pitaj-booking-loading", children: [
        /* @__PURE__ */ o("span", { className: "pitaj-typing-dot" }),
        /* @__PURE__ */ o("span", { className: "pitaj-typing-dot" }),
        /* @__PURE__ */ o("span", { className: "pitaj-typing-dot" })
      ] }),
      /* @__PURE__ */ o(
        "iframe",
        {
          src: x.href,
          title: b,
          className: "pitaj-booking-frame",
          onLoad: () => u(!1),
          sandbox: "allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
        }
      )
    ] })
  ] });
}
function Kn({ config: l }) {
  var x;
  const h = l.data || l.default_data || {}, u = String(l.title || l.name || "Podaci sa sistema"), d = typeof h == "object" && h !== null && Object.keys(h).length > 0;
  return /* @__PURE__ */ o("div", { className: "pitaj-inline-widget-card pitaj-api-widget", role: "region", "aria-label": u, children: [
    /* @__PURE__ */ o("div", { className: "pitaj-api-header", children: [
      /* @__PURE__ */ o("div", { className: "pitaj-api-title-row", children: [
        /* @__PURE__ */ o("span", { className: "pitaj-api-icon", children: "⚡" }),
        /* @__PURE__ */ o("span", { className: "pitaj-api-title", children: u })
      ] }),
      d && /* @__PURE__ */ o("span", { className: "pitaj-api-badge", children: "Uživo" })
    ] }),
    d ? /* @__PURE__ */ o("div", { className: "pitaj-api-body", children: Object.entries(h).slice(0, 15).map(([b, P]) => {
      let A = P;
      return typeof P == "object" && P !== null && (A = JSON.stringify(P)), /* @__PURE__ */ o("div", { className: "pitaj-api-row", children: [
        /* @__PURE__ */ o("span", { className: "pitaj-api-key", children: [
          b.replace(/_/g, " "),
          ":"
        ] }),
        /* @__PURE__ */ o("span", { className: "pitaj-api-val", children: String(A) })
      ] }, b);
    }) }) : /* @__PURE__ */ o("div", { className: "pitaj-api-empty", children: ((x = l.lookup) == null ? void 0 : x.status) === "expired" ? "Podaci se ne čuvaju. Pošaljite novi upit za ažurne podatke." : "Podaci trenutno nisu dostupni." })
  ] });
}
function Gn({ config: l }) {
  var B;
  const h = l.data || l.default_data || {}, u = h.order_number || l.order_number;
  if (!u) {
    const q = (B = l.lookup) == null ? void 0 : B.status;
    return /* @__PURE__ */ o("div", { className: "pitaj-inline-widget-card pitaj-order-card", role: "status", children: /* @__PURE__ */ o("div", { className: "pitaj-order-notice", children: q === "not_found" ? "Nismo pronašli narudžbu s tim brojem i emailom. Provjerite podatke i pokušajte ponovo." : q === "needs_email" ? "Za provjeru statusa napišite i email adresu kojom ste naručili (npr. #1234, ime@domena.ba)." : q === "unavailable" ? "Trenutno ne možemo provjeriti status narudžbe jer trgovina ne odgovara. Pokušajte ponovo za nekoliko minuta." : q === "expired" ? "Podaci o narudžbi se ne čuvaju. Pošaljite novi upit s brojem narudžbe i emailom za ažuran status." : "Napišite broj narudžbe i email kojim ste naručili (npr. #1234, ime@domena.ba) i provjerit ću status." }) });
  }
  const d = h.status_label || l.status_label || "Status nije dostupan", x = h.status_color || "blue", b = h.tracking_number || l.tracking_number, P = h.tracking_company || l.tracking_company || "Dostavna služba", A = h.tracking_url || l.tracking_url, L = h.total ? `${h.total} ${h.currency || "KM"}` : null, S = Array.isArray(h.items) && h.items.length > 0 ? h.items.map((q) => `${q.title} (x${q.quantity || 1})`).join(", ") : h.items_summary || l.items_summary, N = h.date || l.date, w = x === "emerald" ? "pitaj-order-badge-success" : x === "blue" ? "pitaj-order-badge-info" : "pitaj-order-badge-pending";
  return /* @__PURE__ */ o("div", { className: "pitaj-inline-widget-card pitaj-order-card", role: "region", "aria-label": `Narudžba ${u}`, children: [
    /* @__PURE__ */ o("div", { className: "pitaj-order-header", children: [
      /* @__PURE__ */ o("div", { className: "pitaj-order-id-group", children: [
        /* @__PURE__ */ o("span", { className: "pitaj-order-icon", children: "📦" }),
        /* @__PURE__ */ o("span", { className: "pitaj-order-number", children: u })
      ] }),
      /* @__PURE__ */ o("span", { className: `pitaj-order-status-badge ${w}`, children: d })
    ] }),
    /* @__PURE__ */ o("div", { className: "pitaj-order-details", children: [
      b ? /* @__PURE__ */ o("div", { className: "pitaj-order-tracking-box", children: [
        /* @__PURE__ */ o("div", { className: "pitaj-order-tracking-title", children: "Broj za praćenje pošiljke:" }),
        /* @__PURE__ */ o("div", { className: "pitaj-order-tracking-val", children: [
          /* @__PURE__ */ o("span", { children: [
            P,
            ": ",
            /* @__PURE__ */ o("strong", { children: b })
          ] }),
          A && /* @__PURE__ */ o("a", { href: A, target: "_blank", rel: "noopener noreferrer", className: "pitaj-order-tracking-link", children: "Prati ↗" })
        ] })
      ] }) : x === "amber" ? /* @__PURE__ */ o("div", { className: "pitaj-order-notice", children: "Pošiljka je u pripremi za slanje. Broj za praćenje će biti dostupan ubrzo." }) : null,
      /* @__PURE__ */ o("div", { className: "pitaj-order-meta-grid", children: [
        S && /* @__PURE__ */ o("div", { className: "pitaj-order-meta-item", children: [
          /* @__PURE__ */ o("span", { className: "pitaj-order-meta-label", children: "Artikli:" }),
          /* @__PURE__ */ o("span", { className: "pitaj-order-meta-val", children: S })
        ] }),
        L && /* @__PURE__ */ o("div", { className: "pitaj-order-meta-item", children: [
          /* @__PURE__ */ o("span", { className: "pitaj-order-meta-label", children: "Ukupno:" }),
          /* @__PURE__ */ o("span", { className: "pitaj-order-meta-val", children: L })
        ] }),
        N && /* @__PURE__ */ o("div", { className: "pitaj-order-meta-item", children: [
          /* @__PURE__ */ o("span", { className: "pitaj-order-meta-label", children: "Datum:" }),
          /* @__PURE__ */ o("span", { className: "pitaj-order-meta-val", children: N })
        ] })
      ] })
    ] })
  ] });
}
function Jn({ config: l }) {
  var d, x, b;
  const h = Array.isArray((d = l.data) == null ? void 0 : d.tickets) ? l.data.tickets : [], u = l.title || "Status zahtjeva";
  if (h.length === 0) {
    const P = (x = l.data_state) == null ? void 0 : x.reason, A = P === "not_found" ? "Nismo pronašli zahtjev s tim brojem i emailom. Provjerite podatke i pokušajte ponovo." : P === "needs_email" ? "Za provjeru statusa napišite i email adresu kojom ste poslali zahtjev (npr. TKT-1-000123, ime@domena.ba)." : ((b = l.data_state) == null ? void 0 : b.status) === "unavailable" ? "Podaci o zahtjevu trenutno nisu dostupni." : "Nemamo zahtjev povezan s ovim razgovorom. Napišite broj zahtjeva i email kojim ste ga poslali (npr. TKT-1-000123, ime@domena.ba).";
    return /* @__PURE__ */ o("div", { className: "pitaj-inline-widget-card pitaj-order-card", role: "status", children: /* @__PURE__ */ o("div", { className: "pitaj-order-notice", children: A }) });
  }
  return /* @__PURE__ */ o("div", { className: "pitaj-inline-widget-card pitaj-order-card", role: "region", "aria-label": u, children: h.map((P) => {
    const A = P.status_color === "emerald" ? "pitaj-order-badge-success" : P.status_color === "blue" ? "pitaj-order-badge-info" : "pitaj-order-badge-pending";
    return /* @__PURE__ */ o("div", { className: "pitaj-order-details", style: { marginBottom: h.length > 1 ? 12 : 0 }, children: [
      /* @__PURE__ */ o("div", { className: "pitaj-order-header", children: [
        /* @__PURE__ */ o("div", { className: "pitaj-order-id-group", children: /* @__PURE__ */ o("span", { className: "pitaj-order-number", children: P.subject || P.number }) }),
        /* @__PURE__ */ o("span", { className: `pitaj-order-status-badge ${A}`, children: P.status_label })
      ] }),
      /* @__PURE__ */ o("div", { className: "pitaj-order-meta-grid", children: [
        /* @__PURE__ */ o("div", { className: "pitaj-order-meta-item", children: [
          /* @__PURE__ */ o("span", { className: "pitaj-order-meta-label", children: "Broj:" }),
          /* @__PURE__ */ o("span", { className: "pitaj-order-meta-val", children: P.number })
        ] }),
        P.created_at && /* @__PURE__ */ o("div", { className: "pitaj-order-meta-item", children: [
          /* @__PURE__ */ o("span", { className: "pitaj-order-meta-label", children: "Poslano:" }),
          /* @__PURE__ */ o("span", { className: "pitaj-order-meta-val", children: P.created_at })
        ] }),
        P.resolved_at ? /* @__PURE__ */ o("div", { className: "pitaj-order-meta-item", children: [
          /* @__PURE__ */ o("span", { className: "pitaj-order-meta-label", children: "Riješeno:" }),
          /* @__PURE__ */ o("span", { className: "pitaj-order-meta-val", children: P.resolved_at })
        ] }) : P.updated_at ? /* @__PURE__ */ o("div", { className: "pitaj-order-meta-item", children: [
          /* @__PURE__ */ o("span", { className: "pitaj-order-meta-label", children: "Zadnje ažuriranje:" }),
          /* @__PURE__ */ o("span", { className: "pitaj-order-meta-val", children: P.updated_at })
        ] }) : null
      ] })
    ] }, P.number);
  }) });
}
function Xn({ config: l, onAction: h }) {
  const u = l.html || '<div style="padding: 16px; text-align: center;">Prilagođeni HTML widget</div>', d = l.css || "";
  return /* @__PURE__ */ o("div", { className: "pitaj-inline-widget-card custom-html-widget", onClick: (b) => {
    var A;
    const P = (A = b.target) == null ? void 0 : A.closest("[data-chat-action]");
    if (P) {
      const L = P.getAttribute("data-chat-action");
      L && (b.preventDefault(), h == null || h(L));
    }
  }, children: [
    d && /* @__PURE__ */ o("style", { children: d }),
    /* @__PURE__ */ o("div", { dangerouslySetInnerHTML: { __html: Fa(String(u)) } })
  ] });
}
export {
  ro as InlineWidgetRenderer
};
