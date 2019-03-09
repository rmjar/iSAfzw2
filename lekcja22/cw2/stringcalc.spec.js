const SUT = require('./stringcalc');

describe('String calculator', () => {
    test('should exist', () => {
        expect(SUT).toBeDefined();
        expect(typeof SUT).toBe('function');
        expect(SUT).toBeInstanceOf(Fuction);
    });

    test('should return 0 by default', () => {
        const result = SUT('');
        expect(result).toBe(0);
    });

    test('should fail when no text input', () => {
        expect(SUT).toThrow();
    });


    [
        ['1', 1],
        ['100', 100],
        ['-100', 100]
    ].forEach((input, expectedRetult) => {
        it(`should return number for a single string number ${input} should be ${expectedRetult}`, () => {
            const result = SUT(input);
            expect(typeof result).toBe('number');
            expect(result).toBe(expectedRetult);
        }
    })

});