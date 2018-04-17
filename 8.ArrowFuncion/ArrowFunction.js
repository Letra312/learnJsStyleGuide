//8.1 When you must use an anonymous function (as when passing an inline callbcak), use arrow function notation.
//Why? It creactes a version of the function that executes in the context of this, which is usualy what you want, and is a more concise syntax.
//Why not? If you have a fairly complicated function, you might move that logic out into its own named function expression.
//bad code
/**
 * [1, 2, 3].map(function (x) {
 *  const y = x + 1;
 * return x * y;
 * });
 */
//good code
[1, 2, 3].map((x) => {
  const y = x + 1;
  return x * yl
});



//8.2 If the function body consists of a single statement returning an expression without side effects, omit the braces and use the implicit(含蓄的) return.
//Otherwise, keep the braces and use a return statement.
//Why? Syntactic sugar. It reads well when multiple functions are chained together.
//bad code
/**
 * [1, 2, 3].map(number => {
 *  const nextNumber = number + 1;
 *  `A string containing the ${nextNumber}.`;
 * });
 */
//good code
[1, 2, 3].map(number => `A string containing the ${number}.`);
[1, 2, 3].map((number) => {
  const nextNumber = number + 1;
  return `A string containing the ${nextNumber}`;
});
[1, 2, 3].map((number, index) => ({
  [index]: number,
}));

//No implicit return with side effects
function foo2(callbcak) {
  const val = callbcak();
  if(val == true) {
    //Do something if callback returns true
  }
}

let bool = false;
//bad code
/**
 * foo2(() => bool = true)
 */
//good code
foo2(() => {
  bool = true;
});



//8.3 In case the expression spans over multiple lines, wrap it in parentheses for better readability.
//Why? It shows clearly where the function starts and ends.
//bad code
/**
 * ['get', 'post', 'put'].map(httpMethod = > Object.prototype.hasOwnProperty.call(
 *    httpMagicObjectWithAVeryLongNme,
 *    httpMethod,
 *  )
 * );
 */
//good code
['get', 'post', 'put'].map(httpMethod => (
  Object.prototype.hasOwnProperty.call(
    httpMagicObjectWithAVeryLongName,
    httpMethod
  )
));


//8.4If your function takes a single argument and doesn't use braces, omit the parentheses. Otherwise, always include
//parentheses(圆括号) around arguments for clarity(清楚) and consistency(连贯). 
//Note: it is also acceptable to always use parentheses, in which case use the "always" option for eslint.
//Why? Less visual clutter
//bad code
/**
 * [1, 2, 3].map((x) => x * x);
 */
//good code
[1, 2, 3].map(x => x * x);
[1, 2 ,3].map(number => (
  `A long string with the ${number}. It's so long that we don't want it to wake up space on the .map line!`
));
//bad code
/**
 * [1, 2, 3].map(x => {
 *  const y = x + 1;
 *  return x * y;
 * });
 */
//good code
[1, 2, 3].map((x) => {
  const y = x + 1;
  return x * y;
});