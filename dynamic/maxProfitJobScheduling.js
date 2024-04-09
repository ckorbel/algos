/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function (startTime, endTime, profit) {
  // convert to array of objects:
  let times = [];
  for (let i = 0; i < startTime.length; i++) {
    times.push({
      startTime: startTime[i],
      endTime: endTime[i],
      profit: profit[i],
    });
  }

  // sort by start time
  times.sort((a, b) => a.startTime - b.startTime);
  let memo = {};

  function dfs(startIndex) {
    if (startIndex in memo) {
      return memo[startIndex];
    }
    if (startIndex >= times.length) {
      return 0;
    }

    let idx = startIndex;
    let take = times[startIndex];
    while (times[idx]?.startTime < take?.endTime) {
      idx++;
    }

    const takeProfit = take.profit + dfs(idx);

    // dont take

    const notTakeProfit = dfs(startIndex + 1);

    let result = Math.max(takeProfit, notTakeProfit);
    memo[startIndex] = result;
    return result;
  }
  return dfs(0);
};
