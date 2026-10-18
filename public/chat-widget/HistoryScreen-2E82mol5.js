import { u as e, M as n, T as c, S as l } from "./widget-D5Ay3RsU.js";
function h(a) {
  const i = typeof a == "string" ? new Date(a) : a, s = (/* @__PURE__ */ new Date()).getTime() - i.getTime(), r = Math.floor(s / (1e3 * 60)), t = Math.floor(s / (1e3 * 60 * 60)), o = Math.floor(s / (1e3 * 60 * 60 * 24));
  return isNaN(r) || r < 1 ? "sada" : r < 60 ? `prije ${r}m` : t < 24 ? `prije ${t}h` : o < 7 ? `prije ${o}d` : i.toLocaleDateString();
}
function p({
  conversations: a,
  config: i,
  onSelectConversation: d,
  onNewConversation: s,
  onDeleteConversation: r
}) {
  return /* @__PURE__ */ e("div", { className: "chat-direkt-history-screen", children: [
    a.length > 0 ? /* @__PURE__ */ e("div", { className: "chat-direkt-history-list", children: a.map((t) => {
      var o;
      return /* @__PURE__ */ e("div", { className: "chat-direkt-history-item-wrap", children: [
        /* @__PURE__ */ e(
          "button",
          {
            onClick: () => d(t),
            className: "chat-direkt-history-item",
            "aria-label": `Otvori razgovor ${t.title}`,
            children: [
              /* @__PURE__ */ e("div", { className: "chat-direkt-history-icon", children: /* @__PURE__ */ e(n, { size: 15 }) }),
              /* @__PURE__ */ e("div", { className: "chat-direkt-history-content", children: [
                /* @__PURE__ */ e("div", { className: "chat-direkt-history-top", children: [
                  /* @__PURE__ */ e("div", { className: "chat-direkt-history-title", children: t.title }),
                  /* @__PURE__ */ e("span", { className: "chat-direkt-history-time", children: h(t.timestamp) })
                ] }),
                /* @__PURE__ */ e("div", { className: "chat-direkt-history-bottom", children: [
                  /* @__PURE__ */ e("div", { className: "chat-direkt-history-preview", children: t.preview || "Nema poruka" }),
                  t.status === "ended" && /* @__PURE__ */ e("span", { className: "chat-direkt-ended-badge", children: "Završeno" }),
                  t.unread > 0 && /* @__PURE__ */ e("span", { className: "chat-direkt-history-unread", children: t.unread })
                ] })
              ] })
            ]
          }
        ),
        ((o = i.content) == null ? void 0 : o.deleteConversationsEnabled) !== !1 && r && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: () => r(t.id),
            className: "chat-direkt-history-delete-btn",
            "aria-label": `Obriši razgovor ${t.title}`,
            title: "Obriši razgovor",
            children: /* @__PURE__ */ e(c, { size: 14 })
          }
        )
      ] }, t.id);
    }) }) : /* @__PURE__ */ e("div", { className: "chat-direkt-history-empty", children: [
      /* @__PURE__ */ e("div", { className: "chat-direkt-history-empty-icon", children: /* @__PURE__ */ e(l, { size: 20 }) }),
      /* @__PURE__ */ e("div", { style: { fontSize: "13px", fontWeight: 500 }, children: "Još nema prethodnih konverzacija" }),
      /* @__PURE__ */ e("div", { style: { fontSize: "11px", marginTop: "4px", textAlign: "center" }, children: "Započnite novu konverzaciju i vaša historija će se pojaviti ovdje." }),
      /* @__PURE__ */ e(
        "button",
        {
          onClick: s,
          className: "chat-direkt-history-cta",
          children: "Nova konverzacija"
        }
      )
    ] }),
    i.poweredBy && /* @__PURE__ */ e("div", { className: "chat-direkt-footer", children: [
      i.poweredByText || "Pokreće",
      " ",
      /* @__PURE__ */ e(
        "a",
        {
          href: i.poweredByUrl || "https://pitaj.io",
          target: "_blank",
          rel: "noopener noreferrer",
          children: "Pitaj.io AI"
        }
      )
    ] })
  ] });
}
export {
  p as HistoryScreen
};
