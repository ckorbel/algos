class Solution:
    def find_word(self, board, word, i, j, count):
        if count == len(word): 
            return True
        
        if i < 0 or i >= len(board) or j < 0 or j >= len(board) or board[i][j] != word[count]:
            return False
        
        temp = board[i][j]
        
        found = (self.find_word(board, word, i + 1, j, count + 1) or 
                self.find_word(board, word, i, j + 1, count + 1) or 
                self.find_word(board, word, i - 1, j, count + 1) or 
                self.find_word(board, word, i, j - 1, count + 1)):
        
        board[i][j] = temp
        return found
        
    
    def exist(self, board: List[List[str]], word: str) -> bool:
        for i in range(len(board)):
            for j in range(len(board[i])):
                if board[i][j] == word[0] and self.find_word(board, word, i, j, 0):
                    return True
        return False