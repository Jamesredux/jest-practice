const analyze = (array) => {
  answer = {};
  let min = array[0];
  let max = array[0];
  answer['length'] = array.length;
  answer['average'] = array.reduce((prev, cur) => cur + prev) / array.length;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    } else if (array[i] > max) {
      max = array[i];
    }
  }
  answer.max = max;
  answer.min = min;
  return answer;
};

module.exports = analyze;
