// A Trie is a tree data structure
// each node has a character A-Z
// each child node is also a character A-Z

// great fast lookup of word validation

class TrieNode {
  constructor(char = null) {
    this.char = char;
    this.isWord = false;
    this.children = {}; // could be an array to 27
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode(); // initialize root as null value
  }

  insertWord(word) {
    let currentNode = this.root;
    for (let i = 0; i < word.length; i++) {
      let char = word.charAt(i);
      if (!currentNode.children[char]) {
        // create child node
        currentNode.children[char] = new TrieNode(char);
        currentNode = currentNode.children[char];
      }
    }
    currentNode.isWord = true;
  }

  // return if the word is inside the trie
  search(word) {
    let node = this.getLastNode(word);
    return node !== null && node.isWord;
  }

  // checks if there's a word in true that starts with this prefix
  startsWith(prefix) {
    return this.getLastNode(prefix) !== null;
  }

  // helper
  getLastNode(word) {
    let currentNode = this.root;
    for (let i = 0; i < word.length; i++) {
      let char = word.charAt(i);
      console.log(char);
      if (!currentNode.children[char]) {
        return null;
      } else {
        currentNode = currentNode.children[char];
      }
    }
    return currentNode;
  }
}

const trie = new Trie();
trie.insertWord("cat");
// console.log(trie.root.children.c.children.a);
trie.search("ca"); // should be false
trie.startsWith("ca"); // should return true
