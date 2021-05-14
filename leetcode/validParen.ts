// use a stack LIFO whatever is popped off the stack
// needs to match

function isValid(s: string): boolean {
  const stack: string[] = [];
  const parenMap: Record<string, string> = { "{": "}", "[": "]", "(": ")" };

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if (char in parenMap) {
      stack.push(s[i]);
    } else if (char === "}" || char === "]" || char === ")") {
      const lastInChar = stack.pop();
      if (stack === [] || parenMap[lastInChar] !== char) {
        return false;
      }
    } else {
      return false;
    }
  }
  console.log(stack);
  return stack.length < 1;
}
