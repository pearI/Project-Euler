/*
 * Largest palindrome product
 *
 * A palindromic number reads the same both ways. The largest palindrome made
 * from the product of two 2-digit numbers is 9009 = 91 * 99.
 *
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

// We loop through 100 to 999 twice so we can iterate the products of all
// 3-digit numbers. Doing this in reverse assures us that the first palindromic
// number is also the largest. Each iteration we check if the evaluated number
// as string equals that string in reverse, when it does, we have our answer.
loop: for ( let i = 1000; i > 100; i-- ) {
    for ( let j = 1000; j > 100; j-- ) {
        const number = `${ i * j }`, reversed = number.split( "" ).reverse().join( "" );
        if ( number === reversed ) {
            console.log( number );
            break loop;
        }
    }
}
