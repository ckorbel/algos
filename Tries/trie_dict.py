class TrieNode:
    def __init__(self, char=None):
        self.char = char
        self.is_end = False
        self.children = {}


class Trie:
    def __init__(self):
        self.root = TrieNode("")

    def insert(self, word):
        current = self.root
        for letter in word:
            if letter in current.children:
                # traverse without adding letter
                current = current.children[letter]
            else:
                # create new child key
                current.children[letter] = TrieNode(letter)
                # travse
                current = current.children[letter]
        current.is_end = True

    # returns true if full word exists in trie
    def search(self, word):
        current = self.root
        for letter in word:
            if letter in current.children:
                current = current.children[letter]
            else:
                print(current)
                return False
        return current.is_end

    def get_last_node(self, word):
        current = self.root
        for letter in word:
            if letter in current.children:
                current = current.children[letter]
            else:
                return None
        return current

    # return true is prefix could potentially exist
    def start_with(self, prefix):
        node = self.get_last_node(prefix)
        if node is not None:
            return True
        else:
            return False


# driver function
keys = ["the", "a", "there", "any", "by", "their"]
t = Trie()
for key in keys:
    t.insert(key)

print(t.search("thz"))
print(t.search("the"))
print(t.start_with("thei"))  # should return True


# print(t.search("the"))
# print(t.search("thz"))
