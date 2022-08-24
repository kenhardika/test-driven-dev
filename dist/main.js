/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*****************************!*\
  !*** ./src/caesarCypher.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cypher": () => (/* binding */ cypher)
/* harmony export */ });
// what is caesar ciper?
// its an old text based cyphering technique made by Julius Caesar himself.
// basically, you set the cypher 'shift' number then, that number will be shifting letter ex: A=0, B=1. C=2. Translate A with shift= 2. Amswer is A = C,
// because cypherLetter = shiftNum + letterNum so 2+0 = 2, what got number 2? thats "C".

function cypher(word, shift) {
  const LOW_POINT = 97; // 
  const HIGH_POINT = 122;
  const TOTAL_LETTER = 26;
  //guard clause
  if (!word) {
    return
  }
  if (!shift && shift !== 0) {
    return 
  }
  if (typeof shift !== "number") {
    return
  }
  // slice the word into each letter then put into filter, its either cypher or passthrough
  else {
    const slicedWord = word.split("");
    let cyphered = slicedWord.map((letter) => {
      if (/[a-zA-Z]/.test(letter)) {
        //change the letter to coded
        const alphaValConv = (val) => {
          // low point a=97
          // high point z=122
          // how we are looping through from 122 back to 97
          // possibility 1, if (val>122) then val - 26;
          let alphaNum = val.toLowerCase().charCodeAt(0) + shift;
          // let alphaNum = val.toLowerCase().charCodeAt(0) - 97 + shift;
          // console.log(alphaNum);
          if (alphaNum > HIGH_POINT) {
            return String.fromCharCode(alphaNum - TOTAL_LETTER);
          } else if (alphaNum < LOW_POINT) {
            return String.fromCharCode(alphaNum + TOTAL_LETTER);
          } else {
            return String.fromCharCode(alphaNum);
          }
        };
        return alphaValConv(letter);
      } else {
        //passthrough
        return letter;
      }
    });
    return cyphered.join("");
  }
}
console.log(cypher("you wanna play lets PLAY! 12 times ok?", 1));


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0LWRyaXZlbi1kZXYvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVzdC1kcml2ZW4tZGV2L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZXN0LWRyaXZlbi1kZXYvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ZXN0LWRyaXZlbi1kZXYvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZXN0LWRyaXZlbi1kZXYvLi9zcmMvY2Flc2FyQ3lwaGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gd2hhdCBpcyBjYWVzYXIgY2lwZXI/XHJcbi8vIGl0cyBhbiBvbGQgdGV4dCBiYXNlZCBjeXBoZXJpbmcgdGVjaG5pcXVlIG1hZGUgYnkgSnVsaXVzIENhZXNhciBoaW1zZWxmLlxyXG4vLyBiYXNpY2FsbHksIHlvdSBzZXQgdGhlIGN5cGhlciAnc2hpZnQnIG51bWJlciB0aGVuLCB0aGF0IG51bWJlciB3aWxsIGJlIHNoaWZ0aW5nIGxldHRlciBleDogQT0wLCBCPTEuIEM9Mi4gVHJhbnNsYXRlIEEgd2l0aCBzaGlmdD0gMi4gQW1zd2VyIGlzIEEgPSBDLFxyXG4vLyBiZWNhdXNlIGN5cGhlckxldHRlciA9IHNoaWZ0TnVtICsgbGV0dGVyTnVtIHNvIDIrMCA9IDIsIHdoYXQgZ290IG51bWJlciAyPyB0aGF0cyBcIkNcIi5cclxuXHJcbmZ1bmN0aW9uIGN5cGhlcih3b3JkLCBzaGlmdCkge1xyXG4gIGNvbnN0IExPV19QT0lOVCA9IDk3OyAvLyBcclxuICBjb25zdCBISUdIX1BPSU5UID0gMTIyO1xyXG4gIGNvbnN0IFRPVEFMX0xFVFRFUiA9IDI2O1xyXG4gIC8vZ3VhcmQgY2xhdXNlXHJcbiAgaWYgKCF3b3JkKSB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgaWYgKCFzaGlmdCAmJiBzaGlmdCAhPT0gMCkge1xyXG4gICAgcmV0dXJuIFxyXG4gIH1cclxuICBpZiAodHlwZW9mIHNoaWZ0ICE9PSBcIm51bWJlclwiKSB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgLy8gc2xpY2UgdGhlIHdvcmQgaW50byBlYWNoIGxldHRlciB0aGVuIHB1dCBpbnRvIGZpbHRlciwgaXRzIGVpdGhlciBjeXBoZXIgb3IgcGFzc3Rocm91Z2hcclxuICBlbHNlIHtcclxuICAgIGNvbnN0IHNsaWNlZFdvcmQgPSB3b3JkLnNwbGl0KFwiXCIpO1xyXG4gICAgbGV0IGN5cGhlcmVkID0gc2xpY2VkV29yZC5tYXAoKGxldHRlcikgPT4ge1xyXG4gICAgICBpZiAoL1thLXpBLVpdLy50ZXN0KGxldHRlcikpIHtcclxuICAgICAgICAvL2NoYW5nZSB0aGUgbGV0dGVyIHRvIGNvZGVkXHJcbiAgICAgICAgY29uc3QgYWxwaGFWYWxDb252ID0gKHZhbCkgPT4ge1xyXG4gICAgICAgICAgLy8gbG93IHBvaW50IGE9OTdcclxuICAgICAgICAgIC8vIGhpZ2ggcG9pbnQgej0xMjJcclxuICAgICAgICAgIC8vIGhvdyB3ZSBhcmUgbG9vcGluZyB0aHJvdWdoIGZyb20gMTIyIGJhY2sgdG8gOTdcclxuICAgICAgICAgIC8vIHBvc3NpYmlsaXR5IDEsIGlmICh2YWw+MTIyKSB0aGVuIHZhbCAtIDI2O1xyXG4gICAgICAgICAgbGV0IGFscGhhTnVtID0gdmFsLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSArIHNoaWZ0O1xyXG4gICAgICAgICAgLy8gbGV0IGFscGhhTnVtID0gdmFsLnRvTG93ZXJDYXNlKCkuY2hhckNvZGVBdCgwKSAtIDk3ICsgc2hpZnQ7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhhbHBoYU51bSk7XHJcbiAgICAgICAgICBpZiAoYWxwaGFOdW0gPiBISUdIX1BPSU5UKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGFscGhhTnVtIC0gVE9UQUxfTEVUVEVSKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoYWxwaGFOdW0gPCBMT1dfUE9JTlQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoYWxwaGFOdW0gKyBUT1RBTF9MRVRURVIpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoYWxwaGFOdW0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGFscGhhVmFsQ29udihsZXR0ZXIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vcGFzc3Rocm91Z2hcclxuICAgICAgICByZXR1cm4gbGV0dGVyO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBjeXBoZXJlZC5qb2luKFwiXCIpO1xyXG4gIH1cclxufVxyXG5jb25zb2xlLmxvZyhjeXBoZXIoXCJ5b3Ugd2FubmEgcGxheSBsZXRzIFBMQVkhIDEyIHRpbWVzIG9rP1wiLCAxKSk7XHJcbmV4cG9ydCB7IGN5cGhlciB9O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=