import { reverseString } from '@awesome-leetcode/reverse-string/reverse-string';

const testcases = [
  {
    s: ['h', 'e', 'l', 'l', 'o'],
    answer: ['o', 'l', 'l', 'e', 'h'],
  },
  {
    s: ['H', 'a', 'n', 'n', 'a', 'h'],
    answer: ['h', 'a', 'n', 'n', 'a', 'H'],
  },
];

describe('Reverse String', () => {
  test.each(testcases)('%s', ({ s, answer }) => {
    reverseString(s);
    expect(s).toEqual(answer);
  });
});
