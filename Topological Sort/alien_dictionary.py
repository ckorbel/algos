# Alien Dictionary topological sport


class Solution:
    def alienOrder(self, words: List[str]) -> str:
        #create a graph as adjacency list
        adj = { char:set() for word in words for char in word }

        # create edges of the graph
        for i in range(len(words) - 1):
            word1, word2 = words[i], words[i + 1]
            min_length = min(len(word1), len(word2))
            if len(word1) > len(word2) and word1[:min_length] == word2[:min_length]:
                return ""
            for j in range(min_length):
                if word1[j] != word2[j]: 
                    adj[word1[j]].add(word2[j])
                    break
        
        visit = {}
        result = []

        def dfs(char):
            if char in visit:
                return visit[char]
            visit[char] = True

            for neighbor in adj[char]: 
                if dfs(neighbor):
                    return True
            visit[char] = False
            result.append(char)
        
        # check for cycles if there is a cycle dictionary is invalid so return ""
        for char in adj: 
            if dfs(char): 
                return ""
        result.reverse()
        return "".join(result)