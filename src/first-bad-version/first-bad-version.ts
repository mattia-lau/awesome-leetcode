// https://leetcode.com/problems/first-bad-version/

type IsBadVersion = (n: number) => boolean;

export const binarySearch = (
  l: number,
  r: number,
  isBadVersion: IsBadVersion,
) => {
  const mid = Math.floor((l + r) / 2);
  if (l > r) return l;

  if (isBadVersion(mid)) {
    return binarySearch(l, mid - 1, isBadVersion);
  }
  return binarySearch(mid + 1, r, isBadVersion);
};

export const solution = (n: number, isBadVersion: IsBadVersion) =>
  binarySearch(0, n, isBadVersion);
