## SUB ARRAY SUM

The maximum sum subarray problem consists of finding the maximum sum of any sequence of consecutive numbers in an array or list of integers.

When the list is made up of only positive numbers then the maximum sum is simply the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

An empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.


If a list contains positive and negative numbers then you will need to work out which subsequence can be added together to give the highest total. (note: this may include only a small section of the numbers in the initial array)

## Examples

`subArrSum([-2, 1, -3, 4, -1, 2, 1, -5, 4])`
// returns `6` which is the sum of: `[4, -1, 2, 1]`;

`subArrSum([9, 8, 7, -3, 6, 5, 4, -3, 2, 1])`
// returns `36` which is the sum of: `[9, 8, 7, -3, 6, 5, 4]`;

`subArrSum([5, -6, 2, 9, -4, -3, 8, -10, 20])`
// returns `22` which is the sum of: `[2, 9, -4, -3, 8, -10, 20]`;
