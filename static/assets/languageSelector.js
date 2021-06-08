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

/***/ "./assets/js/languageSelector.js":
/*!***************************************!*\
  !*** ./assets/js/languageSelector.js ***!
  \***************************************/
/***/ (function() {

eval("var mobileQuery = getComputedStyle(document.body).getPropertyValue(\"--phoneWidth\");\n\nvar isMobile = function isMobile() {\n  return window.matchMedia(mobileQuery).matches;\n};\n\nvar languageSelector = document.querySelector(\".language-selector-current\");\nvar moreLanguagesContainer = document.querySelector(\".language-selector__more\");\ndocument.body.addEventListener(\"click\", function () {\n  if (!isMobile() && moreLanguagesContainer && !moreLanguagesContainer.classList.contains(\"hidden\")) {\n    moreLanguagesContainer.classList.add(\"hidden\");\n  }\n});\nlanguageSelector && languageSelector.addEventListener(\"click\", function (e) {\n  if (!isMobile()) {\n    e.stopPropagation();\n    moreLanguagesContainer.classList.toggle(\"hidden\");\n  }\n});\n\n//# sourceURL=webpack://terminal/./assets/js/languageSelector.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./assets/js/languageSelector.js"]();
/******/ 	
/******/ })()
;