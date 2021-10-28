// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

export const twoSum = (input: number[], target: number): number[] => {
  let i = 0;
  let j = input.length - 1;
  for (;;) {
    if (input[i] + input[j] === target) {
      break;
    }

    if (input[i] + input[j] > target) {
      j -= 1;
    } else {
      i += 1;
    }
  }

  return [i + 1, j + 1];
};
