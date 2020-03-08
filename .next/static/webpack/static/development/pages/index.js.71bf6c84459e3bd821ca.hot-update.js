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


var _jsxFileName = "/Users/shentiantian/Desktop/\u6BD5\u8BBE/SweetSweetME.github.io/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



 // import useSWR from 'swr';
// import { useRouter } from 'next';

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
  // const { query } = useRouter();
  // const { data, error } = useSWR(
  //   `/api/randomQuote${query.author ? '?author=' + query.author : ''}`,
  //   fetcher
  // );
  // // The following line has optional chaining, added in Next.js v9.1.5,
  // // is the same as `data && data.author`
  // const author = data?.author;
  // let quote = data?.quote;
  // if (!data) quote = 'Loading...';
  // if (error) quote = 'Failed to fetch the quote.';
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
  }, __jsx("h1", {
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
  }, "div.jsx-2115608448{color:pink;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGVudGlhbnRpYW4vRGVza3RvcC/mr5Xorr4vU3dlZXRTd2VldE1FLmdpdGh1Yi5pby9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RFMsQUFHd0IsV0FDYiIsImZpbGUiOiIvVXNlcnMvc2hlbnRpYW50aWFuL0Rlc2t0b3Av5q+V6K6+L1N3ZWV0U3dlZXRNRS5naXRodWIuaW8vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL0NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgVGVzdCBmcm9tICcuLi9Db21wb25lbnRzL1Rlc3QnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG4vLyBpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG4vLyBpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0JztcblxuZnVuY3Rpb24gZmV0Y2hlcih1cmwpIHtcbiAgcmV0dXJuIGZldGNoKHVybCkudGhlbihyID0+IHIuanNvbigpKTtcbn1cblxuY29uc3QgQ2MgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidGVzdC13cmFwcGVyXCI+XG4gICAgPFRlc3QgLz5cbiAgPC9kaXY+XG4pXG5cbmNvbnN0IEluZGV4ID0gcHJvcHMgPT4ge1xuICAvLyBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcbiAgLy8gY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxuICAvLyAgIGAvYXBpL3JhbmRvbVF1b3RlJHtxdWVyeS5hdXRob3IgPyAnP2F1dGhvcj0nICsgcXVlcnkuYXV0aG9yIDogJyd9YCxcbiAgLy8gICBmZXRjaGVyXG4gIC8vICk7XG4gIC8vIC8vIFRoZSBmb2xsb3dpbmcgbGluZSBoYXMgb3B0aW9uYWwgY2hhaW5pbmcsIGFkZGVkIGluIE5leHQuanMgdjkuMS41LFxuICAvLyAvLyBpcyB0aGUgc2FtZSBhcyBgZGF0YSAmJiBkYXRhLmF1dGhvcmBcbiAgLy8gY29uc3QgYXV0aG9yID0gZGF0YT8uYXV0aG9yO1xuICAvLyBsZXQgcXVvdGUgPSBkYXRhPy5xdW90ZTtcblxuXG4gIC8vIGlmICghZGF0YSkgcXVvdGUgPSAnTG9hZGluZy4uLic7XG4gIC8vIGlmIChlcnJvcikgcXVvdGUgPSAnRmFpbGVkIHRvIGZldGNoIHRoZSBxdW90ZS4nO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhYWFcIj5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJxdW90ZVwiPntxdW90ZX08L2Rpdj5cbiAgICAgIHthdXRob3IgJiYgPHNwYW4gY2xhc3NOYW1lPVwiYXV0aG9yXCI+LSB7YXV0aG9yfTwvc3Bhbj59ICovfVxuICAgICAgICA8aDE+QmF0bWFuIFRWIFNob3dzPC9oMT5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHtwcm9wcy5zaG93cy5tYXAoc2hvdyA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e3Nob3cuaWR9PlxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICBocmVmPVwiL3AvW2lkXVwiXG4gICAgICAgICAgICAgICAgICBhcz17YC9wLyR7c2hvdy5pZH1gfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxhPntzaG93Lm5hbWV9PC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHNzc1xuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFcIj4xMjM8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PjEyMzwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0dFwiPlxuICAgICAgICAgIDxDYyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgY29sb3I6IHBpbms7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgY29sb3I6IG9yYW5nZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnN0dCB7XG4gICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2VhcmNoL3Nob3dzP3E9YmF0bWFuJyk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIGNvbnNvbGUubG9nKGRhdGEpXG5cbiAgcmV0dXJuIHtcbiAgICBzaG93czogZGF0YS5tYXAoZW50cnkgPT4gZW50cnkuc2hvdylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdfQ== */\n/*@ sourceURL=/Users/shentiantian/Desktop/\u6BD5\u8BBE/SweetSweetME.github.io/pages/index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2934696104",
    __self: this
  }, "h1.jsx-2115608448{color:orange;}.stt.jsx-2115608448{color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGVudGlhbnRpYW4vRGVza3RvcC/mr5Xorr4vU3dlZXRTd2VldE1FLmdpdGh1Yi5pby9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRVMsQUFHMEIsQUFHSCxVQUNaLEdBSEEiLCJmaWxlIjoiL1VzZXJzL3NoZW50aWFudGlhbi9EZXNrdG9wL+avleiuvi9Td2VldFN3ZWV0TUUuZ2l0aHViLmlvL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9Db21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFRlc3QgZnJvbSAnLi4vQ29tcG9uZW50cy9UZXN0JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuLy8gaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuLy8gaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dCc7XG5cbmZ1bmN0aW9uIGZldGNoZXIodXJsKSB7XG4gIHJldHVybiBmZXRjaCh1cmwpLnRoZW4ociA9PiByLmpzb24oKSk7XG59XG5cbmNvbnN0IENjID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInRlc3Qtd3JhcHBlclwiPlxuICAgIDxUZXN0IC8+XG4gIDwvZGl2PlxuKVxuXG5jb25zdCBJbmRleCA9IHByb3BzID0+IHtcbiAgLy8gY29uc3QgeyBxdWVyeSB9ID0gdXNlUm91dGVyKCk7XG4gIC8vIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcbiAgLy8gICBgL2FwaS9yYW5kb21RdW90ZSR7cXVlcnkuYXV0aG9yID8gJz9hdXRob3I9JyArIHF1ZXJ5LmF1dGhvciA6ICcnfWAsXG4gIC8vICAgZmV0Y2hlclxuICAvLyApO1xuICAvLyAvLyBUaGUgZm9sbG93aW5nIGxpbmUgaGFzIG9wdGlvbmFsIGNoYWluaW5nLCBhZGRlZCBpbiBOZXh0LmpzIHY5LjEuNSxcbiAgLy8gLy8gaXMgdGhlIHNhbWUgYXMgYGRhdGEgJiYgZGF0YS5hdXRob3JgXG4gIC8vIGNvbnN0IGF1dGhvciA9IGRhdGE/LmF1dGhvcjtcbiAgLy8gbGV0IHF1b3RlID0gZGF0YT8ucXVvdGU7XG5cblxuICAvLyBpZiAoIWRhdGEpIHF1b3RlID0gJ0xvYWRpbmcuLi4nO1xuICAvLyBpZiAoZXJyb3IpIHF1b3RlID0gJ0ZhaWxlZCB0byBmZXRjaCB0aGUgcXVvdGUuJztcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWFhXCI+XG4gICAgICA8TGF5b3V0PlxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwicXVvdGVcIj57cXVvdGV9PC9kaXY+XG4gICAgICB7YXV0aG9yICYmIDxzcGFuIGNsYXNzTmFtZT1cImF1dGhvclwiPi0ge2F1dGhvcn08L3NwYW4+fSAqL31cbiAgICAgICAgPGgxPkJhdG1hbiBUViBTaG93czwvaDE+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7cHJvcHMuc2hvd3MubWFwKHNob3cgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtzaG93LmlkfT5cbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgaHJlZj1cIi9wL1tpZF1cIlxuICAgICAgICAgICAgICAgICAgYXM9e2AvcC8ke3Nob3cuaWR9YH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8YT57c2hvdy5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICBzc3NcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhXCI+MTIzPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj4xMjM8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdHRcIj5cbiAgICAgICAgICA8Q2MgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIGNvbG9yOiBwaW5rO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIGNvbG9yOiBvcmFuZ2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zdHQge1xuICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPWJhdG1hbicpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICBjb25zb2xlLmxvZyhkYXRhKVxuXG4gIHJldHVybiB7XG4gICAgc2hvd3M6IGRhdGEubWFwKGVudHJ5ID0+IGVudHJ5LnNob3cpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiXX0= */\n/*@ sourceURL=/Users/shentiantian/Desktop/\u6BD5\u8BBE/SweetSweetME.github.io/pages/index.js */"));
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
//# sourceMappingURL=index.js.71bf6c84459e3bd821ca.hot-update.js.map