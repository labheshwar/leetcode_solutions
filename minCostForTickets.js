var mincostTickets = function (days, costs) {
  let dp = new Array(days[days.length - 1] + 1).fill(0);
  let set = new Set(days);
  for (let i = 1; i < dp.length; i++) {
    if (set.has(i)) {
      dp[i] = Math.min(
        dp[i - 1] + costs[0],
        dp[Math.max(0, i - 7)] + costs[1],
        dp[Math.max(0, i - 30)] + costs[2]
      );
    } else {
      dp[i] = dp[i - 1];
    }
  }
  return dp[dp.length - 1];
};

console.log(mincostTickets([1, 4, 6, 7, 8, 20], [2, 7, 15]));
console.log(
  mincostTickets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31], [2, 7, 15])
);
