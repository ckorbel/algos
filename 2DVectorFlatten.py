# Input
# ["Vector2D", "next", "next", "next", "hasNext", "hasNext", "next", "hasNext"]
# [[[[1, 2], [3], [4]]], [], [], [], [], [], [], []]
# Output
# [null, 1, 2, 3, true, true, 4, false]

# Explanation
# Vector2D vector2D = new Vector2D([[1, 2], [3], [4]]);
# vector2D.next();    // return 1
# vector2D.next();    // return 2
# vector2D.next();    // return 3
# vector2D.hasNext(); // return True
# vector2D.hasNext(); // return True
# vector2D.next();    // return 4


#recursive solution
class Vector2D:
    def __init__(self, vec: List[List[int]]):
        self.flat_list = deque()
        self.flatten(vec)

    def next(self) -> int:
        return self.flat_list.popleft()   

    def hasNext(self) -> bool:
        return len(self.flat_list) > 0

    def flatten(self, vec): 
        for item in vec:
            if type(item) is list:
                self.flatten(item)
            else:
                self.flat_list.append(item)


# iterative solution constant space
class Vector2D:
    def __init__(self, vec: List[List[int]]):
        self.vec = vec
        self.row = 0
        self.col = 0
        

    def next(self) -> int:
        while self.hasNext():
            result = self.vec[self.row][self.col]
            self.col += 1
            if len(self.vec[self.row]) == self.col:
                self.row += 1
                self.col = 0
            return result
        

    def hasNext(self) -> bool:
        while self.row < len(self.vec) and len(self.vec[self.row]) == 0: 
            self.row +=1
            self.col = 0
        return self.row < len(self.vec)