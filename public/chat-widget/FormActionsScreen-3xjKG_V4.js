import { t as ue, a as B, d as I, A as E, h as T, u as r, b as J, C as fe, c as de, U as ve, e as me, f as $e, g as we, i as je, j as Se, P as xe, k as Ie } from "./widget-jrIIYnzb.js";
async function Fe(a) {
  const d = (a.apiUrl || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, "");
  if (!Number.isInteger(a.formId) || a.formId <= 0)
    throw new Error("Forma nije pravilno konfigurisana.");
  const f = a.conversationId ? Number(a.conversationId) : null, m = !!(a.files && Object.keys(a.files).length > 0);
  let u, k = { Accept: "application/json" };
  if (m) {
    const v = new FormData();
    v.append("payload", JSON.stringify(a.payload)), a.submissionUuid && v.append("submission_uuid", a.submissionUuid), a.idempotencyKey && v.append("idempotency_key", a.idempotencyKey), Number.isFinite(f) && v.append("conversation_id", String(f)), a.visitorName && v.append("visitor_name", a.visitorName), a.visitorEmail && v.append("visitor_email", a.visitorEmail), a.visitorPhone && v.append("visitor_phone", a.visitorPhone);
    for (const [M, $] of Object.entries(a.files || {}))
      $ instanceof File && v.append(`files[${M}]`, $, $.name);
    return u = v, await new Promise((M, $) => {
      const p = new XMLHttpRequest();
      p.open("POST", `${d}/api/widget/${a.widgetId}/forms/${a.formId}/submit`, !0), p.setRequestHeader("Accept", "application/json"), a.onUploadProgress && a.onUploadProgress(0), p.upload.onprogress = (h) => {
        if (!a.onUploadProgress || !h.lengthComputable) return;
        const j = Math.max(0, Math.min(100, Math.round(h.loaded / h.total * 100)));
        a.onUploadProgress(j);
      }, p.onload = () => {
        let h = null;
        try {
          h = JSON.parse(p.responseText || "null");
        } catch {
          h = null;
        }
        if (p.status >= 200 && p.status < 300) {
          a.onUploadProgress && a.onUploadProgress(100), M(h);
          return;
        }
        if (p.status === 413) {
          $(new Error("Datoteka je prevelika za slanje."));
          return;
        }
        try {
          ue(
            p.status,
            h,
            "Greška pri slanju forme.",
            p.getResponseHeader("Retry-After")
          );
        } catch (j) {
          $(j instanceof Error ? j : new Error("Greška pri slanju forme."));
        }
      }, p.onerror = () => {
        $(new Error("Greška mreže pri slanju forme."));
      }, p.send(v);
    });
  } else
    k = { ...k, "Content-Type": "application/json" }, u = JSON.stringify({
      payload: a.payload,
      submission_uuid: a.submissionUuid,
      idempotency_key: a.idempotencyKey,
      conversation_id: Number.isFinite(f) ? f : null,
      visitor_name: a.visitorName || null,
      visitor_email: a.visitorEmail || null,
      visitor_phone: a.visitorPhone || null
    });
  const b = await fetch(`${d}/api/widget/${a.widgetId}/forms/${a.formId}/submit`, {
    method: "POST",
    headers: k,
    body: u
  }), D = await b.json().catch(() => null);
  if (!b.ok) {
    if (b.status === 413)
      throw new Error("Datoteka je prevelika za slanje.");
    ue(
      b.status,
      D,
      "Greška pri slanju forme.",
      b.headers.get("Retry-After")
    );
  }
  return D;
}
function ze(a) {
  if (!a) return "";
  const d = /* @__PURE__ */ new Date(`${a}T00:00:00`);
  return Number.isNaN(d.getTime()) ? a : d.toLocaleDateString("bs-BA", { day: "2-digit", month: "2-digit", year: "numeric" });
}
const De = [
  "januar",
  "februar",
  "mart",
  "april",
  "maj",
  "juni",
  "juli",
  "august",
  "septembar",
  "oktobar",
  "novembar",
  "decembar"
];
function Me(a) {
  return `${De[a.getMonth()]} ${a.getFullYear()}`;
}
function L(a) {
  const d = a ? /* @__PURE__ */ new Date(`${a}T00:00:00`) : /* @__PURE__ */ new Date(), f = d.getFullYear(), m = String(d.getMonth() + 1).padStart(2, "0");
  return `${f}-${m}`;
}
function Oe(a) {
  const [d, f] = a.split("-"), m = Number(d), u = Number(f) - 1;
  return new Date(Number.isFinite(m) ? m : (/* @__PURE__ */ new Date()).getFullYear(), Number.isFinite(u) ? u : 0, 1);
}
function Z(a) {
  const d = a.getFullYear(), f = String(a.getMonth() + 1).padStart(2, "0"), m = String(a.getDate()).padStart(2, "0");
  return `${d}-${f}-${m}`;
}
function Pe(a) {
  const d = new Date(a.getFullYear(), a.getMonth(), 1), f = (d.getDay() + 6) % 7, m = new Date(d);
  m.setDate(d.getDate() - f);
  const u = [];
  for (let k = 0; k < 42; k += 1) {
    const b = new Date(m);
    b.setDate(m.getDate() + k), u.push({
      iso: Z(b),
      day: b.getDate(),
      inCurrentMonth: b.getMonth() === a.getMonth()
    });
  }
  return u;
}
function Ce({
  config: a,
  widgetId: d,
  activeConversationId: f,
  initialActionId: m = null,
  visitorContact: u,
  onBack: k,
  embedded: b = !1,
  onSubmitted: D,
  onApiError: v,
  blockedReason: M = null
}) {
  var le;
  const $ = a.forms || [], p = a.actions || [], h = B(
    () => p.length > 0 ? p : $.map((e) => ({
      id: -e.id,
      name: e.name,
      description: e.description || null,
      trigger_hint: null,
      form_id: e.id,
      form_name: e.name || null
    })),
    [p, $]
  ), [j, q] = I(
    m ?? ((le = h[0]) == null ? void 0 : le.id) ?? null
  ), [l, C] = I({}), [X, z] = I({}), [Q, O] = I(null), [S, P] = I({}), [V, Y] = I(!1), [g, F] = I(null), [ee, G] = I(null), [U, R] = I(null), [he, H] = I({}), K = E({}), te = E({}), re = E({}), x = E({}), A = E(null), ne = h.find((e) => e.id === j) || null, o = ne ? $.find((e) => e.id === ne.form_id) || null : $[0] || null, W = B(
    () => {
      var e;
      return (((e = o == null ? void 0 : o.schema_json) == null ? void 0 : e.fields) || []).filter((t) => t.type !== "hidden");
    },
    [o]
  ), ae = B(
    () => {
      var e;
      return (((e = o == null ? void 0 : o.schema_json) == null ? void 0 : e.fields) || []).filter((t) => t.type === "hidden" && t.key).reduce((t, n) => (t[n.key] = n.value || "", t), {});
    },
    [o]
  );
  T(() => {
    if (m && h.some((e) => e.id === m)) {
      q(m);
      return;
    }
    !j && h.length > 0 && q(h[0].id);
  }, [m, h, j]), T(() => {
    G(null), R(null), z({}), O(null);
  }, [j, o == null ? void 0 : o.id]), T(() => () => {
    A.current !== null && window.clearTimeout(A.current);
  }, []), T(() => {
    const e = (t) => {
      if (!U) return;
      const n = te.current[U];
      if (!n) return;
      const s = typeof t.composedPath == "function" ? t.composedPath() : [];
      (s.length > 0 ? s.includes(n) : n.contains(t.target)) || R(null);
    };
    return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
  }, [U]);
  const w = (e, t) => {
    C((n) => ({ ...n, [e]: t })), P((n) => ({ ...n, [e]: "" })), F((n) => (n == null ? void 0 : n.type) === "error" ? null : n);
  }, _ = (e) => Array.isArray(e) ? e.map((t) => String(t).trim()).filter((t) => t.length > 0) : [], se = (e) => Array.isArray(e) ? e.map((t) => String(t)).filter((t) => t.length > 0) : [], ce = (e) => e.required === !0 || e.required === 1 || e.required === "1" || e.required === "true", ye = (e) => {
    window.requestAnimationFrame(() => {
      const t = re.current[e];
      t == null || t.scrollIntoView({ behavior: "smooth", block: "center" });
      const n = x.current[e];
      n == null || n.focus();
    });
  }, ie = (e) => {
    const t = Number(e.max_size_kb ?? 5120);
    return (Number.isFinite(t) && t > 0 ? t : 5120) * 1024;
  }, ke = (e) => {
    const t = ie(e) / 1048576;
    return `${Number.isInteger(t) ? t.toFixed(0) : t.toFixed(1)} MB`;
  }, pe = (e, t) => {
    const n = _(t.accept).map((N) => N.toLowerCase());
    if (n.length < 1) return !0;
    const s = (e.type || "").toLowerCase(), c = (e.name || "").toLowerCase(), i = c.lastIndexOf("."), y = i >= 0 ? c.slice(i) : "";
    for (const N of n)
      if (N) {
        if (N.startsWith(".")) {
          if (y === N) return !0;
          continue;
        }
        if (N.includes("/")) {
          if (N.endsWith("/*")) {
            const Ne = N.split("/")[0];
            if (s.startsWith(`${Ne}/`)) return !0;
          } else if (s === N)
            return !0;
          continue;
        }
        if (y === `.${N}` || y === N) return !0;
      }
    return !1;
  }, oe = (e) => {
    const t = W.map((n) => {
      const s = e[n.key];
      if (s == null) return null;
      if (Array.isArray(s)) {
        const i = s.map((y) => String(y).trim()).filter((y) => y.length > 0);
        return i.length < 1 ? null : `- ${n.label || n.key}: ${i.join(", ")}`;
      }
      if (n.type === "checkbox")
        return s !== !0 && s !== 1 && s !== "1" ? null : `- ${n.label || n.key}: Da`;
      const c = String(s).trim();
      return c ? `- ${n.label || n.key}: ${c}` : null;
    }).filter((n) => !!n);
    return `Forma: ${(o == null ? void 0 : o.name) || "Forma"}
${t.join(`
`)}`;
  }, ge = () => {
    if (!o) return { valid: !1, firstInvalidFieldKey: null };
    const e = {};
    let t = null;
    for (const n of W) {
      const s = l[n.key];
      ce(n) && (n.type === "checkbox" ? _(n.options).length > 0 ? se(s).length < 1 && (e[n.key] = "Ovo polje je obavezno.", t || (t = n.key)) : s !== !0 && (e[n.key] = "Ovo polje je obavezno.", t || (t = n.key)) : (s == null || String(s).trim() === "") && (e[n.key] = "Ovo polje je obavezno.", t || (t = n.key))), n.type === "email" && s && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(s)) && (e[n.key] = "Unesite ispravan email.", t || (t = n.key));
    }
    return P(e), { valid: Object.keys(e).length === 0, firstInvalidFieldKey: t };
  }, be = async (e) => {
    if (e.preventDefault(), F(null), M) {
      F({ type: "error", message: M });
      return;
    }
    if (!o) return;
    const t = ge();
    if (!t.valid) {
      F({ type: "error", message: "Nije poslano. Provjerite obavezna polja." }), t.firstInvalidFieldKey && ye(t.firstInvalidFieldKey);
      return;
    }
    const n = () => {
      k && (A.current !== null && window.clearTimeout(A.current), A.current = window.setTimeout(() => {
        k();
      }, 900));
    };
    if (a.mockMode) {
      const s = { ...ae, ...l };
      O(null), F({
        type: "success",
        message: o.success_message || "Hvala! Prijava je poslana."
      }), D && D(oe(s)), C({}), z({}), P({}), n();
      return;
    }
    Y(!0);
    try {
      const s = Number(o.id);
      if (!Number.isInteger(s) || s <= 0) {
        F({ type: "error", message: "Nije poslano. Forma nije pravilno konfigurisana." }), Y(!1);
        return;
      }
      const c = { ...ae, ...l }, i = Object.fromEntries(
        Object.entries(X).filter(([, N]) => N instanceof File)
      );
      O(Object.keys(i).length > 0 ? 0 : null);
      const y = await Fe({
        widgetId: d,
        formId: s,
        payload: c,
        files: i,
        onUploadProgress: (N) => O(N),
        apiUrl: a.apiUrl,
        idempotencyKey: `${o.id}-${Date.now()}`,
        conversationId: f,
        visitorName: u == null ? void 0 : u.name,
        visitorEmail: u == null ? void 0 : u.email,
        visitorPhone: u == null ? void 0 : u.phone
      });
      F({
        type: "success",
        message: y.message || o.success_message || "Hvala! Prijava je poslana."
      }), D && D(oe(c)), C({}), z({}), O(null), P({}), n();
    } catch (s) {
      const c = (s == null ? void 0 : s.message) || "Greška pri slanju forme.";
      O(null), F({ type: "error", message: `Nije poslano. ${c}` }), v == null || v(s, "Greška pri slanju forme.");
    } finally {
      Y(!1);
    }
  };
  return !a.formsEnabled || a.formsAvailable === !1 || $.length === 0 ? /* @__PURE__ */ r("div", { className: "chat-direkt-contact-screen", children: /* @__PURE__ */ r("div", { className: "chat-direkt-contact-head", children: [
    !b && k ? /* @__PURE__ */ r("button", { onClick: k, className: "chat-direkt-icon-btn", "aria-label": "Nazad", title: "Nazad", children: /* @__PURE__ */ r(J, { size: 18 }) }) : null,
    /* @__PURE__ */ r("div", { children: [
      /* @__PURE__ */ r("h3", { className: "chat-direkt-contact-title", children: "Forme" }),
      /* @__PURE__ */ r("p", { className: "chat-direkt-contact-sub", children: "Trenutno nema dostupnih formi." })
    ] })
  ] }) }) : /* @__PURE__ */ r("div", { className: `chat-direkt-contact-screen ${b ? "chat-direkt-contact-screen-embedded" : ""}`, children: [
    b ? k ? /* @__PURE__ */ r("div", { className: "chat-direkt-contact-head chat-direkt-contact-head-embedded", children: [
      /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r("h3", { className: "chat-direkt-contact-title", children: (o == null ? void 0 : o.name) || "Forma" }) }),
      /* @__PURE__ */ r("button", { onClick: k, className: "chat-direkt-icon-btn", "aria-label": "Zatvori formu", title: "Zatvori formu", children: /* @__PURE__ */ r(J, { size: 16 }) })
    ] }) : null : /* @__PURE__ */ r("div", { className: "chat-direkt-contact-head", children: [
      k ? /* @__PURE__ */ r("button", { onClick: k, className: "chat-direkt-icon-btn", "aria-label": "Nazad", title: "Nazad", children: /* @__PURE__ */ r(J, { size: 18 }) }) : null,
      /* @__PURE__ */ r("div", { children: [
        /* @__PURE__ */ r("h3", { className: "chat-direkt-contact-title", children: "Forme" }),
        /* @__PURE__ */ r("p", { className: "chat-direkt-contact-sub", children: "Odaberite akciju i pošaljite podatke." })
      ] })
    ] }),
    !b && h.length > 1 && /* @__PURE__ */ r("div", { className: "chat-direkt-form-actions", children: h.map((e) => /* @__PURE__ */ r(
      "button",
      {
        type: "button",
        className: `chat-direkt-form-action-chip ${j === e.id ? "is-active" : ""}`,
        onClick: () => {
          q(e.id), C({}), z({}), O(null), P({}), F(null);
        },
        children: e.name
      },
      e.id
    )) }),
    o ? /* @__PURE__ */ r("form", { onSubmit: be, className: "chat-direkt-contact-form", noValidate: !0, children: [
      W.map((e) => /* @__PURE__ */ r(
        "div",
        {
          className: "chat-direkt-contact-field",
          ref: (t) => {
            re.current[e.key] = t;
          },
          children: [
            /* @__PURE__ */ r("label", { className: "chat-direkt-contact-label", htmlFor: `cd-form-${e.key}`, children: [
              e.label || e.key,
              ce(e) ? /* @__PURE__ */ r("span", { className: "chat-direkt-required-indicator", "aria-hidden": "true", children: " *" }) : null
            ] }),
            e.type === "textarea" ? /* @__PURE__ */ r(
              "textarea",
              {
                id: `cd-form-${e.key}`,
                ref: (t) => {
                  x.current[e.key] = t;
                },
                value: String(l[e.key] ?? ""),
                onInput: (t) => w(e.key, t.target.value),
                placeholder: e.placeholder || "",
                className: `chat-direkt-contact-input ${S[e.key] ? "has-error" : ""}`
              }
            ) : e.type === "radio" ? /* @__PURE__ */ r("div", { className: `chat-direkt-form-option-group ${S[e.key] ? "has-error" : ""}`, children: _(e.options).map((t, n) => {
              const s = String(l[e.key] ?? "") === t;
              return /* @__PURE__ */ r(
                "label",
                {
                  className: `chat-direkt-form-radio-option ${s ? "is-active" : ""}`,
                  children: [
                    /* @__PURE__ */ r(
                      "input",
                      {
                        type: "radio",
                        name: `cd-form-${e.key}`,
                        className: "chat-direkt-form-radio-native",
                        ref: (c) => {
                          n === 0 && (x.current[e.key] = c);
                        },
                        checked: s,
                        onChange: () => w(e.key, t)
                      }
                    ),
                    /* @__PURE__ */ r("span", { className: "chat-direkt-form-radio-indicator", "aria-hidden": "true", children: /* @__PURE__ */ r("span", { className: "chat-direkt-form-radio-dot" }) }),
                    /* @__PURE__ */ r("span", { className: "chat-direkt-form-radio-text", children: t })
                  ]
                },
                `${e.key}-${t}`
              );
            }) }) : e.type === "select" ? /* @__PURE__ */ r(
              "div",
              {
                ref: (t) => {
                  te.current[e.key] = t;
                },
                className: `chat-direkt-custom-select ${S[e.key] ? "has-error" : ""}`,
                children: [
                  /* @__PURE__ */ r(
                    "button",
                    {
                      id: `cd-form-${e.key}`,
                      type: "button",
                      className: "chat-direkt-custom-select-trigger",
                      ref: (t) => {
                        x.current[e.key] = t;
                      },
                      onClick: () => R((t) => t === e.key ? null : e.key),
                      children: [
                        /* @__PURE__ */ r("span", { children: String(l[e.key] ?? "") || "Odaberite..." }),
                        /* @__PURE__ */ r(fe, { size: 14, className: U === e.key ? "is-open" : "" })
                      ]
                    }
                  ),
                  U === e.key ? /* @__PURE__ */ r("div", { className: "chat-direkt-custom-select-menu", children: _(e.options).map((t) => /* @__PURE__ */ r(
                    "button",
                    {
                      type: "button",
                      className: `chat-direkt-custom-select-option ${String(l[e.key] ?? "") === t ? "is-active" : ""}`,
                      onClick: () => {
                        w(e.key, t), R(null);
                      },
                      children: [
                        /* @__PURE__ */ r("span", { children: t }),
                        String(l[e.key] ?? "") === t ? /* @__PURE__ */ r(de, { size: 13 }) : null
                      ]
                    },
                    t
                  )) }) : null
                ]
              }
            ) : e.type === "file" ? /* @__PURE__ */ r("div", { className: `chat-direkt-file-picker ${S[e.key] ? "has-error" : ""}`, children: [
              /* @__PURE__ */ r(
                "input",
                {
                  id: `cd-form-${e.key}`,
                  ref: (t) => {
                    K.current[e.key] = t;
                  },
                  type: "file",
                  accept: _(e.accept).join(","),
                  onChange: (t) => {
                    var s;
                    const n = (s = t.target.files) == null ? void 0 : s[0];
                    if (n) {
                      if (!pe(n, e)) {
                        z((i) => {
                          const y = { ...i };
                          return delete y[e.key], y;
                        }), C((i) => ({ ...i, [e.key]: "" })), P((i) => ({
                          ...i,
                          [e.key]: "Odabrani tip datoteke nije dozvoljen."
                        })), K.current[e.key] && (K.current[e.key].value = "");
                        return;
                      }
                      const c = ie(e);
                      if (n.size > c) {
                        z((i) => {
                          const y = { ...i };
                          return delete y[e.key], y;
                        }), C((i) => ({ ...i, [e.key]: "" })), P((i) => ({
                          ...i,
                          [e.key]: `Datoteka je prevelika. Maksimalno ${ke(e)}.`
                        })), K.current[e.key] && (K.current[e.key].value = "");
                        return;
                      }
                      z((i) => ({ ...i, [e.key]: n })), w(e.key, n.name);
                    } else
                      z((c) => {
                        const i = { ...c };
                        return delete i[e.key], i;
                      }), w(e.key, "");
                  },
                  className: "chat-direkt-file-hidden-input"
                }
              ),
              /* @__PURE__ */ r(
                "button",
                {
                  type: "button",
                  className: "chat-direkt-file-trigger",
                  ref: (t) => {
                    x.current[e.key] = t;
                  },
                  onClick: () => {
                    var t;
                    return (t = K.current[e.key]) == null ? void 0 : t.click();
                  },
                  children: [
                    /* @__PURE__ */ r(ve, { size: 14 }),
                    /* @__PURE__ */ r("span", { children: "Odaberite datoteku" })
                  ]
                }
              ),
              /* @__PURE__ */ r("span", { className: "chat-direkt-file-name", children: String(l[e.key] || "Nijedna datoteka nije odabrana") }),
              V && X[e.key] ? /* @__PURE__ */ r(me, { children: [
                /* @__PURE__ */ r("div", { className: "chat-direkt-file-progress", "aria-hidden": "true", children: /* @__PURE__ */ r(
                  "span",
                  {
                    className: "chat-direkt-file-progress-bar",
                    style: { width: `${Math.max(0, Math.min(100, Q ?? 0))}%` }
                  }
                ) }),
                /* @__PURE__ */ r("span", { className: "chat-direkt-file-uploading", children: [
                  "Otpremanje datoteke... ",
                  Q ?? 0,
                  "%"
                ] })
              ] }) : null
            ] }) : e.type === "checkbox" ? _(e.options).length > 0 ? /* @__PURE__ */ r("div", { className: `chat-direkt-form-option-group ${S[e.key] ? "has-error" : ""}`, children: _(e.options).map((t, n) => {
              const s = se(l[e.key]), c = s.includes(t);
              return /* @__PURE__ */ r(
                "button",
                {
                  type: "button",
                  className: `chat-direkt-multi-option ${c ? "is-active" : ""}`,
                  ref: (i) => {
                    n === 0 && (x.current[e.key] = i);
                  },
                  onClick: () => {
                    const i = c ? s.filter((y) => y !== t) : [...s, t];
                    w(e.key, i);
                  },
                  children: [
                    /* @__PURE__ */ r("span", { className: "chat-direkt-multi-option-check", children: c ? "✓" : "" }),
                    /* @__PURE__ */ r("span", { children: t })
                  ]
                },
                `${e.key}-${t}`
              );
            }) }) : /* @__PURE__ */ r("label", { className: "chat-direkt-form-checkbox", children: [
              /* @__PURE__ */ r(
                "input",
                {
                  id: `cd-form-${e.key}`,
                  type: "checkbox",
                  ref: (t) => {
                    x.current[e.key] = t;
                  },
                  checked: l[e.key] === !0,
                  onChange: (t) => w(e.key, !!t.target.checked)
                }
              ),
              /* @__PURE__ */ r("span", { children: e.placeholder || e.label || "Potvrđujem" })
            ] }) : e.type === "date" ? /* @__PURE__ */ r("div", { className: `chat-direkt-date-picker ${S[e.key] ? "has-error" : ""}`, children: [
              /* @__PURE__ */ r(
                "button",
                {
                  type: "button",
                  className: "chat-direkt-date-trigger",
                  ref: (t) => {
                    x.current[e.key] = t;
                  },
                  onClick: () => {
                    const t = ee === e.key ? null : e.key;
                    if (G(t), t) {
                      const n = String(l[e.key] || "");
                      H((s) => ({
                        ...s,
                        [e.key]: s[e.key] || L(n)
                      }));
                    }
                  },
                  children: [
                    /* @__PURE__ */ r("span", { children: l[e.key] ? ze(String(l[e.key])) : e.placeholder || "Odaberite datum" }),
                    /* @__PURE__ */ r($e, { size: 14 })
                  ]
                }
              ),
              ee === e.key ? /* @__PURE__ */ r("div", { className: "chat-direkt-calendar-popover", children: (() => {
                const t = he[e.key] || L(String(l[e.key] || "")), n = Oe(t), s = Pe(n);
                return /* @__PURE__ */ r(me, { children: [
                  /* @__PURE__ */ r("div", { className: "chat-direkt-calendar-head", children: [
                    /* @__PURE__ */ r(
                      "button",
                      {
                        type: "button",
                        className: "chat-direkt-calendar-nav",
                        onClick: () => {
                          const c = new Date(n.getFullYear(), n.getMonth() - 1, 1);
                          H((i) => ({ ...i, [e.key]: L(Z(c)) }));
                        },
                        children: /* @__PURE__ */ r(we, { size: 14 })
                      }
                    ),
                    /* @__PURE__ */ r("strong", { children: Me(n) }),
                    /* @__PURE__ */ r(
                      "button",
                      {
                        type: "button",
                        className: "chat-direkt-calendar-nav",
                        onClick: () => {
                          const c = new Date(n.getFullYear(), n.getMonth() + 1, 1);
                          H((i) => ({ ...i, [e.key]: L(Z(c)) }));
                        },
                        children: /* @__PURE__ */ r(je, { size: 14 })
                      }
                    )
                  ] }),
                  /* @__PURE__ */ r("div", { className: "chat-direkt-calendar-weekdays", children: ["Po", "Ut", "Sr", "Če", "Pe", "Su", "Ne"].map((c) => /* @__PURE__ */ r("span", { children: c }, `${e.key}-${c}`)) }),
                  /* @__PURE__ */ r("div", { className: "chat-direkt-calendar-grid", children: s.map((c) => {
                    const i = String(l[e.key] || "") === c.iso;
                    return /* @__PURE__ */ r(
                      "button",
                      {
                        type: "button",
                        className: `chat-direkt-calendar-day ${c.inCurrentMonth ? "" : "is-muted"} ${i ? "is-selected" : ""}`,
                        onClick: () => {
                          w(e.key, c.iso), G(null);
                        },
                        children: c.day
                      },
                      `${e.key}-${c.iso}`
                    );
                  }) })
                ] });
              })() }) : null
            ] }) : e.type === "number" ? /* @__PURE__ */ r("div", { className: `chat-direkt-number-stepper ${S[e.key] ? "has-error" : ""}`, children: [
              /* @__PURE__ */ r(
                "button",
                {
                  type: "button",
                  className: "chat-direkt-number-stepper-btn",
                  onClick: () => {
                    const t = Number(String(l[e.key] ?? "0").replace(",", ".")), n = Number.isFinite(t) ? t - 1 : 0;
                    w(e.key, String(n));
                  },
                  children: /* @__PURE__ */ r(Se, { size: 14 })
                }
              ),
              /* @__PURE__ */ r(
                "input",
                {
                  id: `cd-form-${e.key}`,
                  type: "text",
                  inputMode: "decimal",
                  ref: (t) => {
                    x.current[e.key] = t;
                  },
                  value: String(l[e.key] ?? ""),
                  onInput: (t) => {
                    const n = String(t.target.value ?? "").replace(",", ".");
                    (n === "" || /^-?\d*(\.\d*)?$/.test(n)) && w(e.key, n);
                  },
                  placeholder: e.placeholder || "",
                  className: "chat-direkt-contact-input chat-direkt-number-input"
                }
              ),
              /* @__PURE__ */ r(
                "button",
                {
                  type: "button",
                  className: "chat-direkt-number-stepper-btn",
                  onClick: () => {
                    const t = Number(String(l[e.key] ?? "0").replace(",", ".")), n = Number.isFinite(t) ? t + 1 : 1;
                    w(e.key, String(n));
                  },
                  children: /* @__PURE__ */ r(xe, { size: 14 })
                }
              )
            ] }) : /* @__PURE__ */ r(
              "input",
              {
                id: `cd-form-${e.key}`,
                type: e.type === "email" ? "email" : e.type === "phone" ? "tel" : "text",
                ref: (t) => {
                  x.current[e.key] = t;
                },
                value: String(l[e.key] ?? ""),
                onInput: (t) => w(e.key, t.target.value),
                placeholder: e.placeholder || "",
                className: `chat-direkt-contact-input ${S[e.key] ? "has-error" : ""}`
              }
            ),
            S[e.key] && /* @__PURE__ */ r("span", { className: "chat-direkt-contact-error", children: S[e.key] })
          ]
        },
        e.key
      )),
      g ? /* @__PURE__ */ r("div", { className: `chat-direkt-form-success-inline ${g.type === "error" ? "is-error" : "is-success"}`, children: [
        g.type === "error" ? /* @__PURE__ */ r(Ie, { size: 16 }) : /* @__PURE__ */ r(de, { size: 16 }),
        /* @__PURE__ */ r("span", { children: g.message })
      ] }) : null,
      /* @__PURE__ */ r(
        "button",
        {
          type: "submit",
          className: `chat-direkt-contact-submit ${(g == null ? void 0 : g.type) === "success" ? "is-success" : ""} ${(g == null ? void 0 : g.type) === "error" ? "is-error" : ""}`,
          disabled: V || M !== null,
          children: V ? "Slanje..." : (g == null ? void 0 : g.type) === "success" ? "Poslano" : (g == null ? void 0 : g.type) === "error" ? "Nije poslano" : o.submit_label || "Pošalji"
        }
      )
    ] }) : null
  ] });
}
export {
  Ce as FormActionsScreen
};
