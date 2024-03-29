var combinationSum = function (candidates, target) {
  let res = [];
  let dfs = function (target, combine, idx) {
    if (idx === candidates.length) return;
    if (target === 0) {
      res.push(combine);
      return;
    }
    dfs(target, combine, idx + 1);
    if (target - candidates[idx] >= 0) {
      dfs(target - candidates[idx], [...combine, candidates[idx]], idx);
    }
  };
  dfs(target, [], 0);
  return res;
};

console.log(combinationSum([2, 3, 6, 7], 7));
