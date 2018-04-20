// 21.1 Yup.
/**
 * Why? When Javascript encouters a line break without a semicolon it uses a set of rules called Automatic
 * Semicolon insertion to determine whether or not it should regard that line break as the end of a statement, 
 * and (as the name implies) place a semicolon into your code before the line break if it thinks so. ASI contains
 * a few eccentric(古怪的) behaviors, though, and your code will break if JavaScript misinterprefs(错误地解释) your line break.
 * These rules will become more complicated as new features become a part of JavaScript. Explicitly(明确地)
 * terminating(终止) your statements and configuring your linter to catch missing semicolons will help prevent you
 * from encountering issues.
 */

// bad code - raises exception
/**
* const luke = {}
* const leia = {}
* [luke, leia].forEach(jedi => jedi.father = 'vader')
*/

// bad code - raises exception
/**
 * const reaction = "No! That's impossible!"
 * (async function meanwhileOnTheFalcon() {
 *   // handle `leia`, `lando`, `chewie`, `r2`, `c3p0`
 *   // ..
 * }())
 */

// bad code - returns `undefined` instead of the value on the next line - always happens when `return` is on a line by itself because of ASI!
/**
* function foo() {
*   return
*     'search your feelings, you know it to be foo'
* }
*/

// good code
const luke = {};
const leia = {};
[luke, leia].forEach((jedi) => {
  jedi.father = 'vader';
});

// good code
const reaction = "No! That's impossible!";
(async function meanwhileOnTheFalcon() {
  // handle `leia`, `lando`, `chewie`, `r2`, `c3p0`
  // ...
}());

// good code
function foo() {
  return 'search your feelings, you know it to be foo';
}