// 类型转换和强制类型转换
// 22.1 Perform type coercion at the beginning of the statement.



// 22.2 Strings.
// => this.reviewScore = 9;

// bad code
/**
 * const totalScore = new String(this.reviewScore); // typeof totalScore is "object" not "string"
 * 
 * const totalScore = this.reviwScore + ''; // invokes this.reviewScore.valueOf()
 * 
 * const totalScore = this.reviewScore.toString(); // isn't guaranteed(保证) to return a string 
 */

// good code
const totalScore = String(this.reviewScore);



// 22.3 Numbers: Use `Number` for type casting and `parseInt` always with a radix(基数) for parsing strings.

const inputValue = '4';

// bad code
/**
 * const val = new Number(inputValue);
 * 
 * const val = +inputValue;
 * 
 * const val = inputValue >> 0;
 * 
 * const val = parseInt(inputValue);
 */

// good code
const val = Number(inputValue);
const antherVal = parseInt(inputValue, 10);



// 22.4 If for whatever reason you are doing something wild and `parseInt` is your bottleneck and need to use 
// Bitshift(位操作) for performance resons, leave a comment explaining why and what you're doing.
// good code
/**
 * parseInt was the reason my code was slow.
 * Bitshifting the String to create it to a 
 * Number made it a lot faster.
 */
const val = inputValue >> 0;



// 22.5 Note: Be careful when using botshift operations. Numbers are represented as 64-bit-values, but bitshift 
// operations always return a 32-bit integer (source). Bitshift can lead to unexpected behavior for integer values 
// larger than 32 bits. Largest signed 32-bit Int is 2,147,483,647:

/**
 * 2147483647 >> 0; // => 2147483647
 * 2147483648 >> 0; // => -2147483648
 * 2147483649 >> 0; // => -2147483647
 */



// 22.6 Booleans:
const age = 0;

// bad code
/**
 * const hasAge = new Boolean(age);
 */

// good code
const hasAge = Boolean(age);

// best code
const hasAge = !!age;
