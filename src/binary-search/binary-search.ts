// https://leetcode.com/problems/binary-search/

const binarySearch = (
  nums: number[],
  target: number,
  l: number,
  r: number,
): number => {
  if (l > r) return -1;

  const mid = Math.floor((l + r) / 2);

  if (nums[mid] > target) {
    return binarySearch(nums, target, l, mid - 1);
  }

  if (nums[mid] < target) {
    return binarySearch(nums, target, mid + 1, r);
  }

  return mid;
};

export const search = (nums: number[], target: number): number =>
  binarySearch(nums, target, 0, nums.length - 1);
