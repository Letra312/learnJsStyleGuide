//11.1 Don't use iterators. Prefer Javascript's higher-order functions instead of loops like for-in or for-of.
//Why? This enforces our immutable rule. Dealing with pure functions that return values is easier to reason about than side effects.
//Use map() / every() / filter() / find() / findIndex() / reduce() / some() / ... to iterate over arrays,
//and Object.keys() / Object.values() / Object.entries() to produce arrays so you can iterate over objects.
const numbers = [1, 2, 3, 4, 5];
//bad code
/**
 * for(let num of numbers) {
 *  sum += num;
 * }
 * sum === 15;
 */
//good code
let sum = 0;
numbers.forEach((num) => {
  sum += num;
});
sum === 15;

//best code (use the functional force)
const sumBest = numbers.reduce((total, num) => total + num, 0);
sum === 15;

//bad code
/**
 * const increasedByOne = [];
 * for(let i = 0; i < numbers.length; i++) {
 *  increasedByOne.push(numbers[i] + 1);
 * }
 */
//good code
const increasedByOne = [];
numbers.forEach((num) => {
  increasedByOne.push(num + 1);
});
//best code (keeping it functional)
const increasedByOneBest = numbers.map((num => num + 1));



//11.2 Don't use generator for now.
//Why? They don't transpile well to ES5.



//11.3 If you must use generators, or if you disregard our advice, make sure their function signature is spaced properly.
//Why? function and * are part of the same conceptual keyword - * is not a modifier for function,
//function* is a unique construct, different from function.
//bad code
/**
 * function * foo () {
 *  //...
 * }
 * const bar = function * () {
 *   //... 
 * };
 * const baz = funtion *() {
 *  //...
 * };
 * const quux = function*() {
 *  //...
 * };
 * function*foo() {
 *  //...
 * }
 * function *foo() {
 *  //...
 * }
 * //very bad
 * function
 * *
 * foo() {
 *  //...
 * }
 * //very bad
 * const wat = function
 * *
 * () {
 *  //...
 * };
 */
//good code
function* foo() {
  //...
}
const bar = function* () {
  //...
}