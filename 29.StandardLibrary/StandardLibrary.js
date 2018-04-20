// The Standard Library contains utilities that are functionally broken but remain for legacy reasons.

// 29.1 Use Number.isNaN instead of global isNaN.
// Why? The global isNaN coerces(胁迫, 强制转换) non-numbers to numbers, returning true for anything that coerces to NaN. If this behavior is desired, make it explicit(明确的).

// bad code 
/**
 * isNaN('1.2'); // false
 * isNaN('1.2.3'); // true
 */

// good code
Number.isNaN('1.2.3'); // false
Number.isNaN(Number('1.2.3')); // true



// 29.2 Use `Number.isFinite` instead of global `isFinite`.
// Why? The global `isFinite` coerces non-numbers to numbers, returning true for anything that coerces to a finite number. If this behavior is desired, make it explicit.

// bad code 
/**
 * isFinite('2e3'); // true
 */

// good code
Number.isFinite('2e3'); // false
Number.isFinite(parseInt('2e3', 10)); // true