/*
 * Sum square difference
 *
 * The sum of the squares of the first ten natural numbers is, 1^2 + 2^2 + ...
 * + 10^2 = 385. The square of the sum of the first natural numbers is,
 * ( 1 + 2 + ... + 10)^2 = 55^2 = 3025. Hence the difference between the sum of
 * the squares of the first ten natural numbers and the square of the sum is
 * 3025 - 385 = 2640. Find the difference between the sum of the squares of the
 * first one hundred natural numbers and the square of the sum.
 */

// Using a list of all numbers from 1 to 100, we first evaluate the sum of all
// squared numbers by using `Math.pow` to square and `reduce` to get the sum.
// We do the same for the square of the sum of all numbers by getting the sum 
// and squaring this number. The difference between `squaredSum` and 
// `sumSquares` will be our answer.
const numbers = [ ...Array( 100 ).keys() ].map( x => x + 1 );
const sumSquares = numbers.map( x => Math.pow( x, 2 ) ).reduce( ( a, b ) => a + b );
const squaredSum = Math.pow( numbers.reduce( ( a, b ) => a + b ), 2 );

console.log( squaredSum - sumSquares );
