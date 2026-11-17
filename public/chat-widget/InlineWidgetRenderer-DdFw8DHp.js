import { w as Vi, p as qi, u as h, k as Ni, S as ks, l as Ls, m as mt, n as Wi, o as Ds, G as Ki, q as Gi, W as Ji, B as Ss, r as Ur, g as zr, E as $r, F as vi, s as Hr, v as Cs, x as ki, y as Is, e as as, z as Vr, c as qr, d as be, A as at, h as gs, D as Wr, H as Kr, I as vt, R as Li, J as Gr, K as Jr, L as Xr, N as Yr, O as Zr } from "./widget-C-Owe0w6.js";
/*! @license DOMPurify 3.2.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.6/LICENSE */
const {
  entries: Xi,
  setPrototypeOf: Di,
  isFrozen: Qr,
  getPrototypeOf: ea,
  getOwnPropertyDescriptor: ta
} = Object;
let {
  freeze: we,
  seal: Re,
  create: Yi
} = Object, {
  apply: Es,
  construct: Ns
} = typeof Reflect < "u" && Reflect;
we || (we = function(u) {
  return u;
});
Re || (Re = function(u) {
  return u;
});
Es || (Es = function(u, m, x) {
  return u.apply(m, x);
});
Ns || (Ns = function(u, m) {
  return new u(...m);
});
const ss = Se(Array.prototype.forEach), sa = Se(Array.prototype.lastIndexOf), Oi = Se(Array.prototype.pop), kt = Se(Array.prototype.push), ia = Se(Array.prototype.splice), rs = Se(String.prototype.toLowerCase), bs = Se(String.prototype.toString), ji = Se(String.prototype.match), Lt = Se(String.prototype.replace), ra = Se(String.prototype.indexOf), aa = Se(String.prototype.trim), qe = Se(Object.prototype.hasOwnProperty), Ae = Se(RegExp.prototype.test), Dt = na(TypeError);
function Se(l) {
  return function(u) {
    u instanceof RegExp && (u.lastIndex = 0);
    for (var m = arguments.length, x = new Array(m > 1 ? m - 1 : 0), b = 1; b < m; b++)
      x[b - 1] = arguments[b];
    return Es(l, u, x);
  };
}
function na(l) {
  return function() {
    for (var u = arguments.length, m = new Array(u), x = 0; x < u; x++)
      m[x] = arguments[x];
    return Ns(l, m);
  };
}
function V(l, u) {
  let m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : rs;
  Di && Di(l, null);
  let x = u.length;
  for (; x--; ) {
    let b = u[x];
    if (typeof b == "string") {
      const g = m(b);
      g !== b && (Qr(u) || (u[x] = g), b = g);
    }
    l[b] = !0;
  }
  return l;
}
function oa(l) {
  for (let u = 0; u < l.length; u++)
    qe(l, u) || (l[u] = null);
  return l;
}
function Xe(l) {
  const u = Yi(null);
  for (const [m, x] of Xi(l))
    qe(l, m) && (Array.isArray(x) ? u[m] = oa(x) : x && typeof x == "object" && x.constructor === Object ? u[m] = Xe(x) : u[m] = x);
  return u;
}
function Ot(l, u) {
  for (; l !== null; ) {
    const x = ta(l, u);
    if (x) {
      if (x.get)
        return Se(x.get);
      if (typeof x.value == "function")
        return Se(x.value);
    }
    l = ea(l);
  }
  function m() {
    return null;
  }
  return m;
}
const Mi = we(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ps = we(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Ts = we(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), la = we(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), As = we(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), ca = we(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), _i = we(["#text"]), Fi = we(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), ws = we(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Ri = we(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), is = we(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), ha = Re(/\{\{[\w\W]*|[\w\W]*\}\}/gm), ua = Re(/<%[\w\W]*|[\w\W]*%>/gm), pa = Re(/\$\{[\w\W]*/gm), da = Re(/^data-[\-\w.\u00B7-\uFFFF]+$/), fa = Re(/^aria-[\-\w]+$/), Zi = Re(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), ma = Re(/^(?:\w+script|data):/i), ya = Re(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Qi = Re(/^html$/i), xa = Re(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Bi = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: fa,
  ATTR_WHITESPACE: ya,
  CUSTOM_ELEMENT: xa,
  DATA_ATTR: da,
  DOCTYPE_NAME: Qi,
  ERB_EXPR: ua,
  IS_ALLOWED_URI: Zi,
  IS_SCRIPT_OR_DATA: ma,
  MUSTACHE_EXPR: ha,
  TMPLIT_EXPR: pa
});
const jt = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, ga = function() {
  return typeof window > "u" ? null : window;
}, ba = function(u, m) {
  if (typeof u != "object" || typeof u.createPolicy != "function")
    return null;
  let x = null;
  const b = "data-tt-policy-suffix";
  m && m.hasAttribute(b) && (x = m.getAttribute(b));
  const g = "dompurify" + (x ? "#" + x : "");
  try {
    return u.createPolicy(g, {
      createHTML(T) {
        return T;
      },
      createScriptURL(T) {
        return T;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + g + " could not be created."), null;
  }
}, Ui = function() {
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
function er() {
  let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ga();
  const u = (M) => er(M);
  if (u.version = "3.2.6", u.removed = [], !l || !l.document || l.document.nodeType !== jt.document || !l.Element)
    return u.isSupported = !1, u;
  let {
    document: m
  } = l;
  const x = m, b = x.currentScript, {
    DocumentFragment: g,
    HTMLTemplateElement: T,
    Node: I,
    Element: _,
    NodeFilter: A,
    NamedNodeMap: N = l.NamedNodeMap || l.MozNamedAttrMap,
    HTMLFormElement: F,
    DOMParser: K,
    trustedTypes: ne
  } = l, ce = _.prototype, fe = Ot(ce, "cloneNode"), Ce = Ot(ce, "remove"), ee = Ot(ce, "nextSibling"), d = Ot(ce, "childNodes"), X = Ot(ce, "parentNode");
  if (typeof T == "function") {
    const M = m.createElement("template");
    M.content && M.content.ownerDocument && (m = M.content.ownerDocument);
  }
  let $, Ie = "";
  const {
    implementation: Be,
    createNodeIterator: Ne,
    createDocumentFragment: Ue,
    getElementsByTagName: me
  } = m, {
    importNode: B
  } = x;
  let D = Ui();
  u.isSupported = typeof Xi == "function" && typeof X == "function" && Be && Be.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: C,
    ERB_EXPR: ve,
    TMPLIT_EXPR: ze,
    DATA_ATTR: ke,
    ARIA_ATTR: Ze,
    IS_SCRIPT_OR_DATA: We,
    ATTR_WHITESPACE: Ke,
    CUSTOM_ELEMENT: H
  } = Bi;
  let {
    IS_ALLOWED_URI: oe
  } = Bi, Y = null;
  const ge = V({}, [...Mi, ...Ps, ...Ts, ...As, ..._i]);
  let ie = null;
  const $e = V({}, [...Fi, ...ws, ...Ri, ...is]);
  let J = Object.seal(Yi(null, {
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
  })), G = null, De = null, L = !0, U = !0, re = !1, R = !0, te = !1, q = !0, Pe = !1, nt = !1, Oe = !1, Qe = !1, ot = !1, yt = !1, xt = !0, Mt = !1;
  const os = "user-content-";
  let Tt = !0, lt = !1, et = {}, Te = null;
  const ct = V({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let _t = null;
  const ht = V({}, ["audio", "video", "img", "source", "image", "track"]);
  let Le = null;
  const gt = V({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ut = "http://www.w3.org/1998/Math/MathML", bt = "http://www.w3.org/2000/svg", He = "http://www.w3.org/1999/xhtml";
  let Ge = He, At = !1, pt = null;
  const je = V({}, [ut, bt, He], bs);
  let Me = V({}, ["mi", "mo", "mn", "ms", "mtext"]), tt = V({}, ["annotation-xml"]);
  const ls = V({}, ["title", "style", "font", "a", "script"]);
  let dt = null;
  const cs = ["application/xhtml+xml", "text/html"], Ft = "text/html";
  let he = null, Je = null;
  const Rt = m.createElement("form"), Bt = function(y) {
    return y instanceof RegExp || y instanceof Function;
  }, wt = function() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Je && Je === y)) {
      if ((!y || typeof y != "object") && (y = {}), y = Xe(y), dt = // eslint-disable-next-line unicorn/prefer-includes
      cs.indexOf(y.PARSER_MEDIA_TYPE) === -1 ? Ft : y.PARSER_MEDIA_TYPE, he = dt === "application/xhtml+xml" ? bs : rs, Y = qe(y, "ALLOWED_TAGS") ? V({}, y.ALLOWED_TAGS, he) : ge, ie = qe(y, "ALLOWED_ATTR") ? V({}, y.ALLOWED_ATTR, he) : $e, pt = qe(y, "ALLOWED_NAMESPACES") ? V({}, y.ALLOWED_NAMESPACES, bs) : je, Le = qe(y, "ADD_URI_SAFE_ATTR") ? V(Xe(gt), y.ADD_URI_SAFE_ATTR, he) : gt, _t = qe(y, "ADD_DATA_URI_TAGS") ? V(Xe(ht), y.ADD_DATA_URI_TAGS, he) : ht, Te = qe(y, "FORBID_CONTENTS") ? V({}, y.FORBID_CONTENTS, he) : ct, G = qe(y, "FORBID_TAGS") ? V({}, y.FORBID_TAGS, he) : Xe({}), De = qe(y, "FORBID_ATTR") ? V({}, y.FORBID_ATTR, he) : Xe({}), et = qe(y, "USE_PROFILES") ? y.USE_PROFILES : !1, L = y.ALLOW_ARIA_ATTR !== !1, U = y.ALLOW_DATA_ATTR !== !1, re = y.ALLOW_UNKNOWN_PROTOCOLS || !1, R = y.ALLOW_SELF_CLOSE_IN_ATTR !== !1, te = y.SAFE_FOR_TEMPLATES || !1, q = y.SAFE_FOR_XML !== !1, Pe = y.WHOLE_DOCUMENT || !1, Qe = y.RETURN_DOM || !1, ot = y.RETURN_DOM_FRAGMENT || !1, yt = y.RETURN_TRUSTED_TYPE || !1, Oe = y.FORCE_BODY || !1, xt = y.SANITIZE_DOM !== !1, Mt = y.SANITIZE_NAMED_PROPS || !1, Tt = y.KEEP_CONTENT !== !1, lt = y.IN_PLACE || !1, oe = y.ALLOWED_URI_REGEXP || Zi, Ge = y.NAMESPACE || He, Me = y.MATHML_TEXT_INTEGRATION_POINTS || Me, tt = y.HTML_INTEGRATION_POINTS || tt, J = y.CUSTOM_ELEMENT_HANDLING || {}, y.CUSTOM_ELEMENT_HANDLING && Bt(y.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (J.tagNameCheck = y.CUSTOM_ELEMENT_HANDLING.tagNameCheck), y.CUSTOM_ELEMENT_HANDLING && Bt(y.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (J.attributeNameCheck = y.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), y.CUSTOM_ELEMENT_HANDLING && typeof y.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (J.allowCustomizedBuiltInElements = y.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), te && (U = !1), ot && (Qe = !0), et && (Y = V({}, _i), ie = [], et.html === !0 && (V(Y, Mi), V(ie, Fi)), et.svg === !0 && (V(Y, Ps), V(ie, ws), V(ie, is)), et.svgFilters === !0 && (V(Y, Ts), V(ie, ws), V(ie, is)), et.mathMl === !0 && (V(Y, As), V(ie, Ri), V(ie, is))), y.ADD_TAGS && (Y === ge && (Y = Xe(Y)), V(Y, y.ADD_TAGS, he)), y.ADD_ATTR && (ie === $e && (ie = Xe(ie)), V(ie, y.ADD_ATTR, he)), y.ADD_URI_SAFE_ATTR && V(Le, y.ADD_URI_SAFE_ATTR, he), y.FORBID_CONTENTS && (Te === ct && (Te = Xe(Te)), V(Te, y.FORBID_CONTENTS, he)), Tt && (Y["#text"] = !0), Pe && V(Y, ["html", "head", "body"]), Y.table && (V(Y, ["tbody"]), delete G.tbody), y.TRUSTED_TYPES_POLICY) {
        if (typeof y.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Dt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof y.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Dt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        $ = y.TRUSTED_TYPES_POLICY, Ie = $.createHTML("");
      } else
        $ === void 0 && ($ = ba(ne, b)), $ !== null && typeof Ie == "string" && (Ie = $.createHTML(""));
      we && we(y), Je = y;
    }
  }, Ut = V({}, [...Ps, ...Ts, ...la]), zt = V({}, [...As, ...ca]), St = function(y) {
    let w = X(y);
    (!w || !w.tagName) && (w = {
      namespaceURI: Ge,
      tagName: "template"
    });
    const O = rs(y.tagName), Z = rs(w.tagName);
    return pt[y.namespaceURI] ? y.namespaceURI === bt ? w.namespaceURI === He ? O === "svg" : w.namespaceURI === ut ? O === "svg" && (Z === "annotation-xml" || Me[Z]) : !!Ut[O] : y.namespaceURI === ut ? w.namespaceURI === He ? O === "math" : w.namespaceURI === bt ? O === "math" && tt[Z] : !!zt[O] : y.namespaceURI === He ? w.namespaceURI === bt && !tt[Z] || w.namespaceURI === ut && !Me[Z] ? !1 : !zt[O] && (ls[O] || !Ut[O]) : !!(dt === "application/xhtml+xml" && pt[y.namespaceURI]) : !1;
  }, Ee = function(y) {
    kt(u.removed, {
      element: y
    });
    try {
      X(y).removeChild(y);
    } catch {
      Ce(y);
    }
  }, st = function(y, w) {
    try {
      kt(u.removed, {
        attribute: w.getAttributeNode(y),
        from: w
      });
    } catch {
      kt(u.removed, {
        attribute: null,
        from: w
      });
    }
    if (w.removeAttribute(y), y === "is")
      if (Qe || ot)
        try {
          Ee(w);
        } catch {
        }
      else
        try {
          w.setAttribute(y, "");
        } catch {
        }
  }, $t = function(y) {
    let w = null, O = null;
    if (Oe)
      y = "<remove></remove>" + y;
    else {
      const ue = ji(y, /^[\r\n\t ]+/);
      O = ue && ue[0];
    }
    dt === "application/xhtml+xml" && Ge === He && (y = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + y + "</body></html>");
    const Z = $ ? $.createHTML(y) : y;
    if (Ge === He)
      try {
        w = new K().parseFromString(Z, dt);
      } catch {
      }
    if (!w || !w.documentElement) {
      w = Be.createDocument(Ge, "template", null);
      try {
        w.documentElement.innerHTML = At ? Ie : Z;
      } catch {
      }
    }
    const de = w.body || w.documentElement;
    return y && O && de.insertBefore(m.createTextNode(O), de.childNodes[0] || null), Ge === He ? me.call(w, Pe ? "html" : "body")[0] : Pe ? w.documentElement : de;
  }, Ht = function(y) {
    return Ne.call(
      y.ownerDocument || y,
      y,
      // eslint-disable-next-line no-bitwise
      A.SHOW_ELEMENT | A.SHOW_COMMENT | A.SHOW_TEXT | A.SHOW_PROCESSING_INSTRUCTION | A.SHOW_CDATA_SECTION,
      null
    );
  }, j = function(y) {
    return y instanceof F && (typeof y.nodeName != "string" || typeof y.textContent != "string" || typeof y.removeChild != "function" || !(y.attributes instanceof N) || typeof y.removeAttribute != "function" || typeof y.setAttribute != "function" || typeof y.namespaceURI != "string" || typeof y.insertBefore != "function" || typeof y.hasChildNodes != "function");
  }, Vt = function(y) {
    return typeof I == "function" && y instanceof I;
  };
  function _e(M, y, w) {
    ss(M, (O) => {
      O.call(u, y, w, Je);
    });
  }
  const qt = function(y) {
    let w = null;
    if (_e(D.beforeSanitizeElements, y, null), j(y))
      return Ee(y), !0;
    const O = he(y.nodeName);
    if (_e(D.uponSanitizeElement, y, {
      tagName: O,
      allowedTags: Y
    }), q && y.hasChildNodes() && !Vt(y.firstElementChild) && Ae(/<[/\w!]/g, y.innerHTML) && Ae(/<[/\w!]/g, y.textContent) || y.nodeType === jt.progressingInstruction || q && y.nodeType === jt.comment && Ae(/<[/\w]/g, y.data))
      return Ee(y), !0;
    if (!Y[O] || G[O]) {
      if (!G[O] && Kt(O) && (J.tagNameCheck instanceof RegExp && Ae(J.tagNameCheck, O) || J.tagNameCheck instanceof Function && J.tagNameCheck(O)))
        return !1;
      if (Tt && !Te[O]) {
        const Z = X(y) || y.parentNode, de = d(y) || y.childNodes;
        if (de && Z) {
          const ue = de.length;
          for (let le = ue - 1; le >= 0; --le) {
            const ye = fe(de[le], !0);
            ye.__removalCount = (y.__removalCount || 0) + 1, Z.insertBefore(ye, ee(y));
          }
        }
      }
      return Ee(y), !0;
    }
    return y instanceof _ && !St(y) || (O === "noscript" || O === "noembed" || O === "noframes") && Ae(/<\/no(script|embed|frames)/i, y.innerHTML) ? (Ee(y), !0) : (te && y.nodeType === jt.text && (w = y.textContent, ss([C, ve, ze], (Z) => {
      w = Lt(w, Z, " ");
    }), y.textContent !== w && (kt(u.removed, {
      element: y.cloneNode()
    }), y.textContent = w)), _e(D.afterSanitizeElements, y, null), !1);
  }, Wt = function(y, w, O) {
    if (xt && (w === "id" || w === "name") && (O in m || O in Rt))
      return !1;
    if (!(U && !De[w] && Ae(ke, w))) {
      if (!(L && Ae(Ze, w))) {
        if (!ie[w] || De[w]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Kt(y) && (J.tagNameCheck instanceof RegExp && Ae(J.tagNameCheck, y) || J.tagNameCheck instanceof Function && J.tagNameCheck(y)) && (J.attributeNameCheck instanceof RegExp && Ae(J.attributeNameCheck, w) || J.attributeNameCheck instanceof Function && J.attributeNameCheck(w)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            w === "is" && J.allowCustomizedBuiltInElements && (J.tagNameCheck instanceof RegExp && Ae(J.tagNameCheck, O) || J.tagNameCheck instanceof Function && J.tagNameCheck(O)))
          ) return !1;
        } else if (!Le[w]) {
          if (!Ae(oe, Lt(O, Ke, ""))) {
            if (!((w === "src" || w === "xlink:href" || w === "href") && y !== "script" && ra(O, "data:") === 0 && _t[y])) {
              if (!(re && !Ae(We, Lt(O, Ke, "")))) {
                if (O)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Kt = function(y) {
    return y !== "annotation-xml" && ji(y, H);
  }, Gt = function(y) {
    _e(D.beforeSanitizeAttributes, y, null);
    const {
      attributes: w
    } = y;
    if (!w || j(y))
      return;
    const O = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: ie,
      forceKeepAttr: void 0
    };
    let Z = w.length;
    for (; Z--; ) {
      const de = w[Z], {
        name: ue,
        namespaceURI: le,
        value: ye
      } = de, Fe = he(ue), Ct = ye;
      let xe = ue === "value" ? Ct : aa(Ct);
      if (O.attrName = Fe, O.attrValue = xe, O.keepAttr = !0, O.forceKeepAttr = void 0, _e(D.uponSanitizeAttribute, y, O), xe = O.attrValue, Mt && (Fe === "id" || Fe === "name") && (st(ue, y), xe = os + xe), q && Ae(/((--!?|])>)|<\/(style|title)/i, xe)) {
        st(ue, y);
        continue;
      }
      if (O.forceKeepAttr)
        continue;
      if (!O.keepAttr) {
        st(ue, y);
        continue;
      }
      if (!R && Ae(/\/>/i, xe)) {
        st(ue, y);
        continue;
      }
      te && ss([C, ve, ze], (Xt) => {
        xe = Lt(xe, Xt, " ");
      });
      const Jt = he(y.nodeName);
      if (!Wt(Jt, Fe, xe)) {
        st(ue, y);
        continue;
      }
      if ($ && typeof ne == "object" && typeof ne.getAttributeType == "function" && !le)
        switch (ne.getAttributeType(Jt, Fe)) {
          case "TrustedHTML": {
            xe = $.createHTML(xe);
            break;
          }
          case "TrustedScriptURL": {
            xe = $.createScriptURL(xe);
            break;
          }
        }
      if (xe !== Ct)
        try {
          le ? y.setAttributeNS(le, ue, xe) : y.setAttribute(ue, xe), j(y) ? Ee(y) : Oi(u.removed);
        } catch {
          st(ue, y);
        }
    }
    _e(D.afterSanitizeAttributes, y, null);
  }, hs = function M(y) {
    let w = null;
    const O = Ht(y);
    for (_e(D.beforeSanitizeShadowDOM, y, null); w = O.nextNode(); )
      _e(D.uponSanitizeShadowNode, w, null), qt(w), Gt(w), w.content instanceof g && M(w.content);
    _e(D.afterSanitizeShadowDOM, y, null);
  };
  return u.sanitize = function(M) {
    let y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, w = null, O = null, Z = null, de = null;
    if (At = !M, At && (M = "<!-->"), typeof M != "string" && !Vt(M))
      if (typeof M.toString == "function") {
        if (M = M.toString(), typeof M != "string")
          throw Dt("dirty is not a string, aborting");
      } else
        throw Dt("toString is not a function");
    if (!u.isSupported)
      return M;
    if (nt || wt(y), u.removed = [], typeof M == "string" && (lt = !1), lt) {
      if (M.nodeName) {
        const ye = he(M.nodeName);
        if (!Y[ye] || G[ye])
          throw Dt("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (M instanceof I)
      w = $t("<!---->"), O = w.ownerDocument.importNode(M, !0), O.nodeType === jt.element && O.nodeName === "BODY" || O.nodeName === "HTML" ? w = O : w.appendChild(O);
    else {
      if (!Qe && !te && !Pe && // eslint-disable-next-line unicorn/prefer-includes
      M.indexOf("<") === -1)
        return $ && yt ? $.createHTML(M) : M;
      if (w = $t(M), !w)
        return Qe ? null : yt ? Ie : "";
    }
    w && Oe && Ee(w.firstChild);
    const ue = Ht(lt ? M : w);
    for (; Z = ue.nextNode(); )
      qt(Z), Gt(Z), Z.content instanceof g && hs(Z.content);
    if (lt)
      return M;
    if (Qe) {
      if (ot)
        for (de = Ue.call(w.ownerDocument); w.firstChild; )
          de.appendChild(w.firstChild);
      else
        de = w;
      return (ie.shadowroot || ie.shadowrootmode) && (de = B.call(x, de, !0)), de;
    }
    let le = Pe ? w.outerHTML : w.innerHTML;
    return Pe && Y["!doctype"] && w.ownerDocument && w.ownerDocument.doctype && w.ownerDocument.doctype.name && Ae(Qi, w.ownerDocument.doctype.name) && (le = "<!DOCTYPE " + w.ownerDocument.doctype.name + `>
` + le), te && ss([C, ve, ze], (ye) => {
      le = Lt(le, ye, " ");
    }), $ && yt ? $.createHTML(le) : le;
  }, u.setConfig = function() {
    let M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    wt(M), nt = !0;
  }, u.clearConfig = function() {
    Je = null, nt = !1;
  }, u.isValidAttribute = function(M, y, w) {
    Je || wt({});
    const O = he(M), Z = he(y);
    return Wt(O, Z, w);
  }, u.addHook = function(M, y) {
    typeof y == "function" && kt(D[M], y);
  }, u.removeHook = function(M, y) {
    if (y !== void 0) {
      const w = sa(D[M], y);
      return w === -1 ? void 0 : ia(D[M], w, 1)[0];
    }
    return Oi(D[M]);
  }, u.removeHooks = function(M) {
    D[M] = [];
  }, u.removeAllHooks = function() {
    D = Ui();
  }, u;
}
var tr = er();
let zi = !1;
function Pa() {
  zi || (zi = !0, tr.addHook("afterSanitizeAttributes", (l) => {
    l.tagName === "A" && l.getAttribute("target") && l.setAttribute("rel", "noopener noreferrer");
  }));
}
function Ta(l) {
  return l ? (Pa(), tr.sanitize(l, {
    USE_PROFILES: { html: !0 },
    ADD_ATTR: ["target", "data-chat-action"],
    FORBID_TAGS: ["style", "iframe", "object", "embed", "form", "base", "meta", "link"],
    FORBID_ATTR: ["formaction"]
  })) : "";
}
function Aa(l) {
  try {
    const u = new URL(String(l ?? "").trim());
    return u.protocol === "https:" || u.protocol === "http:" ? u.toString() : null;
  } catch {
    return null;
  }
}
function wa(l, u, m) {
  return l === "rate_limit" ? "rate_limit" : l === "api" && u === "FUNCTION_INVALID_INPUT" ? "input" : l === "api" && (u === "FUNCTION_UNAVAILABLE" || m === 404) ? "unavailable" : "failed";
}
function Sa(l, u) {
  const m = Number.isFinite(u) ? Math.min(2592e3, Math.max(1, Math.ceil(u))) : 60;
  return l + m * 1e3;
}
function Ca(l, u) {
  const m = Array.isArray(u.function_names) ? u.function_names : [], x = Array.isArray(u.functions) ? u.functions : [];
  return m.includes(l) || x.some((b) => b && (b.id === l || b.name === l));
}
function Ia(l, u) {
  if (u.function_execution_enabled !== !0 || !u.function_actions || typeof u.function_actions != "object") return null;
  const m = Object.prototype.hasOwnProperty.call(u.function_actions, l) ? u.function_actions[l] : null;
  return typeof m == "string" && /^[a-zA-Z0-9_-]{1,100}$/.test(m) ? m : null;
}
function Ea(l, u, m) {
  const x = /* @__PURE__ */ Object.create(null), b = u.function_inputs && Object.prototype.hasOwnProperty.call(u.function_inputs, l) ? u.function_inputs[l] : [];
  if (!Array.isArray(b) || b.length > 10) return x;
  for (const g of b)
    typeof g == "string" && /^[a-zA-Z][a-zA-Z0-9_]{0,63}$/.test(g) && Object.prototype.hasOwnProperty.call(m, g) && typeof m[g] == "string" && (x[g] = m[g]);
  return x;
}
function Na(l, u, m) {
  const x = { ...l.default_data || {}, ...l.data || {} };
  if (!m && Array.isArray(l.function_output_fields))
    for (const b of l.function_output_fields)
      typeof b == "string" && b !== "function_state" && /^[a-zA-Z][a-zA-Z0-9_]{0,63}$/.test(b) && delete x[b];
  return { ...x, ...u };
}
async function va(l, u, m, x, b, g = {}) {
  if (!Number.isSafeInteger(u) || u < 1 || !/^[a-zA-Z0-9_-]{1,100}$/.test(m) || !/^[1-9]\d*$/.test(x)) throw new Error("Funkcija nije dostupna.");
  const T = (b || window.location.origin).replace(/\/$/, ""), I = await Vi(l, b), _ = `${T}/api/widget/${encodeURIComponent(l)}/v2/inline-widgets/${u}/functions/${encodeURIComponent(m)}/execute`, A = await fetch(_, { method: "POST", cache: "no-store", headers: { Accept: "application/json", "Content-Type": "application/json", Authorization: `Bearer ${I}` }, body: JSON.stringify({ conversation_id: Number(x), inputs: g }) });
  A.ok || await qi(A, "Funkciju trenutno nije moguće izvršiti.");
  const { data: N } = await A.json();
  if (!N || typeof N != "object" || Array.isArray(N) || Object.keys(N).length > 30 || Object.entries(N).some(([F, K]) => !/^[a-zA-Z][a-zA-Z0-9_]{0,63}$/.test(F) || !["string", "number", "boolean"].includes(typeof K)))
    throw new Error("Neispravan odgovor funkcije.");
  return N;
}
const ka = ".pitaj-product-card{display:flex;flex-direction:column;gap:10px}.pitaj-product-image-wrap{position:relative;width:100%;height:160px;border-radius:var(--pitaj-radius-btn, 8px);overflow:hidden;background:#f8fafc}.pitaj-product-img{width:100%;height:100%;object-fit:cover}.pitaj-carousel-controls{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;align-items:center;justify-content:space-between;padding:0 8px;pointer-events:none}.pitaj-carousel-btn{pointer-events:auto;width:28px;height:28px;border-radius:50%;background:#ffffffe0;border:1px solid rgba(0,0,0,.08);box-shadow:0 1px 4px #0000001f;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:16px;font-weight:700;color:#1e293b}.pitaj-product-info{display:flex;flex-direction:column;gap:4px}.pitaj-product-name{font-size:14.5px;font-weight:600}.pitaj-product-sub{font-size:12px;color:var(--pitaj-muted, #64748b)}.pitaj-product-price{font-size:15px;font-weight:700;color:var(--pitaj-accent, #0f172a);margin-top:2px}.pitaj-cart-items-list{display:flex;flex-direction:column;gap:10px}.pitaj-cart-item-row{display:flex;align-items:center;gap:10px}.pitaj-cart-thumb{width:44px;height:44px;border-radius:var(--pitaj-radius-corner-sm, 6px);object-fit:cover;background:#f1f5f9}.pitaj-cart-details{flex:1;min-width:0}.pitaj-cart-item-name{font-size:13px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pitaj-cart-item-sub{font-size:11.5px;color:var(--pitaj-muted, #64748b)}.pitaj-cart-item-price{font-size:13.5px;font-weight:600}.pitaj-cart-divider{height:1px;background:var(--pitaj-border, #e5e7eb);margin:10px 0}.pitaj-cart-summary{display:flex;justify-content:space-between;align-items:center;font-size:13.5px;font-weight:600;margin-bottom:8px}.pitaj-cart-payment{display:flex;justify-content:space-between;align-items:center;font-size:12px;color:var(--pitaj-muted, #64748b);margin-bottom:12px}.pitaj-cart-card-pill{font-weight:600;color:#1e293b;background:#f1f5f9;padding:3px 8px;border-radius:6px}.chart-widget .pitaj-chart-label{font-size:12px;color:var(--pitaj-muted, #64748b)}.chart-widget .pitaj-chart-big-number{font-size:26px;font-weight:700;color:var(--pitaj-fg, #0f172a);margin:4px 0 16px}.pitaj-bar-chart-container{display:flex;align-items:flex-end;justify-content:space-between;height:110px;padding:6px 4px 0;border-bottom:1px solid var(--pitaj-border, #e2e8f0)}.pitaj-bar-col{display:flex;flex-direction:column;align-items:center;gap:6px;flex:1}.pitaj-bar-track{width:14px;height:85px;background:#f1f5f9;border-radius:4px;display:flex;align-items:flex-end;overflow:hidden}.pitaj-bar-fill{width:100%;background:var(--pitaj-accent, #3b82f6);border-radius:4px 4px 0 0;transition:height .3s ease}.pitaj-bar-day{font-size:10px;color:var(--pitaj-muted, #94a3b8);font-weight:600}.pitaj-classes-list{display:flex;flex-direction:column;gap:10px}.pitaj-class-item{display:flex;align-items:center;gap:10px;padding:8px;border-radius:var(--pitaj-radius-btn, 8px);background:var(--pitaj-surface-subtle, #f8fafc);border:1px solid var(--pitaj-border, #e2e8f0)}.pitaj-class-thumb{width:52px;height:52px;border-radius:var(--pitaj-radius-corner-sm, 6px);object-fit:cover}.pitaj-class-info{flex:1;min-width:0}.pitaj-class-header{display:flex;align-items:center;gap:6px}.pitaj-class-title{font-size:13px;font-weight:600}.pitaj-level-badge{font-size:10px;font-weight:600;padding:1px 6px;border-radius:10px}.pitaj-level-badge.level-green{background:#dcfce7;color:#15803d}.pitaj-level-badge.level-purple{background:#f3e8ff;color:#7e22ce}.pitaj-class-time{font-size:11.5px;font-weight:500;color:var(--pitaj-fg, #1e293b);margin-top:1px}.pitaj-class-instructor{font-size:10.5px;color:var(--pitaj-muted, #64748b)}.pitaj-book-btn{padding:6px 12px;font-size:12px;font-weight:600;background:#16a34a;color:#fff;border:none;border-radius:var(--pitaj-radius-btn, 14px);cursor:pointer;white-space:nowrap}.pitaj-book-btn.is-booked{background:#e2e8f0;color:#475569}.pitaj-hotel-image-wrap{position:relative;width:100%;height:140px;border-radius:var(--pitaj-radius-btn, 8px);overflow:hidden;margin-bottom:10px}.pitaj-hotel-img{width:100%;height:100%;object-fit:cover}.pitaj-hotel-badge-price{position:absolute;top:8px;right:8px;background:#0f172ad9;color:#fff;font-size:12px;font-weight:600;padding:3px 8px;border-radius:6px;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.pitaj-hotel-name{font-size:15px;font-weight:600}.pitaj-hotel-meta{display:flex;justify-content:space-between;align-items:center;font-size:11.5px;color:var(--pitaj-muted, #64748b);margin:4px 0 10px}.pitaj-meta-item{display:inline-flex;align-items:center;gap:4px}.pitaj-meta-icon{color:var(--pitaj-muted, #64748b)}.pitaj-rating{color:#f59e0b;font-weight:600}.pitaj-star-icon{color:#f59e0b}.pitaj-amenities-row{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px}.pitaj-amenity-chip{display:inline-flex;align-items:center;gap:5px;font-size:11px;font-weight:500;padding:3px 8px;background:var(--pitaj-surface-subtle, #f1f5f9);border:1px solid var(--pitaj-border, #e2e8f0);border-radius:6px;color:var(--pitaj-fg, #334155)}.pitaj-amenity-icon{flex-shrink:0;color:var(--pitaj-muted, #64748b)}.pitaj-inline-widget-card.weather-widget{background:linear-gradient(135deg,#2563eb,#3b82f6,#60a5fa);color:#fff;border:none;padding:16px}.pitaj-weather-top{display:flex;align-items:center;justify-content:space-between}.pitaj-weather-svg{color:#fef08a}.pitaj-weather-temp{font-size:32px;font-weight:700}.pitaj-weather-city{font-size:16px;font-weight:600;margin-top:6px}.pitaj-weather-cond{font-size:13px;font-weight:500;opacity:.9}.pitaj-weather-desc{font-size:11.5px;opacity:.82;margin-top:6px;line-height:1.4}.pitaj-iframe-container{position:relative;width:100%;border-radius:8px;overflow:hidden;background:#f8fafc}.pitaj-iframe-frame{width:100%;height:100%;border:none}.pitaj-iframe-loading{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;background:#ffffffb3}.pitaj-iframe-open-btn{font-size:14px;text-decoration:none;color:var(--pitaj-muted, #64748b);padding:2px 6px;border-radius:4px}.pitaj-iframe-open-btn:hover{background:var(--pitaj-surface-subtle, #f1f5f9);color:var(--pitaj-fg, #0f172a)}.pitaj-booking-card{padding:12px;border-radius:12px;background:var(--pitaj-surface, #ffffff);border:1px solid var(--pitaj-border, #e2e8f0)}.pitaj-booking-header{display:flex;align-items:center;gap:10px;margin-bottom:6px}.pitaj-booking-brand-icon{width:36px;height:36px;border-radius:8px;background:var(--pitaj-surface-subtle, #f1f5f9);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;color:var(--pitaj-fg, #0f172a);flex-shrink:0;border:1px solid var(--pitaj-border, #e2e8f0)}.pitaj-cal-logo{font-weight:800;font-size:12px;letter-spacing:-.5px;color:#000}.pitaj-calendly-logo{font-weight:800;font-size:15px;color:#006bff}.pitaj-booking-info{flex:1;min-width:0}.pitaj-booking-title{font-size:13px;font-weight:600;color:var(--pitaj-fg, #0f172a);line-height:1.25;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pitaj-booking-meta{display:flex;align-items:center;gap:5px;margin-top:3px}.pitaj-booking-tag{font-size:10.5px;font-weight:500;color:var(--pitaj-muted, #64748b);background:var(--pitaj-surface-subtle, #f8fafc);padding:1px 6px;border-radius:4px;border:1px solid var(--pitaj-border, #e2e8f0)}.pitaj-booking-desc{font-size:11.5px;color:var(--pitaj-muted, #64748b);margin-bottom:8px;line-height:1.4}.pitaj-booking-open-btn{font-size:14px;text-decoration:none;color:var(--pitaj-muted, #64748b);padding:3px 6px;border-radius:4px;transition:all .15s ease;display:flex;align-items:center;justify-content:center}.pitaj-booking-open-btn:hover{background:var(--pitaj-surface-subtle, #f1f5f9);color:var(--pitaj-fg, #0f172a)}.pitaj-booking-frame-wrap{position:relative;width:100%;border-radius:8px;overflow:hidden;background:#f8fafc;border:1px solid var(--pitaj-border, #e2e8f0)}.pitaj-booking-frame{width:100%;height:100%;border:none}.pitaj-booking-loading{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;background:#ffffffd9;z-index:2}.pitaj-api-widget{background:var(--pitaj-surface, #ffffff);border:1px solid var(--pitaj-border, #e2e8f0);border-radius:12px;padding:12px 14px;font-family:inherit;box-shadow:0 1px 3px #0000000d;margin:4px 0;max-width:100%}.pitaj-api-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid var(--pitaj-border, #e2e8f0)}.pitaj-api-title-row{display:flex;align-items:center;gap:6px}.pitaj-api-icon{font-size:14px}.pitaj-api-title{font-size:13px;font-weight:600;color:var(--pitaj-fg, #0f172a)}.pitaj-api-badge{font-size:10px;font-weight:600;color:#059669;background:#ecfdf5;border:1px solid #a7f3d0;padding:1px 7px;border-radius:9999px;text-transform:uppercase;letter-spacing:.03em}.pitaj-api-body{display:flex;flex-direction:column;gap:6px}.pitaj-api-row{display:flex;justify-content:space-between;align-items:center;font-size:12px;gap:8px;padding:3px 0;border-bottom:1px dashed var(--pitaj-border, #f1f5f9)}.pitaj-api-row:last-child{border-bottom:none}.pitaj-api-key{color:var(--pitaj-muted, #64748b);font-weight:500;text-transform:capitalize}.pitaj-api-val{color:var(--pitaj-fg, #0f172a);font-weight:600;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;word-break:break-all;text-align:right}.pitaj-api-empty{font-size:12px;color:var(--pitaj-muted, #64748b);font-style:italic;padding:4px 0}.pitaj-order-card{background:var(--pitaj-surface, #ffffff);border:1px solid var(--pitaj-border, #e2e8f0);border-radius:12px;padding:12px 14px;font-family:inherit;box-shadow:0 1px 3px #0000000d;margin:4px 0;max-width:100%}.pitaj-order-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid var(--pitaj-border, #e2e8f0)}.pitaj-order-id-group{display:flex;align-items:center;gap:6px}.pitaj-order-icon{font-size:15px}.pitaj-order-number{font-size:13.5px;font-weight:700;color:var(--pitaj-fg, #0f172a)}.pitaj-order-status-badge{font-size:11px;font-weight:600;padding:2px 8px;border-radius:9999px}.pitaj-order-badge-success{color:#059669;background:#ecfdf5;border:1px solid #a7f3d0}.pitaj-order-badge-info{color:#0284c7;background:#f0f9ff;border:1px solid #bae6fd}.pitaj-order-badge-pending{color:#d97706;background:#fffbeb;border:1px solid #fde68a}.pitaj-order-details{display:flex;flex-direction:column;gap:8px}.pitaj-order-tracking-box{background:var(--pitaj-surface-subtle, #f8fafc);border:1px solid var(--pitaj-border, #e2e8f0);border-radius:8px;padding:8px 10px}.pitaj-order-tracking-title{font-size:11px;color:var(--pitaj-muted, #64748b);margin-bottom:3px}.pitaj-order-tracking-val{display:flex;align-items:center;justify-content:space-between;font-size:12px;color:var(--pitaj-fg, #0f172a)}.pitaj-order-tracking-link{font-size:11.5px;font-weight:600;color:#2563eb;text-decoration:none;padding:2px 6px;background:#eff6ff;border-radius:4px}.pitaj-order-notice{font-size:11.5px;color:var(--pitaj-muted, #64748b);font-style:italic;padding:4px 0}.pitaj-order-meta-grid{display:flex;flex-direction:column;gap:4px;padding-top:4px}.pitaj-order-meta-item{display:flex;justify-content:space-between;font-size:11.5px}.pitaj-order-meta-label{color:var(--pitaj-muted, #64748b)}.pitaj-order-meta-val{color:var(--pitaj-fg, #0f172a);font-weight:500;text-align:right}";
var Pt = {}, $i;
function La() {
  if ($i) return Pt;
  $i = 1, Object.defineProperty(Pt, "__esModule", {
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
  class u {
    constructor(t, e, s) {
      this.line = void 0, this.column = void 0, this.index = void 0, this.line = t, this.column = e, this.index = s;
    }
  }
  class m {
    constructor(t, e) {
      this.start = void 0, this.end = void 0, this.filename = void 0, this.identifierName = void 0, this.start = t, this.end = e;
    }
  }
  function x(a, t) {
    const {
      line: e,
      column: s,
      index: i
    } = a;
    return new u(e, s + t, i + t);
  }
  const b = "BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED";
  var g = {
    ImportMetaOutsideModule: {
      message: `import.meta may appear only with 'sourceType: "module"'`,
      code: b
    },
    ImportOutsideModule: {
      message: `'import' and 'export' may appear only with 'sourceType: "module"'`,
      code: b
    }
  };
  const T = {
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
  }, I = (a) => a.type === "UpdateExpression" ? T.UpdateExpression[`${a.prefix}`] : T[a.type];
  var _ = {
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
    }) => `Invalid left-hand side in ${I(a)}.`,
    InvalidLhsBinding: ({
      ancestor: a
    }) => `Binding invalid left-hand side in ${I(a)}.`,
    InvalidLhsOptionalChaining: ({
      ancestor: a
    }) => `Invalid optional chaining in the left-hand side of ${I(a)}.`,
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
  }, A = {
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
  const F = /* @__PURE__ */ new Set(["ArrowFunctionExpression", "AssignmentExpression", "ConditionalExpression", "YieldExpression"]);
  var K = Object.assign({
    PipeBodyIsTighter: "Unexpected yield after pipeline body; any yield expression acting as Hack-style pipe body must be parenthesized due to its loose operator precedence.",
    PipeTopicRequiresHackPipes: 'Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.',
    PipeTopicUnbound: "Topic reference is unbound; it must be inside a pipe body.",
    PipeTopicUnconfiguredToken: ({
      token: a
    }) => `Invalid topic token ${a}. In order to use ${a} as a topic reference, the pipelineOperator plugin must be configured with { "proposal": "hack", "topicToken": "${a}" }.`,
    PipeTopicUnused: "Hack-style pipe body does not contain a topic reference; Hack-style pipes must use topic at least once.",
    PipeUnparenthesizedBody: ({
      type: a
    }) => `Hack-style pipe body cannot be an unparenthesized ${I({
      type: a
    })}; please wrap it in parentheses.`
  }, {
    PipelineBodyNoArrow: 'Unexpected arrow "=>" after pipeline body; arrow function in pipeline body must be parenthesized.',
    PipelineBodySequenceExpression: "Pipeline body may not be a comma-separated sequence expression.",
    PipelineHeadSequenceExpression: "Pipeline head should not be a comma-separated sequence expression.",
    PipelineTopicUnused: "Pipeline is in topic style but does not use topic reference.",
    PrimaryTopicNotAllowed: "Topic reference was used in a lexical context without topic binding.",
    PrimaryTopicRequiresSmartPipeline: 'Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.'
  }), ne = {
    UnsupportedBind: "Binding should be performed on object property.",
    UnsupportedBindRHS: "The right-hand side of binding can not be super or import."
  };
  const ce = ["message"];
  function fe(a, t, e) {
    Object.defineProperty(a, t, {
      enumerable: !1,
      configurable: !0,
      value: e
    });
  }
  function Ce({
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
    return r[e] && (e = r[e]), function n(o, c) {
      const p = new SyntaxError();
      return p.code = t, p.reasonCode = e, p.loc = o, p.pos = o.index, p.syntaxPlugin = s, i && (p.missingPlugin = c.missingPlugin), fe(p, "clone", function(P = {}) {
        var S;
        const {
          line: E,
          column: k,
          index: W
        } = (S = P.loc) != null ? S : o;
        return n(new u(E, k, W), Object.assign({}, c, P.details));
      }), fe(p, "details", c), Object.defineProperty(p, "message", {
        configurable: !0,
        get() {
          const f = `${a(c)} (${o.line}:${o.column})`;
          return this.message = f, f;
        },
        set(f) {
          Object.defineProperty(this, "message", {
            value: f,
            writable: !0
          });
        }
      }), p;
    };
  }
  function ee(a, t) {
    if (Array.isArray(a))
      return (s) => ee(s, a[0]);
    const e = {};
    for (const s of Object.keys(a)) {
      const i = a[s], r = typeof i == "string" ? {
        message: () => i
      } : typeof i == "function" ? {
        message: i
      } : i, {
        message: n
      } = r, o = l(r, ce), c = typeof n == "string" ? () => n : n;
      e[s] = Ce(Object.assign({
        code: "BABEL_PARSER_SYNTAX_ERROR",
        reasonCode: s,
        toMessage: c
      }, t ? {
        syntaxPlugin: t
      } : {}, o));
    }
    return e;
  }
  const d = Object.assign({}, ee(g), ee(_), ee(A), ee(N), ee`pipelineOperator`(K), ee`functionBind`(ne));
  function X() {
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
  function $(a) {
    const t = X();
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
    defineProperty: Ie
  } = Object, Be = (a, t) => {
    a && Ie(a, t, {
      enumerable: !1,
      value: a[t]
    });
  };
  function Ne(a) {
    return Be(a.loc.start, "index"), Be(a.loc.end, "index"), a;
  }
  var Ue = (a) => class extends a {
    parse() {
      const e = Ne(super.parse());
      return this.optionFlags & 256 && (e.tokens = e.tokens.map(Ne)), e;
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
        raw: o,
        value: c
      } = e, p = Object.create(e.constructor.prototype);
      return p.type = "Literal", p.start = s, p.end = i, p.loc = r, p.range = n, p.raw = o, p.value = c, p;
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
      const o = e.directives.map((c) => this.directiveToStmt(c));
      e.body = o.concat(e.body), delete e.directives;
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
    parseMethod(e, s, i, r, n, o, c = !1) {
      let p = this.startNode();
      p.kind = e.kind, p = super.parseMethod(p, s, i, r, n, o, c), delete p.kind;
      const {
        typeParameters: f
      } = e;
      f && (delete e.typeParameters, p.typeParameters = f, this.resetStartLocationFromNode(p, f));
      const P = this.castNodeTo(p, "FunctionExpression");
      return e.value = P, o === "ClassPrivateMethod" && (e.computed = !1), o === "ObjectMethod" ? (e.kind === "method" && (e.kind = "init"), e.shorthand = !1, this.finishNode(e, "Property")) : this.finishNode(e, "MethodDefinition");
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
      e.type === "Property" && (e.kind === "get" || e.kind === "set") ? this.raise(d.PatternHasAccessor, e.key) : e.type === "Property" && e.method ? this.raise(d.PatternHasMethod, e.key) : super.toAssignableObjectExpressionProp(e, s, i);
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
              declaration: o
            } = r;
            (o == null ? void 0 : o.type) === "ClassDeclaration" && ((n = o.decorators) == null ? void 0 : n.length) > 0 && o.start === r.start && this.resetStartLocation(r, i);
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
      const o = super.parseMember(e, s, i, r, n);
      return o.type === "OptionalMemberExpression" ? this.castNodeTo(o, "MemberExpression") : o.optional = !1, o;
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
      return Ne(super.finishNodeAt(e, s, i));
    }
    finishNode(e, s) {
      const i = super.finishNode(e, s);
      return this.fillOptionalPropertiesForTSESLint(i), i;
    }
    resetStartLocation(e, s) {
      super.resetStartLocation(e, s), Ne(e);
    }
    resetEndLocation(e, s = this.state.lastTokEndLoc) {
      super.resetEndLocation(e, s), Ne(e);
    }
  };
  class me {
    constructor(t, e) {
      this.token = void 0, this.preserveSpace = void 0, this.token = t, this.preserveSpace = !!e;
    }
  }
  const B = {
    brace: new me("{"),
    j_oTag: new me("<tag"),
    j_cTag: new me("</tag"),
    j_expr: new me("<tag>...</tag>", !0)
  };
  B.template = new me("`", !0);
  const D = !0, C = !0, ve = !0, ze = !0, ke = !0, Ze = !0;
  class We {
    constructor(t, e = {}) {
      this.label = void 0, this.keyword = void 0, this.beforeExpr = void 0, this.startsExpr = void 0, this.rightAssociative = void 0, this.isLoop = void 0, this.isAssign = void 0, this.prefix = void 0, this.postfix = void 0, this.binop = void 0, this.label = t, this.keyword = e.keyword, this.beforeExpr = !!e.beforeExpr, this.startsExpr = !!e.startsExpr, this.rightAssociative = !!e.rightAssociative, this.isLoop = !!e.isLoop, this.isAssign = !!e.isAssign, this.prefix = !!e.prefix, this.postfix = !!e.postfix, this.binop = e.binop != null ? e.binop : null, this.updateContext = null;
    }
  }
  const Ke = /* @__PURE__ */ new Map();
  function H(a, t = {}) {
    t.keyword = a;
    const e = L(a, t);
    return Ke.set(a, e), e;
  }
  function oe(a, t) {
    return L(a, {
      beforeExpr: D,
      binop: t
    });
  }
  let Y = -1;
  const ge = [], ie = [], $e = [], J = [], G = [], De = [];
  function L(a, t = {}) {
    var e, s, i, r;
    return ++Y, ie.push(a), $e.push((e = t.binop) != null ? e : -1), J.push((s = t.beforeExpr) != null ? s : !1), G.push((i = t.startsExpr) != null ? i : !1), De.push((r = t.prefix) != null ? r : !1), ge.push(new We(a, t)), Y;
  }
  function U(a, t = {}) {
    var e, s, i, r;
    return ++Y, Ke.set(a, Y), ie.push(a), $e.push((e = t.binop) != null ? e : -1), J.push((s = t.beforeExpr) != null ? s : !1), G.push((i = t.startsExpr) != null ? i : !1), De.push((r = t.prefix) != null ? r : !1), ge.push(new We("name", t)), Y;
  }
  const re = {
    bracketL: L("[", {
      beforeExpr: D,
      startsExpr: C
    }),
    bracketHashL: L("#[", {
      beforeExpr: D,
      startsExpr: C
    }),
    bracketBarL: L("[|", {
      beforeExpr: D,
      startsExpr: C
    }),
    bracketR: L("]"),
    bracketBarR: L("|]"),
    braceL: L("{", {
      beforeExpr: D,
      startsExpr: C
    }),
    braceBarL: L("{|", {
      beforeExpr: D,
      startsExpr: C
    }),
    braceHashL: L("#{", {
      beforeExpr: D,
      startsExpr: C
    }),
    braceR: L("}"),
    braceBarR: L("|}"),
    parenL: L("(", {
      beforeExpr: D,
      startsExpr: C
    }),
    parenR: L(")"),
    comma: L(",", {
      beforeExpr: D
    }),
    semi: L(";", {
      beforeExpr: D
    }),
    colon: L(":", {
      beforeExpr: D
    }),
    doubleColon: L("::", {
      beforeExpr: D
    }),
    dot: L("."),
    question: L("?", {
      beforeExpr: D
    }),
    questionDot: L("?."),
    arrow: L("=>", {
      beforeExpr: D
    }),
    template: L("template"),
    ellipsis: L("...", {
      beforeExpr: D
    }),
    backQuote: L("`", {
      startsExpr: C
    }),
    dollarBraceL: L("${", {
      beforeExpr: D,
      startsExpr: C
    }),
    templateTail: L("...`", {
      startsExpr: C
    }),
    templateNonTail: L("...${", {
      beforeExpr: D,
      startsExpr: C
    }),
    at: L("@"),
    hash: L("#", {
      startsExpr: C
    }),
    interpreterDirective: L("#!..."),
    eq: L("=", {
      beforeExpr: D,
      isAssign: ze
    }),
    assign: L("_=", {
      beforeExpr: D,
      isAssign: ze
    }),
    slashAssign: L("_=", {
      beforeExpr: D,
      isAssign: ze
    }),
    xorAssign: L("_=", {
      beforeExpr: D,
      isAssign: ze
    }),
    moduloAssign: L("_=", {
      beforeExpr: D,
      isAssign: ze
    }),
    incDec: L("++/--", {
      prefix: ke,
      postfix: Ze,
      startsExpr: C
    }),
    bang: L("!", {
      beforeExpr: D,
      prefix: ke,
      startsExpr: C
    }),
    tilde: L("~", {
      beforeExpr: D,
      prefix: ke,
      startsExpr: C
    }),
    doubleCaret: L("^^", {
      startsExpr: C
    }),
    doubleAt: L("@@", {
      startsExpr: C
    }),
    pipeline: oe("|>", 0),
    nullishCoalescing: oe("??", 1),
    logicalOR: oe("||", 1),
    logicalAND: oe("&&", 2),
    bitwiseOR: oe("|", 3),
    bitwiseXOR: oe("^", 4),
    bitwiseAND: oe("&", 5),
    equality: oe("==/!=/===/!==", 6),
    lt: oe("</>/<=/>=", 7),
    gt: oe("</>/<=/>=", 7),
    relational: oe("</>/<=/>=", 7),
    bitShift: oe("<</>>/>>>", 8),
    bitShiftL: oe("<</>>/>>>", 8),
    bitShiftR: oe("<</>>/>>>", 8),
    plusMin: L("+/-", {
      beforeExpr: D,
      binop: 9,
      prefix: ke,
      startsExpr: C
    }),
    modulo: L("%", {
      binop: 10,
      startsExpr: C
    }),
    star: L("*", {
      binop: 10
    }),
    slash: oe("/", 10),
    exponent: L("**", {
      beforeExpr: D,
      binop: 11,
      rightAssociative: !0
    }),
    _in: H("in", {
      beforeExpr: D,
      binop: 7
    }),
    _instanceof: H("instanceof", {
      beforeExpr: D,
      binop: 7
    }),
    _break: H("break"),
    _case: H("case", {
      beforeExpr: D
    }),
    _catch: H("catch"),
    _continue: H("continue"),
    _debugger: H("debugger"),
    _default: H("default", {
      beforeExpr: D
    }),
    _else: H("else", {
      beforeExpr: D
    }),
    _finally: H("finally"),
    _function: H("function", {
      startsExpr: C
    }),
    _if: H("if"),
    _return: H("return", {
      beforeExpr: D
    }),
    _switch: H("switch"),
    _throw: H("throw", {
      beforeExpr: D,
      prefix: ke,
      startsExpr: C
    }),
    _try: H("try"),
    _var: H("var"),
    _const: H("const"),
    _with: H("with"),
    _new: H("new", {
      beforeExpr: D,
      startsExpr: C
    }),
    _this: H("this", {
      startsExpr: C
    }),
    _super: H("super", {
      startsExpr: C
    }),
    _class: H("class", {
      startsExpr: C
    }),
    _extends: H("extends", {
      beforeExpr: D
    }),
    _export: H("export"),
    _import: H("import", {
      startsExpr: C
    }),
    _null: H("null", {
      startsExpr: C
    }),
    _true: H("true", {
      startsExpr: C
    }),
    _false: H("false", {
      startsExpr: C
    }),
    _typeof: H("typeof", {
      beforeExpr: D,
      prefix: ke,
      startsExpr: C
    }),
    _void: H("void", {
      beforeExpr: D,
      prefix: ke,
      startsExpr: C
    }),
    _delete: H("delete", {
      beforeExpr: D,
      prefix: ke,
      startsExpr: C
    }),
    _do: H("do", {
      isLoop: ve,
      beforeExpr: D
    }),
    _for: H("for", {
      isLoop: ve
    }),
    _while: H("while", {
      isLoop: ve
    }),
    _as: U("as", {
      startsExpr: C
    }),
    _assert: U("assert", {
      startsExpr: C
    }),
    _async: U("async", {
      startsExpr: C
    }),
    _await: U("await", {
      startsExpr: C
    }),
    _defer: U("defer", {
      startsExpr: C
    }),
    _from: U("from", {
      startsExpr: C
    }),
    _get: U("get", {
      startsExpr: C
    }),
    _let: U("let", {
      startsExpr: C
    }),
    _meta: U("meta", {
      startsExpr: C
    }),
    _of: U("of", {
      startsExpr: C
    }),
    _sent: U("sent", {
      startsExpr: C
    }),
    _set: U("set", {
      startsExpr: C
    }),
    _source: U("source", {
      startsExpr: C
    }),
    _static: U("static", {
      startsExpr: C
    }),
    _using: U("using", {
      startsExpr: C
    }),
    _yield: U("yield", {
      startsExpr: C
    }),
    _asserts: U("asserts", {
      startsExpr: C
    }),
    _checks: U("checks", {
      startsExpr: C
    }),
    _exports: U("exports", {
      startsExpr: C
    }),
    _global: U("global", {
      startsExpr: C
    }),
    _implements: U("implements", {
      startsExpr: C
    }),
    _intrinsic: U("intrinsic", {
      startsExpr: C
    }),
    _infer: U("infer", {
      startsExpr: C
    }),
    _is: U("is", {
      startsExpr: C
    }),
    _mixins: U("mixins", {
      startsExpr: C
    }),
    _proto: U("proto", {
      startsExpr: C
    }),
    _require: U("require", {
      startsExpr: C
    }),
    _satisfies: U("satisfies", {
      startsExpr: C
    }),
    _keyof: U("keyof", {
      startsExpr: C
    }),
    _readonly: U("readonly", {
      startsExpr: C
    }),
    _unique: U("unique", {
      startsExpr: C
    }),
    _abstract: U("abstract", {
      startsExpr: C
    }),
    _declare: U("declare", {
      startsExpr: C
    }),
    _enum: U("enum", {
      startsExpr: C
    }),
    _module: U("module", {
      startsExpr: C
    }),
    _namespace: U("namespace", {
      startsExpr: C
    }),
    _interface: U("interface", {
      startsExpr: C
    }),
    _type: U("type", {
      startsExpr: C
    }),
    _opaque: U("opaque", {
      startsExpr: C
    }),
    name: L("name", {
      startsExpr: C
    }),
    placeholder: L("%%", {
      startsExpr: C
    }),
    string: L("string", {
      startsExpr: C
    }),
    num: L("num", {
      startsExpr: C
    }),
    bigint: L("bigint", {
      startsExpr: C
    }),
    decimal: L("decimal", {
      startsExpr: C
    }),
    regexp: L("regexp", {
      startsExpr: C
    }),
    privateName: L("#name", {
      startsExpr: C
    }),
    eof: L("eof"),
    jsxName: L("jsxName"),
    jsxText: L("jsxText", {
      beforeExpr: D
    }),
    jsxTagStart: L("jsxTagStart", {
      startsExpr: C
    }),
    jsxTagEnd: L("jsxTagEnd")
  };
  function R(a) {
    return a >= 93 && a <= 133;
  }
  function te(a) {
    return a <= 92;
  }
  function q(a) {
    return a >= 58 && a <= 133;
  }
  function Pe(a) {
    return a >= 58 && a <= 137;
  }
  function nt(a) {
    return J[a];
  }
  function Oe(a) {
    return G[a];
  }
  function Qe(a) {
    return a >= 29 && a <= 33;
  }
  function ot(a) {
    return a >= 129 && a <= 131;
  }
  function yt(a) {
    return a >= 90 && a <= 92;
  }
  function xt(a) {
    return a >= 58 && a <= 92;
  }
  function Mt(a) {
    return a >= 39 && a <= 59;
  }
  function os(a) {
    return a === 34;
  }
  function Tt(a) {
    return De[a];
  }
  function lt(a) {
    return a >= 121 && a <= 123;
  }
  function et(a) {
    return a >= 124 && a <= 130;
  }
  function Te(a) {
    return ie[a];
  }
  function ct(a) {
    return $e[a];
  }
  function _t(a) {
    return a === 57;
  }
  function ht(a) {
    return a >= 24 && a <= 25;
  }
  function Le(a) {
    return ge[a];
  }
  ge[8].updateContext = (a) => {
    a.pop();
  }, ge[5].updateContext = ge[7].updateContext = ge[23].updateContext = (a) => {
    a.push(B.brace);
  }, ge[22].updateContext = (a) => {
    a[a.length - 1] === B.template ? a.pop() : a.push(B.template);
  }, ge[143].updateContext = (a) => {
    a.push(B.j_expr, B.j_oTag);
  };
  let gt = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-࢏ࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚ౜ౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽ೜-ೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲊᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-Ƛ꟱-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", ut = "·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࢗ-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-᫝᫠-᫫ᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‌‍‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯・꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿･";
  const bt = new RegExp("[" + gt + "]"), He = new RegExp("[" + gt + ut + "]");
  gt = ut = null;
  const Ge = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 4, 51, 13, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 7, 25, 39, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 39, 27, 10, 22, 251, 41, 7, 1, 17, 5, 57, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 31, 9, 2, 0, 3, 0, 2, 37, 2, 0, 26, 0, 2, 0, 45, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 200, 32, 32, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 24, 43, 261, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 26, 3994, 6, 582, 6842, 29, 1763, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 433, 44, 212, 63, 33, 24, 3, 24, 45, 74, 6, 0, 67, 12, 65, 1, 2, 0, 15, 4, 10, 7381, 42, 31, 98, 114, 8702, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 229, 29, 3, 0, 208, 30, 2, 2, 2, 1, 2, 6, 3, 4, 10, 1, 225, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4381, 3, 5773, 3, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 8489], At = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 7, 9, 32, 4, 318, 1, 78, 5, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 68, 8, 2, 0, 3, 0, 2, 3, 2, 4, 2, 0, 15, 1, 83, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 7, 19, 58, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 199, 7, 137, 9, 54, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 55, 9, 266, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 10, 5350, 0, 7, 14, 11465, 27, 2343, 9, 87, 9, 39, 4, 60, 6, 26, 9, 535, 9, 470, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4178, 9, 519, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 245, 1, 2, 9, 233, 0, 3, 0, 8, 1, 6, 0, 475, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
  function pt(a, t) {
    let e = 65536;
    for (let s = 0, i = t.length; s < i; s += 2) {
      if (e += t[s], e > a) return !1;
      if (e += t[s + 1], e >= a) return !0;
    }
    return !1;
  }
  function je(a) {
    return a < 65 ? a === 36 : a <= 90 ? !0 : a < 97 ? a === 95 : a <= 122 ? !0 : a <= 65535 ? a >= 170 && bt.test(String.fromCharCode(a)) : pt(a, Ge);
  }
  function Me(a) {
    return a < 48 ? a === 36 : a < 58 ? !0 : a < 65 ? !1 : a <= 90 ? !0 : a < 97 ? a === 95 : a <= 122 ? !0 : a <= 65535 ? a >= 170 && He.test(String.fromCharCode(a)) : pt(a, Ge) || pt(a, At);
  }
  const tt = {
    keyword: ["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"],
    strict: ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"],
    strictBind: ["eval", "arguments"]
  }, ls = new Set(tt.keyword), dt = new Set(tt.strict), cs = new Set(tt.strictBind);
  function Ft(a, t) {
    return t && a === "await" || a === "enum";
  }
  function he(a, t) {
    return Ft(a, t) || dt.has(a);
  }
  function Je(a) {
    return cs.has(a);
  }
  function Rt(a, t) {
    return he(a, t) || Je(a);
  }
  function Bt(a) {
    return ls.has(a);
  }
  function wt(a, t, e) {
    return a === 64 && t === 64 && je(e);
  }
  const Ut = /* @__PURE__ */ new Set(["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete", "implements", "interface", "let", "package", "private", "protected", "public", "static", "yield", "eval", "arguments", "enum", "await"]);
  function zt(a) {
    return Ut.has(a);
  }
  class St {
    constructor(t) {
      this.flags = 0, this.names = /* @__PURE__ */ new Map(), this.firstLexicalName = "", this.flags = t;
    }
  }
  class Ee {
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
      return new St(t);
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
      this.isRedeclaredInScope(t, e, s) && this.parser.raise(d.VarRedeclaration, i, {
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
  class st extends St {
    constructor(...t) {
      super(...t), this.declareFunctions = /* @__PURE__ */ new Set();
    }
  }
  class $t extends Ee {
    createScope(t) {
      return new st(t);
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
  const Ht = /* @__PURE__ */ new Set(["_", "any", "bool", "boolean", "empty", "extends", "false", "interface", "mixed", "null", "number", "static", "string", "true", "typeof", "void"]), j = ee`flow`({
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
  function Vt(a) {
    return a.type === "DeclareExportAllDeclaration" || a.type === "DeclareExportDeclaration" && (!a.declaration || a.declaration.type !== "TypeAlias" && a.declaration.type !== "InterfaceDeclaration");
  }
  function _e(a) {
    return a.importKind === "type" || a.importKind === "typeof";
  }
  const qt = {
    const: "declare export var",
    let: "declare export var",
    type: "export type",
    interface: "export interface"
  };
  function Wt(a, t) {
    const e = [], s = [];
    for (let i = 0; i < a.length; i++)
      (t(a[i], i, a) ? e : s).push(a[i]);
    return [e, s];
  }
  const Kt = /\*?\s*@((?:no)?flow)\b/;
  var Gt = (a) => class extends a {
    constructor(...e) {
      super(...e), this.flowPragma = void 0;
    }
    getScopeHandler() {
      return $t;
    }
    shouldParseTypes() {
      return this.getPluginOption("flow", "all") || this.flowPragma === "flow";
    }
    finishToken(e, s) {
      e !== 134 && e !== 13 && e !== 28 && this.flowPragma === void 0 && (this.flowPragma = null), super.finishToken(e, s);
    }
    addComment(e) {
      if (this.flowPragma === void 0) {
        const s = Kt.exec(e.value);
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
      return this.next(), this.expectContextual(110), this.state.lastTokStartLoc.index > s.index + 1 && this.raise(j.UnexpectedSpaceBetweenModuloChecks, s), this.eat(10) ? (e.value = super.parseExpression(), this.expect(11), this.finishNode(e, "DeclaredPredicate")) : this.finishNode(e, "InferredPredicate");
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
        return this.match(16) ? this.flowParseDeclareModuleExports(e) : (s && this.raise(j.NestedDeclareModule, this.state.lastTokStartLoc), this.flowParseDeclareModule(e));
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
        const o = this.startNode();
        this.match(83) ? (this.next(), !this.isContextual(130) && !this.match(87) && this.raise(j.InvalidNonTypeImportInDeclareModule, this.state.lastTokStartLoc), i.push(super.parseImport(o))) : (this.expectContextual(125, j.UnsupportedStatementInDeclareModule), i.push(this.flowParseDeclare(o, !0)));
      }
      this.scope.exit(), this.expect(8), this.finishNode(s, "BlockStatement");
      let r = null, n = !1;
      return i.forEach((o) => {
        Vt(o) ? (r === "CommonJS" && this.raise(j.AmbiguousDeclareModuleKind, o), r = "ES") : o.type === "DeclareModuleExports" && (n && this.raise(j.DuplicateDeclareModuleExports, o), r === "ES" && this.raise(j.AmbiguousDeclareModuleKind, o), r = "CommonJS", n = !0);
      }), e.kind = r || "CommonJS", this.finishNode(e, "DeclareModule");
    }
    flowParseDeclareExportDeclaration(e, s) {
      if (this.expect(82), this.eat(65))
        return this.match(68) || this.match(80) ? e.declaration = this.flowParseDeclare(this.startNode()) : (e.declaration = this.flowParseType(), this.semicolon()), e.default = !0, this.finishNode(e, "DeclareExportDeclaration");
      if (this.match(75) || this.isLet() || (this.isContextual(130) || this.isContextual(129)) && !s) {
        const i = this.state.value;
        throw this.raise(j.UnsupportedDeclareExportKind, this.state.startLoc, {
          unsupportedExportKind: i,
          suggestion: qt[i]
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
      e === "_" && this.raise(j.UnexpectedReservedUnderscore, this.state.startLoc);
    }
    checkReservedType(e, s, i) {
      Ht.has(e) && this.raise(i ? j.AssignReservedType : j.UnexpectedReservedType, s, {
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
      return i.name = this.flowParseRestrictedIdentifierName(), i.variance = r, i.bound = this.flowParseTypeParameterBound(), this.match(29) ? (this.eat(29), i.default = this.flowParseType()) : e && this.raise(j.MissingTypeParamDefault, s), this.finishNode(i, "TypeParameter");
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
      if (this.curContext() !== B.brace) {
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
      }), this.state.inType = s, !this.state.inType && this.curContext() === B.brace && this.reScan_lt_gt(), this.expect(48), this.finishNode(e, "TypeParameterInstantiation");
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
      const o = this.state.inType;
      this.state.inType = !0;
      const c = this.startNode();
      c.callProperties = [], c.properties = [], c.indexers = [], c.internalSlots = [];
      let p, f, P = !1;
      for (s && this.match(6) ? (this.expect(6), p = 9, f = !0) : (this.expect(5), p = 8, f = !1), c.exact = f; !this.match(p); ) {
        let E = !1, k = null, W = null;
        const se = this.startNode();
        if (r && this.isContextual(118)) {
          const Q = this.lookahead();
          Q.type !== 14 && Q.type !== 17 && (this.next(), k = this.state.startLoc, e = !1);
        }
        if (e && this.isContextual(106)) {
          const Q = this.lookahead();
          Q.type !== 14 && Q.type !== 17 && (this.next(), E = !0);
        }
        const z = this.flowParseVariance();
        if (this.eat(0))
          k != null && this.unexpected(k), this.eat(0) ? (z && this.unexpected(z.loc.start), c.internalSlots.push(this.flowParseObjectTypeInternalSlot(se, E))) : c.indexers.push(this.flowParseObjectTypeIndexer(se, E, z));
        else if (this.match(10) || this.match(47))
          k != null && this.unexpected(k), z && this.unexpected(z.loc.start), c.callProperties.push(this.flowParseObjectTypeCallProperty(se, E));
        else {
          let Q = "init";
          if (this.isContextual(99) || this.isContextual(104)) {
            const rt = this.lookahead();
            Pe(rt.type) && (Q = this.state.value, this.next());
          }
          const ft = this.flowParseObjectTypeProperty(se, E, k, z, Q, i, n ?? !f);
          ft === null ? (P = !0, W = this.state.lastTokStartLoc) : c.properties.push(ft);
        }
        this.flowObjectTypeSemicolon(), W && !this.match(8) && !this.match(9) && this.raise(j.UnexpectedExplicitInexactInObject, W);
      }
      this.expect(p), i && (c.inexact = P);
      const S = this.finishNode(c, "ObjectTypeAnnotation");
      return this.state.inType = o, S;
    }
    flowParseObjectTypeProperty(e, s, i, r, n, o, c) {
      if (this.eat(21))
        return this.match(12) || this.match(13) || this.match(8) || this.match(9) ? (o ? c || this.raise(j.InexactInsideExact, this.state.lastTokStartLoc) : this.raise(j.InexactInsideNonObject, this.state.lastTokStartLoc), r && this.raise(j.InexactVariance, r), null) : (o || this.raise(j.UnexpectedSpreadType, this.state.lastTokStartLoc), i != null && this.unexpected(i), r && this.raise(j.SpreadVariance, r), e.argument = this.flowParseType(), this.finishNode(e, "ObjectTypeSpreadProperty"));
      {
        e.key = this.flowParseObjectPropertyKey(), e.static = s, e.proto = i != null, e.kind = n;
        let p = !1;
        return this.match(47) || this.match(10) ? (e.method = !0, i != null && this.unexpected(i), r && this.unexpected(r.loc.start), e.value = this.flowParseObjectTypeMethodish(this.startNodeAt(e.loc.start)), (n === "get" || n === "set") && this.flowCheckGetterSetterParams(e), !o && e.key.name === "constructor" && e.value.this && this.raise(j.ThisParamBannedInConstructor, e.value.this)) : (n !== "init" && this.unexpected(), e.method = !1, this.eat(17) && (p = !0), e.value = this.flowParseTypeInitialiser(), e.variance = r), e.optional = p, this.finishNode(e, "ObjectTypeProperty");
      }
    }
    flowCheckGetterSetterParams(e) {
      const s = e.kind === "get" ? 0 : 1, i = e.value.params.length + (e.value.rest ? 1 : 0);
      e.value.this && this.raise(e.kind === "get" ? j.GetterMayNotHaveThisParam : j.SetterMayNotHaveThisParam, e.value.this), i !== s && this.raise(e.kind === "get" ? d.BadGetterArity : d.BadSetterArity, e), e.kind === "set" && e.value.rest && this.raise(d.BadSetterRestParameter, e);
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
      const n = this.startNode(), o = this.lookahead(), c = this.state.type === 78;
      return o.type === 14 || o.type === 17 ? (c && !e && this.raise(j.ThisParamMustBeFirst, n), s = this.parseIdentifier(c), this.eat(17) && (i = !0, c && this.raise(j.ThisParamMayNotBeOptional, n)), r = this.flowParseTypeInitialiser()) : r = this.flowParseType(), n.name = s, n.optional = i, n.typeAnnotation = r, this.finishNode(n, "FunctionTypeParam");
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
      const o = this.state.noAnonFunctionType;
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
          return this.state.noAnonFunctionType = !1, r = this.flowParseTupleType(), this.state.noAnonFunctionType = o, r;
        case 47: {
          const c = this.startNode();
          return c.typeParameters = this.flowParseTypeParameterDeclaration(), this.expect(10), i = this.flowParseFunctionTypeParams(), c.params = i.params, c.rest = i.rest, c.this = i._this, this.expect(11), this.expect(19), c.returnType = this.flowParseType(), this.finishNode(c, "FunctionTypeAnnotation");
        }
        case 10: {
          const c = this.startNode();
          if (this.next(), !this.match(11) && !this.match(21))
            if (R(this.state.type) || this.match(78)) {
              const p = this.lookahead().type;
              n = p !== 17 && p !== 14;
            } else
              n = !0;
          if (n) {
            if (this.state.noAnonFunctionType = !1, r = this.flowParseType(), this.state.noAnonFunctionType = o, this.state.noAnonFunctionType || !(this.match(12) || this.match(11) && this.lookahead().type === 19))
              return this.expect(11), r;
            this.eat(12);
          }
          return r ? i = this.flowParseFunctionTypeParams([this.reinterpretTypeAsFunctionTypeParam(r)]) : i = this.flowParseFunctionTypeParams(), c.params = i.params, c.rest = i.rest, c.this = i._this, this.expect(11), this.expect(19), c.returnType = this.flowParseType(), c.typeParameters = null, this.finishNode(c, "FunctionTypeAnnotation");
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
            throw this.raise(j.UnexpectedSubtractionOperand, this.state.startLoc);
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
          if (xt(this.state.type)) {
            const c = Te(this.state.type);
            return this.next(), super.createIdentifier(s, c);
          } else if (R(this.state.type))
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
        if (q(i.type)) {
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
          if (this.match(80) || R(this.state.type) || this.match(68) || this.match(74) || this.match(82))
            return this.flowParseDeclare(e);
        } else if (R(this.state.type)) {
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
      return e === 126 || ot(e) ? !this.state.containsEsc : super.shouldParseExportDeclaration();
    }
    isExportDefaultSpecifier() {
      const {
        type: e
      } = this.state;
      return e === 126 || ot(e) ? this.state.containsEsc : super.isExportDefaultSpecifier();
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
        const S = this.lookaheadCharCode();
        if (S === 44 || S === 61 || S === 58 || S === 41)
          return this.setOptionalParametersError(i), e;
      }
      this.expect(17);
      const r = this.state.clone(), n = this.state.noArrowAt, o = this.startNodeAt(s);
      let {
        consequent: c,
        failed: p
      } = this.tryParseConditionalConsequent(), [f, P] = this.getArrowLikeExpressions(c);
      if (p || P.length > 0) {
        const S = [...n];
        if (P.length > 0) {
          this.state = r, this.state.noArrowAt = S;
          for (let E = 0; E < P.length; E++)
            S.push(P[E].start);
          ({
            consequent: c,
            failed: p
          } = this.tryParseConditionalConsequent()), [f, P] = this.getArrowLikeExpressions(c);
        }
        p && f.length > 1 && this.raise(j.AmbiguousConditionalArrow, r.startLoc), p && f.length === 1 && (this.state = r, S.push(f[0].start), this.state.noArrowAt = S, {
          consequent: c,
          failed: p
        } = this.tryParseConditionalConsequent());
      }
      return this.getArrowLikeExpressions(c, !0), this.state.noArrowAt = n, this.expect(14), o.test = e, o.consequent = c, o.alternate = this.forwardNoArrowParamsConversionAt(o, () => this.parseMaybeAssign(void 0, void 0)), this.finishNode(o, "ConditionalExpression");
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
      return s ? (r.forEach((n) => this.finishArrowValidation(n)), [r, []]) : Wt(r, (n) => n.params.every((o) => this.isAssignable(o, !0)));
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
      super.parseClassMember(e, s, i), s.declare && (s.type !== "ClassProperty" && s.type !== "ClassPrivateProperty" && s.type !== "PropertyDefinition" ? this.raise(j.DeclareClassElement, r) : s.value && this.raise(j.DeclareClassFieldInitializer, s.value));
    }
    isIterator(e) {
      return e === "iterator" || e === "asyncIterator";
    }
    readIterator() {
      const e = super.readWord1(), s = "@@" + e;
      (!this.isIterator(e) || !this.state.inType) && this.raise(d.InvalidIdentifier, this.state.curPosition(), {
        identifierName: s
      }), this.finishToken(132, s);
    }
    getTokenFromCode(e) {
      const s = this.input.charCodeAt(this.state.pos + 1);
      e === 123 && s === 124 ? this.finishOp(6, 2) : this.state.inType && (e === 62 || e === 60) ? this.finishOp(e === 62 ? 48 : 47, 1) : this.state.inType && e === 63 ? s === 46 ? this.finishOp(18, 2) : this.finishOp(17, 1) : wt(e, s, this.input.charCodeAt(this.state.pos + 2)) ? (this.state.pos += 2, this.readIterator()) : super.getTokenFromCode(e);
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
        n && n.type === "TypeCastExpression" && !((i = n.extra) != null && i.parenthesized) && (e.length > 1 || !s) && this.raise(j.TypeCastInPattern, n.typeAnnotation);
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
    pushClassMethod(e, s, i, r, n, o) {
      if (s.variance && this.unexpected(s.variance.loc.start), delete s.variance, this.match(47) && (s.typeParameters = this.flowParseTypeParameterDeclaration()), super.pushClassMethod(e, s, i, r, n, o), s.params && n) {
        const c = s.params;
        c.length > 0 && this.isThisParam(c[0]) && this.raise(j.ThisParamBannedInConstructor, s);
      } else if (s.type === "MethodDefinition" && n && s.value.params) {
        const c = s.value.params;
        c.length > 0 && this.isThisParam(c[0]) && this.raise(j.ThisParamBannedInConstructor, s);
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
        this.isThisParam(i) && e.kind === "get" ? this.raise(j.GetterMayNotHaveThisParam, i) : this.isThisParam(i) && this.raise(j.SetterMayNotHaveThisParam, i);
      }
    }
    parsePropertyNamePrefixOperator(e) {
      e.variance = this.flowParseVariance();
    }
    parseObjPropValue(e, s, i, r, n, o, c) {
      e.variance && this.unexpected(e.variance.loc.start), delete e.variance;
      let p;
      this.match(47) && !o && (p = this.flowParseTypeParameterDeclaration(), this.match(10) || this.unexpected());
      const f = super.parseObjPropValue(e, s, i, r, n, o, c);
      return p && ((f.value || f).typeParameters = p), f;
    }
    parseFunctionParamType(e) {
      return this.eat(17) && (e.type !== "Identifier" && this.raise(j.PatternIsOptional, e), this.isThisParam(e) && this.raise(j.ThisParamMayNotBeOptional, e), e.optional = !0), this.match(14) ? e.typeAnnotation = this.flowParseTypeAnnotation() : this.isThisParam(e) && this.raise(j.ThisParamAnnotationRequired, e), this.match(29) && this.isThisParam(e) && this.raise(j.ThisParamNoDefault, e), this.resetEndLocation(e), e;
    }
    parseMaybeDefault(e, s) {
      const i = super.parseMaybeDefault(e, s);
      return i.type === "AssignmentPattern" && i.typeAnnotation && i.right.start < i.typeAnnotation.start && this.raise(j.TypeBeforeInitializer, i.typeAnnotation), i;
    }
    checkImportReflection(e) {
      super.checkImportReflection(e), e.module && e.importKind !== "value" && this.raise(j.ImportReflectionHasImportType, e.specifiers[0].loc.start);
    }
    parseImportSpecifierLocal(e, s, i) {
      s.local = _e(e) ? this.flowParseRestrictedIdentifier(!0, !0) : this.parseIdentifier(), e.specifiers.push(this.finishImportSpecifier(s, i));
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
      const o = e.imported;
      let c = null;
      o.type === "Identifier" && (o.name === "type" ? c = "type" : o.name === "typeof" && (c = "typeof"));
      let p = !1;
      if (this.isContextual(93) && !this.isLookaheadContextual("as")) {
        const P = this.parseIdentifier(!0);
        c !== null && !q(this.state.type) ? (e.imported = P, e.importKind = c, e.local = this.cloneIdentifier(P)) : (e.imported = o, e.importKind = null, e.local = this.parseIdentifier());
      } else {
        if (c !== null && q(this.state.type))
          e.imported = this.parseIdentifier(!0), e.importKind = c;
        else {
          if (s)
            throw this.raise(d.ImportBindingIsString, e, {
              importName: o.value
            });
          e.imported = o, e.importKind = null;
        }
        this.eatContextual(93) ? e.local = this.parseIdentifier() : (p = !0, e.local = this.cloneIdentifier(e.imported));
      }
      const f = _e(e);
      return i && f && this.raise(j.ImportTypeShorthandOnlyInPureImport, e), (i || f) && this.checkReservedType(e.local.name, e.local.loc.start, !0), p && !i && !f && this.checkReservedWord(e.local.name, e.loc.start, !0, !0), this.finishImportSpecifier(e, "ImportSpecifier");
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
          context: p
        } = this.state, f = p[p.length - 1];
        (f === B.j_oTag || f === B.j_expr) && p.pop();
      }
      if ((i = n) != null && i.error || this.match(47)) {
        var o, c;
        r = r || this.state.clone();
        let p;
        const f = this.tryParse((S) => {
          var E;
          p = this.flowParseTypeParameterDeclaration();
          const k = this.forwardNoArrowParamsConversionAt(p, () => {
            const se = super.parseMaybeAssign(e, s);
            return this.resetStartLocationFromNode(se, p), se;
          });
          (E = k.extra) != null && E.parenthesized && S();
          const W = this.maybeUnwrapTypeCastExpression(k);
          return W.type !== "ArrowFunctionExpression" && S(), W.typeParameters = p, this.resetStartLocationFromNode(W, p), k;
        }, r);
        let P = null;
        if (f.node && this.maybeUnwrapTypeCastExpression(f.node).type === "ArrowFunctionExpression") {
          if (!f.error && !f.aborted)
            return f.node.async && this.raise(j.UnexpectedTypeParameterBeforeAsyncArrowFunction, p), f.node;
          P = f.node;
        }
        if ((o = n) != null && o.node)
          return this.state = n.failState, n.node;
        if (P)
          return this.state = f.failState, P;
        throw (c = n) != null && c.thrown ? n.error : f.thrown ? f.error : this.raise(j.UnexpectedTokenAfterTypeParameter, p);
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
          this.isThisParam(e.params[n]) && n > 0 && this.raise(j.ThisParamMustBeFirst, e.params[n]);
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
        const r = this.state.clone(), n = this.tryParse((c) => this.parseAsyncArrowWithTypeParameters(s) || c(), r);
        if (!n.error && !n.aborted) return n.node;
        const o = this.tryParse(() => super.parseSubscripts(e, s, i), r);
        if (o.node && !o.error) return o.node;
        if (n.node)
          return this.state = n.failState, n.node;
        if (o.node)
          return this.state = o.failState, o.node;
        throw n.error || o.error;
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
        const o = this.tryParse(() => (n.typeArguments = this.flowParseTypeParameterInstantiationCallOrNew(), this.expect(10), n.arguments = super.parseCallExpressionArguments(), r.optionalChainMember && (n.optional = !1), this.finishCallExpression(n, r.optionalChainMember)));
        if (o.node)
          return o.error && (this.state = o.failState), o.node;
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
      return this.state.hasFlowComment && this.raise(j.UnterminatedFlowComment, this.state.curPosition()), i;
    }
    skipBlockComment() {
      if (this.hasPlugin("flowComments") && this.skipFlowComment()) {
        if (this.state.hasFlowComment)
          throw this.raise(j.NestedFlowComment, this.state.startLoc);
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
        throw this.raise(d.UnterminatedComment, this.state.curPosition());
    }
    flowEnumErrorBooleanMemberNotInitialized(e, {
      enumName: s,
      memberName: i
    }) {
      this.raise(j.EnumBooleanMemberNotInitialized, e, {
        memberName: i,
        enumName: s
      });
    }
    flowEnumErrorInvalidMemberInitializer(e, s) {
      return this.raise(s.explicitType ? s.explicitType === "symbol" ? j.EnumInvalidMemberInitializerSymbolType : j.EnumInvalidMemberInitializerPrimaryType : j.EnumInvalidMemberInitializerUnknownType, e, s);
    }
    flowEnumErrorNumberMemberNotInitialized(e, s) {
      this.raise(j.EnumNumberMemberNotInitialized, e, s);
    }
    flowEnumErrorStringMemberInconsistentlyInitialized(e, s) {
      this.raise(j.EnumStringMemberInconsistentlyInitialized, e, s);
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
        const o = this.startNode(), {
          id: c,
          init: p
        } = this.flowEnumMemberRaw(), f = c.name;
        if (f === "")
          continue;
        /^[a-z]/.test(f) && this.raise(j.EnumInvalidMemberName, c, {
          memberName: f,
          suggestion: f[0].toUpperCase() + f.slice(1),
          enumName: e
        }), i.has(f) && this.raise(j.EnumDuplicateMemberName, c, {
          memberName: f,
          enumName: e
        }), i.add(f);
        const P = {
          enumName: e,
          explicitType: s,
          memberName: f
        };
        switch (o.id = c, p.type) {
          case "boolean": {
            this.flowEnumCheckExplicitTypeMismatch(p.loc, P, "boolean"), o.init = p.value, r.booleanMembers.push(this.finishNode(o, "EnumBooleanMember"));
            break;
          }
          case "number": {
            this.flowEnumCheckExplicitTypeMismatch(p.loc, P, "number"), o.init = p.value, r.numberMembers.push(this.finishNode(o, "EnumNumberMember"));
            break;
          }
          case "string": {
            this.flowEnumCheckExplicitTypeMismatch(p.loc, P, "string"), o.init = p.value, r.stringMembers.push(this.finishNode(o, "EnumStringMember"));
            break;
          }
          case "invalid":
            throw this.flowEnumErrorInvalidMemberInitializer(p.loc, P);
          case "none":
            switch (s) {
              case "boolean":
                this.flowEnumErrorBooleanMemberNotInitialized(p.loc, P);
                break;
              case "number":
                this.flowEnumErrorNumberMemberNotInitialized(p.loc, P);
                break;
              default:
                r.defaultedMembers.push(this.finishNode(o, "EnumDefaultedMember"));
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
      if (!R(this.state.type))
        throw this.raise(j.EnumInvalidExplicitTypeUnknownSupplied, this.state.startLoc, {
          enumName: e
        });
      const {
        value: s
      } = this.state;
      return this.next(), s !== "boolean" && s !== "number" && s !== "string" && s !== "symbol" && this.raise(j.EnumInvalidExplicitType, this.state.startLoc, {
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
        members: o,
        hasUnknownMembers: c
      } = this.flowEnumMembers({
        enumName: i,
        explicitType: n
      });
      switch (e.hasUnknownMembers = c, n) {
        case "boolean":
          return e.explicitType = !0, e.members = o.booleanMembers, this.expect(8), this.finishNode(e, "EnumBooleanBody");
        case "number":
          return e.explicitType = !0, e.members = o.numberMembers, this.expect(8), this.finishNode(e, "EnumNumberBody");
        case "string":
          return e.explicitType = !0, e.members = this.flowEnumStringMembers(o.stringMembers, o.defaultedMembers, {
            enumName: i
          }), this.expect(8), this.finishNode(e, "EnumStringBody");
        case "symbol":
          return e.members = o.defaultedMembers, this.expect(8), this.finishNode(e, "EnumSymbolBody");
        default: {
          const p = () => (e.members = [], this.expect(8), this.finishNode(e, "EnumStringBody"));
          e.explicitType = !1;
          const f = o.booleanMembers.length, P = o.numberMembers.length, S = o.stringMembers.length, E = o.defaultedMembers.length;
          if (!f && !P && !S && !E)
            return p();
          if (!f && !P)
            return e.members = this.flowEnumStringMembers(o.stringMembers, o.defaultedMembers, {
              enumName: i
            }), this.expect(8), this.finishNode(e, "EnumStringBody");
          if (!P && !S && f >= E) {
            for (const k of o.defaultedMembers)
              this.flowEnumErrorBooleanMemberNotInitialized(k.loc.start, {
                enumName: i,
                memberName: k.id.name
              });
            return e.members = o.booleanMembers, this.expect(8), this.finishNode(e, "EnumBooleanBody");
          } else if (!f && !S && P >= E) {
            for (const k of o.defaultedMembers)
              this.flowEnumErrorNumberMemberNotInitialized(k.loc.start, {
                enumName: i,
                memberName: k.id.name
              });
            return e.members = o.numberMembers, this.expect(8), this.finishNode(e, "EnumNumberBody");
          } else
            return this.raise(j.EnumInconsistentMemberValues, r, {
              enumName: i
            }), p();
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
  const hs = {
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
  }, M = /\r\n|[\r\n\u2028\u2029]/, y = new RegExp(M.source, "g");
  function w(a) {
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
  function O(a, t, e) {
    for (let s = t; s < e; s++)
      if (w(a.charCodeAt(s)))
        return !0;
    return !1;
  }
  const Z = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g, de = /(?:[^\S\n\r\u2028\u2029]|\/\/.*|\/\*.*?\*\/)*/g;
  function ue(a) {
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
  const le = ee`jsx`({
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
  function ye(a) {
    return a ? a.type === "JSXOpeningFragment" || a.type === "JSXClosingFragment" : !1;
  }
  function Fe(a) {
    if (a.type === "JSXIdentifier")
      return a.name;
    if (a.type === "JSXNamespacedName")
      return a.namespace.name + ":" + a.name.name;
    if (a.type === "JSXMemberExpression")
      return Fe(a.object) + "." + Fe(a.property);
    throw new Error("Node had unexpected type: " + a.type);
  }
  var Ct = (a) => class extends a {
    jsxReadToken() {
      let e = "", s = this.state.pos;
      for (; ; ) {
        if (this.state.pos >= this.length)
          throw this.raise(le.UnterminatedJsxContent, this.state.startLoc);
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
            w(i) ? (e += this.input.slice(s, this.state.pos), e += this.jsxReadNewLine(!0), s = this.state.pos) : ++this.state.pos;
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
          throw this.raise(d.UnterminatedString, this.state.startLoc);
        const r = this.input.charCodeAt(this.state.pos);
        if (r === e) break;
        r === 38 ? (s += this.input.slice(i, this.state.pos), s += this.jsxReadEntity(), i = this.state.pos) : w(r) ? (s += this.input.slice(i, this.state.pos), s += this.jsxReadNewLine(!1), i = this.state.pos) : ++this.state.pos;
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
          const r = this.input.slice(e, this.state.pos), n = hs[r];
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
      while (Me(e) || e === 45);
      this.finishToken(141, this.input.slice(s, this.state.pos));
    }
    jsxParseIdentifier() {
      const e = this.startNode();
      return this.match(141) ? e.name = this.state.value : xt(this.state.type) ? e.name = Te(this.state.type) : this.unexpected(), this.next(), this.finishNode(e, "JSXIdentifier");
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
          return e = this.startNode(), this.setContext(B.brace), this.next(), e = this.jsxParseExpressionContainer(e, B.j_oTag), e.expression.type === "JSXEmptyExpression" && this.raise(le.AttributeIsEmpty, e), e;
        case 143:
        case 134:
          return this.parseExprAtom();
        default:
          throw this.raise(le.UnsupportedJsxValue, this.state.startLoc);
      }
    }
    jsxParseEmptyExpression() {
      const e = this.startNodeAt(this.state.lastTokEndLoc);
      return this.finishNodeAt(e, "JSXEmptyExpression", this.state.startLoc);
    }
    jsxParseSpreadChild(e) {
      return this.next(), e.expression = this.parseExpression(), this.setContext(B.j_expr), this.state.canStartJSXElement = !0, this.expect(8), this.finishNode(e, "JSXSpreadChild");
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
      return this.match(5) ? (this.setContext(B.brace), this.next(), this.expect(21), e.argument = this.parseMaybeAssignAllowIn(), this.setContext(B.j_oTag), this.state.canStartJSXElement = !0, this.expect(8), this.finishNode(e, "JSXSpreadAttribute")) : (e.name = this.jsxParseNamespacedName(), e.value = this.eat(29) ? this.jsxParseAttributeValue() : null, this.finishNode(e, "JSXAttribute"));
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
              const o = this.startNode();
              this.setContext(B.brace), this.next(), this.match(21) ? i.push(this.jsxParseSpreadChild(o)) : i.push(this.jsxParseExpressionContainer(o, B.j_expr));
              break;
            }
            default:
              this.unexpected();
          }
        ye(r) && !ye(n) && n !== null ? this.raise(le.MissingClosingTagFragment, n) : !ye(r) && ye(n) ? this.raise(le.MissingClosingTagElement, n, {
          openingTagName: Fe(r.name)
        }) : !ye(r) && !ye(n) && Fe(n.name) !== Fe(r.name) && this.raise(le.MissingClosingTagElement, n, {
          openingTagName: Fe(r.name)
        });
      }
      if (ye(r) ? (s.openingFragment = r, s.closingFragment = n) : (s.openingElement = r, s.closingElement = n), s.children = i, this.match(47))
        throw this.raise(le.UnwrappedAdjacentJSXElements, this.state.startLoc);
      return ye(r) ? this.finishNode(s, "JSXFragment") : this.finishNode(s, "JSXElement");
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
      if (s === B.j_expr) {
        this.jsxReadToken();
        return;
      }
      if (s === B.j_oTag || s === B.j_cTag) {
        if (je(e)) {
          this.jsxReadWord();
          return;
        }
        if (e === 62) {
          ++this.state.pos, this.finishToken(144);
          return;
        }
        if ((e === 34 || e === 39) && s === B.j_oTag) {
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
        s.splice(-2, 2, B.j_cTag), this.state.canStartJSXElement = !1;
      else if (i === 143)
        s.push(B.j_oTag);
      else if (i === 144) {
        const r = s[s.length - 1];
        r === B.j_oTag && e === 56 || r === B.j_cTag ? (s.pop(), this.state.canStartJSXElement = s[s.length - 1] === B.j_expr) : (this.setContext(B.j_expr), this.state.canStartJSXElement = !0);
      } else
        this.state.canStartJSXElement = nt(i);
    }
  };
  class xe extends St {
    constructor(...t) {
      super(...t), this.tsNames = /* @__PURE__ */ new Map();
    }
  }
  class Jt extends Ee {
    constructor(...t) {
      super(...t), this.importsStack = [];
    }
    createScope(t) {
      return this.importsStack.push(/* @__PURE__ */ new Set()), new xe(t);
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
        this.hasImport(t, !0) && this.parser.raise(d.VarRedeclaration, s, {
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
  class Xt {
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
  function Yt(a, t) {
    return (a ? 2 : 0) | (t ? 1 : 0);
  }
  class sr {
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
  function Ms(a, t) {
    a.trailingComments === void 0 ? a.trailingComments = t : a.trailingComments.unshift(...t);
  }
  function ir(a, t) {
    a.leadingComments === void 0 ? a.leadingComments = t : a.leadingComments.unshift(...t);
  }
  function It(a, t) {
    a.innerComments === void 0 ? a.innerComments = t : a.innerComments.unshift(...t);
  }
  function Ve(a, t, e) {
    let s = null, i = t.length;
    for (; s === null && i > 0; )
      s = t[--i];
    s === null || s.start > e.start ? It(a, e.comments) : Ms(s, e.comments);
  }
  class rr extends sr {
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
        const o = e[i], c = o.end;
        if (c > n)
          o.containingNode = t, this.finalizeComment(o), e.splice(i, 1);
        else {
          c === n && (o.trailingNode = t);
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
        t.leadingNode !== null && Ms(t.leadingNode, s), t.trailingNode !== null && ir(t.trailingNode, s);
      else {
        const i = t.containingNode, r = t.start;
        if (this.input.charCodeAt(this.offsetToSourcePos(r) - 1) === 44)
          switch (i.type) {
            case "ObjectExpression":
            case "ObjectPattern":
              Ve(i, i.properties, t);
              break;
            case "CallExpression":
            case "NewExpression":
            case "OptionalCallExpression":
              Ve(i, i.arguments, t);
              break;
            case "ImportExpression":
              Ve(i, [i.source, (e = i.options) != null ? e : null], t);
              break;
            case "FunctionDeclaration":
            case "FunctionExpression":
            case "ArrowFunctionExpression":
            case "ObjectMethod":
            case "ClassMethod":
            case "ClassPrivateMethod":
            case "TSTypeParameterDeclaration":
              Ve(i, i.params, t);
              break;
            case "ArrayExpression":
            case "ArrayPattern":
              Ve(i, i.elements, t);
              break;
            case "ExportNamedDeclaration":
            case "ImportDeclaration":
              Ve(i, i.specifiers, t);
              break;
            case "TSEnumDeclaration":
              Ve(i, i.members, t);
              break;
            case "TSEnumBody":
              Ve(i, i.members, t);
              break;
            case "TSInterfaceBody":
              Ve(i, i.body, t);
              break;
            default: {
              if (i.type === "RecordExpression") {
                Ve(i, i.properties, t);
                break;
              }
              if (i.type === "TupleExpression") {
                Ve(i, i.elements, t);
                break;
              }
              It(i, s);
            }
          }
        else
          It(i, s);
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
        const o = i[n], c = o.end;
        if (o.start === s)
          o.leadingNode = t;
        else if (c === e)
          o.trailingNode = t;
        else if (c < e)
          break;
      }
    }
  }
  class us {
    constructor() {
      this.flags = 1024, this.startIndex = void 0, this.curLine = void 0, this.lineStart = void 0, this.startLoc = void 0, this.endLoc = void 0, this.errors = [], this.potentialArrowAt = -1, this.noArrowAt = [], this.noArrowParamsConversionAt = [], this.topicContext = {
        maxNumOfResolvableTopics: 0,
        maxTopicIndex: null
      }, this.labels = [], this.commentsLen = 0, this.commentStack = [], this.pos = 0, this.type = 140, this.value = null, this.start = 0, this.end = 0, this.lastTokEndLoc = null, this.lastTokStartLoc = null, this.context = [B.brace], this.firstInvalidTemplateEscapePos = null, this.strictErrors = /* @__PURE__ */ new Map(), this.tokensLength = 0;
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
      this.strict = t === !1 ? !1 : t === !0 ? !0 : e === "module", this.startIndex = s, this.curLine = i, this.lineStart = -r, this.startLoc = this.endLoc = new u(i, r, s);
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
      return new u(this.curLine, this.pos - this.lineStart, this.pos + this.startIndex);
    }
    clone() {
      const t = new us();
      return t.flags = this.flags, t.startIndex = this.startIndex, t.curLine = this.curLine, t.lineStart = this.lineStart, t.startLoc = this.startLoc, t.endLoc = this.endLoc, t.errors = this.errors.slice(), t.potentialArrowAt = this.potentialArrowAt, t.noArrowAt = this.noArrowAt.slice(), t.noArrowParamsConversionAt = this.noArrowParamsConversionAt.slice(), t.topicContext = this.topicContext, t.labels = this.labels.slice(), t.commentsLen = this.commentsLen, t.commentStack = this.commentStack.slice(), t.pos = this.pos, t.type = this.type, t.value = this.value, t.start = this.start, t.end = this.end, t.lastTokEndLoc = this.lastTokEndLoc, t.lastTokStartLoc = this.lastTokStartLoc, t.context = this.context.slice(), t.firstInvalidTemplateEscapePos = this.firstInvalidTemplateEscapePos, t.strictErrors = this.strictErrors, t.tokensLength = this.tokensLength, t;
    }
  }
  var ar = function(t) {
    return t >= 48 && t <= 57;
  };
  const _s = {
    decBinOct: /* @__PURE__ */ new Set([46, 66, 69, 79, 95, 98, 101, 111]),
    hex: /* @__PURE__ */ new Set([46, 88, 95, 120])
  }, Zt = {
    bin: (a) => a === 48 || a === 49,
    oct: (a) => a >= 48 && a <= 55,
    dec: (a) => a >= 48 && a <= 57,
    hex: (a) => a >= 48 && a <= 57 || a >= 65 && a <= 70 || a >= 97 && a <= 102
  };
  function Fs(a, t, e, s, i, r) {
    const n = e, o = s, c = i;
    let p = "", f = null, P = e;
    const {
      length: S
    } = t;
    for (; ; ) {
      if (e >= S) {
        r.unterminated(n, o, c), p += t.slice(P, e);
        break;
      }
      const E = t.charCodeAt(e);
      if (nr(a, E, t, e)) {
        p += t.slice(P, e);
        break;
      }
      if (E === 92) {
        p += t.slice(P, e);
        const k = or(t, e, s, i, a === "template", r);
        k.ch === null && !f ? f = {
          pos: e,
          lineStart: s,
          curLine: i
        } : p += k.ch, {
          pos: e,
          lineStart: s,
          curLine: i
        } = k, P = e;
      } else E === 8232 || E === 8233 ? (++e, ++i, s = e) : E === 10 || E === 13 ? a === "template" ? (p += t.slice(P, e) + `
`, ++e, E === 13 && t.charCodeAt(e) === 10 && ++e, ++i, P = s = e) : r.unterminated(n, o, c) : ++e;
    }
    return {
      pos: e,
      str: p,
      firstInvalidLoc: f,
      lineStart: s,
      curLine: i,
      containsInvalid: !!f
    };
  }
  function nr(a, t, e, s) {
    return a === "template" ? t === 96 || t === 36 && e.charCodeAt(s + 1) === 123 : t === (a === "double" ? 34 : 39);
  }
  function or(a, t, e, s, i, r) {
    const n = !i;
    t++;
    const o = (p) => ({
      pos: t,
      ch: p,
      lineStart: e,
      curLine: s
    }), c = a.charCodeAt(t++);
    switch (c) {
      case 110:
        return o(`
`);
      case 114:
        return o("\r");
      case 120: {
        let p;
        return {
          code: p,
          pos: t
        } = ps(a, t, e, s, 2, !1, n, r), o(p === null ? null : String.fromCharCode(p));
      }
      case 117: {
        let p;
        return {
          code: p,
          pos: t
        } = Bs(a, t, e, s, n, r), o(p === null ? null : String.fromCodePoint(p));
      }
      case 116:
        return o("	");
      case 98:
        return o("\b");
      case 118:
        return o("\v");
      case 102:
        return o("\f");
      case 13:
        a.charCodeAt(t) === 10 && ++t;
      case 10:
        e = t, ++s;
      case 8232:
      case 8233:
        return o("");
      case 56:
      case 57:
        if (i)
          return o(null);
        r.strictNumericEscape(t - 1, e, s);
      default:
        if (c >= 48 && c <= 55) {
          const p = t - 1;
          let P = /^[0-7]+/.exec(a.slice(p, t + 2))[0], S = parseInt(P, 8);
          S > 255 && (P = P.slice(0, -1), S = parseInt(P, 8)), t += P.length - 1;
          const E = a.charCodeAt(t);
          if (P !== "0" || E === 56 || E === 57) {
            if (i)
              return o(null);
            r.strictNumericEscape(p, e, s);
          }
          return o(String.fromCharCode(S));
        }
        return o(String.fromCharCode(c));
    }
  }
  function ps(a, t, e, s, i, r, n, o) {
    const c = t;
    let p;
    return {
      n: p,
      pos: t
    } = Rs(a, t, e, s, 16, i, r, !1, o, !n), p === null && (n ? o.invalidEscapeSequence(c, e, s) : t = c - 1), {
      code: p,
      pos: t
    };
  }
  function Rs(a, t, e, s, i, r, n, o, c, p) {
    const f = t, P = i === 16 ? _s.hex : _s.decBinOct, S = i === 16 ? Zt.hex : i === 10 ? Zt.dec : i === 8 ? Zt.oct : Zt.bin;
    let E = !1, k = 0;
    for (let W = 0, se = r ?? 1 / 0; W < se; ++W) {
      const z = a.charCodeAt(t);
      let Q;
      if (z === 95 && o !== "bail") {
        const ft = a.charCodeAt(t - 1), rt = a.charCodeAt(t + 1);
        if (o) {
          if (Number.isNaN(rt) || !S(rt) || P.has(ft) || P.has(rt)) {
            if (p) return {
              n: null,
              pos: t
            };
            c.unexpectedNumericSeparator(t, e, s);
          }
        } else {
          if (p) return {
            n: null,
            pos: t
          };
          c.numericSeparatorInEscapeSequence(t, e, s);
        }
        ++t;
        continue;
      }
      if (z >= 97 ? Q = z - 97 + 10 : z >= 65 ? Q = z - 65 + 10 : ar(z) ? Q = z - 48 : Q = 1 / 0, Q >= i) {
        if (Q <= 9 && p)
          return {
            n: null,
            pos: t
          };
        if (Q <= 9 && c.invalidDigit(t, e, s, i))
          Q = 0;
        else if (n)
          Q = 0, E = !0;
        else
          break;
      }
      ++t, k = k * i + Q;
    }
    return t === f || r != null && t - f !== r || E ? {
      n: null,
      pos: t
    } : {
      n: k,
      pos: t
    };
  }
  function Bs(a, t, e, s, i, r) {
    const n = a.charCodeAt(t);
    let o;
    if (n === 123) {
      if (++t, {
        code: o,
        pos: t
      } = ps(a, t, e, s, a.indexOf("}", t) - t, !0, i, r), ++t, o !== null && o > 1114111)
        if (i)
          r.invalidCodePoint(t, e, s);
        else
          return {
            code: null,
            pos: t
          };
    } else
      ({
        code: o,
        pos: t
      } = ps(a, t, e, s, 4, !1, i, r));
    return {
      code: o,
      pos: t
    };
  }
  function Et(a, t, e) {
    return new u(e, a - t, a);
  }
  const lr = /* @__PURE__ */ new Set([103, 109, 115, 105, 121, 117, 100, 118]);
  class it {
    constructor(t) {
      const e = t.startIndex || 0;
      this.type = t.type, this.value = t.value, this.start = e + t.start, this.end = e + t.end, this.loc = new m(t.startLoc, t.endLoc);
    }
  }
  class cr extends rr {
    constructor(t, e) {
      super(), this.isLookahead = void 0, this.tokens = [], this.errorHandlers_readInt = {
        invalidDigit: (s, i, r, n) => this.optionFlags & 2048 ? (this.raise(d.InvalidDigit, Et(s, i, r), {
          radix: n
        }), !0) : !1,
        numericSeparatorInEscapeSequence: this.errorBuilder(d.NumericSeparatorInEscapeSequence),
        unexpectedNumericSeparator: this.errorBuilder(d.UnexpectedNumericSeparator)
      }, this.errorHandlers_readCodePoint = Object.assign({}, this.errorHandlers_readInt, {
        invalidEscapeSequence: this.errorBuilder(d.InvalidEscapeSequence),
        invalidCodePoint: this.errorBuilder(d.InvalidCodePoint)
      }), this.errorHandlers_readStringContents_string = Object.assign({}, this.errorHandlers_readCodePoint, {
        strictNumericEscape: (s, i, r) => {
          this.recordStrictModeErrors(d.StrictNumericEscape, Et(s, i, r));
        },
        unterminated: (s, i, r) => {
          throw this.raise(d.UnterminatedString, Et(s - 1, i, r));
        }
      }), this.errorHandlers_readStringContents_template = Object.assign({}, this.errorHandlers_readCodePoint, {
        strictNumericEscape: this.errorBuilder(d.StrictNumericEscape),
        unterminated: (s, i, r) => {
          throw this.raise(d.UnterminatedTemplate, Et(s, i, r));
        }
      }), this.state = new us(), this.state.init(t), this.input = e, this.length = e.length, this.comments = [], this.isLookahead = !1;
    }
    pushToken(t) {
      this.tokens.length = this.state.tokensLength, this.tokens.push(t), ++this.state.tokensLength;
    }
    next() {
      this.checkKeywordEscapes(), this.optionFlags & 256 && this.pushToken(new it(this.state)), this.state.lastTokEndLoc = this.state.endLoc, this.state.lastTokStartLoc = this.state.startLoc, this.nextToken();
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
      return Z.lastIndex = t, Z.test(this.input) ? Z.lastIndex : t;
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
      return de.lastIndex = t, de.test(this.input) ? de.lastIndex : t;
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
        throw this.raise(d.UnterminatedComment, this.state.curPosition());
      for (this.state.pos = i + t.length, y.lastIndex = s + 2; y.test(this.input) && y.lastIndex <= i; )
        ++this.state.curLine, this.state.lineStart = y.lastIndex;
      if (this.isLookahead) return;
      const r = {
        type: "CommentBlock",
        value: this.input.slice(s + 2, i),
        start: this.sourceToOffsetPos(s),
        end: this.sourceToOffsetPos(i + t.length),
        loc: new m(e, this.state.curPosition())
      };
      return this.optionFlags & 256 && this.pushToken(r), r;
    }
    skipLineComment(t) {
      const e = this.state.pos;
      let s;
      this.isLookahead || (s = this.state.curPosition());
      let i = this.input.charCodeAt(this.state.pos += t);
      if (this.state.pos < this.length)
        for (; !w(i) && ++this.state.pos < this.length; )
          i = this.input.charCodeAt(this.state.pos);
      if (this.isLookahead) return;
      const r = this.state.pos, o = {
        type: "CommentLine",
        value: this.input.slice(e + t, r),
        start: this.sourceToOffsetPos(e),
        end: this.sourceToOffsetPos(r),
        loc: new m(s, this.state.curPosition())
      };
      return this.optionFlags & 256 && this.pushToken(o), o;
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
            if (ue(s))
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
        throw this.raise(d.UnexpectedDigitAfterHash, this.state.curPosition());
      if (e === 123 || e === 91 && this.hasPlugin("recordAndTuple")) {
        if (this.expectPlugin("recordAndTuple"), this.getPluginOption("recordAndTuple", "syntaxType") === "bar")
          throw this.raise(e === 123 ? d.RecordExpressionHashIncorrectStartSyntaxType : d.TupleExpressionHashIncorrectStartSyntaxType, this.state.curPosition());
        this.state.pos += 2, e === 123 ? this.finishToken(7) : this.finishToken(1);
      } else je(e) ? (++this.state.pos, this.finishToken(139, this.readWord1(e))) : e === 92 ? (++this.state.pos, this.finishToken(139, this.readWord1())) : this.finishOp(27, 1);
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
      for (this.state.pos += 1; !w(t) && ++this.state.pos < this.length; )
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
            throw this.raise(d.RecordExpressionBarIncorrectEndSyntaxType, this.state.curPosition());
          this.state.pos += 2, this.finishToken(9);
          return;
        }
        if (this.hasPlugin("recordAndTuple") && e === 93) {
          if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar")
            throw this.raise(d.TupleExpressionBarIncorrectEndSyntaxType, this.state.curPosition());
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
              throw this.raise(d.TupleExpressionBarIncorrectStartSyntaxType, this.state.curPosition());
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
              throw this.raise(d.RecordExpressionBarIncorrectStartSyntaxType, this.state.curPosition());
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
          if (je(t)) {
            this.readWord(t);
            return;
          }
      }
      throw this.raise(d.InvalidOrUnexpectedToken, this.state.curPosition(), {
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
          throw this.raise(d.UnterminatedRegExp, x(t, 1));
        const p = this.input.charCodeAt(r);
        if (w(p))
          throw this.raise(d.UnterminatedRegExp, x(t, 1));
        if (s)
          s = !1;
        else {
          if (p === 91)
            i = !0;
          else if (p === 93 && i)
            i = !1;
          else if (p === 47 && !i)
            break;
          s = p === 92;
        }
      }
      const n = this.input.slice(e, r);
      ++r;
      let o = "";
      const c = () => x(t, r + 2 - e);
      for (; r < this.length; ) {
        const p = this.codePointAtPos(r), f = String.fromCharCode(p);
        if (lr.has(p))
          p === 118 ? o.includes("u") && this.raise(d.IncompatibleRegExpUVFlags, c()) : p === 117 && o.includes("v") && this.raise(d.IncompatibleRegExpUVFlags, c()), o.includes(f) && this.raise(d.DuplicateRegExpFlags, c());
        else if (Me(p) || p === 92)
          this.raise(d.MalformedRegExpFlags, c());
        else
          break;
        ++r, o += f;
      }
      this.state.pos = r, this.finishToken(138, {
        pattern: n,
        flags: o
      });
    }
    readInt(t, e, s = !1, i = !0) {
      const {
        n: r,
        pos: n
      } = Rs(this.input, this.state.pos, this.state.lineStart, this.state.curLine, t, e, s, i, this.errorHandlers_readInt, !1);
      return this.state.pos = n, r;
    }
    readRadixNumber(t) {
      const e = this.state.pos, s = this.state.curPosition();
      let i = !1;
      this.state.pos += 2;
      const r = this.readInt(t);
      r == null && this.raise(d.InvalidDigit, x(s, 2), {
        radix: t
      });
      const n = this.input.charCodeAt(this.state.pos);
      if (n === 110)
        ++this.state.pos, i = !0;
      else if (n === 109)
        throw this.raise(d.InvalidDecimal, s);
      if (je(this.codePointAtPos(this.state.pos)))
        throw this.raise(d.NumberIdentifier, this.state.curPosition());
      if (i) {
        const o = this.input.slice(e, this.state.pos).replace(/[_n]/g, "");
        this.finishToken(136, o);
        return;
      }
      this.finishToken(135, r);
    }
    readNumber(t) {
      const e = this.state.pos, s = this.state.curPosition();
      let i = !1, r = !1, n = !1, o = !1;
      !t && this.readInt(10) === null && this.raise(d.InvalidNumber, this.state.curPosition());
      const c = this.state.pos - e >= 2 && this.input.charCodeAt(e) === 48;
      if (c) {
        const E = this.input.slice(e, this.state.pos);
        if (this.recordStrictModeErrors(d.StrictOctalLiteral, s), !this.state.strict) {
          const k = E.indexOf("_");
          k > 0 && this.raise(d.ZeroDigitNumericSeparator, x(s, k));
        }
        o = c && !/[89]/.test(E);
      }
      let p = this.input.charCodeAt(this.state.pos);
      if (p === 46 && !o && (++this.state.pos, this.readInt(10), i = !0, p = this.input.charCodeAt(this.state.pos)), (p === 69 || p === 101) && !o && (p = this.input.charCodeAt(++this.state.pos), (p === 43 || p === 45) && ++this.state.pos, this.readInt(10) === null && this.raise(d.InvalidOrMissingExponent, s), i = !0, n = !0, p = this.input.charCodeAt(this.state.pos)), p === 110 && ((i || c) && this.raise(d.InvalidBigIntLiteral, s), ++this.state.pos, r = !0), p === 109) {
        this.expectPlugin("decimal", this.state.curPosition()), (n || c) && this.raise(d.InvalidDecimal, s), ++this.state.pos;
        var f = !0;
      }
      if (je(this.codePointAtPos(this.state.pos)))
        throw this.raise(d.NumberIdentifier, this.state.curPosition());
      const P = this.input.slice(e, this.state.pos).replace(/[_mn]/g, "");
      if (r) {
        this.finishToken(136, P);
        return;
      }
      if (f) {
        this.finishToken(137, P);
        return;
      }
      const S = o ? parseInt(P, 8) : parseFloat(P);
      this.finishToken(135, S);
    }
    readCodePoint(t) {
      const {
        code: e,
        pos: s
      } = Bs(this.input, this.state.pos, this.state.lineStart, this.state.curLine, t, this.errorHandlers_readCodePoint);
      return this.state.pos = s, e;
    }
    readString(t) {
      const {
        str: e,
        pos: s,
        curLine: i,
        lineStart: r
      } = Fs(t === 34 ? "double" : "single", this.input, this.state.pos + 1, this.state.lineStart, this.state.curLine, this.errorHandlers_readStringContents_string);
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
      } = Fs("template", this.input, this.state.pos + 1, this.state.lineStart, this.state.curLine, this.errorHandlers_readStringContents_template);
      this.state.pos = i + 1, this.state.lineStart = n, this.state.curLine = r, s && (this.state.firstInvalidTemplateEscapePos = new u(s.curLine, s.pos - s.lineStart, this.sourceToOffsetPos(s.pos))), this.input.codePointAt(i) === 96 ? this.finishToken(24, s ? null : t + e + "`") : (this.state.pos++, this.finishToken(25, s ? null : t + e + "${"));
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
        if (Me(r))
          this.state.pos += r <= 65535 ? 1 : 2;
        else if (r === 92) {
          this.state.containsEsc = !0, e += this.input.slice(i, this.state.pos);
          const n = this.state.curPosition(), o = this.state.pos === s ? je : Me;
          if (this.input.charCodeAt(++this.state.pos) !== 117) {
            this.raise(d.MissingUnicodeEscape, this.state.curPosition()), i = this.state.pos - 1;
            continue;
          }
          ++this.state.pos;
          const c = this.readCodePoint(!0);
          c !== null && (o(c) || this.raise(d.EscapedCharNotAnIdentifier, n), e += String.fromCodePoint(c)), i = this.state.pos;
        } else
          break;
      }
      return e + this.input.slice(i, this.state.pos);
    }
    readWord(t) {
      const e = this.readWord1(t), s = Ke.get(e);
      s !== void 0 ? this.finishToken(s, Te(s)) : this.finishToken(132, e);
    }
    checkKeywordEscapes() {
      const {
        type: t
      } = this.state;
      xt(t) && this.state.containsEsc && this.raise(d.InvalidEscapedReservedWord, this.state.startLoc, {
        reservedWord: Te(t)
      });
    }
    raise(t, e, s = {}) {
      const i = e instanceof u ? e : e.loc.start, r = t(i, s);
      if (!(this.optionFlags & 2048)) throw r;
      return this.isLookahead || this.state.errors.push(r), r;
    }
    raiseOverwrite(t, e, s = {}) {
      const i = e instanceof u ? e : e.loc.start, r = i.index, n = this.state.errors;
      for (let o = n.length - 1; o >= 0; o--) {
        const c = n[o];
        if (c.loc.index === r)
          return n[o] = t(i, s);
        if (c.loc.index < r) break;
      }
      return this.raise(t, e, s);
    }
    updateContext(t) {
    }
    unexpected(t, e) {
      throw this.raise(d.UnexpectedToken, t ?? this.state.startLoc, {
        expected: e ? Te(e) : null
      });
    }
    expectPlugin(t, e) {
      if (this.hasPlugin(t))
        return !0;
      throw this.raise(d.MissingPlugin, e ?? this.state.startLoc, {
        missingPlugin: [t]
      });
    }
    expectOnePlugin(t) {
      if (!t.some((e) => this.hasPlugin(e)))
        throw this.raise(d.MissingOneOfPlugins, this.state.startLoc, {
          missingPlugin: t
        });
    }
    errorBuilder(t) {
      return (e, s, i) => {
        this.raise(t, Et(e, s, i));
      };
    }
  }
  class hr {
    constructor() {
      this.privateNames = /* @__PURE__ */ new Set(), this.loneAccessors = /* @__PURE__ */ new Map(), this.undefinedPrivateNames = /* @__PURE__ */ new Map();
    }
  }
  class ur {
    constructor(t) {
      this.parser = void 0, this.stack = [], this.undefinedPrivateNames = /* @__PURE__ */ new Map(), this.parser = t;
    }
    current() {
      return this.stack[this.stack.length - 1];
    }
    enter() {
      this.stack.push(new hr());
    }
    exit() {
      const t = this.stack.pop(), e = this.current();
      for (const [s, i] of Array.from(t.undefinedPrivateNames))
        e ? e.undefinedPrivateNames.has(s) || e.undefinedPrivateNames.set(s, i) : this.parser.raise(d.InvalidPrivateFieldResolution, i, {
          identifierName: s
        });
    }
    declarePrivateName(t, e, s) {
      const {
        privateNames: i,
        loneAccessors: r,
        undefinedPrivateNames: n
      } = this.current();
      let o = i.has(t);
      if (e & 3) {
        const c = o && r.get(t);
        if (c) {
          const p = c & 4, f = e & 4, P = c & 3, S = e & 3;
          o = P === S || p !== f, o || r.delete(t);
        } else o || r.set(t, e);
      }
      o && this.parser.raise(d.PrivateNameRedeclaration, s, {
        identifierName: t
      }), i.add(t), n.delete(t);
    }
    usePrivateName(t, e) {
      let s;
      for (s of this.stack)
        if (s.privateNames.has(t)) return;
      s ? s.undefinedPrivateNames.set(t, e) : this.parser.raise(d.InvalidPrivateFieldResolution, e, {
        identifierName: t
      });
    }
  }
  class Qt {
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
  class Us extends Qt {
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
  class pr {
    constructor(t) {
      this.parser = void 0, this.stack = [new Qt()], this.parser = t;
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
        i.type === 2 && i.recordDeclarationError(d.AwaitBindingIdentifier, t), i = e[--s];
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
  function dr() {
    return new Qt(3);
  }
  function fr() {
    return new Us(1);
  }
  function mr() {
    return new Us(2);
  }
  function zs() {
    return new Qt();
  }
  class yr extends cr {
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
        return !(Me(s) || (s & 64512) === 55296);
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
      return O(this.input, this.offsetToSourcePos(this.state.lastTokEndLoc.index), this.state.start);
    }
    hasFollowingLineBreak() {
      return O(this.input, this.state.end, this.nextTokenStart());
    }
    isLineTerminator() {
      return this.eat(13) || this.canInsertSemicolon();
    }
    semicolon(t = !0) {
      (t ? this.isLineTerminator() : this.eat(13)) || this.raise(d.MissingSemicolon, this.state.lastTokEndLoc);
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
        voidPatternLoc: o
      } = t, c = !!s || !!i || !!n || !!r || !!o;
      if (!e)
        return c;
      s != null && this.raise(d.InvalidCoverInitializedName, s), i != null && this.raise(d.DuplicateProto, i), r != null && this.raise(d.UnexpectedPrivateField, r), n != null && this.unexpected(n), o != null && this.raise(d.InvalidCoverDiscardElement, o);
    }
    isLiteralPropertyName() {
      return Pe(this.state.type);
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
      const o = this.prodParam;
      this.prodParam = new Xt();
      const c = this.classScope;
      this.classScope = new ur(this);
      const p = this.expressionScope;
      return this.expressionScope = new pr(this), () => {
        this.state.labels = e, this.exportedIdentifiers = s, this.inModule = i, this.scope = r, this.prodParam = o, this.classScope = c, this.expressionScope = p;
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
  class es {
    constructor() {
      this.shorthandAssignLoc = null, this.doubleProtoLoc = null, this.privateKeyLoc = null, this.optionalParametersLoc = null, this.voidPatternLoc = null;
    }
  }
  class ts {
    constructor(t, e, s) {
      this.type = "", this.start = e, this.end = 0, this.loc = new m(s), (t == null ? void 0 : t.optionFlags) & 128 && (this.range = [e, 0]), t != null && t.filename && (this.loc.filename = t.filename);
    }
  }
  const ds = ts.prototype;
  ds.__clone = function() {
    const a = new ts(void 0, this.start, this.loc.start), t = Object.keys(this);
    for (let e = 0, s = t.length; e < s; e++) {
      const i = t[e];
      i !== "leadingComments" && i !== "trailingComments" && i !== "innerComments" && (a[i] = this[i]);
    }
    return a;
  };
  class xr extends yr {
    startNode() {
      const t = this.state.startLoc;
      return new ts(this, t.index, t);
    }
    startNodeAt(t) {
      return new ts(this, t.index, t);
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
        name: o
      } = t, c = Object.create(ds);
      return c.type = e, c.start = s, c.end = i, c.loc = r, c.range = n, c.name = o, t.extra && (c.extra = t.extra), c;
    }
    cloneStringLiteral(t) {
      const {
        type: e,
        start: s,
        end: i,
        loc: r,
        range: n,
        extra: o
      } = t, c = Object.create(ds);
      return c.type = e, c.start = s, c.end = i, c.loc = r, c.range = n, c.extra = o, c.value = t.value, c;
    }
  }
  const fs = (a) => a.type === "ParenthesizedExpression" ? fs(a.expression) : a;
  class gr extends xr {
    toAssignable(t, e = !1) {
      var s, i;
      let r;
      switch ((t.type === "ParenthesizedExpression" || (s = t.extra) != null && s.parenthesized) && (r = fs(t), e ? r.type === "Identifier" ? this.expressionScope.recordArrowParameterBindingError(d.InvalidParenthesizedAssignment, t) : r.type !== "CallExpression" && r.type !== "MemberExpression" && !this.isOptionalMemberExpression(r) && this.raise(d.InvalidParenthesizedAssignment, t) : this.raise(d.InvalidParenthesizedAssignment, t)), t.type) {
        case "Identifier":
        case "ObjectPattern":
        case "ArrayPattern":
        case "AssignmentPattern":
        case "RestElement":
        case "VoidPattern":
          break;
        case "ObjectExpression":
          this.castNodeTo(t, "ObjectPattern");
          for (let o = 0, c = t.properties.length, p = c - 1; o < c; o++) {
            var n;
            const f = t.properties[o], P = o === p;
            this.toAssignableObjectExpressionProp(f, P, e), P && f.type === "RestElement" && (n = t.extra) != null && n.trailingCommaLoc && this.raise(d.RestTrailingComma, t.extra.trailingCommaLoc);
          }
          break;
        case "ObjectProperty": {
          const {
            key: o,
            value: c
          } = t;
          this.isPrivateName(o) && this.classScope.usePrivateName(this.getPrivateNameSV(o), o.loc.start), this.toAssignable(c, e);
          break;
        }
        case "SpreadElement":
          throw new Error("Internal @babel/parser error (this is a bug, please report it). SpreadElement should be converted by .toAssignable's caller.");
        case "ArrayExpression":
          this.castNodeTo(t, "ArrayPattern"), this.toAssignableList(t.elements, (i = t.extra) == null ? void 0 : i.trailingCommaLoc, e);
          break;
        case "AssignmentExpression":
          t.operator !== "=" && this.raise(d.MissingEqInAssignment, t.left.loc.end), this.castNodeTo(t, "AssignmentPattern"), delete t.operator, t.left.type === "VoidPattern" && this.raise(d.VoidPatternInitializer, t.left), this.toAssignable(t.left, e);
          break;
        case "ParenthesizedExpression":
          this.toAssignable(r, e);
          break;
      }
    }
    toAssignableObjectExpressionProp(t, e, s) {
      if (t.type === "ObjectMethod")
        this.raise(t.kind === "get" || t.kind === "set" ? d.PatternHasAccessor : d.PatternHasMethod, t.key);
      else if (t.type === "SpreadElement") {
        this.castNodeTo(t, "RestElement");
        const i = t.argument;
        this.checkToRestConversion(i, !1), this.toAssignable(i, s), e || this.raise(d.RestTrailingComma, t);
      } else
        this.toAssignable(t, s);
    }
    toAssignableList(t, e, s) {
      const i = t.length - 1;
      for (let r = 0; r <= i; r++) {
        const n = t[r];
        n && (this.toAssignableListItem(t, r, s), n.type === "RestElement" && (r < i ? this.raise(d.RestTrailingComma, n) : e && this.raise(d.RestTrailingComma, e)));
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
      return e.type === "VoidPattern" && this.raise(d.UnexpectedVoidPattern, e), t.argument = e, this.finishNode(t, "RestElement");
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
            let o = this.parseRestBinding();
            if ((this.hasPlugin("flow") || s & 2) && (o = this.parseFunctionParamType(o)), r.push(o), !this.checkCommaAfterRest(e)) {
              this.expect(t);
              break;
            }
          } else {
            const o = [];
            if (s & 2)
              for (this.match(26) && this.hasPlugin("decorators") && this.raise(d.UnsupportedParameterDecorator, this.state.startLoc); this.match(26); )
                o.push(this.parseDecorator());
            r.push(this.parseBindingElement(s, o));
          }
        }
      return r;
    }
    parseBindingRestProperty(t) {
      return this.next(), this.hasPlugin("discardBinding") && this.match(88) ? (t.argument = this.parseVoidPattern(null), this.raise(d.UnexpectedVoidPattern, t.argument)) : t.argument = this.parseIdentifier(), this.checkCommaAfterRest(125), this.finishNode(t, "RestElement");
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
      return e.type === "VoidPattern" && this.raise(d.VoidPatternInitializer, e), s.left = e, s.right = this.parseMaybeAssignAllowIn(), this.finishNode(s, "AssignmentPattern");
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
    checkLVal(t, e, s = 64, i = !1, r = !1, n = !1, o = !1) {
      var c;
      const p = t.type;
      if (this.isObjectMethod(t)) return;
      const f = this.isOptionalMemberExpression(t);
      if (f || p === "MemberExpression") {
        f && (this.expectPlugin("optionalChainingAssign", t.loc.start), e.type !== "AssignmentExpression" && this.raise(d.InvalidLhsOptionalChaining, t, {
          ancestor: e
        })), s !== 64 && this.raise(d.InvalidPropertyBindingPattern, t);
        return;
      }
      if (p === "Identifier") {
        this.checkIdentifier(t, s, r);
        const {
          name: z
        } = t;
        i && (i.has(z) ? this.raise(d.ParamDupe, t) : i.add(z));
        return;
      } else p === "VoidPattern" && e.type === "CatchClause" && this.raise(d.VoidPatternCatchClauseParam, t);
      const P = fs(t);
      o || (o = P.type === "CallExpression" && (P.callee.type === "Import" || P.callee.type === "Super"));
      const S = this.isValidLVal(p, o, !(n || (c = t.extra) != null && c.parenthesized) && e.type === "AssignmentExpression", s);
      if (S === !0) return;
      if (S === !1) {
        const z = s === 64 ? d.InvalidLhs : d.InvalidLhsBinding;
        this.raise(z, t, {
          ancestor: e
        });
        return;
      }
      let E, k;
      typeof S == "string" ? (E = S, k = p === "ParenthesizedExpression") : [E, k] = S;
      const W = p === "ArrayPattern" || p === "ObjectPattern" ? {
        type: p
      } : e, se = t[E];
      if (Array.isArray(se))
        for (const z of se)
          z && this.checkLVal(z, W, s, i, r, k, !0);
      else se && this.checkLVal(se, W, s, i, r, k, o);
    }
    checkIdentifier(t, e, s = !1) {
      this.state.strict && (s ? Rt(t.name, this.inModule) : Je(t.name)) && (e === 64 ? this.raise(d.StrictEvalArguments, t, {
        referenceName: t.name
      }) : this.raise(d.StrictEvalArgumentsBinding, t, {
        bindingName: t.name
      })), e & 8192 && t.name === "let" && this.raise(d.LetInLexicalBinding, t), e & 64 || this.declareNameFromIdentifier(t, e);
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
          this.raise(d.InvalidRestAssignmentPattern, t);
      }
    }
    checkCommaAfterRest(t) {
      return this.match(12) ? (this.raise(this.lookaheadCharCode() === t ? d.RestTrailingComma : d.ElementAfterRest, this.state.startLoc), !0) : !1;
    }
  }
  const ms = /in(?:stanceof)?|as|satisfies/y;
  function br(a) {
    if (a == null)
      throw new Error(`Unexpected ${a} value.`);
    return a;
  }
  function $s(a) {
    if (!a)
      throw new Error("Assert fail");
  }
  const v = ee`typescript`({
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
  function Pr(a) {
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
  function Hs(a) {
    return a === "private" || a === "public" || a === "protected";
  }
  function Tr(a) {
    return a === "in" || a === "out";
  }
  var Ar = (a) => class extends a {
    constructor(...e) {
      super(...e), this.tsParseInOutModifiers = this.tsParseModifiers.bind(this, {
        allowedModifiers: ["in", "out"],
        disallowedModifiers: ["const", "public", "private", "protected", "readonly", "declare", "abstract", "override"],
        errorTemplate: v.InvalidModifierOnTypeParameter
      }), this.tsParseConstModifier = this.tsParseModifiers.bind(this, {
        allowedModifiers: ["const"],
        disallowedModifiers: ["in", "out"],
        errorTemplate: v.InvalidModifierOnTypeParameterPositions
      }), this.tsParseInOutConstModifiers = this.tsParseModifiers.bind(this, {
        allowedModifiers: ["in", "out", "const"],
        disallowedModifiers: ["public", "private", "protected", "readonly", "declare", "abstract", "override"],
        errorTemplate: v.InvalidModifierOnTypeParameter
      });
    }
    getScopeHandler() {
      return Jt;
    }
    tsIsIdentifier() {
      return R(this.state.type);
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
      if (!R(this.state.type) && this.state.type !== 58 && this.state.type !== 75)
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
      errorTemplate: r = v.InvalidModifierOnTypeMember
    }, n) {
      const o = (p, f, P, S) => {
        f === P && n[S] && this.raise(v.InvalidModifiersOrder, p, {
          orderedModifiers: [P, S]
        });
      }, c = (p, f, P, S) => {
        (n[P] && f === S || n[S] && f === P) && this.raise(v.IncompatibleModifiers, p, {
          modifiers: [P, S]
        });
      };
      for (; ; ) {
        const {
          startLoc: p
        } = this.state, f = this.tsParseModifier(e.concat(s ?? []), i, n.static);
        if (!f) break;
        Hs(f) ? n.accessibility ? this.raise(v.DuplicateAccessibilityModifier, p, {
          modifier: f
        }) : (o(p, f, f, "override"), o(p, f, f, "static"), o(p, f, f, "readonly"), n.accessibility = f) : Tr(f) ? (n[f] && this.raise(v.DuplicateModifier, p, {
          modifier: f
        }), n[f] = !0, o(p, f, "in", "out")) : (hasOwnProperty.call(n, f) ? this.raise(v.DuplicateModifier, p, {
          modifier: f
        }) : (o(p, f, "static", "readonly"), o(p, f, "static", "override"), o(p, f, "override", "readonly"), o(p, f, "abstract", "override"), c(p, f, "declare", "override"), c(p, f, "static", "abstract")), n[f] = !0), s != null && s.includes(f) && this.raise(r, p, {
          modifier: f
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
      return br(this.tsParseDelimitedListWorker(e, s, !0, i));
    }
    tsParseDelimitedListWorker(e, s, i, r) {
      const n = [];
      let o = -1;
      for (; !this.tsIsListTerminator(e); ) {
        o = -1;
        const c = s();
        if (c == null)
          return;
        if (n.push(c), this.eat(12)) {
          o = this.state.lastTokStartLoc.index;
          continue;
        }
        if (this.tsIsListTerminator(e))
          break;
        i && this.expect(12);
        return;
      }
      return r && (r.value = o), n;
    }
    tsParseBracketedList(e, s, i, r, n) {
      r || (i ? this.expect(0) : this.expect(47));
      const o = this.tsParseDelimitedList(e, s, n);
      return i ? this.expect(3) : this.expect(48), o;
    }
    tsParseImportType() {
      const e = this.startNode();
      return this.expect(83), this.expect(10), this.match(134) ? e.argument = this.parseStringLiteral(this.state.value) : (this.raise(v.UnsupportedImportTypeArgument, this.state.startLoc), e.argument = super.parseExprAtom()), this.eat(12) ? e.options = this.tsParseImportTypeOptions() : e.options = null, this.expect(11), this.eat(16) && (e.qualifier = this.tsParseEntityName(3)), this.match(47) && (e.typeParameters = this.tsParseTypeArguments()), this.finishNode(e, "TSImportType");
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
        R(i) || i === 134 ? s.push(super.parsePropertyDefinition(null)) : this.unexpected(), this.eat(12);
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
      return s.params = this.tsParseBracketedList("TypeParametersOrArguments", this.tsParseTypeParameter.bind(this, e), !1, !0, i), s.params.length === 0 && this.raise(v.EmptyTypeParameters, s), i.value !== -1 && this.addExtra(s, "trailingComma", i.value), this.finishNode(s, "TSTypeParameterDeclaration");
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
        (i === "AssignmentPattern" || i === "TSParameterProperty") && this.raise(v.UnsupportedSignatureParameterKind, s, {
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
      return this.next(), R(this.state.type) ? (this.next(), this.match(14)) : !1;
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
        s && this.raise(v.ReadonlyForMethodSignature, e);
        const i = e;
        i.kind && this.match(47) && this.raise(v.AccessorCannotHaveTypeParameters, this.state.curPosition()), this.tsFillSignature(14, i), this.tsParseTypeMemberSemicolon();
        const r = "parameters", n = "typeAnnotation";
        if (i.kind === "get")
          i[r].length > 0 && (this.raise(d.BadGetterArity, this.state.curPosition()), this.isThisParam(i[r][0]) && this.raise(v.AccessorCannotDeclareThisParameter, this.state.curPosition()));
        else if (i.kind === "set") {
          if (i[r].length !== 1)
            this.raise(d.BadSetterArity, this.state.curPosition());
          else {
            const o = i[r][0];
            this.isThisParam(o) && this.raise(v.AccessorCannotDeclareThisParameter, this.state.curPosition()), o.type === "Identifier" && o.optional && this.raise(v.SetAccessorCannotHaveOptionalParameter, this.state.curPosition()), o.type === "RestElement" && this.raise(v.SetAccessorCannotHaveRestParameter, this.state.curPosition());
          }
          i[n] && this.raise(v.SetAccessorCannotHaveReturnType, i[n]);
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
        s && r !== "TSRestType" && r !== "TSOptionalType" && !(r === "TSNamedTupleMember" && i.optional) && this.raise(v.OptionalTypeBeforeRequired, i), s || (s = r === "TSNamedTupleMember" && i.optional || r === "TSOptionalType");
      }), this.finishNode(e, "TSTupleType");
    }
    tsParseTupleElementType() {
      const e = this.state.startLoc, s = this.eat(21), {
        startLoc: i
      } = this.state;
      let r, n, o, c;
      const f = q(this.state.type) ? this.lookaheadCharCode() : null;
      if (f === 58)
        r = !0, o = !1, n = this.parseIdentifier(!0), this.expect(14), c = this.tsParseType();
      else if (f === 63) {
        o = !0;
        const P = this.state.value, S = this.tsParseNonArrayType();
        this.lookaheadCharCode() === 58 ? (r = !0, n = this.createIdentifier(this.startNodeAt(i), P), this.expect(17), this.expect(14), c = this.tsParseType()) : (r = !1, c = S, this.expect(17));
      } else
        c = this.tsParseType(), o = this.eat(17), r = this.eat(14);
      if (r) {
        let P;
        n ? (P = this.startNodeAt(i), P.optional = o, P.label = n, P.elementType = c, this.eat(17) && (P.optional = !0, this.raise(v.TupleOptionalAfterType, this.state.lastTokStartLoc))) : (P = this.startNodeAt(i), P.optional = o, this.raise(v.InvalidTupleMemberLabel, c), P.label = c, P.elementType = this.tsParseType()), c = this.finishNode(P, "TSNamedTupleMember");
      } else if (o) {
        const P = this.startNodeAt(i);
        P.typeAnnotation = c, c = this.finishNode(P, "TSOptionalType");
      }
      if (s) {
        const P = this.startNodeAt(e);
        P.typeAnnotation = c, c = this.finishNode(P, "TSRestType");
      }
      return c;
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
          if (R(e) || e === 88 || e === 84) {
            const s = e === 88 ? "TSVoidKeyword" : e === 84 ? "TSNullKeyword" : Pr(this.state.value);
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
          this.raise(v.UnexpectedReadonly, e);
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
      return lt(this.state.type) && !this.state.containsEsc ? this.tsParseTypeOperator() : this.isContextual(115) ? this.tsParseInferType() : this.tsInAllowConditionalTypesContext(() => this.tsParseArrayTypeOrHigher());
    }
    tsParseUnionOrIntersectionType(e, s, i) {
      const r = this.startNode(), n = this.eat(i), o = [];
      do
        o.push(s());
      while (this.eat(i));
      return o.length === 1 && !n ? o[0] : (r.types = o, this.finishNode(r, e));
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
      if (R(this.state.type) || this.match(78))
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
          let c = this.tsParseThisTypeOrThisTypePredicate();
          return c.type === "TSThisType" ? (i.parameterName = c, i.asserts = !0, i.typeAnnotation = null, c = this.finishNode(i, "TSTypePredicate")) : (this.resetStartLocationFromNode(c, i), c.asserts = !0), s.typeAnnotation = c, this.finishNode(s, "TSTypeAnnotation");
        }
        const n = this.tsIsIdentifier() && this.tsTryParse(this.tsParseTypePredicatePrefix.bind(this));
        if (!n)
          return r ? (i.parameterName = this.parseIdentifier(), i.asserts = r, i.typeAnnotation = null, s.typeAnnotation = this.finishNode(i, "TSTypePredicate"), this.finishNode(s, "TSTypeAnnotation")) : this.tsParseTypeAnnotation(!1, s);
        const o = this.tsParseTypeAnnotation(!1);
        return i.parameterName = n, i.typeAnnotation = o, i.asserts = r, s.typeAnnotation = this.finishNode(i, "TSTypePredicate"), this.finishNode(s, "TSTypeAnnotation");
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
      return this.next(), !R(this.state.type) && !this.match(78) ? !1 : (e && this.raise(d.InvalidEscapedReservedWord, this.state.lastTokStartLoc, {
        reservedWord: "asserts"
      }), !0);
    }
    tsParseTypeAnnotation(e = !0, s = this.startNode()) {
      return this.tsInType(() => {
        e && this.expect(14), s.typeAnnotation = this.tsParseType();
      }), this.finishNode(s, "TSTypeAnnotation");
    }
    tsParseType() {
      $s(this.state.inType);
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
      this.getPluginOption("typescript", "disallowAmbiguousJSXLike") && this.raise(v.ReservedTypeAssertion, this.state.startLoc);
      const e = this.startNode();
      return e.typeAnnotation = this.tsInType(() => (this.next(), this.match(75) ? this.tsParseTypeReference() : this.tsParseType())), this.expect(48), e.expression = this.parseMaybeUnary(), this.finishNode(e, "TSTypeAssertion");
    }
    tsParseHeritageClause(e) {
      const s = this.state.startLoc, i = this.tsParseDelimitedList("HeritageClauseElement", () => {
        const r = this.startNode();
        return r.expression = this.tsParseEntityName(3), this.match(47) && (r.typeParameters = this.tsParseTypeArguments()), this.finishNode(r, "TSExpressionWithTypeArguments");
      });
      return i.length || this.raise(v.EmptyHeritageClauseType, s, {
        token: e
      }), i;
    }
    tsParseInterfaceDeclaration(e, s = {}) {
      if (this.hasFollowingLineBreak()) return null;
      this.expectContextual(129), s.declare && (e.declare = !0), R(this.state.type) ? (e.id = this.parseIdentifier(), this.checkIdentifier(e.id, 130)) : (e.id = null, this.raise(v.MissingInterfaceName, this.state.startLoc)), e.typeParameters = this.tsTryParseTypeParameters(this.tsParseInOutConstModifiers), this.eat(81) && (e.extends = this.tsParseHeritageClause("extends"));
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
      if (this.curContext() !== B.brace) {
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
      return e.importKind === "type" && r.type !== "TSExternalModuleReference" && this.raise(v.ImportAliasHasImportType, r), e.moduleReference = r, this.semicolon(), this.finishNode(e, "TSImportEqualsDeclaration");
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
              return this.raise(v.InvalidModifierOnUsingDeclaration, this.state.startLoc, "declare"), e.declare = !0, this.parseVarStatement(e, "using", !0);
            break;
          case 96:
            if (this.isAwaitUsing())
              return this.raise(v.InvalidModifierOnAwaitUsingDeclaration, this.state.startLoc, "declare"), e.declare = !0, this.next(), this.parseVarStatement(e, "await using", !0);
            break;
          case 129: {
            const i = this.tsParseInterfaceDeclaration(e, {
              declare: !0
            });
            if (i) return i;
          }
          default:
            if (R(s))
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
          if (this.tsCheckLineTerminator(i) && (this.match(80) || R(this.state.type)))
            return this.tsParseAbstractDeclaration(e, r);
          break;
        case 127:
          if (this.tsCheckLineTerminator(i)) {
            if (this.match(134))
              return this.tsParseAmbientExternalModuleDeclaration(e);
            if (R(this.state.type))
              return e.kind = "module", this.tsParseModuleOrNamespaceDeclaration(e);
          }
          break;
        case 128:
          if (this.tsCheckLineTerminator(i) && R(this.state.type))
            return e.kind = "namespace", this.tsParseModuleOrNamespaceDeclaration(e);
          break;
        case 130:
          if (this.tsCheckLineTerminator(i) && R(this.state.type))
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
      return e.params = this.tsInType(() => this.tsInTopLevelContext(() => (this.expect(47), this.tsParseDelimitedList("TypeParametersOrArguments", this.tsParseType.bind(this))))), e.params.length === 0 ? this.raise(v.EmptyTypeArguments, e) : !this.state.inType && this.curContext() === B.brace && this.reScan_lt_gt(), this.expect(48), this.finishNode(e, "TSTypeParameterInstantiation");
    }
    tsIsDeclarationStart() {
      return et(this.state.type);
    }
    isExportDefaultSpecifier() {
      return this.tsIsDeclarationStart() ? !1 : super.isExportDefaultSpecifier();
    }
    parseBindingElement(e, s) {
      const i = s.length ? s[0].loc.start : this.state.startLoc, r = {};
      this.tsParseModifiers({
        allowedModifiers: ["public", "private", "protected", "override", "readonly"]
      }, r);
      const n = r.accessibility, o = r.override, c = r.readonly;
      !(e & 4) && (n || c || o) && this.raise(v.UnexpectedParameterModifier, i);
      const p = this.parseMaybeDefault();
      e & 2 && this.parseFunctionParamType(p);
      const f = this.parseMaybeDefault(p.loc.start, p);
      if (n || c || o) {
        const P = this.startNodeAt(i);
        return s.length && (P.decorators = s), n && (P.accessibility = n), c && (P.readonly = c), o && (P.override = o), f.type !== "Identifier" && f.type !== "AssignmentPattern" && this.raise(v.UnsupportedParameterPropertyKind, P), P.parameter = f, this.finishNode(P, "TSParameterProperty");
      }
      return s.length && (p.decorators = s), f;
    }
    isSimpleParameter(e) {
      return e.type === "TSParameterProperty" && super.isSimpleParameter(e.parameter) || super.isSimpleParameter(e);
    }
    tsDisallowOptionalPattern(e) {
      for (const s of e.params)
        s.type !== "Identifier" && s.optional && !this.state.isAmbientContext && this.raise(v.PatternIsOptional, s);
    }
    setArrowFunctionParameters(e, s, i) {
      super.setArrowFunctionParameters(e, s, i), this.tsDisallowOptionalPattern(e);
    }
    parseFunctionBodyAndFinish(e, s, i = !1) {
      this.match(14) && (e.returnType = this.tsParseTypeOrTypePredicateAnnotation(14));
      const r = s === "FunctionDeclaration" ? "TSDeclareFunction" : s === "ClassMethod" || s === "ClassPrivateMethod" ? "TSDeclareMethod" : void 0;
      return r && !this.match(5) && this.isLineTerminator() ? this.finishNode(e, r) : r === "TSDeclareFunction" && this.state.isAmbientContext && (this.raise(v.DeclareFunctionHasImplementation, e), e.declare) ? super.parseFunctionBodyAndFinish(e, r, i) : (this.tsDisallowOptionalPattern(e), super.parseFunctionBodyAndFinish(e, s, i));
    }
    registerFunctionStatementId(e) {
      !e.body && e.id ? this.checkIdentifier(e.id, 1024) : super.registerFunctionStatementId(e);
    }
    tsCheckForInvalidTypeCasts(e) {
      e.forEach((s) => {
        (s == null ? void 0 : s.type) === "TSTypeCastExpression" && this.raise(v.UnexpectedTypeAnnotation, s.typeAnnotation);
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
        const o = this.startNodeAt(s);
        return o.expression = e, this.finishNode(o, "TSNonNullExpression");
      }
      let n = !1;
      if (this.match(18) && this.lookaheadCharCode() === 60) {
        if (i)
          return r.stop = !0, e;
        r.optionalChainMember = n = !0, this.next();
      }
      if (this.match(47) || this.match(51)) {
        let o;
        const c = this.tsTryParseAndCatch(() => {
          if (!i && this.atPossibleAsyncArrow(e)) {
            const S = this.tsTryParseGenericAsyncArrowFunction(s);
            if (S)
              return r.stop = !0, S;
          }
          const p = this.tsParseTypeArgumentsInExpression();
          if (!p) return;
          if (n && !this.match(10)) {
            o = this.state.curPosition();
            return;
          }
          if (ht(this.state.type)) {
            const S = super.parseTaggedTemplateExpression(e, s, r);
            return S.typeParameters = p, S;
          }
          if (!i && this.eat(10)) {
            const S = this.startNodeAt(s);
            return S.callee = e, S.arguments = this.parseCallExpressionArguments(), this.tsCheckForInvalidTypeCasts(S.arguments), S.typeParameters = p, r.optionalChainMember && (S.optional = n), this.finishCallExpression(S, r.optionalChainMember);
          }
          const f = this.state.type;
          if (f === 48 || f === 52 || f !== 10 && f !== 93 && f !== 120 && Oe(f) && !this.hasPrecedingLineBreak())
            return;
          const P = this.startNodeAt(s);
          return P.expression = e, P.typeParameters = p, this.finishNode(P, "TSInstantiationExpression");
        });
        if (o && this.unexpected(o, 10), c)
          return c.type === "TSInstantiationExpression" && ((this.match(16) || this.match(18) && this.lookaheadCharCode() !== 40) && this.raise(v.InvalidPropertyAccessAfterInstantiationExpression, this.state.startLoc), !this.match(16) && !this.match(18) && (c.expression = super.stopParseSubscript(e, r))), c;
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
      if (ct(58) > i && !this.hasPrecedingLineBreak() && (this.isContextual(93) || (r = this.isContextual(120)))) {
        const n = this.startNodeAt(s);
        return n.expression = e, n.typeAnnotation = this.tsInType(() => (this.next(), this.match(75) ? (r && this.raise(d.UnexpectedKeyword, this.state.startLoc, {
          keyword: "const"
        }), this.tsParseTypeReference()) : this.tsParseType())), this.finishNode(n, r ? "TSSatisfiesExpression" : "TSAsExpression"), this.reScan_lt_gt(), this.parseExprOp(n, s, i);
      }
      return super.parseExprOp(e, s, i);
    }
    checkReservedWord(e, s, i, r) {
      this.state.isAmbientContext || super.checkReservedWord(e, s, i, r);
    }
    checkImportReflection(e) {
      super.checkImportReflection(e), e.module && e.importKind !== "value" && this.raise(v.ImportReflectionHasImportType, e.specifiers[0].loc.start);
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
      if (R(this.state.type) && this.lookaheadCharCode() === 61)
        return e.importKind = "value", this.tsParseImportEqualsDeclaration(e);
      if (this.isContextual(130)) {
        const i = this.parseMaybeImportPhase(e, !1);
        if (this.lookaheadCharCode() === 61)
          return this.tsParseImportEqualsDeclaration(e, i);
        s = super.parseImportSpecifiersAndAfter(e, i);
      } else
        s = super.parseImport(e);
      return s.importKind === "type" && s.specifiers.length > 1 && s.specifiers[0].type === "ImportDefaultSpecifier" && this.raise(v.TypeImportCannotSpecifyDefaultAndNamed, s), s;
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
        return this.raiseOverwrite(v.UsingDeclarationInAmbientContext, e, s), n;
      for (const {
        id: o,
        init: c
      } of n.declarations)
        c && (s === "var" || s === "let" || o.typeAnnotation ? this.raise(v.InitializerNotAllowedInAmbientContext, c) : Sr(c, this.hasPlugin("estree")) || this.raise(v.ConstInitializerMustBeStringOrNumericLiteralOrLiteralEnumReference, c));
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
      return s.some((i) => Hs(i) ? e.accessibility === i : !!e[i]);
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
        errorTemplate: v.InvalidModifierOnTypeParameterPositions
      }, s);
      const n = () => {
        this.tsIsStartOfStaticBlocks() ? (this.next(), this.next(), this.tsHasSomeModifiers(s, r) && this.raise(v.StaticBlockCannotHaveModifier, this.state.curPosition()), super.parseClassStaticBlock(e, s)) : this.parseClassMemberWithIsStatic(e, s, i, !!s.static);
      };
      s.declare ? this.tsInAmbientContext(n) : n();
    }
    parseClassMemberWithIsStatic(e, s, i, r) {
      const n = this.tsTryParseIndexSignature(s);
      if (n) {
        e.body.push(n), s.abstract && this.raise(v.IndexSignatureHasAbstract, s), s.accessibility && this.raise(v.IndexSignatureHasAccessibility, s, {
          modifier: s.accessibility
        }), s.declare && this.raise(v.IndexSignatureHasDeclare, s), s.override && this.raise(v.IndexSignatureHasOverride, s);
        return;
      }
      !this.state.inAbstractClass && s.abstract && this.raise(v.NonAbstractClassHasAbstractMethod, s), s.override && (i.hadSuperClass || this.raise(v.OverrideNotInSubClass, s)), super.parseClassMemberWithIsStatic(e, s, i, r);
    }
    parsePostMemberNameModifiers(e) {
      this.eat(17) && (e.optional = !0), e.readonly && this.match(10) && this.raise(v.ClassMethodHasReadonly, e), e.declare && this.match(10) && this.raise(v.ClassMethodHasDeclare, e);
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
        throw this.raise(v.ExpectedAmbientAfterExportDeclare, this.state.startLoc);
      const n = R(this.state.type) && this.tsTryParseExportDeclaration() || super.parseExportDeclaration(e);
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
      if (this.parseClassPropertyAnnotation(e), this.state.isAmbientContext && !(e.readonly && !e.typeAnnotation) && this.match(29) && this.raise(v.DeclareClassFieldHasInitializer, this.state.startLoc), e.abstract && this.match(29)) {
        const {
          key: s
        } = e;
        this.raise(v.AbstractPropertyHasInitializer, this.state.startLoc, {
          propertyName: s.type === "Identifier" && !e.computed ? s.name : `[${this.input.slice(this.offsetToSourcePos(s.start), this.offsetToSourcePos(s.end))}]`
        });
      }
      return super.parseClassProperty(e);
    }
    parseClassPrivateProperty(e) {
      return e.abstract && this.raise(v.PrivateElementHasAbstract, e), e.accessibility && this.raise(v.PrivateElementHasAccessibility, e, {
        modifier: e.accessibility
      }), this.parseClassPropertyAnnotation(e), super.parseClassPrivateProperty(e);
    }
    parseClassAccessorProperty(e) {
      return this.parseClassPropertyAnnotation(e), e.optional && this.raise(v.AccessorCannotBeOptional, e), super.parseClassAccessorProperty(e);
    }
    pushClassMethod(e, s, i, r, n, o) {
      const c = this.tsTryParseTypeParameters(this.tsParseConstModifier);
      c && n && this.raise(v.ConstructorHasTypeParameters, c);
      const {
        declare: p = !1,
        kind: f
      } = s;
      p && (f === "get" || f === "set") && this.raise(v.DeclareAccessor, s, {
        kind: f
      }), c && (s.typeParameters = c), super.pushClassMethod(e, s, i, r, n, o);
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
    parseObjPropValue(e, s, i, r, n, o, c) {
      const p = this.tsTryParseTypeParameters(this.tsParseConstModifier);
      return p && (e.typeParameters = p), super.parseObjPropValue(e, s, i, r, n, o, c);
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
      var i, r, n, o, c;
      let p, f, P;
      if (this.hasPlugin("jsx") && (this.match(143) || this.match(47))) {
        if (p = this.state.clone(), f = this.tryParse(() => super.parseMaybeAssign(e, s), p), !f.error) return f.node;
        const {
          context: k
        } = this.state, W = k[k.length - 1];
        (W === B.j_oTag || W === B.j_expr) && k.pop();
      }
      if (!((i = f) != null && i.error) && !this.match(47))
        return super.parseMaybeAssign(e, s);
      (!p || p === this.state) && (p = this.state.clone());
      let S;
      const E = this.tryParse((k) => {
        var W, se;
        S = this.tsParseTypeParameters(this.tsParseConstModifier);
        const z = super.parseMaybeAssign(e, s);
        return (z.type !== "ArrowFunctionExpression" || (W = z.extra) != null && W.parenthesized) && k(), ((se = S) == null ? void 0 : se.params.length) !== 0 && this.resetStartLocationFromNode(z, S), z.typeParameters = S, z;
      }, p);
      if (!E.error && !E.aborted)
        return S && this.reportReservedArrowTypeParam(S), E.node;
      if (!f && ($s(!this.hasPlugin("jsx")), P = this.tryParse(() => super.parseMaybeAssign(e, s), p), !P.error))
        return P.node;
      if ((r = f) != null && r.node)
        return this.state = f.failState, f.node;
      if (E.node)
        return this.state = E.failState, S && this.reportReservedArrowTypeParam(S), E.node;
      if ((n = P) != null && n.node)
        return this.state = P.failState, P.node;
      throw ((o = f) == null ? void 0 : o.error) || E.error || ((c = P) == null ? void 0 : c.error);
    }
    reportReservedArrowTypeParam(e) {
      var s;
      e.params.length === 1 && !e.params[0].constraint && !((s = e.extra) != null && s.trailingComma) && this.getPluginOption("typescript", "disallowAmbiguousJSXLike") && this.raise(v.ReservedArrowTypeParam, e);
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
          s ? this.expressionScope.recordArrowParameterBindingError(v.UnexpectedTypeCastInParameter, e) : this.raise(v.UnexpectedTypeCastInParameter, e), this.toAssignable(e.expression, s);
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
      return i.type === "AssignmentPattern" && i.typeAnnotation && i.right.start < i.typeAnnotation.start && this.raise(v.TypeAnnotationAfterAssign, i.typeAnnotation), i;
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
        return this.hasFollowingLineBreak() ? null : (e.abstract = !0, this.raise(v.NonClassMethodPropertyHasAbstractModifier, e), this.tsParseInterfaceDeclaration(e));
      throw this.unexpected(null, 80);
    }
    parseMethod(e, s, i, r, n, o, c) {
      const p = super.parseMethod(e, s, i, r, n, o, c);
      if ((p.abstract || p.type === "TSAbstractMethodDefinition") && (this.hasPlugin("estree") ? p.value : p).body) {
        const {
          key: S
        } = p;
        this.raise(v.AbstractMethodHasImplementation, p, {
          methodName: S.type === "Identifier" && !p.computed ? S.name : `[${this.input.slice(this.offsetToSourcePos(S.start), this.offsetToSourcePos(S.end))}]`
        });
      }
      return p;
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
      let o = e[r], c, p = !1, f = !0;
      const P = o.loc.start;
      if (this.isContextual(93)) {
        const E = this.parseIdentifier();
        if (this.isContextual(93)) {
          const k = this.parseIdentifier();
          q(this.state.type) ? (p = !0, o = E, c = s ? this.parseIdentifier() : this.parseModuleExportName(), f = !1) : (c = k, f = !1);
        } else q(this.state.type) ? (f = !1, c = s ? this.parseIdentifier() : this.parseModuleExportName()) : (p = !0, o = E);
      } else q(this.state.type) && (p = !0, s ? (o = this.parseIdentifier(!0), this.isContextual(93) || this.checkReservedWord(o.name, o.loc.start, !0, !0)) : o = this.parseModuleExportName());
      p && i && this.raise(s ? v.TypeModifierIsUsedInTypeImports : v.TypeModifierIsUsedInTypeExports, P), e[r] = o, e[n] = c;
      const S = s ? "importKind" : "exportKind";
      e[S] = p ? "type" : "value", f && this.eatContextual(93) && (e[n] = s ? this.parseIdentifier() : this.parseModuleExportName()), e[n] || (e[n] = this.cloneIdentifier(e[r])), s && this.checkIdentifier(e[n], p ? 4098 : 4096);
    }
    fillOptionalPropertiesForTSESLint(e) {
      var s, i, r, n, o, c, p, f, P, S, E, k, W, se, z, Q, ft, rt, Zs, Qs, ei, ti, si, ii, ri, ai, ni, oi, li, ci, hi, ui, pi, di, fi, mi, yi, xi, gi, bi, Pi, Ti, Ai, wi, Si, Ci, Ii, Ei;
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
          (o = e.accessibility) != null || (e.accessibility = void 0), (c = e.decorators) != null || (e.decorators = []), (p = e.override) != null || (e.override = !1), (f = e.readonly) != null || (e.readonly = !1), (P = e.static) != null || (e.static = !1);
          return;
        case "TSEmptyBodyFunctionExpression":
          e.body = null;
        case "TSDeclareFunction":
        case "FunctionDeclaration":
        case "FunctionExpression":
        case "ClassMethod":
        case "ClassPrivateMethod":
          (S = e.declare) != null || (e.declare = !1), (E = e.returnType) != null || (e.returnType = void 0), (k = e.typeParameters) != null || (e.typeParameters = void 0);
          return;
        case "Property":
          (W = e.optional) != null || (e.optional = !1);
          return;
        case "TSMethodSignature":
        case "TSPropertySignature":
          (se = e.optional) != null || (e.optional = !1);
        case "TSIndexSignature":
          (z = e.accessibility) != null || (e.accessibility = void 0), (Q = e.readonly) != null || (e.readonly = !1), (ft = e.static) != null || (e.static = !1);
          return;
        case "TSAbstractPropertyDefinition":
        case "PropertyDefinition":
        case "TSAbstractAccessorProperty":
        case "AccessorProperty":
          (rt = e.declare) != null || (e.declare = !1), (Zs = e.definite) != null || (e.definite = !1), (Qs = e.readonly) != null || (e.readonly = !1), (ei = e.typeAnnotation) != null || (e.typeAnnotation = void 0);
        case "TSAbstractMethodDefinition":
        case "MethodDefinition":
          (ti = e.accessibility) != null || (e.accessibility = void 0), (si = e.decorators) != null || (e.decorators = []), (ii = e.override) != null || (e.override = !1), (ri = e.optional) != null || (e.optional = !1);
          return;
        case "ClassExpression":
          (ai = e.id) != null || (e.id = null);
        case "ClassDeclaration":
          (ni = e.abstract) != null || (e.abstract = !1), (oi = e.declare) != null || (e.declare = !1), (li = e.decorators) != null || (e.decorators = []), (ci = e.implements) != null || (e.implements = []), (hi = e.superTypeArguments) != null || (e.superTypeArguments = void 0), (ui = e.typeParameters) != null || (e.typeParameters = void 0);
          return;
        case "TSTypeAliasDeclaration":
        case "VariableDeclaration":
          (pi = e.declare) != null || (e.declare = !1);
          return;
        case "VariableDeclarator":
          (di = e.definite) != null || (e.definite = !1);
          return;
        case "TSEnumDeclaration":
          (fi = e.const) != null || (e.const = !1), (mi = e.declare) != null || (e.declare = !1);
          return;
        case "TSEnumMember":
          (yi = e.computed) != null || (e.computed = !1);
          return;
        case "TSImportType":
          (xi = e.qualifier) != null || (e.qualifier = null), (gi = e.options) != null || (e.options = null);
          return;
        case "TSInterfaceDeclaration":
          (bi = e.declare) != null || (e.declare = !1), (Pi = e.extends) != null || (e.extends = []);
          return;
        case "TSMappedType":
          (Ti = e.optional) != null || (e.optional = !1), (Ai = e.readonly) != null || (e.readonly = void 0);
          return;
        case "TSModuleDeclaration":
          (wi = e.declare) != null || (e.declare = !1), (Si = e.global) != null || (e.global = e.kind === "global");
          return;
        case "TSTypeParameter":
          (Ci = e.const) != null || (e.const = !1), (Ii = e.in) != null || (e.in = !1), (Ei = e.out) != null || (e.out = !1);
          return;
      }
    }
    chStartsBindingIdentifierAndNotRelationalOperator(e, s) {
      if (je(e)) {
        if (ms.lastIndex = s, ms.test(this.input)) {
          const i = this.codePointAtPos(ms.lastIndex);
          if (!Me(i) && i !== 92)
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
  function wr(a) {
    if (a.type !== "MemberExpression") return !1;
    const {
      computed: t,
      property: e
    } = a;
    return t && e.type !== "StringLiteral" && (e.type !== "TemplateLiteral" || e.expressions.length > 0) ? !1 : qs(a.object);
  }
  function Sr(a, t) {
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
    return !!(Vs(a, t) || Cr(a, t) || s === "TemplateLiteral" && a.expressions.length === 0 || wr(a));
  }
  function Vs(a, t) {
    return t ? a.type === "Literal" && (typeof a.value == "number" || "bigint" in a) : a.type === "NumericLiteral" || a.type === "BigIntLiteral";
  }
  function Cr(a, t) {
    if (a.type === "UnaryExpression") {
      const {
        operator: e,
        argument: s
      } = a;
      if (e === "-" && Vs(s, t))
        return !0;
    }
    return !1;
  }
  function qs(a) {
    return a.type === "Identifier" ? !0 : a.type !== "MemberExpression" || a.computed ? !1 : qs(a.object);
  }
  const Ws = ee`placeholders`({
    ClassNameIsRequired: "A class name is required.",
    UnexpectedSpace: "Unexpected space in placeholder."
  });
  var Ir = (a) => class extends a {
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
      const n = this.state.strict, o = this.parsePlaceholder("Identifier");
      if (o)
        if (this.match(81) || this.match(133) || this.match(5))
          e.id = o;
        else {
          if (i || !s)
            return e.id = null, e.body = this.finishPlaceholder(o, "ClassBody"), this.finishNode(e, r);
          throw this.raise(Ws.ClassNameIsRequired, this.state.startLoc);
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
        if (this.isUnparsedContextual(e, "from") && this.input.startsWith(Te(133), this.nextTokenStartSince(e + 4)))
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
      this.state.start > this.offsetToSourcePos(this.state.lastTokEndLoc.index) && this.raise(Ws.UnexpectedSpace, this.state.lastTokEndLoc);
    }
  }, Er = (a) => class extends a {
    parseV8Intrinsic() {
      if (this.match(54)) {
        const e = this.state.startLoc, s = this.startNode();
        if (this.next(), R(this.state.type)) {
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
  const Ks = ["minimal", "fsharp", "hack", "smart"], Gs = ["^^", "@@", "^", "%", "#"];
  function Nr(a) {
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
      if (!Ks.includes(s)) {
        const i = Ks.map((r) => `"${r}"`).join(", ");
        throw new Error(`"pipelineOperator" requires "proposal" option whose value must be one of: ${i}.`);
      }
      if (s === "hack") {
        var e;
        if (a.has("placeholders"))
          throw new Error("Cannot combine placeholders plugin and Hack-style pipes.");
        if (a.has("v8intrinsic"))
          throw new Error("Cannot combine v8intrinsic plugin and Hack-style pipes.");
        const i = a.get("pipelineOperator").topicToken;
        if (!Gs.includes(i)) {
          const r = Gs.map((n) => `"${n}"`).join(", ");
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
  const Js = {
    estree: Ue,
    jsx: Ct,
    flow: Gt,
    typescript: Ar,
    v8intrinsic: Er,
    placeholders: Ir
  }, vr = Object.keys(Js);
  class kr extends gr {
    checkProto(t, e, s, i) {
      if (t.type === "SpreadElement" || this.isObjectMethod(t) || t.computed || t.shorthand)
        return s;
      const r = t.key;
      return (r.type === "Identifier" ? r.name : r.value) === "__proto__" ? e ? (this.raise(d.RecordNoProto, r), !0) : (s && (i ? i.doubleProtoLoc === null && (i.doubleProtoLoc = r.loc.start) : this.raise(d.DuplicateProto, r)), !0) : s;
    }
    shouldExitDescending(t, e) {
      return t.type === "ArrowFunctionExpression" && this.offsetToSourcePos(t.start) === e;
    }
    getExpression() {
      if (this.enterInitialScopes(), this.nextToken(), this.match(140))
        throw this.raise(d.ParseExpressionEmptyInput, this.state.startLoc);
      const t = this.parseExpression();
      if (!this.match(140))
        throw this.raise(d.ParseExpressionExpectsEOF, this.state.startLoc, {
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
        let c = this.parseYield(s);
        return e && (c = e.call(this, c, s)), c;
      }
      let r;
      t ? r = !1 : (t = new es(), r = !0);
      const {
        type: n
      } = this.state;
      (n === 10 || R(n)) && (this.state.potentialArrowAt = this.state.start);
      let o = this.parseMaybeConditional(t);
      if (e && (o = e.call(this, o, s)), Qe(this.state.type)) {
        const c = this.startNodeAt(s), p = this.state.value;
        if (c.operator = p, this.match(29)) {
          this.toAssignable(o, !0), c.left = o;
          const f = s.index;
          t.doubleProtoLoc != null && t.doubleProtoLoc.index >= f && (t.doubleProtoLoc = null), t.shorthandAssignLoc != null && t.shorthandAssignLoc.index >= f && (t.shorthandAssignLoc = null), t.privateKeyLoc != null && t.privateKeyLoc.index >= f && (this.checkDestructuringPrivate(t), t.privateKeyLoc = null), t.voidPatternLoc != null && t.voidPatternLoc.index >= f && (t.voidPatternLoc = null);
        } else
          c.left = o;
        return this.next(), c.right = this.parseMaybeAssign(), this.checkLVal(o, this.finishNode(c, "AssignmentExpression"), void 0, void 0, void 0, void 0, p === "||=" || p === "&&=" || p === "??="), c;
      } else r && this.checkExpressionErrors(t, !0);
      if (i) {
        const {
          type: c
        } = this.state;
        if ((this.hasPlugin("v8intrinsic") ? Oe(c) : Oe(c) && !this.match(54)) && !this.isAmbiguousPrefixOrIdentifier())
          return this.raiseOverwrite(d.YieldNotInGeneratorFunction, s), this.parseYield(s);
      }
      return o;
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
        (s >= ct(58) || !this.prodParam.hasIn || !this.match(58)) && this.raise(d.PrivateInExpectedIn, t, {
          identifierName: r
        }), this.classScope.usePrivateName(r, t.loc.start);
      }
      const i = this.state.type;
      if (Mt(i) && (this.prodParam.hasIn || !this.match(58))) {
        let r = ct(i);
        if (r > s) {
          if (i === 39) {
            if (this.expectPlugin("pipelineOperator"), this.state.inFSharpPipelineDirectBody)
              return t;
            this.checkPipelineAtInfixOperator(t, e);
          }
          const n = this.startNodeAt(e);
          n.left = t, n.operator = this.state.value;
          const o = i === 41 || i === 42, c = i === 40;
          if (c && (r = ct(42)), this.next(), i === 39 && this.hasPlugin(["pipelineOperator", {
            proposal: "minimal"
          }]) && this.state.type === 96 && this.prodParam.hasAwait)
            throw this.raise(d.UnexpectedAwaitAfterPipelineBody, this.state.startLoc);
          n.right = this.parseExprOpRightExpr(i, r);
          const p = this.finishNode(n, o || c ? "LogicalExpression" : "BinaryExpression"), f = this.state.type;
          if (c && (f === 41 || f === 42) || o && f === 40)
            throw this.raise(d.MixingCoalesceWithLogical, this.state.startLoc);
          return this.parseExprOp(p, e, s);
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
                throw this.raise(d.PipeBodyIsTighter, this.state.startLoc);
              return this.parseSmartPipelineBodyInStyle(this.parseExprOpBaseRightExpr(t, e), s);
            });
        default:
          return this.parseExprOpBaseRightExpr(t, e);
      }
    }
    parseExprOpBaseRightExpr(t, e) {
      const s = this.state.startLoc;
      return this.parseExprOp(this.parseMaybeUnaryOrPrivate(), s, _t(t) ? e - 1 : e);
    }
    parseHackPipeBody() {
      var t;
      const {
        startLoc: e
      } = this.state, s = this.parseMaybeAssign();
      return F.has(s.type) && !((t = s.extra) != null && t.parenthesized) && this.raise(d.PipeUnparenthesizedBody, e, {
        type: s.type
      }), this.topicReferenceWasUsedInCurrentContext() || this.raise(d.PipeTopicUnused, e), s;
    }
    checkExponentialAfterUnary(t) {
      this.match(57) && this.raise(d.UnexpectedTokenUnaryExponentiation, t.argument);
    }
    parseMaybeUnary(t, e) {
      const s = this.state.startLoc, i = this.isContextual(96);
      if (i && this.recordAwaitIfAllowed()) {
        this.next();
        const c = this.parseAwait(s);
        return e || this.checkExponentialAfterUnary(c), c;
      }
      const r = this.match(34), n = this.startNode();
      if (Tt(this.state.type)) {
        n.operator = this.state.value, n.prefix = !0, this.match(72) && this.expectPlugin("throwExpressions");
        const c = this.match(89);
        if (this.next(), n.argument = this.parseMaybeUnary(null, !0), this.checkExpressionErrors(t, !0), this.state.strict && c) {
          const p = n.argument;
          p.type === "Identifier" ? this.raise(d.StrictDelete, n) : this.hasPropertyAsPrivateName(p) && this.raise(d.DeletePrivateField, n);
        }
        if (!r)
          return e || this.checkExponentialAfterUnary(n), this.finishNode(n, "UnaryExpression");
      }
      const o = this.parseUpdate(n, r, t);
      if (i) {
        const {
          type: c
        } = this.state;
        if ((this.hasPlugin("v8intrinsic") ? Oe(c) : Oe(c) && !this.match(54)) && !this.isAmbiguousPrefixOrIdentifier())
          return this.raiseOverwrite(d.AwaitNotInAsyncContext, s), this.parseAwait(s);
      }
      return o;
    }
    parseUpdate(t, e, s) {
      if (e) {
        const n = t;
        return this.checkLVal(n.argument, this.finishNode(n, "UpdateExpression")), t;
      }
      const i = this.state.startLoc;
      let r = this.parseExprSubscripts(s);
      if (this.checkExpressionErrors(s, !1)) return r;
      for (; os(this.state.type) && !this.canInsertSemicolon(); ) {
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
      if (ht(r))
        return this.parseTaggedTemplateExpression(t, e, i);
      let n = !1;
      if (r === 18) {
        if (s && (this.raise(d.OptionalChainingNoNew, this.state.startLoc), this.lookaheadCharCode() === 40))
          return this.stopParseSubscript(t, i);
        i.optionalChainMember = n = !0, this.next();
      }
      if (!s && this.match(10))
        return this.parseCoverCallAndAsyncArrowHead(t, e, i, n);
      {
        const o = this.eat(0);
        return o || n || this.eat(16) ? this.parseMember(t, e, i, o, n) : this.stopParseSubscript(t, i);
      }
    }
    stopParseSubscript(t, e) {
      return e.stop = !0, t;
    }
    parseMember(t, e, s, i, r) {
      const n = this.startNodeAt(e);
      return n.object = t, n.computed = i, i ? (n.property = this.parseExpression(), this.expect(3)) : this.match(139) ? (t.type === "Super" && this.raise(d.SuperPrivateField, e), this.classScope.usePrivateName(this.state.value, this.state.startLoc), n.property = this.parsePrivateName()) : n.property = this.parseIdentifier(!0), s.optionalChainMember ? (n.optional = r, this.finishNode(n, "OptionalMemberExpression")) : this.finishNode(n, "MemberExpression");
    }
    parseBind(t, e, s) {
      const i = this.startNodeAt(e);
      i.object = t, this.next();
      const r = this.match(83), n = this.parseNoCallExpr();
      if (n.type === "Super" || r && n.type === "ImportExpression" || n.type === "Import")
        throw this.raise(d.UnsupportedBindRHS, n);
      return i.callee = n, s.stop = !0, this.parseSubscripts(this.finishNode(i, "BindExpression"), e, !1);
    }
    parseCoverCallAndAsyncArrowHead(t, e, s, i) {
      const r = this.state.maybeInArrowParameters;
      let n = null;
      this.state.maybeInArrowParameters = !0, this.next();
      const o = this.startNodeAt(e);
      o.callee = t;
      const {
        maybeAsyncArrow: c,
        optionalChainMember: p
      } = s;
      c && (this.expressionScope.enter(mr()), n = new es()), p && (o.optional = i), i ? o.arguments = this.parseCallExpressionArguments() : o.arguments = this.parseCallExpressionArguments(t.type !== "Super", o, n);
      let f = this.finishCallExpression(o, p);
      return c && this.shouldParseAsyncArrow() && !i ? (s.stop = !0, this.checkDestructuringPrivate(n), this.expressionScope.validateAsPattern(), this.expressionScope.exit(), f = this.parseAsyncArrowFromCallExpression(this.startNodeAt(e), f)) : (c && (this.checkExpressionErrors(n, !0), this.expressionScope.exit()), this.toReferencedArguments(f)), this.state.maybeInArrowParameters = r, f;
    }
    toReferencedArguments(t, e) {
      this.toReferencedListDeep(t.arguments, e);
    }
    parseTaggedTemplateExpression(t, e, s) {
      const i = this.startNodeAt(e);
      return i.tag = t, i.quasi = this.parseTemplate(!0), s.optionalChainMember && this.raise(d.OptionalChainingNoTemplate, e), this.finishNode(i, "TaggedTemplateExpression");
    }
    atPossibleAsyncArrow(t) {
      return t.type === "Identifier" && t.name === "async" && this.state.lastTokEndLoc.index === t.end && !this.canInsertSemicolon() && t.end - t.start === 5 && this.offsetToSourcePos(t.start) === this.state.potentialArrowAt;
    }
    finishCallExpression(t, e) {
      if (t.callee.type === "Import")
        if (t.arguments.length === 0 || t.arguments.length > 2)
          this.raise(d.ImportCallArity, t);
        else
          for (const s of t.arguments)
            s.type === "SpreadElement" && this.raise(d.ImportCallSpreadArgument, s);
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
      return this.resetPreviousNodeTrailingComments(e), this.expect(19), this.parseArrowExpression(t, e.arguments, !0, (s = e.extra) == null ? void 0 : s.trailingCommaLoc), e.innerComments && It(t, e.innerComments), e.callee.trailingComments && It(t, e.callee.trailingComments), t;
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
          return e = this.startNode(), this.next(), this.match(16) ? this.parseImportMetaPropertyOrPhaseCall(e) : this.match(10) ? this.optionFlags & 512 ? this.parseImportCall(e) : this.finishNode(e, "Import") : (this.raise(d.UnsupportedImport, this.state.lastTokStartLoc), this.finishNode(e, "Import"));
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
          throw this.raise(d.UnsupportedBind, r);
        }
        case 139:
          return this.raise(d.PrivateInExpectedIn, this.state.startLoc, {
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
          throw je(r) || r === 62 ? this.expectOnePlugin(["jsx", "flow", "typescript"]) : this.unexpected();
        }
        default:
          if (i === 137)
            return this.parseDecimalLiteral(this.state.value);
          if (i === 2 || i === 1)
            return this.parseArrayLike(this.state.type === 2 ? 4 : 3, !0);
          if (i === 6 || i === 7)
            return this.parseObjectLike(this.state.type === 6 ? 9 : 8, !1, !0);
          if (R(i)) {
            if (this.isContextual(127) && this.lookaheadInLineCharCode() === 123)
              return this.parseModuleExpression();
            const r = this.state.potentialArrowAt === this.state.start, n = this.state.containsEsc, o = this.parseIdentifier();
            if (!n && o.name === "async" && !this.canInsertSemicolon()) {
              const {
                type: c
              } = this.state;
              if (c === 68)
                return this.resetPreviousNodeTrailingComments(o), this.next(), this.parseAsyncFunctionExpression(this.startNodeAtNode(o));
              if (R(c))
                return r && this.lookaheadCharCode() === 61 ? this.parseAsyncArrowUnaryFunction(this.startNodeAtNode(o)) : o;
              if (c === 90)
                return this.resetPreviousNodeTrailingComments(o), this.parseDo(this.startNodeAtNode(o), !0);
            }
            return r && this.match(19) && !this.canInsertSemicolon() ? (this.next(), this.parseArrowExpression(this.startNodeAtNode(o), [o], !1)) : o;
          } else
            throw this.unexpected();
      }
    }
    parseTopicReferenceThenEqualsSign(t, e) {
      const s = this.getPluginOption("pipelineOperator", "proposal");
      if (s)
        return this.state.type = t, this.state.value = e, this.state.pos--, this.state.end--, this.state.endLoc = x(this.state.endLoc, -1), this.parseTopicReference(s);
      throw this.unexpected();
    }
    parseTopicReference(t) {
      const e = this.startNode(), s = this.state.startLoc, i = this.state.type;
      return this.next(), this.finishTopicReference(e, s, t, i);
    }
    finishTopicReference(t, e, s, i) {
      if (this.testTopicReferenceConfiguration(s, e, i))
        return s === "hack" ? (this.topicReferenceIsAllowedInCurrentContext() || this.raise(d.PipeTopicUnbound, e), this.registerTopicReference(), this.finishNode(t, "TopicReference")) : (this.topicReferenceIsAllowedInCurrentContext() || this.raise(d.PrimaryTopicNotAllowed, e), this.registerTopicReference(), this.finishNode(t, "PipelinePrimaryTopicReference"));
      throw this.raise(d.PipeTopicUnconfiguredToken, e, {
        token: Te(i)
      });
    }
    testTopicReferenceConfiguration(t, e, s) {
      switch (t) {
        case "hack":
          return this.hasPlugin(["pipelineOperator", {
            topicToken: Te(s)
          }]);
        case "smart":
          return s === 27;
        default:
          throw this.raise(d.PipeTopicRequiresHackPipes, e);
      }
    }
    parseAsyncArrowUnaryFunction(t) {
      this.prodParam.enter(Yt(!0, this.prodParam.hasYield));
      const e = [this.parseIdentifier()];
      return this.prodParam.exit(), this.hasPrecedingLineBreak() && this.raise(d.LineTerminatorBeforeArrow, this.state.curPosition()), this.expect(19), this.parseArrowExpression(t, e, !0);
    }
    parseDo(t, e) {
      this.expectPlugin("doExpressions"), e && this.expectPlugin("asyncDoExpressions"), t.async = e, this.next();
      const s = this.state.labels;
      return this.state.labels = [], e ? (this.prodParam.enter(2), t.body = this.parseBlock(), this.prodParam.exit()) : t.body = this.parseBlock(), this.state.labels = s, this.finishNode(t, "DoExpression");
    }
    parseSuper() {
      const t = this.startNode();
      return this.next(), this.match(10) && !this.scope.allowDirectSuper ? this.optionFlags & 16 || this.raise(d.SuperNotAllowed, t) : this.scope.allowSuper || this.optionFlags & 16 || this.raise(d.UnexpectedSuper, t), !this.match(10) && !this.match(0) && !this.match(16) && this.raise(d.UnsupportedSuper, t), this.finishNode(t, "Super");
    }
    parsePrivateName() {
      const t = this.startNode(), e = this.startNodeAt(x(this.state.startLoc, 1)), s = this.state.value;
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
      return t.property = this.parseIdentifier(!0), (t.property.name !== s || i) && this.raise(d.UnsupportedMetaProperty, t.property, {
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
        return this.isContextual(101) && (this.inModule || this.raise(d.ImportMetaOutsideModule, e), this.sawUnambiguousESM = !0), this.parseMetaProperty(t, e, "meta");
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
      this.next(), this.expressionScope.enter(fr());
      const i = this.state.maybeInArrowParameters, r = this.state.inFSharpPipelineDirectBody;
      this.state.maybeInArrowParameters = !0, this.state.inFSharpPipelineDirectBody = !1;
      const n = this.state.startLoc, o = [], c = new es();
      let p = !0, f, P;
      for (; !this.match(11); ) {
        if (p)
          p = !1;
        else if (this.expect(12, c.optionalParametersLoc === null ? null : c.optionalParametersLoc), this.match(11)) {
          P = this.state.startLoc;
          break;
        }
        if (this.match(21)) {
          const k = this.state.startLoc;
          if (f = this.state.startLoc, o.push(this.parseParenItem(this.parseRestBinding(), k)), !this.checkCommaAfterRest(41))
            break;
        } else
          o.push(this.parseMaybeAssignAllowInOrVoidPattern(11, c, this.parseParenItem));
      }
      const S = this.state.lastTokEndLoc;
      this.expect(11), this.state.maybeInArrowParameters = i, this.state.inFSharpPipelineDirectBody = r;
      let E = this.startNodeAt(e);
      return t && this.shouldParseArrow(o) && (E = this.parseArrow(E)) ? (this.checkDestructuringPrivate(c), this.expressionScope.validateAsPattern(), this.expressionScope.exit(), this.parseArrowExpression(E, o, !1), E) : (this.expressionScope.exit(), o.length || this.unexpected(this.state.lastTokStartLoc), P && this.unexpected(P), f && this.unexpected(f), this.checkExpressionErrors(c, !0), this.toReferencedListDeep(o, !0), o.length > 1 ? (s = this.startNodeAt(n), s.expressions = o, this.finishNode(s, "SequenceExpression"), this.resetEndLocation(s, S)) : s = o[0], this.wrapParenthesis(e, s));
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
        return this.scope.allowNewTarget || this.raise(d.UnexpectedNewTarget, s), s;
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
      t.callee = s, (e && s.type === "ImportExpression" || s.type === "Import") && this.raise(d.ImportCallNotNewExpression, s), s.type === "Super" && this.raise(d.SuperCallNotNewExpression, s);
    }
    parseTemplateElement(t) {
      const {
        start: e,
        startLoc: s,
        end: i,
        value: r
      } = this.state, n = e + 1, o = this.startNodeAt(x(s, 1));
      r === null && (t || this.raise(d.InvalidEscapeSequenceTemplate, x(this.state.firstInvalidTemplateEscapePos, 1)));
      const c = this.match(24), p = c ? -1 : -2, f = i + p;
      o.value = {
        raw: this.input.slice(n, f).replace(/\r\n?/g, `
`),
        cooked: r === null ? null : r.slice(1, p)
      }, o.tail = c, this.next();
      const P = this.finishNode(o, "TemplateElement");
      return this.resetEndLocation(P, x(this.state.lastTokEndLoc, p)), P;
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
      let n = !1, o = !0;
      const c = this.startNode();
      for (c.properties = [], this.next(); !this.match(t); ) {
        if (o)
          o = !1;
        else if (this.expect(12), this.match(t)) {
          this.addTrailingCommaExtraToNode(c);
          break;
        }
        let f;
        e ? f = this.parseBindingProperty() : (f = this.parsePropertyDefinition(i), n = this.checkProto(f, s, n, i)), s && !this.isObjectProperty(f) && f.type !== "SpreadElement" && this.raise(d.InvalidRecordProperty, f), f.shorthand && this.addExtra(f, "shorthand", !0), c.properties.push(f);
      }
      this.next(), this.state.inFSharpPipelineDirectBody = r;
      let p = "ObjectExpression";
      return e ? p = "ObjectPattern" : s && (p = "RecordExpression"), this.finishNode(c, p);
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
        for (this.hasPlugin("decorators") && this.raise(d.UnsupportedPropertyDecorator, this.state.startLoc); this.match(26); )
          e.push(this.parseDecorator());
      const s = this.startNode();
      let i = !1, r = !1, n;
      if (this.match(21))
        return e.length && this.unexpected(), this.parseSpread();
      e.length && (s.decorators = e, e = []), s.method = !1, t && (n = this.state.startLoc);
      let o = this.eat(55);
      this.parsePropertyNamePrefixOperator(s);
      const c = this.state.containsEsc;
      if (this.parsePropertyName(s, t), !o && !c && this.maybeAsyncOrAccessorProp(s)) {
        const {
          key: p
        } = s, f = p.name;
        f === "async" && !this.hasPrecedingLineBreak() && (i = !0, this.resetPreviousNodeTrailingComments(p), o = this.eat(55), this.parsePropertyName(s)), (f === "get" || f === "set") && (r = !0, this.resetPreviousNodeTrailingComments(p), s.kind = f, this.match(55) && (o = !0, this.raise(d.AccessorIsGenerator, this.state.curPosition(), {
          kind: f
        }), this.next()), this.parsePropertyName(s));
      }
      return this.parseObjPropValue(s, n, o, i, !1, r, t);
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
      i.length !== s && this.raise(t.kind === "get" ? d.BadGetterArity : d.BadSetterArity, t), t.kind === "set" && ((e = i[i.length - 1]) == null ? void 0 : e.type) === "RestElement" && this.raise(d.BadSetterRestParameter, t);
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
          i != null ? i.shorthandAssignLoc === null && (i.shorthandAssignLoc = r) : this.raise(d.InvalidCoverInitializedName, r), t.value = this.parseMaybeDefault(e, this.cloneIdentifier(t.key));
        } else
          t.value = this.cloneIdentifier(t.key);
        return t.shorthand = !0, this.finishObjectProperty(t);
      }
    }
    finishObjectProperty(t) {
      return this.finishNode(t, "ObjectProperty");
    }
    parseObjPropValue(t, e, s, i, r, n, o) {
      const c = this.parseObjectMethod(t, s, i, r, n) || this.parseObjectProperty(t, e, r, o);
      return c || this.unexpected(), c;
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
        if (q(s))
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
              e != null ? e.privateKeyLoc === null && (e.privateKeyLoc = n) : this.raise(d.UnexpectedPrivateField, n), r = this.parsePrivateName();
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
    parseMethod(t, e, s, i, r, n, o = !1) {
      this.initFunction(t, s), t.generator = e, this.scope.enter(530 | (o ? 576 : 0) | (r ? 32 : 0)), this.prodParam.enter(Yt(s, t.generator)), this.parseFunctionParams(t, i);
      const c = this.parseFunctionBodyAndFinish(t, n, !0);
      return this.prodParam.exit(), this.scope.exit(), c;
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
      let r = Yt(s, !1);
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
      if (this.expressionScope.enter(zs()), i)
        t.body = this.parseMaybeAssign(), this.checkParams(t, !1, e, !1);
      else {
        const r = this.state.strict, n = this.state.labels;
        this.state.labels = [], this.prodParam.enter(this.prodParam.currentFlags() | 4), t.body = this.parseBlock(!0, !1, (o) => {
          const c = !this.isSimpleParamList(t.params);
          o && c && this.raise(d.IllegalLanguageModeDirective, (t.kind === "method" || t.kind === "constructor") && t.key ? t.key.loc.end : t);
          const p = !r && this.state.strict;
          this.checkParams(t, !this.state.strict && !e && !s && !c, e, p), this.state.strict && t.id && this.checkIdentifier(t.id, 65, p);
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
      for (const o of t.params)
        this.checkLVal(o, n, 5, r, i);
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
        e || this.raise(d.UnexpectedToken, this.state.curPosition(), {
          unexpected: ","
        }), r = null;
      else if (this.match(21)) {
        const n = this.state.startLoc;
        r = this.parseParenItem(this.parseSpread(s), n);
      } else if (this.match(17)) {
        this.expectPlugin("partialApplication"), i || this.raise(d.UnexpectedArgumentPlaceholder, this.state.startLoc);
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
      q(i) ? e = this.state.value : this.unexpected();
      const r = te(i);
      return t ? r && this.replaceToken(132) : this.checkReservedWord(e, s, r, !1), this.next(), e;
    }
    checkReservedWord(t, e, s, i) {
      if (t.length > 10 || !zt(t))
        return;
      if (s && Bt(t)) {
        this.raise(d.UnexpectedKeyword, e, {
          keyword: t
        });
        return;
      }
      if ((this.state.strict ? i ? Rt : he : Ft)(t, this.inModule)) {
        this.raise(d.UnexpectedReservedWord, e, {
          reservedWord: t
        });
        return;
      } else if (t === "yield") {
        if (this.prodParam.hasYield) {
          this.raise(d.YieldBindingIdentifier, e);
          return;
        }
      } else if (t === "await") {
        if (this.prodParam.hasAwait) {
          this.raise(d.AwaitBindingIdentifier, e);
          return;
        }
        if (this.scope.inStaticBlock) {
          this.raise(d.AwaitBindingIdentifierInStaticBlock, e);
          return;
        }
        this.expressionScope.recordAsyncArrowParametersError(e);
      } else if (t === "arguments" && this.scope.inClassAndNotInNonArrowFunction) {
        this.raise(d.ArgumentsInClass, e);
        return;
      }
    }
    recordAwaitIfAllowed() {
      const t = this.prodParam.hasAwait;
      return t && !this.scope.inFunction && (this.state.hasTopLevelAwait = !0), t;
    }
    parseAwait(t) {
      const e = this.startNodeAt(t);
      return this.expressionScope.recordParameterInitializerError(d.AwaitExpressionFormalParameter, e), this.eat(55) && this.raise(d.ObsoleteAwaitStar, e), !this.scope.inFunction && !(this.optionFlags & 1) && (this.isAmbiguousPrefixOrIdentifier() ? this.ambiguousScriptDifferentAst = !0 : this.sawUnambiguousESM = !0), this.state.soloAwait || (e.argument = this.parseMaybeUnary(null, !0)), this.finishNode(e, "AwaitExpression");
    }
    isAmbiguousPrefixOrIdentifier() {
      if (this.hasPrecedingLineBreak()) return !0;
      const {
        type: t
      } = this.state;
      return t === 53 || t === 10 || t === 0 || ht(t) || t === 102 && !this.state.containsEsc || t === 138 || t === 56 || this.hasPlugin("v8intrinsic") && t === 54;
    }
    parseYield(t) {
      const e = this.startNodeAt(t);
      this.expressionScope.recordParameterInitializerError(d.YieldInParameter, e);
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
          this.raise(d.ImportCallArity, t);
        }
      }
      return this.expect(11), this.finishNode(t, "ImportExpression");
    }
    checkPipelineAtInfixOperator(t, e) {
      this.hasPlugin(["pipelineOperator", {
        proposal: "smart"
      }]) && t.type === "SequenceExpression" && this.raise(d.PipelineHeadSequenceExpression, e);
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
        throw this.raise(d.PipelineBodyNoArrow, this.state.startLoc);
      this.topicReferenceWasUsedInCurrentContext() || this.raise(d.PipelineTopicUnused, t);
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
  const ys = {
    kind: 1
  }, Lr = {
    kind: 2
  }, Dr = /[\uD800-\uDFFF]/u, xs = /in(?:stanceof)?/y;
  function Or(a, t, e) {
    for (let s = 0; s < a.length; s++) {
      const i = a[s], {
        type: r
      } = i;
      if (typeof r == "number") {
        if (r === 139) {
          const {
            loc: n,
            start: o,
            value: c,
            end: p
          } = i, f = o + 1, P = x(n.start, 1);
          a.splice(s, 1, new it({
            type: Le(27),
            value: "#",
            start: o,
            end: f,
            startLoc: n.start,
            endLoc: P
          }), new it({
            type: Le(132),
            value: c,
            start: f,
            end: p,
            startLoc: P,
            endLoc: n.end
          })), s++;
          continue;
        }
        if (ht(r)) {
          const {
            loc: n,
            start: o,
            value: c,
            end: p
          } = i, f = o + 1, P = x(n.start, 1);
          let S;
          t.charCodeAt(o - e) === 96 ? S = new it({
            type: Le(22),
            value: "`",
            start: o,
            end: f,
            startLoc: n.start,
            endLoc: P
          }) : S = new it({
            type: Le(8),
            value: "}",
            start: o,
            end: f,
            startLoc: n.start,
            endLoc: P
          });
          let E, k, W, se;
          r === 24 ? (k = p - 1, W = x(n.end, -1), E = c === null ? null : c.slice(1, -1), se = new it({
            type: Le(22),
            value: "`",
            start: k,
            end: p,
            startLoc: W,
            endLoc: n.end
          })) : (k = p - 2, W = x(n.end, -2), E = c === null ? null : c.slice(1, -2), se = new it({
            type: Le(23),
            value: "${",
            start: k,
            end: p,
            startLoc: W,
            endLoc: n.end
          })), a.splice(s, 1, S, new it({
            type: Le(20),
            value: E,
            start: f,
            end: k,
            startLoc: P,
            endLoc: W
          }), se), s += 2;
          continue;
        }
        i.type = Le(r);
      }
    }
    return a;
  }
  class jr extends kr {
    parseTopLevel(t, e) {
      return t.program = this.parseProgram(e, 140, this.options.sourceType === "module" ? "module" : "script"), t.comments = this.comments, this.optionFlags & 256 && (t.tokens = Or(this.tokens, this.input, this.startIndex)), this.finishNode(t, "File");
    }
    parseProgram(t, e, s) {
      if (t.sourceType = s, t.interpreter = this.parseInterpreterDirective(), this.parseBlockBody(t, !0, !0, e), this.inModule) {
        if (!(this.optionFlags & 64) && this.scope.undefinedExports.size > 0)
          for (const [r, n] of Array.from(this.scope.undefinedExports))
            this.raise(d.ModuleExportUndefined, n, {
              localName: r
            });
        this.addExtra(t, "topLevelAwait", this.state.hasTopLevelAwait);
      }
      let i;
      return e === 140 ? i = this.finishNode(t, "Program") : i = this.finishNodeAt(t, "Program", x(this.state.startLoc, -1)), i;
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
      if (je(t)) {
        if (xs.lastIndex = e, xs.test(this.input)) {
          const s = this.codePointAtPos(xs.lastIndex);
          if (!Me(s) && s !== 92)
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
      const s = this.state.type, i = this.startNode(), r = !!(t & 2), n = !!(t & 4), o = t & 1;
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
          return n || this.raise(this.state.strict ? d.StrictFunction : this.options.annexB ? d.SloppyFunctionAnnexB : d.SloppyFunction, this.state.startLoc), this.parseFunctionStatement(i, !1, !r && n);
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
            return this.allowsUsing() ? r ? this.recordAwaitIfAllowed() || this.raise(d.AwaitUsingNotInAsyncContext, i) : this.raise(d.UnexpectedLexicalDeclaration, i) : this.raise(d.UnexpectedUsingDeclaration, i), this.next(), this.parseVarStatement(i, "await using");
          break;
        case 107:
          if (this.state.containsEsc || !this.hasInLineFollowingBindingIdentifierOrBrace())
            break;
          return this.allowsUsing() ? r || this.raise(d.UnexpectedLexicalDeclaration, this.state.startLoc) : this.raise(d.UnexpectedUsingDeclaration, this.state.startLoc), this.parseVarStatement(i, "using");
        case 100: {
          if (this.state.containsEsc)
            break;
          const f = this.nextTokenStart(), P = this.codePointAtPos(f);
          if (P !== 91 && (!r && this.hasFollowingLineBreak() || !this.chStartsBindingIdentifier(P, f) && P !== 123))
            break;
        }
        case 75:
          r || this.raise(d.UnexpectedLexicalDeclaration, this.state.startLoc);
        case 74: {
          const f = this.state.value;
          return this.parseVarStatement(i, f);
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
          const f = this.lookaheadCharCode();
          if (f === 40 || f === 46)
            break;
        }
        case 82: {
          !(this.optionFlags & 8) && !o && this.raise(d.UnexpectedImportExport, this.state.startLoc), this.next();
          let f;
          return s === 83 ? f = this.parseImport(i) : f = this.parseExport(i, e), this.assertModuleNodeAllowed(f), f;
        }
        default:
          if (this.isAsyncFunction())
            return r || this.raise(d.AsyncFunctionInSingleStatementContext, this.state.startLoc), this.next(), this.parseFunctionStatement(i, !0, !r && n);
      }
      const c = this.state.value, p = this.parseExpression();
      return R(s) && p.type === "Identifier" && this.eat(14) ? this.parseLabeledStatement(i, c, p, t) : this.parseExpressionStatement(i, p, e);
    }
    assertModuleNodeAllowed(t) {
      !(this.optionFlags & 8) && !this.inModule && this.raise(d.ImportOutsideModule, t);
    }
    decoratorsEnabledBeforeExport() {
      return this.hasPlugin("decorators-legacy") ? !0 : this.hasPlugin("decorators") && this.getPluginOption("decorators", "decoratorsBeforeExport") !== !1;
    }
    maybeTakeDecorators(t, e, s) {
      if (t) {
        var i;
        (i = e.decorators) != null && i.length ? (typeof this.getPluginOption("decorators", "decoratorsBeforeExport") != "boolean" && this.raise(d.DecoratorsBeforeAfterExport, e.decorators[0]), e.decorators.unshift(...t)) : e.decorators = t, this.resetStartLocationFromNode(e, t[0]), s && this.resetStartLocationFromNode(s, e);
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
        t || this.unexpected(), this.decoratorsEnabledBeforeExport() || this.raise(d.DecoratorExportClass, this.state.startLoc);
      else if (!this.canHaveLeadingDecorator())
        throw this.raise(d.UnexpectedLeadingDecorator, this.state.startLoc);
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
          t.expression = this.parseMaybeDecoratorArguments(s, i), this.getPluginOption("decorators", "allowCallParenthesized") === !1 && t.expression !== s && this.raise(d.DecoratorArgumentsOutsideParentheses, r);
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
        this.raise(d.IllegalBreakContinue, t, {
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
      return this.next(), this.state.labels.push(ys), t.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement()), this.state.labels.pop(), this.expect(92), t.test = this.parseHeaderExpression(), this.eat(13), this.finishNode(t, "DoWhileStatement");
    }
    parseForStatement(t) {
      this.next(), this.state.labels.push(ys);
      let e = null;
      if (this.isContextual(96) && this.recordAwaitIfAllowed() && (e = this.state.startLoc, this.next()), this.scope.enter(0), this.expect(10), this.match(13))
        return e !== null && this.unexpected(e), this.parseFor(t, null);
      const s = this.isContextual(100);
      {
        const c = this.isAwaitUsing(), p = c || this.isForUsing(), f = s && this.hasFollowingBindingAtom() || p;
        if (this.match(74) || this.match(75) || f) {
          const P = this.startNode();
          let S;
          c ? (S = "await using", this.recordAwaitIfAllowed() || this.raise(d.AwaitUsingNotInAsyncContext, this.state.startLoc), this.next()) : S = this.state.value, this.next(), this.parseVar(P, !0, S);
          const E = this.finishNode(P, "VariableDeclaration"), k = this.match(58);
          return k && p && this.raise(d.ForInUsing, E), (k || this.isContextual(102)) && E.declarations.length === 1 ? this.parseForIn(t, E, e) : (e !== null && this.unexpected(e), this.parseFor(t, E));
        }
      }
      const i = this.isContextual(95), r = new es(), n = this.parseExpression(!0, r), o = this.isContextual(102);
      if (o && (s && this.raise(d.ForOfLet, n), e === null && i && n.type === "Identifier" && this.raise(d.ForOfAsync, n)), o || this.match(58)) {
        this.checkDestructuringPrivate(r), this.toAssignable(n, !0);
        const c = o ? "ForOfStatement" : "ForInStatement";
        return this.checkLVal(n, {
          type: c
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
      return this.prodParam.hasReturn || this.raise(d.IllegalReturn, this.state.startLoc), this.next(), this.isLineTerminator() ? t.argument = null : (t.argument = this.parseExpression(), this.semicolon()), this.finishNode(t, "ReturnStatement");
    }
    parseSwitchStatement(t) {
      this.next(), t.discriminant = this.parseHeaderExpression();
      const e = t.cases = [];
      this.expect(5), this.state.labels.push(Lr), this.scope.enter(256);
      let s;
      for (let i; !this.match(8); )
        if (this.match(61) || this.match(65)) {
          const r = this.match(61);
          s && this.finishNode(s, "SwitchCase"), e.push(s = this.startNode()), s.consequent = [], this.next(), r ? s.test = this.parseExpression() : (i && this.raise(d.MultipleDefaultsInSwitch, this.state.lastTokStartLoc), i = !0, s.test = null), this.expect(14);
        } else
          s ? s.consequent.push(this.parseStatementListItem()) : this.unexpected();
      return this.scope.exit(), s && this.finishNode(s, "SwitchCase"), this.next(), this.state.labels.pop(), this.finishNode(t, "SwitchStatement");
    }
    parseThrowStatement(t) {
      return this.next(), this.hasPrecedingLineBreak() && this.raise(d.NewlineAfterThrow, this.state.lastTokEndLoc), t.argument = this.parseExpression(), this.semicolon(), this.finishNode(t, "ThrowStatement");
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
      return t.finalizer = this.eat(67) ? this.parseBlock() : null, !t.handler && !t.finalizer && this.raise(d.NoCatchOrFinally, t), this.finishNode(t, "TryStatement");
    }
    parseVarStatement(t, e, s = !1) {
      return this.next(), this.parseVar(t, !1, e, s), this.semicolon(), this.finishNode(t, "VariableDeclaration");
    }
    parseWhileStatement(t) {
      return this.next(), t.test = this.parseHeaderExpression(), this.state.labels.push(ys), t.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement()), this.state.labels.pop(), this.finishNode(t, "WhileStatement");
    }
    parseWithStatement(t) {
      return this.state.strict && this.raise(d.StrictWith, this.state.startLoc), this.next(), t.object = this.parseHeaderExpression(), t.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement()), this.finishNode(t, "WithStatement");
    }
    parseEmptyStatement(t) {
      return this.next(), this.finishNode(t, "EmptyStatement");
    }
    parseLabeledStatement(t, e, s, i) {
      for (const n of this.state.labels)
        n.name === e && this.raise(d.LabelRedeclaration, s, {
          labelName: e
        });
      const r = yt(this.state.type) ? 1 : this.match(71) ? 2 : null;
      for (let n = this.state.labels.length - 1; n >= 0; n--) {
        const o = this.state.labels[n];
        if (o.statementStart === t.start)
          o.statementStart = this.sourceToOffsetPos(this.state.start), o.kind = r;
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
      const n = t.body = [], o = t.directives = [];
      this.parseBlockOrModuleBlockBody(n, e ? o : void 0, s, i, r);
    }
    parseBlockOrModuleBlockBody(t, e, s, i, r) {
      const n = this.state.strict;
      let o = !1, c = !1;
      for (; !this.match(i); ) {
        const p = s ? this.parseModuleItem() : this.parseStatementListItem();
        if (e && !c) {
          if (this.isValidDirective(p)) {
            const f = this.stmtToDirective(p);
            e.push(f), !o && f.value.value === "use strict" && (o = !0, this.setStrict(!0));
            continue;
          }
          c = !0, this.state.strictErrors.clear();
        }
        t.push(p);
      }
      r == null || r.call(this, o), n || this.setStrict(!1), this.next();
    }
    parseFor(t, e) {
      return t.init = e, this.semicolon(!1), t.test = this.match(13) ? null : this.parseExpression(), this.semicolon(!1), t.update = this.match(11) ? null : this.parseExpression(), this.expect(11), t.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement()), this.scope.exit(), this.state.labels.pop(), this.finishNode(t, "ForStatement");
    }
    parseForIn(t, e, s) {
      const i = this.match(58);
      return this.next(), i ? s !== null && this.unexpected(s) : t.await = s !== null, e.type === "VariableDeclaration" && e.declarations[0].init != null && (!i || !this.options.annexB || this.state.strict || e.kind !== "var" || e.declarations[0].id.type !== "Identifier") && this.raise(d.ForInOfLoopInitializer, e, {
        type: i ? "ForInStatement" : "ForOfStatement"
      }), e.type === "AssignmentPattern" && this.raise(d.InvalidLhs, e, {
        ancestor: {
          type: "ForStatement"
        }
      }), t.left = e, t.right = i ? this.parseExpression() : this.parseMaybeAssignAllowIn(), this.expect(11), t.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement()), this.scope.exit(), this.state.labels.pop(), this.finishNode(t, i ? "ForInStatement" : "ForOfStatement");
    }
    parseVar(t, e, s, i = !1) {
      const r = t.declarations = [];
      for (t.kind = s; ; ) {
        const n = this.startNode();
        if (this.parseVarId(n, s), n.init = this.eat(29) ? e ? this.parseMaybeAssignDisallowIn() : this.parseMaybeAssignAllowIn() : null, n.init === null && !i && (n.id.type !== "Identifier" && !(e && (this.match(58) || this.isContextual(102))) ? this.raise(d.DeclarationMissingInitializer, this.state.lastTokEndLoc, {
          kind: "destructuring"
        }) : (s === "const" || s === "using" || s === "await using") && !(this.match(58) || this.isContextual(102)) && this.raise(d.DeclarationMissingInitializer, this.state.lastTokEndLoc, {
          kind: s
        })), r.push(this.finishNode(n, "VariableDeclarator")), !this.eat(12)) break;
      }
      return t;
    }
    parseVarId(t, e) {
      const s = this.parseBindingAtom();
      e === "using" || e === "await using" ? (s.type === "ArrayPattern" || s.type === "ObjectPattern") && this.raise(d.UsingDeclarationHasBindingPattern, s.loc.start) : s.type === "VoidPattern" && this.raise(d.UnexpectedVoidPattern, s.loc.start), this.checkLVal(s, {
        type: "VariableDeclarator"
      }, e === "var" ? 5 : 8201), t.id = s;
    }
    parseAsyncFunctionExpression(t) {
      return this.parseFunction(t, 8);
    }
    parseFunction(t, e = 0) {
      const s = e & 2, i = !!(e & 1), r = i && !(e & 4), n = !!(e & 8);
      this.initFunction(t, n), this.match(55) && (s && this.raise(d.GeneratorInSingleStatementContext, this.state.startLoc), this.next(), t.generator = !0), i && (t.id = this.parseFunctionId(r));
      const o = this.state.maybeInArrowParameters;
      return this.state.maybeInArrowParameters = !1, this.scope.enter(514), this.prodParam.enter(Yt(n, t.generator)), i || (t.id = this.parseFunctionId()), this.parseFunctionParams(t, !1), this.withSmartMixTopicForbiddingContext(() => {
        this.parseFunctionBodyAndFinish(t, i ? "FunctionDeclaration" : "FunctionExpression");
      }), this.prodParam.exit(), this.scope.exit(), i && !s && this.registerFunctionStatementId(t), this.state.maybeInArrowParameters = o, t;
    }
    parseFunctionId(t) {
      return t || R(this.state.type) ? this.parseIdentifier() : null;
    }
    parseFunctionParams(t, e) {
      this.expect(10), this.expressionScope.enter(dr()), t.params = this.parseBindingList(11, 41, 2 | (e ? 4 : 0)), this.expressionScope.exit();
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
              throw this.raise(d.DecoratorSemicolon, this.state.lastTokEndLoc);
            continue;
          }
          if (this.match(26)) {
            i.push(this.parseDecorator());
            continue;
          }
          const n = this.startNode();
          i.length && (n.decorators = i, this.resetStartLocationFromNode(n, i[0]), i = []), this.parseClassMember(r, n, s), n.kind === "constructor" && n.decorators && n.decorators.length > 0 && this.raise(d.DecoratorConstructor, n);
        }
      }), this.state.strict = e, this.next(), i.length)
        throw this.raise(d.TrailingDecorator, this.state.startLoc);
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
      const r = e, n = e, o = e, c = e, p = e, f = r, P = r;
      if (e.static = i, this.parsePropertyNamePrefixOperator(e), this.eat(55)) {
        f.kind = "method";
        const z = this.match(139);
        if (this.parseClassElementName(f), this.parsePostMemberNameModifiers(f), z) {
          this.pushClassPrivateMethod(t, n, !0, !1);
          return;
        }
        this.isNonstaticConstructor(r) && this.raise(d.ConstructorIsGenerator, r.key), this.pushClassMethod(t, r, !0, !1, !1, !1);
        return;
      }
      const S = !this.state.containsEsc && R(this.state.type), E = this.parseClassElementName(e), k = S ? E.name : null, W = this.isPrivateName(E), se = this.state.startLoc;
      if (this.parsePostMemberNameModifiers(P), this.isClassMethod()) {
        if (f.kind = "method", W) {
          this.pushClassPrivateMethod(t, n, !1, !1);
          return;
        }
        const z = this.isNonstaticConstructor(r);
        let Q = !1;
        z && (r.kind = "constructor", s.hadConstructor && !this.hasPlugin("typescript") && this.raise(d.DuplicateConstructor, E), z && this.hasPlugin("typescript") && e.override && this.raise(d.OverrideOnConstructor, E), s.hadConstructor = !0, Q = s.hadSuperClass), this.pushClassMethod(t, r, !1, !1, z, Q);
      } else if (this.isClassProperty())
        W ? this.pushClassPrivateProperty(t, c) : this.pushClassProperty(t, o);
      else if (k === "async" && !this.isLineTerminator()) {
        this.resetPreviousNodeTrailingComments(E);
        const z = this.eat(55);
        P.optional && this.unexpected(se), f.kind = "method";
        const Q = this.match(139);
        this.parseClassElementName(f), this.parsePostMemberNameModifiers(P), Q ? this.pushClassPrivateMethod(t, n, z, !0) : (this.isNonstaticConstructor(r) && this.raise(d.ConstructorIsAsync, r.key), this.pushClassMethod(t, r, z, !0, !1, !1));
      } else if ((k === "get" || k === "set") && !(this.match(55) && this.isLineTerminator())) {
        this.resetPreviousNodeTrailingComments(E), f.kind = k;
        const z = this.match(139);
        this.parseClassElementName(r), z ? this.pushClassPrivateMethod(t, n, !1, !1) : (this.isNonstaticConstructor(r) && this.raise(d.ConstructorIsAccessor, r.key), this.pushClassMethod(t, r, !1, !1, !1, !1)), this.checkGetterSetterParams(r);
      } else if (k === "accessor" && !this.isLineTerminator()) {
        this.expectPlugin("decoratorAutoAccessors"), this.resetPreviousNodeTrailingComments(E);
        const z = this.match(139);
        this.parseClassElementName(o), this.pushClassAccessorProperty(t, p, z);
      } else this.isLineTerminator() ? W ? this.pushClassPrivateProperty(t, c) : this.pushClassProperty(t, o) : this.unexpected();
    }
    parseClassElementName(t) {
      const {
        type: e,
        value: s
      } = this.state;
      if ((e === 132 || e === 134) && t.static && s === "prototype" && this.raise(d.StaticPrototype, this.state.startLoc), e === 139) {
        s === "constructor" && this.raise(d.ConstructorClassPrivateField, this.state.startLoc);
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
      this.parseBlockOrModuleBlockBody(r, void 0, !1, 8), this.prodParam.exit(), this.scope.exit(), this.state.labels = i, t.body.push(this.finishNode(e, "StaticBlock")), (s = e.decorators) != null && s.length && this.raise(d.DecoratorStaticBlock, e);
    }
    pushClassProperty(t, e) {
      !e.computed && this.nameIsConstructor(e.key) && this.raise(d.ConstructorClassField, e.key), t.body.push(this.parseClassProperty(e));
    }
    pushClassPrivateProperty(t, e) {
      const s = this.parseClassPrivateProperty(e);
      t.body.push(s), this.classScope.declarePrivateName(this.getPrivateNameSV(s.key), 0, s.key.loc.start);
    }
    pushClassAccessorProperty(t, e, s) {
      !s && !e.computed && this.nameIsConstructor(e.key) && this.raise(d.ConstructorClassField, e.key);
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
      this.scope.enter(592), this.expressionScope.enter(zs()), this.prodParam.enter(0), t.value = this.eat(29) ? this.parseMaybeAssignAllowIn() : null, this.expressionScope.exit(), this.prodParam.exit(), this.scope.exit();
    }
    parseClassId(t, e, s, i = 8331) {
      if (R(this.state.type))
        t.id = this.parseIdentifier(), e && this.declareNameFromIdentifier(t.id, i);
      else if (s || !e)
        t.id = null;
      else
        throw this.raise(d.MissingClassName, this.state.startLoc);
    }
    parseClassSuper(t) {
      t.superClass = this.eat(81) ? this.parseExprSubscripts() : null;
    }
    parseExport(t, e) {
      const s = this.parseMaybeImportPhase(t, !0), i = this.maybeParseExportDefaultSpecifier(t, s), r = !i || this.eat(12), n = r && this.eatExportStar(t), o = n && this.maybeParseExportNamespaceSpecifier(t), c = r && (!o || this.eat(12)), p = i || n;
      if (n && !o) {
        if (i && this.unexpected(), e)
          throw this.raise(d.UnsupportedDecoratorExport, t);
        return this.parseExportFrom(t, !0), this.sawUnambiguousESM = !0, this.finishNode(t, "ExportAllDeclaration");
      }
      const f = this.maybeParseExportNamedSpecifiers(t);
      i && r && !n && !f && this.unexpected(null, 5), o && c && this.unexpected(null, 98);
      let P;
      if (p || f) {
        if (P = !1, e)
          throw this.raise(d.UnsupportedDecoratorExport, t);
        this.parseExportFrom(t, p);
      } else
        P = this.maybeParseExportDeclaration(t);
      if (p || f || P) {
        var S;
        const E = t;
        if (this.checkExport(E, !0, !1, !!E.source), ((S = E.declaration) == null ? void 0 : S.type) === "ClassDeclaration")
          this.maybeTakeDecorators(e, E.declaration, E);
        else if (e)
          throw this.raise(d.UnsupportedDecoratorExport, t);
        return this.sawUnambiguousESM = !0, this.finishNode(E, "ExportNamedDeclaration");
      }
      if (this.eat(65)) {
        const E = t, k = this.parseExportDefaultExpression();
        if (E.declaration = k, k.type === "ClassDeclaration")
          this.maybeTakeDecorators(e, k, E);
        else if (e)
          throw this.raise(d.UnsupportedDecoratorExport, t);
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
        return this.hasPlugin("decorators") && this.getPluginOption("decorators", "decoratorsBeforeExport") === !0 && this.raise(d.DecoratorBeforeExport, this.state.startLoc), this.parseClass(this.maybeTakeDecorators(this.parseDecorators(!1), this.startNode()), !0, !0);
      if (this.match(75) || this.match(74) || this.isLet() || this.isUsing() || this.isAwaitUsing())
        throw this.raise(d.UnsupportedDefaultExport, this.state.startLoc);
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
      if (R(t)) {
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
      if (this.input.charCodeAt(e) === 44 || R(this.state.type) && s)
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
      return t === 26 && (this.expectOnePlugin(["decorators", "decorators-legacy"]), this.hasPlugin("decorators")) ? (this.getPluginOption("decorators", "decoratorsBeforeExport") === !0 && this.raise(d.DecoratorBeforeExport, this.state.startLoc), !0) : this.isUsing() ? (this.raise(d.UsingDeclarationExport, this.state.startLoc), !0) : this.isAwaitUsing() ? (this.raise(d.UsingDeclarationExport, this.state.startLoc), !0) : t === 74 || t === 75 || t === 68 || t === 80 || this.isLet() || this.isAsyncFunction();
    }
    checkExport(t, e, s, i) {
      if (e) {
        var r;
        if (s) {
          if (this.checkDuplicateExports(t, "default"), this.hasPlugin("exportDefaultFrom")) {
            var n;
            const o = t.declaration;
            o.type === "Identifier" && o.name === "from" && o.end - o.start === 4 && !((n = o.extra) != null && n.parenthesized) && this.raise(d.ExportDefaultFromAsIdentifier, o);
          }
        } else if ((r = t.specifiers) != null && r.length)
          for (const o of t.specifiers) {
            const {
              exported: c
            } = o, p = c.type === "Identifier" ? c.name : c.value;
            if (this.checkDuplicateExports(o, p), !i && o.local) {
              const {
                local: f
              } = o;
              f.type !== "Identifier" ? this.raise(d.ExportBindingIsString, o, {
                localName: f.value,
                exportName: p
              }) : (this.checkReservedWord(f.name, f.loc.start, !0, !1), this.scope.checkLocalExport(f));
            }
          }
        else if (t.declaration) {
          const o = t.declaration;
          if (o.type === "FunctionDeclaration" || o.type === "ClassDeclaration") {
            const {
              id: c
            } = o;
            if (!c) throw new Error("Assertion failure");
            this.checkDuplicateExports(t, c.name);
          } else if (o.type === "VariableDeclaration")
            for (const c of o.declarations)
              this.checkDeclaration(c.id);
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
      this.exportedIdentifiers.has(e) && (e === "default" ? this.raise(d.DuplicateDefaultExport, t) : this.raise(d.DuplicateExport, t, {
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
        const t = this.parseStringLiteral(this.state.value), e = Dr.exec(t.value);
        return e && this.raise(d.ModuleExportNameHasLoneSurrogate, t, {
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
        s !== "ImportDefaultSpecifier" && this.raise(d.SourcePhaseImportRequiresDefault, e[0].loc.start);
      else if (t.phase === "defer")
        s !== "ImportNamespaceSpecifier" && this.raise(d.DeferImportRequiresNamespace, e[0].loc.start);
      else if (t.module) {
        var i;
        s !== "ImportDefaultSpecifier" && this.raise(d.ImportReflectionNotBinding, e[0].loc.start), ((i = t.assertions) == null ? void 0 : i.length) > 0 && this.raise(d.ImportReflectionHasAssertion, e[0].loc.start);
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
          s !== void 0 && this.raise(d.ImportJSONBindingNotDefault, s.loc.start);
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
      return (q(r) ? r !== 98 || this.lookaheadCharCode() === 102 : r !== 12) ? (this.applyImportPhase(t, e, i, s.loc.start), null) : (this.applyImportPhase(t, e, null), this.createIdentifier(s, i));
    }
    isPrecedingIdImportPhase(t) {
      const {
        type: e
      } = this.state;
      return R(e) ? e !== 98 || this.lookaheadCharCode() === 102 : e !== 12;
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
        if (e.has(i) && this.raise(d.ModuleAttributesWithDuplicateKeys, this.state.startLoc, {
          key: i
        }), e.add(i), this.match(134) ? s.key = this.parseStringLiteral(i) : s.key = this.parseIdentifier(!0), this.expect(14), !this.match(134))
          throw this.raise(d.ModuleAttributeInvalidValue, this.state.startLoc);
        s.value = this.parseStringLiteral(this.state.value), t.push(this.finishNode(s, "ImportAttribute"));
      } while (this.eat(12));
      return this.expect(8), t;
    }
    parseModuleAttributes() {
      const t = [], e = /* @__PURE__ */ new Set();
      do {
        const s = this.startNode();
        if (s.key = this.parseIdentifier(!0), s.key.name !== "type" && this.raise(d.ModuleAttributeDifferentFromType, s.key), e.has(s.key.name) && this.raise(d.ModuleAttributesWithDuplicateKeys, s.key, {
          key: s.key.name
        }), e.add(s.key.name), this.expect(14), !this.match(134))
          throw this.raise(d.ModuleAttributeInvalidValue, this.state.startLoc);
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
      } else this.isContextual(94) && !this.hasPrecedingLineBreak() ? (!this.hasPlugin("deprecatedImportAssert") && !this.hasPlugin("importAssertions") && this.raise(d.ImportAttributesUseAssert, this.state.startLoc), this.hasPlugin("importAssertions") || this.addExtra(t, "deprecatedAssertSyntax", !0), this.next(), e = this.parseImportAttributes()) : e = [];
      !s && this.hasPlugin("importAssertions") ? t.assertions = e : t.attributes = e;
    }
    maybeParseDefaultImportSpecifier(t, e) {
      if (e) {
        const s = this.startNodeAtNode(e);
        return s.local = e, t.specifiers.push(this.finishImportSpecifier(s, "ImportDefaultSpecifier")), !0;
      } else if (q(this.state.type))
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
            throw this.raise(d.DestructureNamedImport, this.state.startLoc);
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
          throw this.raise(d.ImportBindingIsString, t, {
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
  class Xs extends jr {
    constructor(t, e, s) {
      const i = $(t);
      super(i, e), this.options = i, this.initializeScopes(), this.plugins = s, this.filename = i.sourceFilename, this.startIndex = i.startIndex;
      let r = 0;
      i.allowAwaitOutsideFunction && (r |= 1), i.allowReturnOutsideFunction && (r |= 2), i.allowImportExportEverywhere && (r |= 8), i.allowSuperOutsideMethod && (r |= 16), i.allowUndeclaredExports && (r |= 64), i.allowNewTargetOutsideFunction && (r |= 4), i.allowYieldOutsideFunction && (r |= 32), i.ranges && (r |= 128), i.tokens && (r |= 256), i.createImportExpressions && (r |= 512), i.createParenthesizedExpressions && (r |= 1024), i.errorRecovery && (r |= 2048), i.attachComment && (r |= 4096), i.annexB && (r |= 8192), this.optionFlags = r;
    }
    getScopeHandler() {
      return Ee;
    }
    parse() {
      this.enterInitialScopes();
      const t = this.startNode(), e = this.startNode();
      this.nextToken(), t.errors = null;
      const s = this.parseTopLevel(t, e);
      return s.errors = this.state.errors, s.comments.length = this.state.commentsLen, s;
    }
  }
  function Mr(a, t) {
    var e;
    if (((e = t) == null ? void 0 : e.sourceType) === "unambiguous") {
      t = Object.assign({}, t);
      try {
        t.sourceType = "module";
        const s = Nt(t, a), i = s.parse();
        if (s.sawUnambiguousESM)
          return i;
        if (s.ambiguousScriptDifferentAst)
          try {
            return t.sourceType = "script", Nt(t, a).parse();
          } catch {
          }
        else
          i.program.sourceType = "script";
        return i;
      } catch (s) {
        try {
          return t.sourceType = "script", Nt(t, a).parse();
        } catch {
        }
        throw s;
      }
    } else
      return Nt(t, a).parse();
  }
  function _r(a, t) {
    const e = Nt(t, a);
    return e.options.strictMode && (e.state.strict = !0), e.getExpression();
  }
  function Fr(a) {
    const t = {};
    for (const e of Object.keys(a))
      t[e] = Le(a[e]);
    return t;
  }
  const Rr = Fr(re);
  function Nt(a, t) {
    let e = Xs;
    const s = /* @__PURE__ */ new Map();
    if (a != null && a.plugins) {
      for (const i of a.plugins) {
        let r, n;
        typeof i == "string" ? r = i : [r, n] = i, s.has(r) || s.set(r, n || {});
      }
      Nr(s), e = Br(s);
    }
    return new e(a, t, s);
  }
  const Ys = /* @__PURE__ */ new Map();
  function Br(a) {
    const t = [];
    for (const i of vr)
      a.has(i) && t.push(i);
    const e = t.join("|");
    let s = Ys.get(e);
    if (!s) {
      s = Xs;
      for (const i of t)
        s = Js[i](s);
      Ys.set(e, s);
    }
    return s;
  }
  return Pt.parse = Mr, Pt.parseExpression = _r, Pt.tokTypes = Rr, Pt;
}
var Da = La();
const pe = {
  foreground: "var(--pitaj-fg, #0f172a)",
  muted: "var(--pitaj-muted, #64748b)",
  border: "var(--pitaj-border, #e2e8f0)",
  surface: "var(--pitaj-surface, #ffffff)",
  accent: "var(--pitaj-accent, #2563eb)"
};
function Oa({ children: l, size: u = "sm", status: m, background: x, className: b = "", style: g }) {
  const T = u === "sm" ? 360 : u === "md" ? 440 : u === "lg" ? 560 : void 0, I = typeof m == "string" ? { text: m } : m;
  return /* @__PURE__ */ h(
    "div",
    {
      className: `pitaj-inline-widget-card ${b}`.trim(),
      style: {
        width: "100%",
        maxWidth: T,
        padding: 16,
        borderRadius: 16,
        background: x || pe.surface,
        color: pe.foreground,
        boxSizing: "border-box",
        ...Ye(b),
        ...g
      },
      children: [
        I != null && I.text ? /* @__PURE__ */ h("div", { style: { display: "flex", alignItems: "center", gap: 6, marginBottom: 10, color: pe.muted, fontSize: 12 }, children: [
          I.icon ? /* @__PURE__ */ h(Os, { name: I.icon, size: "xs", color: "secondary" }) : null,
          /* @__PURE__ */ h("span", { children: I.text })
        ] }) : null,
        l
      ]
    }
  );
}
function ja({ children: l, gap: u = 2, justify: m = "start", align: x = "center", wrap: b = !1, flex: g, className: T = "", style: I }) {
  const _ = m === "between" ? "space-between" : m === "around" ? "space-around" : m === "end" ? "flex-end" : m === "center" ? "center" : "flex-start", A = x === "start" ? "flex-start" : x === "end" ? "flex-end" : x === "baseline" ? "baseline" : x === "stretch" ? "stretch" : "center";
  return /* @__PURE__ */ h("div", { className: T, style: { display: "flex", flexDirection: "row", flexWrap: b === !0 || b === "wrap" ? "wrap" : "nowrap", gap: Number(u) * 4, justifyContent: _, alignItems: A, flex: g, ...Ye(T), ...I }, children: l });
}
function Ma({ children: l, gap: u = 2, justify: m = "start", align: x = "stretch", flex: b, className: g = "", style: T }) {
  const I = m === "between" ? "space-between" : m === "end" ? "flex-end" : m === "center" ? "center" : "flex-start", _ = x === "start" ? "flex-start" : x === "end" ? "flex-end" : x === "center" ? "center" : "stretch";
  return /* @__PURE__ */ h("div", { className: g, style: { display: "flex", flexDirection: "column", gap: Number(u) * 4, justifyContent: I, alignItems: _, flex: b, minWidth: 0, ...Ye(g), ...T }, children: l });
}
function _a({ children: l, background: u = "transparent", radius: m = "md", padding: x = 0, border: b = !1, flex: g, width: T, height: I, overflow: _, align: A, justify: N, className: F = "", style: K }) {
  const ne = {
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
  }, ce = { none: 0, sm: 6, md: 8, lg: 12, full: 9999 }, fe = (Ce) => typeof Ce == "number" ? `${Ce}px` : Ce;
  return /* @__PURE__ */ h("div", { className: F, style: { display: "flex", alignItems: A === "start" ? "flex-start" : A === "end" ? "flex-end" : "center", justifyContent: N === "start" ? "flex-start" : N === "end" ? "flex-end" : N === "between" ? "space-between" : "center", background: ne[u] || u, borderRadius: ce[m], padding: Number(x) * 4, border: b ? `1px solid ${typeof b == "string" ? b : pe.border}` : void 0, flex: g, width: fe(T), height: fe(I), overflow: _, boxSizing: "border-box", ...Ye(F), ...K }, children: l });
}
function Fa({ value: l, size: u = "md", weight: m = "bold", color: x, className: b = "" }) {
  const g = { sm: 14, md: 16, lg: 18, xl: 20, "2xl": 26 }, T = { normal: 400, medium: 500, semibold: 600, bold: 700 };
  return /* @__PURE__ */ h("h3", { className: b, style: { margin: 0, fontSize: g[u] || 16, lineHeight: 1.2, letterSpacing: "-0.02em", fontWeight: T[m] || 700, color: ns(x), ...Ye(b) }, children: l });
}
function Ra({ value: l, size: u = "sm", weight: m = "normal", color: x = "prose", className: b = "" }) {
  const g = { xs: 11, sm: 12, md: 14, lg: 16 }, T = { normal: 400, medium: 500, semibold: 600, bold: 700 };
  return /* @__PURE__ */ h("p", { className: b, style: { margin: 0, fontSize: g[u] || 12, lineHeight: 1.35, fontWeight: T[m] || 400, color: ns(x), ...Ye(b) }, children: l });
}
function Ba({ value: l, maxLines: u, color: m = "secondary", className: x = "" }) {
  return /* @__PURE__ */ h("span", { className: x, style: { display: u ? "-webkit-box" : void 0, WebkitBoxOrient: u ? "vertical" : void 0, WebkitLineClamp: u, overflow: u ? "hidden" : void 0, fontSize: 11, lineHeight: 1.35, color: ns(m), ...Ye(x) }, children: l });
}
function ns(l) {
  return !l || l === "prose" ? pe.foreground : l === "secondary" || l === "tertiary" ? pe.muted : l === "success" ? "#15803d" : l === "warning" ? "#b45309" : l === "destructive" ? "#b91c1c" : l === "info" ? "#0369a1" : l === "white" || l === "white-80" ? l === "white" ? "#ffffff" : "rgba(255,255,255,.8)" : l === "currentColor" ? "currentColor" : l;
}
function Ye(l = "") {
  const u = {}, m = new Set(l.split(/\s+/).filter(Boolean));
  return m.has("text-white") && (u.color = "#ffffff"), m.has("text-zinc-400") && (u.color = "#a1a1aa"), m.has("text-center") && (u.textAlign = "center"), m.has("font-medium") && (u.fontWeight = 500), m.has("font-semibold") && (u.fontWeight = 600), m.has("font-bold") && (u.fontWeight = 700), m.has("bg-white/10") && (u.background = "rgba(255,255,255,.1)"), m.has("border-white/20") && (u.borderColor = "rgba(255,255,255,.2)"), m.has("border-zinc-800") && (u.borderColor = "#27272a"), m.has("border-blue-700") && (u.borderColor = "#1d4ed8"), m.has("border-blue-400") && (u.borderColor = "#60a5fa"), m.has("border-blue-400/30") && (u.background = "rgba(96,165,250,.3)"), u;
}
function Ua({ label: l, color: u = "default", className: m = "" }) {
  const x = {
    success: ["#dcfce7", "#166534"],
    warning: ["#fef3c7", "#92400e"],
    info: ["#dbeafe", "#1e40af"],
    destructive: ["#fee2e2", "#991b1b"],
    default: ["#f1f5f9", "#475569"],
    neutral: ["#f1f5f9", "#475569"]
  }, b = x[u] || x.default;
  return /* @__PURE__ */ h("span", { className: m, style: { display: "inline-flex", alignItems: "center", borderRadius: 9999, padding: "2px 8px", fontSize: 10, fontWeight: 600, background: b[0], color: b[1], whiteSpace: "nowrap" }, children: l });
}
function za({ flush: l = !1, className: u = "" }) {
  return /* @__PURE__ */ h("div", { className: u, role: "separator", style: { height: 1, background: pe.border, margin: l ? "10px -16px" : "10px 0", ...Ye(u) } });
}
const $a = {
  package: mt,
  box: mt,
  check: qr,
  "check-circle": Vr,
  calendar: as,
  "shopping-bag": mt,
  "shopping-cart": Is,
  cart: Is,
  "alert-circle": ki,
  alert: ki,
  "map-pin": Cs,
  location: Cs,
  star: Ls,
  "credit-card": Hr,
  file: vi,
  "file-text": vi,
  "external-link": $r,
  "chevron-right": zr,
  sparkles: Ur,
  chart: Ss,
  "bar-chart": Ss,
  wifi: Ji,
  coffee: Gi,
  globe: Ki,
  tag: Ds,
  sun: Wi
}, Ha = {
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
function Os({ name: l = "package", size: u = "sm", color: m = "currentColor", className: x = "" }) {
  const b = String(l).toLowerCase().replace(/_/g, "-"), g = $a[b], T = u === "xs" ? 12 : u === "lg" ? 20 : u === "md" ? 16 : 14, I = Ha[b];
  return /* @__PURE__ */ h("span", { style: { display: "inline-flex", alignItems: "center", justifyContent: "center", width: T, height: T, color: ns(m), flexShrink: 0, fontSize: T, lineHeight: 1 }, children: g ? /* @__PURE__ */ h(g, { size: T, className: x }) : I || /* @__PURE__ */ h(Ds, { size: T, className: x }) });
}
function Va({ label: l, variant: u = "primary", size: m = "sm", action: x, href: b, target: g = "_blank", onClick: T, disabled: I = !1, flex: _, className: A = "", style: N }) {
  const F = {
    primary: { background: pe.accent, color: "#fff", border: "1px solid transparent" },
    secondary: { background: "#f1f5f9", color: pe.foreground, border: "1px solid transparent" },
    outline: { background: "transparent", color: pe.foreground, border: `1px solid ${pe.border}` },
    ghost: { background: "transparent", color: pe.foreground, border: "1px solid transparent" }
  };
  return /* @__PURE__ */ h("button", { type: "button", disabled: I, "data-widget-action": x, onClick: () => {
    T == null || T(), b && typeof window < "u" && window.open(b, g || "_blank", "noopener,noreferrer");
  }, className: A, style: { width: _ ? void 0 : "100%", flex: _, borderRadius: 8, padding: m === "xs" ? "5px 10px" : m === "md" ? "9px 16px" : "7px 12px", fontSize: 12, fontWeight: 600, cursor: I ? "not-allowed" : "pointer", opacity: I ? 0.5 : 1, ...F[u], ...Ye(A), ...N }, children: l });
}
function qa({ src: l, alt: u = "", width: m = "100%", height: x = 140, radius: b = "md", className: g = "", style: T }) {
  const I = { none: 0, sm: 6, md: 8, lg: 12, full: 9999 }, _ = (A) => typeof A == "number" ? `${A}px` : A;
  return l ? /* @__PURE__ */ h("img", { src: l, alt: u, loading: "lazy", referrerPolicy: "no-referrer", className: g, style: { width: _(m), height: _(x), objectFit: "cover", display: "block", borderRadius: I[b], ...T } }) : /* @__PURE__ */ h("div", { className: g, style: { width: _(m), height: _(x), display: "flex", alignItems: "center", justifyContent: "center", borderRadius: I[b], background: "#f1f5f9", color: "#94a3b8", ...T }, children: /* @__PURE__ */ h(mt, { size: 28 }) });
}
function Wa({ value: l = 0, max: u = 100, color: m = "primary", className: x = "" }) {
  const b = Math.min(100, Math.max(0, Number(l) / (Number(u) || 100) * 100));
  return /* @__PURE__ */ h("div", { className: x, style: { width: "100%", height: 8, overflow: "hidden", borderRadius: 9999, background: "#e2e8f0" }, children: /* @__PURE__ */ h("div", { style: { width: `${b}%`, height: "100%", borderRadius: 9999, background: m === "success" ? "#22c55e" : m === "warning" ? "#f59e0b" : m === "destructive" ? "#ef4444" : pe.accent } }) });
}
function Ka({ value: l, max: u = 5, className: m = "" }) {
  return l == null || !Number.isFinite(Number(l)) ? null : /* @__PURE__ */ h("div", { className: m, style: { display: "flex", gap: 3 }, children: Array.from({ length: Number(u) }).map((x, b) => /* @__PURE__ */ h("span", { style: { color: b < Math.round(Number(l)) ? "#f59e0b" : "#cbd5e1" }, children: /* @__PURE__ */ h(Ls, { size: 13 }) }, b)) });
}
function Ga({ src: l, name: u, size: m = "md", className: x = "" }) {
  const b = m === "sm" ? 24 : m === "lg" ? 40 : 32, g = u ? u.split(" ").map((T) => T[0]).slice(0, 2).join("").toUpperCase() : "?";
  return /* @__PURE__ */ h("div", { className: x, style: { width: b, height: b, borderRadius: 9999, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, background: "#e2e8f0", color: "#334155", fontSize: 11, fontWeight: 700 }, children: l ? /* @__PURE__ */ h("img", { src: l, alt: u || "Avatar", style: { width: "100%", height: "100%", objectFit: "cover" } }) : g });
}
function Ja({ label: l, placeholder: u, value: m, name: x, onInput: b, options: g, type: T = "text", rows: I = 3, className: _ = "" }) {
  const A = { width: "100%", boxSizing: "border-box", border: `1px solid ${pe.border}`, borderRadius: 8, padding: "7px 10px", background: pe.surface, color: pe.foreground, fontSize: 12, outline: "none" };
  return /* @__PURE__ */ h("label", { className: _, style: { display: "flex", flexDirection: "column", width: "100%", gap: 4, color: pe.muted, fontSize: 11, fontWeight: 600 }, children: [
    l,
    Array.isArray(g) && g.every((N) => typeof N == "string") ? /* @__PURE__ */ h("select", { name: x, onInput: b, defaultValue: "", style: A, children: [
      /* @__PURE__ */ h("option", { value: "", disabled: !0, children: "Odaberite" }),
      g.map((N) => /* @__PURE__ */ h("option", { value: N, children: N }, N))
    ] }) : T === "textarea" ? /* @__PURE__ */ h("textarea", { name: x, onInput: b, defaultValue: m, placeholder: u, rows: I, style: { ...A, resize: "vertical" } }) : /* @__PURE__ */ h("input", { name: x, onInput: b, type: T, defaultValue: m, placeholder: u, style: A })
  ] });
}
function Xa({ bars: l = [], height: u = 115, className: m = "" }) {
  const x = l.map((g) => Number(g.value || 0)), b = Math.max(...x, 1);
  return /* @__PURE__ */ h("div", { className: m, style: { display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 6, width: "100%", height: u }, children: l.map((g, T) => {
    const I = g.height ?? g.h, _ = I !== void 0 ? typeof I == "number" ? `${I}px` : I : `${Math.max(8, Number(g.value || 0) / b * Math.max(40, Number(u) - 24))}px`;
    return /* @__PURE__ */ h("div", { style: { display: "flex", flex: 1, height: "100%", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", gap: 6 }, children: [
      /* @__PURE__ */ h("div", { title: g.label || g.day, style: { width: "100%", minHeight: 6, height: _, borderRadius: 6, background: pe.accent } }),
      /* @__PURE__ */ h("span", { style: { color: pe.muted, fontSize: 10, fontWeight: 600 }, children: g.label || g.day })
    ] }, g.id ?? T);
  }) });
}
function Ya({ items: l = [], className: u = "" }) {
  return /* @__PURE__ */ h("div", { className: u, style: { display: "flex", flexDirection: "column", width: "100%" }, children: l.map((m, x) => {
    const b = !!(m.complete || m.completed), g = !!m.current;
    return /* @__PURE__ */ h("div", { style: { display: "flex", alignItems: "stretch", gap: 10 }, children: [
      /* @__PURE__ */ h("div", { style: { display: "flex", flexDirection: "column", alignItems: "center" }, children: [
        /* @__PURE__ */ h("div", { style: { width: 24, height: 24, borderRadius: 9999, display: "flex", alignItems: "center", justifyContent: "center", background: b ? "#dcfce7" : g ? "#e0f2fe" : "#f1f5f9", color: b ? "#166534" : g ? "#0369a1" : "#94a3b8" }, children: /* @__PURE__ */ h(Os, { name: m.icon || (b ? "check" : g ? "clock" : "circle"), size: "xs" }) }),
        x < l.length - 1 ? /* @__PURE__ */ h("div", { style: { width: 2, minHeight: 18, flex: 1, margin: "2px 0", background: b ? "#86efac" : "#e2e8f0" } }) : null
      ] }),
      /* @__PURE__ */ h("div", { style: { flex: 1, minWidth: 0, paddingBottom: x < l.length - 1 ? 12 : 2 }, children: [
        /* @__PURE__ */ h("div", { style: { color: pe.foreground, fontSize: 12, lineHeight: 1.3, fontWeight: g ? 700 : 500 }, children: m.label }),
        m.detail ? /* @__PURE__ */ h("div", { style: { color: pe.muted, fontSize: 11, marginTop: 2 }, children: m.detail }) : null
      ] })
    ] }, m.id ?? x);
  }) });
}
const Za = { Card: Oa, Row: ja, Col: Ma, Box: _a, Title: Fa, Text: Ra, Caption: Ba, Badge: Ua, Divider: za, Icon: Os, Button: Va, Image: qa, ProgressBar: Wa, Rating: Ka, Avatar: Ga, Input: Ja, BarChart: Xa, Timeline: Ya };
function Qa({ template: l, data: u = {}, onAction: m, onInputChange: x, showErrorDetails: b = !0 }) {
  try {
    const g = en(l, u, { onAction: m, onInputChange: x }), T = /<Card\b/.test(l);
    return /* @__PURE__ */ h("div", { className: `dynamic-jsx-widget ${T ? "" : "pitaj-inline-widget-card"}`.trim(), children: g });
  } catch (g) {
    return /* @__PURE__ */ h("div", { className: "pitaj-inline-widget-card", style: { borderColor: "#fecaca", background: "#fff7f7", color: "#991b1b", fontSize: 12, lineHeight: 1.4 }, children: [
      /* @__PURE__ */ h("strong", { style: { display: "block", marginBottom: 4 }, children: "Widget se ne može prikazati" }),
      b ? /* @__PURE__ */ h("span", { children: g instanceof Error ? g.message : "Neispravan JSX template." }) : null
    ] });
  }
}
function en(l, u, m) {
  if (!l.trim()) return null;
  const b = Da.parse(`<>${l.trim()}</>`, { sourceType: "module", plugins: ["jsx", "typescript"] }).program.body[0];
  if (!b || b.type !== "ExpressionStatement") throw new Error("Template mora biti JSX izraz.");
  return ae(b.expression, u, m);
}
function ae(l, u, m) {
  var x, b;
  if (!l) return null;
  switch (l.type) {
    case "JSXElement": {
      const g = rn(l.openingElement.name), T = Za[g];
      if (!T) throw new Error(`Komponenta <${g}> nije podržana.`);
      const I = {};
      for (const A of l.openingElement.attributes)
        if (A.type === "JSXAttribute" && (I[A.name.name] = sn(A.value, u, m)), A.type === "JSXSpreadAttribute") {
          const N = ae(A.argument, u, m);
          N && typeof N == "object" && Object.assign(I, N);
        }
      if (g === "Input" && typeof I.name == "string" && /^[a-zA-Z][a-zA-Z0-9_]{0,63}$/.test(I.name)) {
        const A = I.name;
        I.onInput = (N) => {
          var F;
          return (F = m.onInputChange) == null ? void 0 : F.call(m, A, N.currentTarget.value);
        };
      }
      if (g === "Button" && I.action && m.onAction) {
        const A = I.onClick;
        I.onClick = () => {
          var N;
          A == null || A(), (N = m.onAction) == null || N.call(m, String(I.action));
        };
      }
      const _ = Hi(l.children, u, m);
      return Ni(T, I, ..._);
    }
    case "JSXFragment":
      return Ni(ks, null, ...Hi(l.children, u, m));
    case "JSXText":
      return l.value.trim() ? l.value.replace(/\s+/g, " ") : null;
    case "JSXExpressionContainer":
      return l.expression.type === "JSXEmptyExpression" ? null : ae(l.expression, u, m);
    case "Identifier":
      return l.name === "undefined" ? void 0 : u[l.name];
    case "StringLiteral":
    case "NumericLiteral":
    case "BooleanLiteral":
      return l.value;
    case "NullLiteral":
      return null;
    case "TemplateLiteral":
      return l.quasis.reduce((g, T, I) => g + T.value.cooked + (l.expressions[I] ? String(ae(l.expressions[I], u, m) ?? "") : ""), "");
    case "MemberExpression": {
      const g = ae(l.object, u, m);
      if (g == null) return;
      const T = l.computed ? ae(l.property, u, m) : l.property.name;
      if (T === "__proto__" || T === "prototype" || T === "constructor") throw new Error("Nedozvoljen pristup podatku.");
      return g[T];
    }
    case "ObjectExpression": {
      const g = {};
      for (const T of l.properties) {
        if (T.type !== "ObjectProperty") continue;
        const I = T.key.type === "Identifier" && !T.computed ? T.key.name : ae(T.key, u, m);
        g[I] = ae(T.value, u, m);
      }
      return g;
    }
    case "ArrayExpression":
      return l.elements.map((g) => ae(g, u, m));
    case "ConditionalExpression":
      return ae(l.test, u, m) ? ae(l.consequent, u, m) : ae(l.alternate, u, m);
    case "LogicalExpression": {
      const g = ae(l.left, u, m);
      return l.operator === "&&" ? g && ae(l.right, u, m) : l.operator === "||" ? g || ae(l.right, u, m) : l.operator === "??" ? g ?? ae(l.right, u, m) : null;
    }
    case "BinaryExpression":
      return tn(l.operator, ae(l.left, u, m), ae(l.right, u, m));
    case "UnaryExpression": {
      const g = ae(l.argument, u, m);
      return l.operator === "!" ? !g : l.operator === "-" ? -g : l.operator === "+" ? +g : g;
    }
    case "CallExpression": {
      if (l.callee.type !== "MemberExpression" || l.callee.computed || l.callee.property.name !== "map") throw new Error("Dozvoljeno je samo mapiranje nizova.");
      const g = ae(l.callee.object, u, m);
      if (!Array.isArray(g)) return [];
      const T = l.arguments[0];
      if (!T || T.type !== "ArrowFunctionExpression") throw new Error("Neispravna map funkcija.");
      const I = ((x = T.params[0]) == null ? void 0 : x.name) || "item", _ = ((b = T.params[1]) == null ? void 0 : b.name) || "index";
      return g.map((A, N) => ae(T.body, { ...u, [I]: A, [_]: N }, m));
    }
    case "ParenthesizedExpression":
      return ae(l.expression, u, m);
    default:
      throw new Error(`Izraz ${l.type} nije podržan.`);
  }
}
function tn(l, u, m) {
  switch (l) {
    case "+":
      return u + m;
    case "-":
      return u - m;
    case "*":
      return u * m;
    case "/":
      return u / m;
    case "%":
      return u % m;
    case "===":
      return u === m;
    case "!==":
      return u !== m;
    case "==":
      return u == m;
    case "!=":
      return u != m;
    case "<":
      return u < m;
    case ">":
      return u > m;
    case "<=":
      return u <= m;
    case ">=":
      return u >= m;
    default:
      throw new Error(`Operator ${l} nije podržan.`);
  }
}
function sn(l, u, m) {
  return l ? l.type === "StringLiteral" ? l.value : l.type === "JSXExpressionContainer" ? ae(l.expression, u, m) : null : !0;
}
function Hi(l, u, m) {
  const x = [];
  for (const b of l) {
    const g = ae(b, u, m);
    g == null || g === !1 || (Array.isArray(g) ? x.push(...g) : x.push(g));
  }
  return x;
}
function rn(l) {
  if (l.type === "JSXIdentifier") return l.name;
  throw new Error("Podržane su samo direktne DSL komponente.");
}
function vs(l) {
  return (l || "").replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]/gu, "").trim();
}
function an(l) {
  const u = vs(l).toLowerCase();
  return u.includes("wi-fi") || u.includes("wifi") || u.includes("internet") ? Ji : u.includes("doručak") || u.includes("dorucak") || u.includes("kafa") || u.includes("coffee") ? Gi : u.includes("restoran") || u.includes("hrana") || u.includes("dining") ? Gr : u.includes("parking") || u.includes("garaža") || u.includes("garaza") || u.includes("auto") ? Jr : u.includes("spa") || u.includes("bazen") || u.includes("wellness") ? Xr : u.includes("klima") || u.includes("hlađenje") || u.includes("hladjenje") ? Yr : u.includes("teretana") || u.includes("fitness") || u.includes("gym") ? Zr : Ds;
}
function In({ widget: l, onAction: u, apiUrl: m, companyId: x, preview: b, conversationId: g, onApiError: T, onWorkflowState: I }) {
  const _ = l.type || "custom_html", A = l.config || {}, [N, F] = be("idle"), [K, ne] = be(!1), [ce, fe] = be("idle"), [Ce, ee] = be(null), [d, X] = be(null), [$, Ie] = be(null), [Be, Ne] = be(() => Date.now()), [Ue, me] = be(null), B = JSON.stringify([x, g, l.id, A.function_revision, b]), D = at(0), C = at(B), ve = C.current === B ? ce : "idle", ze = C.current === B ? Ce : null, ke = ($ == null ? void 0 : $.identity) === B ? Math.max(0, Math.ceil(($.until - Be) / 1e3)) : 0, Ze = at(/* @__PURE__ */ Object.create(null)), We = at(!1), Ke = at(null), H = at(null), [oe, Y] = be("idle"), [ge, ie] = be(null), $e = at(I);
  $e.current = I;
  const J = at(T);
  J.current = T;
  const G = l.workflow;
  gs(() => (D.current++, C.current = B, We.current = !1, me(null), fe("idle"), X(null), Ie(null), ee(null), ne(!1), Ze.current = /* @__PURE__ */ Object.create(null), () => {
    D.current++;
  }), [B]), gs(() => {
    if (!$ || $.identity !== B) return;
    const re = () => {
      const te = Date.now();
      Ne(te), te >= $.until && Ie((q) => q === $ ? null : q);
    };
    re();
    const R = window.setInterval(re, 1e3);
    return () => window.clearInterval(R);
  }, [$, B]);
  const De = async () => {
    var re, R;
    if (!(!G || !x || b)) {
      Y("loading");
      try {
        const te = await Wr(x, G.run_id, m, G.display_node_id);
        ie(Kr(te, G, l.id)), Y("ready"), (re = $e.current) == null || re.call($e, te);
      } catch (te) {
        ie(null), Y("error"), (R = J.current) == null || R.call(J, te);
      }
    }
  };
  gs(() => {
    G && !b && De();
  }, [x, m, b, l.id, G == null ? void 0 : G.run_id, G == null ? void 0 : G.display_node_id, G == null ? void 0 : G.form_revision]);
  const L = async (re) => {
    if (N === "sending" || N === "success") return;
    if (b || !x || !l.id || !g || !/^\d+$/.test(g)) {
      F("error");
      return;
    }
    if (G && !ge) {
      F("error");
      return;
    }
    const R = JSON.stringify(re);
    (!Ke.current || H.current !== R) && (Ke.current = crypto.randomUUID(), H.current = R), F("sending");
    try {
      const te = (m || window.location.origin).replace(/\/$/, ""), q = await Vi(x, m), Pe = await fetch(`${te}/api/widget/${encodeURIComponent(x)}/v2/inline-widgets/${l.id}/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json", Authorization: `Bearer ${q}` },
        body: JSON.stringify({
          submission_uuid: Ke.current,
          conversation_id: Number(g),
          payload: re,
          ...G ? { workflow_run_id: G.run_id, workflow_wait_node: ge, form_revision: G.form_revision } : {}
        })
      });
      Pe.ok || await qi(Pe, "Zahtjev nije potvrđen."), F("success"), G && De();
    } catch (te) {
      te instanceof vt && te.code === "FORM_REVISION_MISMATCH" ? (ie(null), F("changed")) : (F("error"), T == null || T(te));
    }
  }, U = () => {
    if (A.jsx_template || _ === "dynamic_jsx" || _ === "ai_builder")
      return /* @__PURE__ */ h(
        Qa,
        {
          template: A.jsx_template || "",
          showErrorDetails: !!b,
          data: {
            ...Na(A, (Ue == null ? void 0 : Ue.identity) === B ? Ue.data : {}, !!b),
            ...Array.isArray(A.function_names) && A.function_names.length > 0 ? { function_state: { phase: ve, function_id: ze } } : {}
          },
          onInputChange: (re, R) => {
            Ze.current[re] !== R && (D.current++, We.current = !1, C.current = B, me(null), fe("idle"), X(null), ee(null)), Ze.current[re] = R;
          },
          onAction: (re) => {
            if (Ca(re, A)) {
              const R = Ia(re, A);
              if (!R || b || !x || !l.id || !g) {
                ne(!0);
                return;
              }
              if (We.current || ($ == null ? void 0 : $.identity) === B && Date.now() < $.until) return;
              We.current = !0;
              const te = ++D.current;
              C.current = B, me(null), X(null), ee(R), ne(!1), fe("loading"), va(x, l.id, R, g, m, Ea(R, A, Ze.current)).then((q) => {
                te === D.current && (me({ identity: B, data: q }), fe("success"));
              }).catch((q) => {
                if (te !== D.current) return;
                const Pe = q instanceof Li ? "rate_limit" : q instanceof vt ? "api" : "other", nt = wa(Pe, q instanceof vt ? q.code : void 0, q instanceof vt ? q.status : void 0);
                if (X(nt), fe("error"), q instanceof Li) {
                  const Oe = Date.now();
                  Ne(Oe), Ie({ identity: B, until: Sa(Oe, q.retryAfterSeconds) });
                }
                q instanceof vt && ["WIDGET_SESSION_INVALID", "WIDGET_SESSION_REQUIRED", "COUNTRY_BLOCKED", "WIDGET_FORMS_DISABLED"].includes(q.code || "") && (T == null || T(q));
              }).finally(() => {
                te === D.current && (We.current = !1);
              });
              return;
            }
            ne(!1), u == null || u(re);
          }
        }
      );
    switch (_) {
      case "action_client":
        return /* @__PURE__ */ h("div", { role: "status", className: "pitaj-inline-widget-card", children: A.client_action_state === "pending" ? "Čekamo odgovor aplikacije…" : A.client_action_state === "success" ? "Aplikacija je prijavila uspjeh." : A.client_action_state === "failed" ? "Aplikacija je prijavila neuspjeh." : A.client_action_state === "timeout" ? "Aplikacija nije odgovorila na vrijeme. Ishod nije poznat." : "Akcija je zatražena. Rezultat nije potvrđen." });
      case "action_link":
        try {
          const re = new URL(String(A.url || ""));
          if (re.protocol !== "https:" || re.username || re.password || typeof A.label != "string" || !A.label.trim()) throw new Error("Invalid link");
          return /* @__PURE__ */ h("a", { className: "pitaj-widget-btn-primary", href: re.href, target: "_blank", rel: "noopener noreferrer", style: { display: "inline-block", textAlign: "center", textDecoration: "none" }, children: A.label });
        } catch {
          return /* @__PURE__ */ h("div", { role: "status", children: "Link trenutno nije dostupan." });
        }
      case "booking":
      case "calendar":
      case "calendly":
      case "cal":
        return /* @__PURE__ */ h(mn, { config: A });
      case "api":
      case "api_widget":
        return /* @__PURE__ */ h(yn, { config: A });
      case "order_status":
      case "order_tracking":
      case "shopify_order":
        return /* @__PURE__ */ h(xn, { config: A });
      case "book_demo":
        return /* @__PURE__ */ h(nn, { config: A, onSubmit: L });
      case "products":
        return /* @__PURE__ */ h(on, { config: A, onAction: u });
      case "cart":
        return /* @__PURE__ */ h(ln, { config: A, onAction: u });
      case "usage_chart":
        return !b && (A.metric_value == null || !Array.isArray(A.chart_data) || A.chart_data.length === 0) ? /* @__PURE__ */ h("div", { role: "status", children: "Podaci o potrošnji trenutno nisu dostupni." }) : /* @__PURE__ */ h(cn, { config: A });
      case "upcoming_classes":
        return !b && (!Array.isArray(A.classes) || A.classes.length === 0) ? /* @__PURE__ */ h("div", { role: "status", children: "Trenutno nema dostupnih termina." }) : /* @__PURE__ */ h(hn, { config: A, onAction: u });
      case "hotel_booking":
        return !b && (!A.name || !A.price || !A.location) ? /* @__PURE__ */ h("div", { role: "status", children: "Podaci o smještaju trenutno nisu dostupni." }) : /* @__PURE__ */ h(un, { config: A, onSubmit: L });
      case "contact":
        return /* @__PURE__ */ h(pn, { config: A, onSubmit: L });
      case "weather":
        return !b && (!A.city || A.temp == null || !A.condition) ? /* @__PURE__ */ h("div", { role: "status", children: "Podaci o vremenu trenutno nisu dostupni." }) : /* @__PURE__ */ h(dn, { config: A });
      case "custom_iframe":
        return /* @__PURE__ */ h(fn, { config: A, title: l.name });
      case "custom_html":
      default:
        return !b && !A.html ? null : /* @__PURE__ */ h(gn, { config: A, onAction: u });
    }
  };
  return /* @__PURE__ */ h(ks, { children: [
    /* @__PURE__ */ h("style", { children: ka }),
    N === "success" ? /* @__PURE__ */ h("div", { role: "status", children: "Vaš zahtjev je zaprimljen." }) : /* @__PURE__ */ h("fieldset", { disabled: N === "sending" || ve === "loading" || !!(G && ["book_demo", "contact", "hotel_booking"].includes(_) && !ge), style: { border: 0, padding: 0, margin: 0, minWidth: 0 }, children: U() }),
    N === "sending" && /* @__PURE__ */ h("div", { role: "status", children: "Slanje zahtjeva..." }),
    N === "error" && /* @__PURE__ */ h("div", { role: "alert", children: "Zahtjev nije potvrđen. Provjerite vezu i pokušajte ponovo." }),
    N === "changed" && /* @__PURE__ */ h("div", { role: "alert", children: [
      "Forma je promijenjena. Osvježite je i provjerite podatke prije slanja. ",
      /* @__PURE__ */ h("button", { type: "button", onClick: () => {
        F("idle"), De();
      }, children: "Osvježi formu" })
    ] }),
    K && /* @__PURE__ */ h("div", { role: "alert", children: "Ova funkcija trenutno nije povezana. Pokušajte ponovo kasnije." }),
    ve === "loading" && /* @__PURE__ */ h("div", { role: "status", children: "Učitavanje podataka..." }),
    ve === "success" && /* @__PURE__ */ h("div", { role: "status", children: "Podaci su ažurirani." }),
    ke > 0 ? /* @__PURE__ */ h("div", { role: "status", children: [
      "Previše poziva. Pokušajte za ",
      ke,
      "s."
    ] }) : ve === "error" && /* @__PURE__ */ h("div", { role: "alert", children: d === "input" ? "Odaberite dozvoljene vrijednosti i pokušajte ponovo." : d === "unavailable" ? "Ova funkcija trenutno nije dostupna." : d === "rate_limit" ? "Možete ponovo pokušati poziv funkcije." : "Podatke nije moguće učitati. Pokušajte ponovo." }),
    G && oe === "loading" && /* @__PURE__ */ h("div", { role: "status", children: "Provjeravamo sljedeći korak..." }),
    G && oe === "error" && /* @__PURE__ */ h("div", { role: "alert", children: [
      "Nije moguće provjeriti korak. ",
      /* @__PURE__ */ h("button", { type: "button", onClick: () => void De(), children: "Pokušaj ponovo" })
    ] }),
    G && oe === "ready" && !ge && N !== "success" && ["book_demo", "contact", "hotel_booking"].includes(_) && /* @__PURE__ */ h("div", { role: "status", children: "Ova forma nije aktivna u trenutnom koraku procedure." })
  ] });
}
function js({
  fields: l,
  values: u,
  onChange: m
}) {
  return /* @__PURE__ */ h(ks, { children: l.map((x, b) => {
    const g = u[x.key] ?? (x.type === "checkbox" ? !1 : ""), T = x.key || `field_${b}`;
    if (x.type === "textarea")
      return /* @__PURE__ */ h("div", { className: "pitaj-widget-field", children: [
        /* @__PURE__ */ h("label", { children: [
          x.label,
          " ",
          x.required && /* @__PURE__ */ h("span", { style: { color: "#ef4444" }, children: "*" })
        ] }),
        /* @__PURE__ */ h(
          "textarea",
          {
            required: x.required,
            rows: 3,
            placeholder: x.placeholder || "",
            value: g,
            onInput: (A) => m(T, A.target.value)
          }
        )
      ] }, T);
    if (x.type === "checkbox")
      return /* @__PURE__ */ h("div", { className: "pitaj-widget-checkbox-row", children: [
        /* @__PURE__ */ h(
          "input",
          {
            id: `widget-chk-${T}-${b}`,
            type: "checkbox",
            required: x.required,
            checked: !!g,
            onChange: (A) => m(T, A.target.checked)
          }
        ),
        /* @__PURE__ */ h("label", { htmlFor: `widget-chk-${T}-${b}`, children: [
          x.label,
          " ",
          x.required && /* @__PURE__ */ h("span", { style: { color: "#ef4444" }, children: "*" })
        ] })
      ] }, T);
    if (x.type === "select")
      return /* @__PURE__ */ h("div", { className: "pitaj-widget-field", children: [
        /* @__PURE__ */ h("label", { children: [
          x.label,
          " ",
          x.required && /* @__PURE__ */ h("span", { style: { color: "#ef4444" }, children: "*" })
        ] }),
        /* @__PURE__ */ h(
          "select",
          {
            required: x.required,
            value: g,
            onChange: (A) => m(T, A.target.value),
            children: [
              /* @__PURE__ */ h("option", { value: "", children: x.placeholder || "Odaberite..." }),
              (x.options || []).map((A, N) => /* @__PURE__ */ h("option", { value: A, children: A }, N))
            ]
          }
        )
      ] }, T);
    const I = x.type === "phone" ? "tel" : x.type === "email" ? "email" : x.type === "date" ? "date" : x.type === "number" ? "number" : "text";
    let _;
    if (x.type === "date") {
      const A = T.toLowerCase();
      if (A.includes("out") || A.includes("odjav") || A.includes("end") || A.includes("do")) {
        const N = u.check_in || u.start || u.od;
        N && typeof N == "string" && (_ = N);
      }
    }
    return /* @__PURE__ */ h("div", { className: "pitaj-widget-field", children: [
      /* @__PURE__ */ h("label", { children: [
        x.label,
        " ",
        x.required && /* @__PURE__ */ h("span", { style: { color: "#ef4444" }, children: "*" })
      ] }),
      /* @__PURE__ */ h(
        "input",
        {
          type: I,
          required: x.required,
          placeholder: x.placeholder || "",
          min: _,
          value: g,
          onInput: (A) => m(T, A.target.value)
        }
      )
    ] }, T);
  }) });
}
function nn({ config: l, onSubmit: u }) {
  const m = [
    { key: "name", type: "text", label: "Ime i prezime", placeholder: "Petar Petrović", required: !0 },
    { key: "phone", type: "phone", label: "Broj telefona", placeholder: "+387 61 123 456", required: !1 },
    { key: "email", type: "email", label: "Poslovni email", placeholder: "petar@kompanija.ba", required: !0 }
  ], x = Array.isArray(l.fields) && l.fields.length > 0 ? l.fields : m, [b, g] = be({}), T = l.title || "Razgovarajte sa prodajom", I = l.subtitle || "Recite nam više o svojoj kompaniji i stupićemo u kontakt.";
  return /* @__PURE__ */ h("div", { className: "pitaj-inline-widget-card", children: [
    /* @__PURE__ */ h("div", { className: "pitaj-widget-header", children: [
      /* @__PURE__ */ h("div", { className: "pitaj-widget-title", children: T }),
      /* @__PURE__ */ h("div", { className: "pitaj-widget-subtitle", children: I })
    ] }),
    /* @__PURE__ */ h("form", { onSubmit: (N) => {
      N.preventDefault();
      for (const F of x)
        if (F.required) {
          const K = b[F.key];
          if (F.type === "checkbox" && !K || F.type !== "checkbox" && (!K || !String(K).trim())) return;
        }
      u(Object.fromEntries(x.filter((F) => b[F.key] !== void 0).map((F) => [F.key, String(b[F.key])])));
    }, className: "pitaj-widget-form", children: [
      /* @__PURE__ */ h(js, { fields: x, values: b, onChange: (N, F) => {
        g((K) => ({ ...K, [N]: F }));
      } }),
      /* @__PURE__ */ h("button", { type: "submit", className: "pitaj-widget-btn-primary", children: l.submit_label || "Zakaži razgovor" })
    ] })
  ] });
}
function on({ config: l, onAction: u }) {
  var F, K, ne, ce, fe, Ce, ee, d, X, $, Ie, Be, Ne, Ue;
  const [m, x] = be(0), b = ((F = l.data) == null ? void 0 : F.products) || ((K = l.data) == null ? void 0 : K.items) || l.products || l.items || ((ne = l.data) != null && ne.title || (ce = l.data) != null && ce.name || l.name ? [
    {
      id: ((fe = l.data) == null ? void 0 : fe.id) || 1,
      name: ((Ce = l.data) == null ? void 0 : Ce.title) || ((ee = l.data) == null ? void 0 : ee.name) || l.name,
      subtitle: ((d = l.data) == null ? void 0 : d.subtitle) || l.subtitle || "",
      price: ((X = l.data) == null ? void 0 : X.price) || l.price || "Cijena na upit",
      image: (($ = l.data) == null ? void 0 : $.image) || ((Ie = l.data) == null ? void 0 : Ie.image_url) || l.image || "",
      addToCartUrl: ((Be = l.data) == null ? void 0 : Be.addToCartUrl) || ((Ne = l.data) == null ? void 0 : Ne.add_to_cart_url) || l.addToCartUrl || ""
    }
  ] : []), g = Array.isArray(b) ? b : [];
  if (g.length === 0) return /* @__PURE__ */ h("div", { role: "status", children: "Proizvodi trenutno nisu dostupni." });
  const T = g[m] || g[0], I = T.image || T.image_url || T.imageUrl || T.featured_image || (Array.isArray(T.images) ? T.images[0] : ""), _ = () => {
    x((me) => (me + 1) % g.length);
  }, A = () => {
    x((me) => (me - 1 + g.length) % g.length);
  }, N = () => {
    if (T.addToCartUrl) {
      window.open(T.addToCartUrl, "_blank", "noopener,noreferrer");
      return;
    }
    u == null || u(`Zanima me proizvod: ${T.name} (${T.price})`);
  };
  return /* @__PURE__ */ h("div", { className: "pitaj-inline-widget-card products-widget", children: [
    /* @__PURE__ */ h("div", { className: "pitaj-widget-bar", children: [
      /* @__PURE__ */ h("span", { className: "pitaj-widget-badge-icon", children: /* @__PURE__ */ h(mt, { size: 14 }) }),
      /* @__PURE__ */ h("span", { className: "pitaj-widget-bar-title", children: l.title || ((Ue = l.data) == null ? void 0 : Ue.category) || "Izbor artikala" }),
      g.length > 1 && /* @__PURE__ */ h("span", { className: "pitaj-widget-counter", children: [
        m + 1,
        " / ",
        g.length
      ] })
    ] }),
    /* @__PURE__ */ h("div", { className: "pitaj-product-card", children: [
      /* @__PURE__ */ h("div", { className: "pitaj-product-image-wrap", children: [
        I ? /* @__PURE__ */ h(
          "img",
          {
            src: I,
            alt: T.name || "Proizvod",
            className: "pitaj-product-img",
            loading: "lazy",
            referrerPolicy: "no-referrer",
            onError: (me) => {
              me.currentTarget.style.display = "none";
            }
          }
        ) : /* @__PURE__ */ h("div", { style: "width: 100%; height: 140px; background: #f1f5f9; display: flex; align-items: center; justify-content: center; border-radius: 10px; color: #94a3b8;", children: /* @__PURE__ */ h(mt, { size: 32 }) }),
        g.length > 1 && /* @__PURE__ */ h("div", { className: "pitaj-carousel-controls", children: [
          /* @__PURE__ */ h("button", { type: "button", onClick: A, "aria-label": "Prethodni", className: "pitaj-carousel-btn", children: "‹" }),
          /* @__PURE__ */ h("button", { type: "button", onClick: _, "aria-label": "Sljedeći", className: "pitaj-carousel-btn", children: "›" })
        ] })
      ] }),
      /* @__PURE__ */ h("div", { className: "pitaj-product-info", children: [
        /* @__PURE__ */ h("div", { className: "pitaj-product-name", children: T.name || T.title }),
        T.subtitle && /* @__PURE__ */ h("div", { className: "pitaj-product-sub", children: T.subtitle }),
        /* @__PURE__ */ h("div", { className: "pitaj-product-price", children: T.price }),
        T.addToCartUrl ? /* @__PURE__ */ h(
          "a",
          {
            href: T.addToCartUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "pitaj-widget-btn-primary pitaj-btn-select",
            style: "text-align: center; text-decoration: none; display: inline-block;",
            children: "Naruči / Kupi odmah"
          }
        ) : /* @__PURE__ */ h("button", { type: "button", onClick: N, className: "pitaj-widget-btn-primary pitaj-btn-select", children: "Zatraži ponudu" })
      ] })
    ] })
  ] });
}
function ln({ config: l, onAction: u }) {
  var T, I, _;
  const m = ((T = l.data) == null ? void 0 : T.items) || ((I = l.data) == null ? void 0 : I.products) || l.items || l.products, x = Array.isArray(m) ? m : [], b = ((_ = l.data) == null ? void 0 : _.total) ?? l.total;
  if (x.length === 0) return /* @__PURE__ */ h("div", { role: "status", children: "Podaci o korpi trenutno nisu dostupni." });
  const g = () => {
    var A, N;
    if ((A = l.data) != null && A.checkoutUrl || l.checkoutUrl) {
      window.open(((N = l.data) == null ? void 0 : N.checkoutUrl) || l.checkoutUrl, "_blank", "noopener,noreferrer");
      return;
    }
    u == null || u(`Želim dovršiti narudžbu iz korpe${b != null ? ` (Ukupno: ${b})` : ""}`);
  };
  return /* @__PURE__ */ h("div", { className: "pitaj-inline-widget-card cart-widget", children: [
    /* @__PURE__ */ h("div", { className: "pitaj-widget-bar", children: [
      /* @__PURE__ */ h("span", { className: "pitaj-widget-badge-icon", children: /* @__PURE__ */ h(Is, { size: 14 }) }),
      /* @__PURE__ */ h("span", { className: "pitaj-widget-bar-title", children: [
        x.length,
        " stavke u korpi"
      ] })
    ] }),
    /* @__PURE__ */ h("div", { className: "pitaj-cart-items-list", children: x.map((A, N) => {
      const F = A.image || A.image_url || A.imageUrl || A.featured_image || (Array.isArray(A.images) ? A.images[0] : "");
      return /* @__PURE__ */ h("div", { className: "pitaj-cart-item-row", children: [
        F ? /* @__PURE__ */ h(
          "img",
          {
            src: F,
            alt: A.name,
            className: "pitaj-cart-thumb",
            loading: "lazy",
            referrerPolicy: "no-referrer",
            onError: (K) => {
              K.currentTarget.style.display = "none";
            }
          }
        ) : /* @__PURE__ */ h("div", { style: "width: 40px; height: 40px; border-radius: 6px; background: #f1f5f9; display: flex; align-items: center; justify-content: center; color: #94a3b8; flex-shrink: 0;", children: /* @__PURE__ */ h(mt, { size: 18 }) }),
        /* @__PURE__ */ h("div", { className: "pitaj-cart-details", children: [
          /* @__PURE__ */ h("div", { className: "pitaj-cart-item-name", children: A.name }),
          /* @__PURE__ */ h("div", { className: "pitaj-cart-item-sub", children: A.subtitle })
        ] }),
        /* @__PURE__ */ h("div", { className: "pitaj-cart-item-price", children: A.price })
      ] }, A.id || N);
    }) }),
    /* @__PURE__ */ h("div", { className: "pitaj-cart-divider" }),
    b != null && /* @__PURE__ */ h("div", { className: "pitaj-cart-summary", children: [
      /* @__PURE__ */ h("span", { className: "pitaj-cart-total-label", children: "Ukupno za plaćanje:" }),
      /* @__PURE__ */ h("span", { className: "pitaj-cart-total-val", children: b })
    ] }),
    /* @__PURE__ */ h("button", { type: "button", onClick: g, className: "pitaj-widget-btn-primary", children: "Završi narudžbu" })
  ] });
}
function cn({ config: l }) {
  const u = l.metric_label || "Ukupno potrošeno kredita", m = l.metric_value ?? "2,214", x = [
    { day: "N", val: 75 },
    { day: "P", val: 40 },
    { day: "U", val: 65 },
    { day: "S", val: 85 },
    { day: "Č", val: 25 },
    { day: "P", val: 70 },
    { day: "S", val: 95 }
  ], b = Array.isArray(l.chart_data) && l.chart_data.length > 0 ? l.chart_data : x;
  return /* @__PURE__ */ h("div", { className: "pitaj-inline-widget-card chart-widget", children: [
    /* @__PURE__ */ h("div", { className: "pitaj-widget-bar", children: [
      /* @__PURE__ */ h("span", { className: "pitaj-widget-badge-icon", children: /* @__PURE__ */ h(Ss, { size: 14 }) }),
      /* @__PURE__ */ h("span", { className: "pitaj-widget-bar-title", children: l.title || "Potrošnja" })
    ] }),
    /* @__PURE__ */ h("div", { className: "pitaj-chart-body", children: [
      /* @__PURE__ */ h("div", { className: "pitaj-chart-label", children: u }),
      /* @__PURE__ */ h("div", { className: "pitaj-chart-big-number", children: m }),
      /* @__PURE__ */ h("div", { className: "pitaj-bar-chart-container", children: b.map((g, T) => /* @__PURE__ */ h("div", { className: "pitaj-bar-col", children: [
        /* @__PURE__ */ h("div", { className: "pitaj-bar-track", children: /* @__PURE__ */ h(
          "div",
          {
            className: "pitaj-bar-fill",
            style: { height: `${Math.max(10, Math.min(100, g.val))}%` },
            title: `${g.day}: ${g.val}%`
          }
        ) }),
        /* @__PURE__ */ h("span", { className: "pitaj-bar-day", children: g.day })
      ] }, T)) })
    ] })
  ] });
}
function hn({ config: l, onAction: u }) {
  const m = [
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
  ], x = Array.isArray(l.classes) && l.classes.length > 0 ? l.classes : m, b = (g) => {
    u == null || u(`Želim rezervisati termin za: ${g.title} (${g.time})`);
  };
  return /* @__PURE__ */ h("div", { className: "pitaj-inline-widget-card classes-widget", children: [
    /* @__PURE__ */ h("div", { className: "pitaj-widget-bar", children: [
      /* @__PURE__ */ h("span", { className: "pitaj-widget-badge-icon", children: /* @__PURE__ */ h(as, { size: 14 }) }),
      /* @__PURE__ */ h("span", { className: "pitaj-widget-bar-title", children: l.title || "Nadolazeći termini" })
    ] }),
    /* @__PURE__ */ h("div", { className: "pitaj-classes-list", children: x.map((g, T) => {
      const I = g.id ?? T;
      return /* @__PURE__ */ h("div", { className: "pitaj-class-item", children: [
        /* @__PURE__ */ h("img", { src: g.image, alt: g.title, className: "pitaj-class-thumb" }),
        /* @__PURE__ */ h("div", { className: "pitaj-class-info", children: [
          /* @__PURE__ */ h("div", { className: "pitaj-class-header", children: [
            /* @__PURE__ */ h("span", { className: "pitaj-class-title", children: g.title }),
            g.level && /* @__PURE__ */ h("span", { className: `pitaj-level-badge level-${g.levelColor || "green"}`, children: g.level })
          ] }),
          /* @__PURE__ */ h("div", { className: "pitaj-class-time", children: g.time }),
          /* @__PURE__ */ h("div", { className: "pitaj-class-instructor", children: g.instructor })
        ] }),
        /* @__PURE__ */ h(
          "button",
          {
            type: "button",
            onClick: () => b(g),
            className: "pitaj-book-btn",
            children: "Pošalji upit"
          }
        )
      ] }, I);
    }) })
  ] });
}
function un({ config: l, onSubmit: u }) {
  const [m, x] = be({}), [b, g] = be(!1), T = l.name || "Hotel Dark Moon", I = l.price ?? "220 KM / noć", _ = l.location || "Sarajevo, Bosna i Hercegovina", A = l.rating, N = l.image, K = (Array.isArray(l.amenities) ? l.amenities : []).map(vs), ne = [
    { key: "check_in", type: "date", label: "Datum dolaska (Check-in)", required: !0 },
    { key: "check_out", type: "date", label: "Datum odjave (Check-out)", required: !0 },
    { key: "guests", type: "select", label: "Broj gostiju", options: ["1 odrasla osoba", "2 odrasle osobe", "3 odrasle osobe", "Porodica (4+)"], required: !0 },
    { key: "name", type: "text", label: "Ime i prezime", placeholder: "Vaše ime", required: !0 },
    { key: "phone", type: "phone", label: "Broj telefona", placeholder: "+387 61 123 456", required: !1 }
  ], ce = Array.isArray(l.fields) ? l.fields : ne, fe = (ee, d) => {
    g(!1), x((X) => ({ ...X, [ee]: d }));
  }, Ce = (ee) => {
    if (ee.preventDefault(), ce.length > 0) {
      for (const X of ce)
        if (X.required) {
          const $ = m[X.key];
          if (X.type === "checkbox" && !$ || X.type !== "checkbox" && (!$ || !String($).trim())) return;
        }
    }
    const d = { ...m };
    if (d.check_in && d.check_out && d.check_out < d.check_in) {
      g(!0);
      return;
    }
    u(Object.fromEntries(ce.filter((X) => d[X.key] !== void 0).map((X) => [X.key, String(d[X.key])])));
  };
  return /* @__PURE__ */ h("div", { className: "pitaj-inline-widget-card hotel-widget", children: [
    /* @__PURE__ */ h("div", { className: "pitaj-hotel-image-wrap", children: [
      N && /* @__PURE__ */ h("img", { src: N, alt: T, className: "pitaj-hotel-img" }),
      /* @__PURE__ */ h("div", { className: "pitaj-hotel-badge-price", children: I })
    ] }),
    /* @__PURE__ */ h("div", { className: "pitaj-hotel-content", children: [
      /* @__PURE__ */ h("div", { className: "pitaj-hotel-title-row", children: /* @__PURE__ */ h("div", { className: "pitaj-hotel-name", children: T }) }),
      /* @__PURE__ */ h("div", { className: "pitaj-hotel-meta", children: [
        /* @__PURE__ */ h("span", { className: "pitaj-meta-item", children: [
          /* @__PURE__ */ h(Cs, { size: 12, className: "pitaj-meta-icon" }),
          /* @__PURE__ */ h("span", { children: _ })
        ] }),
        A && /* @__PURE__ */ h("span", { className: "pitaj-meta-item pitaj-rating", children: [
          /* @__PURE__ */ h(Ls, { size: 11, className: "pitaj-star-icon" }),
          /* @__PURE__ */ h("span", { children: A })
        ] })
      ] }),
      K.length > 0 && /* @__PURE__ */ h("div", { className: "pitaj-amenities-row", children: K.map((ee, d) => {
        const X = vs(ee), $ = an(X);
        return /* @__PURE__ */ h("span", { className: "pitaj-amenity-chip", children: [
          /* @__PURE__ */ h($, { size: 12, className: "pitaj-amenity-icon" }),
          /* @__PURE__ */ h("span", { children: X })
        ] }, d);
      }) }),
      /* @__PURE__ */ h("form", { onSubmit: Ce, className: "pitaj-widget-form", children: [
        b && /* @__PURE__ */ h("div", { role: "alert", children: "Datum odjave mora biti nakon datuma dolaska." }),
        ce.length > 0 && /* @__PURE__ */ h("div", { className: "pitaj-hotel-booking-section", children: [
          /* @__PURE__ */ h("div", { className: "pitaj-hotel-booking-title", children: "Rezerviši smještaj" }),
          /* @__PURE__ */ h(js, { fields: ce, values: m, onChange: fe })
        ] }),
        /* @__PURE__ */ h("button", { type: "submit", className: "pitaj-widget-btn-primary", children: l.submit_label || "Pošalji upit za rezervaciju" })
      ] })
    ] })
  ] });
}
function pn({ config: l, onSubmit: u }) {
  const m = [
    { key: "name", type: "text", label: "Ime i prezime", placeholder: "Vaše ime", required: !0 },
    { key: "email", type: "email", label: "Email adresa", placeholder: "vas.email@example.com", required: !0 },
    { key: "message", type: "textarea", label: "Poruka", placeholder: "Kako vam možemo pomoći?", required: !0 }
  ], x = Array.isArray(l.fields) && l.fields.length > 0 ? l.fields : m, [b, g] = be({}), T = l.title || "Kontaktirajte nas", I = l.subtitle || "Rado ćemo odgovoriti na vaša pitanja";
  return /* @__PURE__ */ h("div", { className: "pitaj-inline-widget-card contact-widget", children: [
    /* @__PURE__ */ h("div", { className: "pitaj-widget-header", children: [
      /* @__PURE__ */ h("div", { className: "pitaj-widget-title", children: T }),
      /* @__PURE__ */ h("div", { className: "pitaj-widget-subtitle", children: I })
    ] }),
    /* @__PURE__ */ h("form", { onSubmit: (N) => {
      N.preventDefault();
      for (const F of x)
        if (F.required) {
          const K = b[F.key];
          if (F.type === "checkbox" && !K || F.type !== "checkbox" && (!K || !String(K).trim())) return;
        }
      u(Object.fromEntries(x.filter((F) => b[F.key] !== void 0).map((F) => [F.key, String(b[F.key])])));
    }, className: "pitaj-widget-form", children: [
      /* @__PURE__ */ h(js, { fields: x, values: b, onChange: (N, F) => {
        g((K) => ({ ...K, [N]: F }));
      } }),
      /* @__PURE__ */ h("button", { type: "submit", className: "pitaj-widget-btn-primary", children: l.submit_label || "Pošalji poruku" })
    ] })
  ] });
}
function dn({ config: l }) {
  const u = l.city || "Sarajevo", m = l.temp ?? "22°C", x = l.condition || "Sunčano i toplo", b = l.description || "";
  return /* @__PURE__ */ h("div", { className: "pitaj-inline-widget-card weather-widget", children: [
    /* @__PURE__ */ h("div", { className: "pitaj-weather-top", children: [
      /* @__PURE__ */ h(Wi, { size: 32, className: "pitaj-weather-svg" }),
      /* @__PURE__ */ h("span", { className: "pitaj-weather-temp", children: m })
    ] }),
    /* @__PURE__ */ h("div", { className: "pitaj-weather-city", children: u }),
    /* @__PURE__ */ h("div", { className: "pitaj-weather-cond", children: x }),
    /* @__PURE__ */ h("div", { className: "pitaj-weather-desc", children: b })
  ] });
}
function fn({ config: l, title: u }) {
  const [m, x] = be(!0), b = Aa(l.url), g = l.height || 380;
  return b ? /* @__PURE__ */ h("div", { className: "pitaj-inline-widget-card iframe-widget", children: [
    /* @__PURE__ */ h("div", { className: "pitaj-widget-bar", children: [
      /* @__PURE__ */ h("span", { className: "pitaj-widget-badge-icon", children: /* @__PURE__ */ h(Ki, { size: 14 }) }),
      /* @__PURE__ */ h("span", { className: "pitaj-widget-bar-title", children: l.title || u }),
      /* @__PURE__ */ h(
        "a",
        {
          href: b,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "pitaj-iframe-open-btn",
          title: "Otvori u novom prozoru",
          children: "↗"
        }
      )
    ] }),
    /* @__PURE__ */ h("div", { className: "pitaj-iframe-container", style: { height: `${g}px` }, children: [
      m && /* @__PURE__ */ h("div", { className: "pitaj-iframe-loading", children: [
        /* @__PURE__ */ h("span", { className: "pitaj-typing-dot" }),
        /* @__PURE__ */ h("span", { className: "pitaj-typing-dot" }),
        /* @__PURE__ */ h("span", { className: "pitaj-typing-dot" })
      ] }),
      /* @__PURE__ */ h(
        "iframe",
        {
          src: b,
          title: u,
          className: "pitaj-iframe-frame",
          onLoad: () => x(!1),
          sandbox: "allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
        }
      )
    ] })
  ] }) : /* @__PURE__ */ h("div", { role: "status", children: "Sadržaj trenutno nije dostupan." });
}
function mn({ config: l }) {
  const [u, m] = be(!0), x = String(l.url || "").trim();
  let b = null;
  try {
    x && (b = new URL(x));
  } catch {
  }
  const g = String(l.title || "Zakažite sastanak"), T = String(l.description || "Odaberite datum i termin koji vam najviše odgovara."), I = String(l.duration || "30 min"), _ = String(l.provider || (x.includes("cal.com") ? "cal" : "calendly")), A = Number(l.height || 440);
  return !b || b.protocol !== "https:" ? /* @__PURE__ */ h("div", { className: "pitaj-inline-widget-card pitaj-booking-card", children: /* @__PURE__ */ h("div", { className: "pitaj-booking-header", children: [
    /* @__PURE__ */ h("div", { className: "pitaj-booking-brand-icon", children: /* @__PURE__ */ h(as, { size: 18 }) }),
    /* @__PURE__ */ h("div", { className: "pitaj-booking-info", children: [
      /* @__PURE__ */ h("div", { className: "pitaj-booking-title", children: g }),
      /* @__PURE__ */ h("div", { className: "pitaj-booking-desc", children: "Link za zakazivanje termina trenutno nije dostupan." })
    ] })
  ] }) }) : /* @__PURE__ */ h("div", { className: "pitaj-inline-widget-card pitaj-booking-card", children: [
    /* @__PURE__ */ h("div", { className: "pitaj-booking-header", children: [
      /* @__PURE__ */ h("div", { className: "pitaj-booking-brand-icon", title: _ === "cal" ? "Cal.com" : "Calendly", children: _ === "cal" ? /* @__PURE__ */ h("span", { className: "pitaj-cal-logo", children: "Cal" }) : _ === "calendly" ? /* @__PURE__ */ h("span", { className: "pitaj-calendly-logo", children: "C" }) : /* @__PURE__ */ h(as, { size: 18 }) }),
      /* @__PURE__ */ h("div", { className: "pitaj-booking-info", children: [
        /* @__PURE__ */ h("div", { className: "pitaj-booking-title", children: g }),
        /* @__PURE__ */ h("div", { className: "pitaj-booking-meta", children: [
          /* @__PURE__ */ h("span", { className: "pitaj-booking-tag", children: [
            "⏱️ ",
            I
          ] }),
          /* @__PURE__ */ h("span", { className: "pitaj-booking-tag", children: "📹 Video poziv" })
        ] })
      ] }),
      /* @__PURE__ */ h(
        "a",
        {
          href: b.href,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "pitaj-booking-open-btn",
          title: "Otvori u novom prozoru",
          children: "↗"
        }
      )
    ] }),
    T && /* @__PURE__ */ h("div", { className: "pitaj-booking-desc", children: T }),
    /* @__PURE__ */ h("div", { className: "pitaj-booking-frame-wrap", style: { height: `${A}px` }, children: [
      u && /* @__PURE__ */ h("div", { className: "pitaj-booking-loading", children: [
        /* @__PURE__ */ h("span", { className: "pitaj-typing-dot" }),
        /* @__PURE__ */ h("span", { className: "pitaj-typing-dot" }),
        /* @__PURE__ */ h("span", { className: "pitaj-typing-dot" })
      ] }),
      /* @__PURE__ */ h(
        "iframe",
        {
          src: b.href,
          title: g,
          className: "pitaj-booking-frame",
          onLoad: () => m(!1),
          sandbox: "allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
        }
      )
    ] })
  ] });
}
function yn({ config: l }) {
  var b;
  const u = l.data || l.default_data || {}, m = String(l.title || l.name || "Podaci sa sistema"), x = typeof u == "object" && u !== null && Object.keys(u).length > 0;
  return /* @__PURE__ */ h("div", { className: "pitaj-inline-widget-card pitaj-api-widget", role: "region", "aria-label": m, children: [
    /* @__PURE__ */ h("div", { className: "pitaj-api-header", children: [
      /* @__PURE__ */ h("div", { className: "pitaj-api-title-row", children: [
        /* @__PURE__ */ h("span", { className: "pitaj-api-icon", children: "⚡" }),
        /* @__PURE__ */ h("span", { className: "pitaj-api-title", children: m })
      ] }),
      x && /* @__PURE__ */ h("span", { className: "pitaj-api-badge", children: "Uživo" })
    ] }),
    x ? /* @__PURE__ */ h("div", { className: "pitaj-api-body", children: Object.entries(u).slice(0, 15).map(([g, T]) => {
      let I = T;
      return typeof T == "object" && T !== null && (I = JSON.stringify(T)), /* @__PURE__ */ h("div", { className: "pitaj-api-row", children: [
        /* @__PURE__ */ h("span", { className: "pitaj-api-key", children: [
          g.replace(/_/g, " "),
          ":"
        ] }),
        /* @__PURE__ */ h("span", { className: "pitaj-api-val", children: String(I) })
      ] }, g);
    }) }) : /* @__PURE__ */ h("div", { className: "pitaj-api-empty", children: ((b = l.lookup) == null ? void 0 : b.status) === "expired" ? "Podaci se ne čuvaju. Pošaljite novi upit za ažurne podatke." : "Podaci trenutno nisu dostupni." })
  ] });
}
function xn({ config: l }) {
  var K;
  const u = l.data || l.default_data || {}, m = u.order_number || l.order_number;
  if (!m) {
    const ne = (K = l.lookup) == null ? void 0 : K.status;
    return /* @__PURE__ */ h("div", { className: "pitaj-inline-widget-card pitaj-order-card", role: "status", children: /* @__PURE__ */ h("div", { className: "pitaj-order-notice", children: ne === "not_found" ? "Nismo pronašli narudžbu s tim brojem i emailom. Provjerite podatke i pokušajte ponovo." : ne === "needs_email" ? "Za provjeru statusa napišite i email adresu kojom ste naručili (npr. #1234, ime@domena.ba)." : ne === "expired" ? "Podaci o narudžbi se ne čuvaju. Pošaljite novi upit s brojem narudžbe i emailom za ažuran status." : "Napišite broj narudžbe i email kojim ste naručili (npr. #1234, ime@domena.ba) i provjerit ću status." }) });
  }
  const x = u.status_label || l.status_label || "Status nije dostupan", b = u.status_color || "blue", g = u.tracking_number || l.tracking_number, T = u.tracking_company || l.tracking_company || "Dostavna služba", I = u.tracking_url || l.tracking_url, _ = u.total ? `${u.total} ${u.currency || "KM"}` : null, A = u.items_summary || l.items_summary, N = u.date || l.date, F = b === "emerald" ? "pitaj-order-badge-success" : b === "blue" ? "pitaj-order-badge-info" : "pitaj-order-badge-pending";
  return /* @__PURE__ */ h("div", { className: "pitaj-inline-widget-card pitaj-order-card", role: "region", "aria-label": `Narudžba ${m}`, children: [
    /* @__PURE__ */ h("div", { className: "pitaj-order-header", children: [
      /* @__PURE__ */ h("div", { className: "pitaj-order-id-group", children: [
        /* @__PURE__ */ h("span", { className: "pitaj-order-icon", children: "📦" }),
        /* @__PURE__ */ h("span", { className: "pitaj-order-number", children: m })
      ] }),
      /* @__PURE__ */ h("span", { className: `pitaj-order-status-badge ${F}`, children: x })
    ] }),
    /* @__PURE__ */ h("div", { className: "pitaj-order-details", children: [
      g ? /* @__PURE__ */ h("div", { className: "pitaj-order-tracking-box", children: [
        /* @__PURE__ */ h("div", { className: "pitaj-order-tracking-title", children: "Broj za praćenje pošiljke:" }),
        /* @__PURE__ */ h("div", { className: "pitaj-order-tracking-val", children: [
          /* @__PURE__ */ h("span", { children: [
            T,
            ": ",
            /* @__PURE__ */ h("strong", { children: g })
          ] }),
          I && /* @__PURE__ */ h("a", { href: I, target: "_blank", rel: "noopener noreferrer", className: "pitaj-order-tracking-link", children: "Prati ↗" })
        ] })
      ] }) : /* @__PURE__ */ h("div", { className: "pitaj-order-notice", children: "Pošiljka je u pripremi za slanje. Broj za praćenje će biti dostupan ubrzo." }),
      /* @__PURE__ */ h("div", { className: "pitaj-order-meta-grid", children: [
        A && /* @__PURE__ */ h("div", { className: "pitaj-order-meta-item", children: [
          /* @__PURE__ */ h("span", { className: "pitaj-order-meta-label", children: "Artikli:" }),
          /* @__PURE__ */ h("span", { className: "pitaj-order-meta-val", children: A })
        ] }),
        _ && /* @__PURE__ */ h("div", { className: "pitaj-order-meta-item", children: [
          /* @__PURE__ */ h("span", { className: "pitaj-order-meta-label", children: "Ukupno:" }),
          /* @__PURE__ */ h("span", { className: "pitaj-order-meta-val", children: _ })
        ] }),
        N && /* @__PURE__ */ h("div", { className: "pitaj-order-meta-item", children: [
          /* @__PURE__ */ h("span", { className: "pitaj-order-meta-label", children: "Datum:" }),
          /* @__PURE__ */ h("span", { className: "pitaj-order-meta-val", children: N })
        ] })
      ] })
    ] })
  ] });
}
function gn({ config: l, onAction: u }) {
  const m = l.html || '<div style="padding: 16px; text-align: center;">Prilagođeni HTML widget</div>', x = l.css || "";
  return /* @__PURE__ */ h("div", { className: "pitaj-inline-widget-card custom-html-widget", onClick: (g) => {
    var I;
    const T = (I = g.target) == null ? void 0 : I.closest("[data-chat-action]");
    if (T) {
      const _ = T.getAttribute("data-chat-action");
      _ && (g.preventDefault(), u == null || u(_));
    }
  }, children: [
    x && /* @__PURE__ */ h("style", { children: x }),
    /* @__PURE__ */ h("div", { dangerouslySetInnerHTML: { __html: Ta(String(m)) } })
  ] });
}
export {
  In as InlineWidgetRenderer
};
