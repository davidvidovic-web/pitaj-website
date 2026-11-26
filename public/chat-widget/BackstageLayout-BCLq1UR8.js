import { d as j, A as C, k as ja, q as Q, h as ka, u as a, r as va, f as Na, P as T, S as V, H as Z, i as ya, F as _, j as O, l as W, m as q, n as J, t as fa, o as wa, c as za, p as Ia, s as Ta, v as Da, x as Pa, y as Ca, z as Aa, B as xa } from "./widget-DDYlAwV1.js";
const Ra = xa(
  () => import("./InlineWidgetRenderer-D_oS4g30.js"),
  (t) => t.InlineWidgetRenderer
);
function Ma(t = "bs") {
  const s = (/* @__PURE__ */ new Date()).getHours();
  return t === "en" ? s >= 5 && s < 12 ? "Good morning" : s >= 12 && s < 18 ? "Good afternoon" : "Good evening" : s >= 5 && s < 12 ? "Dobro jutro" : s >= 12 && s < 18 ? "Dobar dan" : "Dobro veče";
}
function Ua(t) {
  const s = typeof t == "string" ? new Date(t) : t;
  return isNaN(s.getTime()) ? "" : s.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
function La(t) {
  const s = typeof t == "string" ? new Date(t) : t;
  return isNaN(s.getTime()) ? "" : s.toLocaleDateString([], { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
}
function Ea({
  config: t,
  screen: s,
  setScreen: p,
  conversations: X,
  activeConversation: o,
  activeConversationId: Y,
  selectConversation: S,
  deleteConversation: aa,
  startNewConversation: ea,
  sendUserMessage: ta,
  isStreaming: h,
  rateLimitCountdown: k,
  errorBanner: A,
  sessionInvalid: ia,
  resetSession: x,
  humanActive: sa = !1,
  activeLanguage: R = "bs",
  formsEnabled: Ga = !1,
  inlineFormActionId: $a = null,
  setInlineFormActionId: Ha,
  visitorContact: Ka,
  onWorkflowWidget: na,
  onSubmitSatisfaction: v,
  onApiError: N,
  onProductEvent: la
}) {
  const [m, u] = j(""), [d, y] = j([]), [ca, M] = j(null), [ra, oa] = j({}), [D, da] = j(""), f = C(null), w = C(null), P = C(null), r = t.content || {}, z = (t.botName || t.title || "").trim(), pa = (t.companyName || t.name || "").trim(), g = z && !["Pitaj.io", "Pitaj.io Asistent", "AI Asistent"].includes(z) ? z : pa || z || "Podrška", b = t.avatar || r.avatarUrl, ha = t.showBranding !== !1 && t.poweredBy !== !1, c = ja({
    widgetId: t.companyId,
    apiUrl: t.apiUrl,
    onTranscript: Q((e) => {
      u((i) => i ? `${i} ${e}` : e);
    }, []),
    onError: Q((e) => {
      N == null || N(e, "Greška pri transkripciji.");
    }, [N])
  });
  ka(() => {
    s === "conversation" && w.current && (w.current.scrollTop = w.current.scrollHeight);
  }, [s, o == null ? void 0 : o.messages, h]);
  const U = (e) => {
    const i = e.currentTarget;
    u(i.value), i.style.height = "auto", i.style.height = `${Math.min(i.scrollHeight, 180)}px`;
  }, L = (e) => {
    y((i) => {
      const n = i.find((l) => l.id === e);
      if (n != null && n.previewUrl && typeof URL < "u")
        try {
          URL.revokeObjectURL(n.previewUrl);
        } catch {
        }
      return i.filter((l) => l.id !== e);
    });
  }, I = (e) => {
    const i = (e ?? m).trim();
    if (!i && d.length === 0 || k !== null || h || t.chatAvailable === !1) return;
    let n = i;
    d.length > 0 && (n += Aa(d)), u(""), y([]), f.current && (f.current.style.height = "auto"), s === "new-conversation" || !o ? ea(n) : ta(n);
  }, G = (e) => {
    e.key === "Enter" && !e.shiftKey && (e.preventDefault(), I());
  }, ba = async (e, i) => {
    try {
      await navigator.clipboard.writeText(i), M(e), setTimeout(() => M(null), 2e3);
    } catch {
    }
  }, $ = (e, i) => {
    oa((n) => ({ ...n, [e]: i })), v == null || v(i, i === "positive" ? 5 : 1);
  }, H = X.filter((e) => {
    if (!D.trim()) return !0;
    const i = D.toLowerCase(), n = (e.title || "").toLowerCase().includes(i), l = (e.preview || "").toLowerCase().includes(i);
    return n || l;
  }), K = (r.suggestedMessageRows || []).map((e) => e.text).filter(Boolean), B = r.showSuggestedMessages === !1 ? [] : K.length > 0 ? K : t.suggestedQuestions || [], ma = r.welcomeHeadline || Ma(R), ua = t.welcomeMessage || "Kako vam možemo pomoći danas?";
  return /* @__PURE__ */ a("div", { className: "pitaj-backstage-root", children: [
    r.attachmentsEnabled !== !1 && /* @__PURE__ */ a(
      "input",
      {
        ref: P,
        type: "file",
        multiple: !0,
        className: "pitaj-hidden-input",
        onChange: async (e) => {
          const i = e.currentTarget.files;
          if (e.currentTarget.value = "", !i || i.length === 0) return;
          const n = await va(i);
          y((l) => [...l, ...n].slice(0, 4));
        }
      }
    ),
    /* @__PURE__ */ a("header", { className: "pitaj-backstage-header", children: [
      /* @__PURE__ */ a("div", { className: "pitaj-backstage-header-left", children: [
        s !== "new-conversation" ? /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            className: "pitaj-backstage-back-btn",
            onClick: () => {
              p(s === "history" && o ? "conversation" : "new-conversation");
            },
            title: "Nazad",
            children: [
              /* @__PURE__ */ a(Na, { size: 18 }),
              /* @__PURE__ */ a("span", { children: g })
            ]
          }
        ) : /* @__PURE__ */ a("div", { className: "pitaj-backstage-brand", children: [
          b ? /* @__PURE__ */ a("img", { src: b, alt: g, className: "pitaj-backstage-avatar" }) : /* @__PURE__ */ a("div", { className: "pitaj-backstage-avatar-fallback", children: /* @__PURE__ */ a(T, { size: 18 }) }),
          /* @__PURE__ */ a("div", { className: "pitaj-backstage-brand-text", children: /* @__PURE__ */ a("span", { className: "pitaj-backstage-brand-name", children: g }) })
        ] }),
        s === "conversation" && o && /* @__PURE__ */ a(V, { children: [
          /* @__PURE__ */ a("span", { className: "pitaj-backstage-divider", children: "/" }),
          /* @__PURE__ */ a("span", { className: "pitaj-backstage-header-title truncate", title: o.title || "Razgovor", children: o.title || "Razgovor" })
        ] }),
        s === "history" && /* @__PURE__ */ a(V, { children: [
          /* @__PURE__ */ a("span", { className: "pitaj-backstage-divider", children: "/" }),
          /* @__PURE__ */ a("span", { className: "pitaj-backstage-header-title", children: "Istorija razgovora" })
        ] })
      ] }),
      /* @__PURE__ */ a("div", { className: "pitaj-backstage-header-right", children: [
        s !== "history" && /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            className: "pitaj-backstage-icon-btn",
            onClick: () => p("history"),
            title: "Istorija razgovora",
            "aria-label": "Istorija razgovora",
            children: /* @__PURE__ */ a(Z, { size: 16 })
          }
        ),
        /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            className: "pitaj-backstage-icon-btn pitaj-btn-primary",
            onClick: () => {
              p("new-conversation"), u(""), y([]);
            },
            title: "Novi razgovor",
            "aria-label": "Novi razgovor",
            children: /* @__PURE__ */ a(ya, { size: 16 })
          }
        )
      ] })
    ] }),
    A && /* @__PURE__ */ a("div", { className: "pitaj-backstage-banner error", children: [
      /* @__PURE__ */ a("span", { children: A }),
      ia && x && /* @__PURE__ */ a("button", { type: "button", onClick: x, children: "Pokreni novu sesiju" })
    ] }),
    /* @__PURE__ */ a("main", { className: "pitaj-backstage-main", children: [
      s === "new-conversation" && /* @__PURE__ */ a("div", { className: "pitaj-backstage-overview-wrap", children: /* @__PURE__ */ a("div", { className: "pitaj-backstage-overview", children: [
        /* @__PURE__ */ a("div", { className: "pitaj-backstage-hero", children: [
          /* @__PURE__ */ a("h1", { className: "pitaj-backstage-hero-title", children: ma }),
          /* @__PURE__ */ a("p", { className: "pitaj-backstage-hero-subtitle", children: ua })
        ] }),
        /* @__PURE__ */ a("div", { className: "pitaj-backstage-input-card", children: [
          d.length > 0 && /* @__PURE__ */ a("div", { className: "pitaj-backstage-attachments-chips", children: d.map((e) => /* @__PURE__ */ a("div", { className: "pitaj-backstage-chip", children: [
            /* @__PURE__ */ a(_, { size: 13, className: "pitaj-chip-icon" }),
            /* @__PURE__ */ a("span", { className: "pitaj-chip-name", children: e.name }),
            /* @__PURE__ */ a(
              "button",
              {
                type: "button",
                className: "pitaj-chip-remove",
                onClick: () => L(e.id),
                title: "Ukloni prilog",
                children: /* @__PURE__ */ a(O, { size: 11 })
              }
            )
          ] }, e.id)) }),
          /* @__PURE__ */ a(
            "textarea",
            {
              ref: f,
              disabled: t.chatAvailable === !1,
              value: m,
              onInput: U,
              onKeyDown: G,
              placeholder: "Postavite pitanje ili opišite šta vas zanima...",
              rows: 2,
              className: "pitaj-backstage-textarea"
            }
          ),
          /* @__PURE__ */ a("div", { className: "pitaj-backstage-input-actions", children: [
            /* @__PURE__ */ a("div", { className: "pitaj-backstage-input-tools", children: [
              r.attachmentsEnabled !== !1 && /* @__PURE__ */ a(
                "button",
                {
                  type: "button",
                  className: "pitaj-backstage-tool-btn",
                  onClick: () => {
                    var e;
                    return (e = P.current) == null ? void 0 : e.click();
                  },
                  title: "Dodaj datoteku ili sliku",
                  "aria-label": "Dodaj datoteku",
                  children: /* @__PURE__ */ a(W, { size: 16 })
                }
              ),
              r.voiceToTextEnabled !== !1 && /* @__PURE__ */ a(
                "button",
                {
                  type: "button",
                  className: `pitaj-backstage-tool-btn ${c.isListening ? "is-recording" : ""}`,
                  onClick: () => c.isListening ? c.stopAndTranscribe() : c.start(),
                  disabled: t.chatAvailable === !1 || t.transcribeAvailable === !1 || !c.isSupported || c.isProcessing,
                  title: c.isListening ? "Zaustavi snimanje" : "Glasovni unos",
                  "aria-label": "Glasovni unos",
                  children: /* @__PURE__ */ a(q, { size: 16 })
                }
              )
            ] }),
            /* @__PURE__ */ a(
              "button",
              {
                type: "button",
                disabled: t.chatAvailable === !1 || !m.trim() && d.length === 0 || h || k !== null,
                onClick: () => I(),
                className: "pitaj-backstage-send-btn",
                title: "Pošalji poruku",
                "aria-label": "Pošalji",
                children: /* @__PURE__ */ a(J, { size: 16 })
              }
            )
          ] })
        ] }),
        B.length > 0 && /* @__PURE__ */ a("div", { className: "pitaj-backstage-prompt-section", children: [
          /* @__PURE__ */ a("span", { className: "pitaj-backstage-prompt-heading", children: "Česta pitanja:" }),
          /* @__PURE__ */ a("div", { className: "pitaj-backstage-prompt-pills", children: B.map((e, i) => /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: "pitaj-backstage-prompt-pill",
              disabled: t.chatAvailable === !1 || h || k !== null,
              onClick: () => I(e),
              children: e
            },
            i
          )) })
        ] }),
        ha && /* @__PURE__ */ a("div", { className: "pitaj-backstage-footer-branding", children: /* @__PURE__ */ a(
          "a",
          {
            href: "https://pitaj.io",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "pitaj-backstage-branding-link",
            children: [
              /* @__PURE__ */ a("span", { children: "Pokreće" }),
              /* @__PURE__ */ a(T, { size: 13 }),
              /* @__PURE__ */ a("strong", { children: "Pitaj.io" })
            ]
          }
        ) })
      ] }) }),
      s === "conversation" && o && /* @__PURE__ */ a("div", { className: "pitaj-backstage-conv-container", children: [
        /* @__PURE__ */ a("div", { ref: w, className: "pitaj-backstage-messages-scroll", children: /* @__PURE__ */ a("div", { className: "pitaj-backstage-messages-inner", children: [
          sa && /* @__PURE__ */ a("div", { className: "pitaj-human-chip", role: "status", children: fa("operatorJoined", R) }),
          o.messages.map((e, i) => {
            const n = e.sender === "user", l = e.id || i, E = ra[l];
            return /* @__PURE__ */ a(
              "div",
              {
                className: `pitaj-backstage-msg-row ${n ? "is-user" : "is-ai"}`,
                children: [
                  !n && /* @__PURE__ */ a("div", { className: "pitaj-backstage-msg-avatar", children: b ? /* @__PURE__ */ a("img", { src: b, alt: g }) : /* @__PURE__ */ a(T, { size: 16 }) }),
                  /* @__PURE__ */ a("div", { className: "pitaj-backstage-msg-content-wrap", children: [
                    /* @__PURE__ */ a("div", { className: "pitaj-backstage-msg-bubble", children: /* @__PURE__ */ a(wa, { content: e.content }) }),
                    e.sources && e.sources.length > 0 && /* @__PURE__ */ a("div", { className: "pitaj-backstage-sources", children: [
                      /* @__PURE__ */ a("span", { className: "pitaj-sources-title", children: "Izvori:" }),
                      e.sources.map((ga, F) => /* @__PURE__ */ a("span", { className: "pitaj-source-badge", children: ga.title || `Dokument ${F + 1}` }, F))
                    ] }),
                    e.widget && /* @__PURE__ */ a("div", { className: "pitaj-backstage-inline-widget", children: /* @__PURE__ */ a(
                      Ra,
                      {
                        widget: e.widget,
                        onWorkflowWidget: na,
                        onProductEvent: la
                      }
                    ) }),
                    !n && /* @__PURE__ */ a("div", { className: "pitaj-backstage-msg-actions", children: [
                      /* @__PURE__ */ a("span", { className: "pitaj-msg-time", children: Ua(e.timestamp || /* @__PURE__ */ new Date()) }),
                      r.copyMessageEnabled !== !1 && /* @__PURE__ */ a(
                        "button",
                        {
                          type: "button",
                          className: "pitaj-action-btn",
                          onClick: () => ba(l, e.content),
                          title: "Kopiraj odgovor",
                          children: ca === l ? /* @__PURE__ */ a(za, { size: 13 }) : /* @__PURE__ */ a(Ia, { size: 13 })
                        }
                      ),
                      r.collectUserFeedbackEnabled !== !1 && v && /* @__PURE__ */ a("div", { className: "pitaj-feedback-group", children: [
                        /* @__PURE__ */ a(
                          "button",
                          {
                            type: "button",
                            className: `pitaj-action-btn ${E === "positive" ? "is-active" : ""}`,
                            onClick: () => $(l, "positive"),
                            title: "Korisno",
                            children: /* @__PURE__ */ a(Ta, { size: 13 })
                          }
                        ),
                        /* @__PURE__ */ a(
                          "button",
                          {
                            type: "button",
                            className: `pitaj-action-btn ${E === "negative" ? "is-active" : ""}`,
                            onClick: () => $(l, "negative"),
                            title: "Nije korisno",
                            children: /* @__PURE__ */ a(Da, { size: 13 })
                          }
                        )
                      ] })
                    ] })
                  ] })
                ]
              },
              l
            );
          }),
          h && /* @__PURE__ */ a("div", { className: "pitaj-backstage-msg-row is-ai", children: [
            /* @__PURE__ */ a("div", { className: "pitaj-backstage-msg-avatar", children: b ? /* @__PURE__ */ a("img", { src: b, alt: g }) : /* @__PURE__ */ a(T, { size: 16 }) }),
            /* @__PURE__ */ a("div", { className: "pitaj-backstage-msg-content-wrap", children: /* @__PURE__ */ a("div", { className: "pitaj-backstage-msg-bubble", children: /* @__PURE__ */ a(Pa, {}) }) })
          ] })
        ] }) }),
        /* @__PURE__ */ a("div", { className: "pitaj-backstage-bottom-input-wrap", children: /* @__PURE__ */ a("div", { className: "pitaj-backstage-input-card bottom", children: [
          d.length > 0 && /* @__PURE__ */ a("div", { className: "pitaj-backstage-attachments-chips", children: d.map((e) => /* @__PURE__ */ a("div", { className: "pitaj-backstage-chip", children: [
            /* @__PURE__ */ a(_, { size: 13, className: "pitaj-chip-icon" }),
            /* @__PURE__ */ a("span", { className: "pitaj-chip-name", children: e.name }),
            /* @__PURE__ */ a(
              "button",
              {
                type: "button",
                className: "pitaj-chip-remove",
                onClick: () => L(e.id),
                title: "Ukloni prilog",
                children: /* @__PURE__ */ a(O, { size: 11 })
              }
            )
          ] }, e.id)) }),
          /* @__PURE__ */ a(
            "textarea",
            {
              ref: f,
              disabled: t.chatAvailable === !1,
              value: m,
              onInput: U,
              onKeyDown: G,
              placeholder: "Napišite poruku...",
              rows: 1,
              className: "pitaj-backstage-textarea"
            }
          ),
          /* @__PURE__ */ a("div", { className: "pitaj-backstage-input-actions", children: [
            /* @__PURE__ */ a("div", { className: "pitaj-backstage-input-tools", children: [
              r.attachmentsEnabled !== !1 && /* @__PURE__ */ a(
                "button",
                {
                  type: "button",
                  className: "pitaj-backstage-tool-btn",
                  onClick: () => {
                    var e;
                    return (e = P.current) == null ? void 0 : e.click();
                  },
                  title: "Dodaj datoteku",
                  "aria-label": "Dodaj datoteku",
                  children: /* @__PURE__ */ a(W, { size: 16 })
                }
              ),
              r.voiceToTextEnabled !== !1 && /* @__PURE__ */ a(
                "button",
                {
                  type: "button",
                  className: `pitaj-backstage-tool-btn ${c.isListening ? "is-recording" : ""}`,
                  onClick: () => c.isListening ? c.stopAndTranscribe() : c.start(),
                  disabled: t.chatAvailable === !1 || t.transcribeAvailable === !1 || !c.isSupported || c.isProcessing,
                  title: c.isListening ? "Zaustavi" : "Glasovni unos",
                  "aria-label": "Glasovni unos",
                  children: /* @__PURE__ */ a(q, { size: 16 })
                }
              )
            ] }),
            /* @__PURE__ */ a(
              "button",
              {
                type: "button",
                disabled: t.chatAvailable === !1 || !m.trim() && d.length === 0 || h || k !== null,
                onClick: () => I(),
                className: "pitaj-backstage-send-btn",
                title: "Pošalji",
                "aria-label": "Pošalji",
                children: /* @__PURE__ */ a(J, { size: 16 })
              }
            )
          ] })
        ] }) })
      ] }),
      s === "history" && /* @__PURE__ */ a("div", { className: "pitaj-backstage-history-container", children: /* @__PURE__ */ a("div", { className: "pitaj-backstage-history-inner", children: [
        /* @__PURE__ */ a("div", { className: "pitaj-history-search-bar", children: /* @__PURE__ */ a(
          "input",
          {
            type: "text",
            value: D,
            onInput: (e) => da(e.currentTarget.value),
            placeholder: "Pretraži prethodne razgovore...",
            className: "pitaj-history-search-input"
          }
        ) }),
        H.length === 0 ? /* @__PURE__ */ a("div", { className: "pitaj-backstage-empty-history", children: [
          /* @__PURE__ */ a(Z, { size: 32, className: "pitaj-empty-icon" }),
          /* @__PURE__ */ a("h3", { children: "Nema pronađenih razgovora" }),
          /* @__PURE__ */ a("p", { children: "Vaši prethodni razgovori će se prikazati ovdje." }),
          /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: "pitaj-btn-primary",
              onClick: () => {
                p("new-conversation"), u("");
              },
              children: "Započni novi razgovor"
            }
          )
        ] }) : /* @__PURE__ */ a("div", { className: "pitaj-backstage-history-list", children: H.map((e) => /* @__PURE__ */ a(
          "div",
          {
            className: `pitaj-backstage-history-item ${e.id === Y ? "is-active" : ""}`,
            onClick: () => {
              S(e), p("conversation");
            },
            children: [
              /* @__PURE__ */ a("div", { className: "pitaj-history-item-body", children: [
                /* @__PURE__ */ a("span", { className: "pitaj-history-item-title truncate", children: e.title || "Razgovor" }),
                /* @__PURE__ */ a("span", { className: "pitaj-history-item-preview truncate", children: e.preview || "Nema poruka" }),
                /* @__PURE__ */ a("span", { className: "pitaj-history-item-date", children: La(e.timestamp || /* @__PURE__ */ new Date()) })
              ] }),
              r.deleteConversationsEnabled !== !1 && /* @__PURE__ */ a(
                "button",
                {
                  type: "button",
                  className: "pitaj-history-item-delete",
                  onClick: (i) => {
                    i.stopPropagation(), aa(e.id);
                  },
                  title: "Obriši razgovor",
                  children: /* @__PURE__ */ a(Ca, { size: 14 })
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
  Ea as BackstageLayout
};
