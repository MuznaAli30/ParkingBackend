(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server.ts":
/*!*******************!*\
  !*** ./server.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ../node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/mani/Desktop/Internship Projects/parking(7)/Backend/src/server.ts: Unexpected token, expected \",\" (6:52)\n\n\u001b[0m \u001b[90m 4 |\u001b[39m \u001b[36mconst\u001b[39m port \u001b[33m=\u001b[39m process\u001b[33m.\u001b[39menv\u001b[33m.\u001b[39m\u001b[33mPORT\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 5 |\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 6 |\u001b[39m mongoose\u001b[33m.\u001b[39mconnect(process\u001b[33m.\u001b[39menv\u001b[33m.\u001b[39m\u001b[33mMONGO_CONNECTION_STRING\u001b[39m\u001b[33m!\u001b[39m)\u001b[0m\n\u001b[0m \u001b[90m   |\u001b[39m                                                     \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 7 |\u001b[39m     \u001b[33m.\u001b[39mthen(() \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m 8 |\u001b[39m         console\u001b[33m.\u001b[39mlog(\u001b[32m\"mongoose connected\"\u001b[39m )\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 9 |\u001b[39m         app\u001b[33m.\u001b[39mlisten(port\u001b[33m,\u001b[39m () \u001b[33m=>\u001b[39m {\u001b[0m\n    at constructor (/home/mani/Desktop/Internship Projects/parking(7)/Backend/node_modules/@babel/parser/lib/index.js:353:19)\n    at Parser.raise (/home/mani/Desktop/Internship Projects/parking(7)/Backend/node_modules/@babel/parser/lib/index.js:3277:19)\n    at Parser.unexpected (/home/mani/Desktop/Internship Projects/parking(7)/Backend/node_modules/@babel/parser/lib/index.js:3297:16)\n    at Parser.expect (/home/mani/Desktop/Internship Projects/parking(7)/Backend/node_modules/@babel/parser/lib/index.js:3601:28)\n    at Parser.parseCallExpressionArguments (/home/mani/Desktop/Internship Projects/parking(7)/Backend/node_modules/@babel/parser/lib/index.js:10764:14)\n    at Parser.parseCoverCallAndAsyncArrowHead (/home/mani/Desktop/Internship Projects/parking(7)/Backend/node_modules/@babel/parser/lib/index.js:10693:29)\n    at Parser.parseSubscript (/home/mani/Desktop/Internship Projects/parking(7)/Backend/node_modules/@babel/parser/lib/index.js:10630:19)\n    at Parser.parseSubscripts (/home/mani/Desktop/Internship Projects/parking(7)/Backend/node_modules/@babel/parser/lib/index.js:10603:19)\n    at Parser.parseExprSubscripts (/home/mani/Desktop/Internship Projects/parking(7)/Backend/node_modules/@babel/parser/lib/index.js:10594:17)\n    at Parser.parseUpdate (/home/mani/Desktop/Internship Projects/parking(7)/Backend/node_modules/@babel/parser/lib/index.js:10573:21)\n    at Parser.parseMaybeUnary (/home/mani/Desktop/Internship Projects/parking(7)/Backend/node_modules/@babel/parser/lib/index.js:10551:23)\n    at Parser.parseMaybeUnaryOrPrivate (/home/mani/Desktop/Internship Projects/parking(7)/Backend/node_modules/@babel/parser/lib/index.js:10405:61)\n    at Parser.parseExprOps (/home/mani/Desktop/Internship Projects/parking(7)/Backend/node_modules/@babel/parser/lib/index.js:10410:23)\n    at Parser.parseMaybeConditional (/home/mani/Desktop/Internship Projects/parking(7)/Backend/node_modules/@babel/parser/lib/index.js:10387:23)\n    at Parser.parseMaybeAssign (/home/mani/Desktop/Internship Projects/parking(7)/Backend/node_modules/@babel/parser/lib/index.js:10348:21)\n    at Parser.parseExpressionBase (/home/mani/Desktop/Internship Projects/parking(7)/Backend/node_modules/@babel/parser/lib/index.js:10302:23)\n    at /home/mani/Desktop/Internship Projects/parking(7)/Backend/node_modules/@babel/parser/lib/index.js:10298:39\n    at Parser.allowInAnd (/home/mani/Desktop/Internship Projects/parking(7)/Backend/node_modules/@babel/parser/lib/index.js:11931:16)\n    at Parser.parseExpression (/home/mani/Desktop/Internship Projects/parking(7)/Backend/node_modules/@babel/parser/lib/index.js:10298:17)\n    at Parser.parseStatementContent (/home/mani/Desktop/Internship Projects/parking(7)/Backend/node_modules/@babel/parser/lib/index.js:12372:23)\n    at Parser.parseStatementLike (/home/mani/Desktop/Internship Projects/parking(7)/Backend/node_modules/@babel/parser/lib/index.js:12239:17)\n    at Parser.parseModuleItem (/home/mani/Desktop/Internship Projects/parking(7)/Backend/node_modules/@babel/parser/lib/index.js:12216:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/mani/Desktop/Internship Projects/parking(7)/Backend/node_modules/@babel/parser/lib/index.js:12796:36)\n    at Parser.parseBlockBody (/home/mani/Desktop/Internship Projects/parking(7)/Backend/node_modules/@babel/parser/lib/index.js:12789:10)\n    at Parser.parseProgram (/home/mani/Desktop/Internship Projects/parking(7)/Backend/node_modules/@babel/parser/lib/index.js:12116:10)\n    at Parser.parseTopLevel (/home/mani/Desktop/Internship Projects/parking(7)/Backend/node_modules/@babel/parser/lib/index.js:12106:25)\n    at Parser.parse (/home/mani/Desktop/Internship Projects/parking(7)/Backend/node_modules/@babel/parser/lib/index.js:13905:10)\n    at parse (/home/mani/Desktop/Internship Projects/parking(7)/Backend/node_modules/@babel/parser/lib/index.js:13947:38)\n    at parser (/home/mani/Desktop/Internship Projects/parking(7)/Backend/node_modules/@babel/core/lib/parser/index.js:41:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/home/mani/Desktop/Internship Projects/parking(7)/Backend/node_modules/@babel/core/lib/transformation/normalize-file.js:64:37)\n    at normalizeFile.next (<anonymous>)\n    at run (/home/mani/Desktop/Internship Projects/parking(7)/Backend/node_modules/@babel/core/lib/transformation/index.js:21:50)\n    at run.next (<anonymous>)\n    at transform (/home/mani/Desktop/Internship Projects/parking(7)/Backend/node_modules/@babel/core/lib/transform.js:22:33)\n    at transform.next (<anonymous>)\n    at step (/home/mani/Desktop/Internship Projects/parking(7)/Backend/node_modules/gensync/index.js:261:32)\n    at /home/mani/Desktop/Internship Projects/parking(7)/Backend/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/home/mani/Desktop/Internship Projects/parking(7)/Backend/node_modules/gensync/index.js:223:11)");

/***/ })

/******/ })));