//3.1 Use the literal syntax(字面句法) for object creation.
//bad code
/**
 * const item = new Object();
 */
//good code
const item = {};



//3.2 Use computed property names when creating objects with dynamic property names.
//Why? They allow you to define all the properties of an object in one place.
function getKey(k) {
  return `a key named ${k}`;
}
/**
 * bad code
 * const obj = {
 *  id: 5,
 * name: 'San Francisco',
 * };
 * obj[getKey('enabled')] = true;
 */
//good code
const obj2 = {
  id: 5,
  name: 'San Francisco',
  [getKey('enabled')]: true,
};



//3.3 Use object method shorthand.
//bad code
/**
 * const atom = {
 *  value: 1,
 * 
 *  addValue: function(value) {
 *    return atom.value + value;
 *  },
 * };
 */
//good code
const atom = {
  value :1,

  addValue(value) {
    return atom .value + value;
  },
};



//3.4 Use property value shorthand.
//Why? It is shorter to write and descriptive.
const lukeSkywalker = 'Luke Skywalker';
//bad code
/**
 * const obj4 = {
 *  lukeSkywalker: lukeSkywalker,
 * };
 */
//good code
const obj4 = {
  lukeSkywalker,
};



//3.5 Group your shorthand properties at the beginning of your object declaration.
//Why? It's easier to tell which properties are using the shorthand.
const anakinSkywalker = 'Anakin Skywalker';
//bad code
/**
 * const obj5 = {
 *  episodeOne: 1,
    twoJediWalkIntoACantina: 2,
    lukeSkywalker,
    episodeThree: 3,
    mayTheFourth: 4,
    anakinSkywalker,
 * };
 */
//good code
const obj5 = {
  lukeSkywalker,
  anakinSkywalker,
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  episodeThree: 3,
  mayTheFourth: 4,
};


//3.6 Only quote properties that are invalid identifiers.
//Why? In general we consider it subjectively easier to read. It improves syntax highlighting, and is also more easily optimized by many JS engines.
//bad code
/**
 * const bad6 = {
 *  'foo': 3,
 *  'bar': 4,
 *  'data-blah': 5,
 * };
 */
//good code
const good6 = {
  foo: 3,
  bar: 4,
  'data-blah': 5,
};


//3.7 Do not call Object.prototype methods directly, such as hasOwnProperty, propertyIsEnumerable, and isPrototypeOf.
//Why? These methods may be shadowed by properties on the object in question - consider { hasOwnProperty: false } - or,
// the object may be a null object (Object.create(null));
const object7 = { key: 'key value' };
const key = 'key';
//bad code
/**
 * console.log(object.hasOwnProperty(key))
 */
//good code
console.log(Object.prototype.hasOwnProperty.call(object7, key));
//best code
const has = Object.prototype.hasOwnProperty;
/* or */
//import has from 'has'; //https://www.npmjs.com/package/has
console.log(has.call(object7, key));



//3.8 Prefer the object spread operator over Object.assign to shadow-copy objects. Use the object rest operator to get a new object with certain properties omitted.
//very bad
/**
 * const origin = { a: 1, b: 2 };
 * const copy = Object.assign(origin, {c, 3}); // this mutates `original` ಠ_ಠ
 * delete copy.a; //so does this
 */
//bad
/**
 * const original = { a: 1, b: 2};
 * const copy = Object.assign({}, original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }
 */
//good
const original = { a: 1, b: 2 };
const copy = { ...original, c: 3}; // copy => { a: 1, b: 2, c: 3 }
const {a, ...noA} = copy; //noA => { b: 2, c: 3 }
console.log(noA);