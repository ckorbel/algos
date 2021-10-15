function findPrefix(str1: string, str2: string): string {
  let shortestString: string = "";
  if (str1.length < str2.length) {
    shortestString = str1;
  } else {
    shortestString = str2;
  }

  for (let i = 0; i < shortestString.length; i++) {
    if (str1[i] !== str2[i]) {
      return str1.slice(0, i);
    }
  }

  return shortestString;
}

function longestCommonPrefix(strs: string[]): string {
  let commonPrefix: string = "";
  if (!strs || strs.length === 0) return commonPrefix;
  let longestPrefix: string = strs[0];
  let newestPrefix: string = "";
  for (let i = 0; i < strs.length; i++) {
    newestPrefix = findPrefix(strs[0], strs[i]);
    if (newestPrefix.length < longestPrefix.length) {
      longestPrefix = newestPrefix;
    }
    if (longestPrefix.length === 0) return "";
  }

  return longestPrefix;
}
