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



// 20.2 Additional trailing comma(逗号): Yup.
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

// bad code
/**
 * const hero = {
 *   firstName: 'Dana',
 *   lastName: 'Scully'
 * };
 * 
 * const heroes = [
 *   'Batman',
 *   'Superman'
 * ];
 */

 // good code
 const hero = {
   firstName: 'Dana',
   lastName: 'Scully',
 };

 const heroes = [
   'Batman',
   'Superman',
 ];

// bad code
/**
 * function createHero(
 *   firstName,
 *   lastName,
 *   inventorOf
 * ) {
 *   // does nothing
 * }
 */

 // good code
 function createHero(
   firstName,
   lastName,
   inventorOf,
 ) {
   // does nothing
 }

// good code (note that a comma must appear after a "rest" element)
function anotherCreateHero(
  firstName,
  lastName,
  inventorOf,
  ...heroArgs
) {
  // dose nothing
}

// bad code 
/**
 * creatrHero(
 *   firstName,
 *   lastName,
 *   inventorOf
 * );
 */

// good code
createHero(
  firstName,
  lastName,
  inventorOf,
);

// good code (note that a comma must not appear after a "rest" element)
createHero(
  firstName,
  lastName,
  ...heroArgs
);