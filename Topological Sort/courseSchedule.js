/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false

    1 -> 0
    0 -> 1

    dfs 
    check for cycles
    if DAG 
    return true

 */
var canFinish = function (numCourses, prerequisites) {
  // create adj list graph
  const preMap = {};

  for (let i = 0; i < prerequisites.length; i++) {
    const [course, preReq] = prerequisites[i];
    if (!(course in preMap)) {
      preMap[course] = [preReq];
    } else {
      preMap[course].push(preReq);
    }
  }

  console.log({ preMap });
  const visited = {};
  function dfs(course) {
    if (course in visited) return false;

    if (course in preMap) {
      if (preMap[course].length === 0) return true;

      visited[course] = true;

      for (const neighbor of preMap[course]) {
        // checks for cycles
        if (!dfs(neighbor)) return false;
      }

      delete visited[course];
      preMap[course] = [];
      return true;
    }

    return true;
  }

  for (const course in preMap) {
    if (!dfs(course)) return false;
  }

  return true;
};
