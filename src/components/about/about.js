// Short intro text.
App.components.about = function (site, root) {
  if (!site.about) return;
  App.el("p", "about", site.about, root);
};
