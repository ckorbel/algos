// Topological Sort

var alienOrder = function (words) {
  // create graph
  const adj = {};

  for (const word of words) {
    for (const char of word) {
      adj[char] = new Set();
    }
  }

  for (let i = 0; i < words.length - 1; i++) {
    const word1 = words[i];
    const word2 = words[i + 1];
    const minLength = Math.min(word1.length, word2.length);
    if (
      word1.length > word2.length &&
      word1.slice(0, minLength) === word2.slice(0, minLength)
    ) {
      return "";
    }

    for (let j = 0; j < minLength; j++) {
      if (word1[j] !== word2[j]) {
        adj[word1[j]].add(word2[j]);
        break;
      }
    }
  }

  const visited = {};
  const result = [];
  console.log(words);
  // search the graph

  function dfs(char) {
    if (char in visited) return visited[char];
    visited[char] = true;

    for (const neighbor of adj[char]) {
      if (dfs(neighbor)) return true;
    }
    visited[char] = false;
    result.push(char);
  }

  for (const char in adj) {
    if (dfs(char)) return "";
  }

  result.reverse();
  return result.join("");
};
