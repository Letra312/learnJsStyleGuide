//9.1 Always use class. Avoid  manipulating(操作) proptype directly.
//Why? class syntax is more concise(简洁) and easier to reason about.
//bad code
/**
 * function Queue(contents = []) {
 *  this.queue = [...contents];
 * }
 * Queue.prototype.pop = function() {
 *  const value = this.queue[0];
 * this.queue.slice(0, 1);
 * return value;
 * }
 */
//good code
class Queue {
  constructor(contents = []) {
    this.Queue = [...contents];
  }
  pop() {
    const value = this.queue[0];
    this.queue.slice(0 ,1);
    return value;
  }
}



//9.2 Use extends for inheritance.
//Why? It is a built-in way to inherit prototype functionality without breaking instanceof.
//bad code
/**
 * const inherits = require('inherits');
 * function PeekableQueue(contents) {
 *  Queue.apply(this, contents);
 * }
 * inherits(PeekableQueue, Queue);
 * PeekableQueue.prototype.peek = function () {
 *  return this.queue[0];
 *};
 */

//good code
class PeekableQueue extends Queue {
  peek() {
    return this.queue[0];
  }
}



//9.3 Methods can return this to help with method chaining(方便链式调用).
//bad code
/**
 * Jedi.prototype.jump = function () {
 *  this.jumping = true;
 *  return true;
 * }
 * Jedi.prototype.setHeight = funciton (height) {
 *  this.height = height;
 * }
 * const luke = new Jedi();
 * luke.jumo(); // true
 * luke.setHeight(20); // undefined
 */
//good code
class Jedi {
  jump() {
    this.jumping = true;
    return this;
  }
  sethHeight(height) {
    this.height = height;
    return this;
  }
}

const luke = new Jedi();
luke.jump().sethHeight(20);



//9.4 It's okay to write a custom toString() method, just make sure it works successfully and causes no side effects.
//code
class Human {
  constructor(options = {}) {
    this.name = options.name || 'no name';
  }
  
  getName() {
    return this.name;
  }

  toString() {
    return `Human - ${this.getName()}`;
  }
}



//9.5 Classes have a default construtor if one is not specified(特别说明). An empty constructor function or one that just
// delegates to a parent class is unnecessary.
//bad code
/**
 * class Man {
 *   constructor() {}
 *   
 *   getName() {
 *     return this.name;
 *   }
 * }
 * 
 * class Woman extends Human {
 *  construtor(...args) {
 *    super(...args); 
 *  }
 * }
 */
//good code
class Woman extends Human {
  constructor(...args) {
    super(...args);
    this.name = 'Woman';
  }
}



//9.6 Avoid duplicate class members.
//Why? Duplicate class member declarations silently pefer the last one - having duplicates is almost
//certainly a bug.
//bad code
/**
 * class Foo {
 *   bar() { return 1; }
 *   bar() { return 2; }
 * }
 */
//good code
class Foo {
  bar() { return 1; }
}
class Foo {
  bar() { return 2; }
}