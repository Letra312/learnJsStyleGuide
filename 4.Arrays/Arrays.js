//4.1 Use the literal syntax for array creation.
//bad code
/**
 * const item = new Array();
 */
//good code
const items = [];



//4.2 Use Array#push instead of direct assignment  to add items to an array.
const someStack = [];
//bad code
/**
 * someStack[someStack.length] = 'abracadabra';
 */
someStack.push('abracadabra');



//4.3 Use array spreads ... to copy arrays.
const items3 = [1, 2, 3, 4, 5, 6];
//bad code
/**
 * const len = items.length;
 * const itemCopy = [];
 * let i;
 * for(i = 0; i< len; i += 1) {
 *  itemCopy[i] = items[i];
 * }
 */
//good code
const itemCopy = [...items3];
console.log('Copy item: ', itemCopy);



//4.4 To convert an array-like object to an array, use spreads ... instead of Array.from.
const foo = document.querySelectorAll('.foo');
//good code
/**
 * const nodes4 = Array.from(foo);
 */
//best code 
const node4 = [...foo];



//4.5 Use Array.from instead of spread ... for mapping over iterables, because it avoids creating an intermediate array.
//bad code
/**
 * const baz = [...foo].map(bar);
 */
const baz = Array.from(foo, bar);

//4.6 Use return statements in array method callbacks. It's ok to omit the return if the function body consists of a single
//statement returning an expression without side effects.
//good code
[1, 2, 3].map((x) => {
  const y = x + 1;
  return x * y;
});
//good code
[1, 2, 3].map(x => x + 1);

//bad code - no returned value means `acc` becomes undefined after the first itration
/**
 * [[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {
 *  const flatten = acc.concat(item);
 *  acc[index] = flatten;
 * });
 */

 //good code
 [[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {
  const flatten = acc.concat(item);
  acc[index] = flatten;
  return flatten;
 });

 //bad code
 /**
  * inbox.filter((msg) => {
  *   const { subject, author } = msg;
  *   if(subject === 'Mockingbird) {
  *     return author === 'Harper Lee';
  *   } else {
  *     return false;   
  *   }
  * });
  */

//good code
inbox.filter((msg) => {
  const { subject, author } = msg;
  if(subject === 'Mockingbird') {
    return author === 'Harper Lee';
  }
  return false;
});



//4.7 Use line breaks after open and before close array brackets if an array has multiple lines
//bad code
/**
 * const arr = [
 *  [0, 1], [2, 3], [4, 5],
 * ];
 * 
 * const objectInArray = [{
 *  id: 1,
 * }, {
 *  id: 2,
 * }];
 * 
 * const numberInArray = [
 *  1, 2,
 * ];
 */
// good code
const arr = [[0, 1], [2, 3], [4, 5]];
const objectInArray = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
];
const numberInArray = [
  1,
  2,
];