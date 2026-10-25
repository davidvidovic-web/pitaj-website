import { u as e, P as l } from "./widget-Chuvmfxx.js";
function d(t) {
  const a = typeof t == "string" ? new Date(t) : t, r = (/* @__PURE__ */ new Date()).getTime() - a.getTime(), s = Math.floor(r / (1e3 * 60)), i = Math.floor(r / (1e3 * 60 * 60)), o = Math.floor(r / (1e3 * 60 * 60 * 24));
  return isNaN(s) || s < 1 ? "sada" : s < 60 ? `prije ${s}m` : i < 24 ? `prije ${i}h` : o < 7 ? `prije ${o}d` : a.toLocaleDateString();
}
function h({
  conversations: t,
  config: a,
  onSelectConversation: n,
  onNewConversation: r,
  onDeleteConversation: s
}) {
  return /* @__PURE__ */ e("div", { className: "pitaj-history-screen", children: [
    t.length > 0 ? /* @__PURE__ */ e("div", { className: "pitaj-history-list", children: t.map((i) => /* @__PURE__ */ e("div", { className: "pitaj-history-item-wrap", children: /* @__PURE__ */ e(
      "button",
      {
        onClick: () => n(i),
        className: "pitaj-history-item",
        "aria-label": `Otvori razgovor ${i.title}`,
        children: /* @__PURE__ */ e("div", { className: "pitaj-history-content", children: [
          /* @__PURE__ */ e("div", { className: "pitaj-history-top", children: [
            /* @__PURE__ */ e("div", { className: "pitaj-history-title-wrap", children: [
              /* @__PURE__ */ e("div", { className: "pitaj-history-title", children: i.title }),
              i.ticketNumber && i.ticketNumber !== "undefined" && i.ticketNumber !== "null" && /* @__PURE__ */ e("span", { className: "pitaj-history-ticket-badge", children: i.ticketNumber })
            ] }),
            /* @__PURE__ */ e("span", { className: "pitaj-history-time", children: d(i.timestamp) })
          ] }),
          /* @__PURE__ */ e("div", { className: "pitaj-history-bottom", children: [
            /* @__PURE__ */ e("div", { className: "pitaj-history-preview", children: i.preview || "Nema poruka" }),
            i.status === "ended" && /* @__PURE__ */ e("span", { className: "pitaj-ended-badge", children: "Završeno" }),
            i.unread > 0 && /* @__PURE__ */ e("span", { className: "pitaj-history-unread", children: i.unread })
          ] })
        ] })
      }
    ) }, i.id)) }) : /* @__PURE__ */ e("div", { className: "pitaj-history-empty", children: [
      /* @__PURE__ */ e("div", { className: "pitaj-history-empty-icon", children: /* @__PURE__ */ e(l, { size: 20 }) }),
      /* @__PURE__ */ e("div", { style: { fontSize: "13px", fontWeight: 500 }, children: "Još nema prethodnih konverzacija" }),
      /* @__PURE__ */ e("div", { style: { fontSize: "11px", marginTop: "4px", textAlign: "center" }, children: "Započnite novu konverzaciju i vaša historija će se pojaviti ovdje." }),
      /* @__PURE__ */ e(
        "button",
        {
          onClick: r,
          className: "pitaj-history-cta",
          children: "Nova konverzacija"
        }
      )
    ] }),
    a.poweredBy && /* @__PURE__ */ e("div", { className: "pitaj-footer", children: [
      a.poweredByText || "Pokreće",
      " ",
      /* @__PURE__ */ e(
        "a",
        {
          href: a.poweredByUrl || "https://pitaj.io",
          target: "_blank",
          rel: "noopener noreferrer",
          children: "Pitaj.io AI"
        }
      )
    ] })
  ] });
}
export {
  h as HistoryScreen
};
