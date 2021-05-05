// think of this as node in a tree
// bfs is the way to go instead of dfs

// "hit"  ['h', 'i', 't']
// "cog"
// ["hot","dot","dog","lot","log","cog"]

// see leetcode to optimize with pre-processing ie *og, d*g, do*

function ladderLength(
  beginWord: string,
  endWord: string,
  wordList: string[]
): number {
  let steps: number = 1;
  let queue: string[] = [beginWord];
  const dict = new Set(wordList);
  const seen = new Set(queue);

  // bfs
  while (queue.length) {
    const next = [];
    for (let word of queue) {
      if (word === endWord) {
        return steps;
      }

      // convert to array in order to mutate
      const arr = word.split("");
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < 26; j++) {
          arr[i] = String.fromCharCode(97 + j); // checks whole alphabet
          // convert back to string
          const newString = arr.join("");
          // if it exists in word bank and does not exist in seen hash set add to queue
          if (!seen.has(newString) && dict.has(newString)) {
            next.push(newString);
            seen.add(newString);
          }

          // resets to original character if matching character not found
          arr[i] = word[i];
        }
      }
    }
    // using re-assignment instead of .shift() allows for constant time 0(1)
    // so that queue items do not need to re-index 0(n) this saves the boiler plate code of implementing a linked list
    queue = next;
    steps++;
  }

  return 0;
}
