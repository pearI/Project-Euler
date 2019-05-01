/*
 * Multiples of 3 and 5.
 *
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we
 * get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the
 * multiples of 3 or 5 below 1000.
 */

// Create an array with 1000 elements and use the keys to list all numbers
// ranging from 0 to 999. Filter them to list all numbers that have no remainder
// after division by 3 or 5. We finally add these together to get our answer.
const numbers = [ ...Array( 1000 ).keys() ].filter( x => !( x % 3 ) || !( x % 5 ) );
console.log( numbers.reduce( ( a,b ) => a + b ) );
