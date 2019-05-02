/*
 * Longest Collatz sequence
 *
 * The following iterative sequence is defined for the set of positive integers.
 *
 * n -> n/2 (n is even)
 * n -> 3n + 1 (n is odd)
 *
 * Using the rule above and starting with 13, we generate the following sequence
 * 13, 40, 20, 10, 5, 16, 8, 4, 2, 1. It can be seen that this sequence
 * (starting at 13 and finishing at 1) contains 10 terms. Although it has not
 * been proved yet (Collatz problem), it is thought that all starting numbers
 * finish at 1. Which starting number, under one million, produces the largest
 * chain (once the chain starts the terms are allowed to go above one million)?
 */

// Iterate over all numbers from 1 to 999.999. For every number, we create a
// new variable `j` that holds the number while we evaluate it to eventually
// equal 1. We apply the correct division or multiplication based on whether it
// is odd or even. If the resulting amount of steps `k` is higher than the 
// previous highest amount `b`, we update it. After the iteration is done, we
// are left with out answer.
let a = 0, b = 0;
for ( let i = 1; i < 1e6; i++ ) {
    let j = i, k = 1;
    while ( j > 1 ) {
        k++;
        j = !( j % 2 ) ? j / 2 : j * 3 + 1;
    }
    if ( k > a ) {
        b = i;
        a = k;
    }
}

console.log( b );
