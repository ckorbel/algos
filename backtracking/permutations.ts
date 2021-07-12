// current: [] rest: [1, 2, 3]
// current: [1] rest: [, 2, 3]
// current: [1, 2] rest: [3]
// current: [1, 2, 3] rest: []

function permute(nums: number[]): number[][] {
  const result = [];
  if (nums.length === 0) return result;

  function backTrack(current, rest): void {
    if (rest.length === 0) {
      result.push(current);
      return;
    }
    for (let i = 0; i < rest.length; i++) {
      console.log({
        current: [...current, rest[i]],
        rest: [...rest.slice(0, i), ...rest.slice(i + 1)],
      });
      backTrack(
        [...current, rest[i]],
        [...rest.slice(0, i), ...rest.slice(i + 1)]
      );
    }
  }

  backTrack([], nums);

  return result;
}

// console:
// { current: [ 1 ], rest: [ 2, 3 ] }
// { current: [ 1, 2 ], rest: [ 3 ] }
// { current: [ 1, 2, 3 ], rest: [] }
// { current: [ 1, 3 ], rest: [ 2 ] }
// { current: [ 1, 3, 2 ], rest: [] }
// { current: [ 2 ], rest: [ 1, 3 ] }
// { current: [ 2, 1 ], rest: [ 3 ] }
// { current: [ 2, 1, 3 ], rest: [] }
// { current: [ 2, 3 ], rest: [ 1 ] }
// { current: [ 2, 3, 1 ], rest: [] }
// { current: [ 3 ], rest: [ 1, 2 ] }
// { current: [ 3, 1 ], rest: [ 2 ] }
// { current: [ 3, 1, 2 ], rest: [] }
// { current: [ 3, 2 ], rest: [ 1 ] }
// { current: [ 3, 2, 1 ], rest: [] }
