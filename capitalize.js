const capitalize = (string) => {
  return string
    .split('')
    .map((x, index) => {
      if (index === 0) {
        return x.toUpperCase();
      } else {
        return x.toLowerCase();
      }
    })
    .join('');
};

module.exports = capitalize;


