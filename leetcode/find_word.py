class TrieNode:
    def __init__(self, char=None):
        self.char = char
        self.is_word = False
        self.children = {}


class Trie:
    def __init__(self):
        self.root = TrieNode("")

    def insert_word(self, word):
        current_node = self.root
        for char in word:
            if char in current_node.children:
                current_node = current_node.children[char]
            else:
                current_node.children[char] = TrieNode(char)
                current_node = current_node.children[char]
        current_node.is_word = True


class Solution:
    def __init__(self):
        self.found_words = []

    def breadth_search(self, board, i, j, trie_node, word):
        if i >= len(board) or i < 0 or j >= len(board[i]) or j < 0 or board[i][j] not in trie_node.children:
            return
        else:
            current_trie_node = trie_node.children[board[i][j]]
            word += board[i][j]
            if current_trie_node.is_word:
                self.add_to_found_words(word)
            self.breadth_search(board, i - 1, j, current_trie_node, word, seen)
            self.breadth_search(board, i + 1, j, current_trie_node, word, seen)
            self.breadth_search(board, i, j - 1, current_trie_node, word, seen)
            self.breadth_search(board, i, j + 1, current_trie_node, word, seen)

    def add_to_found_words(self, new_word):
        # check for dups
        for word in self.found_words:
            if new_word == word:
                return
        self.found_words.append(new_word)

    def findWords(self, board, words):
        trie = Trie()
        for word in words:
            trie.insert_word(word)

        for i in range(len(board)):
            for j in range(len(board[i])):
                if board[i][j] in trie.root.children:
                    self.breadth_search(board, i, j, trie.root, "")
        print(self.found_words)
        return self.found_words


sol = Solution()
board = [["o", "a", "a", "n"], ["e", "t", "a", "e"],
         ["i", "h", "k", "r"], ["i", "f", "l", "v"]]
sol.findWords(board, ["oath", "pea", "eat", "rain"])
