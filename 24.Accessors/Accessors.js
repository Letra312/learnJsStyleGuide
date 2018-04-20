// 24.1 Accessor functions for properties are not required.


// 24.2 Do not use JavaScript getters/setters as thay cause unexpected side effects and are harder to test, 
// maintain, and reason about. Instead, if you do make accessor functions, use getVal() and setVal('hello').
// bad code
/**
 * class Dragon {
 *   get age() {
 *     // ...
 *   }
 * 
 *   set age() {
 *     // ...
 *   }
 * }
 */

// good code
class Dragon {
  getAge() {
    // ...
  }

  setAge() {
    // ...
  }
}



// 24.3 If the property/method is a `boolean`, use `isVal()` or `hasVal()`.
// bad code 
/**
 * if (!dragon.age()) {
 *   return false;
 * }
 */

// good code
if (!dragon.hasAge()) {
  return false;
}



// 24.4 It's okay to create get() and set() functions, but be consistent.
class Jedi {
  constructor(options = {}) {
    const lightsaber = options.lightsaber || 'blue';
    this.set('lightsaber', lightsaber);
  }

  set(key, val) {
    this[key] = val;
  }

  get(key) {
    return this[key];
  }
}