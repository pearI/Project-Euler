/*
 * Summation of primes
 *
 * The sum of primes below 10 is 2 + 3 + 5 + 7 = 17. Find the sum of all the
 * primes below two million.
 */

// Iterate over all numbers from 0 to 2e6. No multiplication of the index can be
// a prime, so we add those to `sieve` in order to skip them later. Add all
// primes to a list and get the sum, this is our answer.
let sieve = [], primes = [];
for ( let i = 2; i <= 2e6; ++i ) {
    if ( ! sieve[ i ] ) {
        primes.push( i );
        for( let j = i * 2; j <= 2e6; j += i ) {
            sieve[ j ] = true;
        }
    }
}

console.log( primes.reduce( ( a, b ) => a + b ) );
