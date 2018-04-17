//2.1Use const for all of your references; avoid using var
//Why? This ensures that you can't reassign your references, which can lead to bugs and difficult to comprehend code.
//bad code
/**
 * var a = 1;
 * var b = 2;
 */
//good code
const a = 1;
const b = 2;



//2.2 If you must reassign references, use let instead of var
//Why?let is block-scoped rather than function-scoped like var
//bad code
/**
 * var count = 1;
 * if(true) {
 *  count += 1;
 * }
 */
//good code
let count = 1;
if(true) {
  count += 1;
}



//2.3 Note that both let and const are block-scoped
//const and let only exist in the blocks they are defined in.
{
  let a3 =1;
  let b3 = 1;
}
console.log(a3);
console.log(b3);