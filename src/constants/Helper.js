export const ABBR_NUM = number => {
  let abbrev = ["K", "M", "B", "T"];
  for (var i = abbrev.length - 1; i >= 0; i--) {
    var size = Math.pow(10, (i + 1) * 3);
    if (size <= number) {
      number = Math.abs(number / size);
      if (number == 1000 && i < abbrev.length - 1) {
        number = 1;
        i++;
      }
      var round = Math.floor(number);
      var addPlus = round < number ? "+" : "";
      number = round + abbrev[i] + addPlus;
      break;
    }
  }
  return number;
};
