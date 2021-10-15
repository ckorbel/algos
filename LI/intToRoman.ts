function intToRoman(num: number): string {
  const list = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  const valueList = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let result = "";
  while (num !== 0) {
    for (let i = 0; i < valueList.length; i++) {
      if (num >= valueList[i]) {
        result += list[i];
        num -= valueList[i];
        // break is important will break out of for loop
        // go back to while num !== 0 check and start for loop back at let i = 0
        break;
      }
    }
  }
  return result;
}
