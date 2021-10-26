// https://leetcode.com/problems/squares-of-a-sorted-array/

// A[i] + A[j] > X, j--
// A[i] + A[j] < X, i++
export const sortedSquares = (nums: number[]): number[] => {
  const result = new Array(nums.length);

  const { length } = nums;

  let left = 0;
  let right = length - 1;

  for (let i = length - 1; i >= 0; i -= 1) {
    if (Math.abs(nums[left]) > nums[right]) {
      result[i] = nums[left] ** 2;
      left += 1;
    } else {
      result[i] = nums[right] ** 2;
      right -= 1;
    }
  }

  return result;
};
