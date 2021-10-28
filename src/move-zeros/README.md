if i is non-zero and j is zero, swap.
if j is non zero, j += 1

```
[0, 1, 0, 3, 12]
```

1. i = 0, j = 0, skip
2. i = 1, j = 0, swap. [1,0,0,3,12], j now is non zero, j + 1
3. i = 2, j = 1, skip.
4. i = 3, j = 1, swap. [1,3,0,0,12], j now is non zero, j + 1
5. i = 4, j = 2, swap. [1,3,12,0,0], j now is non zero, j + 1
6. end
