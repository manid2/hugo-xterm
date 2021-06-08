/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/menu.js":
/*!***************************!*\
  !*** ./assets/js/menu.js ***!
  \***************************/
/***/ (function() {

eval("var container = document.querySelector(\".container\");\nvar menu = document.querySelector(\".menu\");\nvar mobileMenuTrigger = document.querySelector(\".menu-trigger\");\nvar desktopMenu = document.querySelector(\".menu__inner--desktop\");\nvar desktopMenuTrigger = document.querySelector(\".menu__sub-inner-more-trigger\");\nvar menuMore = document.querySelector(\".menu__sub-inner-more\");\nvar mobileQuery = getComputedStyle(document.body).getPropertyValue(\"--phoneWidth\");\n\nvar isMobile = function isMobile() {\n  return window.matchMedia(mobileQuery).matches;\n};\n\nvar handleMenuClasses = function handleMenuClasses() {\n  mobileMenuTrigger && mobileMenuTrigger.classList.toggle(\"hidden\", !isMobile());\n  menu && menu.classList.toggle(\"hidden\", isMobile());\n  menuMore && menuMore.classList.toggle(\"hidden\", !isMobile());\n}; // Common\n\n\nmenu && menu.addEventListener(\"click\", function (e) {\n  return e.stopPropagation();\n});\nmenuMore && menuMore.addEventListener(\"click\", function (e) {\n  return e.stopPropagation();\n});\nhandleMenuClasses();\ndocument.body.addEventListener(\"click\", function () {\n  if (!isMobile() && menuMore && !menuMore.classList.contains(\"hidden\")) {\n    menuMore.classList.add(\"hidden\");\n  } else if (isMobile() && !menu.classList.contains(\"hidden\")) {\n    menu.classList.add(\"hidden\");\n  }\n});\nwindow.addEventListener(\"resize\", handleMenuClasses); // Mobile menu\n\nmobileMenuTrigger && mobileMenuTrigger.addEventListener(\"click\", function (e) {\n  e.stopPropagation();\n  menu && menu.classList.toggle(\"hidden\");\n}); // Desktop menu\n\ndesktopMenuTrigger && desktopMenuTrigger.addEventListener(\"click\", function (e) {\n  e.stopPropagation();\n  menuMore && menuMore.classList.toggle(\"hidden\");\n\n  if (menuMore.getBoundingClientRect().right > container.getBoundingClientRect().right) {\n    menuMore.style.left = \"auto\";\n    menuMore.style.right = 0;\n  }\n});\n\n//# sourceURL=webpack://terminal/./assets/js/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./assets/js/menu.js"]();
/******/ 	
/******/ })()
;