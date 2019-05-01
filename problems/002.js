/*
 * Even Fibonacci numbers
 *
 * Each new term in the Fibonacci sequence is generated by adding the previous
 * two terms. By starting with 1 and 2, the first 10 terms will be: 1, 2, 3, 5,
 * 8, 13, 21, 24, 55, 89, etc. By considering the terms in the Fibonacci
 * sequence whose values do not exceed four million, find the sum of the even-
 * valued terms.
 */

// We first define a function 'fibonacci' which calculates the number that is in
// the given index in the fibonacci sequence. Using this function, we create an
// array that is 34 elements in length (since the 35th position would exceed
// 4 million) and fill it with the fibonacci numbers that are even. We finally
// add these together to get our answer.
const fibonacci = number => number < 2 ? number : fibonacci( number - 1 ) + fibonacci( number - 2 );
const numbers = [ ...Array( 34 ).keys() ].map( x => fibonacci( x ) ).filter( x => !( x % 2 ) );
console.log( numbers.reduce( ( a,b ) => a + b ) );
