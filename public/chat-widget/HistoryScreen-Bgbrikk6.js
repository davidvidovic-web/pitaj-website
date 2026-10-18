import { u as e, M as l, T as d, P as c } from "./widget-CVNDNNY4.js";
function h(r) {
  const t = typeof r == "string" ? new Date(r) : r, s = (/* @__PURE__ */ new Date()).getTime() - t.getTime(), a = Math.floor(s / (1e3 * 60)), i = Math.floor(s / (1e3 * 60 * 60)), o = Math.floor(s / (1e3 * 60 * 60 * 24));
  return isNaN(a) || a < 1 ? "sada" : a < 60 ? `prije ${a}m` : i < 24 ? `prije ${i}h` : o < 7 ? `prije ${o}d` : t.toLocaleDateString();
}
function m({
  conversations: r,
  config: t,
  onSelectConversation: n,
  onNewConversation: s,
  onDeleteConversation: a
}) {
  return /* @__PURE__ */ e("div", { className: "pitaj-history-screen", children: [
    r.length > 0 ? /* @__PURE__ */ e("div", { className: "pitaj-history-list", children: r.map((i) => {
      var o;
      return /* @__PURE__ */ e("div", { className: "pitaj-history-item-wrap", children: [
        /* @__PURE__ */ e(
          "button",
          {
            onClick: () => n(i),
            className: "pitaj-history-item",
            "aria-label": `Otvori razgovor ${i.title}`,
            children: [
              /* @__PURE__ */ e("div", { className: "pitaj-history-icon", children: /* @__PURE__ */ e(l, { size: 15 }) }),
              /* @__PURE__ */ e("div", { className: "pitaj-history-content", children: [
                /* @__PURE__ */ e("div", { className: "pitaj-history-top", children: [
                  /* @__PURE__ */ e("div", { className: "pitaj-history-title", children: i.title }),
                  /* @__PURE__ */ e("span", { className: "pitaj-history-time", children: h(i.timestamp) })
                ] }),
                /* @__PURE__ */ e("div", { className: "pitaj-history-bottom", children: [
                  /* @__PURE__ */ e("div", { className: "pitaj-history-preview", children: i.preview || "Nema poruka" }),
                  i.status === "ended" && /* @__PURE__ */ e("span", { className: "pitaj-ended-badge", children: "Završeno" }),
                  i.unread > 0 && /* @__PURE__ */ e("span", { className: "pitaj-history-unread", children: i.unread })
                ] })
              ] })
            ]
          }
        ),
        ((o = t.content) == null ? void 0 : o.deleteConversationsEnabled) !== !1 && a && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            onClick: () => a(i.id),
            className: "pitaj-history-delete-btn",
            "aria-label": `Obriši razgovor ${i.title}`,
            title: "Obriši razgovor",
            children: /* @__PURE__ */ e(d, { size: 14 })
          }
        )
      ] }, i.id);
    }) }) : /* @__PURE__ */ e("div", { className: "pitaj-history-empty", children: [
      /* @__PURE__ */ e("div", { className: "pitaj-history-empty-icon", children: /* @__PURE__ */ e(c, { size: 20 }) }),
      /* @__PURE__ */ e("div", { style: { fontSize: "13px", fontWeight: 500 }, children: "Još nema prethodnih konverzacija" }),
      /* @__PURE__ */ e("div", { style: { fontSize: "11px", marginTop: "4px", textAlign: "center" }, children: "Započnite novu konverzaciju i vaša historija će se pojaviti ovdje." }),
      /* @__PURE__ */ e(
        "button",
        {
          onClick: s,
          className: "pitaj-history-cta",
          children: "Nova konverzacija"
        }
      )
    ] }),
    t.poweredBy && /* @__PURE__ */ e("div", { className: "pitaj-footer", children: [
      t.poweredByText || "Pokreće",
      " ",
      /* @__PURE__ */ e(
        "a",
        {
          href: t.poweredByUrl || "https://pitaj.io",
          target: "_blank",
          rel: "noopener noreferrer",
          children: "Pitaj.io AI"
        }
      )
    ] })
  ] });
}
export {
  m as HistoryScreen
};
