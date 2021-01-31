module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/probabilites.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/probabilites.js":
/*!*******************************!*\
  !*** ./pages/probabilites.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Probabilities; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jstat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jstat */ \"jstat\");\n/* harmony import */ var jstat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jstat__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/ras/Documents/git/mastery-calculator/pages/probabilites.js\";\n\n\n\nclass Probabilities extends react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"] {\n  constructor(props) {\n    super(props);\n    this.state = {\n      probability: 0.1,\n      trials: 10.0,\n      amount: 1.0,\n      exact: 0.0,\n      atMost: 0.0,\n      atLeast: 0.0,\n      fifty: 0.0,\n      ninetyFive: 0.0\n    };\n  }\n\n  runCalcs() {\n    let amount = parseFloat(this.state.amount);\n    let trials = parseInt(this.state.trials);\n    let probability = parseFloat(this.state.probability);\n    this.setState({\n      exact: jstat__WEBPACK_IMPORTED_MODULE_3__[\"binomial\"].pdf(amount, trials, probability),\n      atMost: jstat__WEBPACK_IMPORTED_MODULE_3__[\"binomial\"].cdf(amount, trials, probability),\n      atLeast: 1 - jstat__WEBPACK_IMPORTED_MODULE_3__[\"binomial\"].cdf(amount - 1, trials, probability),\n      fifty: Math.ceil(Math.log(.5) / Math.log(1 - probability)),\n      ninetyFive: Math.ceil(Math.log(.05) / Math.log(1 - probability))\n    });\n  }\n\n  render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n          children: \"Drop Probability Calculator\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: \"text-4xl text-center dark:text-gray-300\",\n        children: \"Drop Probability Calculator\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          value: this.state.probability,\n          onChange: e => {\n            this.setState({\n              probability: e.target.value\n            });\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          value: this.state.trials,\n          onChange: e => {\n            this.setState({\n              trials: e.target.value\n            });\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          value: this.state.amount,\n          onChange: e => {\n            this.setState({\n              amount: e.target.value\n            });\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          onClick: () => this.runCalcs(),\n          children: \"Calculate Probabilities\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: [this.state.exact.toLocaleString('en', {\n            style: 'percent',\n            minimumFractionDigits: 2\n          }), \" chance of getting exacltly \", this.state.amount, \" drops.\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: [this.state.atLeast.toLocaleString('en', {\n            style: 'percent',\n            minimumFractionDigits: 2\n          }), \" chance of getting at least \", this.state.amount, \" drops.\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: [this.state.atMost.toLocaleString('en', {\n            style: 'percent',\n            minimumFractionDigits: 2\n          }), \" chance of getting at most \", this.state.amount, \" drops.\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: [this.state.fifty.toLocaleString('en'), \" trials required to have 50% chance of 1 drop\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: [this.state.ninetyFive.toLocaleString('en'), \" trials required to have 95% chance of 1 drop\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }, this);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9iYWJpbGl0ZXMuanM/OTI3MyJdLCJuYW1lcyI6WyJQcm9iYWJpbGl0aWVzIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwicHJvYmFiaWxpdHkiLCJ0cmlhbHMiLCJhbW91bnQiLCJleGFjdCIsImF0TW9zdCIsImF0TGVhc3QiLCJmaWZ0eSIsIm5pbmV0eUZpdmUiLCJydW5DYWxjcyIsInBhcnNlRmxvYXQiLCJwYXJzZUludCIsInNldFN0YXRlIiwialN0YXQiLCJwZGYiLCJjZGYiLCJNYXRoIiwiY2VpbCIsImxvZyIsInJlbmRlciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRvTG9jYWxlU3RyaW5nIiwic3R5bGUiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUdlLE1BQU1BLGFBQU4sU0FBNEJDLCtDQUE1QixDQUFzQztBQUNqREMsYUFBVyxDQUFDQyxLQUFELEVBQVE7QUFDZixVQUFNQSxLQUFOO0FBQ0EsU0FBS0MsS0FBTCxHQUFhO0FBQ1RDLGlCQUFXLEVBQUUsR0FESjtBQUVUQyxZQUFNLEVBQUUsSUFGQztBQUdUQyxZQUFNLEVBQUUsR0FIQztBQUlUQyxXQUFLLEVBQUUsR0FKRTtBQUtUQyxZQUFNLEVBQUUsR0FMQztBQU1UQyxhQUFPLEVBQUUsR0FOQTtBQU9UQyxXQUFLLEVBQUUsR0FQRTtBQVFUQyxnQkFBVSxFQUFFO0FBUkgsS0FBYjtBQVVIOztBQUVEQyxVQUFRLEdBQUc7QUFDUCxRQUFJTixNQUFNLEdBQUdPLFVBQVUsQ0FBQyxLQUFLVixLQUFMLENBQVdHLE1BQVosQ0FBdkI7QUFDQSxRQUFJRCxNQUFNLEdBQUdTLFFBQVEsQ0FBQyxLQUFLWCxLQUFMLENBQVdFLE1BQVosQ0FBckI7QUFDQSxRQUFJRCxXQUFXLEdBQUdTLFVBQVUsQ0FBQyxLQUFLVixLQUFMLENBQVdDLFdBQVosQ0FBNUI7QUFD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S0gsS0FBTCxDQUFXSyxNQUFYLENBQWtCa0IsY0FBbEIsQ0FBaUMsSUFBakMsRUFBdUM7QUFBRUMsaUJBQUssRUFBRSxTQUFUO0FBQW9CQyxpQ0FBcUIsRUFBRTtBQUEzQyxXQUF2QyxDQUFKLGlDQUF1SCxLQUFLekIsS0FBTCxDQUFXRyxNQUFsSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEosZUFJSTtBQUFBLHFCQUFJLEtBQUtILEtBQUwsQ0FBV08sS0FBWCxDQUFpQmdCLGNBQWpCLENBQWdDLElBQWhDLENBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKLGVBS0k7QUFBQSxxQkFBSSxLQUFLdkIsS0FBTCxDQUFXUSxVQUFYLENBQXNCZSxjQUF0QixDQUFxQyxJQUFyQyxDQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQXFCSDs7QUFsRGdEIiwiZmlsZSI6Ii4vcGFnZXMvcHJvYmFiaWxpdGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuaW1wb3J0ICogYXMgalN0YXQgZnJvbSAnanN0YXQnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2JhYmlsaXRpZXMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHByb2JhYmlsaXR5OiAwLjEsXG4gICAgICAgICAgICB0cmlhbHM6IDEwLjAsXG4gICAgICAgICAgICBhbW91bnQ6IDEuMCxcbiAgICAgICAgICAgIGV4YWN0OiAwLjAsXG4gICAgICAgICAgICBhdE1vc3Q6IDAuMCxcbiAgICAgICAgICAgIGF0TGVhc3Q6IDAuMCxcbiAgICAgICAgICAgIGZpZnR5OiAwLjAsXG4gICAgICAgICAgICBuaW5ldHlGaXZlOiAwLjBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJ1bkNhbGNzKCkge1xuICAgICAgICBsZXQgYW1vdW50ID0gcGFyc2VGbG9hdCh0aGlzLnN0YXRlLmFtb3VudCk7XG4gICAgICAgIGxldCB0cmlhbHMgPSBwYXJzZUludCh0aGlzLnN0YXRlLnRyaWFscyk7XG4gICAgICAgIGxldCBwcm9iYWJpbGl0eSA9IHBhcnNlRmxvYXQodGhpcy5zdGF0ZS5wcm9iYWJpbGl0eSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZXhhY3Q6IGpTdGF0LmJpbm9taWFsLnBkZihhbW91bnQsIHRyaWFscywgcHJvYmFiaWxpdHkpLFxuICAgICAgICAgICAgYXRNb3N0OiBqU3RhdC5iaW5vbWlhbC5jZGYoYW1vdW50LCB0cmlhbHMsIHByb2JhYmlsaXR5KSxcbiAgICAgICAgICAgIGF0TGVhc3Q6IDEgLSBqU3RhdC5iaW5vbWlhbC5jZGYoYW1vdW50IC0gMSwgdHJpYWxzLCBwcm9iYWJpbGl0eSksXG4gICAgICAgICAgICBmaWZ0eTogTWF0aC5jZWlsKE1hdGgubG9nKC41KSAvIE1hdGgubG9nKDEgLSBwcm9iYWJpbGl0eSkpLFxuICAgICAgICAgICAgbmluZXR5Rml2ZTogTWF0aC5jZWlsKE1hdGgubG9nKC4wNSkgLyBNYXRoLmxvZygxIC0gcHJvYmFiaWxpdHkpKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+RHJvcCBQcm9iYWJpbGl0eSBDYWxjdWxhdG9yPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIHRleHQtY2VudGVyIGRhcms6dGV4dC1ncmF5LTMwMFwiPkRyb3AgUHJvYmFiaWxpdHkgQ2FsY3VsYXRvcjwvaDE+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXt0aGlzLnN0YXRlLnByb2JhYmlsaXR5fSBvbkNoYW5nZT17KGUpID0+IHsgdGhpcy5zZXRTdGF0ZSh7IHByb2JhYmlsaXR5OiBlLnRhcmdldC52YWx1ZSB9KSB9fSAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e3RoaXMuc3RhdGUudHJpYWxzfSBvbkNoYW5nZT17KGUpID0+IHsgdGhpcy5zZXRTdGF0ZSh7IHRyaWFsczogZS50YXJnZXQudmFsdWUgfSkgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXt0aGlzLnN0YXRlLmFtb3VudH0gb25DaGFuZ2U9eyhlKSA9PiB7IHRoaXMuc2V0U3RhdGUoeyBhbW91bnQ6IGUudGFyZ2V0LnZhbHVlIH0pIH19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBvbkNsaWNrPXsoKSA9PiB0aGlzLnJ1bkNhbGNzKCl9PkNhbGN1bGF0ZSBQcm9iYWJpbGl0aWVzPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHA+e3RoaXMuc3RhdGUuZXhhY3QudG9Mb2NhbGVTdHJpbmcoJ2VuJywgeyBzdHlsZTogJ3BlcmNlbnQnLCBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSl9IGNoYW5jZSBvZiBnZXR0aW5nIGV4YWNsdGx5IHt0aGlzLnN0YXRlLmFtb3VudH0gZHJvcHMuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD57dGhpcy5zdGF0ZS5hdExlYXN0LnRvTG9jYWxlU3RyaW5nKCdlbicsIHsgc3R5bGU6ICdwZXJjZW50JywgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pfSBjaGFuY2Ugb2YgZ2V0dGluZyBhdCBsZWFzdCB7dGhpcy5zdGF0ZS5hbW91bnR9IGRyb3BzLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+e3RoaXMuc3RhdGUuYXRNb3N0LnRvTG9jYWxlU3RyaW5nKCdlbicsIHsgc3R5bGU6ICdwZXJjZW50JywgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pfSBjaGFuY2Ugb2YgZ2V0dGluZyBhdCBtb3N0IHt0aGlzLnN0YXRlLmFtb3VudH0gZHJvcHMuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD57dGhpcy5zdGF0ZS5maWZ0eS50b0xvY2FsZVN0cmluZygnZW4nKX0gdHJpYWxzIHJlcXVpcmVkIHRvIGhhdmUgNTAlIGNoYW5jZSBvZiAxIGRyb3A8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPnt0aGlzLnN0YXRlLm5pbmV0eUZpdmUudG9Mb2NhbGVTdHJpbmcoJ2VuJyl9IHRyaWFscyByZXF1aXJlZCB0byBoYXZlIDk1JSBjaGFuY2Ugb2YgMSBkcm9wPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/probabilites.js\n");

/***/ }),

/***/ "jstat":
/*!************************!*\
  !*** external "jstat" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jstat\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc3RhdFwiPzM4OWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoianN0YXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc3RhdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///jstat\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });