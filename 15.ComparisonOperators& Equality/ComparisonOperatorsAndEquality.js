//15.1 Use === and !== over == and !=.

//15.2 Conditional statements such as the `if` statement evaluate expression using coercion with the `ToBoolean` abstract
//method and always follow these simple rules:
/**
 * Objects evaluate to true
 * Undefined evaluates to false
 * Null evaluates to false
 * Booleans evaluates to the value of the boolean
 * Numbers eveluate to false if +0, -0, or NaN, otherwise true
 * String evaluate to false if an empty string '', otherwise true
 */
if([0] && []) {
  // true
  // an array (even an empty one) is an object, object will evaluate to true
}



//15.3 Use shortcuts for booleans, but explicit comparison for strings and numbers.
//bad code
/**
 * if (isValid === true) {
 *   // ... (valid is a Boolean)
 * }
 * if (name) {
 *   // ... (name is a String)
 * }
 * if(collection.length) {
 *   // ... collection.length is a Number
 * }
 */
//good code
let isValid = true;
let name = 'Letra';
let collection = [1, 2, 3]
if(isValid) {
  // ...
}
if(name != '') {
  // ...
}
if(collection.length > 0) {
  // ...
}



//15.4 For more information see  Truth Equality and JavaScript by Angus Croll.



//15.5 Use  braces(大括号) to create blocks in `case` and `default` clauses(分句) that contain lexical declarations(e.g. `let`, `const`, `function`, and `class`).
//Why? Lexical declaratoins are visible in the entire `switch` block but only get initialized when assigned,
//which only happens when its `case` is reached. This causes problems when multiple `case` clauses attempt to define the same thing.
//bad code
/**
 * switch (foo) {
 *   case 1:
 *     let x = 1;
 *     break;
 *   case 2:
 *     const y = 2;
 *     break;
 *   case 3:
 *     function f() {
 *       // ...
 *     }
 *   default: 
 *     class C {}
 * }
 */
//good code
switch (foo) {
  case 1: {
    let x = 1;
    break;
  }
  case 2: {
    const y = 2;
    break;
  }
  case 3: {
    function f() {
      // ...
    }
  }
  default: {
    class C {}
  }
}



//15.6 Ternaries should not be nested and generally be single line expression.
//bad code
/**
 * const foo = maybe1 ? maybe2
 *   ? 'bar' 
 *   : value1 > value2 ?  'baz' : null;
 */
//split into 2 separated ternary expressions
const maybeNull = vaule1 > value2 ? 'baz' : null;
//better code
const foo = maybe1 > meybe2
  ? 'bar' 
  : maybeNull;
//best code 
const foo = maybe1 > maybe2 ? 'bar' : maybeNull;



//15.7 Avoid unneeded ternary(三元) statements.
//bad code
/**
 * const foo = a ? a : b;
 * const bar = c ? true : false;
 * const baz = c ? false : true;
 */
//good code
const foo = a || b;
const bar = !!c;
const baz = !c;



//15.8 When mixing operators, enclose them in parentheses. The only exception is the standard arithmetic
//operators (+, -, *, & /) since their procedence(优先级) is broadly understood.
//Why? This improves readability and clarifies the developer's intention.
//bad code
/**
 * const foo = a && b < 0 || c > 0 || d + 1 === 0;
 * const bar = a ** b - 5 % d;
 * //one may be consused into thinking (a || b) && c
 * if(a || b && c) {
 *   return d;
 * }
 */
//good code
const foo = (a && b < 0) || c > 0 || (d + 1 === 0);
const bar = (a ** b) - (5 % d);
if(a || (b && c)) {
  return d;
}
const bar = a + b / c * d;