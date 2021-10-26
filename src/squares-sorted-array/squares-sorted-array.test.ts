import { sortedSquares } from '@awesome-leetcode/squares-sorted-array/squares-sorted-array';

const testcases = [
  {
    nums: [-4, -1, 0, 3, 10],
    answer: [0, 1, 9, 16, 100],
  },
  {
    nums: [-7, -3, 2, 3, 11],
    answer: [4, 9, 9, 49, 121],
  },
];

describe('Squares of a Sorted Array', () => {
  test.each(testcases)('%s', ({ nums, answer }) => {
    const result = sortedSquares(nums);
    expect(result).toEqual(answer);
  });
});
