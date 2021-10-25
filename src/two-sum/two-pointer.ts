// https://leetcode.com/problems/two-sum/

// A[i] + A[j] > X, j--
// A[i] + A[j] < X, i++
export const twoPointer = (input: number[], target: number): boolean => {
  let i = 0;
  let j = input.length - 1;
  while (i < j) {
    if (input[i] + input[j] > target) {
      j -= 1;
    } else if (input[i] + input[j] < target) {
      i += 1;
    } else if (input[i] + input[j] === target) {
      return true;
    }
  }

  return false;
};

export const burstForce = (input: number[], target: number): boolean => {
  const { length } = input;
  for (let i = 0; i < length; i += 1) {
    for (let j = 1; j < length; i += 1) {
      if (input[i] + input[j] === target) {
        return true;
      }
    }
  }

  return false;
};
