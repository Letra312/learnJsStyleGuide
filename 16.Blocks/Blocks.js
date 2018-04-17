//16.1 Use braces with all multi-line blocks.
// bad code
/**
 * if (test)
 *   return false;
 */
//good code
if (test) return false;
if (test) {
  return false;
}
//bad code
/**
 * function foo() { return false; }
 */
//good code
function bar() {
  return false;
}



//16.2 If an block always executes a return statement, the subsequent else block is unnecessary.
//A return in an `else if` block following an `if` block that contains a `return` can be separated into multiple `if` blocks.
//bad code
/**
 * function foo() {
 *   if (x) {
 *     return x;
 *   } else {
 *     return y;
 *   }
 * }
 * 
 * function cats() {
 *   if (x) {
 *     return x;
 *   } else if (y) {
 *     return y;
 *   }
 * }
 * 
 * function dogs() {
 *   if (x) {
 *     return x;
 *   } else {
 *     if (y) {
 *       return y;
 *     }
 *   }
 * }
 */
//good code
function foo() {
  if (x) {
    return x;
  }
}
function cats() {
  if (x) {
    return x;
  }

  if (y) {
    return y;
  }
}
function dogs(x) {
  if (x) {
    if (z) {
      return y;
    }
  } else {
      return z;
  }
}