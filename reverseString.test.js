const reverseString = require('./reverseString');

test('it reverses a string', () => {
  expect(reverseString('ABC')).toBe('CBA');
});

test('it reverses phrases', () => {
  expect(reverseString('hello there')).toBe('ereht olleh');
});

test('works with numbers and punctuation', () => {
  expect(reverseString('1 for sorrow!!')).toBe('!!worros rof 1');
});

test('works with single character', () => {
  expect(reverseString('a')).toBe('a');
});
