//1.1Primitives: When you access a primitive type your work directly on its value.
const foo = 1;
let bar = foo;
bar = 9;
console.log(foo, bar);



//1.2Complex: When you access a complex type you work on a reference to its value.
const foo2 = [1, 2];
const bar2 = foo2;
bar2[0] = 9;
console.log(foo2[0], bar2[0]);
