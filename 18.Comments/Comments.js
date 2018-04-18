// 18.1 Use /** ... */ for multi-line comments
// bad code
// make() returns a new element
// based on the passed in tag name
//
// @param {String} tag
// @return {Element} element
/**
 * function make(tag) {
 *   // ...
 *   return element;
 * }
 */
// good code
/**
 * make() returns a new element
 * based on the passed-in tag name
 * @param {String} tag
 * @return {Element} element
 */
function make(tag) {
  // ...
  return element;
}



// 18.2 Use // for single line comments. Place single line comments on a newline above subject of the comment.
// Put an empty line before the comment unless it's on the first line of a block.
// bad code
/**
 * const active = true; // is current tab
 */
// good code
// is current tab
const active = true;

// bad code
function getType() {
  console.log('fetching type...');
  // set the default type to 'no type'
  const type = this.type || 'no type';

  return type;
}

// good code
function getType() {
  console.log('fetching type');

  //set the default type to 'no type'
  const type = this.type || 'no type';

  return type;
}

// also good code
function anotherGetType() {
  //set the default type to 'no type'
  const type = this.type || 'no type';

  return type;
}



// 18.3 Start all comments with a space to make it easier to read.
// bad code
/**
 * //is current tab
 * const active = true;
 */

 // good code
 // is current tab
 const  active = true;

 // bad code
 /**
  *make() return a new element based on the passed-in tag name
  *function make(tag) {
    // ...
    return element;
  }
  */

  // good code
  /**
   * make() returns a new element based on the passed-in tag name
   */
  function make(tag) {
    // ...
    return element;
  }



  // 18.4 Prefixing your comment with `FIXME` or `TODO` helps other developers quickly understand if you're pointing out a problem that needs to be revisited, 
  // or if you're suggesting a solution to the problem that needs to be implemented. 
  // These are different than regular comments because they are actionable. The actions are `FIXME: -- need to figure this out` or `TODO: -- need to implement`.



  // 18.5 Use `// FIXME:` to annotate problems.
  class CalculatorFixme extends Abacus {
    constructor() {
      super();

      // FIXME: shouldn't use a global here
      total = 0;
    }
  }



  // 18.6 Use `// TODO:` to annotate solutions to problems.
  class CalculatorTodo extends Abacus {
    constructor() {
      super();

      // TODO: total should be configurable by an options param
      this.total = 0;
    }
  }
