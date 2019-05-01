/*
 * Largest prime factor
 *
 * The prime factors of 13195 are 5, 7, 13 and 29. What is the largest prime
 * factor of the number 600851475143?
 */

// Iterate and store the prime factors that divide the given number and leave
// no remainder, divide the number by this factor and repeat this until we hit
// zero.
let factors = [], number = 600851475143;
for ( let i = 2; i <= number; i++ ) {
    while ( !( number % i ) ) {
        factors.push( i );
        number /= i;
    }
}

//The answer will be the highest number we have stored in 'factors'.
console.log( Math.max( ...factors ) );
