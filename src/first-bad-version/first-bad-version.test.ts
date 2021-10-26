import { solution } from '@awesome-leetcode/first-bad-version/first-bad-version';

const testcases = [
  {
    n: 5,
    bad: 4,
    answer: 4,
  },
  {
    n: 1,
    bad: 1,
    answer: 1,
  },
];

describe('First Bad Version', () => {
  describe('Binary search', () => {
    test.each(testcases)('%s', ({ n: question, bad, answer }) => {
      const isBadVersion = (n: number) => n >= bad;
      const result = solution(question, isBadVersion);

      expect(result).toEqual(answer);
    });
  });
});
