/*
 * Smallest multiple
 *
 * 2520 is the smallest number that can be divided by each of the numbers from
 * 1 to 10 without any remainder.
 *
 * What is the smallest positive number that is evenly divisible by all of the
 * numbers from 1 to 20?
 */

// We iterate trough an arbitrary amount of numbers until we hit our answer.
// With each iteration we check if there are is no more remainder after a 
// division of the numbers 1 to 20. If all the divisions evaluate to 0 and 
// `isFound` is not set to false, we have found our answer.
for ( let i = 10; i < 25e7; i++ ) {
    let isFound = true;
    for ( let j = 1; j < 21; j++ ) {
        if ( i % j ) isFound = false;
    }

    if ( isFound ) {
        console.log( i );
        break;
    }
}
