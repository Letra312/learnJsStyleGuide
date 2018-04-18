// 20.1 Leading commas: Nope.
// bad code
/**
 * const story = [
 *     once
 *   , upon
 *   , aTime
 * ];
 */

// good code
const story = [
  once,
  upon,
  aTime,
];

// bad code
/**
 * const hero = {
 *     firstName: 'Ada'
 *   , lastName: 'Lovelace'
 *   , birthYear: 1815
 *   , superPower: 'computers'
 * }
 */

// good code
const hero = {
  firstName: 'Ada',
  lastName: 'Lovelace',
  birthYear: 1815,
  superPower: 'computers',
};



// 20.2 Additional trailing comma: Yup.
//Why? This leads to cleaner git diffs. Also, transpilers like Babel will remove the additional trailing comma in the transpiled code which means you don't have to worry about the trailing comma problem in legacy browers.
// bad code - git diff without trailing comma
/**
 * const hero = {
 *    firstName: 'Florence',
 * -  lastName: 'Nightingale'
 * +  lastName: 'Nightingale',
 * +  inventorOf: ['coxcomb chart', 'modern nursing']
};
 */

 // good code - git diff with trailing comma
 const hero = {
  firstName: 'Florence',
  lastName: 'Nightingale',

  //the next line is added later
  inventorOf: ['coxcomb chart', 'modern nursing'],
};