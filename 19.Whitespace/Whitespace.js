// 19.1 Use soft tabs (space character) set to 2 spaces.
// bad code 
/**
 * funtion foo() {
 *     let name;
 * }
 * 
 * function bar() {
 *  let name;
 * }
 */
// good code 
function baz() {
  let name;
}



// 19.2 Place 1 space before the leading brace.
//bad code
/**
 * function test(){
 *   console.log('test');
 * }
 * 
 * dog.set('attr',{
 *   age: '1 year',
 *   breed: 'Bernese Mountain Dog',
 * });
 */

// good code
function test2() {
  console.log('test2');
}

dog.set('attr', {
  age: '1 year',
  breed: 'Bernese Moutain Dog',
});



// 19.3 Place 1 space before the opening parenthesis in control statements(`if`, `while` etc.). Place no space between the 
// argument list and the function name in function calls and declarations.
// bad code
/**
 * if(isJedi) {
 *   fight();
 * }
 */

// good code
if (isJedi) {
  fight();
}

// bad code
/**
 * function fight () {
 *   console.log ('Swooosh!');
 * }
 */
// good code
function fight() {
  console.log('Swooosh!');
}



// 19.4 Set off operators with spaces.
// bad code
/**
 * const x=y+5;
 */
// good code
const x = y + 5;



// 19.5 End files with a single newline character.
// bad code
/**
 * import { es6 } from './AirbnbStyleGuid';
 *   // ...
 * export default es6;
 */
// bad code
/**
 * import { es6 } from './AirbnbStyleGuid';
 *   // ...
 * export default es6;
 * 
 * 
 */

 // good code
// good
import { es6 } from './AirbnbStyleGuide';
  // ...
export default es6;



// 19.6 Use indentation(缩减) when making long method chains (more than 2 method chains). Use a leading dot, which
// emphasizes that the line is a method call, not a new statement.

// bad code 
/**
 * $('#items').find('.selected').highlight().end().find('.open').updateCount();
 */

// bad code 
/**
 * $('items').
 *   find('.selected').
 *   highlight().
 *   end().
 * find('.open').
 *   updateCount();
 */

 // good code 
 $('#items')
  .find('.selected')
    .highlight()
    .end()
  .find('.open')
    .updateCount();

// bad code
/**
 * const leds = stage.selectAll('.led').data(data).enter().append('svg:svg').classed('led', true)
 *     .attr('width', (radius + margin) * 2).append('svg:g')
 *   .attr('transform', `translate(${radius + margin},${radius + margin})`)
 *   .call(tron.led);
 */

// good code
const leds = stage.selectAll('.led')
    .data(data)
  .enter().append('svg:svg')
    .classed('led', true)
    .attr('width', (radius + margin) * 2)
  .append('svg:g')
    .attr('width', `translate(${radius + margin}, ${radius + margin})`)
    .call(tron.led);

// good code
const leds2 = stage.selectAll('.led').data(data);



// Leave a blank line after blocks and before the next statement
// bad code
if (foo) {
  return bar;
}
return baz;

// good code
if (foo) {
  return bar;
}

return baz;

// bad code
const obj = {
  foo() {
  },
  bar() {
  },
};
return obj;

// good code
const obj = {
  foo() {
  },

  bar() {
  },
};

return obj;

// bad code
const arr =[
  function foo() {
  },
  function bar() {
  },
];
return arr;

// good code
const arr = [
  function foo() {
  },
  function bar() {
  },
];

return arr;



// 19.8 Do not pad your blocks with blank lines.
// bad code 
/**
 * function bar() {
 * 
 *   console.log(foo);
 * 
 * }
 * 
 * if (baz) {
 *   
 *   console.log(qux);
 * } else {
 *   console.log(foo)
 * 
 * }
 * 
 * class Foo {
 * 
 *   constructor(bar) {
 *     this.bar = bar;
 *   }
 * }
 */

// good code
function bar() {
  console.log(foo);
}
if (baz) {
  console.log(qux);
} else {
  console.log(foo);
}



// 19.9 Do not add spaces inside parentheses.
// bad code
/**
 * function bar( foo ) {
 *   return foo;
 * }
 */

 // good code
 function bar(foo) {
   return foo;
 }

 // bad code
 /**
  * if ( foo ) {
  *   console.log(foo)
  * }
  */

  // good code
  if(foo) {
    console.log(foo);
  }
  


  // 19.10 Do not add spaces inside brackets(方括号).
  // bad code
  /**
   * const foo = [ 1, 2, 3 ];
   * console.log(foo[ 0 ]);
   */

  // good code
  const foo = [1, 2, 3];
  console.log(foo[0]);



  // 19.11 Add spaces inside curly braces.
  // bad code
  /**
   * const foo = {clark: 'kent'};
   */

   // good code
   const foo = { clark: 'kent' };



   // 19.12 Avoid having lines of code that are longer than 100 charaters (including witespace). 
   // Note: per above, long strings are exempt(免除) from this rule, and should not be broken up.
   //Why? This ensures readability and maintainability.

   // bad code
   /**
    * const foo = jsonData && jsonData.foo && jsonData.foo.bar && jsonData.foo.bar.baz && jsonData.foo.bar.baz.quux && jsonData.foo.bar.baz.quux.xyzzy;
    * 
    * $.ajax({ methid: 'POST', url: 'https://airbnb.com/', data: { name: 'John' } }).done(() => console.log('Congratulations!')).fail(() => console.log('You have failed this city.'));
    * 
    */

   // good code
   const foo = jsonData
     && jsonData.foo
     && jsonData.foo.bar
     && jsonData.foo.bar.baz
     && jsonData.foo.bar.baz.quux
     && jsonData.foo.bar.baz.quux.xyzzy;
   
   $.ajax({
    method: 'POST',
    url: 'htttps://airbnb.com/',
    data: { name: 'John' },
  })
    .done(() => console.log('Congratulations!'))
    .fail(() => console.log('You have failed this city.'));
