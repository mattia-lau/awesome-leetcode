import { searchInsert } from '@awesome-leetcode/search-insert-position/search-insert-position';

const testcases = [
  {
    nums: [1, 3, 5, 6],
    target: 5,
    answer: 2,
  },
  {
    nums: [1, 3, 5, 6],
    target: 2,
    answer: 1,
  },
  {
    nums: [1, 3, 5, 6],
    target: 7,
    answer: 4,
  },
  {
    nums: [1, 3, 5, 6],
    target: 0,
    answer: 0,
  },
  {
    nums: [1, 3, 5, 6],
    target: 0,
    answer: 0,
  },
  {
    nums: [1, 3, 5],
    target: 3,
    answer: 1,
  },
];

describe('Search Insert Position', () => {
  describe('Binary search', () => {
    test.each(testcases)('%s', ({ nums, target, answer }) => {
      const result = searchInsert(nums, target);

      expect(result).toEqual(answer);
    });
  });
});
