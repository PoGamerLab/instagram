// Builds the page from window.SITE, one component at a time.
(function () {
  var site = window.SITE || {};
  var app = document.getElementById("app");
  var c = App.components;

  App.applyTheme(site);

  c.hero(site, app);
  c.buttons(site, app);
  c.about(site, app);
  c.services(site, app);
  c.gallery(site, app);
  c.footer(site, app);
})();
