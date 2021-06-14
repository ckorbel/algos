

class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        results = []
        if not digits or len(digits) == 0:
            return results

        digit_map = {
            "0": "",
            "1": "",
            "2": "abc",
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "pqrs",
            "8": "tuv",
            "9": "wxyz"
        }

        # 23
        self.dfs(results, digit_map, digits, "", 0)
        return results

    def dfs(self, results, digit_map, digits, current, index):
        if len(current) == len(digits):
            results.append(current)
            return

        letters = digit_map[digits[index]]
        for letter in letters:
            self.dfs(results, digit_map, digits, current + letter, index + 1)
