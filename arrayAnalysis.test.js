const analyze = require('./arrayAnalysis');

const testAnswer = analyze([2, 7, 6, 1, 4, 4]);
const testAnswer2 = analyze([1, 1, 1, 1]);

test('finds average', () => {
  expect(testAnswer.average).toBe(4);
});

test('finds min', () => {
  expect(testAnswer['min']).toBe(1);
});

test('finds max', () => {
  expect(testAnswer.max).toBe(7);
});

test('finds length', () => {
  expect(testAnswer['length']).toBe(6);
});

test('finds average', () => {
  expect(testAnswer2.average).toBe(1);
});

test('finds min', () => {
  expect(testAnswer2['min']).toBe(1);
});

test('finds max', () => {
  expect(testAnswer2.max).toBe(1);
});

test('finds length', () => {
  expect(testAnswer2['length']).toBe(4);
});
