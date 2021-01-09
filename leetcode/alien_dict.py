class Solution:
    def isAlienSorted(self, words, order):
        alphabet = {}
        for i in range(len(order)):
            alphabet[order[i]] = i
        for i in range(len(words) - 1):
            min_word = 0
            first_word = words[i]
            second_word = words[i + 1]
            if len(first_word) < len(second_word):
                min_word = words[i]
            else:
                min_word = words[i + 1]
            for j in range(len(min_word)):
                if alphabet[first_word[j]] < alphabet[second_word[j]]:
                    break
                elif alphabet[first_word[j]] > alphabet[second_word[j]]:
                    return False
                elif j == (len(min_word) - 1) and len(first_word) > len(min_word):
                    return False
        return True
