// 23.1 Avoid single letter names. Be descriptive with your naming.
// bad code 
/**
 * function q() {
 *   // ...
 * }
 */

 // good code
 function query() {
   // ...
 }



// 23.2 Use camelCase when naming objects, functions, and instances.
// bad code
/**
* const OBJEcttsssss = {};
* const this_is_my_object = {};
* functin c() {}
*/

// good code
const thisIsMyObject = {};
function thisIsMyObject() {}



// 23.3 Use PascalCase only when naming constructors or classes.
// bad 
function user(options) {
  this.name = options.name;
}

const bad = new user({
  name: 'nope',
});

// good code
class User {
  constructor(options) {
    this.name = options.name;
  }
}

const good = new User({
  name: 'yup',
});



// 23.4 Do not use trailing or leading underscores.
/**
 * Why? JavaScript does not have the concept of privacy in terms of properties or method. Although a leading 
 * underscore is a common conversation to mean "private", in fact, these properties are fully public, and as such, 
 * are part of your public API contract. This conversation might lead developers to wrongly think that a change 
 * won't count as breaking, or that tests aren't needed. tl;dr: if you want something to be "private", it must not 
 * be observably present.
 */

// bad code
/**
 * this._firstname_ = 'Panda';
 * this.firstName_ = 'Panda';
 * this._firstName = 'Panda';
 */

 // good code 
 this.firstName = 'Panda';

// good code, in enviroments where WeakMaps are available
// see https://kangax.github.io/compat-table/es6/#test-WeakMap
const firstName = new WeakMap();
firstName.set(this, 'Panda');



// 23.5 Don't save references to this. Use arrow functions or Function#bind.
// bad code
/**
 * function foo() {
 *   const self = this;
 *   return function () {
 *     console.log(self);
 *   };
 * }
 */

// bad code 
/**
* function foo() {
*   const that = this;
*   return function() {
*     console.log(that);
*   };
* }
*/

// good code
function foo() {
  return () => {
    console.log(this);
  };
}



// 23.6 A base filename should exactly match the name of its default export.
// file 1 contents 
class CheckBox {
  // ...
}
export default CheckBox;

// file 2 contents
export default function fortyTwo() { return 42; }

// file 3 contents
export default function insideDirectory() {}

// in some other file
// bad code
/**
 * import CheckBox from './checkBox'; // PascalCase import/export, camelCase filename
 * import Fortytwo from './Fortytwo'; // PascalCase import/filename, camelCase export
 * import InsideDirectory from './InsideDirectory'; // PascalCase import/filename, camelCase export
 */

// bad code
/**
* import CheckBox from './check_box'; // PascalCase import/export, snake_case filename
* import forty_two from './forty_two'; // snake_case import/filename, camelCase export
* import inside_directory from './inside_directory'; // snake_case import, camelCase export
* import index from './inside_directory/index'; // requiring the index file explicitly
* import insideDirectory from './insideDirectory/index'; // requiring the index file explicitly
*/

// good code
import CheckBox from './CheckBox'; // PascalCase export/import/filename
import fortyTwo from './fortyTwo'; // camelCase export/import/filename
import insideDirectory from './insideDirectory'; // camelCase export/import/directory name/implicit "index" 
// ^ supports both insideDirectory.js and insideDirectory/index.js



// 23.7 Use camelCase when you export-default a function. Your filename should be identical to your function's name
function makeStyleGuide() {
  // ...
}

export default makeStyleGuide;



// 23.8 Use PascalCase when you export a constructor / class / singleton / function library / bare object.
const AirbnbStyleGuide = {
  es6: {
  },
};

export default AirbnbStyleGuide;



// 23.9 Acronyms(首字母组合词) and initialisms(首字母缩写词) should always be all capitalized, or all lowercased.
// Why? Names are for readability, not to appease a computer algorithm.
// bad code 
/**
 * import SmsContainer from './containers/SmsContainer';
 * 
 * const HttpRequests = [
 *   // ...
 * ];
 */

 // good code 
 import SMSContainer from './containers/SMSContainer';

 const HTTPRequests = [
   // ...
 ];

 const httpRequests = [
   // ...
 ];

 // best code
 import TextMessageContainer from './containers/TextMessageContainer';

 const requests = [
   // ...
 ]



// 23.10 You may optionally uppercase a constant only if it (1) is exported, (2) is a `const` (it can not be reassigned), 
// and (3) the programmer(程序员) can trust it (and its nested properties) to never change.
/**
 * Why? This is an additional tool to assist in situations where the programmer would be unsure if a variable 
 * might ever change. UPPERCASE_VARIAVBLES are letting the programmer know that they can trust the 
 * variable (and its properties) not to change.
 * 
 * - What about all `const` variables? - This is unnecessary, so uppercasing should not be used for constants 
 *   within a file. It should be used for expected constants however.
 * 
 * - What about expoted objects? - Uppercase at the top level of export (eg. EXPORTED_OBJECT.key) and maintain that all nested properties do not change.
 */

// bad code
/**
* const PRIVATE_VARIABKE = 'should not be unnecessarily uppercased within a file';
* 
* export const THING_TO_BE_CHANGED = 'should obviously not be uppercased';
* 
* export let REASSIGNABLE_VARIABLE = 'do not use let with uppercase variables';
*/

// ---

// allowed but does not supply semantic(语义的) value
export const apiKey = 'SOMEKEY';

// better in most cases
export const API_KEY = 'SOMEKEY';

// ---

// bad code - unnecessarily uppercases key while adding no semantic value 
/**
 * export const MAPPING = {
 *   KEY: 'value'
 * };
 */

 // good code
 export const MAPPING = {
   key: 'value'
 };