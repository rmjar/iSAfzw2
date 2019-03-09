/**
 * System Under Test.
 */
import { sq as SUT } from './index';

/**
 * Counter for successful tests.
 */
let tests = 0;

// ---
const testData = [{
    input: 1,
    expectedResult: 1,
}, {
    input: 2,
    expectedResult: 4,
}, {
    input: -1,
    expectedResult: 1,
}, {
    input: '1',
    expectedResult: 1
}, {
    input: 'a',
    expectedResult: NaN,
}, {
    input: Number.MAX_SAFE_INTEGER,
    expectedResult: 8.112963841460666e+31,
}, {
    input: Number.NEGATIVE_INFINITY,
    expectedResult: Number.POSITIVE_INFINITY,
}, {
    input: null,
    expectedResult: 0,
}, {
    input: Number.MAX_VALUE,
    expectedResult: Number.POSITIVE_INFINITY,
}, {
    input: 1.1,
    expectedResult: 1.2100000000000002, // brak obsługi liczba zmiennoprzecinkowych (błąd) w asercji
}
]


testData.forEach(test => {
    const { input, expectedResult } = test;
    const result = SUT(input);
    assertTestResult(result, expectedResult);
})
// given
// let [input, expectedResult] = [1, 1];

// when
// let result = SUT(input);

// then
// assertTestResult(result, expectedResult);

// ---

// end of tests
console.info(`Successfully run ${tests} tests!`);

function assertTestResult(actual, expected) {
    if (actual !== expected && !(isNaN(actual) && isNaN(expected))) {
        throw Error(`Assertion failed! ${actual} is not ${expected}!`);
    }
    ++tests;
}
