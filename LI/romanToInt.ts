function romanToInt(s: string): number {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    // if character before is smaller value
    // if prev char is smaller ie IV = 4 then we subtract
    if (i + 1 < s.length && romanMap[s[i]] < romanMap[s[i + 1]]) {
      result -= romanMap[s[i]];
    } else {
      result += romanMap[s[i]];
    }
  }

  return result;
}
