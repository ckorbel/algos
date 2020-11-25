function isPalindrome(x) {
  const toString = x.toString();
  let front = 0;
  let back = toString.length - 1;
  while (front <= back) {
    if (toString[front] === toString[back]) {
      front++;
      back--;
    } else {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome(101));
