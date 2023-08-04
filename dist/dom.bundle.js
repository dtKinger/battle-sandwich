(()=>{"use strict";var __webpack_modules__={171:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("/* unused harmony export dom */\nconst dom = ( () => {\n  const allSquares = document.querySelectorAll('.square');\n  const oddRowSquares = document.querySelectorAll('.odd-row')\n  const evenRowSquares = document.querySelectorAll('.even-row')\n  \n  oddRowSquares.forEach( (square) => {\n    if (square.dataset.id )\n      if (square.dataset.id % 2 !== 0){\n        square.classList.add('light-wood')\n      } else {\n        square.classList.add('dark-wood');\n      }\n    })\n\n  evenRowSquares.forEach( (square) => {\n    if (square.dataset.id )\n      if (square.dataset.id % 2 === 0){\n        square.classList.add('light-wood')\n      } else {\n        square.classList.add('dark-wood');\n      }\n    })\n\n  }\n)();\n\n\n\n//# sourceURL=webpack://battle-sandwich/./src/dom.js?")}},__webpack_require__={d:(e,a)=>{for(var r in a)__webpack_require__.o(a,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})},o:(e,a)=>Object.prototype.hasOwnProperty.call(e,a)},__webpack_exports__={};__webpack_modules__[171](0,__webpack_exports__,__webpack_require__)})();