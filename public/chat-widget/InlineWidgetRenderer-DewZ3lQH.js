import { w as Ds, p as Os, u as c, _ as Is, k as Pt, S as Tt, j as Oe, l as Ms, m as wt, G as Fs, n as Bs, W as _s, B as yt, o as sr, g as ir, E as rr, F as Ns, q as ar, r as xt, s as ks, v as gt, e as Ye, x as nr, c as or, d as ee, A as Ce, y as mt, z as lr, D as cr, H as $e, R as Es, I as hr, J as ur, K as pr, L as dr, N as fr } from "./widget-Ck9FNd5o.js";
function mr(h, d, m) {
  return h === "rate_limit" ? "rate_limit" : h === "api" && d === "FUNCTION_INVALID_INPUT" ? "input" : h === "api" && (d === "FUNCTION_UNAVAILABLE" || m === 404) ? "unavailable" : "failed";
}
function yr(h, d) {
  const m = Number.isFinite(d) ? Math.min(2592e3, Math.max(1, Math.ceil(d))) : 60;
  return h + m * 1e3;
}
function xr(h, d) {
  const m = Array.isArray(d.function_names) ? d.function_names : [], y = Array.isArray(d.functions) ? d.functions : [];
  return m.includes(h) || y.some((b) => b && (b.id === h || b.name === h));
}
function gr(h, d) {
  if (d.function_execution_enabled !== !0 || !d.function_actions || typeof d.function_actions != "object") return null;
  const m = Object.prototype.hasOwnProperty.call(d.function_actions, h) ? d.function_actions[h] : null;
  return typeof m == "string" && /^[a-zA-Z0-9_-]{1,100}$/.test(m) ? m : null;
}
function br(h, d, m) {
  const y = /* @__PURE__ */ Object.create(null), b = d.function_inputs && Object.prototype.hasOwnProperty.call(d.function_inputs, h) ? d.function_inputs[h] : [];
  if (!Array.isArray(b) || b.length > 10) return y;
  for (const x of b)
    typeof x == "string" && /^[a-zA-Z][a-zA-Z0-9_]{0,63}$/.test(x) && Object.prototype.hasOwnProperty.call(m, x) && typeof m[x] == "string" && (y[x] = m[x]);
  return y;
}
function Pr(h, d, m) {
  const y = { ...h.default_data || {}, ...h.data || {} };
  if (!m && Array.isArray(h.function_output_fields))
    for (const b of h.function_output_fields)
      typeof b == "string" && b !== "function_state" && /^[a-zA-Z][a-zA-Z0-9_]{0,63}$/.test(b) && delete y[b];
  return { ...y, ...d };
}
async function Tr(h, d, m, y, b, x = {}) {
  if (!Number.isSafeInteger(d) || d < 1 || !/^[a-zA-Z0-9_-]{1,100}$/.test(m) || !/^[1-9]\d*$/.test(y)) throw new Error("Funkcija nije dostupna.");
  const P = (b || window.location.origin).replace(/\/$/, ""), C = await Ds(h, b), j = `${P}/api/widget/${encodeURIComponent(h)}/v2/inline-widgets/${d}/functions/${encodeURIComponent(m)}/execute`, T = await fetch(j, { method: "POST", cache: "no-store", headers: { Accept: "application/json", "Content-Type": "application/json", Authorization: `Bearer ${C}` }, body: JSON.stringify({ conversation_id: Number(y), inputs: x }) });
  T.ok || await Os(T, "Funkciju trenutno nije moguće izvršiti.");
  const { data: v } = await T.json();
  if (!v || typeof v != "object" || Array.isArray(v) || Object.keys(v).length > 30 || Object.entries(v).some(([L, U]) => !/^[a-zA-Z][a-zA-Z0-9_]{0,63}$/.test(L) || !["string", "number", "boolean"].includes(typeof U)))
    throw new Error("Neispravan odgovor funkcije.");
  return v;
}
const wr = ".pitaj-product-card{display:flex;flex-direction:column;gap:10px}.pitaj-product-image-wrap{position:relative;width:100%;height:160px;border-radius:var(--pitaj-radius-btn, 8px);overflow:hidden;background:#f8fafc}.pitaj-product-img{width:100%;height:100%;object-fit:cover}.pitaj-carousel-controls{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;align-items:center;justify-content:space-between;padding:0 8px;pointer-events:none}.pitaj-carousel-btn{pointer-events:auto;width:28px;height:28px;border-radius:50%;background:#ffffffe0;border:1px solid rgba(0,0,0,.08);box-shadow:0 1px 4px #0000001f;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:16px;font-weight:700;color:#1e293b}.pitaj-product-info{display:flex;flex-direction:column;gap:4px}.pitaj-product-name{font-size:14.5px;font-weight:600}.pitaj-product-sub{font-size:12px;color:var(--pitaj-muted, #64748b)}.pitaj-product-price{font-size:15px;font-weight:700;color:var(--pitaj-accent, #0f172a);margin-top:2px}.pitaj-cart-items-list{display:flex;flex-direction:column;gap:10px}.pitaj-cart-item-row{display:flex;align-items:center;gap:10px}.pitaj-cart-thumb{width:44px;height:44px;border-radius:var(--pitaj-radius-corner-sm, 6px);object-fit:cover;background:#f1f5f9}.pitaj-cart-details{flex:1;min-width:0}.pitaj-cart-item-name{font-size:13px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pitaj-cart-item-sub{font-size:11.5px;color:var(--pitaj-muted, #64748b)}.pitaj-cart-item-price{font-size:13.5px;font-weight:600}.pitaj-cart-divider{height:1px;background:var(--pitaj-border, #e5e7eb);margin:10px 0}.pitaj-cart-summary{display:flex;justify-content:space-between;align-items:center;font-size:13.5px;font-weight:600;margin-bottom:8px}.pitaj-cart-payment{display:flex;justify-content:space-between;align-items:center;font-size:12px;color:var(--pitaj-muted, #64748b);margin-bottom:12px}.pitaj-cart-card-pill{font-weight:600;color:#1e293b;background:#f1f5f9;padding:3px 8px;border-radius:6px}.chart-widget .pitaj-chart-label{font-size:12px;color:var(--pitaj-muted, #64748b)}.chart-widget .pitaj-chart-big-number{font-size:26px;font-weight:700;color:var(--pitaj-fg, #0f172a);margin:4px 0 16px}.pitaj-bar-chart-container{display:flex;align-items:flex-end;justify-content:space-between;height:110px;padding:6px 4px 0;border-bottom:1px solid var(--pitaj-border, #e2e8f0)}.pitaj-bar-col{display:flex;flex-direction:column;align-items:center;gap:6px;flex:1}.pitaj-bar-track{width:14px;height:85px;background:#f1f5f9;border-radius:4px;display:flex;align-items:flex-end;overflow:hidden}.pitaj-bar-fill{width:100%;background:var(--pitaj-accent, #3b82f6);border-radius:4px 4px 0 0;transition:height .3s ease}.pitaj-bar-day{font-size:10px;color:var(--pitaj-muted, #94a3b8);font-weight:600}.pitaj-classes-list{display:flex;flex-direction:column;gap:10px}.pitaj-class-item{display:flex;align-items:center;gap:10px;padding:8px;border-radius:var(--pitaj-radius-btn, 8px);background:var(--pitaj-surface-subtle, #f8fafc);border:1px solid var(--pitaj-border, #e2e8f0)}.pitaj-class-thumb{width:52px;height:52px;border-radius:var(--pitaj-radius-corner-sm, 6px);object-fit:cover}.pitaj-class-info{flex:1;min-width:0}.pitaj-class-header{display:flex;align-items:center;gap:6px}.pitaj-class-title{font-size:13px;font-weight:600}.pitaj-level-badge{font-size:10px;font-weight:600;padding:1px 6px;border-radius:10px}.pitaj-level-badge.level-green{background:#dcfce7;color:#15803d}.pitaj-level-badge.level-purple{background:#f3e8ff;color:#7e22ce}.pitaj-class-time{font-size:11.5px;font-weight:500;color:var(--pitaj-fg, #1e293b);margin-top:1px}.pitaj-class-instructor{font-size:10.5px;color:var(--pitaj-muted, #64748b)}.pitaj-book-btn{padding:6px 12px;font-size:12px;font-weight:600;background:#16a34a;color:#fff;border:none;border-radius:var(--pitaj-radius-btn, 14px);cursor:pointer;white-space:nowrap}.pitaj-book-btn.is-booked{background:#e2e8f0;color:#475569}.pitaj-hotel-image-wrap{position:relative;width:100%;height:140px;border-radius:var(--pitaj-radius-btn, 8px);overflow:hidden;margin-bottom:10px}.pitaj-hotel-img{width:100%;height:100%;object-fit:cover}.pitaj-hotel-badge-price{position:absolute;top:8px;right:8px;background:#0f172ad9;color:#fff;font-size:12px;font-weight:600;padding:3px 8px;border-radius:6px;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.pitaj-hotel-name{font-size:15px;font-weight:600}.pitaj-hotel-meta{display:flex;justify-content:space-between;align-items:center;font-size:11.5px;color:var(--pitaj-muted, #64748b);margin:4px 0 10px}.pitaj-meta-item{display:inline-flex;align-items:center;gap:4px}.pitaj-meta-icon{color:var(--pitaj-muted, #64748b)}.pitaj-rating{color:#f59e0b;font-weight:600}.pitaj-star-icon{color:#f59e0b}.pitaj-amenities-row{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px}.pitaj-amenity-chip{display:inline-flex;align-items:center;gap:5px;font-size:11px;font-weight:500;padding:3px 8px;background:var(--pitaj-surface-subtle, #f1f5f9);border:1px solid var(--pitaj-border, #e2e8f0);border-radius:6px;color:var(--pitaj-fg, #334155)}.pitaj-amenity-icon{flex-shrink:0;color:var(--pitaj-muted, #64748b)}.pitaj-inline-widget-card.weather-widget{background:linear-gradient(135deg,#2563eb,#3b82f6,#60a5fa);color:#fff;border:none;padding:16px}.pitaj-weather-top{display:flex;align-items:center;justify-content:space-between}.pitaj-weather-svg{color:#fef08a}.pitaj-weather-temp{font-size:32px;font-weight:700}.pitaj-weather-city{font-size:16px;font-weight:600;margin-top:6px}.pitaj-weather-cond{font-size:13px;font-weight:500;opacity:.9}.pitaj-weather-desc{font-size:11.5px;opacity:.82;margin-top:6px;line-height:1.4}.pitaj-iframe-container{position:relative;width:100%;border-radius:8px;overflow:hidden;background:#f8fafc}.pitaj-iframe-frame{width:100%;height:100%;border:none}.pitaj-iframe-loading{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;background:#ffffffb3}.pitaj-iframe-open-btn{font-size:14px;text-decoration:none;color:var(--pitaj-muted, #64748b);padding:2px 6px;border-radius:4px}.pitaj-iframe-open-btn:hover{background:var(--pitaj-surface-subtle, #f1f5f9);color:var(--pitaj-fg, #0f172a)}.pitaj-booking-card{padding:12px;border-radius:12px;background:var(--pitaj-surface, #ffffff);border:1px solid var(--pitaj-border, #e2e8f0)}.pitaj-booking-header{display:flex;align-items:center;gap:10px;margin-bottom:6px}.pitaj-booking-brand-icon{width:36px;height:36px;border-radius:8px;background:var(--pitaj-surface-subtle, #f1f5f9);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;color:var(--pitaj-fg, #0f172a);flex-shrink:0;border:1px solid var(--pitaj-border, #e2e8f0)}.pitaj-cal-logo{font-weight:800;font-size:12px;letter-spacing:-.5px;color:#000}.pitaj-calendly-logo{font-weight:800;font-size:15px;color:#006bff}.pitaj-booking-info{flex:1;min-width:0}.pitaj-booking-title{font-size:13px;font-weight:600;color:var(--pitaj-fg, #0f172a);line-height:1.25;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pitaj-booking-meta{display:flex;align-items:center;gap:5px;margin-top:3px}.pitaj-booking-tag{font-size:10.5px;font-weight:500;color:var(--pitaj-muted, #64748b);background:var(--pitaj-surface-subtle, #f8fafc);padding:1px 6px;border-radius:4px;border:1px solid var(--pitaj-border, #e2e8f0)}.pitaj-booking-desc{font-size:11.5px;color:var(--pitaj-muted, #64748b);margin-bottom:8px;line-height:1.4}.pitaj-booking-open-btn{font-size:14px;text-decoration:none;color:var(--pitaj-muted, #64748b);padding:3px 6px;border-radius:4px;transition:all .15s ease;display:flex;align-items:center;justify-content:center}.pitaj-booking-open-btn:hover{background:var(--pitaj-surface-subtle, #f1f5f9);color:var(--pitaj-fg, #0f172a)}.pitaj-booking-frame-wrap{position:relative;width:100%;border-radius:8px;overflow:hidden;background:#f8fafc;border:1px solid var(--pitaj-border, #e2e8f0)}.pitaj-booking-frame{width:100%;height:100%;border:none}.pitaj-booking-loading{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;background:#ffffffd9;z-index:2}.pitaj-api-widget{background:var(--pitaj-surface, #ffffff);border:1px solid var(--pitaj-border, #e2e8f0);border-radius:12px;padding:12px 14px;font-family:inherit;box-shadow:0 1px 3px #0000000d;margin:4px 0;max-width:100%}.pitaj-api-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid var(--pitaj-border, #e2e8f0)}.pitaj-api-title-row{display:flex;align-items:center;gap:6px}.pitaj-api-icon{font-size:14px}.pitaj-api-title{font-size:13px;font-weight:600;color:var(--pitaj-fg, #0f172a)}.pitaj-api-badge{font-size:10px;font-weight:600;color:#059669;background:#ecfdf5;border:1px solid #a7f3d0;padding:1px 7px;border-radius:9999px;text-transform:uppercase;letter-spacing:.03em}.pitaj-api-body{display:flex;flex-direction:column;gap:6px}.pitaj-api-row{display:flex;justify-content:space-between;align-items:center;font-size:12px;gap:8px;padding:3px 0;border-bottom:1px dashed var(--pitaj-border, #f1f5f9)}.pitaj-api-row:last-child{border-bottom:none}.pitaj-api-key{color:var(--pitaj-muted, #64748b);font-weight:500;text-transform:capitalize}.pitaj-api-val{color:var(--pitaj-fg, #0f172a);font-weight:600;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;word-break:break-all;text-align:right}.pitaj-api-empty{font-size:12px;color:var(--pitaj-muted, #64748b);font-style:italic;padding:4px 0}.pitaj-order-card{background:var(--pitaj-surface, #ffffff);border:1px solid var(--pitaj-border, #e2e8f0);border-radius:12px;padding:12px 14px;font-family:inherit;box-shadow:0 1px 3px #0000000d;margin:4px 0;max-width:100%}.pitaj-order-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid var(--pitaj-border, #e2e8f0)}.pitaj-order-id-group{display:flex;align-items:center;gap:6px}.pitaj-order-icon{font-size:15px}.pitaj-order-number{font-size:13.5px;font-weight:700;color:var(--pitaj-fg, #0f172a)}.pitaj-order-status-badge{font-size:11px;font-weight:600;padding:2px 8px;border-radius:9999px}.pitaj-order-badge-success{color:#059669;background:#ecfdf5;border:1px solid #a7f3d0}.pitaj-order-badge-info{color:#0284c7;background:#f0f9ff;border:1px solid #bae6fd}.pitaj-order-badge-pending{color:#d97706;background:#fffbeb;border:1px solid #fde68a}.pitaj-order-details{display:flex;flex-direction:column;gap:8px}.pitaj-order-tracking-box{background:var(--pitaj-surface-subtle, #f8fafc);border:1px solid var(--pitaj-border, #e2e8f0);border-radius:8px;padding:8px 10px}.pitaj-order-tracking-title{font-size:11px;color:var(--pitaj-muted, #64748b);margin-bottom:3px}.pitaj-order-tracking-val{display:flex;align-items:center;justify-content:space-between;font-size:12px;color:var(--pitaj-fg, #0f172a)}.pitaj-order-tracking-link{font-size:11.5px;font-weight:600;color:#2563eb;text-decoration:none;padding:2px 6px;background:#eff6ff;border-radius:4px}.pitaj-order-notice{font-size:11.5px;color:var(--pitaj-muted, #64748b);font-style:italic;padding:4px 0}.pitaj-order-meta-grid{display:flex;flex-direction:column;gap:4px;padding-top:4px}.pitaj-order-meta-item{display:flex;justify-content:space-between;font-size:11.5px}.pitaj-order-meta-label{color:var(--pitaj-muted, #64748b)}.pitaj-order-meta-val{color:var(--pitaj-fg, #0f172a);font-weight:500;text-align:right}";
var _e = {}, js;
function Ar() {
  if (js) return _e;
  js = 1, Object.defineProperty(_e, "__esModule", {
    value: !0
  });
  function h(a, t) {
    if (a == null) return {};
    var e = {};
    for (var s in a) if ({}.hasOwnProperty.call(a, s)) {
      if (t.indexOf(s) !== -1) continue;
      e[s] = a[s];
    }
    return e;
  }
  class d {
    constructor(t, e, s) {
      this.line = void 0, this.column = void 0, this.index = void 0, this.line = t, this.column = e, this.index = s;
    }
  }
  class m {
    constructor(t, e) {
      this.start = void 0, this.end = void 0, this.filename = void 0, this.identifierName = void 0, this.start = t, this.end = e;
    }
  }
  function y(a, t) {
    const {
      line: e,
      column: s,
      index: i
    } = a;
    return new d(e, s + t, i + t);
  }
  const b = "BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED";
  var x = {
    ImportMetaOutsideModule: {
      message: `import.meta may appear only with 'sourceType: "module"'`,
      code: b
    },
    ImportOutsideModule: {
      message: `'import' and 'export' may appear only with 'sourceType: "module"'`,
      code: b
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
  }, C = (a) => a.type === "UpdateExpression" ? P.UpdateExpression[`${a.prefix}`] : P[a.type];
  var j = {
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
    }) => `Invalid left-hand side in ${C(a)}.`,
    InvalidLhsBinding: ({
      ancestor: a
    }) => `Binding invalid left-hand side in ${C(a)}.`,
    InvalidLhsOptionalChaining: ({
      ancestor: a
    }) => `Invalid optional chaining in the left-hand side of ${C(a)}.`,
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
  }, T = {
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
  }, v = {
    ParseExpressionEmptyInput: "Unexpected parseExpression() input: The input is empty or contains only comments.",
    ParseExpressionExpectsEOF: ({
      unexpected: a
    }) => `Unexpected parseExpression() input: The input should contain exactly one expression, but the first expression is followed by the unexpected character \`${String.fromCodePoint(a)}\`.`
  };
  const L = /* @__PURE__ */ new Set(["ArrowFunctionExpression", "AssignmentExpression", "ConditionalExpression", "YieldExpression"]);
  var U = Object.assign({
    PipeBodyIsTighter: "Unexpected yield after pipeline body; any yield expression acting as Hack-style pipe body must be parenthesized due to its loose operator precedence.",
    PipeTopicRequiresHackPipes: 'Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.',
    PipeTopicUnbound: "Topic reference is unbound; it must be inside a pipe body.",
    PipeTopicUnconfiguredToken: ({
      token: a
    }) => `Invalid topic token ${a}. In order to use ${a} as a topic reference, the pipelineOperator plugin must be configured with { "proposal": "hack", "topicToken": "${a}" }.`,
    PipeTopicUnused: "Hack-style pipe body does not contain a topic reference; Hack-style pipes must use topic at least once.",
    PipeUnparenthesizedBody: ({
      type: a
    }) => `Hack-style pipe body cannot be an unparenthesized ${C({
      type: a
    })}; please wrap it in parentheses.`
  }, {
    PipelineBodyNoArrow: 'Unexpected arrow "=>" after pipeline body; arrow function in pipeline body must be parenthesized.',
    PipelineBodySequenceExpression: "Pipeline body may not be a comma-separated sequence expression.",
    PipelineHeadSequenceExpression: "Pipeline head should not be a comma-separated sequence expression.",
    PipelineTopicUnused: "Pipeline is in topic style but does not use topic reference.",
    PrimaryTopicNotAllowed: "Topic reference was used in a lexical context without topic binding.",
    PrimaryTopicRequiresSmartPipeline: 'Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.'
  }), Q = {
    UnsupportedBind: "Binding should be performed on object property.",
    UnsupportedBindRHS: "The right-hand side of binding can not be super or import."
  };
  const ie = ["message"];
  function te(a, t, e) {
    Object.defineProperty(a, t, {
      enumerable: !1,
      configurable: !0,
      value: e
    });
  }
  function ae({
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
    return r[e] && (e = r[e]), function n(o, l) {
      const u = new SyntaxError();
      return u.code = t, u.reasonCode = e, u.loc = o, u.pos = o.index, u.syntaxPlugin = s, i && (u.missingPlugin = l.missingPlugin), te(u, "clone", function(g = {}) {
        var w;
        const {
          line: A,
          column: N,
          index: R
        } = (w = g.loc) != null ? w : o;
        return n(new d(A, N, R), Object.assign({}, l, g.details));
      }), te(u, "details", l), Object.defineProperty(u, "message", {
        configurable: !0,
        get() {
          const f = `${a(l)} (${o.line}:${o.column})`;
          return this.message = f, f;
        },
        set(f) {
          Object.defineProperty(this, "message", {
            value: f,
            writable: !0
          });
        }
      }), u;
    };
  }
  function H(a, t) {
    if (Array.isArray(a))
      return (s) => H(s, a[0]);
    const e = {};
    for (const s of Object.keys(a)) {
      const i = a[s], r = typeof i == "string" ? {
        message: () => i
      } : typeof i == "function" ? {
        message: i
      } : i, {
        message: n
      } = r, o = h(r, ie), l = typeof n == "string" ? () => n : n;
      e[s] = ae(Object.assign({
        code: "BABEL_PARSER_SYNTAX_ERROR",
        reasonCode: s,
        toMessage: l
      }, t ? {
        syntaxPlugin: t
      } : {}, o));
    }
    return e;
  }
  const p = Object.assign({}, H(x), H(j), H(T), H(v), H`pipelineOperator`(U), H`functionBind`(Q));
  function W() {
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
  function K(a) {
    const t = W();
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
    defineProperty: me
  } = Object, ve = (a, t) => {
    a && me(a, t, {
      enumerable: !1,
      value: a[t]
    });
  };
  function ne(a) {
    return ve(a.loc.start, "index"), ve(a.loc.end, "index"), a;
  }
  var he = (a) => class extends a {
    parse() {
      const e = ne(super.parse());
      return this.optionFlags & 256 && (e.tokens = e.tokens.map(ne)), e;
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
        value: l
      } = e, u = Object.create(e.constructor.prototype);
      return u.type = "Literal", u.start = s, u.end = i, u.loc = r, u.range = n, u.raw = o, u.value = l, u;
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
      const o = e.directives.map((l) => this.directiveToStmt(l));
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
    parseMethod(e, s, i, r, n, o, l = !1) {
      let u = this.startNode();
      u.kind = e.kind, u = super.parseMethod(u, s, i, r, n, o, l), delete u.kind;
      const {
        typeParameters: f
      } = e;
      f && (delete e.typeParameters, u.typeParameters = f, this.resetStartLocationFromNode(u, f));
      const g = this.castNodeTo(u, "FunctionExpression");
      return e.value = g, o === "ClassPrivateMethod" && (e.computed = !1), o === "ObjectMethod" ? (e.kind === "method" && (e.kind = "init"), e.shorthand = !1, this.finishNode(e, "Property")) : this.finishNode(e, "MethodDefinition");
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
      e.type === "Property" && (e.kind === "get" || e.kind === "set") ? this.raise(p.PatternHasAccessor, e.key) : e.type === "Property" && e.method ? this.raise(p.PatternHasMethod, e.key) : super.toAssignableObjectExpressionProp(e, s, i);
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
      return ne(super.finishNodeAt(e, s, i));
    }
    finishNode(e, s) {
      const i = super.finishNode(e, s);
      return this.fillOptionalPropertiesForTSESLint(i), i;
    }
    resetStartLocation(e, s) {
      super.resetStartLocation(e, s), ne(e);
    }
    resetEndLocation(e, s = this.state.lastTokEndLoc) {
      super.resetEndLocation(e, s), ne(e);
    }
  };
  class se {
    constructor(t, e) {
      this.token = void 0, this.preserveSpace = void 0, this.token = t, this.preserveSpace = !!e;
    }
  }
  const O = {
    brace: new se("{"),
    j_oTag: new se("<tag"),
    j_cTag: new se("</tag"),
    j_expr: new se("<tag>...</tag>", !0)
  };
  O.template = new se("`", !0);
  const D = !0, S = !0, ue = !0, Ie = !0, oe = !0, Me = !0;
  class ye {
    constructor(t, e = {}) {
      this.label = void 0, this.keyword = void 0, this.beforeExpr = void 0, this.startsExpr = void 0, this.rightAssociative = void 0, this.isLoop = void 0, this.isAssign = void 0, this.prefix = void 0, this.postfix = void 0, this.binop = void 0, this.label = t, this.keyword = e.keyword, this.beforeExpr = !!e.beforeExpr, this.startsExpr = !!e.startsExpr, this.rightAssociative = !!e.rightAssociative, this.isLoop = !!e.isLoop, this.isAssign = !!e.isAssign, this.prefix = !!e.prefix, this.postfix = !!e.postfix, this.binop = e.binop != null ? e.binop : null, this.updateContext = null;
    }
  }
  const Ne = /* @__PURE__ */ new Map();
  function _(a, t = {}) {
    t.keyword = a;
    const e = k(a, t);
    return Ne.set(a, e), e;
  }
  function Y(a, t) {
    return k(a, {
      beforeExpr: D,
      binop: t
    });
  }
  let pe = -1;
  const re = [], ke = [], xe = [], ge = [], $ = [], be = [];
  function k(a, t = {}) {
    var e, s, i, r;
    return ++pe, ke.push(a), xe.push((e = t.binop) != null ? e : -1), ge.push((s = t.beforeExpr) != null ? s : !1), $.push((i = t.startsExpr) != null ? i : !1), be.push((r = t.prefix) != null ? r : !1), re.push(new ye(a, t)), pe;
  }
  function B(a, t = {}) {
    var e, s, i, r;
    return ++pe, Ne.set(a, pe), ke.push(a), xe.push((e = t.binop) != null ? e : -1), ge.push((s = t.beforeExpr) != null ? s : !1), $.push((i = t.startsExpr) != null ? i : !1), be.push((r = t.prefix) != null ? r : !1), re.push(new ye("name", t)), pe;
  }
  const X = {
    bracketL: k("[", {
      beforeExpr: D,
      startsExpr: S
    }),
    bracketHashL: k("#[", {
      beforeExpr: D,
      startsExpr: S
    }),
    bracketBarL: k("[|", {
      beforeExpr: D,
      startsExpr: S
    }),
    bracketR: k("]"),
    bracketBarR: k("|]"),
    braceL: k("{", {
      beforeExpr: D,
      startsExpr: S
    }),
    braceBarL: k("{|", {
      beforeExpr: D,
      startsExpr: S
    }),
    braceHashL: k("#{", {
      beforeExpr: D,
      startsExpr: S
    }),
    braceR: k("}"),
    braceBarR: k("|}"),
    parenL: k("(", {
      beforeExpr: D,
      startsExpr: S
    }),
    parenR: k(")"),
    comma: k(",", {
      beforeExpr: D
    }),
    semi: k(";", {
      beforeExpr: D
    }),
    colon: k(":", {
      beforeExpr: D
    }),
    doubleColon: k("::", {
      beforeExpr: D
    }),
    dot: k("."),
    question: k("?", {
      beforeExpr: D
    }),
    questionDot: k("?."),
    arrow: k("=>", {
      beforeExpr: D
    }),
    template: k("template"),
    ellipsis: k("...", {
      beforeExpr: D
    }),
    backQuote: k("`", {
      startsExpr: S
    }),
    dollarBraceL: k("${", {
      beforeExpr: D,
      startsExpr: S
    }),
    templateTail: k("...`", {
      startsExpr: S
    }),
    templateNonTail: k("...${", {
      beforeExpr: D,
      startsExpr: S
    }),
    at: k("@"),
    hash: k("#", {
      startsExpr: S
    }),
    interpreterDirective: k("#!..."),
    eq: k("=", {
      beforeExpr: D,
      isAssign: Ie
    }),
    assign: k("_=", {
      beforeExpr: D,
      isAssign: Ie
    }),
    slashAssign: k("_=", {
      beforeExpr: D,
      isAssign: Ie
    }),
    xorAssign: k("_=", {
      beforeExpr: D,
      isAssign: Ie
    }),
    moduloAssign: k("_=", {
      beforeExpr: D,
      isAssign: Ie
    }),
    incDec: k("++/--", {
      prefix: oe,
      postfix: Me,
      startsExpr: S
    }),
    bang: k("!", {
      beforeExpr: D,
      prefix: oe,
      startsExpr: S
    }),
    tilde: k("~", {
      beforeExpr: D,
      prefix: oe,
      startsExpr: S
    }),
    doubleCaret: k("^^", {
      startsExpr: S
    }),
    doubleAt: k("@@", {
      startsExpr: S
    }),
    pipeline: Y("|>", 0),
    nullishCoalescing: Y("??", 1),
    logicalOR: Y("||", 1),
    logicalAND: Y("&&", 2),
    bitwiseOR: Y("|", 3),
    bitwiseXOR: Y("^", 4),
    bitwiseAND: Y("&", 5),
    equality: Y("==/!=/===/!==", 6),
    lt: Y("</>/<=/>=", 7),
    gt: Y("</>/<=/>=", 7),
    relational: Y("</>/<=/>=", 7),
    bitShift: Y("<</>>/>>>", 8),
    bitShiftL: Y("<</>>/>>>", 8),
    bitShiftR: Y("<</>>/>>>", 8),
    plusMin: k("+/-", {
      beforeExpr: D,
      binop: 9,
      prefix: oe,
      startsExpr: S
    }),
    modulo: k("%", {
      binop: 10,
      startsExpr: S
    }),
    star: k("*", {
      binop: 10
    }),
    slash: Y("/", 10),
    exponent: k("**", {
      beforeExpr: D,
      binop: 11,
      rightAssociative: !0
    }),
    _in: _("in", {
      beforeExpr: D,
      binop: 7
    }),
    _instanceof: _("instanceof", {
      beforeExpr: D,
      binop: 7
    }),
    _break: _("break"),
    _case: _("case", {
      beforeExpr: D
    }),
    _catch: _("catch"),
    _continue: _("continue"),
    _debugger: _("debugger"),
    _default: _("default", {
      beforeExpr: D
    }),
    _else: _("else", {
      beforeExpr: D
    }),
    _finally: _("finally"),
    _function: _("function", {
      startsExpr: S
    }),
    _if: _("if"),
    _return: _("return", {
      beforeExpr: D
    }),
    _switch: _("switch"),
    _throw: _("throw", {
      beforeExpr: D,
      prefix: oe,
      startsExpr: S
    }),
    _try: _("try"),
    _var: _("var"),
    _const: _("const"),
    _with: _("with"),
    _new: _("new", {
      beforeExpr: D,
      startsExpr: S
    }),
    _this: _("this", {
      startsExpr: S
    }),
    _super: _("super", {
      startsExpr: S
    }),
    _class: _("class", {
      startsExpr: S
    }),
    _extends: _("extends", {
      beforeExpr: D
    }),
    _export: _("export"),
    _import: _("import", {
      startsExpr: S
    }),
    _null: _("null", {
      startsExpr: S
    }),
    _true: _("true", {
      startsExpr: S
    }),
    _false: _("false", {
      startsExpr: S
    }),
    _typeof: _("typeof", {
      beforeExpr: D,
      prefix: oe,
      startsExpr: S
    }),
    _void: _("void", {
      beforeExpr: D,
      prefix: oe,
      startsExpr: S
    }),
    _delete: _("delete", {
      beforeExpr: D,
      prefix: oe,
      startsExpr: S
    }),
    _do: _("do", {
      isLoop: ue,
      beforeExpr: D
    }),
    _for: _("for", {
      isLoop: ue
    }),
    _while: _("while", {
      isLoop: ue
    }),
    _as: B("as", {
      startsExpr: S
    }),
    _assert: B("assert", {
      startsExpr: S
    }),
    _async: B("async", {
      startsExpr: S
    }),
    _await: B("await", {
      startsExpr: S
    }),
    _defer: B("defer", {
      startsExpr: S
    }),
    _from: B("from", {
      startsExpr: S
    }),
    _get: B("get", {
      startsExpr: S
    }),
    _let: B("let", {
      startsExpr: S
    }),
    _meta: B("meta", {
      startsExpr: S
    }),
    _of: B("of", {
      startsExpr: S
    }),
    _sent: B("sent", {
      startsExpr: S
    }),
    _set: B("set", {
      startsExpr: S
    }),
    _source: B("source", {
      startsExpr: S
    }),
    _static: B("static", {
      startsExpr: S
    }),
    _using: B("using", {
      startsExpr: S
    }),
    _yield: B("yield", {
      startsExpr: S
    }),
    _asserts: B("asserts", {
      startsExpr: S
    }),
    _checks: B("checks", {
      startsExpr: S
    }),
    _exports: B("exports", {
      startsExpr: S
    }),
    _global: B("global", {
      startsExpr: S
    }),
    _implements: B("implements", {
      startsExpr: S
    }),
    _intrinsic: B("intrinsic", {
      startsExpr: S
    }),
    _infer: B("infer", {
      startsExpr: S
    }),
    _is: B("is", {
      startsExpr: S
    }),
    _mixins: B("mixins", {
      startsExpr: S
    }),
    _proto: B("proto", {
      startsExpr: S
    }),
    _require: B("require", {
      startsExpr: S
    }),
    _satisfies: B("satisfies", {
      startsExpr: S
    }),
    _keyof: B("keyof", {
      startsExpr: S
    }),
    _readonly: B("readonly", {
      startsExpr: S
    }),
    _unique: B("unique", {
      startsExpr: S
    }),
    _abstract: B("abstract", {
      startsExpr: S
    }),
    _declare: B("declare", {
      startsExpr: S
    }),
    _enum: B("enum", {
      startsExpr: S
    }),
    _module: B("module", {
      startsExpr: S
    }),
    _namespace: B("namespace", {
      startsExpr: S
    }),
    _interface: B("interface", {
      startsExpr: S
    }),
    _type: B("type", {
      startsExpr: S
    }),
    _opaque: B("opaque", {
      startsExpr: S
    }),
    name: k("name", {
      startsExpr: S
    }),
    placeholder: k("%%", {
      startsExpr: S
    }),
    string: k("string", {
      startsExpr: S
    }),
    num: k("num", {
      startsExpr: S
    }),
    bigint: k("bigint", {
      startsExpr: S
    }),
    decimal: k("decimal", {
      startsExpr: S
    }),
    regexp: k("regexp", {
      startsExpr: S
    }),
    privateName: k("#name", {
      startsExpr: S
    }),
    eof: k("eof"),
    jsxName: k("jsxName"),
    jsxText: k("jsxText", {
      beforeExpr: D
    }),
    jsxTagStart: k("jsxTagStart", {
      startsExpr: S
    }),
    jsxTagEnd: k("jsxTagEnd")
  };
  function M(a) {
    return a >= 93 && a <= 133;
  }
  function Z(a) {
    return a <= 92;
  }
  function z(a) {
    return a >= 58 && a <= 133;
  }
  function Ee(a) {
    return a >= 58 && a <= 137;
  }
  function Qe(a) {
    return ge[a];
  }
  function Pe(a) {
    return $[a];
  }
  function Rs(a) {
    return a >= 29 && a <= 33;
  }
  function Ct(a) {
    return a >= 129 && a <= 131;
  }
  function Us(a) {
    return a >= 90 && a <= 92;
  }
  function et(a) {
    return a >= 58 && a <= 92;
  }
  function zs(a) {
    return a >= 39 && a <= 59;
  }
  function $s(a) {
    return a === 34;
  }
  function Vs(a) {
    return be[a];
  }
  function qs(a) {
    return a >= 121 && a <= 123;
  }
  function Hs(a) {
    return a >= 124 && a <= 130;
  }
  function Te(a) {
    return ke[a];
  }
  function Ve(a) {
    return xe[a];
  }
  function Ws(a) {
    return a === 57;
  }
  function qe(a) {
    return a >= 24 && a <= 25;
  }
  function de(a) {
    return re[a];
  }
  re[8].updateContext = (a) => {
    a.pop();
  }, re[5].updateContext = re[7].updateContext = re[23].updateContext = (a) => {
    a.push(O.brace);
  }, re[22].updateContext = (a) => {
    a[a.length - 1] === O.template ? a.pop() : a.push(O.template);
  }, re[143].updateContext = (a) => {
    a.push(O.j_expr, O.j_oTag);
  };
  let tt = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-࢏ࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚ౜ౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽ೜-ೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲊᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-Ƛ꟱-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", vt = "·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࢗ-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-᫝᫠-᫫ᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‌‍‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯・꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿･";
  const Ks = new RegExp("[" + tt + "]"), Js = new RegExp("[" + tt + vt + "]");
  tt = vt = null;
  const It = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 4, 51, 13, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 7, 25, 39, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 39, 27, 10, 22, 251, 41, 7, 1, 17, 5, 57, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 31, 9, 2, 0, 3, 0, 2, 37, 2, 0, 26, 0, 2, 0, 45, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 200, 32, 32, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 24, 43, 261, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 26, 3994, 6, 582, 6842, 29, 1763, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 433, 44, 212, 63, 33, 24, 3, 24, 45, 74, 6, 0, 67, 12, 65, 1, 2, 0, 15, 4, 10, 7381, 42, 31, 98, 114, 8702, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 229, 29, 3, 0, 208, 30, 2, 2, 2, 1, 2, 6, 3, 4, 10, 1, 225, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4381, 3, 5773, 3, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 8489], Xs = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 7, 9, 32, 4, 318, 1, 78, 5, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 68, 8, 2, 0, 3, 0, 2, 3, 2, 4, 2, 0, 15, 1, 83, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 7, 19, 58, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 199, 7, 137, 9, 54, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 55, 9, 266, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 10, 5350, 0, 7, 14, 11465, 27, 2343, 9, 87, 9, 39, 4, 60, 6, 26, 9, 535, 9, 470, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4178, 9, 519, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 245, 1, 2, 9, 233, 0, 3, 0, 8, 1, 6, 0, 475, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
  function st(a, t) {
    let e = 65536;
    for (let s = 0, i = t.length; s < i; s += 2) {
      if (e += t[s], e > a) return !1;
      if (e += t[s + 1], e >= a) return !0;
    }
    return !1;
  }
  function ce(a) {
    return a < 65 ? a === 36 : a <= 90 ? !0 : a < 97 ? a === 95 : a <= 122 ? !0 : a <= 65535 ? a >= 170 && Ks.test(String.fromCharCode(a)) : st(a, It);
  }
  function je(a) {
    return a < 48 ? a === 36 : a < 58 ? !0 : a < 65 ? !1 : a <= 90 ? !0 : a < 97 ? a === 95 : a <= 122 ? !0 : a <= 65535 ? a >= 170 && Js.test(String.fromCharCode(a)) : st(a, It) || st(a, Xs);
  }
  const it = {
    keyword: ["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"],
    strict: ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"],
    strictBind: ["eval", "arguments"]
  }, Gs = new Set(it.keyword), Ys = new Set(it.strict), Zs = new Set(it.strictBind);
  function Nt(a, t) {
    return t && a === "await" || a === "enum";
  }
  function kt(a, t) {
    return Nt(a, t) || Ys.has(a);
  }
  function Et(a) {
    return Zs.has(a);
  }
  function jt(a, t) {
    return kt(a, t) || Et(a);
  }
  function Qs(a) {
    return Gs.has(a);
  }
  function ei(a, t, e) {
    return a === 64 && t === 64 && ce(e);
  }
  const ti = /* @__PURE__ */ new Set(["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete", "implements", "interface", "let", "package", "private", "protected", "public", "static", "yield", "eval", "arguments", "enum", "await"]);
  function si(a) {
    return ti.has(a);
  }
  class rt {
    constructor(t) {
      this.flags = 0, this.names = /* @__PURE__ */ new Map(), this.firstLexicalName = "", this.flags = t;
    }
  }
  class at {
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
      return new rt(t);
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
      this.isRedeclaredInScope(t, e, s) && this.parser.raise(p.VarRedeclaration, i, {
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
  class ii extends rt {
    constructor(...t) {
      super(...t), this.declareFunctions = /* @__PURE__ */ new Set();
    }
  }
  class ri extends at {
    createScope(t) {
      return new ii(t);
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
  const ai = /* @__PURE__ */ new Set(["_", "any", "bool", "boolean", "empty", "extends", "false", "interface", "mixed", "null", "number", "static", "string", "true", "typeof", "void"]), E = H`flow`({
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
  function ni(a) {
    return a.type === "DeclareExportAllDeclaration" || a.type === "DeclareExportDeclaration" && (!a.declaration || a.declaration.type !== "TypeAlias" && a.declaration.type !== "InterfaceDeclaration");
  }
  function Lt(a) {
    return a.importKind === "type" || a.importKind === "typeof";
  }
  const oi = {
    const: "declare export var",
    let: "declare export var",
    type: "export type",
    interface: "export interface"
  };
  function li(a, t) {
    const e = [], s = [];
    for (let i = 0; i < a.length; i++)
      (t(a[i], i, a) ? e : s).push(a[i]);
    return [e, s];
  }
  const ci = /\*?\s*@((?:no)?flow)\b/;
  var hi = (a) => class extends a {
    constructor(...e) {
      super(...e), this.flowPragma = void 0;
    }
    getScopeHandler() {
      return ri;
    }
    shouldParseTypes() {
      return this.getPluginOption("flow", "all") || this.flowPragma === "flow";
    }
    finishToken(e, s) {
      e !== 134 && e !== 13 && e !== 28 && this.flowPragma === void 0 && (this.flowPragma = null), super.finishToken(e, s);
    }
    addComment(e) {
      if (this.flowPragma === void 0) {
        const s = ci.exec(e.value);
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
      return this.next(), this.expectContextual(110), this.state.lastTokStartLoc.index > s.index + 1 && this.raise(E.UnexpectedSpaceBetweenModuloChecks, s), this.eat(10) ? (e.value = super.parseExpression(), this.expect(11), this.finishNode(e, "DeclaredPredicate")) : this.finishNode(e, "InferredPredicate");
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
        return this.match(16) ? this.flowParseDeclareModuleExports(e) : (s && this.raise(E.NestedDeclareModule, this.state.lastTokStartLoc), this.flowParseDeclareModule(e));
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
        this.match(83) ? (this.next(), !this.isContextual(130) && !this.match(87) && this.raise(E.InvalidNonTypeImportInDeclareModule, this.state.lastTokStartLoc), i.push(super.parseImport(o))) : (this.expectContextual(125, E.UnsupportedStatementInDeclareModule), i.push(this.flowParseDeclare(o, !0)));
      }
      this.scope.exit(), this.expect(8), this.finishNode(s, "BlockStatement");
      let r = null, n = !1;
      return i.forEach((o) => {
        ni(o) ? (r === "CommonJS" && this.raise(E.AmbiguousDeclareModuleKind, o), r = "ES") : o.type === "DeclareModuleExports" && (n && this.raise(E.DuplicateDeclareModuleExports, o), r === "ES" && this.raise(E.AmbiguousDeclareModuleKind, o), r = "CommonJS", n = !0);
      }), e.kind = r || "CommonJS", this.finishNode(e, "DeclareModule");
    }
    flowParseDeclareExportDeclaration(e, s) {
      if (this.expect(82), this.eat(65))
        return this.match(68) || this.match(80) ? e.declaration = this.flowParseDeclare(this.startNode()) : (e.declaration = this.flowParseType(), this.semicolon()), e.default = !0, this.finishNode(e, "DeclareExportDeclaration");
      if (this.match(75) || this.isLet() || (this.isContextual(130) || this.isContextual(129)) && !s) {
        const i = this.state.value;
        throw this.raise(E.UnsupportedDeclareExportKind, this.state.startLoc, {
          unsupportedExportKind: i,
          suggestion: oi[i]
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
      e === "_" && this.raise(E.UnexpectedReservedUnderscore, this.state.startLoc);
    }
    checkReservedType(e, s, i) {
      ai.has(e) && this.raise(i ? E.AssignReservedType : E.UnexpectedReservedType, s, {
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
      return i.name = this.flowParseRestrictedIdentifierName(), i.variance = r, i.bound = this.flowParseTypeParameterBound(), this.match(29) ? (this.eat(29), i.default = this.flowParseType()) : e && this.raise(E.MissingTypeParamDefault, s), this.finishNode(i, "TypeParameter");
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
      if (this.curContext() !== O.brace) {
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
      }), this.state.inType = s, !this.state.inType && this.curContext() === O.brace && this.reScan_lt_gt(), this.expect(48), this.finishNode(e, "TypeParameterInstantiation");
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
      const l = this.startNode();
      l.callProperties = [], l.properties = [], l.indexers = [], l.internalSlots = [];
      let u, f, g = !1;
      for (s && this.match(6) ? (this.expect(6), u = 9, f = !0) : (this.expect(5), u = 8, f = !1), l.exact = f; !this.match(u); ) {
        let A = !1, N = null, R = null;
        const q = this.startNode();
        if (r && this.isContextual(118)) {
          const V = this.lookahead();
          V.type !== 14 && V.type !== 17 && (this.next(), N = this.state.startLoc, e = !1);
        }
        if (e && this.isContextual(106)) {
          const V = this.lookahead();
          V.type !== 14 && V.type !== 17 && (this.next(), A = !0);
        }
        const F = this.flowParseVariance();
        if (this.eat(0))
          N != null && this.unexpected(N), this.eat(0) ? (F && this.unexpected(F.loc.start), l.internalSlots.push(this.flowParseObjectTypeInternalSlot(q, A))) : l.indexers.push(this.flowParseObjectTypeIndexer(q, A, F));
        else if (this.match(10) || this.match(47))
          N != null && this.unexpected(N), F && this.unexpected(F.loc.start), l.callProperties.push(this.flowParseObjectTypeCallProperty(q, A));
        else {
          let V = "init";
          if (this.isContextual(99) || this.isContextual(104)) {
            const Se = this.lookahead();
            Ee(Se.type) && (V = this.state.value, this.next());
          }
          const De = this.flowParseObjectTypeProperty(q, A, N, F, V, i, n ?? !f);
          De === null ? (g = !0, R = this.state.lastTokStartLoc) : l.properties.push(De);
        }
        this.flowObjectTypeSemicolon(), R && !this.match(8) && !this.match(9) && this.raise(E.UnexpectedExplicitInexactInObject, R);
      }
      this.expect(u), i && (l.inexact = g);
      const w = this.finishNode(l, "ObjectTypeAnnotation");
      return this.state.inType = o, w;
    }
    flowParseObjectTypeProperty(e, s, i, r, n, o, l) {
      if (this.eat(21))
        return this.match(12) || this.match(13) || this.match(8) || this.match(9) ? (o ? l || this.raise(E.InexactInsideExact, this.state.lastTokStartLoc) : this.raise(E.InexactInsideNonObject, this.state.lastTokStartLoc), r && this.raise(E.InexactVariance, r), null) : (o || this.raise(E.UnexpectedSpreadType, this.state.lastTokStartLoc), i != null && this.unexpected(i), r && this.raise(E.SpreadVariance, r), e.argument = this.flowParseType(), this.finishNode(e, "ObjectTypeSpreadProperty"));
      {
        e.key = this.flowParseObjectPropertyKey(), e.static = s, e.proto = i != null, e.kind = n;
        let u = !1;
        return this.match(47) || this.match(10) ? (e.method = !0, i != null && this.unexpected(i), r && this.unexpected(r.loc.start), e.value = this.flowParseObjectTypeMethodish(this.startNodeAt(e.loc.start)), (n === "get" || n === "set") && this.flowCheckGetterSetterParams(e), !o && e.key.name === "constructor" && e.value.this && this.raise(E.ThisParamBannedInConstructor, e.value.this)) : (n !== "init" && this.unexpected(), e.method = !1, this.eat(17) && (u = !0), e.value = this.flowParseTypeInitialiser(), e.variance = r), e.optional = u, this.finishNode(e, "ObjectTypeProperty");
      }
    }
    flowCheckGetterSetterParams(e) {
      const s = e.kind === "get" ? 0 : 1, i = e.value.params.length + (e.value.rest ? 1 : 0);
      e.value.this && this.raise(e.kind === "get" ? E.GetterMayNotHaveThisParam : E.SetterMayNotHaveThisParam, e.value.this), i !== s && this.raise(e.kind === "get" ? p.BadGetterArity : p.BadSetterArity, e), e.kind === "set" && e.value.rest && this.raise(p.BadSetterRestParameter, e);
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
      const n = this.startNode(), o = this.lookahead(), l = this.state.type === 78;
      return o.type === 14 || o.type === 17 ? (l && !e && this.raise(E.ThisParamMustBeFirst, n), s = this.parseIdentifier(l), this.eat(17) && (i = !0, l && this.raise(E.ThisParamMayNotBeOptional, n)), r = this.flowParseTypeInitialiser()) : r = this.flowParseType(), n.name = s, n.optional = i, n.typeAnnotation = r, this.finishNode(n, "FunctionTypeParam");
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
          const l = this.startNode();
          return l.typeParameters = this.flowParseTypeParameterDeclaration(), this.expect(10), i = this.flowParseFunctionTypeParams(), l.params = i.params, l.rest = i.rest, l.this = i._this, this.expect(11), this.expect(19), l.returnType = this.flowParseType(), this.finishNode(l, "FunctionTypeAnnotation");
        }
        case 10: {
          const l = this.startNode();
          if (this.next(), !this.match(11) && !this.match(21))
            if (M(this.state.type) || this.match(78)) {
              const u = this.lookahead().type;
              n = u !== 17 && u !== 14;
            } else
              n = !0;
          if (n) {
            if (this.state.noAnonFunctionType = !1, r = this.flowParseType(), this.state.noAnonFunctionType = o, this.state.noAnonFunctionType || !(this.match(12) || this.match(11) && this.lookahead().type === 19))
              return this.expect(11), r;
            this.eat(12);
          }
          return r ? i = this.flowParseFunctionTypeParams([this.reinterpretTypeAsFunctionTypeParam(r)]) : i = this.flowParseFunctionTypeParams(), l.params = i.params, l.rest = i.rest, l.this = i._this, this.expect(11), this.expect(19), l.returnType = this.flowParseType(), l.typeParameters = null, this.finishNode(l, "FunctionTypeAnnotation");
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
            throw this.raise(E.UnexpectedSubtractionOperand, this.state.startLoc);
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
          if (et(this.state.type)) {
            const l = Te(this.state.type);
            return this.next(), super.createIdentifier(s, l);
          } else if (M(this.state.type))
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
        if (z(i.type)) {
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
          if (this.match(80) || M(this.state.type) || this.match(68) || this.match(74) || this.match(82))
            return this.flowParseDeclare(e);
        } else if (M(this.state.type)) {
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
      return e === 126 || Ct(e) ? !this.state.containsEsc : super.shouldParseExportDeclaration();
    }
    isExportDefaultSpecifier() {
      const {
        type: e
      } = this.state;
      return e === 126 || Ct(e) ? this.state.containsEsc : super.isExportDefaultSpecifier();
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
        const w = this.lookaheadCharCode();
        if (w === 44 || w === 61 || w === 58 || w === 41)
          return this.setOptionalParametersError(i), e;
      }
      this.expect(17);
      const r = this.state.clone(), n = this.state.noArrowAt, o = this.startNodeAt(s);
      let {
        consequent: l,
        failed: u
      } = this.tryParseConditionalConsequent(), [f, g] = this.getArrowLikeExpressions(l);
      if (u || g.length > 0) {
        const w = [...n];
        if (g.length > 0) {
          this.state = r, this.state.noArrowAt = w;
          for (let A = 0; A < g.length; A++)
            w.push(g[A].start);
          ({
            consequent: l,
            failed: u
          } = this.tryParseConditionalConsequent()), [f, g] = this.getArrowLikeExpressions(l);
        }
        u && f.length > 1 && this.raise(E.AmbiguousConditionalArrow, r.startLoc), u && f.length === 1 && (this.state = r, w.push(f[0].start), this.state.noArrowAt = w, {
          consequent: l,
          failed: u
        } = this.tryParseConditionalConsequent());
      }
      return this.getArrowLikeExpressions(l, !0), this.state.noArrowAt = n, this.expect(14), o.test = e, o.consequent = l, o.alternate = this.forwardNoArrowParamsConversionAt(o, () => this.parseMaybeAssign(void 0, void 0)), this.finishNode(o, "ConditionalExpression");
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
      return s ? (r.forEach((n) => this.finishArrowValidation(n)), [r, []]) : li(r, (n) => n.params.every((o) => this.isAssignable(o, !0)));
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
      super.parseClassMember(e, s, i), s.declare && (s.type !== "ClassProperty" && s.type !== "ClassPrivateProperty" && s.type !== "PropertyDefinition" ? this.raise(E.DeclareClassElement, r) : s.value && this.raise(E.DeclareClassFieldInitializer, s.value));
    }
    isIterator(e) {
      return e === "iterator" || e === "asyncIterator";
    }
    readIterator() {
      const e = super.readWord1(), s = "@@" + e;
      (!this.isIterator(e) || !this.state.inType) && this.raise(p.InvalidIdentifier, this.state.curPosition(), {
        identifierName: s
      }), this.finishToken(132, s);
    }
    getTokenFromCode(e) {
      const s = this.input.charCodeAt(this.state.pos + 1);
      e === 123 && s === 124 ? this.finishOp(6, 2) : this.state.inType && (e === 62 || e === 60) ? this.finishOp(e === 62 ? 48 : 47, 1) : this.state.inType && e === 63 ? s === 46 ? this.finishOp(18, 2) : this.finishOp(17, 1) : ei(e, s, this.input.charCodeAt(this.state.pos + 2)) ? (this.state.pos += 2, this.readIterator()) : super.getTokenFromCode(e);
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
        n && n.type === "TypeCastExpression" && !((i = n.extra) != null && i.parenthesized) && (e.length > 1 || !s) && this.raise(E.TypeCastInPattern, n.typeAnnotation);
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
        const l = s.params;
        l.length > 0 && this.isThisParam(l[0]) && this.raise(E.ThisParamBannedInConstructor, s);
      } else if (s.type === "MethodDefinition" && n && s.value.params) {
        const l = s.value.params;
        l.length > 0 && this.isThisParam(l[0]) && this.raise(E.ThisParamBannedInConstructor, s);
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
        this.isThisParam(i) && e.kind === "get" ? this.raise(E.GetterMayNotHaveThisParam, i) : this.isThisParam(i) && this.raise(E.SetterMayNotHaveThisParam, i);
      }
    }
    parsePropertyNamePrefixOperator(e) {
      e.variance = this.flowParseVariance();
    }
    parseObjPropValue(e, s, i, r, n, o, l) {
      e.variance && this.unexpected(e.variance.loc.start), delete e.variance;
      let u;
      this.match(47) && !o && (u = this.flowParseTypeParameterDeclaration(), this.match(10) || this.unexpected());
      const f = super.parseObjPropValue(e, s, i, r, n, o, l);
      return u && ((f.value || f).typeParameters = u), f;
    }
    parseFunctionParamType(e) {
      return this.eat(17) && (e.type !== "Identifier" && this.raise(E.PatternIsOptional, e), this.isThisParam(e) && this.raise(E.ThisParamMayNotBeOptional, e), e.optional = !0), this.match(14) ? e.typeAnnotation = this.flowParseTypeAnnotation() : this.isThisParam(e) && this.raise(E.ThisParamAnnotationRequired, e), this.match(29) && this.isThisParam(e) && this.raise(E.ThisParamNoDefault, e), this.resetEndLocation(e), e;
    }
    parseMaybeDefault(e, s) {
      const i = super.parseMaybeDefault(e, s);
      return i.type === "AssignmentPattern" && i.typeAnnotation && i.right.start < i.typeAnnotation.start && this.raise(E.TypeBeforeInitializer, i.typeAnnotation), i;
    }
    checkImportReflection(e) {
      super.checkImportReflection(e), e.module && e.importKind !== "value" && this.raise(E.ImportReflectionHasImportType, e.specifiers[0].loc.start);
    }
    parseImportSpecifierLocal(e, s, i) {
      s.local = Lt(e) ? this.flowParseRestrictedIdentifier(!0, !0) : this.parseIdentifier(), e.specifiers.push(this.finishImportSpecifier(s, i));
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
      let l = null;
      o.type === "Identifier" && (o.name === "type" ? l = "type" : o.name === "typeof" && (l = "typeof"));
      let u = !1;
      if (this.isContextual(93) && !this.isLookaheadContextual("as")) {
        const g = this.parseIdentifier(!0);
        l !== null && !z(this.state.type) ? (e.imported = g, e.importKind = l, e.local = this.cloneIdentifier(g)) : (e.imported = o, e.importKind = null, e.local = this.parseIdentifier());
      } else {
        if (l !== null && z(this.state.type))
          e.imported = this.parseIdentifier(!0), e.importKind = l;
        else {
          if (s)
            throw this.raise(p.ImportBindingIsString, e, {
              importName: o.value
            });
          e.imported = o, e.importKind = null;
        }
        this.eatContextual(93) ? e.local = this.parseIdentifier() : (u = !0, e.local = this.cloneIdentifier(e.imported));
      }
      const f = Lt(e);
      return i && f && this.raise(E.ImportTypeShorthandOnlyInPureImport, e), (i || f) && this.checkReservedType(e.local.name, e.local.loc.start, !0), u && !i && !f && this.checkReservedWord(e.local.name, e.loc.start, !0, !0), this.finishImportSpecifier(e, "ImportSpecifier");
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
          context: u
        } = this.state, f = u[u.length - 1];
        (f === O.j_oTag || f === O.j_expr) && u.pop();
      }
      if ((i = n) != null && i.error || this.match(47)) {
        var o, l;
        r = r || this.state.clone();
        let u;
        const f = this.tryParse((w) => {
          var A;
          u = this.flowParseTypeParameterDeclaration();
          const N = this.forwardNoArrowParamsConversionAt(u, () => {
            const q = super.parseMaybeAssign(e, s);
            return this.resetStartLocationFromNode(q, u), q;
          });
          (A = N.extra) != null && A.parenthesized && w();
          const R = this.maybeUnwrapTypeCastExpression(N);
          return R.type !== "ArrowFunctionExpression" && w(), R.typeParameters = u, this.resetStartLocationFromNode(R, u), N;
        }, r);
        let g = null;
        if (f.node && this.maybeUnwrapTypeCastExpression(f.node).type === "ArrowFunctionExpression") {
          if (!f.error && !f.aborted)
            return f.node.async && this.raise(E.UnexpectedTypeParameterBeforeAsyncArrowFunction, u), f.node;
          g = f.node;
        }
        if ((o = n) != null && o.node)
          return this.state = n.failState, n.node;
        if (g)
          return this.state = f.failState, g;
        throw (l = n) != null && l.thrown ? n.error : f.thrown ? f.error : this.raise(E.UnexpectedTokenAfterTypeParameter, u);
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
          this.isThisParam(e.params[n]) && n > 0 && this.raise(E.ThisParamMustBeFirst, e.params[n]);
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
        const r = this.state.clone(), n = this.tryParse((l) => this.parseAsyncArrowWithTypeParameters(s) || l(), r);
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
      return this.state.hasFlowComment && this.raise(E.UnterminatedFlowComment, this.state.curPosition()), i;
    }
    skipBlockComment() {
      if (this.hasPlugin("flowComments") && this.skipFlowComment()) {
        if (this.state.hasFlowComment)
          throw this.raise(E.NestedFlowComment, this.state.startLoc);
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
        throw this.raise(p.UnterminatedComment, this.state.curPosition());
    }
    flowEnumErrorBooleanMemberNotInitialized(e, {
      enumName: s,
      memberName: i
    }) {
      this.raise(E.EnumBooleanMemberNotInitialized, e, {
        memberName: i,
        enumName: s
      });
    }
    flowEnumErrorInvalidMemberInitializer(e, s) {
      return this.raise(s.explicitType ? s.explicitType === "symbol" ? E.EnumInvalidMemberInitializerSymbolType : E.EnumInvalidMemberInitializerPrimaryType : E.EnumInvalidMemberInitializerUnknownType, e, s);
    }
    flowEnumErrorNumberMemberNotInitialized(e, s) {
      this.raise(E.EnumNumberMemberNotInitialized, e, s);
    }
    flowEnumErrorStringMemberInconsistentlyInitialized(e, s) {
      this.raise(E.EnumStringMemberInconsistentlyInitialized, e, s);
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
          id: l,
          init: u
        } = this.flowEnumMemberRaw(), f = l.name;
        if (f === "")
          continue;
        /^[a-z]/.test(f) && this.raise(E.EnumInvalidMemberName, l, {
          memberName: f,
          suggestion: f[0].toUpperCase() + f.slice(1),
          enumName: e
        }), i.has(f) && this.raise(E.EnumDuplicateMemberName, l, {
          memberName: f,
          enumName: e
        }), i.add(f);
        const g = {
          enumName: e,
          explicitType: s,
          memberName: f
        };
        switch (o.id = l, u.type) {
          case "boolean": {
            this.flowEnumCheckExplicitTypeMismatch(u.loc, g, "boolean"), o.init = u.value, r.booleanMembers.push(this.finishNode(o, "EnumBooleanMember"));
            break;
          }
          case "number": {
            this.flowEnumCheckExplicitTypeMismatch(u.loc, g, "number"), o.init = u.value, r.numberMembers.push(this.finishNode(o, "EnumNumberMember"));
            break;
          }
          case "string": {
            this.flowEnumCheckExplicitTypeMismatch(u.loc, g, "string"), o.init = u.value, r.stringMembers.push(this.finishNode(o, "EnumStringMember"));
            break;
          }
          case "invalid":
            throw this.flowEnumErrorInvalidMemberInitializer(u.loc, g);
          case "none":
            switch (s) {
              case "boolean":
                this.flowEnumErrorBooleanMemberNotInitialized(u.loc, g);
                break;
              case "number":
                this.flowEnumErrorNumberMemberNotInitialized(u.loc, g);
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
      if (!M(this.state.type))
        throw this.raise(E.EnumInvalidExplicitTypeUnknownSupplied, this.state.startLoc, {
          enumName: e
        });
      const {
        value: s
      } = this.state;
      return this.next(), s !== "boolean" && s !== "number" && s !== "string" && s !== "symbol" && this.raise(E.EnumInvalidExplicitType, this.state.startLoc, {
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
        hasUnknownMembers: l
      } = this.flowEnumMembers({
        enumName: i,
        explicitType: n
      });
      switch (e.hasUnknownMembers = l, n) {
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
          const u = () => (e.members = [], this.expect(8), this.finishNode(e, "EnumStringBody"));
          e.explicitType = !1;
          const f = o.booleanMembers.length, g = o.numberMembers.length, w = o.stringMembers.length, A = o.defaultedMembers.length;
          if (!f && !g && !w && !A)
            return u();
          if (!f && !g)
            return e.members = this.flowEnumStringMembers(o.stringMembers, o.defaultedMembers, {
              enumName: i
            }), this.expect(8), this.finishNode(e, "EnumStringBody");
          if (!g && !w && f >= A) {
            for (const N of o.defaultedMembers)
              this.flowEnumErrorBooleanMemberNotInitialized(N.loc.start, {
                enumName: i,
                memberName: N.id.name
              });
            return e.members = o.booleanMembers, this.expect(8), this.finishNode(e, "EnumBooleanBody");
          } else if (!f && !w && g >= A) {
            for (const N of o.defaultedMembers)
              this.flowEnumErrorNumberMemberNotInitialized(N.loc.start, {
                enumName: i,
                memberName: N.id.name
              });
            return e.members = o.numberMembers, this.expect(8), this.finishNode(e, "EnumNumberBody");
          } else
            return this.raise(E.EnumInconsistentMemberValues, r, {
              enumName: i
            }), u();
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
  const ui = {
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
  }, pi = /\r\n|[\r\n\u2028\u2029]/, He = new RegExp(pi.source, "g");
  function Fe(a) {
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
  function Dt(a, t, e) {
    for (let s = t; s < e; s++)
      if (Fe(a.charCodeAt(s)))
        return !0;
    return !1;
  }
  const nt = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g, ot = /(?:[^\S\n\r\u2028\u2029]|\/\/.*|\/\*.*?\*\/)*/g;
  function di(a) {
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
  const Le = H`jsx`({
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
  function we(a) {
    return a ? a.type === "JSXOpeningFragment" || a.type === "JSXClosingFragment" : !1;
  }
  function Be(a) {
    if (a.type === "JSXIdentifier")
      return a.name;
    if (a.type === "JSXNamespacedName")
      return a.namespace.name + ":" + a.name.name;
    if (a.type === "JSXMemberExpression")
      return Be(a.object) + "." + Be(a.property);
    throw new Error("Node had unexpected type: " + a.type);
  }
  var fi = (a) => class extends a {
    jsxReadToken() {
      let e = "", s = this.state.pos;
      for (; ; ) {
        if (this.state.pos >= this.length)
          throw this.raise(Le.UnterminatedJsxContent, this.state.startLoc);
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
            Fe(i) ? (e += this.input.slice(s, this.state.pos), e += this.jsxReadNewLine(!0), s = this.state.pos) : ++this.state.pos;
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
          throw this.raise(p.UnterminatedString, this.state.startLoc);
        const r = this.input.charCodeAt(this.state.pos);
        if (r === e) break;
        r === 38 ? (s += this.input.slice(i, this.state.pos), s += this.jsxReadEntity(), i = this.state.pos) : Fe(r) ? (s += this.input.slice(i, this.state.pos), s += this.jsxReadNewLine(!1), i = this.state.pos) : ++this.state.pos;
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
          const r = this.input.slice(e, this.state.pos), n = ui[r];
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
      while (je(e) || e === 45);
      this.finishToken(141, this.input.slice(s, this.state.pos));
    }
    jsxParseIdentifier() {
      const e = this.startNode();
      return this.match(141) ? e.name = this.state.value : et(this.state.type) ? e.name = Te(this.state.type) : this.unexpected(), this.next(), this.finishNode(e, "JSXIdentifier");
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
          return e = this.startNode(), this.setContext(O.brace), this.next(), e = this.jsxParseExpressionContainer(e, O.j_oTag), e.expression.type === "JSXEmptyExpression" && this.raise(Le.AttributeIsEmpty, e), e;
        case 143:
        case 134:
          return this.parseExprAtom();
        default:
          throw this.raise(Le.UnsupportedJsxValue, this.state.startLoc);
      }
    }
    jsxParseEmptyExpression() {
      const e = this.startNodeAt(this.state.lastTokEndLoc);
      return this.finishNodeAt(e, "JSXEmptyExpression", this.state.startLoc);
    }
    jsxParseSpreadChild(e) {
      return this.next(), e.expression = this.parseExpression(), this.setContext(O.j_expr), this.state.canStartJSXElement = !0, this.expect(8), this.finishNode(e, "JSXSpreadChild");
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
      return this.match(5) ? (this.setContext(O.brace), this.next(), this.expect(21), e.argument = this.parseMaybeAssignAllowIn(), this.setContext(O.j_oTag), this.state.canStartJSXElement = !0, this.expect(8), this.finishNode(e, "JSXSpreadAttribute")) : (e.name = this.jsxParseNamespacedName(), e.value = this.eat(29) ? this.jsxParseAttributeValue() : null, this.finishNode(e, "JSXAttribute"));
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
              this.setContext(O.brace), this.next(), this.match(21) ? i.push(this.jsxParseSpreadChild(o)) : i.push(this.jsxParseExpressionContainer(o, O.j_expr));
              break;
            }
            default:
              this.unexpected();
          }
        we(r) && !we(n) && n !== null ? this.raise(Le.MissingClosingTagFragment, n) : !we(r) && we(n) ? this.raise(Le.MissingClosingTagElement, n, {
          openingTagName: Be(r.name)
        }) : !we(r) && !we(n) && Be(n.name) !== Be(r.name) && this.raise(Le.MissingClosingTagElement, n, {
          openingTagName: Be(r.name)
        });
      }
      if (we(r) ? (s.openingFragment = r, s.closingFragment = n) : (s.openingElement = r, s.closingElement = n), s.children = i, this.match(47))
        throw this.raise(Le.UnwrappedAdjacentJSXElements, this.state.startLoc);
      return we(r) ? this.finishNode(s, "JSXFragment") : this.finishNode(s, "JSXElement");
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
      if (s === O.j_expr) {
        this.jsxReadToken();
        return;
      }
      if (s === O.j_oTag || s === O.j_cTag) {
        if (ce(e)) {
          this.jsxReadWord();
          return;
        }
        if (e === 62) {
          ++this.state.pos, this.finishToken(144);
          return;
        }
        if ((e === 34 || e === 39) && s === O.j_oTag) {
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
        s.splice(-2, 2, O.j_cTag), this.state.canStartJSXElement = !1;
      else if (i === 143)
        s.push(O.j_oTag);
      else if (i === 144) {
        const r = s[s.length - 1];
        r === O.j_oTag && e === 56 || r === O.j_cTag ? (s.pop(), this.state.canStartJSXElement = s[s.length - 1] === O.j_expr) : (this.setContext(O.j_expr), this.state.canStartJSXElement = !0);
      } else
        this.state.canStartJSXElement = Qe(i);
    }
  };
  class mi extends rt {
    constructor(...t) {
      super(...t), this.tsNames = /* @__PURE__ */ new Map();
    }
  }
  class yi extends at {
    constructor(...t) {
      super(...t), this.importsStack = [];
    }
    createScope(t) {
      return this.importsStack.push(/* @__PURE__ */ new Set()), new mi(t);
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
        this.hasImport(t, !0) && this.parser.raise(p.VarRedeclaration, s, {
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
  class xi {
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
  function We(a, t) {
    return (a ? 2 : 0) | (t ? 1 : 0);
  }
  class gi {
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
  function Ot(a, t) {
    a.trailingComments === void 0 ? a.trailingComments = t : a.trailingComments.unshift(...t);
  }
  function bi(a, t) {
    a.leadingComments === void 0 ? a.leadingComments = t : a.leadingComments.unshift(...t);
  }
  function Re(a, t) {
    a.innerComments === void 0 ? a.innerComments = t : a.innerComments.unshift(...t);
  }
  function le(a, t, e) {
    let s = null, i = t.length;
    for (; s === null && i > 0; )
      s = t[--i];
    s === null || s.start > e.start ? Re(a, e.comments) : Ot(s, e.comments);
  }
  class Pi extends gi {
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
        const o = e[i], l = o.end;
        if (l > n)
          o.containingNode = t, this.finalizeComment(o), e.splice(i, 1);
        else {
          l === n && (o.trailingNode = t);
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
        t.leadingNode !== null && Ot(t.leadingNode, s), t.trailingNode !== null && bi(t.trailingNode, s);
      else {
        const i = t.containingNode, r = t.start;
        if (this.input.charCodeAt(this.offsetToSourcePos(r) - 1) === 44)
          switch (i.type) {
            case "ObjectExpression":
            case "ObjectPattern":
              le(i, i.properties, t);
              break;
            case "CallExpression":
            case "NewExpression":
            case "OptionalCallExpression":
              le(i, i.arguments, t);
              break;
            case "ImportExpression":
              le(i, [i.source, (e = i.options) != null ? e : null], t);
              break;
            case "FunctionDeclaration":
            case "FunctionExpression":
            case "ArrowFunctionExpression":
            case "ObjectMethod":
            case "ClassMethod":
            case "ClassPrivateMethod":
            case "TSTypeParameterDeclaration":
              le(i, i.params, t);
              break;
            case "ArrayExpression":
            case "ArrayPattern":
              le(i, i.elements, t);
              break;
            case "ExportNamedDeclaration":
            case "ImportDeclaration":
              le(i, i.specifiers, t);
              break;
            case "TSEnumDeclaration":
              le(i, i.members, t);
              break;
            case "TSEnumBody":
              le(i, i.members, t);
              break;
            case "TSInterfaceBody":
              le(i, i.body, t);
              break;
            default: {
              if (i.type === "RecordExpression") {
                le(i, i.properties, t);
                break;
              }
              if (i.type === "TupleExpression") {
                le(i, i.elements, t);
                break;
              }
              Re(i, s);
            }
          }
        else
          Re(i, s);
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
        const o = i[n], l = o.end;
        if (o.start === s)
          o.leadingNode = t;
        else if (l === e)
          o.trailingNode = t;
        else if (l < e)
          break;
      }
    }
  }
  class lt {
    constructor() {
      this.flags = 1024, this.startIndex = void 0, this.curLine = void 0, this.lineStart = void 0, this.startLoc = void 0, this.endLoc = void 0, this.errors = [], this.potentialArrowAt = -1, this.noArrowAt = [], this.noArrowParamsConversionAt = [], this.topicContext = {
        maxNumOfResolvableTopics: 0,
        maxTopicIndex: null
      }, this.labels = [], this.commentsLen = 0, this.commentStack = [], this.pos = 0, this.type = 140, this.value = null, this.start = 0, this.end = 0, this.lastTokEndLoc = null, this.lastTokStartLoc = null, this.context = [O.brace], this.firstInvalidTemplateEscapePos = null, this.strictErrors = /* @__PURE__ */ new Map(), this.tokensLength = 0;
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
      this.strict = t === !1 ? !1 : t === !0 ? !0 : e === "module", this.startIndex = s, this.curLine = i, this.lineStart = -r, this.startLoc = this.endLoc = new d(i, r, s);
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
      return new d(this.curLine, this.pos - this.lineStart, this.pos + this.startIndex);
    }
    clone() {
      const t = new lt();
      return t.flags = this.flags, t.startIndex = this.startIndex, t.curLine = this.curLine, t.lineStart = this.lineStart, t.startLoc = this.startLoc, t.endLoc = this.endLoc, t.errors = this.errors.slice(), t.potentialArrowAt = this.potentialArrowAt, t.noArrowAt = this.noArrowAt.slice(), t.noArrowParamsConversionAt = this.noArrowParamsConversionAt.slice(), t.topicContext = this.topicContext, t.labels = this.labels.slice(), t.commentsLen = this.commentsLen, t.commentStack = this.commentStack.slice(), t.pos = this.pos, t.type = this.type, t.value = this.value, t.start = this.start, t.end = this.end, t.lastTokEndLoc = this.lastTokEndLoc, t.lastTokStartLoc = this.lastTokStartLoc, t.context = this.context.slice(), t.firstInvalidTemplateEscapePos = this.firstInvalidTemplateEscapePos, t.strictErrors = this.strictErrors, t.tokensLength = this.tokensLength, t;
    }
  }
  var Ti = function(t) {
    return t >= 48 && t <= 57;
  };
  const Mt = {
    decBinOct: /* @__PURE__ */ new Set([46, 66, 69, 79, 95, 98, 101, 111]),
    hex: /* @__PURE__ */ new Set([46, 88, 95, 120])
  }, Ke = {
    bin: (a) => a === 48 || a === 49,
    oct: (a) => a >= 48 && a <= 55,
    dec: (a) => a >= 48 && a <= 57,
    hex: (a) => a >= 48 && a <= 57 || a >= 65 && a <= 70 || a >= 97 && a <= 102
  };
  function Ft(a, t, e, s, i, r) {
    const n = e, o = s, l = i;
    let u = "", f = null, g = e;
    const {
      length: w
    } = t;
    for (; ; ) {
      if (e >= w) {
        r.unterminated(n, o, l), u += t.slice(g, e);
        break;
      }
      const A = t.charCodeAt(e);
      if (wi(a, A, t, e)) {
        u += t.slice(g, e);
        break;
      }
      if (A === 92) {
        u += t.slice(g, e);
        const N = Ai(t, e, s, i, a === "template", r);
        N.ch === null && !f ? f = {
          pos: e,
          lineStart: s,
          curLine: i
        } : u += N.ch, {
          pos: e,
          lineStart: s,
          curLine: i
        } = N, g = e;
      } else A === 8232 || A === 8233 ? (++e, ++i, s = e) : A === 10 || A === 13 ? a === "template" ? (u += t.slice(g, e) + `
`, ++e, A === 13 && t.charCodeAt(e) === 10 && ++e, ++i, g = s = e) : r.unterminated(n, o, l) : ++e;
    }
    return {
      pos: e,
      str: u,
      firstInvalidLoc: f,
      lineStart: s,
      curLine: i,
      containsInvalid: !!f
    };
  }
  function wi(a, t, e, s) {
    return a === "template" ? t === 96 || t === 36 && e.charCodeAt(s + 1) === 123 : t === (a === "double" ? 34 : 39);
  }
  function Ai(a, t, e, s, i, r) {
    const n = !i;
    t++;
    const o = (u) => ({
      pos: t,
      ch: u,
      lineStart: e,
      curLine: s
    }), l = a.charCodeAt(t++);
    switch (l) {
      case 110:
        return o(`
`);
      case 114:
        return o("\r");
      case 120: {
        let u;
        return {
          code: u,
          pos: t
        } = ct(a, t, e, s, 2, !1, n, r), o(u === null ? null : String.fromCharCode(u));
      }
      case 117: {
        let u;
        return {
          code: u,
          pos: t
        } = _t(a, t, e, s, n, r), o(u === null ? null : String.fromCodePoint(u));
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
        if (l >= 48 && l <= 55) {
          const u = t - 1;
          let g = /^[0-7]+/.exec(a.slice(u, t + 2))[0], w = parseInt(g, 8);
          w > 255 && (g = g.slice(0, -1), w = parseInt(g, 8)), t += g.length - 1;
          const A = a.charCodeAt(t);
          if (g !== "0" || A === 56 || A === 57) {
            if (i)
              return o(null);
            r.strictNumericEscape(u, e, s);
          }
          return o(String.fromCharCode(w));
        }
        return o(String.fromCharCode(l));
    }
  }
  function ct(a, t, e, s, i, r, n, o) {
    const l = t;
    let u;
    return {
      n: u,
      pos: t
    } = Bt(a, t, e, s, 16, i, r, !1, o, !n), u === null && (n ? o.invalidEscapeSequence(l, e, s) : t = l - 1), {
      code: u,
      pos: t
    };
  }
  function Bt(a, t, e, s, i, r, n, o, l, u) {
    const f = t, g = i === 16 ? Mt.hex : Mt.decBinOct, w = i === 16 ? Ke.hex : i === 10 ? Ke.dec : i === 8 ? Ke.oct : Ke.bin;
    let A = !1, N = 0;
    for (let R = 0, q = r ?? 1 / 0; R < q; ++R) {
      const F = a.charCodeAt(t);
      let V;
      if (F === 95 && o !== "bail") {
        const De = a.charCodeAt(t - 1), Se = a.charCodeAt(t + 1);
        if (o) {
          if (Number.isNaN(Se) || !w(Se) || g.has(De) || g.has(Se)) {
            if (u) return {
              n: null,
              pos: t
            };
            l.unexpectedNumericSeparator(t, e, s);
          }
        } else {
          if (u) return {
            n: null,
            pos: t
          };
          l.numericSeparatorInEscapeSequence(t, e, s);
        }
        ++t;
        continue;
      }
      if (F >= 97 ? V = F - 97 + 10 : F >= 65 ? V = F - 65 + 10 : Ti(F) ? V = F - 48 : V = 1 / 0, V >= i) {
        if (V <= 9 && u)
          return {
            n: null,
            pos: t
          };
        if (V <= 9 && l.invalidDigit(t, e, s, i))
          V = 0;
        else if (n)
          V = 0, A = !0;
        else
          break;
      }
      ++t, N = N * i + V;
    }
    return t === f || r != null && t - f !== r || A ? {
      n: null,
      pos: t
    } : {
      n: N,
      pos: t
    };
  }
  function _t(a, t, e, s, i, r) {
    const n = a.charCodeAt(t);
    let o;
    if (n === 123) {
      if (++t, {
        code: o,
        pos: t
      } = ct(a, t, e, s, a.indexOf("}", t) - t, !0, i, r), ++t, o !== null && o > 1114111)
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
      } = ct(a, t, e, s, 4, !1, i, r));
    return {
      code: o,
      pos: t
    };
  }
  function Ue(a, t, e) {
    return new d(e, a - t, a);
  }
  const Si = /* @__PURE__ */ new Set([103, 109, 115, 105, 121, 117, 100, 118]);
  class Ae {
    constructor(t) {
      const e = t.startIndex || 0;
      this.type = t.type, this.value = t.value, this.start = e + t.start, this.end = e + t.end, this.loc = new m(t.startLoc, t.endLoc);
    }
  }
  class Ci extends Pi {
    constructor(t, e) {
      super(), this.isLookahead = void 0, this.tokens = [], this.errorHandlers_readInt = {
        invalidDigit: (s, i, r, n) => this.optionFlags & 2048 ? (this.raise(p.InvalidDigit, Ue(s, i, r), {
          radix: n
        }), !0) : !1,
        numericSeparatorInEscapeSequence: this.errorBuilder(p.NumericSeparatorInEscapeSequence),
        unexpectedNumericSeparator: this.errorBuilder(p.UnexpectedNumericSeparator)
      }, this.errorHandlers_readCodePoint = Object.assign({}, this.errorHandlers_readInt, {
        invalidEscapeSequence: this.errorBuilder(p.InvalidEscapeSequence),
        invalidCodePoint: this.errorBuilder(p.InvalidCodePoint)
      }), this.errorHandlers_readStringContents_string = Object.assign({}, this.errorHandlers_readCodePoint, {
        strictNumericEscape: (s, i, r) => {
          this.recordStrictModeErrors(p.StrictNumericEscape, Ue(s, i, r));
        },
        unterminated: (s, i, r) => {
          throw this.raise(p.UnterminatedString, Ue(s - 1, i, r));
        }
      }), this.errorHandlers_readStringContents_template = Object.assign({}, this.errorHandlers_readCodePoint, {
        strictNumericEscape: this.errorBuilder(p.StrictNumericEscape),
        unterminated: (s, i, r) => {
          throw this.raise(p.UnterminatedTemplate, Ue(s, i, r));
        }
      }), this.state = new lt(), this.state.init(t), this.input = e, this.length = e.length, this.comments = [], this.isLookahead = !1;
    }
    pushToken(t) {
      this.tokens.length = this.state.tokensLength, this.tokens.push(t), ++this.state.tokensLength;
    }
    next() {
      this.checkKeywordEscapes(), this.optionFlags & 256 && this.pushToken(new Ae(this.state)), this.state.lastTokEndLoc = this.state.endLoc, this.state.lastTokStartLoc = this.state.startLoc, this.nextToken();
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
      return nt.lastIndex = t, nt.test(this.input) ? nt.lastIndex : t;
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
      return ot.lastIndex = t, ot.test(this.input) ? ot.lastIndex : t;
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
        throw this.raise(p.UnterminatedComment, this.state.curPosition());
      for (this.state.pos = i + t.length, He.lastIndex = s + 2; He.test(this.input) && He.lastIndex <= i; )
        ++this.state.curLine, this.state.lineStart = He.lastIndex;
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
        for (; !Fe(i) && ++this.state.pos < this.length; )
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
            if (di(s))
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
        throw this.raise(p.UnexpectedDigitAfterHash, this.state.curPosition());
      if (e === 123 || e === 91 && this.hasPlugin("recordAndTuple")) {
        if (this.expectPlugin("recordAndTuple"), this.getPluginOption("recordAndTuple", "syntaxType") === "bar")
          throw this.raise(e === 123 ? p.RecordExpressionHashIncorrectStartSyntaxType : p.TupleExpressionHashIncorrectStartSyntaxType, this.state.curPosition());
        this.state.pos += 2, e === 123 ? this.finishToken(7) : this.finishToken(1);
      } else ce(e) ? (++this.state.pos, this.finishToken(139, this.readWord1(e))) : e === 92 ? (++this.state.pos, this.finishToken(139, this.readWord1())) : this.finishOp(27, 1);
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
      for (this.state.pos += 1; !Fe(t) && ++this.state.pos < this.length; )
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
            throw this.raise(p.RecordExpressionBarIncorrectEndSyntaxType, this.state.curPosition());
          this.state.pos += 2, this.finishToken(9);
          return;
        }
        if (this.hasPlugin("recordAndTuple") && e === 93) {
          if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar")
            throw this.raise(p.TupleExpressionBarIncorrectEndSyntaxType, this.state.curPosition());
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
              throw this.raise(p.TupleExpressionBarIncorrectStartSyntaxType, this.state.curPosition());
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
              throw this.raise(p.RecordExpressionBarIncorrectStartSyntaxType, this.state.curPosition());
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
          if (ce(t)) {
            this.readWord(t);
            return;
          }
      }
      throw this.raise(p.InvalidOrUnexpectedToken, this.state.curPosition(), {
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
          throw this.raise(p.UnterminatedRegExp, y(t, 1));
        const u = this.input.charCodeAt(r);
        if (Fe(u))
          throw this.raise(p.UnterminatedRegExp, y(t, 1));
        if (s)
          s = !1;
        else {
          if (u === 91)
            i = !0;
          else if (u === 93 && i)
            i = !1;
          else if (u === 47 && !i)
            break;
          s = u === 92;
        }
      }
      const n = this.input.slice(e, r);
      ++r;
      let o = "";
      const l = () => y(t, r + 2 - e);
      for (; r < this.length; ) {
        const u = this.codePointAtPos(r), f = String.fromCharCode(u);
        if (Si.has(u))
          u === 118 ? o.includes("u") && this.raise(p.IncompatibleRegExpUVFlags, l()) : u === 117 && o.includes("v") && this.raise(p.IncompatibleRegExpUVFlags, l()), o.includes(f) && this.raise(p.DuplicateRegExpFlags, l());
        else if (je(u) || u === 92)
          this.raise(p.MalformedRegExpFlags, l());
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
      } = Bt(this.input, this.state.pos, this.state.lineStart, this.state.curLine, t, e, s, i, this.errorHandlers_readInt, !1);
      return this.state.pos = n, r;
    }
    readRadixNumber(t) {
      const e = this.state.pos, s = this.state.curPosition();
      let i = !1;
      this.state.pos += 2;
      const r = this.readInt(t);
      r == null && this.raise(p.InvalidDigit, y(s, 2), {
        radix: t
      });
      const n = this.input.charCodeAt(this.state.pos);
      if (n === 110)
        ++this.state.pos, i = !0;
      else if (n === 109)
        throw this.raise(p.InvalidDecimal, s);
      if (ce(this.codePointAtPos(this.state.pos)))
        throw this.raise(p.NumberIdentifier, this.state.curPosition());
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
      !t && this.readInt(10) === null && this.raise(p.InvalidNumber, this.state.curPosition());
      const l = this.state.pos - e >= 2 && this.input.charCodeAt(e) === 48;
      if (l) {
        const A = this.input.slice(e, this.state.pos);
        if (this.recordStrictModeErrors(p.StrictOctalLiteral, s), !this.state.strict) {
          const N = A.indexOf("_");
          N > 0 && this.raise(p.ZeroDigitNumericSeparator, y(s, N));
        }
        o = l && !/[89]/.test(A);
      }
      let u = this.input.charCodeAt(this.state.pos);
      if (u === 46 && !o && (++this.state.pos, this.readInt(10), i = !0, u = this.input.charCodeAt(this.state.pos)), (u === 69 || u === 101) && !o && (u = this.input.charCodeAt(++this.state.pos), (u === 43 || u === 45) && ++this.state.pos, this.readInt(10) === null && this.raise(p.InvalidOrMissingExponent, s), i = !0, n = !0, u = this.input.charCodeAt(this.state.pos)), u === 110 && ((i || l) && this.raise(p.InvalidBigIntLiteral, s), ++this.state.pos, r = !0), u === 109) {
        this.expectPlugin("decimal", this.state.curPosition()), (n || l) && this.raise(p.InvalidDecimal, s), ++this.state.pos;
        var f = !0;
      }
      if (ce(this.codePointAtPos(this.state.pos)))
        throw this.raise(p.NumberIdentifier, this.state.curPosition());
      const g = this.input.slice(e, this.state.pos).replace(/[_mn]/g, "");
      if (r) {
        this.finishToken(136, g);
        return;
      }
      if (f) {
        this.finishToken(137, g);
        return;
      }
      const w = o ? parseInt(g, 8) : parseFloat(g);
      this.finishToken(135, w);
    }
    readCodePoint(t) {
      const {
        code: e,
        pos: s
      } = _t(this.input, this.state.pos, this.state.lineStart, this.state.curLine, t, this.errorHandlers_readCodePoint);
      return this.state.pos = s, e;
    }
    readString(t) {
      const {
        str: e,
        pos: s,
        curLine: i,
        lineStart: r
      } = Ft(t === 34 ? "double" : "single", this.input, this.state.pos + 1, this.state.lineStart, this.state.curLine, this.errorHandlers_readStringContents_string);
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
      } = Ft("template", this.input, this.state.pos + 1, this.state.lineStart, this.state.curLine, this.errorHandlers_readStringContents_template);
      this.state.pos = i + 1, this.state.lineStart = n, this.state.curLine = r, s && (this.state.firstInvalidTemplateEscapePos = new d(s.curLine, s.pos - s.lineStart, this.sourceToOffsetPos(s.pos))), this.input.codePointAt(i) === 96 ? this.finishToken(24, s ? null : t + e + "`") : (this.state.pos++, this.finishToken(25, s ? null : t + e + "${"));
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
        if (je(r))
          this.state.pos += r <= 65535 ? 1 : 2;
        else if (r === 92) {
          this.state.containsEsc = !0, e += this.input.slice(i, this.state.pos);
          const n = this.state.curPosition(), o = this.state.pos === s ? ce : je;
          if (this.input.charCodeAt(++this.state.pos) !== 117) {
            this.raise(p.MissingUnicodeEscape, this.state.curPosition()), i = this.state.pos - 1;
            continue;
          }
          ++this.state.pos;
          const l = this.readCodePoint(!0);
          l !== null && (o(l) || this.raise(p.EscapedCharNotAnIdentifier, n), e += String.fromCodePoint(l)), i = this.state.pos;
        } else
          break;
      }
      return e + this.input.slice(i, this.state.pos);
    }
    readWord(t) {
      const e = this.readWord1(t), s = Ne.get(e);
      s !== void 0 ? this.finishToken(s, Te(s)) : this.finishToken(132, e);
    }
    checkKeywordEscapes() {
      const {
        type: t
      } = this.state;
      et(t) && this.state.containsEsc && this.raise(p.InvalidEscapedReservedWord, this.state.startLoc, {
        reservedWord: Te(t)
      });
    }
    raise(t, e, s = {}) {
      const i = e instanceof d ? e : e.loc.start, r = t(i, s);
      if (!(this.optionFlags & 2048)) throw r;
      return this.isLookahead || this.state.errors.push(r), r;
    }
    raiseOverwrite(t, e, s = {}) {
      const i = e instanceof d ? e : e.loc.start, r = i.index, n = this.state.errors;
      for (let o = n.length - 1; o >= 0; o--) {
        const l = n[o];
        if (l.loc.index === r)
          return n[o] = t(i, s);
        if (l.loc.index < r) break;
      }
      return this.raise(t, e, s);
    }
    updateContext(t) {
    }
    unexpected(t, e) {
      throw this.raise(p.UnexpectedToken, t ?? this.state.startLoc, {
        expected: e ? Te(e) : null
      });
    }
    expectPlugin(t, e) {
      if (this.hasPlugin(t))
        return !0;
      throw this.raise(p.MissingPlugin, e ?? this.state.startLoc, {
        missingPlugin: [t]
      });
    }
    expectOnePlugin(t) {
      if (!t.some((e) => this.hasPlugin(e)))
        throw this.raise(p.MissingOneOfPlugins, this.state.startLoc, {
          missingPlugin: t
        });
    }
    errorBuilder(t) {
      return (e, s, i) => {
        this.raise(t, Ue(e, s, i));
      };
    }
  }
  class vi {
    constructor() {
      this.privateNames = /* @__PURE__ */ new Set(), this.loneAccessors = /* @__PURE__ */ new Map(), this.undefinedPrivateNames = /* @__PURE__ */ new Map();
    }
  }
  class Ii {
    constructor(t) {
      this.parser = void 0, this.stack = [], this.undefinedPrivateNames = /* @__PURE__ */ new Map(), this.parser = t;
    }
    current() {
      return this.stack[this.stack.length - 1];
    }
    enter() {
      this.stack.push(new vi());
    }
    exit() {
      const t = this.stack.pop(), e = this.current();
      for (const [s, i] of Array.from(t.undefinedPrivateNames))
        e ? e.undefinedPrivateNames.has(s) || e.undefinedPrivateNames.set(s, i) : this.parser.raise(p.InvalidPrivateFieldResolution, i, {
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
        const l = o && r.get(t);
        if (l) {
          const u = l & 4, f = e & 4, g = l & 3, w = e & 3;
          o = g === w || u !== f, o || r.delete(t);
        } else o || r.set(t, e);
      }
      o && this.parser.raise(p.PrivateNameRedeclaration, s, {
        identifierName: t
      }), i.add(t), n.delete(t);
    }
    usePrivateName(t, e) {
      let s;
      for (s of this.stack)
        if (s.privateNames.has(t)) return;
      s ? s.undefinedPrivateNames.set(t, e) : this.parser.raise(p.InvalidPrivateFieldResolution, e, {
        identifierName: t
      });
    }
  }
  class Je {
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
  class Rt extends Je {
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
  class Ni {
    constructor(t) {
      this.parser = void 0, this.stack = [new Je()], this.parser = t;
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
        i.type === 2 && i.recordDeclarationError(p.AwaitBindingIdentifier, t), i = e[--s];
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
  function ki() {
    return new Je(3);
  }
  function Ei() {
    return new Rt(1);
  }
  function ji() {
    return new Rt(2);
  }
  function Ut() {
    return new Je();
  }
  class Li extends Ci {
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
        return !(je(s) || (s & 64512) === 55296);
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
      return Dt(this.input, this.offsetToSourcePos(this.state.lastTokEndLoc.index), this.state.start);
    }
    hasFollowingLineBreak() {
      return Dt(this.input, this.state.end, this.nextTokenStart());
    }
    isLineTerminator() {
      return this.eat(13) || this.canInsertSemicolon();
    }
    semicolon(t = !0) {
      (t ? this.isLineTerminator() : this.eat(13)) || this.raise(p.MissingSemicolon, this.state.lastTokEndLoc);
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
      } = t, l = !!s || !!i || !!n || !!r || !!o;
      if (!e)
        return l;
      s != null && this.raise(p.InvalidCoverInitializedName, s), i != null && this.raise(p.DuplicateProto, i), r != null && this.raise(p.UnexpectedPrivateField, r), n != null && this.unexpected(n), o != null && this.raise(p.InvalidCoverDiscardElement, o);
    }
    isLiteralPropertyName() {
      return Ee(this.state.type);
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
      this.prodParam = new xi();
      const l = this.classScope;
      this.classScope = new Ii(this);
      const u = this.expressionScope;
      return this.expressionScope = new Ni(this), () => {
        this.state.labels = e, this.exportedIdentifiers = s, this.inModule = i, this.scope = r, this.prodParam = o, this.classScope = l, this.expressionScope = u;
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
  class Xe {
    constructor() {
      this.shorthandAssignLoc = null, this.doubleProtoLoc = null, this.privateKeyLoc = null, this.optionalParametersLoc = null, this.voidPatternLoc = null;
    }
  }
  class Ge {
    constructor(t, e, s) {
      this.type = "", this.start = e, this.end = 0, this.loc = new m(s), (t == null ? void 0 : t.optionFlags) & 128 && (this.range = [e, 0]), t != null && t.filename && (this.loc.filename = t.filename);
    }
  }
  const ht = Ge.prototype;
  ht.__clone = function() {
    const a = new Ge(void 0, this.start, this.loc.start), t = Object.keys(this);
    for (let e = 0, s = t.length; e < s; e++) {
      const i = t[e];
      i !== "leadingComments" && i !== "trailingComments" && i !== "innerComments" && (a[i] = this[i]);
    }
    return a;
  };
  class Di extends Li {
    startNode() {
      const t = this.state.startLoc;
      return new Ge(this, t.index, t);
    }
    startNodeAt(t) {
      return new Ge(this, t.index, t);
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
      } = t, l = Object.create(ht);
      return l.type = e, l.start = s, l.end = i, l.loc = r, l.range = n, l.name = o, t.extra && (l.extra = t.extra), l;
    }
    cloneStringLiteral(t) {
      const {
        type: e,
        start: s,
        end: i,
        loc: r,
        range: n,
        extra: o
      } = t, l = Object.create(ht);
      return l.type = e, l.start = s, l.end = i, l.loc = r, l.range = n, l.extra = o, l.value = t.value, l;
    }
  }
  const ut = (a) => a.type === "ParenthesizedExpression" ? ut(a.expression) : a;
  class Oi extends Di {
    toAssignable(t, e = !1) {
      var s, i;
      let r;
      switch ((t.type === "ParenthesizedExpression" || (s = t.extra) != null && s.parenthesized) && (r = ut(t), e ? r.type === "Identifier" ? this.expressionScope.recordArrowParameterBindingError(p.InvalidParenthesizedAssignment, t) : r.type !== "CallExpression" && r.type !== "MemberExpression" && !this.isOptionalMemberExpression(r) && this.raise(p.InvalidParenthesizedAssignment, t) : this.raise(p.InvalidParenthesizedAssignment, t)), t.type) {
        case "Identifier":
        case "ObjectPattern":
        case "ArrayPattern":
        case "AssignmentPattern":
        case "RestElement":
        case "VoidPattern":
          break;
        case "ObjectExpression":
          this.castNodeTo(t, "ObjectPattern");
          for (let o = 0, l = t.properties.length, u = l - 1; o < l; o++) {
            var n;
            const f = t.properties[o], g = o === u;
            this.toAssignableObjectExpressionProp(f, g, e), g && f.type === "RestElement" && (n = t.extra) != null && n.trailingCommaLoc && this.raise(p.RestTrailingComma, t.extra.trailingCommaLoc);
          }
          break;
        case "ObjectProperty": {
          const {
            key: o,
            value: l
          } = t;
          this.isPrivateName(o) && this.classScope.usePrivateName(this.getPrivateNameSV(o), o.loc.start), this.toAssignable(l, e);
          break;
        }
        case "SpreadElement":
          throw new Error("Internal @babel/parser error (this is a bug, please report it). SpreadElement should be converted by .toAssignable's caller.");
        case "ArrayExpression":
          this.castNodeTo(t, "ArrayPattern"), this.toAssignableList(t.elements, (i = t.extra) == null ? void 0 : i.trailingCommaLoc, e);
          break;
        case "AssignmentExpression":
          t.operator !== "=" && this.raise(p.MissingEqInAssignment, t.left.loc.end), this.castNodeTo(t, "AssignmentPattern"), delete t.operator, t.left.type === "VoidPattern" && this.raise(p.VoidPatternInitializer, t.left), this.toAssignable(t.left, e);
          break;
        case "ParenthesizedExpression":
          this.toAssignable(r, e);
          break;
      }
    }
    toAssignableObjectExpressionProp(t, e, s) {
      if (t.type === "ObjectMethod")
        this.raise(t.kind === "get" || t.kind === "set" ? p.PatternHasAccessor : p.PatternHasMethod, t.key);
      else if (t.type === "SpreadElement") {
        this.castNodeTo(t, "RestElement");
        const i = t.argument;
        this.checkToRestConversion(i, !1), this.toAssignable(i, s), e || this.raise(p.RestTrailingComma, t);
      } else
        this.toAssignable(t, s);
    }
    toAssignableList(t, e, s) {
      const i = t.length - 1;
      for (let r = 0; r <= i; r++) {
        const n = t[r];
        n && (this.toAssignableListItem(t, r, s), n.type === "RestElement" && (r < i ? this.raise(p.RestTrailingComma, n) : e && this.raise(p.RestTrailingComma, e)));
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
      return e.type === "VoidPattern" && this.raise(p.UnexpectedVoidPattern, e), t.argument = e, this.finishNode(t, "RestElement");
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
              for (this.match(26) && this.hasPlugin("decorators") && this.raise(p.UnsupportedParameterDecorator, this.state.startLoc); this.match(26); )
                o.push(this.parseDecorator());
            r.push(this.parseBindingElement(s, o));
          }
        }
      return r;
    }
    parseBindingRestProperty(t) {
      return this.next(), this.hasPlugin("discardBinding") && this.match(88) ? (t.argument = this.parseVoidPattern(null), this.raise(p.UnexpectedVoidPattern, t.argument)) : t.argument = this.parseIdentifier(), this.checkCommaAfterRest(125), this.finishNode(t, "RestElement");
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
      return e.type === "VoidPattern" && this.raise(p.VoidPatternInitializer, e), s.left = e, s.right = this.parseMaybeAssignAllowIn(), this.finishNode(s, "AssignmentPattern");
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
      var l;
      const u = t.type;
      if (this.isObjectMethod(t)) return;
      const f = this.isOptionalMemberExpression(t);
      if (f || u === "MemberExpression") {
        f && (this.expectPlugin("optionalChainingAssign", t.loc.start), e.type !== "AssignmentExpression" && this.raise(p.InvalidLhsOptionalChaining, t, {
          ancestor: e
        })), s !== 64 && this.raise(p.InvalidPropertyBindingPattern, t);
        return;
      }
      if (u === "Identifier") {
        this.checkIdentifier(t, s, r);
        const {
          name: F
        } = t;
        i && (i.has(F) ? this.raise(p.ParamDupe, t) : i.add(F));
        return;
      } else u === "VoidPattern" && e.type === "CatchClause" && this.raise(p.VoidPatternCatchClauseParam, t);
      const g = ut(t);
      o || (o = g.type === "CallExpression" && (g.callee.type === "Import" || g.callee.type === "Super"));
      const w = this.isValidLVal(u, o, !(n || (l = t.extra) != null && l.parenthesized) && e.type === "AssignmentExpression", s);
      if (w === !0) return;
      if (w === !1) {
        const F = s === 64 ? p.InvalidLhs : p.InvalidLhsBinding;
        this.raise(F, t, {
          ancestor: e
        });
        return;
      }
      let A, N;
      typeof w == "string" ? (A = w, N = u === "ParenthesizedExpression") : [A, N] = w;
      const R = u === "ArrayPattern" || u === "ObjectPattern" ? {
        type: u
      } : e, q = t[A];
      if (Array.isArray(q))
        for (const F of q)
          F && this.checkLVal(F, R, s, i, r, N, !0);
      else q && this.checkLVal(q, R, s, i, r, N, o);
    }
    checkIdentifier(t, e, s = !1) {
      this.state.strict && (s ? jt(t.name, this.inModule) : Et(t.name)) && (e === 64 ? this.raise(p.StrictEvalArguments, t, {
        referenceName: t.name
      }) : this.raise(p.StrictEvalArgumentsBinding, t, {
        bindingName: t.name
      })), e & 8192 && t.name === "let" && this.raise(p.LetInLexicalBinding, t), e & 64 || this.declareNameFromIdentifier(t, e);
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
          this.raise(p.InvalidRestAssignmentPattern, t);
      }
    }
    checkCommaAfterRest(t) {
      return this.match(12) ? (this.raise(this.lookaheadCharCode() === t ? p.RestTrailingComma : p.ElementAfterRest, this.state.startLoc), !0) : !1;
    }
  }
  const pt = /in(?:stanceof)?|as|satisfies/y;
  function Mi(a) {
    if (a == null)
      throw new Error(`Unexpected ${a} value.`);
    return a;
  }
  function zt(a) {
    if (!a)
      throw new Error("Assert fail");
  }
  const I = H`typescript`({
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
  function Fi(a) {
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
  function $t(a) {
    return a === "private" || a === "public" || a === "protected";
  }
  function Bi(a) {
    return a === "in" || a === "out";
  }
  var _i = (a) => class extends a {
    constructor(...e) {
      super(...e), this.tsParseInOutModifiers = this.tsParseModifiers.bind(this, {
        allowedModifiers: ["in", "out"],
        disallowedModifiers: ["const", "public", "private", "protected", "readonly", "declare", "abstract", "override"],
        errorTemplate: I.InvalidModifierOnTypeParameter
      }), this.tsParseConstModifier = this.tsParseModifiers.bind(this, {
        allowedModifiers: ["const"],
        disallowedModifiers: ["in", "out"],
        errorTemplate: I.InvalidModifierOnTypeParameterPositions
      }), this.tsParseInOutConstModifiers = this.tsParseModifiers.bind(this, {
        allowedModifiers: ["in", "out", "const"],
        disallowedModifiers: ["public", "private", "protected", "readonly", "declare", "abstract", "override"],
        errorTemplate: I.InvalidModifierOnTypeParameter
      });
    }
    getScopeHandler() {
      return yi;
    }
    tsIsIdentifier() {
      return M(this.state.type);
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
      if (!M(this.state.type) && this.state.type !== 58 && this.state.type !== 75)
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
      errorTemplate: r = I.InvalidModifierOnTypeMember
    }, n) {
      const o = (u, f, g, w) => {
        f === g && n[w] && this.raise(I.InvalidModifiersOrder, u, {
          orderedModifiers: [g, w]
        });
      }, l = (u, f, g, w) => {
        (n[g] && f === w || n[w] && f === g) && this.raise(I.IncompatibleModifiers, u, {
          modifiers: [g, w]
        });
      };
      for (; ; ) {
        const {
          startLoc: u
        } = this.state, f = this.tsParseModifier(e.concat(s ?? []), i, n.static);
        if (!f) break;
        $t(f) ? n.accessibility ? this.raise(I.DuplicateAccessibilityModifier, u, {
          modifier: f
        }) : (o(u, f, f, "override"), o(u, f, f, "static"), o(u, f, f, "readonly"), n.accessibility = f) : Bi(f) ? (n[f] && this.raise(I.DuplicateModifier, u, {
          modifier: f
        }), n[f] = !0, o(u, f, "in", "out")) : (hasOwnProperty.call(n, f) ? this.raise(I.DuplicateModifier, u, {
          modifier: f
        }) : (o(u, f, "static", "readonly"), o(u, f, "static", "override"), o(u, f, "override", "readonly"), o(u, f, "abstract", "override"), l(u, f, "declare", "override"), l(u, f, "static", "abstract")), n[f] = !0), s != null && s.includes(f) && this.raise(r, u, {
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
      return Mi(this.tsParseDelimitedListWorker(e, s, !0, i));
    }
    tsParseDelimitedListWorker(e, s, i, r) {
      const n = [];
      let o = -1;
      for (; !this.tsIsListTerminator(e); ) {
        o = -1;
        const l = s();
        if (l == null)
          return;
        if (n.push(l), this.eat(12)) {
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
      return this.expect(83), this.expect(10), this.match(134) ? e.argument = this.parseStringLiteral(this.state.value) : (this.raise(I.UnsupportedImportTypeArgument, this.state.startLoc), e.argument = super.parseExprAtom()), this.eat(12) ? e.options = this.tsParseImportTypeOptions() : e.options = null, this.expect(11), this.eat(16) && (e.qualifier = this.tsParseEntityName(3)), this.match(47) && (e.typeParameters = this.tsParseTypeArguments()), this.finishNode(e, "TSImportType");
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
        M(i) || i === 134 ? s.push(super.parsePropertyDefinition(null)) : this.unexpected(), this.eat(12);
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
      return s.params = this.tsParseBracketedList("TypeParametersOrArguments", this.tsParseTypeParameter.bind(this, e), !1, !0, i), s.params.length === 0 && this.raise(I.EmptyTypeParameters, s), i.value !== -1 && this.addExtra(s, "trailingComma", i.value), this.finishNode(s, "TSTypeParameterDeclaration");
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
        (i === "AssignmentPattern" || i === "TSParameterProperty") && this.raise(I.UnsupportedSignatureParameterKind, s, {
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
      return this.next(), M(this.state.type) ? (this.next(), this.match(14)) : !1;
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
        s && this.raise(I.ReadonlyForMethodSignature, e);
        const i = e;
        i.kind && this.match(47) && this.raise(I.AccessorCannotHaveTypeParameters, this.state.curPosition()), this.tsFillSignature(14, i), this.tsParseTypeMemberSemicolon();
        const r = "parameters", n = "typeAnnotation";
        if (i.kind === "get")
          i[r].length > 0 && (this.raise(p.BadGetterArity, this.state.curPosition()), this.isThisParam(i[r][0]) && this.raise(I.AccessorCannotDeclareThisParameter, this.state.curPosition()));
        else if (i.kind === "set") {
          if (i[r].length !== 1)
            this.raise(p.BadSetterArity, this.state.curPosition());
          else {
            const o = i[r][0];
            this.isThisParam(o) && this.raise(I.AccessorCannotDeclareThisParameter, this.state.curPosition()), o.type === "Identifier" && o.optional && this.raise(I.SetAccessorCannotHaveOptionalParameter, this.state.curPosition()), o.type === "RestElement" && this.raise(I.SetAccessorCannotHaveRestParameter, this.state.curPosition());
          }
          i[n] && this.raise(I.SetAccessorCannotHaveReturnType, i[n]);
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
        s && r !== "TSRestType" && r !== "TSOptionalType" && !(r === "TSNamedTupleMember" && i.optional) && this.raise(I.OptionalTypeBeforeRequired, i), s || (s = r === "TSNamedTupleMember" && i.optional || r === "TSOptionalType");
      }), this.finishNode(e, "TSTupleType");
    }
    tsParseTupleElementType() {
      const e = this.state.startLoc, s = this.eat(21), {
        startLoc: i
      } = this.state;
      let r, n, o, l;
      const f = z(this.state.type) ? this.lookaheadCharCode() : null;
      if (f === 58)
        r = !0, o = !1, n = this.parseIdentifier(!0), this.expect(14), l = this.tsParseType();
      else if (f === 63) {
        o = !0;
        const g = this.state.value, w = this.tsParseNonArrayType();
        this.lookaheadCharCode() === 58 ? (r = !0, n = this.createIdentifier(this.startNodeAt(i), g), this.expect(17), this.expect(14), l = this.tsParseType()) : (r = !1, l = w, this.expect(17));
      } else
        l = this.tsParseType(), o = this.eat(17), r = this.eat(14);
      if (r) {
        let g;
        n ? (g = this.startNodeAt(i), g.optional = o, g.label = n, g.elementType = l, this.eat(17) && (g.optional = !0, this.raise(I.TupleOptionalAfterType, this.state.lastTokStartLoc))) : (g = this.startNodeAt(i), g.optional = o, this.raise(I.InvalidTupleMemberLabel, l), g.label = l, g.elementType = this.tsParseType()), l = this.finishNode(g, "TSNamedTupleMember");
      } else if (o) {
        const g = this.startNodeAt(i);
        g.typeAnnotation = l, l = this.finishNode(g, "TSOptionalType");
      }
      if (s) {
        const g = this.startNodeAt(e);
        g.typeAnnotation = l, l = this.finishNode(g, "TSRestType");
      }
      return l;
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
          if (M(e) || e === 88 || e === 84) {
            const s = e === 88 ? "TSVoidKeyword" : e === 84 ? "TSNullKeyword" : Fi(this.state.value);
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
          this.raise(I.UnexpectedReadonly, e);
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
      return qs(this.state.type) && !this.state.containsEsc ? this.tsParseTypeOperator() : this.isContextual(115) ? this.tsParseInferType() : this.tsInAllowConditionalTypesContext(() => this.tsParseArrayTypeOrHigher());
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
      if (M(this.state.type) || this.match(78))
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
          let l = this.tsParseThisTypeOrThisTypePredicate();
          return l.type === "TSThisType" ? (i.parameterName = l, i.asserts = !0, i.typeAnnotation = null, l = this.finishNode(i, "TSTypePredicate")) : (this.resetStartLocationFromNode(l, i), l.asserts = !0), s.typeAnnotation = l, this.finishNode(s, "TSTypeAnnotation");
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
      return this.next(), !M(this.state.type) && !this.match(78) ? !1 : (e && this.raise(p.InvalidEscapedReservedWord, this.state.lastTokStartLoc, {
        reservedWord: "asserts"
      }), !0);
    }
    tsParseTypeAnnotation(e = !0, s = this.startNode()) {
      return this.tsInType(() => {
        e && this.expect(14), s.typeAnnotation = this.tsParseType();
      }), this.finishNode(s, "TSTypeAnnotation");
    }
    tsParseType() {
      zt(this.state.inType);
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
      this.getPluginOption("typescript", "disallowAmbiguousJSXLike") && this.raise(I.ReservedTypeAssertion, this.state.startLoc);
      const e = this.startNode();
      return e.typeAnnotation = this.tsInType(() => (this.next(), this.match(75) ? this.tsParseTypeReference() : this.tsParseType())), this.expect(48), e.expression = this.parseMaybeUnary(), this.finishNode(e, "TSTypeAssertion");
    }
    tsParseHeritageClause(e) {
      const s = this.state.startLoc, i = this.tsParseDelimitedList("HeritageClauseElement", () => {
        const r = this.startNode();
        return r.expression = this.tsParseEntityName(3), this.match(47) && (r.typeParameters = this.tsParseTypeArguments()), this.finishNode(r, "TSExpressionWithTypeArguments");
      });
      return i.length || this.raise(I.EmptyHeritageClauseType, s, {
        token: e
      }), i;
    }
    tsParseInterfaceDeclaration(e, s = {}) {
      if (this.hasFollowingLineBreak()) return null;
      this.expectContextual(129), s.declare && (e.declare = !0), M(this.state.type) ? (e.id = this.parseIdentifier(), this.checkIdentifier(e.id, 130)) : (e.id = null, this.raise(I.MissingInterfaceName, this.state.startLoc)), e.typeParameters = this.tsTryParseTypeParameters(this.tsParseInOutConstModifiers), this.eat(81) && (e.extends = this.tsParseHeritageClause("extends"));
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
      if (this.curContext() !== O.brace) {
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
      return e.importKind === "type" && r.type !== "TSExternalModuleReference" && this.raise(I.ImportAliasHasImportType, r), e.moduleReference = r, this.semicolon(), this.finishNode(e, "TSImportEqualsDeclaration");
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
              return this.raise(I.InvalidModifierOnUsingDeclaration, this.state.startLoc, "declare"), e.declare = !0, this.parseVarStatement(e, "using", !0);
            break;
          case 96:
            if (this.isAwaitUsing())
              return this.raise(I.InvalidModifierOnAwaitUsingDeclaration, this.state.startLoc, "declare"), e.declare = !0, this.next(), this.parseVarStatement(e, "await using", !0);
            break;
          case 129: {
            const i = this.tsParseInterfaceDeclaration(e, {
              declare: !0
            });
            if (i) return i;
          }
          default:
            if (M(s))
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
          if (this.tsCheckLineTerminator(i) && (this.match(80) || M(this.state.type)))
            return this.tsParseAbstractDeclaration(e, r);
          break;
        case 127:
          if (this.tsCheckLineTerminator(i)) {
            if (this.match(134))
              return this.tsParseAmbientExternalModuleDeclaration(e);
            if (M(this.state.type))
              return e.kind = "module", this.tsParseModuleOrNamespaceDeclaration(e);
          }
          break;
        case 128:
          if (this.tsCheckLineTerminator(i) && M(this.state.type))
            return e.kind = "namespace", this.tsParseModuleOrNamespaceDeclaration(e);
          break;
        case 130:
          if (this.tsCheckLineTerminator(i) && M(this.state.type))
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
      return e.params = this.tsInType(() => this.tsInTopLevelContext(() => (this.expect(47), this.tsParseDelimitedList("TypeParametersOrArguments", this.tsParseType.bind(this))))), e.params.length === 0 ? this.raise(I.EmptyTypeArguments, e) : !this.state.inType && this.curContext() === O.brace && this.reScan_lt_gt(), this.expect(48), this.finishNode(e, "TSTypeParameterInstantiation");
    }
    tsIsDeclarationStart() {
      return Hs(this.state.type);
    }
    isExportDefaultSpecifier() {
      return this.tsIsDeclarationStart() ? !1 : super.isExportDefaultSpecifier();
    }
    parseBindingElement(e, s) {
      const i = s.length ? s[0].loc.start : this.state.startLoc, r = {};
      this.tsParseModifiers({
        allowedModifiers: ["public", "private", "protected", "override", "readonly"]
      }, r);
      const n = r.accessibility, o = r.override, l = r.readonly;
      !(e & 4) && (n || l || o) && this.raise(I.UnexpectedParameterModifier, i);
      const u = this.parseMaybeDefault();
      e & 2 && this.parseFunctionParamType(u);
      const f = this.parseMaybeDefault(u.loc.start, u);
      if (n || l || o) {
        const g = this.startNodeAt(i);
        return s.length && (g.decorators = s), n && (g.accessibility = n), l && (g.readonly = l), o && (g.override = o), f.type !== "Identifier" && f.type !== "AssignmentPattern" && this.raise(I.UnsupportedParameterPropertyKind, g), g.parameter = f, this.finishNode(g, "TSParameterProperty");
      }
      return s.length && (u.decorators = s), f;
    }
    isSimpleParameter(e) {
      return e.type === "TSParameterProperty" && super.isSimpleParameter(e.parameter) || super.isSimpleParameter(e);
    }
    tsDisallowOptionalPattern(e) {
      for (const s of e.params)
        s.type !== "Identifier" && s.optional && !this.state.isAmbientContext && this.raise(I.PatternIsOptional, s);
    }
    setArrowFunctionParameters(e, s, i) {
      super.setArrowFunctionParameters(e, s, i), this.tsDisallowOptionalPattern(e);
    }
    parseFunctionBodyAndFinish(e, s, i = !1) {
      this.match(14) && (e.returnType = this.tsParseTypeOrTypePredicateAnnotation(14));
      const r = s === "FunctionDeclaration" ? "TSDeclareFunction" : s === "ClassMethod" || s === "ClassPrivateMethod" ? "TSDeclareMethod" : void 0;
      return r && !this.match(5) && this.isLineTerminator() ? this.finishNode(e, r) : r === "TSDeclareFunction" && this.state.isAmbientContext && (this.raise(I.DeclareFunctionHasImplementation, e), e.declare) ? super.parseFunctionBodyAndFinish(e, r, i) : (this.tsDisallowOptionalPattern(e), super.parseFunctionBodyAndFinish(e, s, i));
    }
    registerFunctionStatementId(e) {
      !e.body && e.id ? this.checkIdentifier(e.id, 1024) : super.registerFunctionStatementId(e);
    }
    tsCheckForInvalidTypeCasts(e) {
      e.forEach((s) => {
        (s == null ? void 0 : s.type) === "TSTypeCastExpression" && this.raise(I.UnexpectedTypeAnnotation, s.typeAnnotation);
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
        const l = this.tsTryParseAndCatch(() => {
          if (!i && this.atPossibleAsyncArrow(e)) {
            const w = this.tsTryParseGenericAsyncArrowFunction(s);
            if (w)
              return r.stop = !0, w;
          }
          const u = this.tsParseTypeArgumentsInExpression();
          if (!u) return;
          if (n && !this.match(10)) {
            o = this.state.curPosition();
            return;
          }
          if (qe(this.state.type)) {
            const w = super.parseTaggedTemplateExpression(e, s, r);
            return w.typeParameters = u, w;
          }
          if (!i && this.eat(10)) {
            const w = this.startNodeAt(s);
            return w.callee = e, w.arguments = this.parseCallExpressionArguments(), this.tsCheckForInvalidTypeCasts(w.arguments), w.typeParameters = u, r.optionalChainMember && (w.optional = n), this.finishCallExpression(w, r.optionalChainMember);
          }
          const f = this.state.type;
          if (f === 48 || f === 52 || f !== 10 && f !== 93 && f !== 120 && Pe(f) && !this.hasPrecedingLineBreak())
            return;
          const g = this.startNodeAt(s);
          return g.expression = e, g.typeParameters = u, this.finishNode(g, "TSInstantiationExpression");
        });
        if (o && this.unexpected(o, 10), l)
          return l.type === "TSInstantiationExpression" && ((this.match(16) || this.match(18) && this.lookaheadCharCode() !== 40) && this.raise(I.InvalidPropertyAccessAfterInstantiationExpression, this.state.startLoc), !this.match(16) && !this.match(18) && (l.expression = super.stopParseSubscript(e, r))), l;
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
      if (Ve(58) > i && !this.hasPrecedingLineBreak() && (this.isContextual(93) || (r = this.isContextual(120)))) {
        const n = this.startNodeAt(s);
        return n.expression = e, n.typeAnnotation = this.tsInType(() => (this.next(), this.match(75) ? (r && this.raise(p.UnexpectedKeyword, this.state.startLoc, {
          keyword: "const"
        }), this.tsParseTypeReference()) : this.tsParseType())), this.finishNode(n, r ? "TSSatisfiesExpression" : "TSAsExpression"), this.reScan_lt_gt(), this.parseExprOp(n, s, i);
      }
      return super.parseExprOp(e, s, i);
    }
    checkReservedWord(e, s, i, r) {
      this.state.isAmbientContext || super.checkReservedWord(e, s, i, r);
    }
    checkImportReflection(e) {
      super.checkImportReflection(e), e.module && e.importKind !== "value" && this.raise(I.ImportReflectionHasImportType, e.specifiers[0].loc.start);
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
      if (M(this.state.type) && this.lookaheadCharCode() === 61)
        return e.importKind = "value", this.tsParseImportEqualsDeclaration(e);
      if (this.isContextual(130)) {
        const i = this.parseMaybeImportPhase(e, !1);
        if (this.lookaheadCharCode() === 61)
          return this.tsParseImportEqualsDeclaration(e, i);
        s = super.parseImportSpecifiersAndAfter(e, i);
      } else
        s = super.parseImport(e);
      return s.importKind === "type" && s.specifiers.length > 1 && s.specifiers[0].type === "ImportDefaultSpecifier" && this.raise(I.TypeImportCannotSpecifyDefaultAndNamed, s), s;
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
        return this.raiseOverwrite(I.UsingDeclarationInAmbientContext, e, s), n;
      for (const {
        id: o,
        init: l
      } of n.declarations)
        l && (s === "var" || s === "let" || o.typeAnnotation ? this.raise(I.InitializerNotAllowedInAmbientContext, l) : Ui(l, this.hasPlugin("estree")) || this.raise(I.ConstInitializerMustBeStringOrNumericLiteralOrLiteralEnumReference, l));
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
      return s.some((i) => $t(i) ? e.accessibility === i : !!e[i]);
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
        errorTemplate: I.InvalidModifierOnTypeParameterPositions
      }, s);
      const n = () => {
        this.tsIsStartOfStaticBlocks() ? (this.next(), this.next(), this.tsHasSomeModifiers(s, r) && this.raise(I.StaticBlockCannotHaveModifier, this.state.curPosition()), super.parseClassStaticBlock(e, s)) : this.parseClassMemberWithIsStatic(e, s, i, !!s.static);
      };
      s.declare ? this.tsInAmbientContext(n) : n();
    }
    parseClassMemberWithIsStatic(e, s, i, r) {
      const n = this.tsTryParseIndexSignature(s);
      if (n) {
        e.body.push(n), s.abstract && this.raise(I.IndexSignatureHasAbstract, s), s.accessibility && this.raise(I.IndexSignatureHasAccessibility, s, {
          modifier: s.accessibility
        }), s.declare && this.raise(I.IndexSignatureHasDeclare, s), s.override && this.raise(I.IndexSignatureHasOverride, s);
        return;
      }
      !this.state.inAbstractClass && s.abstract && this.raise(I.NonAbstractClassHasAbstractMethod, s), s.override && (i.hadSuperClass || this.raise(I.OverrideNotInSubClass, s)), super.parseClassMemberWithIsStatic(e, s, i, r);
    }
    parsePostMemberNameModifiers(e) {
      this.eat(17) && (e.optional = !0), e.readonly && this.match(10) && this.raise(I.ClassMethodHasReadonly, e), e.declare && this.match(10) && this.raise(I.ClassMethodHasDeclare, e);
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
        throw this.raise(I.ExpectedAmbientAfterExportDeclare, this.state.startLoc);
      const n = M(this.state.type) && this.tsTryParseExportDeclaration() || super.parseExportDeclaration(e);
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
      if (this.parseClassPropertyAnnotation(e), this.state.isAmbientContext && !(e.readonly && !e.typeAnnotation) && this.match(29) && this.raise(I.DeclareClassFieldHasInitializer, this.state.startLoc), e.abstract && this.match(29)) {
        const {
          key: s
        } = e;
        this.raise(I.AbstractPropertyHasInitializer, this.state.startLoc, {
          propertyName: s.type === "Identifier" && !e.computed ? s.name : `[${this.input.slice(this.offsetToSourcePos(s.start), this.offsetToSourcePos(s.end))}]`
        });
      }
      return super.parseClassProperty(e);
    }
    parseClassPrivateProperty(e) {
      return e.abstract && this.raise(I.PrivateElementHasAbstract, e), e.accessibility && this.raise(I.PrivateElementHasAccessibility, e, {
        modifier: e.accessibility
      }), this.parseClassPropertyAnnotation(e), super.parseClassPrivateProperty(e);
    }
    parseClassAccessorProperty(e) {
      return this.parseClassPropertyAnnotation(e), e.optional && this.raise(I.AccessorCannotBeOptional, e), super.parseClassAccessorProperty(e);
    }
    pushClassMethod(e, s, i, r, n, o) {
      const l = this.tsTryParseTypeParameters(this.tsParseConstModifier);
      l && n && this.raise(I.ConstructorHasTypeParameters, l);
      const {
        declare: u = !1,
        kind: f
      } = s;
      u && (f === "get" || f === "set") && this.raise(I.DeclareAccessor, s, {
        kind: f
      }), l && (s.typeParameters = l), super.pushClassMethod(e, s, i, r, n, o);
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
    parseObjPropValue(e, s, i, r, n, o, l) {
      const u = this.tsTryParseTypeParameters(this.tsParseConstModifier);
      return u && (e.typeParameters = u), super.parseObjPropValue(e, s, i, r, n, o, l);
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
      var i, r, n, o, l;
      let u, f, g;
      if (this.hasPlugin("jsx") && (this.match(143) || this.match(47))) {
        if (u = this.state.clone(), f = this.tryParse(() => super.parseMaybeAssign(e, s), u), !f.error) return f.node;
        const {
          context: N
        } = this.state, R = N[N.length - 1];
        (R === O.j_oTag || R === O.j_expr) && N.pop();
      }
      if (!((i = f) != null && i.error) && !this.match(47))
        return super.parseMaybeAssign(e, s);
      (!u || u === this.state) && (u = this.state.clone());
      let w;
      const A = this.tryParse((N) => {
        var R, q;
        w = this.tsParseTypeParameters(this.tsParseConstModifier);
        const F = super.parseMaybeAssign(e, s);
        return (F.type !== "ArrowFunctionExpression" || (R = F.extra) != null && R.parenthesized) && N(), ((q = w) == null ? void 0 : q.params.length) !== 0 && this.resetStartLocationFromNode(F, w), F.typeParameters = w, F;
      }, u);
      if (!A.error && !A.aborted)
        return w && this.reportReservedArrowTypeParam(w), A.node;
      if (!f && (zt(!this.hasPlugin("jsx")), g = this.tryParse(() => super.parseMaybeAssign(e, s), u), !g.error))
        return g.node;
      if ((r = f) != null && r.node)
        return this.state = f.failState, f.node;
      if (A.node)
        return this.state = A.failState, w && this.reportReservedArrowTypeParam(w), A.node;
      if ((n = g) != null && n.node)
        return this.state = g.failState, g.node;
      throw ((o = f) == null ? void 0 : o.error) || A.error || ((l = g) == null ? void 0 : l.error);
    }
    reportReservedArrowTypeParam(e) {
      var s;
      e.params.length === 1 && !e.params[0].constraint && !((s = e.extra) != null && s.trailingComma) && this.getPluginOption("typescript", "disallowAmbiguousJSXLike") && this.raise(I.ReservedArrowTypeParam, e);
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
          s ? this.expressionScope.recordArrowParameterBindingError(I.UnexpectedTypeCastInParameter, e) : this.raise(I.UnexpectedTypeCastInParameter, e), this.toAssignable(e.expression, s);
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
      return i.type === "AssignmentPattern" && i.typeAnnotation && i.right.start < i.typeAnnotation.start && this.raise(I.TypeAnnotationAfterAssign, i.typeAnnotation), i;
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
        return this.hasFollowingLineBreak() ? null : (e.abstract = !0, this.raise(I.NonClassMethodPropertyHasAbstractModifier, e), this.tsParseInterfaceDeclaration(e));
      throw this.unexpected(null, 80);
    }
    parseMethod(e, s, i, r, n, o, l) {
      const u = super.parseMethod(e, s, i, r, n, o, l);
      if ((u.abstract || u.type === "TSAbstractMethodDefinition") && (this.hasPlugin("estree") ? u.value : u).body) {
        const {
          key: w
        } = u;
        this.raise(I.AbstractMethodHasImplementation, u, {
          methodName: w.type === "Identifier" && !u.computed ? w.name : `[${this.input.slice(this.offsetToSourcePos(w.start), this.offsetToSourcePos(w.end))}]`
        });
      }
      return u;
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
      let o = e[r], l, u = !1, f = !0;
      const g = o.loc.start;
      if (this.isContextual(93)) {
        const A = this.parseIdentifier();
        if (this.isContextual(93)) {
          const N = this.parseIdentifier();
          z(this.state.type) ? (u = !0, o = A, l = s ? this.parseIdentifier() : this.parseModuleExportName(), f = !1) : (l = N, f = !1);
        } else z(this.state.type) ? (f = !1, l = s ? this.parseIdentifier() : this.parseModuleExportName()) : (u = !0, o = A);
      } else z(this.state.type) && (u = !0, s ? (o = this.parseIdentifier(!0), this.isContextual(93) || this.checkReservedWord(o.name, o.loc.start, !0, !0)) : o = this.parseModuleExportName());
      u && i && this.raise(s ? I.TypeModifierIsUsedInTypeImports : I.TypeModifierIsUsedInTypeExports, g), e[r] = o, e[n] = l;
      const w = s ? "importKind" : "exportKind";
      e[w] = u ? "type" : "value", f && this.eatContextual(93) && (e[n] = s ? this.parseIdentifier() : this.parseModuleExportName()), e[n] || (e[n] = this.cloneIdentifier(e[r])), s && this.checkIdentifier(e[n], u ? 4098 : 4096);
    }
    fillOptionalPropertiesForTSESLint(e) {
      var s, i, r, n, o, l, u, f, g, w, A, N, R, q, F, V, De, Se, Yt, Zt, Qt, es, ts, ss, is, rs, as, ns, os, ls, cs, hs, us, ps, ds, fs, ms, ys, xs, gs, bs, Ps, Ts, ws, As, Ss, Cs, vs;
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
          (o = e.accessibility) != null || (e.accessibility = void 0), (l = e.decorators) != null || (e.decorators = []), (u = e.override) != null || (e.override = !1), (f = e.readonly) != null || (e.readonly = !1), (g = e.static) != null || (e.static = !1);
          return;
        case "TSEmptyBodyFunctionExpression":
          e.body = null;
        case "TSDeclareFunction":
        case "FunctionDeclaration":
        case "FunctionExpression":
        case "ClassMethod":
        case "ClassPrivateMethod":
          (w = e.declare) != null || (e.declare = !1), (A = e.returnType) != null || (e.returnType = void 0), (N = e.typeParameters) != null || (e.typeParameters = void 0);
          return;
        case "Property":
          (R = e.optional) != null || (e.optional = !1);
          return;
        case "TSMethodSignature":
        case "TSPropertySignature":
          (q = e.optional) != null || (e.optional = !1);
        case "TSIndexSignature":
          (F = e.accessibility) != null || (e.accessibility = void 0), (V = e.readonly) != null || (e.readonly = !1), (De = e.static) != null || (e.static = !1);
          return;
        case "TSAbstractPropertyDefinition":
        case "PropertyDefinition":
        case "TSAbstractAccessorProperty":
        case "AccessorProperty":
          (Se = e.declare) != null || (e.declare = !1), (Yt = e.definite) != null || (e.definite = !1), (Zt = e.readonly) != null || (e.readonly = !1), (Qt = e.typeAnnotation) != null || (e.typeAnnotation = void 0);
        case "TSAbstractMethodDefinition":
        case "MethodDefinition":
          (es = e.accessibility) != null || (e.accessibility = void 0), (ts = e.decorators) != null || (e.decorators = []), (ss = e.override) != null || (e.override = !1), (is = e.optional) != null || (e.optional = !1);
          return;
        case "ClassExpression":
          (rs = e.id) != null || (e.id = null);
        case "ClassDeclaration":
          (as = e.abstract) != null || (e.abstract = !1), (ns = e.declare) != null || (e.declare = !1), (os = e.decorators) != null || (e.decorators = []), (ls = e.implements) != null || (e.implements = []), (cs = e.superTypeArguments) != null || (e.superTypeArguments = void 0), (hs = e.typeParameters) != null || (e.typeParameters = void 0);
          return;
        case "TSTypeAliasDeclaration":
        case "VariableDeclaration":
          (us = e.declare) != null || (e.declare = !1);
          return;
        case "VariableDeclarator":
          (ps = e.definite) != null || (e.definite = !1);
          return;
        case "TSEnumDeclaration":
          (ds = e.const) != null || (e.const = !1), (fs = e.declare) != null || (e.declare = !1);
          return;
        case "TSEnumMember":
          (ms = e.computed) != null || (e.computed = !1);
          return;
        case "TSImportType":
          (ys = e.qualifier) != null || (e.qualifier = null), (xs = e.options) != null || (e.options = null);
          return;
        case "TSInterfaceDeclaration":
          (gs = e.declare) != null || (e.declare = !1), (bs = e.extends) != null || (e.extends = []);
          return;
        case "TSMappedType":
          (Ps = e.optional) != null || (e.optional = !1), (Ts = e.readonly) != null || (e.readonly = void 0);
          return;
        case "TSModuleDeclaration":
          (ws = e.declare) != null || (e.declare = !1), (As = e.global) != null || (e.global = e.kind === "global");
          return;
        case "TSTypeParameter":
          (Ss = e.const) != null || (e.const = !1), (Cs = e.in) != null || (e.in = !1), (vs = e.out) != null || (e.out = !1);
          return;
      }
    }
    chStartsBindingIdentifierAndNotRelationalOperator(e, s) {
      if (ce(e)) {
        if (pt.lastIndex = s, pt.test(this.input)) {
          const i = this.codePointAtPos(pt.lastIndex);
          if (!je(i) && i !== 92)
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
  function Ri(a) {
    if (a.type !== "MemberExpression") return !1;
    const {
      computed: t,
      property: e
    } = a;
    return t && e.type !== "StringLiteral" && (e.type !== "TemplateLiteral" || e.expressions.length > 0) ? !1 : qt(a.object);
  }
  function Ui(a, t) {
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
    return !!(Vt(a, t) || zi(a, t) || s === "TemplateLiteral" && a.expressions.length === 0 || Ri(a));
  }
  function Vt(a, t) {
    return t ? a.type === "Literal" && (typeof a.value == "number" || "bigint" in a) : a.type === "NumericLiteral" || a.type === "BigIntLiteral";
  }
  function zi(a, t) {
    if (a.type === "UnaryExpression") {
      const {
        operator: e,
        argument: s
      } = a;
      if (e === "-" && Vt(s, t))
        return !0;
    }
    return !1;
  }
  function qt(a) {
    return a.type === "Identifier" ? !0 : a.type !== "MemberExpression" || a.computed ? !1 : qt(a.object);
  }
  const Ht = H`placeholders`({
    ClassNameIsRequired: "A class name is required.",
    UnexpectedSpace: "Unexpected space in placeholder."
  });
  var $i = (a) => class extends a {
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
          throw this.raise(Ht.ClassNameIsRequired, this.state.startLoc);
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
      this.state.start > this.offsetToSourcePos(this.state.lastTokEndLoc.index) && this.raise(Ht.UnexpectedSpace, this.state.lastTokEndLoc);
    }
  }, Vi = (a) => class extends a {
    parseV8Intrinsic() {
      if (this.match(54)) {
        const e = this.state.startLoc, s = this.startNode();
        if (this.next(), M(this.state.type)) {
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
  const Wt = ["minimal", "fsharp", "hack", "smart"], Kt = ["^^", "@@", "^", "%", "#"];
  function qi(a) {
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
      if (!Wt.includes(s)) {
        const i = Wt.map((r) => `"${r}"`).join(", ");
        throw new Error(`"pipelineOperator" requires "proposal" option whose value must be one of: ${i}.`);
      }
      if (s === "hack") {
        var e;
        if (a.has("placeholders"))
          throw new Error("Cannot combine placeholders plugin and Hack-style pipes.");
        if (a.has("v8intrinsic"))
          throw new Error("Cannot combine v8intrinsic plugin and Hack-style pipes.");
        const i = a.get("pipelineOperator").topicToken;
        if (!Kt.includes(i)) {
          const r = Kt.map((n) => `"${n}"`).join(", ");
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
  const Jt = {
    estree: he,
    jsx: fi,
    flow: hi,
    typescript: _i,
    v8intrinsic: Vi,
    placeholders: $i
  }, Hi = Object.keys(Jt);
  class Wi extends Oi {
    checkProto(t, e, s, i) {
      if (t.type === "SpreadElement" || this.isObjectMethod(t) || t.computed || t.shorthand)
        return s;
      const r = t.key;
      return (r.type === "Identifier" ? r.name : r.value) === "__proto__" ? e ? (this.raise(p.RecordNoProto, r), !0) : (s && (i ? i.doubleProtoLoc === null && (i.doubleProtoLoc = r.loc.start) : this.raise(p.DuplicateProto, r)), !0) : s;
    }
    shouldExitDescending(t, e) {
      return t.type === "ArrowFunctionExpression" && this.offsetToSourcePos(t.start) === e;
    }
    getExpression() {
      if (this.enterInitialScopes(), this.nextToken(), this.match(140))
        throw this.raise(p.ParseExpressionEmptyInput, this.state.startLoc);
      const t = this.parseExpression();
      if (!this.match(140))
        throw this.raise(p.ParseExpressionExpectsEOF, this.state.startLoc, {
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
        let l = this.parseYield(s);
        return e && (l = e.call(this, l, s)), l;
      }
      let r;
      t ? r = !1 : (t = new Xe(), r = !0);
      const {
        type: n
      } = this.state;
      (n === 10 || M(n)) && (this.state.potentialArrowAt = this.state.start);
      let o = this.parseMaybeConditional(t);
      if (e && (o = e.call(this, o, s)), Rs(this.state.type)) {
        const l = this.startNodeAt(s), u = this.state.value;
        if (l.operator = u, this.match(29)) {
          this.toAssignable(o, !0), l.left = o;
          const f = s.index;
          t.doubleProtoLoc != null && t.doubleProtoLoc.index >= f && (t.doubleProtoLoc = null), t.shorthandAssignLoc != null && t.shorthandAssignLoc.index >= f && (t.shorthandAssignLoc = null), t.privateKeyLoc != null && t.privateKeyLoc.index >= f && (this.checkDestructuringPrivate(t), t.privateKeyLoc = null), t.voidPatternLoc != null && t.voidPatternLoc.index >= f && (t.voidPatternLoc = null);
        } else
          l.left = o;
        return this.next(), l.right = this.parseMaybeAssign(), this.checkLVal(o, this.finishNode(l, "AssignmentExpression"), void 0, void 0, void 0, void 0, u === "||=" || u === "&&=" || u === "??="), l;
      } else r && this.checkExpressionErrors(t, !0);
      if (i) {
        const {
          type: l
        } = this.state;
        if ((this.hasPlugin("v8intrinsic") ? Pe(l) : Pe(l) && !this.match(54)) && !this.isAmbiguousPrefixOrIdentifier())
          return this.raiseOverwrite(p.YieldNotInGeneratorFunction, s), this.parseYield(s);
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
        (s >= Ve(58) || !this.prodParam.hasIn || !this.match(58)) && this.raise(p.PrivateInExpectedIn, t, {
          identifierName: r
        }), this.classScope.usePrivateName(r, t.loc.start);
      }
      const i = this.state.type;
      if (zs(i) && (this.prodParam.hasIn || !this.match(58))) {
        let r = Ve(i);
        if (r > s) {
          if (i === 39) {
            if (this.expectPlugin("pipelineOperator"), this.state.inFSharpPipelineDirectBody)
              return t;
            this.checkPipelineAtInfixOperator(t, e);
          }
          const n = this.startNodeAt(e);
          n.left = t, n.operator = this.state.value;
          const o = i === 41 || i === 42, l = i === 40;
          if (l && (r = Ve(42)), this.next(), i === 39 && this.hasPlugin(["pipelineOperator", {
            proposal: "minimal"
          }]) && this.state.type === 96 && this.prodParam.hasAwait)
            throw this.raise(p.UnexpectedAwaitAfterPipelineBody, this.state.startLoc);
          n.right = this.parseExprOpRightExpr(i, r);
          const u = this.finishNode(n, o || l ? "LogicalExpression" : "BinaryExpression"), f = this.state.type;
          if (l && (f === 41 || f === 42) || o && f === 40)
            throw this.raise(p.MixingCoalesceWithLogical, this.state.startLoc);
          return this.parseExprOp(u, e, s);
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
                throw this.raise(p.PipeBodyIsTighter, this.state.startLoc);
              return this.parseSmartPipelineBodyInStyle(this.parseExprOpBaseRightExpr(t, e), s);
            });
        default:
          return this.parseExprOpBaseRightExpr(t, e);
      }
    }
    parseExprOpBaseRightExpr(t, e) {
      const s = this.state.startLoc;
      return this.parseExprOp(this.parseMaybeUnaryOrPrivate(), s, Ws(t) ? e - 1 : e);
    }
    parseHackPipeBody() {
      var t;
      const {
        startLoc: e
      } = this.state, s = this.parseMaybeAssign();
      return L.has(s.type) && !((t = s.extra) != null && t.parenthesized) && this.raise(p.PipeUnparenthesizedBody, e, {
        type: s.type
      }), this.topicReferenceWasUsedInCurrentContext() || this.raise(p.PipeTopicUnused, e), s;
    }
    checkExponentialAfterUnary(t) {
      this.match(57) && this.raise(p.UnexpectedTokenUnaryExponentiation, t.argument);
    }
    parseMaybeUnary(t, e) {
      const s = this.state.startLoc, i = this.isContextual(96);
      if (i && this.recordAwaitIfAllowed()) {
        this.next();
        const l = this.parseAwait(s);
        return e || this.checkExponentialAfterUnary(l), l;
      }
      const r = this.match(34), n = this.startNode();
      if (Vs(this.state.type)) {
        n.operator = this.state.value, n.prefix = !0, this.match(72) && this.expectPlugin("throwExpressions");
        const l = this.match(89);
        if (this.next(), n.argument = this.parseMaybeUnary(null, !0), this.checkExpressionErrors(t, !0), this.state.strict && l) {
          const u = n.argument;
          u.type === "Identifier" ? this.raise(p.StrictDelete, n) : this.hasPropertyAsPrivateName(u) && this.raise(p.DeletePrivateField, n);
        }
        if (!r)
          return e || this.checkExponentialAfterUnary(n), this.finishNode(n, "UnaryExpression");
      }
      const o = this.parseUpdate(n, r, t);
      if (i) {
        const {
          type: l
        } = this.state;
        if ((this.hasPlugin("v8intrinsic") ? Pe(l) : Pe(l) && !this.match(54)) && !this.isAmbiguousPrefixOrIdentifier())
          return this.raiseOverwrite(p.AwaitNotInAsyncContext, s), this.parseAwait(s);
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
      for (; $s(this.state.type) && !this.canInsertSemicolon(); ) {
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
      if (qe(r))
        return this.parseTaggedTemplateExpression(t, e, i);
      let n = !1;
      if (r === 18) {
        if (s && (this.raise(p.OptionalChainingNoNew, this.state.startLoc), this.lookaheadCharCode() === 40))
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
      return n.object = t, n.computed = i, i ? (n.property = this.parseExpression(), this.expect(3)) : this.match(139) ? (t.type === "Super" && this.raise(p.SuperPrivateField, e), this.classScope.usePrivateName(this.state.value, this.state.startLoc), n.property = this.parsePrivateName()) : n.property = this.parseIdentifier(!0), s.optionalChainMember ? (n.optional = r, this.finishNode(n, "OptionalMemberExpression")) : this.finishNode(n, "MemberExpression");
    }
    parseBind(t, e, s) {
      const i = this.startNodeAt(e);
      i.object = t, this.next();
      const r = this.match(83), n = this.parseNoCallExpr();
      if (n.type === "Super" || r && n.type === "ImportExpression" || n.type === "Import")
        throw this.raise(p.UnsupportedBindRHS, n);
      return i.callee = n, s.stop = !0, this.parseSubscripts(this.finishNode(i, "BindExpression"), e, !1);
    }
    parseCoverCallAndAsyncArrowHead(t, e, s, i) {
      const r = this.state.maybeInArrowParameters;
      let n = null;
      this.state.maybeInArrowParameters = !0, this.next();
      const o = this.startNodeAt(e);
      o.callee = t;
      const {
        maybeAsyncArrow: l,
        optionalChainMember: u
      } = s;
      l && (this.expressionScope.enter(ji()), n = new Xe()), u && (o.optional = i), i ? o.arguments = this.parseCallExpressionArguments() : o.arguments = this.parseCallExpressionArguments(t.type !== "Super", o, n);
      let f = this.finishCallExpression(o, u);
      return l && this.shouldParseAsyncArrow() && !i ? (s.stop = !0, this.checkDestructuringPrivate(n), this.expressionScope.validateAsPattern(), this.expressionScope.exit(), f = this.parseAsyncArrowFromCallExpression(this.startNodeAt(e), f)) : (l && (this.checkExpressionErrors(n, !0), this.expressionScope.exit()), this.toReferencedArguments(f)), this.state.maybeInArrowParameters = r, f;
    }
    toReferencedArguments(t, e) {
      this.toReferencedListDeep(t.arguments, e);
    }
    parseTaggedTemplateExpression(t, e, s) {
      const i = this.startNodeAt(e);
      return i.tag = t, i.quasi = this.parseTemplate(!0), s.optionalChainMember && this.raise(p.OptionalChainingNoTemplate, e), this.finishNode(i, "TaggedTemplateExpression");
    }
    atPossibleAsyncArrow(t) {
      return t.type === "Identifier" && t.name === "async" && this.state.lastTokEndLoc.index === t.end && !this.canInsertSemicolon() && t.end - t.start === 5 && this.offsetToSourcePos(t.start) === this.state.potentialArrowAt;
    }
    finishCallExpression(t, e) {
      if (t.callee.type === "Import")
        if (t.arguments.length === 0 || t.arguments.length > 2)
          this.raise(p.ImportCallArity, t);
        else
          for (const s of t.arguments)
            s.type === "SpreadElement" && this.raise(p.ImportCallSpreadArgument, s);
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
      return this.resetPreviousNodeTrailingComments(e), this.expect(19), this.parseArrowExpression(t, e.arguments, !0, (s = e.extra) == null ? void 0 : s.trailingCommaLoc), e.innerComments && Re(t, e.innerComments), e.callee.trailingComments && Re(t, e.callee.trailingComments), t;
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
          return e = this.startNode(), this.next(), this.match(16) ? this.parseImportMetaPropertyOrPhaseCall(e) : this.match(10) ? this.optionFlags & 512 ? this.parseImportCall(e) : this.finishNode(e, "Import") : (this.raise(p.UnsupportedImport, this.state.lastTokStartLoc), this.finishNode(e, "Import"));
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
          throw this.raise(p.UnsupportedBind, r);
        }
        case 139:
          return this.raise(p.PrivateInExpectedIn, this.state.startLoc, {
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
          throw ce(r) || r === 62 ? this.expectOnePlugin(["jsx", "flow", "typescript"]) : this.unexpected();
        }
        default:
          if (i === 137)
            return this.parseDecimalLiteral(this.state.value);
          if (i === 2 || i === 1)
            return this.parseArrayLike(this.state.type === 2 ? 4 : 3, !0);
          if (i === 6 || i === 7)
            return this.parseObjectLike(this.state.type === 6 ? 9 : 8, !1, !0);
          if (M(i)) {
            if (this.isContextual(127) && this.lookaheadInLineCharCode() === 123)
              return this.parseModuleExpression();
            const r = this.state.potentialArrowAt === this.state.start, n = this.state.containsEsc, o = this.parseIdentifier();
            if (!n && o.name === "async" && !this.canInsertSemicolon()) {
              const {
                type: l
              } = this.state;
              if (l === 68)
                return this.resetPreviousNodeTrailingComments(o), this.next(), this.parseAsyncFunctionExpression(this.startNodeAtNode(o));
              if (M(l))
                return r && this.lookaheadCharCode() === 61 ? this.parseAsyncArrowUnaryFunction(this.startNodeAtNode(o)) : o;
              if (l === 90)
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
        return this.state.type = t, this.state.value = e, this.state.pos--, this.state.end--, this.state.endLoc = y(this.state.endLoc, -1), this.parseTopicReference(s);
      throw this.unexpected();
    }
    parseTopicReference(t) {
      const e = this.startNode(), s = this.state.startLoc, i = this.state.type;
      return this.next(), this.finishTopicReference(e, s, t, i);
    }
    finishTopicReference(t, e, s, i) {
      if (this.testTopicReferenceConfiguration(s, e, i))
        return s === "hack" ? (this.topicReferenceIsAllowedInCurrentContext() || this.raise(p.PipeTopicUnbound, e), this.registerTopicReference(), this.finishNode(t, "TopicReference")) : (this.topicReferenceIsAllowedInCurrentContext() || this.raise(p.PrimaryTopicNotAllowed, e), this.registerTopicReference(), this.finishNode(t, "PipelinePrimaryTopicReference"));
      throw this.raise(p.PipeTopicUnconfiguredToken, e, {
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
          throw this.raise(p.PipeTopicRequiresHackPipes, e);
      }
    }
    parseAsyncArrowUnaryFunction(t) {
      this.prodParam.enter(We(!0, this.prodParam.hasYield));
      const e = [this.parseIdentifier()];
      return this.prodParam.exit(), this.hasPrecedingLineBreak() && this.raise(p.LineTerminatorBeforeArrow, this.state.curPosition()), this.expect(19), this.parseArrowExpression(t, e, !0);
    }
    parseDo(t, e) {
      this.expectPlugin("doExpressions"), e && this.expectPlugin("asyncDoExpressions"), t.async = e, this.next();
      const s = this.state.labels;
      return this.state.labels = [], e ? (this.prodParam.enter(2), t.body = this.parseBlock(), this.prodParam.exit()) : t.body = this.parseBlock(), this.state.labels = s, this.finishNode(t, "DoExpression");
    }
    parseSuper() {
      const t = this.startNode();
      return this.next(), this.match(10) && !this.scope.allowDirectSuper ? this.optionFlags & 16 || this.raise(p.SuperNotAllowed, t) : this.scope.allowSuper || this.optionFlags & 16 || this.raise(p.UnexpectedSuper, t), !this.match(10) && !this.match(0) && !this.match(16) && this.raise(p.UnsupportedSuper, t), this.finishNode(t, "Super");
    }
    parsePrivateName() {
      const t = this.startNode(), e = this.startNodeAt(y(this.state.startLoc, 1)), s = this.state.value;
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
      return t.property = this.parseIdentifier(!0), (t.property.name !== s || i) && this.raise(p.UnsupportedMetaProperty, t.property, {
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
        return this.isContextual(101) && (this.inModule || this.raise(p.ImportMetaOutsideModule, e), this.sawUnambiguousESM = !0), this.parseMetaProperty(t, e, "meta");
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
      this.next(), this.expressionScope.enter(Ei());
      const i = this.state.maybeInArrowParameters, r = this.state.inFSharpPipelineDirectBody;
      this.state.maybeInArrowParameters = !0, this.state.inFSharpPipelineDirectBody = !1;
      const n = this.state.startLoc, o = [], l = new Xe();
      let u = !0, f, g;
      for (; !this.match(11); ) {
        if (u)
          u = !1;
        else if (this.expect(12, l.optionalParametersLoc === null ? null : l.optionalParametersLoc), this.match(11)) {
          g = this.state.startLoc;
          break;
        }
        if (this.match(21)) {
          const N = this.state.startLoc;
          if (f = this.state.startLoc, o.push(this.parseParenItem(this.parseRestBinding(), N)), !this.checkCommaAfterRest(41))
            break;
        } else
          o.push(this.parseMaybeAssignAllowInOrVoidPattern(11, l, this.parseParenItem));
      }
      const w = this.state.lastTokEndLoc;
      this.expect(11), this.state.maybeInArrowParameters = i, this.state.inFSharpPipelineDirectBody = r;
      let A = this.startNodeAt(e);
      return t && this.shouldParseArrow(o) && (A = this.parseArrow(A)) ? (this.checkDestructuringPrivate(l), this.expressionScope.validateAsPattern(), this.expressionScope.exit(), this.parseArrowExpression(A, o, !1), A) : (this.expressionScope.exit(), o.length || this.unexpected(this.state.lastTokStartLoc), g && this.unexpected(g), f && this.unexpected(f), this.checkExpressionErrors(l, !0), this.toReferencedListDeep(o, !0), o.length > 1 ? (s = this.startNodeAt(n), s.expressions = o, this.finishNode(s, "SequenceExpression"), this.resetEndLocation(s, w)) : s = o[0], this.wrapParenthesis(e, s));
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
        return this.scope.allowNewTarget || this.raise(p.UnexpectedNewTarget, s), s;
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
      t.callee = s, (e && s.type === "ImportExpression" || s.type === "Import") && this.raise(p.ImportCallNotNewExpression, s), s.type === "Super" && this.raise(p.SuperCallNotNewExpression, s);
    }
    parseTemplateElement(t) {
      const {
        start: e,
        startLoc: s,
        end: i,
        value: r
      } = this.state, n = e + 1, o = this.startNodeAt(y(s, 1));
      r === null && (t || this.raise(p.InvalidEscapeSequenceTemplate, y(this.state.firstInvalidTemplateEscapePos, 1)));
      const l = this.match(24), u = l ? -1 : -2, f = i + u;
      o.value = {
        raw: this.input.slice(n, f).replace(/\r\n?/g, `
`),
        cooked: r === null ? null : r.slice(1, u)
      }, o.tail = l, this.next();
      const g = this.finishNode(o, "TemplateElement");
      return this.resetEndLocation(g, y(this.state.lastTokEndLoc, u)), g;
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
      const l = this.startNode();
      for (l.properties = [], this.next(); !this.match(t); ) {
        if (o)
          o = !1;
        else if (this.expect(12), this.match(t)) {
          this.addTrailingCommaExtraToNode(l);
          break;
        }
        let f;
        e ? f = this.parseBindingProperty() : (f = this.parsePropertyDefinition(i), n = this.checkProto(f, s, n, i)), s && !this.isObjectProperty(f) && f.type !== "SpreadElement" && this.raise(p.InvalidRecordProperty, f), f.shorthand && this.addExtra(f, "shorthand", !0), l.properties.push(f);
      }
      this.next(), this.state.inFSharpPipelineDirectBody = r;
      let u = "ObjectExpression";
      return e ? u = "ObjectPattern" : s && (u = "RecordExpression"), this.finishNode(l, u);
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
        for (this.hasPlugin("decorators") && this.raise(p.UnsupportedPropertyDecorator, this.state.startLoc); this.match(26); )
          e.push(this.parseDecorator());
      const s = this.startNode();
      let i = !1, r = !1, n;
      if (this.match(21))
        return e.length && this.unexpected(), this.parseSpread();
      e.length && (s.decorators = e, e = []), s.method = !1, t && (n = this.state.startLoc);
      let o = this.eat(55);
      this.parsePropertyNamePrefixOperator(s);
      const l = this.state.containsEsc;
      if (this.parsePropertyName(s, t), !o && !l && this.maybeAsyncOrAccessorProp(s)) {
        const {
          key: u
        } = s, f = u.name;
        f === "async" && !this.hasPrecedingLineBreak() && (i = !0, this.resetPreviousNodeTrailingComments(u), o = this.eat(55), this.parsePropertyName(s)), (f === "get" || f === "set") && (r = !0, this.resetPreviousNodeTrailingComments(u), s.kind = f, this.match(55) && (o = !0, this.raise(p.AccessorIsGenerator, this.state.curPosition(), {
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
      i.length !== s && this.raise(t.kind === "get" ? p.BadGetterArity : p.BadSetterArity, t), t.kind === "set" && ((e = i[i.length - 1]) == null ? void 0 : e.type) === "RestElement" && this.raise(p.BadSetterRestParameter, t);
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
          i != null ? i.shorthandAssignLoc === null && (i.shorthandAssignLoc = r) : this.raise(p.InvalidCoverInitializedName, r), t.value = this.parseMaybeDefault(e, this.cloneIdentifier(t.key));
        } else
          t.value = this.cloneIdentifier(t.key);
        return t.shorthand = !0, this.finishObjectProperty(t);
      }
    }
    finishObjectProperty(t) {
      return this.finishNode(t, "ObjectProperty");
    }
    parseObjPropValue(t, e, s, i, r, n, o) {
      const l = this.parseObjectMethod(t, s, i, r, n) || this.parseObjectProperty(t, e, r, o);
      return l || this.unexpected(), l;
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
        if (z(s))
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
              e != null ? e.privateKeyLoc === null && (e.privateKeyLoc = n) : this.raise(p.UnexpectedPrivateField, n), r = this.parsePrivateName();
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
      this.initFunction(t, s), t.generator = e, this.scope.enter(530 | (o ? 576 : 0) | (r ? 32 : 0)), this.prodParam.enter(We(s, t.generator)), this.parseFunctionParams(t, i);
      const l = this.parseFunctionBodyAndFinish(t, n, !0);
      return this.prodParam.exit(), this.scope.exit(), l;
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
      let r = We(s, !1);
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
      if (this.expressionScope.enter(Ut()), i)
        t.body = this.parseMaybeAssign(), this.checkParams(t, !1, e, !1);
      else {
        const r = this.state.strict, n = this.state.labels;
        this.state.labels = [], this.prodParam.enter(this.prodParam.currentFlags() | 4), t.body = this.parseBlock(!0, !1, (o) => {
          const l = !this.isSimpleParamList(t.params);
          o && l && this.raise(p.IllegalLanguageModeDirective, (t.kind === "method" || t.kind === "constructor") && t.key ? t.key.loc.end : t);
          const u = !r && this.state.strict;
          this.checkParams(t, !this.state.strict && !e && !s && !l, e, u), this.state.strict && t.id && this.checkIdentifier(t.id, 65, u);
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
        e || this.raise(p.UnexpectedToken, this.state.curPosition(), {
          unexpected: ","
        }), r = null;
      else if (this.match(21)) {
        const n = this.state.startLoc;
        r = this.parseParenItem(this.parseSpread(s), n);
      } else if (this.match(17)) {
        this.expectPlugin("partialApplication"), i || this.raise(p.UnexpectedArgumentPlaceholder, this.state.startLoc);
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
      z(i) ? e = this.state.value : this.unexpected();
      const r = Z(i);
      return t ? r && this.replaceToken(132) : this.checkReservedWord(e, s, r, !1), this.next(), e;
    }
    checkReservedWord(t, e, s, i) {
      if (t.length > 10 || !si(t))
        return;
      if (s && Qs(t)) {
        this.raise(p.UnexpectedKeyword, e, {
          keyword: t
        });
        return;
      }
      if ((this.state.strict ? i ? jt : kt : Nt)(t, this.inModule)) {
        this.raise(p.UnexpectedReservedWord, e, {
          reservedWord: t
        });
        return;
      } else if (t === "yield") {
        if (this.prodParam.hasYield) {
          this.raise(p.YieldBindingIdentifier, e);
          return;
        }
      } else if (t === "await") {
        if (this.prodParam.hasAwait) {
          this.raise(p.AwaitBindingIdentifier, e);
          return;
        }
        if (this.scope.inStaticBlock) {
          this.raise(p.AwaitBindingIdentifierInStaticBlock, e);
          return;
        }
        this.expressionScope.recordAsyncArrowParametersError(e);
      } else if (t === "arguments" && this.scope.inClassAndNotInNonArrowFunction) {
        this.raise(p.ArgumentsInClass, e);
        return;
      }
    }
    recordAwaitIfAllowed() {
      const t = this.prodParam.hasAwait;
      return t && !this.scope.inFunction && (this.state.hasTopLevelAwait = !0), t;
    }
    parseAwait(t) {
      const e = this.startNodeAt(t);
      return this.expressionScope.recordParameterInitializerError(p.AwaitExpressionFormalParameter, e), this.eat(55) && this.raise(p.ObsoleteAwaitStar, e), !this.scope.inFunction && !(this.optionFlags & 1) && (this.isAmbiguousPrefixOrIdentifier() ? this.ambiguousScriptDifferentAst = !0 : this.sawUnambiguousESM = !0), this.state.soloAwait || (e.argument = this.parseMaybeUnary(null, !0)), this.finishNode(e, "AwaitExpression");
    }
    isAmbiguousPrefixOrIdentifier() {
      if (this.hasPrecedingLineBreak()) return !0;
      const {
        type: t
      } = this.state;
      return t === 53 || t === 10 || t === 0 || qe(t) || t === 102 && !this.state.containsEsc || t === 138 || t === 56 || this.hasPlugin("v8intrinsic") && t === 54;
    }
    parseYield(t) {
      const e = this.startNodeAt(t);
      this.expressionScope.recordParameterInitializerError(p.YieldInParameter, e);
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
          this.raise(p.ImportCallArity, t);
        }
      }
      return this.expect(11), this.finishNode(t, "ImportExpression");
    }
    checkPipelineAtInfixOperator(t, e) {
      this.hasPlugin(["pipelineOperator", {
        proposal: "smart"
      }]) && t.type === "SequenceExpression" && this.raise(p.PipelineHeadSequenceExpression, e);
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
        throw this.raise(p.PipelineBodyNoArrow, this.state.startLoc);
      this.topicReferenceWasUsedInCurrentContext() || this.raise(p.PipelineTopicUnused, t);
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
  const dt = {
    kind: 1
  }, Ki = {
    kind: 2
  }, Ji = /[\uD800-\uDFFF]/u, ft = /in(?:stanceof)?/y;
  function Xi(a, t, e) {
    for (let s = 0; s < a.length; s++) {
      const i = a[s], {
        type: r
      } = i;
      if (typeof r == "number") {
        if (r === 139) {
          const {
            loc: n,
            start: o,
            value: l,
            end: u
          } = i, f = o + 1, g = y(n.start, 1);
          a.splice(s, 1, new Ae({
            type: de(27),
            value: "#",
            start: o,
            end: f,
            startLoc: n.start,
            endLoc: g
          }), new Ae({
            type: de(132),
            value: l,
            start: f,
            end: u,
            startLoc: g,
            endLoc: n.end
          })), s++;
          continue;
        }
        if (qe(r)) {
          const {
            loc: n,
            start: o,
            value: l,
            end: u
          } = i, f = o + 1, g = y(n.start, 1);
          let w;
          t.charCodeAt(o - e) === 96 ? w = new Ae({
            type: de(22),
            value: "`",
            start: o,
            end: f,
            startLoc: n.start,
            endLoc: g
          }) : w = new Ae({
            type: de(8),
            value: "}",
            start: o,
            end: f,
            startLoc: n.start,
            endLoc: g
          });
          let A, N, R, q;
          r === 24 ? (N = u - 1, R = y(n.end, -1), A = l === null ? null : l.slice(1, -1), q = new Ae({
            type: de(22),
            value: "`",
            start: N,
            end: u,
            startLoc: R,
            endLoc: n.end
          })) : (N = u - 2, R = y(n.end, -2), A = l === null ? null : l.slice(1, -2), q = new Ae({
            type: de(23),
            value: "${",
            start: N,
            end: u,
            startLoc: R,
            endLoc: n.end
          })), a.splice(s, 1, w, new Ae({
            type: de(20),
            value: A,
            start: f,
            end: N,
            startLoc: g,
            endLoc: R
          }), q), s += 2;
          continue;
        }
        i.type = de(r);
      }
    }
    return a;
  }
  class Gi extends Wi {
    parseTopLevel(t, e) {
      return t.program = this.parseProgram(e, 140, this.options.sourceType === "module" ? "module" : "script"), t.comments = this.comments, this.optionFlags & 256 && (t.tokens = Xi(this.tokens, this.input, this.startIndex)), this.finishNode(t, "File");
    }
    parseProgram(t, e, s) {
      if (t.sourceType = s, t.interpreter = this.parseInterpreterDirective(), this.parseBlockBody(t, !0, !0, e), this.inModule) {
        if (!(this.optionFlags & 64) && this.scope.undefinedExports.size > 0)
          for (const [r, n] of Array.from(this.scope.undefinedExports))
            this.raise(p.ModuleExportUndefined, n, {
              localName: r
            });
        this.addExtra(t, "topLevelAwait", this.state.hasTopLevelAwait);
      }
      let i;
      return e === 140 ? i = this.finishNode(t, "Program") : i = this.finishNodeAt(t, "Program", y(this.state.startLoc, -1)), i;
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
      if (ce(t)) {
        if (ft.lastIndex = e, ft.test(this.input)) {
          const s = this.codePointAtPos(ft.lastIndex);
          if (!je(s) && s !== 92)
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
          return n || this.raise(this.state.strict ? p.StrictFunction : this.options.annexB ? p.SloppyFunctionAnnexB : p.SloppyFunction, this.state.startLoc), this.parseFunctionStatement(i, !1, !r && n);
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
            return this.allowsUsing() ? r ? this.recordAwaitIfAllowed() || this.raise(p.AwaitUsingNotInAsyncContext, i) : this.raise(p.UnexpectedLexicalDeclaration, i) : this.raise(p.UnexpectedUsingDeclaration, i), this.next(), this.parseVarStatement(i, "await using");
          break;
        case 107:
          if (this.state.containsEsc || !this.hasInLineFollowingBindingIdentifierOrBrace())
            break;
          return this.allowsUsing() ? r || this.raise(p.UnexpectedLexicalDeclaration, this.state.startLoc) : this.raise(p.UnexpectedUsingDeclaration, this.state.startLoc), this.parseVarStatement(i, "using");
        case 100: {
          if (this.state.containsEsc)
            break;
          const f = this.nextTokenStart(), g = this.codePointAtPos(f);
          if (g !== 91 && (!r && this.hasFollowingLineBreak() || !this.chStartsBindingIdentifier(g, f) && g !== 123))
            break;
        }
        case 75:
          r || this.raise(p.UnexpectedLexicalDeclaration, this.state.startLoc);
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
          !(this.optionFlags & 8) && !o && this.raise(p.UnexpectedImportExport, this.state.startLoc), this.next();
          let f;
          return s === 83 ? f = this.parseImport(i) : f = this.parseExport(i, e), this.assertModuleNodeAllowed(f), f;
        }
        default:
          if (this.isAsyncFunction())
            return r || this.raise(p.AsyncFunctionInSingleStatementContext, this.state.startLoc), this.next(), this.parseFunctionStatement(i, !0, !r && n);
      }
      const l = this.state.value, u = this.parseExpression();
      return M(s) && u.type === "Identifier" && this.eat(14) ? this.parseLabeledStatement(i, l, u, t) : this.parseExpressionStatement(i, u, e);
    }
    assertModuleNodeAllowed(t) {
      !(this.optionFlags & 8) && !this.inModule && this.raise(p.ImportOutsideModule, t);
    }
    decoratorsEnabledBeforeExport() {
      return this.hasPlugin("decorators-legacy") ? !0 : this.hasPlugin("decorators") && this.getPluginOption("decorators", "decoratorsBeforeExport") !== !1;
    }
    maybeTakeDecorators(t, e, s) {
      if (t) {
        var i;
        (i = e.decorators) != null && i.length ? (typeof this.getPluginOption("decorators", "decoratorsBeforeExport") != "boolean" && this.raise(p.DecoratorsBeforeAfterExport, e.decorators[0]), e.decorators.unshift(...t)) : e.decorators = t, this.resetStartLocationFromNode(e, t[0]), s && this.resetStartLocationFromNode(s, e);
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
        t || this.unexpected(), this.decoratorsEnabledBeforeExport() || this.raise(p.DecoratorExportClass, this.state.startLoc);
      else if (!this.canHaveLeadingDecorator())
        throw this.raise(p.UnexpectedLeadingDecorator, this.state.startLoc);
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
          t.expression = this.parseMaybeDecoratorArguments(s, i), this.getPluginOption("decorators", "allowCallParenthesized") === !1 && t.expression !== s && this.raise(p.DecoratorArgumentsOutsideParentheses, r);
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
        this.raise(p.IllegalBreakContinue, t, {
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
      return this.next(), this.state.labels.push(dt), t.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement()), this.state.labels.pop(), this.expect(92), t.test = this.parseHeaderExpression(), this.eat(13), this.finishNode(t, "DoWhileStatement");
    }
    parseForStatement(t) {
      this.next(), this.state.labels.push(dt);
      let e = null;
      if (this.isContextual(96) && this.recordAwaitIfAllowed() && (e = this.state.startLoc, this.next()), this.scope.enter(0), this.expect(10), this.match(13))
        return e !== null && this.unexpected(e), this.parseFor(t, null);
      const s = this.isContextual(100);
      {
        const l = this.isAwaitUsing(), u = l || this.isForUsing(), f = s && this.hasFollowingBindingAtom() || u;
        if (this.match(74) || this.match(75) || f) {
          const g = this.startNode();
          let w;
          l ? (w = "await using", this.recordAwaitIfAllowed() || this.raise(p.AwaitUsingNotInAsyncContext, this.state.startLoc), this.next()) : w = this.state.value, this.next(), this.parseVar(g, !0, w);
          const A = this.finishNode(g, "VariableDeclaration"), N = this.match(58);
          return N && u && this.raise(p.ForInUsing, A), (N || this.isContextual(102)) && A.declarations.length === 1 ? this.parseForIn(t, A, e) : (e !== null && this.unexpected(e), this.parseFor(t, A));
        }
      }
      const i = this.isContextual(95), r = new Xe(), n = this.parseExpression(!0, r), o = this.isContextual(102);
      if (o && (s && this.raise(p.ForOfLet, n), e === null && i && n.type === "Identifier" && this.raise(p.ForOfAsync, n)), o || this.match(58)) {
        this.checkDestructuringPrivate(r), this.toAssignable(n, !0);
        const l = o ? "ForOfStatement" : "ForInStatement";
        return this.checkLVal(n, {
          type: l
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
      return this.prodParam.hasReturn || this.raise(p.IllegalReturn, this.state.startLoc), this.next(), this.isLineTerminator() ? t.argument = null : (t.argument = this.parseExpression(), this.semicolon()), this.finishNode(t, "ReturnStatement");
    }
    parseSwitchStatement(t) {
      this.next(), t.discriminant = this.parseHeaderExpression();
      const e = t.cases = [];
      this.expect(5), this.state.labels.push(Ki), this.scope.enter(256);
      let s;
      for (let i; !this.match(8); )
        if (this.match(61) || this.match(65)) {
          const r = this.match(61);
          s && this.finishNode(s, "SwitchCase"), e.push(s = this.startNode()), s.consequent = [], this.next(), r ? s.test = this.parseExpression() : (i && this.raise(p.MultipleDefaultsInSwitch, this.state.lastTokStartLoc), i = !0, s.test = null), this.expect(14);
        } else
          s ? s.consequent.push(this.parseStatementListItem()) : this.unexpected();
      return this.scope.exit(), s && this.finishNode(s, "SwitchCase"), this.next(), this.state.labels.pop(), this.finishNode(t, "SwitchStatement");
    }
    parseThrowStatement(t) {
      return this.next(), this.hasPrecedingLineBreak() && this.raise(p.NewlineAfterThrow, this.state.lastTokEndLoc), t.argument = this.parseExpression(), this.semicolon(), this.finishNode(t, "ThrowStatement");
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
      return t.finalizer = this.eat(67) ? this.parseBlock() : null, !t.handler && !t.finalizer && this.raise(p.NoCatchOrFinally, t), this.finishNode(t, "TryStatement");
    }
    parseVarStatement(t, e, s = !1) {
      return this.next(), this.parseVar(t, !1, e, s), this.semicolon(), this.finishNode(t, "VariableDeclaration");
    }
    parseWhileStatement(t) {
      return this.next(), t.test = this.parseHeaderExpression(), this.state.labels.push(dt), t.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement()), this.state.labels.pop(), this.finishNode(t, "WhileStatement");
    }
    parseWithStatement(t) {
      return this.state.strict && this.raise(p.StrictWith, this.state.startLoc), this.next(), t.object = this.parseHeaderExpression(), t.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement()), this.finishNode(t, "WithStatement");
    }
    parseEmptyStatement(t) {
      return this.next(), this.finishNode(t, "EmptyStatement");
    }
    parseLabeledStatement(t, e, s, i) {
      for (const n of this.state.labels)
        n.name === e && this.raise(p.LabelRedeclaration, s, {
          labelName: e
        });
      const r = Us(this.state.type) ? 1 : this.match(71) ? 2 : null;
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
      let o = !1, l = !1;
      for (; !this.match(i); ) {
        const u = s ? this.parseModuleItem() : this.parseStatementListItem();
        if (e && !l) {
          if (this.isValidDirective(u)) {
            const f = this.stmtToDirective(u);
            e.push(f), !o && f.value.value === "use strict" && (o = !0, this.setStrict(!0));
            continue;
          }
          l = !0, this.state.strictErrors.clear();
        }
        t.push(u);
      }
      r == null || r.call(this, o), n || this.setStrict(!1), this.next();
    }
    parseFor(t, e) {
      return t.init = e, this.semicolon(!1), t.test = this.match(13) ? null : this.parseExpression(), this.semicolon(!1), t.update = this.match(11) ? null : this.parseExpression(), this.expect(11), t.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement()), this.scope.exit(), this.state.labels.pop(), this.finishNode(t, "ForStatement");
    }
    parseForIn(t, e, s) {
      const i = this.match(58);
      return this.next(), i ? s !== null && this.unexpected(s) : t.await = s !== null, e.type === "VariableDeclaration" && e.declarations[0].init != null && (!i || !this.options.annexB || this.state.strict || e.kind !== "var" || e.declarations[0].id.type !== "Identifier") && this.raise(p.ForInOfLoopInitializer, e, {
        type: i ? "ForInStatement" : "ForOfStatement"
      }), e.type === "AssignmentPattern" && this.raise(p.InvalidLhs, e, {
        ancestor: {
          type: "ForStatement"
        }
      }), t.left = e, t.right = i ? this.parseExpression() : this.parseMaybeAssignAllowIn(), this.expect(11), t.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement()), this.scope.exit(), this.state.labels.pop(), this.finishNode(t, i ? "ForInStatement" : "ForOfStatement");
    }
    parseVar(t, e, s, i = !1) {
      const r = t.declarations = [];
      for (t.kind = s; ; ) {
        const n = this.startNode();
        if (this.parseVarId(n, s), n.init = this.eat(29) ? e ? this.parseMaybeAssignDisallowIn() : this.parseMaybeAssignAllowIn() : null, n.init === null && !i && (n.id.type !== "Identifier" && !(e && (this.match(58) || this.isContextual(102))) ? this.raise(p.DeclarationMissingInitializer, this.state.lastTokEndLoc, {
          kind: "destructuring"
        }) : (s === "const" || s === "using" || s === "await using") && !(this.match(58) || this.isContextual(102)) && this.raise(p.DeclarationMissingInitializer, this.state.lastTokEndLoc, {
          kind: s
        })), r.push(this.finishNode(n, "VariableDeclarator")), !this.eat(12)) break;
      }
      return t;
    }
    parseVarId(t, e) {
      const s = this.parseBindingAtom();
      e === "using" || e === "await using" ? (s.type === "ArrayPattern" || s.type === "ObjectPattern") && this.raise(p.UsingDeclarationHasBindingPattern, s.loc.start) : s.type === "VoidPattern" && this.raise(p.UnexpectedVoidPattern, s.loc.start), this.checkLVal(s, {
        type: "VariableDeclarator"
      }, e === "var" ? 5 : 8201), t.id = s;
    }
    parseAsyncFunctionExpression(t) {
      return this.parseFunction(t, 8);
    }
    parseFunction(t, e = 0) {
      const s = e & 2, i = !!(e & 1), r = i && !(e & 4), n = !!(e & 8);
      this.initFunction(t, n), this.match(55) && (s && this.raise(p.GeneratorInSingleStatementContext, this.state.startLoc), this.next(), t.generator = !0), i && (t.id = this.parseFunctionId(r));
      const o = this.state.maybeInArrowParameters;
      return this.state.maybeInArrowParameters = !1, this.scope.enter(514), this.prodParam.enter(We(n, t.generator)), i || (t.id = this.parseFunctionId()), this.parseFunctionParams(t, !1), this.withSmartMixTopicForbiddingContext(() => {
        this.parseFunctionBodyAndFinish(t, i ? "FunctionDeclaration" : "FunctionExpression");
      }), this.prodParam.exit(), this.scope.exit(), i && !s && this.registerFunctionStatementId(t), this.state.maybeInArrowParameters = o, t;
    }
    parseFunctionId(t) {
      return t || M(this.state.type) ? this.parseIdentifier() : null;
    }
    parseFunctionParams(t, e) {
      this.expect(10), this.expressionScope.enter(ki()), t.params = this.parseBindingList(11, 41, 2 | (e ? 4 : 0)), this.expressionScope.exit();
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
              throw this.raise(p.DecoratorSemicolon, this.state.lastTokEndLoc);
            continue;
          }
          if (this.match(26)) {
            i.push(this.parseDecorator());
            continue;
          }
          const n = this.startNode();
          i.length && (n.decorators = i, this.resetStartLocationFromNode(n, i[0]), i = []), this.parseClassMember(r, n, s), n.kind === "constructor" && n.decorators && n.decorators.length > 0 && this.raise(p.DecoratorConstructor, n);
        }
      }), this.state.strict = e, this.next(), i.length)
        throw this.raise(p.TrailingDecorator, this.state.startLoc);
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
      const r = e, n = e, o = e, l = e, u = e, f = r, g = r;
      if (e.static = i, this.parsePropertyNamePrefixOperator(e), this.eat(55)) {
        f.kind = "method";
        const F = this.match(139);
        if (this.parseClassElementName(f), this.parsePostMemberNameModifiers(f), F) {
          this.pushClassPrivateMethod(t, n, !0, !1);
          return;
        }
        this.isNonstaticConstructor(r) && this.raise(p.ConstructorIsGenerator, r.key), this.pushClassMethod(t, r, !0, !1, !1, !1);
        return;
      }
      const w = !this.state.containsEsc && M(this.state.type), A = this.parseClassElementName(e), N = w ? A.name : null, R = this.isPrivateName(A), q = this.state.startLoc;
      if (this.parsePostMemberNameModifiers(g), this.isClassMethod()) {
        if (f.kind = "method", R) {
          this.pushClassPrivateMethod(t, n, !1, !1);
          return;
        }
        const F = this.isNonstaticConstructor(r);
        let V = !1;
        F && (r.kind = "constructor", s.hadConstructor && !this.hasPlugin("typescript") && this.raise(p.DuplicateConstructor, A), F && this.hasPlugin("typescript") && e.override && this.raise(p.OverrideOnConstructor, A), s.hadConstructor = !0, V = s.hadSuperClass), this.pushClassMethod(t, r, !1, !1, F, V);
      } else if (this.isClassProperty())
        R ? this.pushClassPrivateProperty(t, l) : this.pushClassProperty(t, o);
      else if (N === "async" && !this.isLineTerminator()) {
        this.resetPreviousNodeTrailingComments(A);
        const F = this.eat(55);
        g.optional && this.unexpected(q), f.kind = "method";
        const V = this.match(139);
        this.parseClassElementName(f), this.parsePostMemberNameModifiers(g), V ? this.pushClassPrivateMethod(t, n, F, !0) : (this.isNonstaticConstructor(r) && this.raise(p.ConstructorIsAsync, r.key), this.pushClassMethod(t, r, F, !0, !1, !1));
      } else if ((N === "get" || N === "set") && !(this.match(55) && this.isLineTerminator())) {
        this.resetPreviousNodeTrailingComments(A), f.kind = N;
        const F = this.match(139);
        this.parseClassElementName(r), F ? this.pushClassPrivateMethod(t, n, !1, !1) : (this.isNonstaticConstructor(r) && this.raise(p.ConstructorIsAccessor, r.key), this.pushClassMethod(t, r, !1, !1, !1, !1)), this.checkGetterSetterParams(r);
      } else if (N === "accessor" && !this.isLineTerminator()) {
        this.expectPlugin("decoratorAutoAccessors"), this.resetPreviousNodeTrailingComments(A);
        const F = this.match(139);
        this.parseClassElementName(o), this.pushClassAccessorProperty(t, u, F);
      } else this.isLineTerminator() ? R ? this.pushClassPrivateProperty(t, l) : this.pushClassProperty(t, o) : this.unexpected();
    }
    parseClassElementName(t) {
      const {
        type: e,
        value: s
      } = this.state;
      if ((e === 132 || e === 134) && t.static && s === "prototype" && this.raise(p.StaticPrototype, this.state.startLoc), e === 139) {
        s === "constructor" && this.raise(p.ConstructorClassPrivateField, this.state.startLoc);
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
      this.parseBlockOrModuleBlockBody(r, void 0, !1, 8), this.prodParam.exit(), this.scope.exit(), this.state.labels = i, t.body.push(this.finishNode(e, "StaticBlock")), (s = e.decorators) != null && s.length && this.raise(p.DecoratorStaticBlock, e);
    }
    pushClassProperty(t, e) {
      !e.computed && this.nameIsConstructor(e.key) && this.raise(p.ConstructorClassField, e.key), t.body.push(this.parseClassProperty(e));
    }
    pushClassPrivateProperty(t, e) {
      const s = this.parseClassPrivateProperty(e);
      t.body.push(s), this.classScope.declarePrivateName(this.getPrivateNameSV(s.key), 0, s.key.loc.start);
    }
    pushClassAccessorProperty(t, e, s) {
      !s && !e.computed && this.nameIsConstructor(e.key) && this.raise(p.ConstructorClassField, e.key);
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
      this.scope.enter(592), this.expressionScope.enter(Ut()), this.prodParam.enter(0), t.value = this.eat(29) ? this.parseMaybeAssignAllowIn() : null, this.expressionScope.exit(), this.prodParam.exit(), this.scope.exit();
    }
    parseClassId(t, e, s, i = 8331) {
      if (M(this.state.type))
        t.id = this.parseIdentifier(), e && this.declareNameFromIdentifier(t.id, i);
      else if (s || !e)
        t.id = null;
      else
        throw this.raise(p.MissingClassName, this.state.startLoc);
    }
    parseClassSuper(t) {
      t.superClass = this.eat(81) ? this.parseExprSubscripts() : null;
    }
    parseExport(t, e) {
      const s = this.parseMaybeImportPhase(t, !0), i = this.maybeParseExportDefaultSpecifier(t, s), r = !i || this.eat(12), n = r && this.eatExportStar(t), o = n && this.maybeParseExportNamespaceSpecifier(t), l = r && (!o || this.eat(12)), u = i || n;
      if (n && !o) {
        if (i && this.unexpected(), e)
          throw this.raise(p.UnsupportedDecoratorExport, t);
        return this.parseExportFrom(t, !0), this.sawUnambiguousESM = !0, this.finishNode(t, "ExportAllDeclaration");
      }
      const f = this.maybeParseExportNamedSpecifiers(t);
      i && r && !n && !f && this.unexpected(null, 5), o && l && this.unexpected(null, 98);
      let g;
      if (u || f) {
        if (g = !1, e)
          throw this.raise(p.UnsupportedDecoratorExport, t);
        this.parseExportFrom(t, u);
      } else
        g = this.maybeParseExportDeclaration(t);
      if (u || f || g) {
        var w;
        const A = t;
        if (this.checkExport(A, !0, !1, !!A.source), ((w = A.declaration) == null ? void 0 : w.type) === "ClassDeclaration")
          this.maybeTakeDecorators(e, A.declaration, A);
        else if (e)
          throw this.raise(p.UnsupportedDecoratorExport, t);
        return this.sawUnambiguousESM = !0, this.finishNode(A, "ExportNamedDeclaration");
      }
      if (this.eat(65)) {
        const A = t, N = this.parseExportDefaultExpression();
        if (A.declaration = N, N.type === "ClassDeclaration")
          this.maybeTakeDecorators(e, N, A);
        else if (e)
          throw this.raise(p.UnsupportedDecoratorExport, t);
        return this.checkExport(A, !0, !0), this.sawUnambiguousESM = !0, this.finishNode(A, "ExportDefaultDeclaration");
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
        return this.hasPlugin("decorators") && this.getPluginOption("decorators", "decoratorsBeforeExport") === !0 && this.raise(p.DecoratorBeforeExport, this.state.startLoc), this.parseClass(this.maybeTakeDecorators(this.parseDecorators(!1), this.startNode()), !0, !0);
      if (this.match(75) || this.match(74) || this.isLet() || this.isUsing() || this.isAwaitUsing())
        throw this.raise(p.UnsupportedDefaultExport, this.state.startLoc);
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
      if (M(t)) {
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
      if (this.input.charCodeAt(e) === 44 || M(this.state.type) && s)
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
      return t === 26 && (this.expectOnePlugin(["decorators", "decorators-legacy"]), this.hasPlugin("decorators")) ? (this.getPluginOption("decorators", "decoratorsBeforeExport") === !0 && this.raise(p.DecoratorBeforeExport, this.state.startLoc), !0) : this.isUsing() ? (this.raise(p.UsingDeclarationExport, this.state.startLoc), !0) : this.isAwaitUsing() ? (this.raise(p.UsingDeclarationExport, this.state.startLoc), !0) : t === 74 || t === 75 || t === 68 || t === 80 || this.isLet() || this.isAsyncFunction();
    }
    checkExport(t, e, s, i) {
      if (e) {
        var r;
        if (s) {
          if (this.checkDuplicateExports(t, "default"), this.hasPlugin("exportDefaultFrom")) {
            var n;
            const o = t.declaration;
            o.type === "Identifier" && o.name === "from" && o.end - o.start === 4 && !((n = o.extra) != null && n.parenthesized) && this.raise(p.ExportDefaultFromAsIdentifier, o);
          }
        } else if ((r = t.specifiers) != null && r.length)
          for (const o of t.specifiers) {
            const {
              exported: l
            } = o, u = l.type === "Identifier" ? l.name : l.value;
            if (this.checkDuplicateExports(o, u), !i && o.local) {
              const {
                local: f
              } = o;
              f.type !== "Identifier" ? this.raise(p.ExportBindingIsString, o, {
                localName: f.value,
                exportName: u
              }) : (this.checkReservedWord(f.name, f.loc.start, !0, !1), this.scope.checkLocalExport(f));
            }
          }
        else if (t.declaration) {
          const o = t.declaration;
          if (o.type === "FunctionDeclaration" || o.type === "ClassDeclaration") {
            const {
              id: l
            } = o;
            if (!l) throw new Error("Assertion failure");
            this.checkDuplicateExports(t, l.name);
          } else if (o.type === "VariableDeclaration")
            for (const l of o.declarations)
              this.checkDeclaration(l.id);
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
      this.exportedIdentifiers.has(e) && (e === "default" ? this.raise(p.DuplicateDefaultExport, t) : this.raise(p.DuplicateExport, t, {
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
        const t = this.parseStringLiteral(this.state.value), e = Ji.exec(t.value);
        return e && this.raise(p.ModuleExportNameHasLoneSurrogate, t, {
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
        s !== "ImportDefaultSpecifier" && this.raise(p.SourcePhaseImportRequiresDefault, e[0].loc.start);
      else if (t.phase === "defer")
        s !== "ImportNamespaceSpecifier" && this.raise(p.DeferImportRequiresNamespace, e[0].loc.start);
      else if (t.module) {
        var i;
        s !== "ImportDefaultSpecifier" && this.raise(p.ImportReflectionNotBinding, e[0].loc.start), ((i = t.assertions) == null ? void 0 : i.length) > 0 && this.raise(p.ImportReflectionHasAssertion, e[0].loc.start);
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
          s !== void 0 && this.raise(p.ImportJSONBindingNotDefault, s.loc.start);
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
      return (z(r) ? r !== 98 || this.lookaheadCharCode() === 102 : r !== 12) ? (this.applyImportPhase(t, e, i, s.loc.start), null) : (this.applyImportPhase(t, e, null), this.createIdentifier(s, i));
    }
    isPrecedingIdImportPhase(t) {
      const {
        type: e
      } = this.state;
      return M(e) ? e !== 98 || this.lookaheadCharCode() === 102 : e !== 12;
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
        if (e.has(i) && this.raise(p.ModuleAttributesWithDuplicateKeys, this.state.startLoc, {
          key: i
        }), e.add(i), this.match(134) ? s.key = this.parseStringLiteral(i) : s.key = this.parseIdentifier(!0), this.expect(14), !this.match(134))
          throw this.raise(p.ModuleAttributeInvalidValue, this.state.startLoc);
        s.value = this.parseStringLiteral(this.state.value), t.push(this.finishNode(s, "ImportAttribute"));
      } while (this.eat(12));
      return this.expect(8), t;
    }
    parseModuleAttributes() {
      const t = [], e = /* @__PURE__ */ new Set();
      do {
        const s = this.startNode();
        if (s.key = this.parseIdentifier(!0), s.key.name !== "type" && this.raise(p.ModuleAttributeDifferentFromType, s.key), e.has(s.key.name) && this.raise(p.ModuleAttributesWithDuplicateKeys, s.key, {
          key: s.key.name
        }), e.add(s.key.name), this.expect(14), !this.match(134))
          throw this.raise(p.ModuleAttributeInvalidValue, this.state.startLoc);
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
      } else this.isContextual(94) && !this.hasPrecedingLineBreak() ? (!this.hasPlugin("deprecatedImportAssert") && !this.hasPlugin("importAssertions") && this.raise(p.ImportAttributesUseAssert, this.state.startLoc), this.hasPlugin("importAssertions") || this.addExtra(t, "deprecatedAssertSyntax", !0), this.next(), e = this.parseImportAttributes()) : e = [];
      !s && this.hasPlugin("importAssertions") ? t.assertions = e : t.attributes = e;
    }
    maybeParseDefaultImportSpecifier(t, e) {
      if (e) {
        const s = this.startNodeAtNode(e);
        return s.local = e, t.specifiers.push(this.finishImportSpecifier(s, "ImportDefaultSpecifier")), !0;
      } else if (z(this.state.type))
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
            throw this.raise(p.DestructureNamedImport, this.state.startLoc);
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
          throw this.raise(p.ImportBindingIsString, t, {
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
  class Xt extends Gi {
    constructor(t, e, s) {
      const i = K(t);
      super(i, e), this.options = i, this.initializeScopes(), this.plugins = s, this.filename = i.sourceFilename, this.startIndex = i.startIndex;
      let r = 0;
      i.allowAwaitOutsideFunction && (r |= 1), i.allowReturnOutsideFunction && (r |= 2), i.allowImportExportEverywhere && (r |= 8), i.allowSuperOutsideMethod && (r |= 16), i.allowUndeclaredExports && (r |= 64), i.allowNewTargetOutsideFunction && (r |= 4), i.allowYieldOutsideFunction && (r |= 32), i.ranges && (r |= 128), i.tokens && (r |= 256), i.createImportExpressions && (r |= 512), i.createParenthesizedExpressions && (r |= 1024), i.errorRecovery && (r |= 2048), i.attachComment && (r |= 4096), i.annexB && (r |= 8192), this.optionFlags = r;
    }
    getScopeHandler() {
      return at;
    }
    parse() {
      this.enterInitialScopes();
      const t = this.startNode(), e = this.startNode();
      this.nextToken(), t.errors = null;
      const s = this.parseTopLevel(t, e);
      return s.errors = this.state.errors, s.comments.length = this.state.commentsLen, s;
    }
  }
  function Yi(a, t) {
    var e;
    if (((e = t) == null ? void 0 : e.sourceType) === "unambiguous") {
      t = Object.assign({}, t);
      try {
        t.sourceType = "module";
        const s = ze(t, a), i = s.parse();
        if (s.sawUnambiguousESM)
          return i;
        if (s.ambiguousScriptDifferentAst)
          try {
            return t.sourceType = "script", ze(t, a).parse();
          } catch {
          }
        else
          i.program.sourceType = "script";
        return i;
      } catch (s) {
        try {
          return t.sourceType = "script", ze(t, a).parse();
        } catch {
        }
        throw s;
      }
    } else
      return ze(t, a).parse();
  }
  function Zi(a, t) {
    const e = ze(t, a);
    return e.options.strictMode && (e.state.strict = !0), e.getExpression();
  }
  function Qi(a) {
    const t = {};
    for (const e of Object.keys(a))
      t[e] = de(a[e]);
    return t;
  }
  const er = Qi(X);
  function ze(a, t) {
    let e = Xt;
    const s = /* @__PURE__ */ new Map();
    if (a != null && a.plugins) {
      for (const i of a.plugins) {
        let r, n;
        typeof i == "string" ? r = i : [r, n] = i, s.has(r) || s.set(r, n || {});
      }
      qi(s), e = tr(s);
    }
    return new e(a, t, s);
  }
  const Gt = /* @__PURE__ */ new Map();
  function tr(a) {
    const t = [];
    for (const i of Hi)
      a.has(i) && t.push(i);
    const e = t.join("|");
    let s = Gt.get(e);
    if (!s) {
      s = Xt;
      for (const i of t)
        s = Jt[i](s);
      Gt.set(e, s);
    }
    return s;
  }
  return _e.parse = Yi, _e.parseExpression = Zi, _e.tokTypes = er, _e;
}
var Sr = Ar();
const G = {
  foreground: "var(--pitaj-fg, #0f172a)",
  muted: "var(--pitaj-muted, #64748b)",
  border: "var(--pitaj-border, #e2e8f0)",
  surface: "var(--pitaj-surface, #ffffff)",
  accent: "var(--pitaj-accent, #2563eb)"
};
function Cr({ children: h, size: d = "sm", status: m, background: y, className: b = "", style: x }) {
  const P = d === "sm" ? 360 : d === "md" ? 440 : d === "lg" ? 560 : void 0, C = typeof m == "string" ? { text: m } : m;
  return /* @__PURE__ */ c(
    "div",
    {
      className: `pitaj-inline-widget-card ${b}`.trim(),
      style: {
        width: "100%",
        maxWidth: P,
        padding: 16,
        borderRadius: 16,
        background: y || G.surface,
        color: G.foreground,
        boxSizing: "border-box",
        ...fe(b),
        ...x
      },
      children: [
        C != null && C.text ? /* @__PURE__ */ c("div", { style: { display: "flex", alignItems: "center", gap: 6, marginBottom: 10, color: G.muted, fontSize: 12 }, children: [
          C.icon ? /* @__PURE__ */ c(At, { name: C.icon, size: "xs", color: "secondary" }) : null,
          /* @__PURE__ */ c("span", { children: C.text })
        ] }) : null,
        h
      ]
    }
  );
}
function vr({ children: h, gap: d = 2, justify: m = "start", align: y = "center", wrap: b = !1, flex: x, className: P = "", style: C }) {
  const j = m === "between" ? "space-between" : m === "around" ? "space-around" : m === "end" ? "flex-end" : m === "center" ? "center" : "flex-start", T = y === "start" ? "flex-start" : y === "end" ? "flex-end" : y === "baseline" ? "baseline" : y === "stretch" ? "stretch" : "center";
  return /* @__PURE__ */ c("div", { className: P, style: { display: "flex", flexDirection: "row", flexWrap: b === !0 || b === "wrap" ? "wrap" : "nowrap", gap: Number(d) * 4, justifyContent: j, alignItems: T, flex: x, ...fe(P), ...C }, children: h });
}
function Ir({ children: h, gap: d = 2, justify: m = "start", align: y = "stretch", flex: b, className: x = "", style: P }) {
  const C = m === "between" ? "space-between" : m === "end" ? "flex-end" : m === "center" ? "center" : "flex-start", j = y === "start" ? "flex-start" : y === "end" ? "flex-end" : y === "center" ? "center" : "stretch";
  return /* @__PURE__ */ c("div", { className: x, style: { display: "flex", flexDirection: "column", gap: Number(d) * 4, justifyContent: C, alignItems: j, flex: b, minWidth: 0, ...fe(x), ...P }, children: h });
}
function Nr({ children: h, background: d = "transparent", radius: m = "md", padding: y = 0, border: b = !1, flex: x, width: P, height: C, overflow: j, align: T, justify: v, className: L = "", style: U }) {
  const Q = {
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
  }, ie = { none: 0, sm: 6, md: 8, lg: 12, full: 9999 }, te = (ae) => typeof ae == "number" ? `${ae}px` : ae;
  return /* @__PURE__ */ c("div", { className: L, style: { display: "flex", alignItems: T === "start" ? "flex-start" : T === "end" ? "flex-end" : "center", justifyContent: v === "start" ? "flex-start" : v === "end" ? "flex-end" : v === "between" ? "space-between" : "center", background: Q[d] || d, borderRadius: ie[m], padding: Number(y) * 4, border: b ? `1px solid ${typeof b == "string" ? b : G.border}` : void 0, flex: x, width: te(P), height: te(C), overflow: j, boxSizing: "border-box", ...fe(L), ...U }, children: h });
}
function kr({ value: h, size: d = "md", weight: m = "bold", color: y, className: b = "" }) {
  const x = { sm: 14, md: 16, lg: 18, xl: 20, "2xl": 26 }, P = { normal: 400, medium: 500, semibold: 600, bold: 700 };
  return /* @__PURE__ */ c("h3", { className: b, style: { margin: 0, fontSize: x[d] || 16, lineHeight: 1.2, letterSpacing: "-0.02em", fontWeight: P[m] || 700, color: Ze(y), ...fe(b) }, children: h });
}
function Er({ value: h, size: d = "sm", weight: m = "normal", color: y = "prose", className: b = "" }) {
  const x = { xs: 11, sm: 12, md: 14, lg: 16 }, P = { normal: 400, medium: 500, semibold: 600, bold: 700 };
  return /* @__PURE__ */ c("p", { className: b, style: { margin: 0, fontSize: x[d] || 12, lineHeight: 1.35, fontWeight: P[m] || 400, color: Ze(y), ...fe(b) }, children: h });
}
function jr({ value: h, maxLines: d, color: m = "secondary", className: y = "" }) {
  return /* @__PURE__ */ c("span", { className: y, style: { display: d ? "-webkit-box" : void 0, WebkitBoxOrient: d ? "vertical" : void 0, WebkitLineClamp: d, overflow: d ? "hidden" : void 0, fontSize: 11, lineHeight: 1.35, color: Ze(m), ...fe(y) }, children: h });
}
function Ze(h) {
  return !h || h === "prose" ? G.foreground : h === "secondary" || h === "tertiary" ? G.muted : h === "success" ? "#15803d" : h === "warning" ? "#b45309" : h === "destructive" ? "#b91c1c" : h === "info" ? "#0369a1" : h === "white" || h === "white-80" ? h === "white" ? "#ffffff" : "rgba(255,255,255,.8)" : h === "currentColor" ? "currentColor" : h;
}
function fe(h = "") {
  const d = {}, m = new Set(h.split(/\s+/).filter(Boolean));
  return m.has("text-white") && (d.color = "#ffffff"), m.has("text-zinc-400") && (d.color = "#a1a1aa"), m.has("text-center") && (d.textAlign = "center"), m.has("font-medium") && (d.fontWeight = 500), m.has("font-semibold") && (d.fontWeight = 600), m.has("font-bold") && (d.fontWeight = 700), m.has("bg-white/10") && (d.background = "rgba(255,255,255,.1)"), m.has("border-white/20") && (d.borderColor = "rgba(255,255,255,.2)"), m.has("border-zinc-800") && (d.borderColor = "#27272a"), m.has("border-blue-700") && (d.borderColor = "#1d4ed8"), m.has("border-blue-400") && (d.borderColor = "#60a5fa"), m.has("border-blue-400/30") && (d.background = "rgba(96,165,250,.3)"), d;
}
function Lr({ label: h, color: d = "default", className: m = "" }) {
  const y = {
    success: ["#dcfce7", "#166534"],
    warning: ["#fef3c7", "#92400e"],
    info: ["#dbeafe", "#1e40af"],
    destructive: ["#fee2e2", "#991b1b"],
    default: ["#f1f5f9", "#475569"],
    neutral: ["#f1f5f9", "#475569"]
  }, b = y[d] || y.default;
  return /* @__PURE__ */ c("span", { className: m, style: { display: "inline-flex", alignItems: "center", borderRadius: 9999, padding: "2px 8px", fontSize: 10, fontWeight: 600, background: b[0], color: b[1], whiteSpace: "nowrap" }, children: h });
}
function Dr({ flush: h = !1, className: d = "" }) {
  return /* @__PURE__ */ c("div", { className: d, role: "separator", style: { height: 1, background: G.border, margin: h ? "10px -16px" : "10px 0", ...fe(d) } });
}
const Or = {
  package: Oe,
  box: Oe,
  check: or,
  "check-circle": nr,
  calendar: Ye,
  "shopping-bag": Oe,
  "shopping-cart": gt,
  cart: gt,
  "alert-circle": ks,
  alert: ks,
  "map-pin": xt,
  location: xt,
  star: Tt,
  "credit-card": ar,
  file: Ns,
  "file-text": Ns,
  "external-link": rr,
  "chevron-right": ir,
  sparkles: sr,
  chart: yt,
  "bar-chart": yt,
  wifi: _s,
  coffee: Bs,
  globe: Fs,
  tag: wt,
  sun: Ms
}, Mr = {
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
function At({ name: h = "package", size: d = "sm", color: m = "currentColor", className: y = "" }) {
  const b = String(h).toLowerCase().replace(/_/g, "-"), x = Or[b], P = d === "xs" ? 12 : d === "lg" ? 20 : d === "md" ? 16 : 14, C = Mr[b];
  return /* @__PURE__ */ c("span", { style: { display: "inline-flex", alignItems: "center", justifyContent: "center", width: P, height: P, color: Ze(m), flexShrink: 0, fontSize: P, lineHeight: 1 }, children: x ? /* @__PURE__ */ c(x, { size: P, className: y }) : C || /* @__PURE__ */ c(wt, { size: P, className: y }) });
}
function Fr({ label: h, variant: d = "primary", size: m = "sm", action: y, href: b, target: x = "_blank", onClick: P, disabled: C = !1, flex: j, className: T = "", style: v }) {
  const L = {
    primary: { background: G.accent, color: "#fff", border: "1px solid transparent" },
    secondary: { background: "#f1f5f9", color: G.foreground, border: "1px solid transparent" },
    outline: { background: "transparent", color: G.foreground, border: `1px solid ${G.border}` },
    ghost: { background: "transparent", color: G.foreground, border: "1px solid transparent" }
  };
  return /* @__PURE__ */ c("button", { type: "button", disabled: C, "data-widget-action": y, onClick: () => {
    P == null || P(), b && typeof window < "u" && window.open(b, x || "_blank", "noopener,noreferrer");
  }, className: T, style: { width: j ? void 0 : "100%", flex: j, borderRadius: 8, padding: m === "xs" ? "5px 10px" : m === "md" ? "9px 16px" : "7px 12px", fontSize: 12, fontWeight: 600, cursor: C ? "not-allowed" : "pointer", opacity: C ? 0.5 : 1, ...L[d], ...fe(T), ...v }, children: h });
}
function Br({ src: h, alt: d = "", width: m = "100%", height: y = 140, radius: b = "md", className: x = "", style: P }) {
  const C = { none: 0, sm: 6, md: 8, lg: 12, full: 9999 }, j = (T) => typeof T == "number" ? `${T}px` : T;
  return h ? /* @__PURE__ */ c("img", { src: h, alt: d, loading: "lazy", referrerPolicy: "no-referrer", className: x, style: { width: j(m), height: j(y), objectFit: "cover", display: "block", borderRadius: C[b], ...P } }) : /* @__PURE__ */ c("div", { className: x, style: { width: j(m), height: j(y), display: "flex", alignItems: "center", justifyContent: "center", borderRadius: C[b], background: "#f1f5f9", color: "#94a3b8", ...P }, children: /* @__PURE__ */ c(Oe, { size: 28 }) });
}
function _r({ value: h = 0, max: d = 100, color: m = "primary", className: y = "" }) {
  const b = Math.min(100, Math.max(0, Number(h) / (Number(d) || 100) * 100));
  return /* @__PURE__ */ c("div", { className: y, style: { width: "100%", height: 8, overflow: "hidden", borderRadius: 9999, background: "#e2e8f0" }, children: /* @__PURE__ */ c("div", { style: { width: `${b}%`, height: "100%", borderRadius: 9999, background: m === "success" ? "#22c55e" : m === "warning" ? "#f59e0b" : m === "destructive" ? "#ef4444" : G.accent } }) });
}
function Rr({ value: h, max: d = 5, className: m = "" }) {
  return h == null || !Number.isFinite(Number(h)) ? null : /* @__PURE__ */ c("div", { className: m, style: { display: "flex", gap: 3 }, children: Array.from({ length: Number(d) }).map((y, b) => /* @__PURE__ */ c("span", { style: { color: b < Math.round(Number(h)) ? "#f59e0b" : "#cbd5e1" }, children: /* @__PURE__ */ c(Tt, { size: 13 }) }, b)) });
}
function Ur({ src: h, name: d, size: m = "md", className: y = "" }) {
  const b = m === "sm" ? 24 : m === "lg" ? 40 : 32, x = d ? d.split(" ").map((P) => P[0]).slice(0, 2).join("").toUpperCase() : "?";
  return /* @__PURE__ */ c("div", { className: y, style: { width: b, height: b, borderRadius: 9999, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, background: "#e2e8f0", color: "#334155", fontSize: 11, fontWeight: 700 }, children: h ? /* @__PURE__ */ c("img", { src: h, alt: d || "Avatar", style: { width: "100%", height: "100%", objectFit: "cover" } }) : x });
}
function zr({ label: h, placeholder: d, value: m, name: y, onInput: b, options: x, type: P = "text", rows: C = 3, className: j = "" }) {
  const T = { width: "100%", boxSizing: "border-box", border: `1px solid ${G.border}`, borderRadius: 8, padding: "7px 10px", background: G.surface, color: G.foreground, fontSize: 12, outline: "none" };
  return /* @__PURE__ */ c("label", { className: j, style: { display: "flex", flexDirection: "column", width: "100%", gap: 4, color: G.muted, fontSize: 11, fontWeight: 600 }, children: [
    h,
    Array.isArray(x) && x.every((v) => typeof v == "string") ? /* @__PURE__ */ c("select", { name: y, onInput: b, defaultValue: "", style: T, children: [
      /* @__PURE__ */ c("option", { value: "", disabled: !0, children: "Odaberite" }),
      x.map((v) => /* @__PURE__ */ c("option", { value: v, children: v }, v))
    ] }) : P === "textarea" ? /* @__PURE__ */ c("textarea", { name: y, onInput: b, defaultValue: m, placeholder: d, rows: C, style: { ...T, resize: "vertical" } }) : /* @__PURE__ */ c("input", { name: y, onInput: b, type: P, defaultValue: m, placeholder: d, style: T })
  ] });
}
function $r({ bars: h = [], height: d = 115, className: m = "" }) {
  const y = h.map((x) => Number(x.value || 0)), b = Math.max(...y, 1);
  return /* @__PURE__ */ c("div", { className: m, style: { display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 6, width: "100%", height: d }, children: h.map((x, P) => {
    const C = x.height ?? x.h, j = C !== void 0 ? typeof C == "number" ? `${C}px` : C : `${Math.max(8, Number(x.value || 0) / b * Math.max(40, Number(d) - 24))}px`;
    return /* @__PURE__ */ c("div", { style: { display: "flex", flex: 1, height: "100%", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", gap: 6 }, children: [
      /* @__PURE__ */ c("div", { title: x.label || x.day, style: { width: "100%", minHeight: 6, height: j, borderRadius: 6, background: G.accent } }),
      /* @__PURE__ */ c("span", { style: { color: G.muted, fontSize: 10, fontWeight: 600 }, children: x.label || x.day })
    ] }, x.id ?? P);
  }) });
}
function Vr({ items: h = [], className: d = "" }) {
  return /* @__PURE__ */ c("div", { className: d, style: { display: "flex", flexDirection: "column", width: "100%" }, children: h.map((m, y) => {
    const b = !!(m.complete || m.completed), x = !!m.current;
    return /* @__PURE__ */ c("div", { style: { display: "flex", alignItems: "stretch", gap: 10 }, children: [
      /* @__PURE__ */ c("div", { style: { display: "flex", flexDirection: "column", alignItems: "center" }, children: [
        /* @__PURE__ */ c("div", { style: { width: 24, height: 24, borderRadius: 9999, display: "flex", alignItems: "center", justifyContent: "center", background: b ? "#dcfce7" : x ? "#e0f2fe" : "#f1f5f9", color: b ? "#166534" : x ? "#0369a1" : "#94a3b8" }, children: /* @__PURE__ */ c(At, { name: m.icon || (b ? "check" : x ? "clock" : "circle"), size: "xs" }) }),
        y < h.length - 1 ? /* @__PURE__ */ c("div", { style: { width: 2, minHeight: 18, flex: 1, margin: "2px 0", background: b ? "#86efac" : "#e2e8f0" } }) : null
      ] }),
      /* @__PURE__ */ c("div", { style: { flex: 1, minWidth: 0, paddingBottom: y < h.length - 1 ? 12 : 2 }, children: [
        /* @__PURE__ */ c("div", { style: { color: G.foreground, fontSize: 12, lineHeight: 1.3, fontWeight: x ? 700 : 500 }, children: m.label }),
        m.detail ? /* @__PURE__ */ c("div", { style: { color: G.muted, fontSize: 11, marginTop: 2 }, children: m.detail }) : null
      ] })
    ] }, m.id ?? y);
  }) });
}
const qr = { Card: Cr, Row: vr, Col: Ir, Box: Nr, Title: kr, Text: Er, Caption: jr, Badge: Lr, Divider: Dr, Icon: At, Button: Fr, Image: Br, ProgressBar: _r, Rating: Rr, Avatar: Ur, Input: zr, BarChart: $r, Timeline: Vr };
function Hr({ template: h, data: d = {}, onAction: m, onInputChange: y }) {
  try {
    const b = Wr(h, d, { onAction: m, onInputChange: y }), x = /<Card\b/.test(h);
    return /* @__PURE__ */ c("div", { className: `dynamic-jsx-widget ${x ? "" : "pitaj-inline-widget-card"}`.trim(), children: b });
  } catch (b) {
    return /* @__PURE__ */ c("div", { className: "pitaj-inline-widget-card", style: { borderColor: "#fecaca", background: "#fff7f7", color: "#991b1b", fontSize: 12, lineHeight: 1.4 }, children: [
      /* @__PURE__ */ c("strong", { style: { display: "block", marginBottom: 4 }, children: "Widget se ne može prikazati" }),
      /* @__PURE__ */ c("span", { children: b instanceof Error ? b.message : "Neispravan JSX template." })
    ] });
  }
}
function Wr(h, d, m) {
  if (!h.trim()) return null;
  const b = Sr.parse(`<>${h.trim()}</>`, { sourceType: "module", plugins: ["jsx", "typescript"] }).program.body[0];
  if (!b || b.type !== "ExpressionStatement") throw new Error("Template mora biti JSX izraz.");
  return J(b.expression, d, m);
}
function J(h, d, m) {
  var y, b;
  if (!h) return null;
  switch (h.type) {
    case "JSXElement": {
      const x = Xr(h.openingElement.name), P = qr[x];
      if (!P) throw new Error(`Komponenta <${x}> nije podržana.`);
      const C = {};
      for (const T of h.openingElement.attributes)
        if (T.type === "JSXAttribute" && (C[T.name.name] = Jr(T.value, d, m)), T.type === "JSXSpreadAttribute") {
          const v = J(T.argument, d, m);
          v && typeof v == "object" && Object.assign(C, v);
        }
      if (x === "Input" && typeof C.name == "string" && /^[a-zA-Z][a-zA-Z0-9_]{0,63}$/.test(C.name)) {
        const T = C.name;
        C.onInput = (v) => {
          var L;
          return (L = m.onInputChange) == null ? void 0 : L.call(m, T, v.currentTarget.value);
        };
      }
      if (x === "Button" && C.action && m.onAction) {
        const T = C.onClick;
        C.onClick = () => {
          var v;
          T == null || T(), (v = m.onAction) == null || v.call(m, String(C.action));
        };
      }
      const j = Ls(h.children, d, m);
      return Is(P, C, ...j);
    }
    case "JSXFragment":
      return Is(Pt, null, ...Ls(h.children, d, m));
    case "JSXText":
      return h.value.trim() ? h.value.replace(/\s+/g, " ") : null;
    case "JSXExpressionContainer":
      return h.expression.type === "JSXEmptyExpression" ? null : J(h.expression, d, m);
    case "Identifier":
      return h.name === "undefined" ? void 0 : d[h.name];
    case "StringLiteral":
    case "NumericLiteral":
    case "BooleanLiteral":
      return h.value;
    case "NullLiteral":
      return null;
    case "TemplateLiteral":
      return h.quasis.reduce((x, P, C) => x + P.value.cooked + (h.expressions[C] ? String(J(h.expressions[C], d, m) ?? "") : ""), "");
    case "MemberExpression": {
      const x = J(h.object, d, m);
      if (x == null) return;
      const P = h.computed ? J(h.property, d, m) : h.property.name;
      if (P === "__proto__" || P === "prototype" || P === "constructor") throw new Error("Nedozvoljen pristup podatku.");
      return x[P];
    }
    case "ObjectExpression": {
      const x = {};
      for (const P of h.properties) {
        if (P.type !== "ObjectProperty") continue;
        const C = P.key.type === "Identifier" && !P.computed ? P.key.name : J(P.key, d, m);
        x[C] = J(P.value, d, m);
      }
      return x;
    }
    case "ArrayExpression":
      return h.elements.map((x) => J(x, d, m));
    case "ConditionalExpression":
      return J(h.test, d, m) ? J(h.consequent, d, m) : J(h.alternate, d, m);
    case "LogicalExpression": {
      const x = J(h.left, d, m);
      return h.operator === "&&" ? x && J(h.right, d, m) : h.operator === "||" ? x || J(h.right, d, m) : h.operator === "??" ? x ?? J(h.right, d, m) : null;
    }
    case "BinaryExpression":
      return Kr(h.operator, J(h.left, d, m), J(h.right, d, m));
    case "UnaryExpression": {
      const x = J(h.argument, d, m);
      return h.operator === "!" ? !x : h.operator === "-" ? -x : h.operator === "+" ? +x : x;
    }
    case "CallExpression": {
      if (h.callee.type !== "MemberExpression" || h.callee.computed || h.callee.property.name !== "map") throw new Error("Dozvoljeno je samo mapiranje nizova.");
      const x = J(h.callee.object, d, m);
      if (!Array.isArray(x)) return [];
      const P = h.arguments[0];
      if (!P || P.type !== "ArrowFunctionExpression") throw new Error("Neispravna map funkcija.");
      const C = ((y = P.params[0]) == null ? void 0 : y.name) || "item", j = ((b = P.params[1]) == null ? void 0 : b.name) || "index";
      return x.map((T, v) => J(P.body, { ...d, [C]: T, [j]: v }, m));
    }
    case "ParenthesizedExpression":
      return J(h.expression, d, m);
    default:
      throw new Error(`Izraz ${h.type} nije podržan.`);
  }
}
function Kr(h, d, m) {
  switch (h) {
    case "+":
      return d + m;
    case "-":
      return d - m;
    case "*":
      return d * m;
    case "/":
      return d / m;
    case "%":
      return d % m;
    case "===":
      return d === m;
    case "!==":
      return d !== m;
    case "==":
      return d == m;
    case "!=":
      return d != m;
    case "<":
      return d < m;
    case ">":
      return d > m;
    case "<=":
      return d <= m;
    case ">=":
      return d >= m;
    default:
      throw new Error(`Operator ${h} nije podržan.`);
  }
}
function Jr(h, d, m) {
  return h ? h.type === "StringLiteral" ? h.value : h.type === "JSXExpressionContainer" ? J(h.expression, d, m) : null : !0;
}
function Ls(h, d, m) {
  const y = [];
  for (const b of h) {
    const x = J(b, d, m);
    x == null || x === !1 || (Array.isArray(x) ? y.push(...x) : y.push(x));
  }
  return y;
}
function Xr(h) {
  if (h.type === "JSXIdentifier") return h.name;
  throw new Error("Podržane su samo direktne DSL komponente.");
}
function bt(h) {
  return (h || "").replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]/gu, "").trim();
}
function Gr(h) {
  const d = bt(h).toLowerCase();
  return d.includes("wi-fi") || d.includes("wifi") || d.includes("internet") ? _s : d.includes("doručak") || d.includes("dorucak") || d.includes("kafa") || d.includes("coffee") ? Bs : d.includes("restoran") || d.includes("hrana") || d.includes("dining") ? hr : d.includes("parking") || d.includes("garaža") || d.includes("garaza") || d.includes("auto") ? ur : d.includes("spa") || d.includes("bazen") || d.includes("wellness") ? pr : d.includes("klima") || d.includes("hlađenje") || d.includes("hladjenje") ? dr : d.includes("teretana") || d.includes("fitness") || d.includes("gym") ? fr : wt;
}
function xa({ widget: h, onAction: d, apiUrl: m, companyId: y, preview: b, conversationId: x, onApiError: P, onWorkflowState: C }) {
  const j = h.type || "custom_html", T = h.config || {}, [v, L] = ee("idle"), [U, Q] = ee(!1), [ie, te] = ee("idle"), [ae, H] = ee(null), [p, W] = ee(null), [K, me] = ee(null), [ve, ne] = ee(() => Date.now()), [he, se] = ee(null), O = JSON.stringify([y, x, h.id, T.function_revision, b]), D = Ce(0), S = Ce(O), ue = S.current === O ? ie : "idle", Ie = S.current === O ? ae : null, oe = (K == null ? void 0 : K.identity) === O ? Math.max(0, Math.ceil((K.until - ve) / 1e3)) : 0, Me = Ce(/* @__PURE__ */ Object.create(null)), ye = Ce(!1), Ne = Ce(null), _ = Ce(null), [Y, pe] = ee("idle"), [re, ke] = ee(null), xe = Ce(C);
  xe.current = C;
  const ge = Ce(P);
  ge.current = P;
  const $ = h.workflow;
  mt(() => (D.current++, S.current = O, ye.current = !1, se(null), te("idle"), W(null), me(null), H(null), Q(!1), Me.current = /* @__PURE__ */ Object.create(null), () => {
    D.current++;
  }), [O]), mt(() => {
    if (!K || K.identity !== O) return;
    const X = () => {
      const Z = Date.now();
      ne(Z), Z >= K.until && me((z) => z === K ? null : z);
    };
    X();
    const M = window.setInterval(X, 1e3);
    return () => window.clearInterval(M);
  }, [K, O]);
  const be = async () => {
    var X, M;
    if (!(!$ || !y || b)) {
      pe("loading");
      try {
        const Z = await lr(y, $.run_id, m, $.display_node_id);
        ke(cr(Z, $, h.id)), pe("ready"), (X = xe.current) == null || X.call(xe, Z);
      } catch (Z) {
        ke(null), pe("error"), (M = ge.current) == null || M.call(ge, Z);
      }
    }
  };
  mt(() => {
    $ && !b && be();
  }, [y, m, b, h.id, $ == null ? void 0 : $.run_id, $ == null ? void 0 : $.display_node_id, $ == null ? void 0 : $.form_revision]);
  const k = async (X) => {
    if (v === "sending" || v === "success") return;
    if (b || !y || !h.id || !x || !/^\d+$/.test(x)) {
      L("error");
      return;
    }
    if ($ && !re) {
      L("error");
      return;
    }
    const M = JSON.stringify(X);
    (!Ne.current || _.current !== M) && (Ne.current = crypto.randomUUID(), _.current = M), L("sending");
    try {
      const Z = (m || window.location.origin).replace(/\/$/, ""), z = await Ds(y, m), Ee = await fetch(`${Z}/api/widget/${encodeURIComponent(y)}/v2/inline-widgets/${h.id}/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json", Authorization: `Bearer ${z}` },
        body: JSON.stringify({
          submission_uuid: Ne.current,
          conversation_id: Number(x),
          payload: X,
          ...$ ? { workflow_run_id: $.run_id, workflow_wait_node: re, form_revision: $.form_revision } : {}
        })
      });
      Ee.ok || await Os(Ee, "Zahtjev nije potvrđen."), L("success"), $ && be();
    } catch (Z) {
      Z instanceof $e && Z.code === "FORM_REVISION_MISMATCH" ? (ke(null), L("changed")) : (L("error"), P == null || P(Z));
    }
  }, B = () => {
    if (T.jsx_template || j === "dynamic_jsx" || j === "ai_builder")
      return /* @__PURE__ */ c(
        Hr,
        {
          template: T.jsx_template || "",
          data: {
            ...Pr(T, (he == null ? void 0 : he.identity) === O ? he.data : {}, !!b),
            ...Array.isArray(T.function_names) && T.function_names.length > 0 ? { function_state: { phase: ue, function_id: Ie } } : {}
          },
          onInputChange: (X, M) => {
            Me.current[X] !== M && (D.current++, ye.current = !1, S.current = O, se(null), te("idle"), W(null), H(null)), Me.current[X] = M;
          },
          onAction: (X) => {
            if (xr(X, T)) {
              const M = gr(X, T);
              if (!M || b || !y || !h.id || !x) {
                Q(!0);
                return;
              }
              if (ye.current || (K == null ? void 0 : K.identity) === O && Date.now() < K.until) return;
              ye.current = !0;
              const Z = ++D.current;
              S.current = O, se(null), W(null), H(M), Q(!1), te("loading"), Tr(y, h.id, M, x, m, br(M, T, Me.current)).then((z) => {
                Z === D.current && (se({ identity: O, data: z }), te("success"));
              }).catch((z) => {
                if (Z !== D.current) return;
                const Ee = z instanceof Es ? "rate_limit" : z instanceof $e ? "api" : "other", Qe = mr(Ee, z instanceof $e ? z.code : void 0, z instanceof $e ? z.status : void 0);
                if (W(Qe), te("error"), z instanceof Es) {
                  const Pe = Date.now();
                  ne(Pe), me({ identity: O, until: yr(Pe, z.retryAfterSeconds) });
                }
                z instanceof $e && ["WIDGET_SESSION_INVALID", "WIDGET_SESSION_REQUIRED", "COUNTRY_BLOCKED", "WIDGET_FORMS_DISABLED"].includes(z.code || "") && (P == null || P(z));
              }).finally(() => {
                Z === D.current && (ye.current = !1);
              });
              return;
            }
            Q(!1), d == null || d(X);
          }
        }
      );
    switch (j) {
      case "action_client":
        return /* @__PURE__ */ c("div", { role: "status", className: "pitaj-inline-widget-card", children: T.client_action_state === "pending" ? "Čekamo odgovor aplikacije…" : T.client_action_state === "success" ? "Aplikacija je prijavila uspjeh." : T.client_action_state === "failed" ? "Aplikacija je prijavila neuspjeh." : T.client_action_state === "timeout" ? "Aplikacija nije odgovorila na vrijeme. Ishod nije poznat." : "Akcija je zatražena. Rezultat nije potvrđen." });
      case "action_link":
        try {
          const X = new URL(String(T.url || ""));
          if (X.protocol !== "https:" || X.username || X.password || typeof T.label != "string" || !T.label.trim()) throw new Error("Invalid link");
          return /* @__PURE__ */ c("a", { className: "pitaj-widget-btn-primary", href: X.href, target: "_blank", rel: "noopener noreferrer", style: { display: "inline-block", textAlign: "center", textDecoration: "none" }, children: T.label });
        } catch {
          return /* @__PURE__ */ c("div", { role: "status", children: "Link trenutno nije dostupan." });
        }
      case "booking":
      case "calendar":
      case "calendly":
      case "cal":
        return /* @__PURE__ */ c(na, { config: T });
      case "api":
      case "api_widget":
        return /* @__PURE__ */ c(oa, { config: T });
      case "order_status":
      case "order_tracking":
      case "shopify_order":
        return /* @__PURE__ */ c(la, { config: T });
      case "book_demo":
        return /* @__PURE__ */ c(Yr, { config: T, onSubmit: k });
      case "products":
        return /* @__PURE__ */ c(Zr, { config: T, onAction: d });
      case "cart":
        return /* @__PURE__ */ c(Qr, { config: T, onAction: d });
      case "usage_chart":
        return !b && (T.metric_value == null || !Array.isArray(T.chart_data) || T.chart_data.length === 0) ? /* @__PURE__ */ c("div", { role: "status", children: "Podaci o potrošnji trenutno nisu dostupni." }) : /* @__PURE__ */ c(ea, { config: T });
      case "upcoming_classes":
        return !b && (!Array.isArray(T.classes) || T.classes.length === 0) ? /* @__PURE__ */ c("div", { role: "status", children: "Trenutno nema dostupnih termina." }) : /* @__PURE__ */ c(ta, { config: T, onAction: d });
      case "hotel_booking":
        return !b && (!T.name || !T.price || !T.location) ? /* @__PURE__ */ c("div", { role: "status", children: "Podaci o smještaju trenutno nisu dostupni." }) : /* @__PURE__ */ c(sa, { config: T, onSubmit: k });
      case "contact":
        return /* @__PURE__ */ c(ia, { config: T, onSubmit: k });
      case "weather":
        return !b && (!T.city || T.temp == null || !T.condition) ? /* @__PURE__ */ c("div", { role: "status", children: "Podaci o vremenu trenutno nisu dostupni." }) : /* @__PURE__ */ c(ra, { config: T });
      case "custom_iframe":
        return /* @__PURE__ */ c(aa, { config: T, title: h.name });
      case "custom_html":
      default:
        return /* @__PURE__ */ c(ca, { config: T, onAction: d });
    }
  };
  return /* @__PURE__ */ c(Pt, { children: [
    /* @__PURE__ */ c("style", { children: wr }),
    v === "success" ? /* @__PURE__ */ c("div", { role: "status", children: "Vaš zahtjev je zaprimljen." }) : /* @__PURE__ */ c("fieldset", { disabled: v === "sending" || ue === "loading" || !!($ && ["book_demo", "contact", "hotel_booking"].includes(j) && !re), style: { border: 0, padding: 0, margin: 0, minWidth: 0 }, children: B() }),
    v === "sending" && /* @__PURE__ */ c("div", { role: "status", children: "Slanje zahtjeva..." }),
    v === "error" && /* @__PURE__ */ c("div", { role: "alert", children: "Zahtjev nije potvrđen. Provjerite vezu i pokušajte ponovo." }),
    v === "changed" && /* @__PURE__ */ c("div", { role: "alert", children: [
      "Forma je promijenjena. Osvježite je i provjerite podatke prije slanja. ",
      /* @__PURE__ */ c("button", { type: "button", onClick: () => {
        L("idle"), be();
      }, children: "Osvježi formu" })
    ] }),
    U && /* @__PURE__ */ c("div", { role: "alert", children: "Ova funkcija trenutno nije povezana. Pokušajte ponovo kasnije." }),
    ue === "loading" && /* @__PURE__ */ c("div", { role: "status", children: "Učitavanje podataka..." }),
    ue === "success" && /* @__PURE__ */ c("div", { role: "status", children: "Podaci su ažurirani." }),
    oe > 0 ? /* @__PURE__ */ c("div", { role: "status", children: [
      "Previše poziva. Pokušajte za ",
      oe,
      "s."
    ] }) : ue === "error" && /* @__PURE__ */ c("div", { role: "alert", children: p === "input" ? "Odaberite dozvoljene vrijednosti i pokušajte ponovo." : p === "unavailable" ? "Ova funkcija trenutno nije dostupna." : p === "rate_limit" ? "Možete ponovo pokušati poziv funkcije." : "Podatke nije moguće učitati. Pokušajte ponovo." }),
    $ && Y === "loading" && /* @__PURE__ */ c("div", { role: "status", children: "Provjeravamo sljedeći korak..." }),
    $ && Y === "error" && /* @__PURE__ */ c("div", { role: "alert", children: [
      "Nije moguće provjeriti korak. ",
      /* @__PURE__ */ c("button", { type: "button", onClick: () => void be(), children: "Pokušaj ponovo" })
    ] }),
    $ && Y === "ready" && !re && v !== "success" && ["book_demo", "contact", "hotel_booking"].includes(j) && /* @__PURE__ */ c("div", { role: "status", children: "Ova forma nije aktivna u trenutnom koraku procedure." })
  ] });
}
function St({
  fields: h,
  values: d,
  onChange: m
}) {
  return /* @__PURE__ */ c(Pt, { children: h.map((y, b) => {
    const x = d[y.key] ?? (y.type === "checkbox" ? !1 : ""), P = y.key || `field_${b}`;
    if (y.type === "textarea")
      return /* @__PURE__ */ c("div", { className: "pitaj-widget-field", children: [
        /* @__PURE__ */ c("label", { children: [
          y.label,
          " ",
          y.required && /* @__PURE__ */ c("span", { style: { color: "#ef4444" }, children: "*" })
        ] }),
        /* @__PURE__ */ c(
          "textarea",
          {
            required: y.required,
            rows: 3,
            placeholder: y.placeholder || "",
            value: x,
            onInput: (T) => m(P, T.target.value)
          }
        )
      ] }, P);
    if (y.type === "checkbox")
      return /* @__PURE__ */ c("div", { className: "pitaj-widget-checkbox-row", children: [
        /* @__PURE__ */ c(
          "input",
          {
            id: `widget-chk-${P}-${b}`,
            type: "checkbox",
            required: y.required,
            checked: !!x,
            onChange: (T) => m(P, T.target.checked)
          }
        ),
        /* @__PURE__ */ c("label", { htmlFor: `widget-chk-${P}-${b}`, children: [
          y.label,
          " ",
          y.required && /* @__PURE__ */ c("span", { style: { color: "#ef4444" }, children: "*" })
        ] })
      ] }, P);
    if (y.type === "select")
      return /* @__PURE__ */ c("div", { className: "pitaj-widget-field", children: [
        /* @__PURE__ */ c("label", { children: [
          y.label,
          " ",
          y.required && /* @__PURE__ */ c("span", { style: { color: "#ef4444" }, children: "*" })
        ] }),
        /* @__PURE__ */ c(
          "select",
          {
            required: y.required,
            value: x,
            onChange: (T) => m(P, T.target.value),
            children: [
              /* @__PURE__ */ c("option", { value: "", children: y.placeholder || "Odaberite..." }),
              (y.options || []).map((T, v) => /* @__PURE__ */ c("option", { value: T, children: T }, v))
            ]
          }
        )
      ] }, P);
    const C = y.type === "phone" ? "tel" : y.type === "email" ? "email" : y.type === "date" ? "date" : y.type === "number" ? "number" : "text";
    let j;
    if (y.type === "date") {
      const T = P.toLowerCase();
      if (T.includes("out") || T.includes("odjav") || T.includes("end") || T.includes("do")) {
        const v = d.check_in || d.start || d.od;
        v && typeof v == "string" && (j = v);
      }
    }
    return /* @__PURE__ */ c("div", { className: "pitaj-widget-field", children: [
      /* @__PURE__ */ c("label", { children: [
        y.label,
        " ",
        y.required && /* @__PURE__ */ c("span", { style: { color: "#ef4444" }, children: "*" })
      ] }),
      /* @__PURE__ */ c(
        "input",
        {
          type: C,
          required: y.required,
          placeholder: y.placeholder || "",
          min: j,
          value: x,
          onInput: (T) => m(P, T.target.value)
        }
      )
    ] }, P);
  }) });
}
function Yr({ config: h, onSubmit: d }) {
  const m = [
    { key: "name", type: "text", label: "Ime i prezime", placeholder: "Petar Petrović", required: !0 },
    { key: "phone", type: "phone", label: "Broj telefona", placeholder: "+387 61 123 456", required: !1 },
    { key: "email", type: "email", label: "Poslovni email", placeholder: "petar@kompanija.ba", required: !0 }
  ], y = Array.isArray(h.fields) && h.fields.length > 0 ? h.fields : m, [b, x] = ee({}), P = h.title || "Razgovarajte sa prodajom", C = h.subtitle || "Recite nam više o svojoj kompaniji i stupićemo u kontakt.";
  return /* @__PURE__ */ c("div", { className: "pitaj-inline-widget-card", children: [
    /* @__PURE__ */ c("div", { className: "pitaj-widget-header", children: [
      /* @__PURE__ */ c("div", { className: "pitaj-widget-title", children: P }),
      /* @__PURE__ */ c("div", { className: "pitaj-widget-subtitle", children: C })
    ] }),
    /* @__PURE__ */ c("form", { onSubmit: (v) => {
      v.preventDefault();
      for (const L of y)
        if (L.required) {
          const U = b[L.key];
          if (L.type === "checkbox" && !U || L.type !== "checkbox" && (!U || !String(U).trim())) return;
        }
      d(Object.fromEntries(y.filter((L) => b[L.key] !== void 0).map((L) => [L.key, String(b[L.key])])));
    }, className: "pitaj-widget-form", children: [
      /* @__PURE__ */ c(St, { fields: y, values: b, onChange: (v, L) => {
        x((U) => ({ ...U, [v]: L }));
      } }),
      /* @__PURE__ */ c("button", { type: "submit", className: "pitaj-widget-btn-primary", children: h.submit_label || "Zakaži razgovor" })
    ] })
  ] });
}
function Zr({ config: h, onAction: d }) {
  var L, U, Q, ie, te, ae, H, p, W, K, me, ve, ne, he;
  const [m, y] = ee(0), b = ((L = h.data) == null ? void 0 : L.products) || ((U = h.data) == null ? void 0 : U.items) || h.products || h.items || ((Q = h.data) != null && Q.title || (ie = h.data) != null && ie.name || h.name ? [
    {
      id: ((te = h.data) == null ? void 0 : te.id) || 1,
      name: ((ae = h.data) == null ? void 0 : ae.title) || ((H = h.data) == null ? void 0 : H.name) || h.name,
      subtitle: ((p = h.data) == null ? void 0 : p.subtitle) || h.subtitle || "",
      price: ((W = h.data) == null ? void 0 : W.price) || h.price || "Cijena na upit",
      image: ((K = h.data) == null ? void 0 : K.image) || ((me = h.data) == null ? void 0 : me.image_url) || h.image || "",
      addToCartUrl: ((ve = h.data) == null ? void 0 : ve.addToCartUrl) || ((ne = h.data) == null ? void 0 : ne.add_to_cart_url) || h.addToCartUrl || ""
    }
  ] : []), x = Array.isArray(b) ? b : [];
  if (x.length === 0) return /* @__PURE__ */ c("div", { role: "status", children: "Proizvodi trenutno nisu dostupni." });
  const P = x[m] || x[0], C = P.image || P.image_url || P.imageUrl || P.featured_image || (Array.isArray(P.images) ? P.images[0] : ""), j = () => {
    y((se) => (se + 1) % x.length);
  }, T = () => {
    y((se) => (se - 1 + x.length) % x.length);
  }, v = () => {
    if (P.addToCartUrl) {
      window.open(P.addToCartUrl, "_blank", "noopener,noreferrer");
      return;
    }
    d == null || d(`Zanima me proizvod: ${P.name} (${P.price})`);
  };
  return /* @__PURE__ */ c("div", { className: "pitaj-inline-widget-card products-widget", children: [
    /* @__PURE__ */ c("div", { className: "pitaj-widget-bar", children: [
      /* @__PURE__ */ c("span", { className: "pitaj-widget-badge-icon", children: /* @__PURE__ */ c(Oe, { size: 14 }) }),
      /* @__PURE__ */ c("span", { className: "pitaj-widget-bar-title", children: h.title || ((he = h.data) == null ? void 0 : he.category) || "Izbor artikala" }),
      x.length > 1 && /* @__PURE__ */ c("span", { className: "pitaj-widget-counter", children: [
        m + 1,
        " / ",
        x.length
      ] })
    ] }),
    /* @__PURE__ */ c("div", { className: "pitaj-product-card", children: [
      /* @__PURE__ */ c("div", { className: "pitaj-product-image-wrap", children: [
        C ? /* @__PURE__ */ c(
          "img",
          {
            src: C,
            alt: P.name || "Proizvod",
            className: "pitaj-product-img",
            loading: "lazy",
            referrerPolicy: "no-referrer",
            onError: (se) => {
              se.currentTarget.style.display = "none";
            }
          }
        ) : /* @__PURE__ */ c("div", { style: "width: 100%; height: 140px; background: #f1f5f9; display: flex; align-items: center; justify-content: center; border-radius: 10px; color: #94a3b8;", children: /* @__PURE__ */ c(Oe, { size: 32 }) }),
        x.length > 1 && /* @__PURE__ */ c("div", { className: "pitaj-carousel-controls", children: [
          /* @__PURE__ */ c("button", { type: "button", onClick: T, "aria-label": "Prethodni", className: "pitaj-carousel-btn", children: "‹" }),
          /* @__PURE__ */ c("button", { type: "button", onClick: j, "aria-label": "Sljedeći", className: "pitaj-carousel-btn", children: "›" })
        ] })
      ] }),
      /* @__PURE__ */ c("div", { className: "pitaj-product-info", children: [
        /* @__PURE__ */ c("div", { className: "pitaj-product-name", children: P.name || P.title }),
        P.subtitle && /* @__PURE__ */ c("div", { className: "pitaj-product-sub", children: P.subtitle }),
        /* @__PURE__ */ c("div", { className: "pitaj-product-price", children: P.price }),
        P.addToCartUrl ? /* @__PURE__ */ c(
          "a",
          {
            href: P.addToCartUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "pitaj-widget-btn-primary pitaj-btn-select",
            style: "text-align: center; text-decoration: none; display: inline-block;",
            children: "Naruči / Kupi odmah"
          }
        ) : /* @__PURE__ */ c("button", { type: "button", onClick: v, className: "pitaj-widget-btn-primary pitaj-btn-select", children: "Zatraži ponudu" })
      ] })
    ] })
  ] });
}
function Qr({ config: h, onAction: d }) {
  var P, C, j;
  const m = ((P = h.data) == null ? void 0 : P.items) || ((C = h.data) == null ? void 0 : C.products) || h.items || h.products, y = Array.isArray(m) ? m : [], b = ((j = h.data) == null ? void 0 : j.total) ?? h.total;
  if (y.length === 0) return /* @__PURE__ */ c("div", { role: "status", children: "Podaci o korpi trenutno nisu dostupni." });
  const x = () => {
    var T, v;
    if ((T = h.data) != null && T.checkoutUrl || h.checkoutUrl) {
      window.open(((v = h.data) == null ? void 0 : v.checkoutUrl) || h.checkoutUrl, "_blank", "noopener,noreferrer");
      return;
    }
    d == null || d(`Želim dovršiti narudžbu iz korpe${b != null ? ` (Ukupno: ${b})` : ""}`);
  };
  return /* @__PURE__ */ c("div", { className: "pitaj-inline-widget-card cart-widget", children: [
    /* @__PURE__ */ c("div", { className: "pitaj-widget-bar", children: [
      /* @__PURE__ */ c("span", { className: "pitaj-widget-badge-icon", children: /* @__PURE__ */ c(gt, { size: 14 }) }),
      /* @__PURE__ */ c("span", { className: "pitaj-widget-bar-title", children: [
        y.length,
        " stavke u korpi"
      ] })
    ] }),
    /* @__PURE__ */ c("div", { className: "pitaj-cart-items-list", children: y.map((T, v) => {
      const L = T.image || T.image_url || T.imageUrl || T.featured_image || (Array.isArray(T.images) ? T.images[0] : "");
      return /* @__PURE__ */ c("div", { className: "pitaj-cart-item-row", children: [
        L ? /* @__PURE__ */ c(
          "img",
          {
            src: L,
            alt: T.name,
            className: "pitaj-cart-thumb",
            loading: "lazy",
            referrerPolicy: "no-referrer",
            onError: (U) => {
              U.currentTarget.style.display = "none";
            }
          }
        ) : /* @__PURE__ */ c("div", { style: "width: 40px; height: 40px; border-radius: 6px; background: #f1f5f9; display: flex; align-items: center; justify-content: center; color: #94a3b8; flex-shrink: 0;", children: /* @__PURE__ */ c(Oe, { size: 18 }) }),
        /* @__PURE__ */ c("div", { className: "pitaj-cart-details", children: [
          /* @__PURE__ */ c("div", { className: "pitaj-cart-item-name", children: T.name }),
          /* @__PURE__ */ c("div", { className: "pitaj-cart-item-sub", children: T.subtitle })
        ] }),
        /* @__PURE__ */ c("div", { className: "pitaj-cart-item-price", children: T.price })
      ] }, T.id || v);
    }) }),
    /* @__PURE__ */ c("div", { className: "pitaj-cart-divider" }),
    b != null && /* @__PURE__ */ c("div", { className: "pitaj-cart-summary", children: [
      /* @__PURE__ */ c("span", { className: "pitaj-cart-total-label", children: "Ukupno za plaćanje:" }),
      /* @__PURE__ */ c("span", { className: "pitaj-cart-total-val", children: b })
    ] }),
    /* @__PURE__ */ c("button", { type: "button", onClick: x, className: "pitaj-widget-btn-primary", children: "Završi narudžbu" })
  ] });
}
function ea({ config: h }) {
  const d = h.metric_label || "Ukupno potrošeno kredita", m = h.metric_value ?? "2,214", y = [
    { day: "N", val: 75 },
    { day: "P", val: 40 },
    { day: "U", val: 65 },
    { day: "S", val: 85 },
    { day: "Č", val: 25 },
    { day: "P", val: 70 },
    { day: "S", val: 95 }
  ], b = Array.isArray(h.chart_data) && h.chart_data.length > 0 ? h.chart_data : y;
  return /* @__PURE__ */ c("div", { className: "pitaj-inline-widget-card chart-widget", children: [
    /* @__PURE__ */ c("div", { className: "pitaj-widget-bar", children: [
      /* @__PURE__ */ c("span", { className: "pitaj-widget-badge-icon", children: /* @__PURE__ */ c(yt, { size: 14 }) }),
      /* @__PURE__ */ c("span", { className: "pitaj-widget-bar-title", children: h.title || "Potrošnja" })
    ] }),
    /* @__PURE__ */ c("div", { className: "pitaj-chart-body", children: [
      /* @__PURE__ */ c("div", { className: "pitaj-chart-label", children: d }),
      /* @__PURE__ */ c("div", { className: "pitaj-chart-big-number", children: m }),
      /* @__PURE__ */ c("div", { className: "pitaj-bar-chart-container", children: b.map((x, P) => /* @__PURE__ */ c("div", { className: "pitaj-bar-col", children: [
        /* @__PURE__ */ c("div", { className: "pitaj-bar-track", children: /* @__PURE__ */ c(
          "div",
          {
            className: "pitaj-bar-fill",
            style: { height: `${Math.max(10, Math.min(100, x.val))}%` },
            title: `${x.day}: ${x.val}%`
          }
        ) }),
        /* @__PURE__ */ c("span", { className: "pitaj-bar-day", children: x.day })
      ] }, P)) })
    ] })
  ] });
}
function ta({ config: h, onAction: d }) {
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
  ], y = Array.isArray(h.classes) && h.classes.length > 0 ? h.classes : m, b = (x) => {
    d == null || d(`Želim rezervisati termin za: ${x.title} (${x.time})`);
  };
  return /* @__PURE__ */ c("div", { className: "pitaj-inline-widget-card classes-widget", children: [
    /* @__PURE__ */ c("div", { className: "pitaj-widget-bar", children: [
      /* @__PURE__ */ c("span", { className: "pitaj-widget-badge-icon", children: /* @__PURE__ */ c(Ye, { size: 14 }) }),
      /* @__PURE__ */ c("span", { className: "pitaj-widget-bar-title", children: h.title || "Nadolazeći termini" })
    ] }),
    /* @__PURE__ */ c("div", { className: "pitaj-classes-list", children: y.map((x, P) => {
      const C = x.id ?? P;
      return /* @__PURE__ */ c("div", { className: "pitaj-class-item", children: [
        /* @__PURE__ */ c("img", { src: x.image, alt: x.title, className: "pitaj-class-thumb" }),
        /* @__PURE__ */ c("div", { className: "pitaj-class-info", children: [
          /* @__PURE__ */ c("div", { className: "pitaj-class-header", children: [
            /* @__PURE__ */ c("span", { className: "pitaj-class-title", children: x.title }),
            x.level && /* @__PURE__ */ c("span", { className: `pitaj-level-badge level-${x.levelColor || "green"}`, children: x.level })
          ] }),
          /* @__PURE__ */ c("div", { className: "pitaj-class-time", children: x.time }),
          /* @__PURE__ */ c("div", { className: "pitaj-class-instructor", children: x.instructor })
        ] }),
        /* @__PURE__ */ c(
          "button",
          {
            type: "button",
            onClick: () => b(x),
            className: "pitaj-book-btn",
            children: "Pošalji upit"
          }
        )
      ] }, C);
    }) })
  ] });
}
function sa({ config: h, onSubmit: d }) {
  const [m, y] = ee({}), [b, x] = ee(!1), P = h.name || "Hotel Dark Moon", C = h.price ?? "220 KM / noć", j = h.location || "Sarajevo, Bosna i Hercegovina", T = h.rating, v = h.image, U = (Array.isArray(h.amenities) ? h.amenities : []).map(bt), Q = [
    { key: "check_in", type: "date", label: "Datum dolaska (Check-in)", required: !0 },
    { key: "check_out", type: "date", label: "Datum odjave (Check-out)", required: !0 },
    { key: "guests", type: "select", label: "Broj gostiju", options: ["1 odrasla osoba", "2 odrasle osobe", "3 odrasle osobe", "Porodica (4+)"], required: !0 },
    { key: "name", type: "text", label: "Ime i prezime", placeholder: "Vaše ime", required: !0 },
    { key: "phone", type: "phone", label: "Broj telefona", placeholder: "+387 61 123 456", required: !1 }
  ], ie = Array.isArray(h.fields) ? h.fields : Q, te = (H, p) => {
    x(!1), y((W) => ({ ...W, [H]: p }));
  }, ae = (H) => {
    if (H.preventDefault(), ie.length > 0) {
      for (const W of ie)
        if (W.required) {
          const K = m[W.key];
          if (W.type === "checkbox" && !K || W.type !== "checkbox" && (!K || !String(K).trim())) return;
        }
    }
    const p = { ...m };
    if (p.check_in && p.check_out && p.check_out < p.check_in) {
      x(!0);
      return;
    }
    d(Object.fromEntries(ie.filter((W) => p[W.key] !== void 0).map((W) => [W.key, String(p[W.key])])));
  };
  return /* @__PURE__ */ c("div", { className: "pitaj-inline-widget-card hotel-widget", children: [
    /* @__PURE__ */ c("div", { className: "pitaj-hotel-image-wrap", children: [
      v && /* @__PURE__ */ c("img", { src: v, alt: P, className: "pitaj-hotel-img" }),
      /* @__PURE__ */ c("div", { className: "pitaj-hotel-badge-price", children: C })
    ] }),
    /* @__PURE__ */ c("div", { className: "pitaj-hotel-content", children: [
      /* @__PURE__ */ c("div", { className: "pitaj-hotel-title-row", children: /* @__PURE__ */ c("div", { className: "pitaj-hotel-name", children: P }) }),
      /* @__PURE__ */ c("div", { className: "pitaj-hotel-meta", children: [
        /* @__PURE__ */ c("span", { className: "pitaj-meta-item", children: [
          /* @__PURE__ */ c(xt, { size: 12, className: "pitaj-meta-icon" }),
          /* @__PURE__ */ c("span", { children: j })
        ] }),
        T && /* @__PURE__ */ c("span", { className: "pitaj-meta-item pitaj-rating", children: [
          /* @__PURE__ */ c(Tt, { size: 11, className: "pitaj-star-icon" }),
          /* @__PURE__ */ c("span", { children: T })
        ] })
      ] }),
      U.length > 0 && /* @__PURE__ */ c("div", { className: "pitaj-amenities-row", children: U.map((H, p) => {
        const W = bt(H), K = Gr(W);
        return /* @__PURE__ */ c("span", { className: "pitaj-amenity-chip", children: [
          /* @__PURE__ */ c(K, { size: 12, className: "pitaj-amenity-icon" }),
          /* @__PURE__ */ c("span", { children: W })
        ] }, p);
      }) }),
      /* @__PURE__ */ c("form", { onSubmit: ae, className: "pitaj-widget-form", children: [
        b && /* @__PURE__ */ c("div", { role: "alert", children: "Datum odjave mora biti nakon datuma dolaska." }),
        ie.length > 0 && /* @__PURE__ */ c("div", { className: "pitaj-hotel-booking-section", children: [
          /* @__PURE__ */ c("div", { className: "pitaj-hotel-booking-title", children: "Rezerviši smještaj" }),
          /* @__PURE__ */ c(St, { fields: ie, values: m, onChange: te })
        ] }),
        /* @__PURE__ */ c("button", { type: "submit", className: "pitaj-widget-btn-primary", children: h.submit_label || "Pošalji upit za rezervaciju" })
      ] })
    ] })
  ] });
}
function ia({ config: h, onSubmit: d }) {
  const m = [
    { key: "name", type: "text", label: "Ime i prezime", placeholder: "Vaše ime", required: !0 },
    { key: "email", type: "email", label: "Email adresa", placeholder: "vas.email@example.com", required: !0 },
    { key: "message", type: "textarea", label: "Poruka", placeholder: "Kako vam možemo pomoći?", required: !0 }
  ], y = Array.isArray(h.fields) && h.fields.length > 0 ? h.fields : m, [b, x] = ee({}), P = h.title || "Kontaktirajte nas", C = h.subtitle || "Rado ćemo odgovoriti na vaša pitanja";
  return /* @__PURE__ */ c("div", { className: "pitaj-inline-widget-card contact-widget", children: [
    /* @__PURE__ */ c("div", { className: "pitaj-widget-header", children: [
      /* @__PURE__ */ c("div", { className: "pitaj-widget-title", children: P }),
      /* @__PURE__ */ c("div", { className: "pitaj-widget-subtitle", children: C })
    ] }),
    /* @__PURE__ */ c("form", { onSubmit: (v) => {
      v.preventDefault();
      for (const L of y)
        if (L.required) {
          const U = b[L.key];
          if (L.type === "checkbox" && !U || L.type !== "checkbox" && (!U || !String(U).trim())) return;
        }
      d(Object.fromEntries(y.filter((L) => b[L.key] !== void 0).map((L) => [L.key, String(b[L.key])])));
    }, className: "pitaj-widget-form", children: [
      /* @__PURE__ */ c(St, { fields: y, values: b, onChange: (v, L) => {
        x((U) => ({ ...U, [v]: L }));
      } }),
      /* @__PURE__ */ c("button", { type: "submit", className: "pitaj-widget-btn-primary", children: h.submit_label || "Pošalji poruku" })
    ] })
  ] });
}
function ra({ config: h }) {
  const d = h.city || "Sarajevo", m = h.temp ?? "22°C", y = h.condition || "Sunčano i toplo", b = h.description || "";
  return /* @__PURE__ */ c("div", { className: "pitaj-inline-widget-card weather-widget", children: [
    /* @__PURE__ */ c("div", { className: "pitaj-weather-top", children: [
      /* @__PURE__ */ c(Ms, { size: 32, className: "pitaj-weather-svg" }),
      /* @__PURE__ */ c("span", { className: "pitaj-weather-temp", children: m })
    ] }),
    /* @__PURE__ */ c("div", { className: "pitaj-weather-city", children: d }),
    /* @__PURE__ */ c("div", { className: "pitaj-weather-cond", children: y }),
    /* @__PURE__ */ c("div", { className: "pitaj-weather-desc", children: b })
  ] });
}
function aa({ config: h, title: d }) {
  const [m, y] = ee(!0), b = h.url || "https://calendly.com", x = h.height || 380;
  return /* @__PURE__ */ c("div", { className: "pitaj-inline-widget-card iframe-widget", children: [
    /* @__PURE__ */ c("div", { className: "pitaj-widget-bar", children: [
      /* @__PURE__ */ c("span", { className: "pitaj-widget-badge-icon", children: /* @__PURE__ */ c(Fs, { size: 14 }) }),
      /* @__PURE__ */ c("span", { className: "pitaj-widget-bar-title", children: h.title || d }),
      /* @__PURE__ */ c(
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
    /* @__PURE__ */ c("div", { className: "pitaj-iframe-container", style: { height: `${x}px` }, children: [
      m && /* @__PURE__ */ c("div", { className: "pitaj-iframe-loading", children: [
        /* @__PURE__ */ c("span", { className: "pitaj-typing-dot" }),
        /* @__PURE__ */ c("span", { className: "pitaj-typing-dot" }),
        /* @__PURE__ */ c("span", { className: "pitaj-typing-dot" })
      ] }),
      /* @__PURE__ */ c(
        "iframe",
        {
          src: b,
          title: d,
          className: "pitaj-iframe-frame",
          onLoad: () => y(!1),
          sandbox: "allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
        }
      )
    ] })
  ] });
}
function na({ config: h }) {
  const [d, m] = ee(!0), y = String(h.url || "").trim();
  let b = null;
  try {
    y && (b = new URL(y));
  } catch {
  }
  const x = String(h.title || "Zakažite sastanak"), P = String(h.description || "Odaberite datum i termin koji vam najviše odgovara."), C = String(h.duration || "30 min"), j = String(h.provider || (y.includes("cal.com") ? "cal" : "calendly")), T = Number(h.height || 440);
  return !b || b.protocol !== "https:" ? /* @__PURE__ */ c("div", { className: "pitaj-inline-widget-card pitaj-booking-card", children: /* @__PURE__ */ c("div", { className: "pitaj-booking-header", children: [
    /* @__PURE__ */ c("div", { className: "pitaj-booking-brand-icon", children: /* @__PURE__ */ c(Ye, { size: 18 }) }),
    /* @__PURE__ */ c("div", { className: "pitaj-booking-info", children: [
      /* @__PURE__ */ c("div", { className: "pitaj-booking-title", children: x }),
      /* @__PURE__ */ c("div", { className: "pitaj-booking-desc", children: "Link za zakazivanje termina trenutno nije dostupan." })
    ] })
  ] }) }) : /* @__PURE__ */ c("div", { className: "pitaj-inline-widget-card pitaj-booking-card", children: [
    /* @__PURE__ */ c("div", { className: "pitaj-booking-header", children: [
      /* @__PURE__ */ c("div", { className: "pitaj-booking-brand-icon", title: j === "cal" ? "Cal.com" : "Calendly", children: j === "cal" ? /* @__PURE__ */ c("span", { className: "pitaj-cal-logo", children: "Cal" }) : j === "calendly" ? /* @__PURE__ */ c("span", { className: "pitaj-calendly-logo", children: "C" }) : /* @__PURE__ */ c(Ye, { size: 18 }) }),
      /* @__PURE__ */ c("div", { className: "pitaj-booking-info", children: [
        /* @__PURE__ */ c("div", { className: "pitaj-booking-title", children: x }),
        /* @__PURE__ */ c("div", { className: "pitaj-booking-meta", children: [
          /* @__PURE__ */ c("span", { className: "pitaj-booking-tag", children: [
            "⏱️ ",
            C
          ] }),
          /* @__PURE__ */ c("span", { className: "pitaj-booking-tag", children: "📹 Video poziv" })
        ] })
      ] }),
      /* @__PURE__ */ c(
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
    P && /* @__PURE__ */ c("div", { className: "pitaj-booking-desc", children: P }),
    /* @__PURE__ */ c("div", { className: "pitaj-booking-frame-wrap", style: { height: `${T}px` }, children: [
      d && /* @__PURE__ */ c("div", { className: "pitaj-booking-loading", children: [
        /* @__PURE__ */ c("span", { className: "pitaj-typing-dot" }),
        /* @__PURE__ */ c("span", { className: "pitaj-typing-dot" }),
        /* @__PURE__ */ c("span", { className: "pitaj-typing-dot" })
      ] }),
      /* @__PURE__ */ c(
        "iframe",
        {
          src: b.href,
          title: x,
          className: "pitaj-booking-frame",
          onLoad: () => m(!1),
          sandbox: "allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
        }
      )
    ] })
  ] });
}
function oa({ config: h }) {
  var b;
  const d = h.data || h.default_data || {}, m = String(h.title || h.name || "Podaci sa sistema"), y = typeof d == "object" && d !== null && Object.keys(d).length > 0;
  return /* @__PURE__ */ c("div", { className: "pitaj-inline-widget-card pitaj-api-widget", role: "region", "aria-label": m, children: [
    /* @__PURE__ */ c("div", { className: "pitaj-api-header", children: [
      /* @__PURE__ */ c("div", { className: "pitaj-api-title-row", children: [
        /* @__PURE__ */ c("span", { className: "pitaj-api-icon", children: "⚡" }),
        /* @__PURE__ */ c("span", { className: "pitaj-api-title", children: m })
      ] }),
      y && /* @__PURE__ */ c("span", { className: "pitaj-api-badge", children: "Uživo" })
    ] }),
    y ? /* @__PURE__ */ c("div", { className: "pitaj-api-body", children: Object.entries(d).slice(0, 15).map(([x, P]) => {
      let C = P;
      return typeof P == "object" && P !== null && (C = JSON.stringify(P)), /* @__PURE__ */ c("div", { className: "pitaj-api-row", children: [
        /* @__PURE__ */ c("span", { className: "pitaj-api-key", children: [
          x.replace(/_/g, " "),
          ":"
        ] }),
        /* @__PURE__ */ c("span", { className: "pitaj-api-val", children: String(C) })
      ] }, x);
    }) }) : /* @__PURE__ */ c("div", { className: "pitaj-api-empty", children: ((b = h.lookup) == null ? void 0 : b.status) === "expired" ? "Podaci se ne čuvaju. Pošaljite novi upit za ažurne podatke." : "Podaci trenutno nisu dostupni." })
  ] });
}
function la({ config: h }) {
  var U;
  const d = h.data || h.default_data || {}, m = d.order_number || h.order_number;
  if (!m) {
    const Q = (U = h.lookup) == null ? void 0 : U.status;
    return /* @__PURE__ */ c("div", { className: "pitaj-inline-widget-card pitaj-order-card", role: "status", children: /* @__PURE__ */ c("div", { className: "pitaj-order-notice", children: Q === "not_found" ? "Nismo pronašli narudžbu s tim brojem i emailom. Provjerite podatke i pokušajte ponovo." : Q === "needs_email" ? "Za provjeru statusa napišite i email adresu kojom ste naručili (npr. #1234, ime@domena.ba)." : Q === "expired" ? "Podaci o narudžbi se ne čuvaju. Pošaljite novi upit s brojem narudžbe i emailom za ažuran status." : "Napišite broj narudžbe i email kojim ste naručili (npr. #1234, ime@domena.ba) i provjerit ću status." }) });
  }
  const y = d.status_label || h.status_label || "Status nije dostupan", b = d.status_color || "blue", x = d.tracking_number || h.tracking_number, P = d.tracking_company || h.tracking_company || "Dostavna služba", C = d.tracking_url || h.tracking_url, j = d.total ? `${d.total} ${d.currency || "KM"}` : null, T = d.items_summary || h.items_summary, v = d.date || h.date, L = b === "emerald" ? "pitaj-order-badge-success" : b === "blue" ? "pitaj-order-badge-info" : "pitaj-order-badge-pending";
  return /* @__PURE__ */ c("div", { className: "pitaj-inline-widget-card pitaj-order-card", role: "region", "aria-label": `Narudžba ${m}`, children: [
    /* @__PURE__ */ c("div", { className: "pitaj-order-header", children: [
      /* @__PURE__ */ c("div", { className: "pitaj-order-id-group", children: [
        /* @__PURE__ */ c("span", { className: "pitaj-order-icon", children: "📦" }),
        /* @__PURE__ */ c("span", { className: "pitaj-order-number", children: m })
      ] }),
      /* @__PURE__ */ c("span", { className: `pitaj-order-status-badge ${L}`, children: y })
    ] }),
    /* @__PURE__ */ c("div", { className: "pitaj-order-details", children: [
      x ? /* @__PURE__ */ c("div", { className: "pitaj-order-tracking-box", children: [
        /* @__PURE__ */ c("div", { className: "pitaj-order-tracking-title", children: "Broj za praćenje pošiljke:" }),
        /* @__PURE__ */ c("div", { className: "pitaj-order-tracking-val", children: [
          /* @__PURE__ */ c("span", { children: [
            P,
            ": ",
            /* @__PURE__ */ c("strong", { children: x })
          ] }),
          C && /* @__PURE__ */ c("a", { href: C, target: "_blank", rel: "noopener noreferrer", className: "pitaj-order-tracking-link", children: "Prati ↗" })
        ] })
      ] }) : /* @__PURE__ */ c("div", { className: "pitaj-order-notice", children: "Pošiljka je u pripremi za slanje. Broj za praćenje će biti dostupan ubrzo." }),
      /* @__PURE__ */ c("div", { className: "pitaj-order-meta-grid", children: [
        T && /* @__PURE__ */ c("div", { className: "pitaj-order-meta-item", children: [
          /* @__PURE__ */ c("span", { className: "pitaj-order-meta-label", children: "Artikli:" }),
          /* @__PURE__ */ c("span", { className: "pitaj-order-meta-val", children: T })
        ] }),
        j && /* @__PURE__ */ c("div", { className: "pitaj-order-meta-item", children: [
          /* @__PURE__ */ c("span", { className: "pitaj-order-meta-label", children: "Ukupno:" }),
          /* @__PURE__ */ c("span", { className: "pitaj-order-meta-val", children: j })
        ] }),
        v && /* @__PURE__ */ c("div", { className: "pitaj-order-meta-item", children: [
          /* @__PURE__ */ c("span", { className: "pitaj-order-meta-label", children: "Datum:" }),
          /* @__PURE__ */ c("span", { className: "pitaj-order-meta-val", children: v })
        ] })
      ] })
    ] })
  ] });
}
function ca({ config: h, onAction: d }) {
  const m = h.html || '<div style="padding: 16px; text-align: center;">Prilagođeni HTML widget</div>', y = h.css || "";
  return /* @__PURE__ */ c("div", { className: "pitaj-inline-widget-card custom-html-widget", onClick: (x) => {
    var C;
    const P = (C = x.target) == null ? void 0 : C.closest("[data-chat-action]");
    if (P) {
      const j = P.getAttribute("data-chat-action");
      j && (x.preventDefault(), d == null || d(j));
    }
  }, children: [
    y && /* @__PURE__ */ c("style", { children: y }),
    /* @__PURE__ */ c("div", { dangerouslySetInnerHTML: { __html: m } })
  ] });
}
export {
  xa as InlineWidgetRenderer
};
