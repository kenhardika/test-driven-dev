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
console.log("Caesar Cypher");

function cypher(word) {
  //guard clause
  if (!word) {
    return;
  }
  // slice the word into each letter then put into filter, its either cypher or passthrough
  else {
    const slicedWord = word.split("");
    // console.log(slicedWord);
    let cyphered = slicedWord.map((letter) => {
      if (/[a-zA-Z]/.test(letter)) {
        //change the letter to coded

        // console.log(letter);
        return letter.toUpperCase();
      } else {
        //passthrough
        // console.log(letter)
        return letter;
      }
    });
    // console.log(cyphered);
    return cyphered.join("");
  }
}
console.log(typeof cypher("!"));
console.log(cypher("azkan ! 12"));


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0LWRyaXZlbi1kZXYvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVzdC1kcml2ZW4tZGV2L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZXN0LWRyaXZlbi1kZXYvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ZXN0LWRyaXZlbi1kZXYvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZXN0LWRyaXZlbi1kZXYvLi9zcmMvY2Flc2FyQ3lwaGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gd2hhdCBpcyBjYWVzYXIgY2lwZXI/XHJcbi8vIGl0cyBhbiBvbGQgdGV4dCBiYXNlZCBjeXBoZXJpbmcgdGVjaG5pcXVlIG1hZGUgYnkgSnVsaXVzIENhZXNhciBoaW1zZWxmLlxyXG4vLyBiYXNpY2FsbHksIHlvdSBzZXQgdGhlIGN5cGhlciAnc2hpZnQnIG51bWJlciB0aGVuLCB0aGF0IG51bWJlciB3aWxsIGJlIHNoaWZ0aW5nIGxldHRlciBleDogQT0wLCBCPTEuIEM9Mi4gVHJhbnNsYXRlIEEgd2l0aCBzaGlmdD0gMi4gQW1zd2VyIGlzIEEgPSBDLFxyXG4vLyBiZWNhdXNlIGN5cGhlckxldHRlciA9IHNoaWZ0TnVtICsgbGV0dGVyTnVtIHNvIDIrMCA9IDIsIHdoYXQgZ290IG51bWJlciAyPyB0aGF0cyBcIkNcIi5cclxuY29uc29sZS5sb2coXCJDYWVzYXIgQ3lwaGVyXCIpO1xyXG5cclxuZnVuY3Rpb24gY3lwaGVyKHdvcmQpIHtcclxuICAvL2d1YXJkIGNsYXVzZVxyXG4gIGlmICghd29yZCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICAvLyBzbGljZSB0aGUgd29yZCBpbnRvIGVhY2ggbGV0dGVyIHRoZW4gcHV0IGludG8gZmlsdGVyLCBpdHMgZWl0aGVyIGN5cGhlciBvciBwYXNzdGhyb3VnaFxyXG4gIGVsc2Uge1xyXG4gICAgY29uc3Qgc2xpY2VkV29yZCA9IHdvcmQuc3BsaXQoXCJcIik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhzbGljZWRXb3JkKTtcclxuICAgIGxldCBjeXBoZXJlZCA9IHNsaWNlZFdvcmQubWFwKChsZXR0ZXIpID0+IHtcclxuICAgICAgaWYgKC9bYS16QS1aXS8udGVzdChsZXR0ZXIpKSB7XHJcbiAgICAgICAgLy9jaGFuZ2UgdGhlIGxldHRlciB0byBjb2RlZFxyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhsZXR0ZXIpO1xyXG4gICAgICAgIHJldHVybiBsZXR0ZXIudG9VcHBlckNhc2UoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvL3Bhc3N0aHJvdWdoXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cobGV0dGVyKVxyXG4gICAgICAgIHJldHVybiBsZXR0ZXI7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gY29uc29sZS5sb2coY3lwaGVyZWQpO1xyXG4gICAgcmV0dXJuIGN5cGhlcmVkLmpvaW4oXCJcIik7XHJcbiAgfVxyXG59XHJcbmNvbnNvbGUubG9nKHR5cGVvZiBjeXBoZXIoXCIhXCIpKTtcclxuY29uc29sZS5sb2coY3lwaGVyKFwiYXprYW4gISAxMlwiKSk7XHJcbmV4cG9ydCB7IGN5cGhlciB9O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=