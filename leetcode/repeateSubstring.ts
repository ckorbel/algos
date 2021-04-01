function repeatedSubstringPattern(s: string): boolean {
  let length: number = s.length;
  for (let i = length / 2; i >= 1; i--) {
    if (length % i === 0) {
      let numberRepeats: number = length / i;
      let subString: string = s.substring(0, i);
      //.repeat good way of concating same string
      // "ab".repeate(3) == "ababab"
      if (subString.repeat(numberRepeats) === s) {
        return true;
      }
    }
  }
  return false;
}
