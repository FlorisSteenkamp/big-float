
import { fastExpansionSum } from "./fast-expansion-sum";
import { eNegativeOf } from "./e-negative-of";


// We *have* to do the below❗ The assignee is a getter❗ The assigned is a pure function❗
const negativeOf = eNegativeOf;
const add = fastExpansionSum;


/**
 * Returns the difference between two floating point expansions, i.e. e - f.
 * 
 * * see [Shewchuk](https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf)
 * 
 * @param e a floating point expansion
 * @param f another floating point expansion
 */
function eDiff(e: number[], f: number[]) {
    const g = negativeOf(f);
    return add(e, g);
}


export { eDiff }
