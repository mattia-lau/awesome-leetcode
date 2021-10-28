import { moveZeroes } from '@awesome-leetcode/move-zeros/move-zeros';

const testcases = [
  {
    question: [0, 1, 0, 3, 12],
    answer: [1, 3, 12, 0, 0],
  },
  {
    question: [0],
    answer: [0],
  },
];

describe('Move Zeros', () => {
  test.each(testcases)('%s', ({ question, answer }) => {
    moveZeroes(question);
    expect(question).toEqual(answer);
  });
});
