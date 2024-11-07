/**
 * Divides two numbers and returns the result.
 * If the divisor is zero, returns an error message.
 *
 * @param {number} a - The dividend.
 * @param {number} b - The divisor.
 * @returns {number|string} The result of the division, or an error message if division by zero.
 */
function divValue(a, b) {    
    if (a === 0) {
        return NaN;
    } else if (b === 0) {
        return Infinity;
    }

    return a / b;
}

module.exports = divValue;
