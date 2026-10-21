// Link buttons. The first one is the filled, primary button.
App.components.buttons = function (site, root) {
  if (!site.buttons || !site.buttons.length) return;

  var nav = App.el("nav", "links", null, root);
  nav.setAttribute("aria-label", "Links");

  site.buttons.forEach(function (b, i) {
    var a = App.el("a", "btn" + (i === 0 ? " btn-primary" : ""), b.label, nav);
    a.href = b.url;
    if (App.isExternal(b.url)) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
  });
};
