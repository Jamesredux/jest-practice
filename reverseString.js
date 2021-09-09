const reverseString = (string) => {
  const result = [];
  string.split('').map((x) => {
    result.unshift(x);
  });
  return result.join('');
};

module.exports = reverseString;
