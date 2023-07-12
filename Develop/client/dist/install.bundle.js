/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/install.js":
/*!***************************!*\
  !*** ./src/js/install.js ***!
  \***************************/
/***/ (() => {

eval("const butInstall = document.getElementById('buttonInstall');\r\n\r\n// Logic for installing the PWA\r\n// TODO: Add an event handler to the `beforeinstallprompt` event\r\nwindow.addEventListener('beforeinstallprompt', (event) => {\r\n    event.preventDefault();\r\n    const jate = form.elements['jate'].value;\r\n  \r\n    postDb(jate);\r\n  \r\n    form.reset();\r\n    fetchList();\r\n});\r\n\r\n// TODO: Implement a click event handler on the `butInstall` element\r\nbutInstall.addEventListener('click', async () => {\r\n    butInstall.preventDefault();\r\n    const jate = form.elements['jate'].value;\r\n  \r\n    postDb(jate);\r\n  \r\n    form.reset();\r\n    fetchList();\r\n});\r\n\r\n// TODO: Add an handler for the `appinstalled` event\r\nwindow.addEventListener('appinstalled', (event) => {\r\n    window.preventDefault();\r\n    const jate = form.elements['jate'].value;\r\n  \r\n    postDb(jate);\r\n  \r\n    form.reset();\r\n    fetchList();\r\n});\r\n\n\n//# sourceURL=webpack://JATE/./src/js/install.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/install.js"]();
/******/ 	
/******/ })()
;