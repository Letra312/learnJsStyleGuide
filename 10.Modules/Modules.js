//10.1 Always use modules ( import/export ) over a non-standard module system. You can always transpile to your preferred modul system.
//Why? Modules are the future, let's start using the future now.
//bad code
/**
 * const AirbnbStyleGuide = require('./AirbnbStyleGuide');
 * module.exports = AirbnbStyleGuide.es6;
 */
//good code
import AirbnbStyleGuide from './AirbnbStyleGuide';
export default AirbnbStyleGuide.es6;
//best code
import { es6 } from './AirbnbStyleGuide';
export default es6;



//10.2 Do not use wildcard imports.
//Why? This sure you have a single default export.
//bad code
/**
 * import * as AirbnbStyleGuide from './AirbnbStyleGuide';
 */
//good code
import AirbnbStyleGuide from './AirbnbStyleGuide';



//10.3 And do not export directly from an import
//Why? Although the one-liner is concise, having one clear way to import and one clear way to export makes things consistent.
//bad code
//filename es6.js
/**
 * export { es6 as default } from './AirbnbStyleGuide';
 */
//good code
import { es6 } from './AirbnbStyleGuide';
export default es6;



//10.4 Only import from a path in one place.
//Why? Having multiple lines that import from the same path can make code harder to maintain.
//bad code
/**
 * import foo from 'foo';
 * // ...some other imports ... //
 * import { named1, named2 } from 'foo';
 */
//good code
import foo, { named1, named2 } from 'foo';
//another good code
import foo, {
  named1,
  named2,
} from 'foo';



//10.5 Do not export mutable bindings.
//Why? Mutation should be avoided in general, but in particular exporting mutable muatable bindings. While this
//technique may be needed for some special cases, in general, only constant(常量) references should be exported.
//bad code
/**
 * let foo = 3;
 * export { foo };
 */
//good code
const foo = 3;
export { foo };



//10.6 In modules with a single export, prefer default export over named export.
//Why? To encourage more files that only ever export one thing, which is better for readability an maintainalility.
//bad code
/**
 * export function foo() {}
 */
// good code
export default function foo() {}



//10.7 Put all imports above non-import statements.
//Why? Since imports are hoisted, keeping them all at the top prevents surprising behavior.
//bad code
/**
 * import foo from 'foo';
 * foo.init();
 * 
 * import bar from 'bar';
 */
//good code
import foo from 'foo';
import bar from 'bar';

foo.init();



//10.8 Multiline imports should be indented just like multiline array literals(如实的).
//Why? The curly braces follow the same indentation(缩排) rules as every other curly brace block in the style guide, as do the trailing commas.
//bad code
/**
 * import { longNameA, longNameB, longNameC, longNameD, longNameE } from 'path';
 */
//good code
import {
  longNameA,
  longNameB,
  longNameC,
  longNameD,
  longNameE,
} from 'path';



//10.9 Disallow Webpack loader syntax in module import statements.
//Why? Since using Webpack syntax in the imports couples the code to a module bundler.
//Prefer using the loader syntax in webpack.config.js
//bad code
/**
 * import fooSass from 'css!sass!foo.scss';
 * import barCss from 'style!css!bar.css';
 */
//good code
import fooSass from 'foo.scss';
import barCss from 'bar.css';