import { search } from '@awesome-leetcode/binary-search/binary-search';

const testcases = [
  {
    nums: [-1, 0, 3, 5, 9, 12],
    target: 9,
    answer: 4,
  },
  {
    nums: [-1, 0, 3, 5, 9, 12],
    target: 2,
    answer: -1,
  },
];

describe('Binary search', () => {
  test.each(testcases)('%s', ({ nums, target, answer }) => {
    const result = search(nums, target);

    expect(result).toEqual(answer);
  });
});
