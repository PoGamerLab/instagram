// Profile header: photo (or initials), name and headline.
App.components.hero = function (site, root) {
  var hero = App.el("header", "hero", null, root);

  var initials = (site.name || "?")
    .split(/\s+/)
    .slice(0, 2)
    .map(function (w) { return w.charAt(0).toUpperCase(); })
    .join("");

  var avatar = App.el("div", "avatar", null, hero);

  function showInitials() {
    avatar.textContent = initials;
    avatar.classList.add("avatar-initials");
  }

  if (site.photo) {
    var img = App.el("img", null, null, avatar);
    img.alt = site.name || "Profile photo";
    img.onerror = function () { img.remove(); showInitials(); };
    img.src = site.photo;
  } else {
    showInitials();
  }

  App.el("h1", "name", site.name || "Your Name", hero);
  if (site.headline) App.el("p", "headline", site.headline, hero);
};
