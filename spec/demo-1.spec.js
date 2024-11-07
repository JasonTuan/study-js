const assert = require('assert');
const divValue = require('../demo-1');

describe('divValue', () => {
    it('should divide two numbers correctly', () => {
        expect(divValue(10, 2)).toBe(5);
    });

    it('should return Infinity when dividing by zero', () => {
        expect(divValue(10, 0)).toBe(Infinity);
    });

    it('should return NaN when dividing zero by zero', () => {
        expect(divValue(0, 0)).toBeNaN();
    });
});