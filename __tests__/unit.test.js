// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//testing isPhoneNumber
test('isThePhoneNumberValid', () => {
    expect(functions.isPhoneNumber('(012)-345-6789')).toBe(true);
});
test('isThePhoneNumberValid', () => {
    expect(functions.isPhoneNumber('(949)-000-0001')).toBe(true);
});
test('isThePhoneNumberInvalid', () => {
    expect(functions.isPhoneNumber('12345')).toBe(false);
});
test('isThePhoneNumberInvalid', () => {
    expect(functions.isPhoneNumber('(asd)-fgh')).toBe(false);
});

//testing isEmail
test('isTheEmailValid', () => {
    expect(functions.isEmail('qian@ucsd.edu')).toBe(true);
});
test('isTheEmailValid', () => {
    expect(functions.isEmail('cheng@gmail.com')).toBe(true);
});
test('isTheEmailInvalid', () => {
    expect(functions.isEmail('qian@ucsd')).toBe(false);
});
test('isTheEmailInvalid', () => {
    expect(functions.isEmail('cheng.com')).toBe(false);
});

//testing isStrongPassword
test('isThePasswordStrong', () => {
    expect(functions.isStrongPassword('abcd_1234')).toBe(true);
});
test('isThePasswordStrong', () => {
    expect(functions.isStrongPassword('dcba4321')).toBe(true);
});
test('isThePasswordNotStrong', () => {
    expect(functions.isStrongPassword('1234abcd')).toBe(false);
});
test('isThePasswordNotStrong', () => {
    expect(functions.isStrongPassword('!!!!!!!!')).toBe(false);
});

//testing isDate
test('isTheDateValid', () => {
    expect(functions.isDate('1/1/2023')).toBe(true);
});
test('isTheDateValid', () => {
    expect(functions.isDate('12/31/2023')).toBe(true);
});
test('isTheDateInvalid', () => {
    expect(functions.isDate('Jan 1, 2023')).toBe(false);
});
test('isTheDateInvalid', () => {
    expect(functions.isDate('Januay 1st, 2023')).toBe(false);
});

//testing isHexColor
test('isTheHexColorValid', () => {
    expect(functions.isHexColor('#FFFFFF')).toBe(true);
});
test('isTheHexColorValid', () => {
    expect(functions.isHexColor('#123')).toBe(true);
});
test('isTheHexColorInvalid', () => {
    expect(functions.isHexColor('#12345')).toBe(false);
});
test('isTheHexColorInvalid', () => {
    expect(functions.isHexColor('#F')).toBe(false);
});