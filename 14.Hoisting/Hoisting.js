///14.1 `var` declarations get hoisted to the top of their closet enclosing function scope, their assignment does not.
//`const` and `let` declarations are blessed with a new concept called Temporal Dead Zones(TDZ, 暂时性死区). It's important to know why typeof is no longer safe.
//bad code
//we know this wouldn't work (assuming there is no notDefined global variable)
/**
 * function example() {
 *   console.log(notDefined); // throws a ReferceError
 * }
 */
//creating a variable declaratino after you reference the variable will work due to varieble hoisting. 
//Note: the assignment value of `true` is not hoisted.
/**
 * function anotherExample() {
 *   console.log(declaredButNotAssigned); // => undefined
 *   var declaredButNotAssigned = true;
 * }
 */
//the interpreter is hoisting the variable declaration to the top of the scope, which means our example could be rewritten as:
/**
 * funtion exaple() {
 *   let declareButNotAssigned;
 *   console.log(declaredButNotAssigned); // => undefined
 *   declaredButNotAssigned = true;
 * }
 */
//using const and let
/**
 * function example() {
 *   console.log(declaredButNotAssigned); // => throws a ReferenceError
 *   console.log(typeof declaredButNotAssigned); // => throws a ReferenceError
 *   const declaredButNotAssigned = true;
 * }
 */



 //14.2 Anonymous functino expressions hoist their variable name, but not the function assignment.
 /**
  * function example() {
  *   console.log(anonymous); // => undefined
  *   anonymous(); // => TypeError anonymous is not a function
  *   var anonymous = function () {
  *     console.log('anonymous function expression');
  *   }
  * }
  */



  //14.3 Named function expression hoist the variable name, not the function name or the function body.
  /**
   * function example() {
   *   console.log(named); // => undefined
   *   named(); // => TypeError named is not a function
   *   superPower();
   *   var named = function superPower() {
   *     console.log(`Flying`);   
   *   };
   * }
   */
  //the same is true when the function name is the same as the variable name
  /**
   * function exmple() {
   *   console.log(named); // => undefined
   *   named(); // => TypeError named is not a function
   *   var named = function named() {
   *     console.log('named');
   *   };
   * }
   */



   //14.4 Function declaration hoist their name and the function body.
   function example4() {
     superPower(); // => Flying

     function superPower() {
       console.log('Flying');
     }
   }
   // For more information refer to JavaScript Scoping & Hoisting by Ben Cherry. 
   