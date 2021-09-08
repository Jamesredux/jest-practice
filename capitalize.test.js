const capitalize = require('./capitalize');

test('capitalize lower case', () => {
  expect(capitalize('dogfood')).toBe('Dogfood');
});

test('capitalize upper case', () => {
  expect(capitalize('SUNDAY')).toBe('Sunday');
});

test('capitalize mixed case', () => {
  expect(capitalize('wElCoMe')).toBe('Welcome');
});

test('capitalize nothing', () => {
  expect(capitalize('')).toBe('');
});
