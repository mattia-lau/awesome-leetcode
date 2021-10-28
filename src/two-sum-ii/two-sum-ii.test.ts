import { twoSum } from '@awesome-leetcode/two-sum-ii/two-sum-ii';

const testcases = [
  {
    question: [2, 7, 11, 15],
    target: 9,
    answer: [1, 2],
  },
  {
    question: [2, 7, 11, 15],
    target: 26,
    answer: [3, 4],
  },
  {
    question: [2, 3, 4],
    target: 6,
    answer: [1, 3],
  },
  {
    question: [-1, 0],
    target: -1,
    answer: [1, 2],
  },
];

describe('Two sum', () => {
  test.each(testcases)('%s', ({ question, target, answer }) => {
    const result = twoSum(question, target);

    expect(result).toEqual(answer);
  });
});
