// Image grid. Missing images are skipped; the section hides if none load.
App.components.gallery = function (site, root) {
  if (!site.gallery || !site.gallery.length) return;

  var sec = App.section("work", site.galleryTitle || "Work", null, root);
  var grid = App.el("div", "grid", null, sec);
  var remaining = site.gallery.length;

  site.gallery.forEach(function (item) {
    var fig = App.el("figure", "tile", null, grid);
    var img = App.el("img", null, null, fig);
    img.alt = item.alt || "";
    img.loading = "lazy";
    img.onerror = function () {
      fig.remove();
      remaining -= 1;
      if (remaining === 0) sec.remove();
    };
    img.src = item.src;
  });
};
