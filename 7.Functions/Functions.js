//7.1 Use named function expressions instead of function declarations
//Why？ Function declarations are hoisted(提升), which means that it's easy - too easy - reference the function before it is defined in the file.
//The harms readability and maintainbility(可维护性). If you find that a function's definition is large or complex enough that it is interesting
//with understanding the rest of the file, then perhaps it's time to extract it to its own module!
//Don't forget to explicitly name the expression, regardless of whether or not the name is inferred from the containing varirable(which is often the case in modern browers or 
//when using compilers such as Babel). This eliminates any assumptions made about the Error's stack.
//bad code
/**
 * function foo() {
 * //...
 * }
 * 
 * const foo = function() {
 * //...
 * }
 */
//good code
//lexical name distinguished from the variable-referenced invocations(s)
const short = function longUniqueMoreDescriptiveLexicalFoo() {
  console .log('use the function expression');
};



//7.2 Wrap immediately invoked function expressions in paretheses.
//Why? An immediately invoked function expression is a single unit - wrapping both it, and its invocation parens,
//in parens, cleanly expresses this. Note that in a world with module everywhere, you almost never need an IIFE
// immediately-invoked function expression (IIFE)
(function () {
  console.log('Welcome to the Internet. Please follow me.');
}());



//7.3 Never declare a function in a non-function block (if, while, etc). Assign the function to a variable instead.
//Browers will allow you to do it, but they all interpret(解释) it differently, which is bad news bears.



//7.4 Note: ECMA-262 defines a block as a list of statements. A function declaration is not a statement.
//badc code
/**
 * if(currentUSer) {
 *  function test () {
 *    console.log('Nope.');
 *  }
 * }
 */
//good code
let test;
if(currentUser) {
  test = () => {
    console.log('Yup.');
  };
}



//7.5 Never name a parameter arguments. This will take precedence over the arguments object that is given to every function scope.
//bad code
/**
 * function foo(name, options, arguments) {
 *  //...
 * }
 */
//good code
function foo5(name, options, args) {
  //...
}



//7.6 Never use arguments, opt to use rest syntax(句法) ... instead.
//Why?... is explicit about which arguments you want pulled. Plus, res arguments are a real Array, and not merely Array-like like arguments.
//bad code
/**
 * function concatenateall() {
 *  const args = Array.prototype.slice.call(arguments);
 *  return args.join('');
 * }
 */
//good code
function concatenateAll(...args) {
  return args.join('');
}



//7.7 Use default parameter syntax rather than mutating function arguments.
//really bad code
/**
 * function handleThings(opts) {
 *  // No! We shouldn't mutate function arguments.
 *  // Double bad: if opts is falsy it'll be set to an object which may
 *  // be what you want but it can introduce subtle bugs.
 * }
 */
//still bad code
/**
 * function handleThings(opts) {
 *  if(opts === void 0) {
 *    opts = {};  
 *  }
 * }
 */
//good code
function handleThings(opts = {}) {
 //... 
}



//7.8 Avoid side effects with default parameters.
//Why? They are confusing to reason about.
var b = 1;
//bad code
/**
 * function count(a = b++) {
 *  console.log(a);
 * }
 * count(); // 1
 * count(); // 2
 * count(3);// 3
 * count(); // 3
 */



 //7.9 Always put default parameters last.
 //bad code
 /**
  * function handleThings9(opts = {}, name) {
  *   //...
  * }
  */
 //good code
 function handleThings9(name, opts = {}) {
   //...
 }



 //7.10 Never use the Function constructor to create a new function.
 //Why? Creating a function in this way evaluates a string similarly to eval(), which opens vulnerabilities(易收攻击).
 // bad code
 /**
 * var add = new Function('a', 'b', 'return a + b');
 * //still bad code
 * var subtract = Function('a', 'b', 'return a - b');
 */



 //7.11 Spacing in a function signature.
 //Why? Consistency is good, and you shouldn't have to add or remove a space when adding or removing a name.
 //bad code
 /**
  * const f = function(){};
  * const g = function (){};
  * const h = function() {};
  */
 //good code
 const x = function () {};
 const y = function a() {};



 //7.12 Never mutate parameters.
 //Why? Manipulating objects passed in as parameters can cause unwanted variable side effects in the original caller.
 // bad code
 /**
  * function f12(obj) {
  *   obj.key = 1;
  * }
  */
 // good code
 function f12(obj) {
   const key = Object.prototype.hasOwnProperty.call(obj, 'key') ? obj.key : 1;
 }



 //7.13 Never reassign parameters.
 //Why? Reassigning parameters can lead to unexpected behavior, especially when accessing the arguments
 //object. It can also cause optimization issues, especially in V8.
 //bad code
 /**
  * function f1(a) {
  *   a = 1;
  *   //...
  * }
  * function f2(a) {
  *   if(!a) { a = 1; }
  *   //...
  * }
  */
 //good code
 function f13(a) {
   const b = a || 1;
   //...
 }

 function g13(a = 1) {
    //...
 }



 //7.14 Prefer the use of the spread operatoe .. to call variadic functions.
 //Why? It's cleaner, you do't need to supply a context, and you can not easily compose new with apply.
 //bad code
 /**
  * const x = [1, 2, 3, 4, 5];
  * console.log.apply(console, x);
  */
 //good code
 const x = [1, 2, 3, 4, 5];
 console.log(...x);

 //bad code
 /**
  * new (Function.prototype.bind.apply(Date, [null, 2016, 8, 5]));
  */
 // good code
 new Date(...[2016, 8 ,5]);



 //7.15 Function with multiline signatures, or invocations, should be indented just like every other multiline list in this
 //guide: with each item on a line by itself, with a trailing comma on the last item.
 //bad code
 /**
  * function foo(bar,
  *              baz,
  *              quux) {
  *   //...
  * }
  */
  //good code
 function foo(
   bar,
   baz,
   quux,
 ) {
    //...
 }
  //bad code
  /**
   * console.log(foo,
   *  bar,
   *  baz);
   */
  //good code
 console.log(
   foo,
   bar,
   baz,
 );