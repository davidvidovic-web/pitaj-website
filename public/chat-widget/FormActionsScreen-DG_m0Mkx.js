import { t as ue, T as B, d as I, A as E, y as T, u as n, a as J, C as Ne, b as me, U as fe, k as pe, c as ve, e as $e, f as we, M as Se, g as xe, h as Ie } from "./widget-IIdrUl53.js";
async function Fe(a) {
  const m = (a.apiUrl || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, "");
  if (!Number.isInteger(a.formId) || a.formId <= 0)
    throw new Error("Forma nije pravilno konfigurisana.");
  const N = a.conversationId ? Number(a.conversationId) : null, p = !!(a.files && Object.keys(a.files).length > 0);
  let u, h = { Accept: "application/json" };
  if (p) {
    const f = new FormData();
    f.append("payload", JSON.stringify(a.payload)), a.submissionUuid && f.append("submission_uuid", a.submissionUuid), a.idempotencyKey && f.append("idempotency_key", a.idempotencyKey), Number.isFinite(N) && f.append("conversation_id", String(N)), a.visitorName && f.append("visitor_name", a.visitorName), a.visitorEmail && f.append("visitor_email", a.visitorEmail), a.visitorPhone && f.append("visitor_phone", a.visitorPhone);
    for (const [D, v] of Object.entries(a.files || {}))
      v instanceof File && f.append(`files[${D}]`, v, v.name);
    return u = f, await new Promise((D, v) => {
      const k = new XMLHttpRequest();
      k.open("POST", `${m}/api/widget/${a.widgetId}/forms/${a.formId}/submit`, !0), k.setRequestHeader("Accept", "application/json"), a.onUploadProgress && a.onUploadProgress(0), k.upload.onprogress = (d) => {
        if (!a.onUploadProgress || !d.lengthComputable) return;
        const w = Math.max(0, Math.min(100, Math.round(d.loaded / d.total * 100)));
        a.onUploadProgress(w);
      }, k.onload = () => {
        let d = null;
        try {
          d = JSON.parse(k.responseText || "null");
        } catch {
          d = null;
        }
        if (k.status >= 200 && k.status < 300) {
          a.onUploadProgress && a.onUploadProgress(100), D(d);
          return;
        }
        if (k.status === 413) {
          v(new Error("Datoteka je prevelika za slanje."));
          return;
        }
        try {
          ue(
            k.status,
            d,
            "Greška pri slanju forme.",
            k.getResponseHeader("Retry-After")
          );
        } catch (w) {
          v(w instanceof Error ? w : new Error("Greška pri slanju forme."));
        }
      }, k.onerror = () => {
        v(new Error("Greška mreže pri slanju forme."));
      }, k.send(f);
    });
  } else
    h = { ...h, "Content-Type": "application/json" }, u = JSON.stringify({
      payload: a.payload,
      submission_uuid: a.submissionUuid,
      idempotency_key: a.idempotencyKey,
      conversation_id: Number.isFinite(N) ? N : null,
      visitor_name: a.visitorName || null,
      visitor_email: a.visitorEmail || null,
      visitor_phone: a.visitorPhone || null
    });
  const j = await fetch(`${m}/api/widget/${a.widgetId}/forms/${a.formId}/submit`, {
    method: "POST",
    headers: h,
    body: u
  }), M = await j.json().catch(() => null);
  if (!j.ok) {
    if (j.status === 413)
      throw new Error("Datoteka je prevelika za slanje.");
    ue(
      j.status,
      M,
      "Greška pri slanju forme.",
      j.headers.get("Retry-After")
    );
  }
  return M;
}
function ze(a) {
  if (!a) return "";
  const m = /* @__PURE__ */ new Date(`${a}T00:00:00`);
  return Number.isNaN(m.getTime()) ? a : m.toLocaleDateString("bs-BA", { day: "2-digit", month: "2-digit", year: "numeric" });
}
const Me = [
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
function De(a) {
  return `${Me[a.getMonth()]} ${a.getFullYear()}`;
}
function L(a) {
  const m = a ? /* @__PURE__ */ new Date(`${a}T00:00:00`) : /* @__PURE__ */ new Date(), N = m.getFullYear(), p = String(m.getMonth() + 1).padStart(2, "0");
  return `${N}-${p}`;
}
function Oe(a) {
  const [m, N] = a.split("-"), p = Number(m), u = Number(N) - 1;
  return new Date(Number.isFinite(p) ? p : (/* @__PURE__ */ new Date()).getFullYear(), Number.isFinite(u) ? u : 0, 1);
}
function Z(a) {
  const m = a.getFullYear(), N = String(a.getMonth() + 1).padStart(2, "0"), p = String(a.getDate()).padStart(2, "0");
  return `${m}-${N}-${p}`;
}
function Pe(a) {
  const m = new Date(a.getFullYear(), a.getMonth(), 1), N = (m.getDay() + 6) % 7, p = new Date(m);
  p.setDate(m.getDate() - N);
  const u = [];
  for (let h = 0; h < 42; h += 1) {
    const j = new Date(p);
    j.setDate(p.getDate() + h), u.push({
      iso: Z(j),
      day: j.getDate(),
      inCurrentMonth: j.getMonth() === a.getMonth()
    });
  }
  return u;
}
function Ce({
  config: a,
  widgetId: m,
  activeConversationId: N,
  initialActionId: p = null,
  visitorContact: u,
  onBack: h,
  embedded: j = !1,
  onSubmitted: M,
  onApiError: f,
  blockedReason: D = null
}) {
  var le;
  const v = a.forms || [], k = a.actions || [], d = B(
    () => k.length > 0 ? k : v.map((e) => ({
      id: -e.id,
      name: e.name,
      description: e.description || null,
      trigger_hint: null,
      form_id: e.id,
      form_name: e.name || null
    })),
    [k, v]
  ), [w, q] = I(
    p ?? ((le = d[0]) == null ? void 0 : le.id) ?? null
  ), [l, C] = I({}), [X, z] = I({}), [Q, O] = I(null), [S, P] = I({}), [V, Y] = I(!1), [g, F] = I(null), [ee, G] = I(null), [U, R] = I(null), [de, H] = I({}), K = E({}), te = E({}), ne = E({}), x = E({}), A = E(null), re = d.find((e) => e.id === w) || null, c = re ? v.find((e) => e.id === re.form_id) || null : v[0] || null, W = B(
    () => {
      var e;
      return (((e = c == null ? void 0 : c.schema_json) == null ? void 0 : e.fields) || []).filter((t) => t.type !== "hidden");
    },
    [c]
  ), ae = B(
    () => {
      var e;
      return (((e = c == null ? void 0 : c.schema_json) == null ? void 0 : e.fields) || []).filter((t) => t.type === "hidden" && t.key).reduce((t, r) => (t[r.key] = r.value || "", t), {});
    },
    [c]
  );
  T(() => {
    if (p && d.some((e) => e.id === p)) {
      q(p);
      return;
    }
    !w && d.length > 0 && q(d[0].id);
  }, [p, d, w]), T(() => {
    G(null), R(null), z({}), O(null);
  }, [w, c == null ? void 0 : c.id]), T(() => () => {
    A.current !== null && window.clearTimeout(A.current);
  }, []), T(() => {
    const e = (t) => {
      if (!U) return;
      const r = te.current[U];
      if (!r) return;
      const s = typeof t.composedPath == "function" ? t.composedPath() : [];
      (s.length > 0 ? s.includes(r) : r.contains(t.target)) || R(null);
    };
    return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
  }, [U]);
  const $ = (e, t) => {
    C((r) => ({ ...r, [e]: t })), P((r) => ({ ...r, [e]: "" })), F((r) => (r == null ? void 0 : r.type) === "error" ? null : r);
  }, _ = (e) => Array.isArray(e) ? e.map((t) => String(t).trim()).filter((t) => t.length > 0) : [], se = (e) => Array.isArray(e) ? e.map((t) => String(t)).filter((t) => t.length > 0) : [], ie = (e) => e.required === !0 || e.required === 1 || e.required === "1" || e.required === "true", ye = (e) => {
    window.requestAnimationFrame(() => {
      const t = ne.current[e];
      t == null || t.scrollIntoView({ behavior: "smooth", block: "center" });
      const r = x.current[e];
      r == null || r.focus();
    });
  }, oe = (e) => {
    const t = Number(e.max_size_kb ?? 5120);
    return (Number.isFinite(t) && t > 0 ? t : 5120) * 1024;
  }, he = (e) => {
    const t = oe(e) / 1048576;
    return `${Number.isInteger(t) ? t.toFixed(0) : t.toFixed(1)} MB`;
  }, ke = (e, t) => {
    const r = _(t.accept).map((b) => b.toLowerCase());
    if (r.length < 1) return !0;
    const s = (e.type || "").toLowerCase(), i = (e.name || "").toLowerCase(), o = i.lastIndexOf("."), y = o >= 0 ? i.slice(o) : "";
    for (const b of r)
      if (b) {
        if (b.startsWith(".")) {
          if (y === b) return !0;
          continue;
        }
        if (b.includes("/")) {
          if (b.endsWith("/*")) {
            const be = b.split("/")[0];
            if (s.startsWith(`${be}/`)) return !0;
          } else if (s === b)
            return !0;
          continue;
        }
        if (y === `.${b}` || y === b) return !0;
      }
    return !1;
  }, ce = (e) => {
    const t = W.map((r) => {
      const s = e[r.key];
      if (s == null) return null;
      if (Array.isArray(s)) {
        const o = s.map((y) => String(y).trim()).filter((y) => y.length > 0);
        return o.length < 1 ? null : `- ${r.label || r.key}: ${o.join(", ")}`;
      }
      if (r.type === "checkbox")
        return s !== !0 && s !== 1 && s !== "1" ? null : `- ${r.label || r.key}: Da`;
      const i = String(s).trim();
      return i ? `- ${r.label || r.key}: ${i}` : null;
    }).filter((r) => !!r);
    return `Forma: ${(c == null ? void 0 : c.name) || "Forma"}
${t.join(`
`)}`;
  }, ge = () => {
    if (!c) return { valid: !1, firstInvalidFieldKey: null };
    const e = {};
    let t = null;
    for (const r of W) {
      const s = l[r.key];
      ie(r) && (r.type === "checkbox" ? _(r.options).length > 0 ? se(s).length < 1 && (e[r.key] = "Ovo polje je obavezno.", t || (t = r.key)) : s !== !0 && (e[r.key] = "Ovo polje je obavezno.", t || (t = r.key)) : (s == null || String(s).trim() === "") && (e[r.key] = "Ovo polje je obavezno.", t || (t = r.key))), r.type === "email" && s && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(s)) && (e[r.key] = "Unesite ispravan email.", t || (t = r.key));
    }
    return P(e), { valid: Object.keys(e).length === 0, firstInvalidFieldKey: t };
  }, je = async (e) => {
    if (e.preventDefault(), F(null), D) {
      F({ type: "error", message: D });
      return;
    }
    if (!c) return;
    const t = ge();
    if (!t.valid) {
      F({ type: "error", message: "Nije poslano. Provjerite obavezna polja." }), t.firstInvalidFieldKey && ye(t.firstInvalidFieldKey);
      return;
    }
    const r = () => {
      h && (A.current !== null && window.clearTimeout(A.current), A.current = window.setTimeout(() => {
        h();
      }, 900));
    };
    if (a.mockMode) {
      const s = { ...ae, ...l };
      O(null), F({
        type: "success",
        message: c.success_message || "Hvala! Prijava je poslana."
      }), M && M(ce(s)), C({}), z({}), P({}), r();
      return;
    }
    Y(!0);
    try {
      const s = Number(c.id);
      if (!Number.isInteger(s) || s <= 0) {
        F({ type: "error", message: "Nije poslano. Forma nije pravilno konfigurisana." }), Y(!1);
        return;
      }
      const i = { ...ae, ...l }, o = Object.fromEntries(
        Object.entries(X).filter(([, b]) => b instanceof File)
      );
      O(Object.keys(o).length > 0 ? 0 : null);
      const y = await Fe({
        widgetId: m,
        formId: s,
        payload: i,
        files: o,
        onUploadProgress: (b) => O(b),
        apiUrl: a.apiUrl,
        idempotencyKey: `${c.id}-${Date.now()}`,
        conversationId: N,
        visitorName: u == null ? void 0 : u.name,
        visitorEmail: u == null ? void 0 : u.email,
        visitorPhone: u == null ? void 0 : u.phone
      });
      F({
        type: "success",
        message: y.message || c.success_message || "Hvala! Prijava je poslana."
      }), M && M(ce(i)), C({}), z({}), O(null), P({}), r();
    } catch (s) {
      const i = (s == null ? void 0 : s.message) || "Greška pri slanju forme.";
      O(null), F({ type: "error", message: `Nije poslano. ${i}` }), f == null || f(s, "Greška pri slanju forme.");
    } finally {
      Y(!1);
    }
  };
  return !a.formsEnabled || a.formsAvailable === !1 || v.length === 0 ? /* @__PURE__ */ n("div", { className: "pitaj-contact-screen", children: /* @__PURE__ */ n("div", { className: "pitaj-contact-head", children: [
    !j && h ? /* @__PURE__ */ n("button", { onClick: h, className: "pitaj-icon-btn", "aria-label": "Nazad", title: "Nazad", children: /* @__PURE__ */ n(J, { size: 18 }) }) : null,
    /* @__PURE__ */ n("div", { children: [
      /* @__PURE__ */ n("h3", { className: "pitaj-contact-title", children: "Forme" }),
      /* @__PURE__ */ n("p", { className: "pitaj-contact-sub", children: "Trenutno nema dostupnih formi." })
    ] })
  ] }) }) : /* @__PURE__ */ n("div", { className: `pitaj-contact-screen ${j ? "pitaj-contact-screen-embedded" : ""}`, children: [
    j ? h ? /* @__PURE__ */ n("div", { className: "pitaj-contact-head pitaj-contact-head-embedded", children: [
      /* @__PURE__ */ n("div", { children: /* @__PURE__ */ n("h3", { className: "pitaj-contact-title", children: (c == null ? void 0 : c.name) || "Forma" }) }),
      /* @__PURE__ */ n("button", { onClick: h, className: "pitaj-icon-btn", "aria-label": "Zatvori formu", title: "Zatvori formu", children: /* @__PURE__ */ n(J, { size: 16 }) })
    ] }) : null : /* @__PURE__ */ n("div", { className: "pitaj-contact-head", children: [
      h ? /* @__PURE__ */ n("button", { onClick: h, className: "pitaj-icon-btn", "aria-label": "Nazad", title: "Nazad", children: /* @__PURE__ */ n(J, { size: 18 }) }) : null,
      /* @__PURE__ */ n("div", { children: [
        /* @__PURE__ */ n("h3", { className: "pitaj-contact-title", children: "Forme" }),
        /* @__PURE__ */ n("p", { className: "pitaj-contact-sub", children: "Odaberite akciju i pošaljite podatke." })
      ] })
    ] }),
    !j && d.length > 1 && /* @__PURE__ */ n("div", { className: "pitaj-form-actions", children: d.map((e) => /* @__PURE__ */ n(
      "button",
      {
        type: "button",
        className: `pitaj-form-action-chip ${w === e.id ? "is-active" : ""}`,
        onClick: () => {
          q(e.id), C({}), z({}), O(null), P({}), F(null);
        },
        children: e.name
      },
      e.id
    )) }),
    c ? /* @__PURE__ */ n("form", { onSubmit: je, className: "pitaj-contact-form", noValidate: !0, children: [
      W.map((e) => /* @__PURE__ */ n(
        "div",
        {
          className: "pitaj-contact-field",
          ref: (t) => {
            ne.current[e.key] = t;
          },
          children: [
            /* @__PURE__ */ n("label", { className: "pitaj-contact-label", htmlFor: `cd-form-${e.key}`, children: [
              e.label || e.key,
              ie(e) ? /* @__PURE__ */ n("span", { className: "pitaj-required-indicator", "aria-hidden": "true", children: " *" }) : null
            ] }),
            e.type === "textarea" ? /* @__PURE__ */ n(
              "textarea",
              {
                id: `cd-form-${e.key}`,
                ref: (t) => {
                  x.current[e.key] = t;
                },
                value: String(l[e.key] ?? ""),
                onInput: (t) => $(e.key, t.target.value),
                placeholder: e.placeholder || "",
                className: `pitaj-contact-input ${S[e.key] ? "has-error" : ""}`
              }
            ) : e.type === "radio" ? /* @__PURE__ */ n("div", { className: `pitaj-form-option-group ${S[e.key] ? "has-error" : ""}`, children: _(e.options).map((t, r) => {
              const s = String(l[e.key] ?? "") === t;
              return /* @__PURE__ */ n(
                "label",
                {
                  className: `pitaj-form-radio-option ${s ? "is-active" : ""}`,
                  children: [
                    /* @__PURE__ */ n(
                      "input",
                      {
                        type: "radio",
                        name: `cd-form-${e.key}`,
                        className: "pitaj-form-radio-native",
                        ref: (i) => {
                          r === 0 && (x.current[e.key] = i);
                        },
                        checked: s,
                        onChange: () => $(e.key, t)
                      }
                    ),
                    /* @__PURE__ */ n("span", { className: "pitaj-form-radio-indicator", "aria-hidden": "true", children: /* @__PURE__ */ n("span", { className: "pitaj-form-radio-dot" }) }),
                    /* @__PURE__ */ n("span", { className: "pitaj-form-radio-text", children: t })
                  ]
                },
                `${e.key}-${t}`
              );
            }) }) : e.type === "select" ? /* @__PURE__ */ n(
              "div",
              {
                ref: (t) => {
                  te.current[e.key] = t;
                },
                className: `pitaj-custom-select ${S[e.key] ? "has-error" : ""}`,
                children: [
                  /* @__PURE__ */ n(
                    "button",
                    {
                      id: `cd-form-${e.key}`,
                      type: "button",
                      className: "pitaj-custom-select-trigger",
                      ref: (t) => {
                        x.current[e.key] = t;
                      },
                      onClick: () => R((t) => t === e.key ? null : e.key),
                      children: [
                        /* @__PURE__ */ n("span", { children: String(l[e.key] ?? "") || "Odaberite..." }),
                        /* @__PURE__ */ n(Ne, { size: 14, className: U === e.key ? "is-open" : "" })
                      ]
                    }
                  ),
                  U === e.key ? /* @__PURE__ */ n("div", { className: "pitaj-custom-select-menu", children: _(e.options).map((t) => /* @__PURE__ */ n(
                    "button",
                    {
                      type: "button",
                      className: `pitaj-custom-select-option ${String(l[e.key] ?? "") === t ? "is-active" : ""}`,
                      onClick: () => {
                        $(e.key, t), R(null);
                      },
                      children: [
                        /* @__PURE__ */ n("span", { children: t }),
                        String(l[e.key] ?? "") === t ? /* @__PURE__ */ n(me, { size: 13 }) : null
                      ]
                    },
                    t
                  )) }) : null
                ]
              }
            ) : e.type === "file" ? /* @__PURE__ */ n("div", { className: `pitaj-file-picker ${S[e.key] ? "has-error" : ""}`, children: [
              /* @__PURE__ */ n(
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
                    const r = (s = t.target.files) == null ? void 0 : s[0];
                    if (r) {
                      if (!ke(r, e)) {
                        z((o) => {
                          const y = { ...o };
                          return delete y[e.key], y;
                        }), C((o) => ({ ...o, [e.key]: "" })), P((o) => ({
                          ...o,
                          [e.key]: "Odabrani tip datoteke nije dozvoljen."
                        })), K.current[e.key] && (K.current[e.key].value = "");
                        return;
                      }
                      const i = oe(e);
                      if (r.size > i) {
                        z((o) => {
                          const y = { ...o };
                          return delete y[e.key], y;
                        }), C((o) => ({ ...o, [e.key]: "" })), P((o) => ({
                          ...o,
                          [e.key]: `Datoteka je prevelika. Maksimalno ${he(e)}.`
                        })), K.current[e.key] && (K.current[e.key].value = "");
                        return;
                      }
                      z((o) => ({ ...o, [e.key]: r })), $(e.key, r.name);
                    } else
                      z((i) => {
                        const o = { ...i };
                        return delete o[e.key], o;
                      }), $(e.key, "");
                  },
                  className: "pitaj-file-hidden-input"
                }
              ),
              /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  className: "pitaj-file-trigger",
                  ref: (t) => {
                    x.current[e.key] = t;
                  },
                  onClick: () => {
                    var t;
                    return (t = K.current[e.key]) == null ? void 0 : t.click();
                  },
                  children: [
                    /* @__PURE__ */ n(fe, { size: 14 }),
                    /* @__PURE__ */ n("span", { children: "Odaberite datoteku" })
                  ]
                }
              ),
              /* @__PURE__ */ n("span", { className: "pitaj-file-name", children: String(l[e.key] || "Nijedna datoteka nije odabrana") }),
              V && X[e.key] ? /* @__PURE__ */ n(pe, { children: [
                /* @__PURE__ */ n("div", { className: "pitaj-file-progress", "aria-hidden": "true", children: /* @__PURE__ */ n(
                  "span",
                  {
                    className: "pitaj-file-progress-bar",
                    style: { width: `${Math.max(0, Math.min(100, Q ?? 0))}%` }
                  }
                ) }),
                /* @__PURE__ */ n("span", { className: "pitaj-file-uploading", children: [
                  "Otpremanje datoteke... ",
                  Q ?? 0,
                  "%"
                ] })
              ] }) : null
            ] }) : e.type === "checkbox" ? _(e.options).length > 0 ? /* @__PURE__ */ n("div", { className: `pitaj-form-option-group ${S[e.key] ? "has-error" : ""}`, children: _(e.options).map((t, r) => {
              const s = se(l[e.key]), i = s.includes(t);
              return /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  className: `pitaj-multi-option ${i ? "is-active" : ""}`,
                  ref: (o) => {
                    r === 0 && (x.current[e.key] = o);
                  },
                  onClick: () => {
                    const o = i ? s.filter((y) => y !== t) : [...s, t];
                    $(e.key, o);
                  },
                  children: [
                    /* @__PURE__ */ n("span", { className: "pitaj-multi-option-check", children: i ? "✓" : "" }),
                    /* @__PURE__ */ n("span", { children: t })
                  ]
                },
                `${e.key}-${t}`
              );
            }) }) : /* @__PURE__ */ n("label", { className: "pitaj-form-checkbox", children: [
              /* @__PURE__ */ n(
                "input",
                {
                  id: `cd-form-${e.key}`,
                  type: "checkbox",
                  ref: (t) => {
                    x.current[e.key] = t;
                  },
                  checked: l[e.key] === !0,
                  onChange: (t) => $(e.key, !!t.target.checked)
                }
              ),
              /* @__PURE__ */ n("span", { children: e.placeholder || e.label || "Potvrđujem" })
            ] }) : e.type === "date" ? /* @__PURE__ */ n("div", { className: `pitaj-date-picker ${S[e.key] ? "has-error" : ""}`, children: [
              /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  className: "pitaj-date-trigger",
                  ref: (t) => {
                    x.current[e.key] = t;
                  },
                  onClick: () => {
                    const t = ee === e.key ? null : e.key;
                    if (G(t), t) {
                      const r = String(l[e.key] || "");
                      H((s) => ({
                        ...s,
                        [e.key]: s[e.key] || L(r)
                      }));
                    }
                  },
                  children: [
                    /* @__PURE__ */ n("span", { children: l[e.key] ? ze(String(l[e.key])) : e.placeholder || "Odaberite datum" }),
                    /* @__PURE__ */ n(ve, { size: 14 })
                  ]
                }
              ),
              ee === e.key ? /* @__PURE__ */ n("div", { className: "pitaj-calendar-popover", children: (() => {
                const t = de[e.key] || L(String(l[e.key] || "")), r = Oe(t), s = Pe(r);
                return /* @__PURE__ */ n(pe, { children: [
                  /* @__PURE__ */ n("div", { className: "pitaj-calendar-head", children: [
                    /* @__PURE__ */ n(
                      "button",
                      {
                        type: "button",
                        className: "pitaj-calendar-nav",
                        onClick: () => {
                          const i = new Date(r.getFullYear(), r.getMonth() - 1, 1);
                          H((o) => ({ ...o, [e.key]: L(Z(i)) }));
                        },
                        children: /* @__PURE__ */ n($e, { size: 14 })
                      }
                    ),
                    /* @__PURE__ */ n("strong", { children: De(r) }),
                    /* @__PURE__ */ n(
                      "button",
                      {
                        type: "button",
                        className: "pitaj-calendar-nav",
                        onClick: () => {
                          const i = new Date(r.getFullYear(), r.getMonth() + 1, 1);
                          H((o) => ({ ...o, [e.key]: L(Z(i)) }));
                        },
                        children: /* @__PURE__ */ n(we, { size: 14 })
                      }
                    )
                  ] }),
                  /* @__PURE__ */ n("div", { className: "pitaj-calendar-weekdays", children: ["Po", "Ut", "Sr", "Če", "Pe", "Su", "Ne"].map((i) => /* @__PURE__ */ n("span", { children: i }, `${e.key}-${i}`)) }),
                  /* @__PURE__ */ n("div", { className: "pitaj-calendar-grid", children: s.map((i) => {
                    const o = String(l[e.key] || "") === i.iso;
                    return /* @__PURE__ */ n(
                      "button",
                      {
                        type: "button",
                        className: `pitaj-calendar-day ${i.inCurrentMonth ? "" : "is-muted"} ${o ? "is-selected" : ""}`,
                        onClick: () => {
                          $(e.key, i.iso), G(null);
                        },
                        children: i.day
                      },
                      `${e.key}-${i.iso}`
                    );
                  }) })
                ] });
              })() }) : null
            ] }) : e.type === "number" ? /* @__PURE__ */ n("div", { className: `pitaj-number-stepper ${S[e.key] ? "has-error" : ""}`, children: [
              /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  className: "pitaj-number-stepper-btn",
                  onClick: () => {
                    const t = Number(String(l[e.key] ?? "0").replace(",", ".")), r = Number.isFinite(t) ? t - 1 : 0;
                    $(e.key, String(r));
                  },
                  children: /* @__PURE__ */ n(Se, { size: 14 })
                }
              ),
              /* @__PURE__ */ n(
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
                    const r = String(t.target.value ?? "").replace(",", ".");
                    (r === "" || /^-?\d*(\.\d*)?$/.test(r)) && $(e.key, r);
                  },
                  placeholder: e.placeholder || "",
                  className: "pitaj-contact-input pitaj-number-input"
                }
              ),
              /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  className: "pitaj-number-stepper-btn",
                  onClick: () => {
                    const t = Number(String(l[e.key] ?? "0").replace(",", ".")), r = Number.isFinite(t) ? t + 1 : 1;
                    $(e.key, String(r));
                  },
                  children: /* @__PURE__ */ n(xe, { size: 14 })
                }
              )
            ] }) : /* @__PURE__ */ n(
              "input",
              {
                id: `cd-form-${e.key}`,
                type: e.type === "email" ? "email" : e.type === "phone" ? "tel" : "text",
                ref: (t) => {
                  x.current[e.key] = t;
                },
                value: String(l[e.key] ?? ""),
                onInput: (t) => $(e.key, t.target.value),
                placeholder: e.placeholder || "",
                className: `pitaj-contact-input ${S[e.key] ? "has-error" : ""}`
              }
            ),
            S[e.key] && /* @__PURE__ */ n("span", { className: "pitaj-contact-error", children: S[e.key] })
          ]
        },
        e.key
      )),
      g ? /* @__PURE__ */ n("div", { className: `pitaj-form-success-inline ${g.type === "error" ? "is-error" : "is-success"}`, children: [
        g.type === "error" ? /* @__PURE__ */ n(Ie, { size: 16 }) : /* @__PURE__ */ n(me, { size: 16 }),
        /* @__PURE__ */ n("span", { children: g.message })
      ] }) : null,
      /* @__PURE__ */ n(
        "button",
        {
          type: "submit",
          className: `pitaj-contact-submit ${(g == null ? void 0 : g.type) === "success" ? "is-success" : ""} ${(g == null ? void 0 : g.type) === "error" ? "is-error" : ""}`,
          disabled: V || D !== null,
          children: V ? "Slanje..." : (g == null ? void 0 : g.type) === "success" ? "Poslano" : (g == null ? void 0 : g.type) === "error" ? "Nije poslano" : c.submit_label || "Pošalji"
        }
      )
    ] }) : null
  ] });
}
export {
  Ce as FormActionsScreen
};
