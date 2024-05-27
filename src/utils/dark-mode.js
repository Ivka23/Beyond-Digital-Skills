"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var darkMode = function darkMode() {
  var themeToggleBtns = document.querySelectorAll('#theme-toggle');

  // State
  var theme = localStorage.getItem('theme');

  // On mount
  theme && document.body.classList.add(theme);

  // Handlers
  var handleThemeToggle = function handleThemeToggle() {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
      localStorage.setItem('theme', 'light-mode');
    } else {
      localStorage.removeItem('theme');
      document.body.removeAttribute('class');
    }
  };

  // Events
  themeToggleBtns.forEach(function (btn) {
    return btn.addEventListener('click', handleThemeToggle);
  });
};
var _default = darkMode;
exports["default"] = _default;