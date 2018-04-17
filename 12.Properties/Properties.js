//12.1 Use dot natation when accessing properties.
const luke = {
  jedi: true,
  age: 21,
};

//bad code
/**
 * const isJedi = luke['jedi'];
 */
//good code
const isJedi = luke.jedi;



//12.2 Use bracket notation [] when accessing properties with a variable.
function getProp(prop) {
  return luke[prop];
}
const isJedi2 = getProp('jedi');



//12.3 Use exponentiation operator ** when calculating exponentiations.
//bad code
/**
 * const binary = Math.pow(2, 10);
 */
//good code
const binary = 2 ** 10;
console.log(binary);