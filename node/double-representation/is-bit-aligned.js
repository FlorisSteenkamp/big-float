"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBitAligned = void 0;
const get_max_set_bit_1 = require("./get-max-set-bit");
const exponent_1 = require("./exponent");
/**
 * Returns true if the given number is bit-aligned in the sense that its a
 * multiple of a given power of 2, say e, and such that the number, say a,
 * conforms to: a/2^e < 2^(l-e), where l is the max allowed bit length.
 * This essentially means the numbers act somewhat like fixed-point numbers
 * which can drastically speed up some geometric algorithms and also reduce
 * their complexity.
 *
 * Visually:
 * These numbers (a,b and c) are bit aligned with e === 3 and max
 * bitlength === 6:
 *    a -> 00|101100|000
 *    b -> 00|000100|000
 *    c -> 00|110111|000
 * These are not
 *    a -> 01|101100|000
 *    b -> 00|000100|000
 * These are not
 *    a -> 00|101100|000
 *    b -> 00|000100|100
 * These are not
 *    a -> 00|101100|100
 *    b -> 00|000100|100
 * @param as An array of numbers to check
 * @param maxBitLength The max allowed bitlength
 * @param gridSpacingExponent The grid spacing === 1^gridSpacingExponent
 */
function isBitAligned(a, maxBitLength, gridSpacingExponent) {
    if (a === 0) {
        return true;
    }
    let e = exponent_1.exponent(a);
    let maxSetBit = get_max_set_bit_1.getHighestSetBit(a) - 52 + e;
    let minSetBit = get_max_set_bit_1.getLowestSetBit(a) - 52 + e;
    let minBitBigEnough = minSetBit >= gridSpacingExponent;
    let maxBitSmallEnough = maxSetBit <= maxBitLength - 1 + gridSpacingExponent;
    return minBitBigEnough && maxBitSmallEnough;
}
exports.isBitAligned = isBitAligned;
//# sourceMappingURL=is-bit-aligned.js.map