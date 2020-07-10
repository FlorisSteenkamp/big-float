
/**
 * Multiply a floating point expansion by -2.
 * * **error free**
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 * 
 * @param e a floating point expansion
 */
function eMultByNeg2(e: number[]) {
    const e_: number[] = [];
    for (let i=0; i<e.length; i++) {
        e_.push(-2*e[i]);
    }

    return e_;
}


export { eMultByNeg2 }
