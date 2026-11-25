import { d as j, A as C, k as pa, q as H, h as ha, u as a, r as ma, f as ba, P as z, S as A, H as B, i as ua, F, j as Q, l as V, m as Z, n as _, o as ga, c as ja, p as ka, s as va, v as Na, x as ya, y as fa, z as wa, B as za } from "./widget-DGHLQ-7t.js";
const Ia = za(
  () => import("./InlineWidgetRenderer-BRoZCTH_.js"),
  (s) => s.InlineWidgetRenderer
);
function Da(s = "bs") {
  const i = (/* @__PURE__ */ new Date()).getHours();
  return s === "en" ? i >= 5 && i < 12 ? "Good morning" : i >= 12 && i < 18 ? "Good afternoon" : "Good evening" : i >= 5 && i < 12 ? "Dobro jutro" : i >= 12 && i < 18 ? "Dobar dan" : "Dobro veče";
}
function Ta(s) {
  const i = typeof s == "string" ? new Date(s) : s;
  return isNaN(i.getTime()) ? "" : i.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function Ca(s) {
  const i = typeof s == "string" ? new Date(s) : s;
  return isNaN(i.getTime()) ? "" : i.toLocaleDateString([], { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
}
function $a({
  config: s,
  screen: i,
  setScreen: d,
  conversations: O,
  activeConversation: l,
  activeConversationId: W,
  selectConversation: q,
  deleteConversation: E,
  startNewConversation: J,
  sendUserMessage: X,
  isStreaming: h,
  rateLimitCountdown: I,
  errorBanner: L,
  sessionInvalid: La,
  resetSession: Ra,
  humanActive: Pa = !1,
  activeLanguage: Y = "bs",
  formsEnabled: xa = !1,
  inlineFormActionId: Ua = null,
  setInlineFormActionId: Ma,
  visitorContact: Ga,
  onWorkflowWidget: S,
  onSubmitSatisfaction: k,
  onApiError: v,
  onProductEvent: aa
}) {
  const [m, b] = j(""), [o, N] = j([]), [ea, R] = j(null), [ta, ia] = j({}), [D, sa] = j(""), y = C(null), f = C(null), T = C(null), u = s.content || {}, g = s.botName || s.companyName || "Pitaj.io", p = s.avatar || u.avatarUrl, na = s.showBranding !== !1 && s.poweredBy !== !1, r = pa({
    widgetId: s.companyId,
    apiUrl: s.apiUrl,
    onTranscript: H((e) => {
      b((t) => t ? `${t} ${e}` : e);
    }, []),
    onError: H((e) => {
      v == null || v(e, "Greška pri transkripciji.");
    }, [v])
  });
  ha(() => {
    i === "conversation" && f.current && (f.current.scrollTop = f.current.scrollHeight);
  }, [i, l == null ? void 0 : l.messages, h]);
  const P = (e) => {
    const t = e.currentTarget;
    b(t.value), t.style.height = "auto", t.style.height = `${Math.min(t.scrollHeight, 180)}px`;
  }, x = (e) => {
    N((t) => {
      const n = t.find((c) => c.id === e);
      if (n != null && n.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(n.previewUrl);
        } catch {
        }
      return t.filter((c) => c.id !== e);
    });
  }, w = (e) => {
    const t = (e ?? m).trim();
    if (!t && o.length === 0 || I !== null || h) return;
    let n = t;
    o.length > 0 && (n += wa(o)), b(""), N([]), y.current && (y.current.style.height = "auto"), i === "new-conversation" || !l ? J(n) : X(n);
  }, U = (e) => {
    e.key === "Enter" && !e.shiftKey && (e.preventDefault(), w());
  }, ca = async (e, t) => {
    try {
      await navigator.clipboard.writeText(t), R(e), setTimeout(() => R(null), 2e3);
    } catch {
    }
  }, M = (e, t) => {
    ia((n) => ({ ...n, [e]: t })), k == null || k(t, t === "positive" ? 5 : 1);
  }, G = O.filter((e) => {
    if (!D.trim()) return !0;
    const t = D.toLowerCase(), n = (e.title || "").toLowerCase().includes(t), c = (e.preview || "").toLowerCase().includes(t);
    return n || c;
  }), la = s.suggestedQuestions && s.suggestedQuestions.length > 0 ? s.suggestedQuestions : [
    "Kako vam mogu pomoći?",
    "Koje su vaše cijene i planovi?",
    "Kako funkcioniše podrška?",
    "Radno vrijeme i kontakt"
  ], ra = u.welcomeHeadline || Da(Y), oa = s.welcomeMessage || "Kako vam možemo pomoći danas?";
  return /* @__PURE__ */ a("div", { className: "pitaj-backstage-root", children: [
    u.attachmentsEnabled !== !1 && /* @__PURE__ */ a(
      "input",
      {
        ref: T,
        type: "file",
        multiple: !0,
        className: "pitaj-hidden-input",
        onChange: async (e) => {
          const t = e.currentTarget.files;
          if (e.currentTarget.value = "", !t || t.length === 0) return;
          const n = await ma(t);
          N((c) => [...c, ...n].slice(0, 4));
        }
      }
    ),
    /* @__PURE__ */ a("header", { className: "pitaj-backstage-header", children: [
      /* @__PURE__ */ a("div", { className: "pitaj-backstage-header-left", children: [
        i !== "new-conversation" ? /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            className: "pitaj-backstage-back-btn",
            onClick: () => {
              d(i === "history" && l ? "conversation" : "new-conversation");
            },
            title: "Nazad",
            children: [
              /* @__PURE__ */ a(ba, { size: 18 }),
              /* @__PURE__ */ a("span", { children: g })
            ]
          }
        ) : /* @__PURE__ */ a("div", { className: "pitaj-backstage-brand", children: [
          p ? /* @__PURE__ */ a("img", { src: p, alt: g, className: "pitaj-backstage-avatar" }) : /* @__PURE__ */ a("div", { className: "pitaj-backstage-avatar-fallback", children: /* @__PURE__ */ a(z, { size: 18 }) }),
          /* @__PURE__ */ a("div", { className: "pitaj-backstage-brand-text", children: /* @__PURE__ */ a("span", { className: "pitaj-backstage-brand-name", children: g }) })
        ] }),
        i === "conversation" && l && /* @__PURE__ */ a(A, { children: [
          /* @__PURE__ */ a("span", { className: "pitaj-backstage-divider", children: "/" }),
          /* @__PURE__ */ a("span", { className: "pitaj-backstage-header-title truncate", title: l.title || "Razgovor", children: l.title || "Razgovor" })
        ] }),
        i === "history" && /* @__PURE__ */ a(A, { children: [
          /* @__PURE__ */ a("span", { className: "pitaj-backstage-divider", children: "/" }),
          /* @__PURE__ */ a("span", { className: "pitaj-backstage-header-title", children: "Istorija razgovora" })
        ] })
      ] }),
      /* @__PURE__ */ a("div", { className: "pitaj-backstage-header-right", children: [
        i !== "history" && /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            className: "pitaj-backstage-icon-btn",
            onClick: () => d("history"),
            title: "Istorija razgovora",
            "aria-label": "Istorija razgovora",
            children: [
              /* @__PURE__ */ a(B, { size: 16 }),
              /* @__PURE__ */ a("span", { className: "pitaj-btn-label", children: "Istorija" })
            ]
          }
        ),
        /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            className: "pitaj-backstage-icon-btn pitaj-btn-primary",
            onClick: () => {
              d("new-conversation"), b(""), N([]);
            },
            title: "Novi razgovor",
            children: [
              /* @__PURE__ */ a(ua, { size: 16 }),
              /* @__PURE__ */ a("span", { className: "pitaj-btn-label", children: "Novi upit" })
            ]
          }
        )
      ] })
    ] }),
    L && /* @__PURE__ */ a("div", { className: "pitaj-backstage-banner error", children: /* @__PURE__ */ a("span", { children: L }) }),
    /* @__PURE__ */ a("main", { className: "pitaj-backstage-main", children: [
      i === "new-conversation" && /* @__PURE__ */ a("div", { className: "pitaj-backstage-overview-wrap", children: /* @__PURE__ */ a("div", { className: "pitaj-backstage-overview", children: [
        /* @__PURE__ */ a("div", { className: "pitaj-backstage-hero", children: [
          /* @__PURE__ */ a("h1", { className: "pitaj-backstage-hero-title", children: ra }),
          /* @__PURE__ */ a("p", { className: "pitaj-backstage-hero-subtitle", children: oa })
        ] }),
        /* @__PURE__ */ a("div", { className: "pitaj-backstage-input-card", children: [
          o.length > 0 && /* @__PURE__ */ a("div", { className: "pitaj-backstage-attachments-chips", children: o.map((e) => /* @__PURE__ */ a("div", { className: "pitaj-backstage-chip", children: [
            /* @__PURE__ */ a(F, { size: 13, className: "pitaj-chip-icon" }),
            /* @__PURE__ */ a("span", { className: "pitaj-chip-name", children: e.name }),
            /* @__PURE__ */ a(
              "button",
              {
                type: "button",
                className: "pitaj-chip-remove",
                onClick: () => x(e.id),
                title: "Ukloni prilog",
                children: /* @__PURE__ */ a(Q, { size: 11 })
              }
            )
          ] }, e.id)) }),
          /* @__PURE__ */ a(
            "textarea",
            {
              ref: y,
              value: m,
              onInput: P,
              onKeyDown: U,
              placeholder: "Postavite pitanje ili opišite šta vas zanima...",
              rows: 2,
              className: "pitaj-backstage-textarea"
            }
          ),
          /* @__PURE__ */ a("div", { className: "pitaj-backstage-input-actions", children: [
            /* @__PURE__ */ a("div", { className: "pitaj-backstage-input-tools", children: [
              u.attachmentsEnabled !== !1 && /* @__PURE__ */ a(
                "button",
                {
                  type: "button",
                  className: "pitaj-backstage-tool-btn",
                  onClick: () => {
                    var e;
                    return (e = T.current) == null ? void 0 : e.click();
                  },
                  title: "Dodaj datoteku ili sliku",
                  "aria-label": "Dodaj datoteku",
                  children: /* @__PURE__ */ a(V, { size: 16 })
                }
              ),
              /* @__PURE__ */ a(
                "button",
                {
                  type: "button",
                  className: `pitaj-backstage-tool-btn ${r.isListening ? "is-recording" : ""}`,
                  onClick: () => r.isListening ? r.stopAndTranscribe() : r.start(),
                  title: r.isListening ? "Zaustavi snimanje" : "Glasovni unos",
                  "aria-label": "Glasovni unos",
                  children: /* @__PURE__ */ a(Z, { size: 16 })
                }
              )
            ] }),
            /* @__PURE__ */ a(
              "button",
              {
                type: "button",
                disabled: !m.trim() && o.length === 0 || h || I !== null,
                onClick: () => w(),
                className: "pitaj-backstage-send-btn",
                title: "Pošalji poruku",
                "aria-label": "Pošalji",
                children: /* @__PURE__ */ a(_, { size: 16 })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ a("div", { className: "pitaj-backstage-prompt-section", children: [
          /* @__PURE__ */ a("span", { className: "pitaj-backstage-prompt-heading", children: "Česta pitanja:" }),
          /* @__PURE__ */ a("div", { className: "pitaj-backstage-prompt-pills", children: la.map((e, t) => /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: "pitaj-backstage-prompt-pill",
              onClick: () => w(e),
              children: e
            },
            t
          )) })
        ] }),
        na && /* @__PURE__ */ a("div", { className: "pitaj-backstage-footer-branding", children: /* @__PURE__ */ a(
          "a",
          {
            href: "https://pitaj.io",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "pitaj-backstage-branding-link",
            children: [
              /* @__PURE__ */ a("span", { children: "Pokreće" }),
              /* @__PURE__ */ a(z, { size: 13 }),
              /* @__PURE__ */ a("strong", { children: "Pitaj.io" })
            ]
          }
        ) })
      ] }) }),
      i === "conversation" && l && /* @__PURE__ */ a("div", { className: "pitaj-backstage-conv-container", children: [
        /* @__PURE__ */ a("div", { ref: f, className: "pitaj-backstage-messages-scroll", children: /* @__PURE__ */ a("div", { className: "pitaj-backstage-messages-inner", children: [
          l.messages.map((e, t) => {
            const n = e.sender === "user", c = e.id || t, K = ta[c];
            return /* @__PURE__ */ a(
              "div",
              {
                className: `pitaj-backstage-msg-row ${n ? "is-user" : "is-ai"}`,
                children: [
                  !n && /* @__PURE__ */ a("div", { className: "pitaj-backstage-msg-avatar", children: p ? /* @__PURE__ */ a("img", { src: p, alt: g }) : /* @__PURE__ */ a(z, { size: 16 }) }),
                  /* @__PURE__ */ a("div", { className: "pitaj-backstage-msg-content-wrap", children: [
                    /* @__PURE__ */ a("div", { className: "pitaj-backstage-msg-bubble", children: /* @__PURE__ */ a(ga, { content: e.content }) }),
                    e.sources && e.sources.length > 0 && /* @__PURE__ */ a("div", { className: "pitaj-backstage-sources", children: [
                      /* @__PURE__ */ a("span", { className: "pitaj-sources-title", children: "Izvori:" }),
                      e.sources.map((da, $) => /* @__PURE__ */ a("span", { className: "pitaj-source-badge", children: da.title || `Dokument ${$ + 1}` }, $))
                    ] }),
                    e.widget && /* @__PURE__ */ a("div", { className: "pitaj-backstage-inline-widget", children: /* @__PURE__ */ a(
                      Ia,
                      {
                        widget: e.widget,
                        onWorkflowWidget: S,
                        onProductEvent: aa
                      }
                    ) }),
                    !n && /* @__PURE__ */ a("div", { className: "pitaj-backstage-msg-actions", children: [
                      /* @__PURE__ */ a("span", { className: "pitaj-msg-time", children: Ta(e.timestamp || /* @__PURE__ */ new Date()) }),
                      /* @__PURE__ */ a(
                        "button",
                        {
                          type: "button",
                          className: "pitaj-action-btn",
                          onClick: () => ca(c, e.content),
                          title: "Kopiraj odgovor",
                          children: ea === c ? /* @__PURE__ */ a(ja, { size: 13 }) : /* @__PURE__ */ a(ka, { size: 13 })
                        }
                      ),
                      k && /* @__PURE__ */ a("div", { className: "pitaj-feedback-group", children: [
                        /* @__PURE__ */ a(
                          "button",
                          {
                            type: "button",
                            className: `pitaj-action-btn ${K === "positive" ? "is-active" : ""}`,
                            onClick: () => M(c, "positive"),
                            title: "Korisno",
                            children: /* @__PURE__ */ a(va, { size: 13 })
                          }
                        ),
                        /* @__PURE__ */ a(
                          "button",
                          {
                            type: "button",
                            className: `pitaj-action-btn ${K === "negative" ? "is-active" : ""}`,
                            onClick: () => M(c, "negative"),
                            title: "Nije korisno",
                            children: /* @__PURE__ */ a(Na, { size: 13 })
                          }
                        )
                      ] })
                    ] })
                  ] })
                ]
              },
              c
            );
          }),
          h && /* @__PURE__ */ a("div", { className: "pitaj-backstage-msg-row is-ai", children: [
            /* @__PURE__ */ a("div", { className: "pitaj-backstage-msg-avatar", children: p ? /* @__PURE__ */ a("img", { src: p, alt: g }) : /* @__PURE__ */ a(z, { size: 16 }) }),
            /* @__PURE__ */ a("div", { className: "pitaj-backstage-msg-content-wrap", children: /* @__PURE__ */ a("div", { className: "pitaj-backstage-msg-bubble", children: /* @__PURE__ */ a(ya, {}) }) })
          ] })
        ] }) }),
        /* @__PURE__ */ a("div", { className: "pitaj-backstage-bottom-input-wrap", children: /* @__PURE__ */ a("div", { className: "pitaj-backstage-input-card bottom", children: [
          o.length > 0 && /* @__PURE__ */ a("div", { className: "pitaj-backstage-attachments-chips", children: o.map((e) => /* @__PURE__ */ a("div", { className: "pitaj-backstage-chip", children: [
            /* @__PURE__ */ a(F, { size: 13, className: "pitaj-chip-icon" }),
            /* @__PURE__ */ a("span", { className: "pitaj-chip-name", children: e.name }),
            /* @__PURE__ */ a(
              "button",
              {
                type: "button",
                className: "pitaj-chip-remove",
                onClick: () => x(e.id),
                title: "Ukloni prilog",
                children: /* @__PURE__ */ a(Q, { size: 11 })
              }
            )
          ] }, e.id)) }),
          /* @__PURE__ */ a(
            "textarea",
            {
              ref: y,
              value: m,
              onInput: P,
              onKeyDown: U,
              placeholder: "Napišite poruku...",
              rows: 1,
              className: "pitaj-backstage-textarea"
            }
          ),
          /* @__PURE__ */ a("div", { className: "pitaj-backstage-input-actions", children: [
            /* @__PURE__ */ a("div", { className: "pitaj-backstage-input-tools", children: [
              u.attachmentsEnabled !== !1 && /* @__PURE__ */ a(
                "button",
                {
                  type: "button",
                  className: "pitaj-backstage-tool-btn",
                  onClick: () => {
                    var e;
                    return (e = T.current) == null ? void 0 : e.click();
                  },
                  title: "Dodaj datoteku",
                  "aria-label": "Dodaj datoteku",
                  children: /* @__PURE__ */ a(V, { size: 16 })
                }
              ),
              /* @__PURE__ */ a(
                "button",
                {
                  type: "button",
                  className: `pitaj-backstage-tool-btn ${r.isListening ? "is-recording" : ""}`,
                  onClick: () => r.isListening ? r.stopAndTranscribe() : r.start(),
                  title: r.isListening ? "Zaustavi" : "Glasovni unos",
                  "aria-label": "Glasovni unos",
                  children: /* @__PURE__ */ a(Z, { size: 16 })
                }
              )
            ] }),
            /* @__PURE__ */ a(
              "button",
              {
                type: "button",
                disabled: !m.trim() && o.length === 0 || h || I !== null,
                onClick: () => w(),
                className: "pitaj-backstage-send-btn",
                title: "Pošalji",
                "aria-label": "Pošalji",
                children: /* @__PURE__ */ a(_, { size: 16 })
              }
            )
          ] })
        ] }) })
      ] }),
      i === "history" && /* @__PURE__ */ a("div", { className: "pitaj-backstage-history-container", children: /* @__PURE__ */ a("div", { className: "pitaj-backstage-history-inner", children: [
        /* @__PURE__ */ a("div", { className: "pitaj-history-search-bar", children: /* @__PURE__ */ a(
          "input",
          {
            type: "text",
            value: D,
            onInput: (e) => sa(e.currentTarget.value),
            placeholder: "Pretraži prethodne razgovore...",
            className: "pitaj-history-search-input"
          }
        ) }),
        G.length === 0 ? /* @__PURE__ */ a("div", { className: "pitaj-backstage-empty-history", children: [
          /* @__PURE__ */ a(B, { size: 32, className: "pitaj-empty-icon" }),
          /* @__PURE__ */ a("h3", { children: "Nema pronađenih razgovora" }),
          /* @__PURE__ */ a("p", { children: "Vaši prethodni razgovori će se prikazati ovdje." }),
          /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: "pitaj-btn-primary",
              onClick: () => {
                d("new-conversation"), b("");
              },
              children: "Započni novi razgovor"
            }
          )
        ] }) : /* @__PURE__ */ a("div", { className: "pitaj-backstage-history-list", children: G.map((e) => /* @__PURE__ */ a(
          "div",
          {
            className: `pitaj-backstage-history-item ${e.id === W ? "is-active" : ""}`,
            onClick: () => {
              q(e), d("conversation");
            },
            children: [
              /* @__PURE__ */ a("div", { className: "pitaj-history-item-body", children: [
                /* @__PURE__ */ a("span", { className: "pitaj-history-item-title truncate", children: e.title || "Razgovor" }),
                /* @__PURE__ */ a("span", { className: "pitaj-history-item-preview truncate", children: e.preview || "Nema poruka" }),
                /* @__PURE__ */ a("span", { className: "pitaj-history-item-date", children: Ca(e.timestamp || /* @__PURE__ */ new Date()) })
              ] }),
              /* @__PURE__ */ a(
                "button",
                {
                  type: "button",
                  className: "pitaj-history-item-delete",
                  onClick: (t) => {
                    t.stopPropagation(), E(e.id);
                  },
                  title: "Obriši razgovor",
                  children: /* @__PURE__ */ a(fa, { size: 14 })
                }
              )
            ]
          },
          e.id
        )) })
      ] }) })
    ] })
  ] });
}
export {
  $a as BackstageLayout
};
