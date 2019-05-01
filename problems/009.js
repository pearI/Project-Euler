/*
 * Special Pythagorean triplet
 *
 * A pythagorean triplet is a set of three natural numbers, a < b < c, for
 * which, a^2 + b^2 = c^2. For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.
 */

// Iterate over a list of numbers ranging from 0 to an arbitrary number. Each
// iteration we iterate another list so we can multiply it with something.
// We evaluate the square root of c and check if a (i) is smaller than b (j) and
// b (j) is smaller than c (sqrtC). If so, we are dealing with a triplet, once
// these numbers add up to 1000 we multiply them to get our answer.
loop: for ( let i = 1; i < 1e5; i++ ) {
    for ( let j = 1; j < 1e5; j++ ) {
        const sqrtC = Math.sqrt( Math.pow( i, 2 ) + Math.pow( j, 2 ) );
        if ( i < j && j < sqrtC ) {
            if ( i + j + sqrtC === 1000 ) {
                console.log( i * j * sqrtC );
                break loop;
            }
        }
    }
}
