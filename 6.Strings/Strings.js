//6.1 Use single quotes '' for strings.
//bad code
/**
 * const name = "Letra Hu";
 * //bad - template literals should contain interpolation or newlines
 * const name = `Letra Hu`;
 */
//good code
const name = 'Letra Hu';



//6.2 String that cause the line to go over 100 characters should not be written across multiple lines using string concatenation.
//Why? Broken strings are painful to work with and make code less searchable.
//bad code
/**
 * const errorMessage = 'This is a super long error that was thrown because \
 * of Batman. When you stop to think about how Batman had anything to do \
 * with this, you would get nowhere \
 * fast.';
 * 
 * const errorMessage = 'This is a super long error that was thrown because ' +
 *'of Batman. When you stop to think about how Batman had anything to do ' +
 *'with this, you would get nowhere fast.';
 */

//good code
const errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';



//6.3 When programmatically building up strings, use template strings instead of concatenation.
//Why? Templete strings give you a readable, concise syntax with proper newlines and string interpolation features.
//bad code
/**
 * function sayHi(name) {
 *  return 'How are you, ' + name + '?';
 * }
 * 
 * function sayHi(name) {
 *  return ['How are you', name, '?'].join();
 * }
 * 
 * function sayHi(name) {
 *  return `How are you, ${ name }?`;
 * }
 */

//good code
function sayHi(name) {
  return `How are you, ${name}?`;
}



//6.4 Never use eval() on a string, it opnes too many vulnerabilities.



//6.5 Do not unnecessarily escape characters in strings.
//Why? Backlashes harm readability, thus they should only be present when necessary.
//bad code
/**
 * const foo = '\'this\' \i\s \"quoted\"\;
 */
//good code
const qoo = '\'this\' is "quoted"';
const foo5 = `my name is '${name}'`;
console.log(foo5);