/*
 * Power digit sum
 * 
 * 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
 * What is the sum of the digits of the number 2^1000?
 */

const BigNumber = require( "big-number" );

// Evaluate 2 to the power of 1000 and iterate through every character.
// After summing up all the characters we are left with out answer.
let sum = 0;
const number = BigNumber( 2 ).pow( 1000 ).toString();
for ( let i = 0; i < number.length; i++ ) {
    sum += parseInt( number[ i ] );
}

console.log( sum );
