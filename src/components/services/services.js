// Service cards with title, short note and price.
App.components.services = function (site, root) {
  if (!site.services || !site.services.length) return;

  var sec = App.section("services", site.servicesTitle || "Services", null, root);
  var list = App.el("ul", "services", null, sec);

  site.services.forEach(function (item) {
    var li = App.el("li", "service", null, list);
    var info = App.el("div", "service-info", null, li);
    App.el("span", "service-title", item.title, info);
    if (item.note) App.el("span", "service-note", item.note, info);
    if (item.price) App.el("span", "service-price", item.price, li);
  });
};
