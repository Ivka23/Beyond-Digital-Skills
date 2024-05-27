"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var lazyLoading = function lazyLoading() {
  var lazyImgs = document.querySelectorAll('.lazy');
  var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('loading');
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });
  lazyImgs.forEach(function (img) {
    observer.observe(img);
  });
};
var _default = lazyLoading;
exports["default"] = _default;