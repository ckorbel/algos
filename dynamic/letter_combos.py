
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
        # "23"
        self.dfs(digits, digit_map, "", 0, results)
        return results

    def dfs(self, digits, digit_map, current, index, results):
        if index >= len(digits):
            results.append(current)
            return

        string_one = digit_map[digits[index]]
        for i in string_one:
            self.dfs(digits, digit_map, current + i, index + 1, results)
