//17.1 In case your control statement (`if`, `while` etc.) gets too long or exceeds(超过) the maximum line length, each
//(grouped) condition could be put into a new line. The logical operator should begin the line.
//Why? Requiring operators at the beginning of the line keeps the operators aligned and follows a pattern(模式) similar to method chaining.
//This also improves readability by making it easier to visually follow complex logic.
//bad code
/**
 * if ((foo === 123 || bar === 'abc') && doesItLookGoodWhenItBecomesThatLong() && isThisReallyHappening()) {
 *   thing1();
 * }
 * if (foo === 123 && 
 *   bar === 'abc) {
 *   thing1();
 * }
 * if (foo === 123 &&
 *    bar === 'abc
 * ) {
 *   thing1();
 * }
 */
//good code
if (
  foo === 123
  && bar === 'abc'
) {
  thing1();
}
if (
  (foo === 123 || bar === 'abc')
  && doesItLookGoodWhenItBucomesThatLong()
  && isThisReallyHappening()
) {
  thing1();
}
if(foo === 123 & bar === 'abc') {
  thing1();
}


//17.2 Don't use selection operators in place of control statements.
//bad code
/**
 * isRunning && startRunning();
 */
//good code
if (!isRunning) {
  startRuunig();
}