const caesar = (string, shift) => {
  return string
    .split('')
    .map((char) => changeChar(char, shift))
    .join('');
};

const changeChar = (char, shift) => {
  let trueShift = shift % 26; // converts shifts larger than 26
  let code = char.charCodeAt(0); // converts char to ascii

  // upper case
  if (code > 64 && code < 91) {
    code += trueShift;
    code > 90 ? (code -= 26) : code;
    code < 65 ? (code += 26) : code;
    return String.fromCharCode(code);
  } else if (code > 96 && code < 123) {
    code += trueShift;
    code > 122 ? (code -= 26) : code;
    code < 97 ? (code += 26) : code;
    return String.fromCharCode(code);
  } else {
    // special chars etc
    return String.fromCharCode(code);
  }
};
module.exports = caesar;
