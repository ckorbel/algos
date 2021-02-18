class Solution:
    def numDecodings(self, s: str) -> int:
        if len(s) < 1: 
            return 0
        if s[0] == "0": 
            return 0 
        table = [0] * (len(s) + 1 )
        table[0] = 1
        table[1] = 1
        # start at 2 because you need compare up to 2 digits
        for i in range(2, (len(s) + 1)):
            one_digit = int(s[i - 1:i])
            if one_digit >= 1:
                table[i] += table[i - 1]
            
            two_digit = int(s[i - 2:i])
            if two_digit >= 10 and two_digit <= 26: 
                table[i] += table[i - 2]
        return table[len(s)]

# input = "123"
# seed value 1 at index 0 and 1 and index 1
# [1, 1, 0, 0]
# 1   2  3, answer