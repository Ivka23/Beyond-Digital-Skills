"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var mobileNav = function mobileNav() {
  var headerBtn = document.querySelector('.header__bars');
  var mobileNav = document.querySelector('.mobile-nav');
  var mobileLinks = document.querySelectorAll('.mobile-nav__link');

  // State
  var isMobileNavOpen = false;
  headerBtn.addEventListener('click', function () {
    isMobileNavOpen = !isMobileNavOpen;
    if (isMobileNavOpen) {
      mobileNav.style.display = 'flex';
      document.body.style.overflowY = 'hidden';
    } else {
      mobileNav.style.display = 'none';
      document.body.style.overflowY = 'auto';
    }
  });
  mobileLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      isMobileNavOpen = false;
      mobileNav.style.display = 'none';
      document.body.style.overflowY = 'auto';
    });
  });
};
var _default = mobileNav;
exports["default"] = _default;