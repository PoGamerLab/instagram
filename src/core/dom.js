// Tiny DOM helpers shared by all components.
window.App = window.App || { components: {} };

// Create an element, optionally with a class, text and a parent.
App.el = function (tag, cls, text, parent) {
  var node = document.createElement(tag);
  if (cls) node.className = cls;
  if (text != null) node.textContent = text;
  if (parent) parent.appendChild(node);
  return node;
};

// Create a titled <section>.
App.section = function (id, title, cls, parent) {
  var sec = App.el("section", "section" + (cls ? " " + cls : ""), null, parent);
  if (id) sec.id = id;
  App.el("h2", "section-title", title, sec);
  return sec;
};

// True for links that leave the page.
App.isExternal = function (url) {
  return /^https?:/i.test(url || "");
};
