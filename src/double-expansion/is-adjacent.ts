
import { isOverlapping } from "./is-overlapping";


/**
 * Returns true if x and y are adjacent, false otherwise.
 * 
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 * for details
 * 
 * @param x a double floating point number
 * @param y another double floating point number
 */
function isAdjacent(x: number, y: number) {
    return isOverlapping(x,y) || 
           isOverlapping(x,2*y) || 
           isOverlapping(2*x,y);
}


export { isAdjacent }
