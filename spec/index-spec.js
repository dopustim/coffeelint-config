const fs = require('fs');
const coffeelint = require('coffeelint');
const config = require('../');

const validSrc = fs.readFileSync('./spec/valid.coffee', 'utf8');
const invalidSrc = fs.readFileSync('./spec/invalid.coffee', 'utf8');

describe('Lint result for valid CoffeeScript file', () => {

    let res;

    beforeAll(() => {
        res = coffeelint.lint(validSrc, config);
    });
    it('has no errors', () => {
        expect(res.length).toBeFalsy();
    });
});

describe('Lint result for invalid CoffeeScript file', () => {

    let res;

    beforeAll(() => {
        res = coffeelint.lint(invalidSrc, config);
    });
    it('has errors', () => {
        expect(res.length).toBeTruthy();
    });
    it('has error for rule "camel_case_classes"', () => {
        expect(res[0].rule).toBe('camel_case_classes');
        expect(res[0].level).toBe('error');
    });
    it('has warning for rule "space_operators"', () => {
        expect(res[1].rule).toBe('space_operators');
        expect(res[1].level).toBe('warn');
    });
});
