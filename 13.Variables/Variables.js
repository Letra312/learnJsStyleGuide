//13.1 Always use const or let to declare variables. Not doing so will result in global variables. We want to avoid
//polluting the global namespace. Captain Planet warned us of that.
//bad code
/**
 * superPower = new SuperPower();
 */
//good code
const superPower = new superPower();



//13.2 Use one const or let declaration per variable.
//Why? It's easier to add new variable declarations this way, and you never have to worry about swapping out
//a ; for a , or introducing punctuation-only diffs. You can also step through each declaration with the debugger, instead of jumping through all of them at once.
//bad code
/**
 * const items = getItems(),
 *       getSportsTeam = true,
 *       draggonball = 'z';
 * // (compare to above, and try to spot the mistake)
 * const item = getItems(),
 *       goSportsTeam = true,
 *       dragonball = 'z';
 */
//good code
const items = getItems();
const goSportsTeam = true;
const dragonball = 'z';



//13.3 Group all your const(s) and then group all your let(s)
//Why?This is helpful when later on you might need to assign a variable depending on one of the previous assigned variables.
//bad code
/**
 * let i, len, dragonball,
 *     items = getItems(),
 *     goSportsTeam = true;
 * //bad code
 * let i;
 * const items = getItems();
 * let dragonball;
 * const goSportsTeam = true;
 * let length;
 */

//good code
const goSportsTeam3 = true;
const items3 = getItems();
let draggonball;
let i;
let length;



//13.4 Assign variables where you need them, but place them in a reasonable place.
//Why? let and const are block scoped and not function scoped.
//bad code - unneccessary function call
/**
 * function checkName(hasName) {
 *   const name = getName();
 *   if (hasName === 'test') {
 *     return false;
 *   }
 *   
 *   if(name === 'test') {
 *     this.setName('');
 *     return false;
 *   }
 * 
 *   return name;
 * }
 */
 //good code
 function checkName(hasName) {
   if(hasName === 'test') {
     return false;
   }
   
   const name = getName();

   if(name === 'test') {
     this.setName('');
     return false;
   }

   return name;
 }



 //13.5 Don't chain variable assignments.
 //bad code
 /**
  * (functino example() {
  *   //JavaScript interprets this as
  *   //let a = ( b = ( c = 1 ) );
  *   //This let keyword only applies to variable a; variable b and c become
  *   //global variables
  * }())
  * console.log(a); // throws ReferenceErroe
  * cosnole.log(b); // 1
  * console.log(c); // 1
  */
 //good code
 (function example() {
   let a = 1; 
   let b = a; 
   let c = a;
 }());
 console.log(a); // throws ReferenceError
 console.log(b); // throws ReferenceError
 console.log(c); // throws ReferenceError
 //the same applies for `const`



 //13.6 Avoid using unary increments and decrements (++, --).
 //Why? Per the eslint documentation, unary increment and decrement statements are subject to automatic
 //semicolon insertion(分号) and can cause silent errors with incrementing or decrementing values within an
 //application. It is also more expressive to mutate your values with statements like num += 1 intead of
 //`num++` or `num ++`. Disallowing unary increment and decrement statements also prevents you from 
 //pre-incrementing/predecrementing values unintentionally which can also cause unexpected behavior in you programs.
//bad code
/**
 * const array = [1, 2, 3];
 * let num = 1;
 * num++;
 * --num;
 * 
 * let sum = 0;
 * let truthyCount = 0;
 * for(let i = 0; i < array.lenth; i++) {
 *   let value = array[1];
 *   sum += value;
 *   if(value) {
 *     truthyCount++;
 *   }
 * }
 */
//good code
const array = [1, 2 ,3];
let num = 1;
num += 1;
num -= 1;
const sum = array.reduce((a, b) => a + b, 0);
const truthyCount = array.filter(Boolean).length;



//13.7 Avoid linebreaks befor or after = in an assignment. If your assignment violates amx-len, surround the value in parens.
//Why? Linebreaks surrounding = can obfuscate he value of assignment.
//bad code
/**
 * const foo = 
 *   superLongLongLongLongLongLongLongLongFunctionName();
 * 
 * const foo
 *   = 'superLongLongLongLongLongLongLongLongString';
 */
//good code
const fooFunctionName = (
  superLongLongLongLongLongLongLongLongFunctionName()
);

const fooString = 'superLongLongLongLongLongLongLongLongString';
