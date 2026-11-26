import { w as Fe, a as ge, T as ne, d as $, A as K, h as B, u as n, b as re, C as Me, c as je, U as Oe, S as fe, e as Pe, f as _e, g as Ue, M as Ce, i as Ke, j as Re } from "./widget-BrneNlLS.js";
async function Te(a) {
  if (a.widgetId === "preview" || a.widgetId === "default" || a.mockMode)
    return a.onUploadProgress && a.onUploadProgress(100), {
      message: "Forma je uspješno poslana (pregled).",
      submission_uuid: a.submissionUuid || `preview-${Date.now()}`,
      duplicate: !1
    };
  const d = (a.apiUrl || (typeof window < "u" ? window.location.origin : "")).replace(/\/$/, "");
  if (!Number.isInteger(a.formId) || a.formId <= 0)
    throw new Error("Forma nije pravilno konfigurisana.");
  const b = await Fe(a.widgetId, a.apiUrl), u = a.conversationId ? Number(a.conversationId) : null, k = !!(a.files && Object.keys(a.files).length > 0);
  let y, w = { Accept: "application/json", Authorization: `Bearer ${b}` };
  if (k) {
    const g = new FormData();
    g.append("payload", JSON.stringify(a.payload)), a.submissionUuid && g.append("submission_uuid", a.submissionUuid), a.idempotencyKey && g.append("idempotency_key", a.idempotencyKey), Number.isFinite(u) && g.append("conversation_id", String(u)), a.visitorName && g.append("visitor_name", a.visitorName), a.visitorEmail && g.append("visitor_email", a.visitorEmail), a.visitorPhone && g.append("visitor_phone", a.visitorPhone);
    for (const [P, N] of Object.entries(a.files || {}))
      N instanceof File && g.append(`files[${P}]`, N, N.name);
    return y = g, await new Promise((P, N) => {
      const j = new XMLHttpRequest();
      j.open("POST", `${d}/api/widget/${a.widgetId}/v2/forms/${a.formId}/submit`, !0), j.setRequestHeader("Accept", "application/json"), j.setRequestHeader("Authorization", `Bearer ${b}`), a.onUploadProgress && a.onUploadProgress(0), j.upload.onprogress = (f) => {
        if (!a.onUploadProgress || !f.lengthComputable) return;
        const I = Math.max(0, Math.min(100, Math.round(f.loaded / f.total * 100)));
        a.onUploadProgress(I);
      }, j.onload = () => {
        let f = null;
        try {
          f = JSON.parse(j.responseText || "null");
        } catch {
          f = null;
        }
        if (j.status >= 200 && j.status < 300) {
          a.onUploadProgress && a.onUploadProgress(100), P(f);
          return;
        }
        if (j.status === 413) {
          N(new Error("Datoteka je prevelika za slanje."));
          return;
        }
        try {
          ge(
            j.status,
            f,
            "Greška pri slanju forme.",
            j.getResponseHeader("Retry-After")
          );
        } catch (I) {
          N(I instanceof Error ? I : new Error("Greška pri slanju forme."));
        }
      }, j.onerror = () => {
        N(new Error("Greška mreže pri slanju forme."));
      }, j.send(g);
    });
  } else
    w = { ...w, "Content-Type": "application/json" }, y = JSON.stringify({
      payload: a.payload,
      submission_uuid: a.submissionUuid,
      idempotency_key: a.idempotencyKey,
      conversation_id: Number.isFinite(u) ? u : null,
      visitor_name: a.visitorName || null,
      visitor_email: a.visitorEmail || null,
      visitor_phone: a.visitorPhone || null
    });
  const S = await fetch(`${d}/api/widget/${a.widgetId}/v2/forms/${a.formId}/submit`, {
    method: "POST",
    headers: w,
    body: y
  }), O = await S.json().catch(() => null);
  if (!S.ok) {
    if (S.status === 413)
      throw new Error("Datoteka je prevelika za slanje.");
    ge(
      S.status,
      O,
      "Greška pri slanju forme.",
      S.headers.get("Retry-After")
    );
  }
  return O;
}
function qe(a) {
  if (!a) return "";
  const d = /* @__PURE__ */ new Date(`${a}T00:00:00`);
  return Number.isNaN(d.getTime()) ? a : d.toLocaleDateString("bs-BA", { day: "2-digit", month: "2-digit", year: "numeric" });
}
const Ae = [
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
function Le(a) {
  return `${Ae[a.getMonth()]} ${a.getFullYear()}`;
}
function J(a) {
  const d = a ? /* @__PURE__ */ new Date(`${a}T00:00:00`) : /* @__PURE__ */ new Date(), b = d.getFullYear(), u = String(d.getMonth() + 1).padStart(2, "0");
  return `${b}-${u}`;
}
function Ee(a) {
  const [d, b] = a.split("-"), u = Number(d), k = Number(b) - 1;
  return new Date(Number.isFinite(u) ? u : (/* @__PURE__ */ new Date()).getFullYear(), Number.isFinite(k) ? k : 0, 1);
}
function ae(a) {
  const d = a.getFullYear(), b = String(a.getMonth() + 1).padStart(2, "0"), u = String(a.getDate()).padStart(2, "0");
  return `${d}-${b}-${u}`;
}
function He(a) {
  const d = new Date(a.getFullYear(), a.getMonth(), 1), b = (d.getDay() + 6) % 7, u = new Date(d);
  u.setDate(d.getDate() - b);
  const k = [];
  for (let y = 0; y < 42; y += 1) {
    const w = new Date(u);
    w.setDate(u.getDate() + y), k.push({
      iso: ae(w),
      day: w.getDate(),
      inCurrentMonth: w.getMonth() === a.getMonth()
    });
  }
  return k;
}
function Ye({
  config: a,
  widgetId: d,
  activeConversationId: b,
  initialActionId: u = null,
  visitorContact: k,
  onBack: y,
  onDismiss: w,
  embedded: S = !1,
  onSubmitted: O,
  onApiError: g,
  blockedReason: P = null
}) {
  var ke;
  const N = a.forms || [], j = a.actions || [], f = ne(
    () => j.length > 0 ? j : N.map((e) => ({
      id: -e.id,
      name: e.name,
      description: e.description || null,
      trigger_hint: null,
      form_id: e.id,
      form_name: e.name || null
    })),
    [j, N]
  ), [I, Z] = $(
    u ?? ((ke = f[0]) == null ? void 0 : ke.id) ?? null
  ), [m, R] = $({}), [se, F] = $({}), [ie, _] = $(null), [x, U] = $({}), [A, X] = $(!1), [H, oe] = $(!1), [be, Ne] = $(!1), V = K(null), [c, D] = $(null), [ce, Q] = $(null), [L, Y] = $(null), [ve, ee] = $({}), T = K({}), le = K({}), ue = K({}), z = K({}), E = K(null), G = K(null), M = f.find((e) => e.id === I) || null, l = M ? N.find((e) => e.id === M.form_id) || null : N[0] || null, te = ne(
    () => {
      var e;
      return (((e = l == null ? void 0 : l.schema_json) == null ? void 0 : e.fields) || []).filter((t) => t.type !== "hidden");
    },
    [l]
  ), me = ne(
    () => {
      var e;
      return (((e = l == null ? void 0 : l.schema_json) == null ? void 0 : e.fields) || []).filter((t) => t.type === "hidden" && t.key).reduce((t, r) => (t[r.key] = r.value || "", t), {});
    },
    [l]
  );
  B(() => {
    if (u && f.some((e) => e.id === u)) {
      Z(u);
      return;
    }
    !I && f.length > 0 && Z(f[0].id);
  }, [u, f, I]), B(() => {
    Q(null), Y(null), F({}), _(null);
  }, [I, l == null ? void 0 : l.id]), B(() => () => {
    E.current !== null && window.clearTimeout(E.current);
  }, []), B(() => {
    const e = (t) => {
      if (!L) return;
      const r = le.current[L];
      if (!r) return;
      const s = typeof t.composedPath == "function" ? t.composedPath() : [];
      (s.length > 0 ? s.includes(r) : r.contains(t.target)) || Y(null);
    };
    return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
  }, [L]);
  const v = (e, t) => {
    R((r) => ({ ...r, [e]: t })), U((r) => ({ ...r, [e]: "" })), D((r) => (r == null ? void 0 : r.type) === "error" ? null : r);
  }, C = (e) => Array.isArray(e) ? e.map((t) => String(t).trim()).filter((t) => t.length > 0) : [], pe = (e) => Array.isArray(e) ? e.map((t) => String(t)).filter((t) => t.length > 0) : [], de = (e) => e.required === !0 || e.required === 1 || e.required === "1" || e.required === "true", $e = (e) => {
    window.requestAnimationFrame(() => {
      const t = ue.current[e];
      t == null || t.scrollIntoView({ behavior: "smooth", block: "center" });
      const r = z.current[e];
      r == null || r.focus();
    });
  }, ye = (e) => {
    const t = Number(e.max_size_kb ?? 5120);
    return (Number.isFinite(t) && t > 0 ? t : 5120) * 1024;
  }, we = (e) => {
    const t = ye(e) / 1048576;
    return `${Number.isInteger(t) ? t.toFixed(0) : t.toFixed(1)} MB`;
  }, Se = (e, t) => {
    const r = C(t.accept).map((p) => p.toLowerCase());
    if (r.length < 1) return !0;
    const s = (e.type || "").toLowerCase(), o = (e.name || "").toLowerCase(), i = o.lastIndexOf("."), h = i >= 0 ? o.slice(i) : "";
    for (const p of r)
      if (p) {
        if (p.startsWith(".")) {
          if (h === p) return !0;
          continue;
        }
        if (p.includes("/")) {
          if (p.endsWith("/*")) {
            const W = p.split("/")[0];
            if (s.startsWith(`${W}/`)) return !0;
          } else if (s === p)
            return !0;
          continue;
        }
        if (h === `.${p}` || h === p) return !0;
      }
    return !1;
  }, he = (e) => {
    const t = te.map((r) => {
      const s = e[r.key];
      if (s == null) return null;
      if (Array.isArray(s)) {
        const i = s.map((h) => String(h).trim()).filter((h) => h.length > 0);
        return i.length < 1 ? null : `- ${r.label || r.key}: ${i.join(", ")}`;
      }
      if (r.type === "checkbox")
        return s !== !0 && s !== 1 && s !== "1" ? null : `- ${r.label || r.key}: Da`;
      const o = String(s).trim();
      return o ? `- ${r.label || r.key}: ${o}` : null;
    }).filter((r) => !!r);
    return `Forma: ${(l == null ? void 0 : l.name) || "Forma"}
${t.join(`
`)}`;
  }, Ie = () => {
    if (!l) return { valid: !1, firstInvalidFieldKey: null };
    const e = {};
    let t = null;
    for (const r of te) {
      const s = m[r.key];
      de(r) && (r.type === "checkbox" ? C(r.options).length > 0 ? pe(s).length < 1 && (e[r.key] = "Ovo polje je obavezno.", t || (t = r.key)) : s !== !0 && (e[r.key] = "Ovo polje je obavezno.", t || (t = r.key)) : (s == null || String(s).trim() === "") && (e[r.key] = "Ovo polje je obavezno.", t || (t = r.key))), r.type === "email" && s && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(s)) && (e[r.key] = "Unesite ispravan email.", t || (t = r.key));
    }
    return U(e), { valid: Object.keys(e).length === 0, firstInvalidFieldKey: t };
  }, xe = async (e) => {
    if (e.preventDefault(), H || A || (c == null ? void 0 : c.type) === "success") return;
    if (D(null), P) {
      D({ type: "error", message: P });
      return;
    }
    if (!l) return;
    const t = Ie();
    if (!t.valid) {
      D({ type: "error", message: "Nije poslano. Provjerite obavezna polja." }), t.firstInvalidFieldKey && $e(t.firstInvalidFieldKey);
      return;
    }
    const r = () => {
      y && (E.current !== null && window.clearTimeout(E.current), E.current = window.setTimeout(() => {
        y();
      }, 900));
    };
    if (a.mockMode) {
      const s = { ...me, ...m };
      _(null), D({
        type: "success",
        message: l.success_message || "Hvala! Prijava je poslana."
      }), O && O(he(s)), R({}), F({}), U({}), r();
      return;
    }
    X(!0);
    try {
      const s = Number(l.id);
      if (!Number.isInteger(s) || s <= 0) {
        D({ type: "error", message: "Nije poslano. Forma nije pravilno konfigurisana." }), X(!1);
        return;
      }
      const o = { ...me, ...m }, i = Object.fromEntries(
        Object.entries(se).filter(([, q]) => q instanceof File)
      ), h = JSON.stringify(o), p = G.current, W = Object.keys(i), ze = p && W.length === Object.keys(p.files).length && W.every((q) => i[q] === p.files[q]);
      (!p || p.formId !== s || p.conversationId !== b || p.payload !== h || !ze) && (G.current = {
        formId: s,
        conversationId: b,
        payload: h,
        files: { ...i },
        key: crypto.randomUUID()
      }), _(Object.keys(i).length > 0 ? 0 : null);
      const De = await Te({
        widgetId: d,
        formId: s,
        payload: o,
        files: i,
        onUploadProgress: (q) => _(q),
        apiUrl: a.apiUrl,
        idempotencyKey: G.current.key,
        conversationId: b,
        visitorName: k == null ? void 0 : k.name,
        visitorEmail: k == null ? void 0 : k.email,
        visitorPhone: k == null ? void 0 : k.phone
      });
      D({
        type: "success",
        message: De.message || l.success_message || "Hvala! Prijava je poslana."
      }), G.current = null, O && O(he(o)), R({}), F({}), _(null), U({}), r();
    } catch (s) {
      const o = (s == null ? void 0 : s.message) || "Greška pri slanju forme.";
      _(null), D({ type: "error", message: `Nije poslano. ${o}` }), g == null || g(s, "Greška pri slanju forme.");
    } finally {
      X(!1);
    }
  };
  return !a.formsEnabled || a.formsAvailable === !1 || N.length === 0 ? /* @__PURE__ */ n("div", { className: "pitaj-contact-screen", children: /* @__PURE__ */ n("div", { className: "pitaj-contact-head", children: [
    !S && y ? /* @__PURE__ */ n("button", { onClick: y, className: "pitaj-icon-btn", "aria-label": "Nazad", title: "Nazad", children: /* @__PURE__ */ n(re, { size: 18 }) }) : null,
    /* @__PURE__ */ n("div", { children: [
      /* @__PURE__ */ n("h3", { className: "pitaj-contact-title", children: "Forme" }),
      /* @__PURE__ */ n("p", { className: "pitaj-contact-sub", children: "Trenutno nema dostupnih formi." })
    ] })
  ] }) }) : /* @__PURE__ */ n("div", { className: `pitaj-contact-screen ${S ? "pitaj-contact-screen-embedded" : ""}`, children: [
    S ? y ? /* @__PURE__ */ n("div", { className: "pitaj-contact-head pitaj-contact-head-embedded", children: [
      /* @__PURE__ */ n("div", { children: /* @__PURE__ */ n("h3", { className: "pitaj-contact-title", children: (l == null ? void 0 : l.name) || "Forma" }) }),
      /* @__PURE__ */ n("button", { disabled: A || H || (c == null ? void 0 : c.type) === "success", onClick: async () => {
        if (!w || !(M != null && M.dismiss_message)) {
          y();
          return;
        }
        (!V.current || V.current.actionId !== M.id) && (V.current = { actionId: M.id, key: crypto.randomUUID() }), oe(!0);
        try {
          await w(M, V.current.key), y();
        } catch (e) {
          Ne(!0), g == null || g(e);
        } finally {
          oe(!1);
        }
      }, className: "pitaj-icon-btn", "aria-label": "Zatvori formu", title: "Zatvori formu", children: /* @__PURE__ */ n(re, { size: 16 }) })
    ] }) : null : /* @__PURE__ */ n("div", { className: "pitaj-contact-head", children: [
      y ? /* @__PURE__ */ n("button", { onClick: y, className: "pitaj-icon-btn", "aria-label": "Nazad", title: "Nazad", children: /* @__PURE__ */ n(re, { size: 18 }) }) : null,
      /* @__PURE__ */ n("div", { children: [
        /* @__PURE__ */ n("h3", { className: "pitaj-contact-title", children: "Forme" }),
        /* @__PURE__ */ n("p", { className: "pitaj-contact-sub", children: "Odaberite akciju i pošaljite podatke." })
      ] })
    ] }),
    be && /* @__PURE__ */ n("div", { role: "alert", children: [
      "Poruku o zatvaranju nije moguće sačuvati. Pokušajte ponovo ili ",
      /* @__PURE__ */ n("button", { type: "button", disabled: H, onClick: y, children: "zatvorite bez poruke" }),
      "."
    ] }),
    !S && f.length > 1 && /* @__PURE__ */ n("div", { className: "pitaj-form-actions", children: f.map((e) => /* @__PURE__ */ n(
      "button",
      {
        type: "button",
        className: `pitaj-form-action-chip ${I === e.id ? "is-active" : ""}`,
        onClick: () => {
          Z(e.id), R({}), F({}), _(null), U({}), D(null);
        },
        children: e.name
      },
      e.id
    )) }),
    l ? /* @__PURE__ */ n("form", { onSubmit: xe, className: "pitaj-contact-form", noValidate: !0, children: [
      te.map((e) => /* @__PURE__ */ n(
        "div",
        {
          className: "pitaj-contact-field",
          ref: (t) => {
            ue.current[e.key] = t;
          },
          children: [
            /* @__PURE__ */ n("label", { className: "pitaj-contact-label", htmlFor: `cd-form-${e.key}`, children: [
              e.label || e.key,
              de(e) ? /* @__PURE__ */ n("span", { className: "pitaj-required-indicator", "aria-hidden": "true", children: " *" }) : null
            ] }),
            e.type === "textarea" ? /* @__PURE__ */ n(
              "textarea",
              {
                id: `cd-form-${e.key}`,
                ref: (t) => {
                  z.current[e.key] = t;
                },
                value: String(m[e.key] ?? ""),
                onInput: (t) => v(e.key, t.target.value),
                placeholder: e.placeholder || "",
                className: `pitaj-contact-input ${x[e.key] ? "has-error" : ""}`
              }
            ) : e.type === "radio" ? /* @__PURE__ */ n("div", { className: `pitaj-form-option-group ${x[e.key] ? "has-error" : ""}`, children: C(e.options).map((t, r) => {
              const s = String(m[e.key] ?? "") === t;
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
                        ref: (o) => {
                          r === 0 && (z.current[e.key] = o);
                        },
                        checked: s,
                        onChange: () => v(e.key, t)
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
                  le.current[e.key] = t;
                },
                className: `pitaj-custom-select ${x[e.key] ? "has-error" : ""}`,
                children: [
                  /* @__PURE__ */ n(
                    "button",
                    {
                      id: `cd-form-${e.key}`,
                      type: "button",
                      className: "pitaj-custom-select-trigger",
                      ref: (t) => {
                        z.current[e.key] = t;
                      },
                      onClick: () => Y((t) => t === e.key ? null : e.key),
                      children: [
                        /* @__PURE__ */ n("span", { children: String(m[e.key] ?? "") || "Odaberite..." }),
                        /* @__PURE__ */ n(Me, { size: 14, className: L === e.key ? "is-open" : "" })
                      ]
                    }
                  ),
                  L === e.key ? /* @__PURE__ */ n("div", { className: "pitaj-custom-select-menu", children: C(e.options).map((t) => /* @__PURE__ */ n(
                    "button",
                    {
                      type: "button",
                      className: `pitaj-custom-select-option ${String(m[e.key] ?? "") === t ? "is-active" : ""}`,
                      onClick: () => {
                        v(e.key, t), Y(null);
                      },
                      children: [
                        /* @__PURE__ */ n("span", { children: t }),
                        String(m[e.key] ?? "") === t ? /* @__PURE__ */ n(je, { size: 13 }) : null
                      ]
                    },
                    t
                  )) }) : null
                ]
              }
            ) : e.type === "file" ? /* @__PURE__ */ n("div", { className: `pitaj-file-picker ${x[e.key] ? "has-error" : ""}`, children: [
              /* @__PURE__ */ n(
                "input",
                {
                  id: `cd-form-${e.key}`,
                  ref: (t) => {
                    T.current[e.key] = t;
                  },
                  type: "file",
                  accept: C(e.accept).join(","),
                  onChange: (t) => {
                    var s;
                    const r = (s = t.target.files) == null ? void 0 : s[0];
                    if (r) {
                      if (!Se(r, e)) {
                        F((i) => {
                          const h = { ...i };
                          return delete h[e.key], h;
                        }), R((i) => ({ ...i, [e.key]: "" })), U((i) => ({
                          ...i,
                          [e.key]: "Odabrani tip datoteke nije dozvoljen."
                        })), T.current[e.key] && (T.current[e.key].value = "");
                        return;
                      }
                      const o = ye(e);
                      if (r.size > o) {
                        F((i) => {
                          const h = { ...i };
                          return delete h[e.key], h;
                        }), R((i) => ({ ...i, [e.key]: "" })), U((i) => ({
                          ...i,
                          [e.key]: `Datoteka je prevelika. Maksimalno ${we(e)}.`
                        })), T.current[e.key] && (T.current[e.key].value = "");
                        return;
                      }
                      F((i) => ({ ...i, [e.key]: r })), v(e.key, r.name);
                    } else
                      F((o) => {
                        const i = { ...o };
                        return delete i[e.key], i;
                      }), v(e.key, "");
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
                    z.current[e.key] = t;
                  },
                  onClick: () => {
                    var t;
                    return (t = T.current[e.key]) == null ? void 0 : t.click();
                  },
                  children: [
                    /* @__PURE__ */ n(Oe, { size: 14 }),
                    /* @__PURE__ */ n("span", { children: "Odaberite datoteku" })
                  ]
                }
              ),
              /* @__PURE__ */ n("span", { className: "pitaj-file-name", children: String(m[e.key] || "Nijedna datoteka nije odabrana") }),
              A && se[e.key] ? /* @__PURE__ */ n(fe, { children: [
                /* @__PURE__ */ n("div", { className: "pitaj-file-progress", "aria-hidden": "true", children: /* @__PURE__ */ n(
                  "span",
                  {
                    className: "pitaj-file-progress-bar",
                    style: { width: `${Math.max(0, Math.min(100, ie ?? 0))}%` }
                  }
                ) }),
                /* @__PURE__ */ n("span", { className: "pitaj-file-uploading", children: [
                  "Otpremanje datoteke... ",
                  ie ?? 0,
                  "%"
                ] })
              ] }) : null
            ] }) : e.type === "checkbox" ? C(e.options).length > 0 ? /* @__PURE__ */ n("div", { className: `pitaj-form-option-group ${x[e.key] ? "has-error" : ""}`, children: C(e.options).map((t, r) => {
              const s = pe(m[e.key]), o = s.includes(t);
              return /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  className: `pitaj-multi-option ${o ? "is-active" : ""}`,
                  ref: (i) => {
                    r === 0 && (z.current[e.key] = i);
                  },
                  onClick: () => {
                    const i = o ? s.filter((h) => h !== t) : [...s, t];
                    v(e.key, i);
                  },
                  children: [
                    /* @__PURE__ */ n("span", { className: "pitaj-multi-option-check", children: o ? "✓" : "" }),
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
                    z.current[e.key] = t;
                  },
                  checked: m[e.key] === !0,
                  onChange: (t) => v(e.key, !!t.target.checked)
                }
              ),
              /* @__PURE__ */ n("span", { children: e.placeholder || e.label || "Potvrđujem" })
            ] }) : e.type === "date" ? /* @__PURE__ */ n("div", { className: `pitaj-date-picker ${x[e.key] ? "has-error" : ""}`, children: [
              /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  className: "pitaj-date-trigger",
                  ref: (t) => {
                    z.current[e.key] = t;
                  },
                  onClick: () => {
                    const t = ce === e.key ? null : e.key;
                    if (Q(t), t) {
                      const r = String(m[e.key] || "");
                      ee((s) => ({
                        ...s,
                        [e.key]: s[e.key] || J(r)
                      }));
                    }
                  },
                  children: [
                    /* @__PURE__ */ n("span", { children: m[e.key] ? qe(String(m[e.key])) : e.placeholder || "Odaberite datum" }),
                    /* @__PURE__ */ n(Pe, { size: 14 })
                  ]
                }
              ),
              ce === e.key ? /* @__PURE__ */ n("div", { className: "pitaj-calendar-popover", children: (() => {
                const t = ve[e.key] || J(String(m[e.key] || "")), r = Ee(t), s = He(r);
                return /* @__PURE__ */ n(fe, { children: [
                  /* @__PURE__ */ n("div", { className: "pitaj-calendar-head", children: [
                    /* @__PURE__ */ n(
                      "button",
                      {
                        type: "button",
                        className: "pitaj-calendar-nav",
                        onClick: () => {
                          const o = new Date(r.getFullYear(), r.getMonth() - 1, 1);
                          ee((i) => ({ ...i, [e.key]: J(ae(o)) }));
                        },
                        children: /* @__PURE__ */ n(_e, { size: 14 })
                      }
                    ),
                    /* @__PURE__ */ n("strong", { children: Le(r) }),
                    /* @__PURE__ */ n(
                      "button",
                      {
                        type: "button",
                        className: "pitaj-calendar-nav",
                        onClick: () => {
                          const o = new Date(r.getFullYear(), r.getMonth() + 1, 1);
                          ee((i) => ({ ...i, [e.key]: J(ae(o)) }));
                        },
                        children: /* @__PURE__ */ n(Ue, { size: 14 })
                      }
                    )
                  ] }),
                  /* @__PURE__ */ n("div", { className: "pitaj-calendar-weekdays", children: ["Po", "Ut", "Sr", "Če", "Pe", "Su", "Ne"].map((o) => /* @__PURE__ */ n("span", { children: o }, `${e.key}-${o}`)) }),
                  /* @__PURE__ */ n("div", { className: "pitaj-calendar-grid", children: s.map((o) => {
                    const i = String(m[e.key] || "") === o.iso;
                    return /* @__PURE__ */ n(
                      "button",
                      {
                        type: "button",
                        className: `pitaj-calendar-day ${o.inCurrentMonth ? "" : "is-muted"} ${i ? "is-selected" : ""}`,
                        onClick: () => {
                          v(e.key, o.iso), Q(null);
                        },
                        children: o.day
                      },
                      `${e.key}-${o.iso}`
                    );
                  }) })
                ] });
              })() }) : null
            ] }) : e.type === "number" ? /* @__PURE__ */ n("div", { className: `pitaj-number-stepper ${x[e.key] ? "has-error" : ""}`, children: [
              /* @__PURE__ */ n(
                "button",
                {
                  type: "button",
                  className: "pitaj-number-stepper-btn",
                  onClick: () => {
                    const t = Number(String(m[e.key] ?? "0").replace(",", ".")), r = Number.isFinite(t) ? t - 1 : 0;
                    v(e.key, String(r));
                  },
                  children: /* @__PURE__ */ n(Ce, { size: 14 })
                }
              ),
              /* @__PURE__ */ n(
                "input",
                {
                  id: `cd-form-${e.key}`,
                  type: "text",
                  inputMode: "decimal",
                  ref: (t) => {
                    z.current[e.key] = t;
                  },
                  value: String(m[e.key] ?? ""),
                  onInput: (t) => {
                    const r = String(t.target.value ?? "").replace(",", ".");
                    (r === "" || /^-?\d*(\.\d*)?$/.test(r)) && v(e.key, r);
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
                    const t = Number(String(m[e.key] ?? "0").replace(",", ".")), r = Number.isFinite(t) ? t + 1 : 1;
                    v(e.key, String(r));
                  },
                  children: /* @__PURE__ */ n(Ke, { size: 14 })
                }
              )
            ] }) : /* @__PURE__ */ n(
              "input",
              {
                id: `cd-form-${e.key}`,
                type: e.type === "email" ? "email" : e.type === "phone" ? "tel" : "text",
                ref: (t) => {
                  z.current[e.key] = t;
                },
                value: String(m[e.key] ?? ""),
                onInput: (t) => v(e.key, t.target.value),
                placeholder: e.placeholder || "",
                className: `pitaj-contact-input ${x[e.key] ? "has-error" : ""}`
              }
            ),
            x[e.key] && /* @__PURE__ */ n("span", { className: "pitaj-contact-error", children: x[e.key] })
          ]
        },
        e.key
      )),
      c ? /* @__PURE__ */ n("div", { className: `pitaj-form-success-inline ${c.type === "error" ? "is-error" : "is-success"}`, children: [
        c.type === "error" ? /* @__PURE__ */ n(Re, { size: 16 }) : /* @__PURE__ */ n(je, { size: 16 }),
        /* @__PURE__ */ n("span", { children: c.message })
      ] }) : null,
      /* @__PURE__ */ n(
        "button",
        {
          type: "submit",
          className: `pitaj-contact-submit ${(c == null ? void 0 : c.type) === "success" ? "is-success" : ""} ${(c == null ? void 0 : c.type) === "error" ? "is-error" : ""}`,
          disabled: A || H || P !== null || (c == null ? void 0 : c.type) === "success",
          children: A ? "Slanje..." : (c == null ? void 0 : c.type) === "success" ? "Poslano" : (c == null ? void 0 : c.type) === "error" ? "Nije poslano" : l.submit_label || "Pošalji"
        }
      )
    ] }) : null
  ] });
}
export {
  Ye as FormActionsScreen
};
