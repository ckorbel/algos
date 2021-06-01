# "racecar"
# iterate through string check if palindrome by starting in middle
# trickest part part is getting this -1 index stuff right


import math
class Solution:
    def expand_middle(self, string, left, right):
        if string is None or len(string) < 1:
            return 0
        
        while left >= 0 and right < len(string) and string[left] == string[right]:
            left -= 1
            right += 1
        return right - left - 1
            
        
    
    def longestPalindrome(self, s: str) -> str:
        if len(s) == 0: 
            return ""
        
        start = 0
        end = 0
        
        for i in range(0, len(s)):
            length_one = self.expand_middle(s, i, i)
            length_two = self.expand_middle(s, i, i + 1)
            length = max(length_one, length_two) 
            if length > end - start:
                start = i - math.floor((length - 1) / 2)
                end = i + math.floor(length  / 2)
        return s[start:end + 1]
                