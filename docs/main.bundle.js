/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classProject.js":
/*!*****************************!*\
  !*** ./src/classProject.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultProject: () => (/* binding */ defaultProject),
/* harmony export */   userProject: () => (/* binding */ userProject)
/* harmony export */ });
class project{

    constructor(name){
        if(this instanceof defaultProject){
            this.name="default"
        }
        else{
            this.name=name;
        }
        
    }
    array=[];
    
    add(...todo){
        this.array.push(todo);
    }

    remove(todo){
        this.array[0][0].splice(this.array[0][0].indexOf(todo),1);
    }
}

class defaultProject extends project{}

class userProject extends project{}

/***/ }),

/***/ "./src/classToDo.js":
/*!**************************!*\
  !*** ./src/classToDo.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toDo: () => (/* binding */ toDo)
/* harmony export */ });


class toDo{

    constructor(title,description,dueDate,priority){
        this.title=title;
        this.description=description;
        this.dueDate=dueDate;
        this.priority=priority;
    }

    // set setTitle(value){
    //     this.title=value;
    // }
    // set setDescription(value){
    //     this.description=value;
    // }
    // set setDueDate(value){
    //     this.dueDate=value;
    // }
    // set setPriority(value){
    //     this.priority=value;
    // }
}

/***/ }),

/***/ "./src/generalFn.js":
/*!**************************!*\
  !*** ./src/generalFn.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendToBody: () => (/* binding */ appendToBody),
/* harmony export */   create: () => (/* binding */ create)
/* harmony export */ });
function create(value){
    return document.createElement(value);
}

function appendToBody(value){
    const body=document.querySelector("body");
    body.append(value);
}




/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initHeader: () => (/* binding */ initHeader)
/* harmony export */ });
/* harmony import */ var _generalFn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generalFn */ "./src/generalFn.js");

function initHeader(){

    const header=(0,_generalFn__WEBPACK_IMPORTED_MODULE_0__.create)("header");
    const logo=(0,_generalFn__WEBPACK_IMPORTED_MODULE_0__.create)("div");
    const menu=(0,_generalFn__WEBPACK_IMPORTED_MODULE_0__.create)("div");
    const dark=(0,_generalFn__WEBPACK_IMPORTED_MODULE_0__.create)("div");

    (0,_generalFn__WEBPACK_IMPORTED_MODULE_0__.appendToBody)(header);
    header.append(menu,logo,dark);

    logo.textContent="TODO APP";
    menu.textContent="menu";
    dark.textContent="dark";

}

/***/ }),

/***/ "./src/initialPage.js":
/*!****************************!*\
  !*** ./src/initialPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   populateInitialPage: () => (/* binding */ populateInitialPage)
/* harmony export */ });
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _generalFn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generalFn */ "./src/generalFn.js");


function populateInitialPage(){
    (0,_header__WEBPACK_IMPORTED_MODULE_0__.initHeader)()
    projectSection()
}

function projectSection(){

    const projectSection=(0,_generalFn__WEBPACK_IMPORTED_MODULE_1__.create)("main");
    const projectTitle=(0,_generalFn__WEBPACK_IMPORTED_MODULE_1__.create)("div");
    const projectContent=(0,_generalFn__WEBPACK_IMPORTED_MODULE_1__.create)("div");
    projectSection.append(projectTitle,projectContent);
    (0,_generalFn__WEBPACK_IMPORTED_MODULE_1__.appendToBody)(projectSection);

}



/***/ }),

/***/ "./src/userFn.js":
/*!***********************!*\
  !*** ./src/userFn.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addToProject: () => (/* binding */ addToProject),
/* harmony export */   changePriority: () => (/* binding */ changePriority),
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   createToDo: () => (/* binding */ createToDo),
/* harmony export */   setToDoComplete: () => (/* binding */ setToDoComplete),
/* harmony export */   viewProject: () => (/* binding */ viewProject)
/* harmony export */ });
/* harmony import */ var _classToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classToDo */ "./src/classToDo.js");
/* harmony import */ var _classProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classProject */ "./src/classProject.js");



function createToDo(title,description,dueDate,priority){
    const todo = new _classToDo__WEBPACK_IMPORTED_MODULE_0__.toDo(title,description,dueDate,priority);
    return todo;
}

function createProject(name){
    
    const project = (name==undefined) ? new _classProject__WEBPACK_IMPORTED_MODULE_1__.defaultProject() : new _classProject__WEBPACK_IMPORTED_MODULE_1__.userProject(name);

    return project;

}

function addToProject(project,...todo){
    project.add(todo);
}

function setToDoComplete(project,todo){
    project.remove(todo)
}

function changePriority(todo,newPriority){
    todo.priority=newPriority;
}

function viewProject(project){
    return project.array[0][0];
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _userFn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userFn */ "./src/userFn.js");
/* harmony import */ var _initialPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialPage */ "./src/initialPage.js");


const todo1=(0,_userFn__WEBPACK_IMPORTED_MODULE_0__.createToDo)("todo1","new","43","2");
const todo2=(0,_userFn__WEBPACK_IMPORTED_MODULE_0__.createToDo)("todo2","new","43","1");
const project1=(0,_userFn__WEBPACK_IMPORTED_MODULE_0__.createProject)("project1");

(0,_userFn__WEBPACK_IMPORTED_MODULE_0__.addToProject)(project1,todo1,todo2)
console.log(project1)

const dProject1=(0,_userFn__WEBPACK_IMPORTED_MODULE_0__.createProject)();

(0,_userFn__WEBPACK_IMPORTED_MODULE_0__.addToProject)(dProject1,todo2)

console.log(dProject1)

;(0,_userFn__WEBPACK_IMPORTED_MODULE_0__.setToDoComplete)(project1,todo1)

;(0,_userFn__WEBPACK_IMPORTED_MODULE_0__.changePriority)(todo2,5);

console.log((0,_userFn__WEBPACK_IMPORTED_MODULE_0__.viewProject)(project1));

(0,_initialPage__WEBPACK_IMPORTED_MODULE_1__.populateInitialPage)()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BtRDtBQUM1Qzs7QUFFUCxpQkFBaUIsa0RBQU07QUFDdkIsZUFBZSxrREFBTTtBQUNyQixlQUFlLGtEQUFNO0FBQ3JCLGVBQWUsa0RBQU07O0FBRXJCLElBQUksd0RBQVk7QUFDaEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZnNDO0FBQ2E7QUFDNUM7QUFDUCxJQUFJLG1EQUFVO0FBQ2Q7QUFDQTs7QUFFQTs7QUFFQSx5QkFBeUIsa0RBQU07QUFDL0IsdUJBQXVCLGtEQUFNO0FBQzdCLHlCQUF5QixrREFBTTtBQUMvQjtBQUNBLElBQUksd0RBQVk7O0FBRWhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZtQztBQUMwQjs7QUFFdEQ7QUFDUCxxQkFBcUIsNENBQUk7QUFDekI7QUFDQTs7QUFFTztBQUNQO0FBQ0EsNENBQTRDLHlEQUFjLFNBQVMsc0RBQVc7O0FBRTlFOztBQUVBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7Ozs7O1VDOUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTitHO0FBQzNEO0FBQ3BELFlBQVksbURBQVU7QUFDdEIsWUFBWSxtREFBVTtBQUN0QixlQUFlLHNEQUFhOztBQUU1QixxREFBWTtBQUNaOztBQUVBLGdCQUFnQixzREFBYTs7QUFFN0IscURBQVk7O0FBRVo7O0FBRUEseURBQWU7O0FBRWYsd0RBQWM7O0FBRWQsWUFBWSxvREFBVzs7QUFFdkIsaUVBQW1CLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9jbGFzc1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvY2xhc3NUb0RvLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2dlbmVyYWxGbi5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5pdGlhbFBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdXNlckZuLmpzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgcHJvamVjdHtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWUpe1xuICAgICAgICBpZih0aGlzIGluc3RhbmNlb2YgZGVmYXVsdFByb2plY3Qpe1xuICAgICAgICAgICAgdGhpcy5uYW1lPVwiZGVmYXVsdFwiXG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRoaXMubmFtZT1uYW1lO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICBhcnJheT1bXTtcbiAgICBcbiAgICBhZGQoLi4udG9kbyl7XG4gICAgICAgIHRoaXMuYXJyYXkucHVzaCh0b2RvKTtcbiAgICB9XG5cbiAgICByZW1vdmUodG9kbyl7XG4gICAgICAgIHRoaXMuYXJyYXlbMF1bMF0uc3BsaWNlKHRoaXMuYXJyYXlbMF1bMF0uaW5kZXhPZih0b2RvKSwxKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBkZWZhdWx0UHJvamVjdCBleHRlbmRzIHByb2plY3R7fVxuXG5leHBvcnQgY2xhc3MgdXNlclByb2plY3QgZXh0ZW5kcyBwcm9qZWN0e30iLCJcblxuZXhwb3J0IGNsYXNzIHRvRG97XG5cbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5KXtcbiAgICAgICAgdGhpcy50aXRsZT10aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbj1kZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlPWR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHk9cHJpb3JpdHk7XG4gICAgfVxuXG4gICAgLy8gc2V0IHNldFRpdGxlKHZhbHVlKXtcbiAgICAvLyAgICAgdGhpcy50aXRsZT12YWx1ZTtcbiAgICAvLyB9XG4gICAgLy8gc2V0IHNldERlc2NyaXB0aW9uKHZhbHVlKXtcbiAgICAvLyAgICAgdGhpcy5kZXNjcmlwdGlvbj12YWx1ZTtcbiAgICAvLyB9XG4gICAgLy8gc2V0IHNldER1ZURhdGUodmFsdWUpe1xuICAgIC8vICAgICB0aGlzLmR1ZURhdGU9dmFsdWU7XG4gICAgLy8gfVxuICAgIC8vIHNldCBzZXRQcmlvcml0eSh2YWx1ZSl7XG4gICAgLy8gICAgIHRoaXMucHJpb3JpdHk9dmFsdWU7XG4gICAgLy8gfVxufSIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGUodmFsdWUpe1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFRvQm9keSh2YWx1ZSl7XG4gICAgY29uc3QgYm9keT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICBib2R5LmFwcGVuZCh2YWx1ZSk7XG59XG5cblxuIiwiaW1wb3J0IHsgYXBwZW5kVG9Cb2R5LCBjcmVhdGUgfSBmcm9tIFwiLi9nZW5lcmFsRm5cIjtcbmV4cG9ydCBmdW5jdGlvbiBpbml0SGVhZGVyKCl7XG5cbiAgICBjb25zdCBoZWFkZXI9Y3JlYXRlKFwiaGVhZGVyXCIpO1xuICAgIGNvbnN0IGxvZ289Y3JlYXRlKFwiZGl2XCIpO1xuICAgIGNvbnN0IG1lbnU9Y3JlYXRlKFwiZGl2XCIpO1xuICAgIGNvbnN0IGRhcms9Y3JlYXRlKFwiZGl2XCIpO1xuXG4gICAgYXBwZW5kVG9Cb2R5KGhlYWRlcik7XG4gICAgaGVhZGVyLmFwcGVuZChtZW51LGxvZ28sZGFyayk7XG5cbiAgICBsb2dvLnRleHRDb250ZW50PVwiVE9ETyBBUFBcIjtcbiAgICBtZW51LnRleHRDb250ZW50PVwibWVudVwiO1xuICAgIGRhcmsudGV4dENvbnRlbnQ9XCJkYXJrXCI7XG5cbn0iLCJpbXBvcnQgeyBpbml0SGVhZGVyIH0gZnJvbSBcIi4vaGVhZGVyXCI7XG5pbXBvcnQgeyBhcHBlbmRUb0JvZHksIGNyZWF0ZSB9IGZyb20gXCIuL2dlbmVyYWxGblwiO1xuZXhwb3J0IGZ1bmN0aW9uIHBvcHVsYXRlSW5pdGlhbFBhZ2UoKXtcbiAgICBpbml0SGVhZGVyKClcbiAgICBwcm9qZWN0U2VjdGlvbigpXG59XG5cbmZ1bmN0aW9uIHByb2plY3RTZWN0aW9uKCl7XG5cbiAgICBjb25zdCBwcm9qZWN0U2VjdGlvbj1jcmVhdGUoXCJtYWluXCIpO1xuICAgIGNvbnN0IHByb2plY3RUaXRsZT1jcmVhdGUoXCJkaXZcIik7XG4gICAgY29uc3QgcHJvamVjdENvbnRlbnQ9Y3JlYXRlKFwiZGl2XCIpO1xuICAgIHByb2plY3RTZWN0aW9uLmFwcGVuZChwcm9qZWN0VGl0bGUscHJvamVjdENvbnRlbnQpO1xuICAgIGFwcGVuZFRvQm9keShwcm9qZWN0U2VjdGlvbik7XG5cbn1cblxuIiwiaW1wb3J0IHsgdG9EbyB9IGZyb20gXCIuL2NsYXNzVG9Eb1wiO1xuaW1wb3J0IHsgdXNlclByb2plY3QsIGRlZmF1bHRQcm9qZWN0IH0gZnJvbSBcIi4vY2xhc3NQcm9qZWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb0RvKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHkpe1xuICAgIGNvbnN0IHRvZG8gPSBuZXcgdG9Ebyh0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5KTtcbiAgICByZXR1cm4gdG9kbztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmFtZSl7XG4gICAgXG4gICAgY29uc3QgcHJvamVjdCA9IChuYW1lPT11bmRlZmluZWQpID8gbmV3IGRlZmF1bHRQcm9qZWN0KCkgOiBuZXcgdXNlclByb2plY3QobmFtZSk7XG5cbiAgICByZXR1cm4gcHJvamVjdDtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9Qcm9qZWN0KHByb2plY3QsLi4udG9kbyl7XG4gICAgcHJvamVjdC5hZGQodG9kbyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRUb0RvQ29tcGxldGUocHJvamVjdCx0b2RvKXtcbiAgICBwcm9qZWN0LnJlbW92ZSh0b2RvKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlUHJpb3JpdHkodG9kbyxuZXdQcmlvcml0eSl7XG4gICAgdG9kby5wcmlvcml0eT1uZXdQcmlvcml0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZpZXdQcm9qZWN0KHByb2plY3Qpe1xuICAgIHJldHVybiBwcm9qZWN0LmFycmF5WzBdWzBdO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlVG9EbyxjcmVhdGVQcm9qZWN0LGFkZFRvUHJvamVjdCwgc2V0VG9Eb0NvbXBsZXRlLCBjaGFuZ2VQcmlvcml0eSwgdmlld1Byb2plY3QgfSBmcm9tIFwiLi91c2VyRm5cIjtcbmltcG9ydCB7IHBvcHVsYXRlSW5pdGlhbFBhZ2UgfSBmcm9tIFwiLi9pbml0aWFsUGFnZVwiO1xuY29uc3QgdG9kbzE9Y3JlYXRlVG9EbyhcInRvZG8xXCIsXCJuZXdcIixcIjQzXCIsXCIyXCIpO1xuY29uc3QgdG9kbzI9Y3JlYXRlVG9EbyhcInRvZG8yXCIsXCJuZXdcIixcIjQzXCIsXCIxXCIpO1xuY29uc3QgcHJvamVjdDE9Y3JlYXRlUHJvamVjdChcInByb2plY3QxXCIpO1xuXG5hZGRUb1Byb2plY3QocHJvamVjdDEsdG9kbzEsdG9kbzIpXG5jb25zb2xlLmxvZyhwcm9qZWN0MSlcblxuY29uc3QgZFByb2plY3QxPWNyZWF0ZVByb2plY3QoKTtcblxuYWRkVG9Qcm9qZWN0KGRQcm9qZWN0MSx0b2RvMilcblxuY29uc29sZS5sb2coZFByb2plY3QxKVxuXG5zZXRUb0RvQ29tcGxldGUocHJvamVjdDEsdG9kbzEpXG5cbmNoYW5nZVByaW9yaXR5KHRvZG8yLDUpO1xuXG5jb25zb2xlLmxvZyh2aWV3UHJvamVjdChwcm9qZWN0MSkpO1xuXG5wb3B1bGF0ZUluaXRpYWxQYWdlKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=