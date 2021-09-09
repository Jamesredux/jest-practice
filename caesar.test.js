const caesar = require('./caesar');

test('works with single letters', () => {
  expect(caesar('A', 1)).toBe('B');
});

test('works with word', () => {
  expect(caesar('Aaa', 1)).toBe('Bbb');
});

test('works with phrases', () => {
  expect(caesar('Hello, World!', 5)).toBe('Mjqqt, Btwqi!');
});

test('works with negative shift', () => {
  expect(caesar('Mjqqt, Btwqi!', -5)).toBe('Hello, World!');
});

test('works with wrap past Z', () => {
  expect(caesar('Z', 6)).toBe('F');
});

test('works with shift factors over 26', () => {
  expect(caesar('Hello, World!', 75)).toBe('Ebiil, Tloia!');
});

test('works with negative shift factors over 26', () => {
  expect(caesar('Hello, World!', -29)).toBe('Ebiil, Tloia!');
});
