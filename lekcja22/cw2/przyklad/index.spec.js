/**
 * System Under Test.
 */
const SUT = require('./index');



test('should return 1 for 1', () => {
    // given
    let [input, expectedResult] = [1, 1];
    
    // when
    let result = SUT(input);
    
    // then
    expect(result).toBe(expectedResult);
});


test('should return 1.21 for 1.1', () => {
    // given
    let [input, expectedResult] = [1.1, 1.21];
    
    // when
    let result = SUT(input);
    
    // then
    expect(result).toBeCloseTo(expectedResult);
});


test('should return NaN for undefined', () => {
    // given
    let [input, expectedResult] = [undefined, NaN];

    // when
    let result = SUT(input);
    
    // then
    expect(result).toBeNaN();
});


test('should return 0 for null', () => {
    // given
    let [input, expectedResult] = [null, 0];

    // when
    let result = SUT(input);
    
    // then
    expect(result).toBe(0);
});

test('should return 8.112963841460666e+31 for Number.MAX_SAFE_INTEGER', () => {
    // given
    let [input, expectedResult] = [Number.MAX_SAFE_INTEGER, 8.112963841460666e+31];

    // when
    let result = SUT(input);
    
    // then
    expect(result).toBe(8.112963841460666e+31);
});