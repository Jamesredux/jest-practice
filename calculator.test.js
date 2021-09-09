const calculator = require('./calculator');

test('adds numbers', () => {
  expect(calculator.sum(2, 2)).toBe(4);
});

test('adds negative numbers', () => {
  expect(calculator.sum(-2, 2)).toBe(0);
});

test('multiplys numbers', () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});

test('mulitplys by 0', () => {
  expect(calculator.multiply(0, 2)).toBe(0);
});

test('subtracts numbers', () => {
  expect(calculator.subtract(2, 2)).toBe(0);
});

test('subtracts numbers below 0', () => {
  expect(calculator.subtract(2, 20)).toBe(-18);
});

test('divides numbers', () => {
  expect(calculator.divide(2, 2)).toBe(1);
});

test('divides numbers with float', () => {
  expect(calculator.divide(5, 2)).toBe(2.5);
});
