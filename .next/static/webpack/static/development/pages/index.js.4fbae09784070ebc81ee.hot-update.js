webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/Layout */ "./Components/Layout/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Components_Test__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/Test */ "./Components/Test/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "/Users/shentiantian/Desktop/\u6BD5\u8BBE/SweetSweetME.github.io/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;







function fetcher(url) {
  return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default()(url).then(function (r) {
    return r.json();
  });
}

var Cc = function Cc() {
  return __jsx("div", {
    className: "test-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx(_Components_Test__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }));
};

var Index = function Index(props) {
  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])(),
      query = _useRouter.query;

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_8__["default"])("/api/randomQuote".concat(query.author ? '?author=' + query.author : ''), fetcher),
      data = _useSWR.data,
      error = _useSWR.error; // The following line has optional chaining, added in Next.js v9.1.5,
  // is the same as `data && data.author`


  var author = data === null || data === void 0 ? void 0 : data.author;
  var quote = data === null || data === void 0 ? void 0 : data.quote;
  if (!data) quote = 'Loading...';
  if (error) quote = 'Failed to fetch the quote.';
  return __jsx("div", {
    className: "jsx-2115608448" + " " + "aaa",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(_Components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2115608448" + " " + "quote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, quote), author && __jsx("span", {
    className: "jsx-2115608448" + " " + "author",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "- ", author), __jsx("h1", {
    className: "jsx-2115608448",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Batman TV Shows"), __jsx("ul", {
    className: "jsx-2115608448",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, props.shows.map(function (show) {
    return __jsx("li", {
      key: show.id,
      className: "jsx-2115608448",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/p/[id]",
      as: "/p/".concat(show.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-2115608448",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, show.name)));
  })), __jsx("div", {
    className: "jsx-2115608448",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "sss", __jsx("span", {
    className: "jsx-2115608448" + " " + "a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "123")), __jsx("div", {
    className: "jsx-2115608448",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "123"), __jsx("div", {
    className: "jsx-2115608448" + " " + "stt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx(Cc, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3040390145",
    __self: this
  }, "div.jsx-2115608448{color:pink;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGVudGlhbnRpYW4vRGVza3RvcC/mr5Xorr4vU3dlZXRTd2VldE1FLmdpdGh1Yi5pby9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RFMsQUFHd0IsV0FDYiIsImZpbGUiOiIvVXNlcnMvc2hlbnRpYW50aWFuL0Rlc2t0b3Av5q+V6K6+L1N3ZWV0U3dlZXRNRS5naXRodWIuaW8vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL0NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgVGVzdCBmcm9tICcuLi9Db21wb25lbnRzL1Rlc3QnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmZ1bmN0aW9uIGZldGNoZXIodXJsKSB7XG4gIHJldHVybiBmZXRjaCh1cmwpLnRoZW4ociA9PiByLmpzb24oKSlcbn1cblxuY29uc3QgQ2MgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidGVzdC13cmFwcGVyXCI+XG4gICAgPFRlc3QgLz5cbiAgPC9kaXY+XG4pXG5cbmNvbnN0IEluZGV4ID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxuICAgIGAvYXBpL3JhbmRvbVF1b3RlJHtxdWVyeS5hdXRob3IgPyAnP2F1dGhvcj0nICsgcXVlcnkuYXV0aG9yIDogJyd9YCxcbiAgICBmZXRjaGVyXG4gICk7XG4gIC8vIFRoZSBmb2xsb3dpbmcgbGluZSBoYXMgb3B0aW9uYWwgY2hhaW5pbmcsIGFkZGVkIGluIE5leHQuanMgdjkuMS41LFxuICAvLyBpcyB0aGUgc2FtZSBhcyBgZGF0YSAmJiBkYXRhLmF1dGhvcmBcbiAgY29uc3QgYXV0aG9yID0gZGF0YT8uYXV0aG9yO1xuICBsZXQgcXVvdGUgPSBkYXRhPy5xdW90ZTtcblxuXG4gIGlmICghZGF0YSkgcXVvdGUgPSAnTG9hZGluZy4uLic7XG4gIGlmIChlcnJvcikgcXVvdGUgPSAnRmFpbGVkIHRvIGZldGNoIHRoZSBxdW90ZS4nO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhYWFcIj5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1b3RlXCI+e3F1b3RlfTwvZGl2PlxuICAgICAge2F1dGhvciAmJiA8c3BhbiBjbGFzc05hbWU9XCJhdXRob3JcIj4tIHthdXRob3J9PC9zcGFuPn1cbiAgICAgICAgPGgxPkJhdG1hbiBUViBTaG93czwvaDE+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7cHJvcHMuc2hvd3MubWFwKHNob3cgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtzaG93LmlkfT5cbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgaHJlZj1cIi9wL1tpZF1cIlxuICAgICAgICAgICAgICAgICAgYXM9e2AvcC8ke3Nob3cuaWR9YH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8YT57c2hvdy5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICBzc3NcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhXCI+MTIzPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj4xMjM8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdHRcIj5cbiAgICAgICAgICA8Q2MgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIGNvbG9yOiBwaW5rO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIGNvbG9yOiBvcmFuZ2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zdHQge1xuICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPWJhdG1hbicpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICBjb25zb2xlLmxvZyhkYXRhKVxuXG4gIHJldHVybiB7XG4gICAgc2hvd3M6IGRhdGEubWFwKGVudHJ5ID0+IGVudHJ5LnNob3cpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiXX0= */\n/*@ sourceURL=/Users/shentiantian/Desktop/\u6BD5\u8BBE/SweetSweetME.github.io/pages/index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2934696104",
    __self: this
  }, "h1.jsx-2115608448{color:orange;}.stt.jsx-2115608448{color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGVudGlhbnRpYW4vRGVza3RvcC/mr5Xorr4vU3dlZXRTd2VldE1FLmdpdGh1Yi5pby9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRVMsQUFHMEIsQUFHSCxVQUNaLEdBSEEiLCJmaWxlIjoiL1VzZXJzL3NoZW50aWFudGlhbi9EZXNrdG9wL+avleiuvi9Td2VldFN3ZWV0TUUuZ2l0aHViLmlvL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9Db21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFRlc3QgZnJvbSAnLi4vQ29tcG9uZW50cy9UZXN0JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5mdW5jdGlvbiBmZXRjaGVyKHVybCkge1xuICByZXR1cm4gZmV0Y2godXJsKS50aGVuKHIgPT4gci5qc29uKCkpXG59XG5cbmNvbnN0IENjID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInRlc3Qtd3JhcHBlclwiPlxuICAgIDxUZXN0IC8+XG4gIDwvZGl2PlxuKVxuXG5jb25zdCBJbmRleCA9IHByb3BzID0+IHtcbiAgY29uc3QgeyBxdWVyeSB9ID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcbiAgICBgL2FwaS9yYW5kb21RdW90ZSR7cXVlcnkuYXV0aG9yID8gJz9hdXRob3I9JyArIHF1ZXJ5LmF1dGhvciA6ICcnfWAsXG4gICAgZmV0Y2hlclxuICApO1xuICAvLyBUaGUgZm9sbG93aW5nIGxpbmUgaGFzIG9wdGlvbmFsIGNoYWluaW5nLCBhZGRlZCBpbiBOZXh0LmpzIHY5LjEuNSxcbiAgLy8gaXMgdGhlIHNhbWUgYXMgYGRhdGEgJiYgZGF0YS5hdXRob3JgXG4gIGNvbnN0IGF1dGhvciA9IGRhdGE/LmF1dGhvcjtcbiAgbGV0IHF1b3RlID0gZGF0YT8ucXVvdGU7XG5cblxuICBpZiAoIWRhdGEpIHF1b3RlID0gJ0xvYWRpbmcuLi4nO1xuICBpZiAoZXJyb3IpIHF1b3RlID0gJ0ZhaWxlZCB0byBmZXRjaCB0aGUgcXVvdGUuJztcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWFhXCI+XG4gICAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdW90ZVwiPntxdW90ZX08L2Rpdj5cbiAgICAgIHthdXRob3IgJiYgPHNwYW4gY2xhc3NOYW1lPVwiYXV0aG9yXCI+LSB7YXV0aG9yfTwvc3Bhbj59XG4gICAgICAgIDxoMT5CYXRtYW4gVFYgU2hvd3M8L2gxPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge3Byb3BzLnNob3dzLm1hcChzaG93ID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17c2hvdy5pZH0+XG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIvcC9baWRdXCJcbiAgICAgICAgICAgICAgICAgIGFzPXtgL3AvJHtzaG93LmlkfWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGE+e3Nob3cubmFtZX08L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgc3NzXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYVwiPjEyMzwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+MTIzPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3R0XCI+XG4gICAgICAgICAgPENjIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICBjb2xvcjogcGluaztcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICBjb2xvcjogb3JhbmdlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3R0IHtcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zZWFyY2gvc2hvd3M/cT1iYXRtYW4nKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgY29uc29sZS5sb2coZGF0YSlcblxuICByZXR1cm4ge1xuICAgIHNob3dzOiBkYXRhLm1hcChlbnRyeSA9PiBlbnRyeS5zaG93KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4Il19 */\n/*@ sourceURL=/Users/shentiantian/Desktop/\u6BD5\u8BBE/SweetSweetME.github.io/pages/index.js */"));
};

Index.getInitialProps = function _callee() {
  var res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default()('https://api.tvmaze.com/search/shows?q=batman'));

        case 2:
          res = _context.sent;
          _context.next = 5;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(res.json());

        case 5:
          data = _context.sent;
          console.log(data);
          return _context.abrupt("return", {
            shows: data.map(function (entry) {
              return entry.show;
            })
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.4fbae09784070ebc81ee.hot-update.js.map