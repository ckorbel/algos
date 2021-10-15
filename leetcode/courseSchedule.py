# Input: numCourses = 2, prerequisites = [[1,0]]
# Output: true
# Explanation: There are a total of 2 courses to take.
# To take course 1 you should have finished course 0. So it is possible.

# DFS problem
# adjancency list:
#  course_1: [list of preq]
# base case is course with not preqs: course_1: []

class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        preMap = {i: [] for i in range(numCourses)}
        for course, prerequisite in prerequisites:
            preMap[course].append(prerequisite)

        visited = set()

        def dfs(current_course):
            if current_course in visited:
                return False
            if preMap[current_course] == []:
                return True

            visited.add(current_course)
            for prerequisite in preMap[current_course]:
                if not dfs(prerequisite):
                    return False
            visited.remove(current_course)
            preMap[current_course] = []
            return True

        for course in range(numCourses):
            if not dfs(course):
                return False
        return True
