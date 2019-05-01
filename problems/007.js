/*
 * 10001st prime
 *
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see
 * that the 6th prime is 13.
 *
 * What is the 10001st prime number?
 */

// Iterate through all numbers from 3 to an arbitrary number. Each iteration we
// check if the index is a prime. If it is, we add 1 to `primes` to indicate the
// amount of primes we have found. The one at the 10001st position is our
// answer.
let primes = 1;
for ( let i = 3; i < 1e6; i+= 2 ) {
    let isPrime = true;
    for ( let j = 2; j < i; j++ ) {
        if ( i % j === 0 ) isPrime = false;
    }

    if ( isPrime ) primes++;

    if ( primes === 10001 ) {
        console.log( i );
        break;
    }
}
