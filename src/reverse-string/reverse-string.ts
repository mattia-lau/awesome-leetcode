/**
 * https://leetcode.com/problems/rotate-array/
 * Time complexity O(n)
 * Space complexity O(n)
 */
/* eslint-disable no-param-reassign */
export const reverseString = (s: string[]) => {
  let i = 0;
  let j = s.length - 1;
  for (i = 0; i < s.length / 2; i += 1) {
    const temp = s[j];
    s[j] = s[i];
    s[i] = temp;
    j -= 1;
  }
};
