import { twoPointer, burstForce } from '@awesome-leetcode/two-sum/two-sum';

const testcases = [
  {
    question: [2, 7, 11, 15],
    target: 9,
    answer: true,
  },
  {
    question: [-10, 10, 20, 25, 30, 40],
    target: 45,
    answer: true,
  },
  {
    question: [-10, 10, 20, 25, 30, 40],
    target: 99,
    answer: false,
  },
];

describe('Two sum', () => {
  describe('Two Pointer', () => {
    test.each(testcases)('%s', ({ question, target, answer }) => {
      const result = twoPointer(question, target);

      expect(result).toEqual(answer);
    });
  });

  describe('Burst Force', () => {
    test.each(testcases)('%s', ({ question, target, answer }) => {
      const result = burstForce(question, target);

      expect(result).toEqual(answer);
    });
  });
});
