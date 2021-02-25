var leastInterval = function (tasks, n) {
  if (n === 0) return tasks.length;
  const frequencyMap = new Array(26).fill(0);
  for (let task of tasks) {
    // charCodeAt(0) - 65 can map to numeric value A = 0, Z = 25
    // good trick to remember otherwise you'd need to create Frequency HashMap => convert to priority queue => ensure its sorted in order
    frequencyMap[task.charCodeAt(0) - 65] += 1;
  }

  // sort in reverse order
  // because frequencyMap is capped at 26 as a constant
  // sorting is as big of a worry because it the sorting doesn't scale in relation to the input
  frequencyMap.sort((a, b) => b - a);

  // -1 because : [A, A, A] => A idle idle A idle idle A => done ===>  2 * 2 = 4 instead of 3 * 2
  const maxValue = frequencyMap[0] - 1;
  // calculates max potential idles so if n = 2 and task = [A, A, A, B] =>
  // A, B, idle, A, idle, idle, A what you can do is just count worst case scenario of Max value by
  // then decrement that by each task so you end with either numberOfTaks.length or numberOfTask.length + idleTasks
  let idleSlots = maxValue * n;
  for (let i = 1; i < frequencyMap.length; i++) {
    // if 0 doesnt help against potential idle spaces
    if (frequencyMap[i] === 0) {
      break;
    }

    // addresses the edge case of mulitple slots equal to max [AAA BBB] => [3, 3, 0, 0]
    idleSlots -= Math.min(frequencyMap[i], maxValue);
  }

  if (idleSlots > 0) {
    return tasks.length + idleSlots;
  }

  return tasks.length;
};
