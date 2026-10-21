// Closing line.
App.components.footer = function (site, root) {
  if (!site.footer) return;
  App.el("footer", "footer", site.footer, root);
};
