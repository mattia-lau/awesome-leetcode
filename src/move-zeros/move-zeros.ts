// https://leetcode.com/problems/move-zeroes/

/* eslint-disable no-param-reassign */
export const moveZeroes = (nums: number[]): void => {
  let j = 0;

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] !== 0 && nums[j] === 0) {
      const temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
    }

    if (nums[j] !== 0) {
      j += 1;
    }
  }
};
