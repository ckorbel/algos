class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if len(s) < 1: 
            return 0
        frequency_map = {}
        front = 0
        back = 0
        longest = 0
        while front < len(s):
            if s[front] in frequency_map:
                frequency_map.pop(s[back], None)
                back += 1
            else: 
                frequency_map[s[front]] = 1
                front += 1
                longest = max(longest, front - back)
        return longest