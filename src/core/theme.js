// Applies colors from config.js and the page title.
App.applyTheme = function (site) {
  var colors = site.colors || {};
  var root = document.documentElement;

  ["bg", "text", "accent", "card"].forEach(function (key) {
    if (colors[key]) root.style.setProperty("--" + key, colors[key]);
  });

  document.title = (site.name || "Profile") + (site.headline ? " | " + site.headline : "");

  var meta = document.querySelector('meta[name="theme-color"]');
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = "theme-color";
    document.head.appendChild(meta);
  }
  meta.content = colors.bg || "#ffffff";
};
