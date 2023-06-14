var findSmallestSetOfVertices = function (n, edges) {
  const indegrees = new Array(n).fill(0);
  for (const [u, v] of edges) {
    indegrees[v]++;
  }
  const ans = [];
  for (let i = 0; i < n; i++) {
    if (indegrees[i] === 0) {
      ans.push(i);
    }
  }
  return ans;
};

// Time Complexity: O(N + E)

// Space Complexity: O(N + E)

// N: number of vertices

console.log(
  findSmallestSetOfVertices(6, [
    [0, 1],
    [0, 2],
    [2, 5],
    [3, 4],
    [4, 2],
  ])
);

console.log(
  findSmallestSetOfVertices(5, [
    [0, 1],
    [2, 1],
    [3, 1],
    [1, 4],
    [2, 4],
  ])
);
