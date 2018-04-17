//5.1 Use object destructuring when accessing and using multiple properties of an object.
//Why? Destruturing saves you from creating temporary references for those properties.
//bad code
/**
 * function getFullName(user) {
 *  const firstName = user.firstName;
 *  const lastname = user.lastName;
 *  return `${firstname} ${lastName}`;
 * }
 */
//good code
function getFullName(user) {
  const { firstName, lastName } = user;
  return `${firstName} ${lastName}`;
}

//best code
function bestGetFullname({firstName, lastName}) {
  return `${firstName} ${lastName}`;
}



//5.2 Use array destructuring.
const arr2 = [1, 2, 3, 4];
//bad code
/**
 * const first = arr[0];
 * const second = arr[1];
 */
//good code
const [first, second] = arr2;



//5.3 Use object destructuring for multiple return values, not array destructuring.
//Why? You can add new properties over time or change the order of things without call sites.
//bad code
/**
 * function processinput(input) {
 * //then a miracle occurs
 * return [left, right, top, bottom];
 *}
//the caller needs to think about the order of return data
 *const [left, _, top] = processinput(input);
 */

//good code
function processinput(input) {
  //then a miracle occurs
  return { left, right, top, bottom };
}
//the caller selects only the data they need
const { left, top } = processinput(input);