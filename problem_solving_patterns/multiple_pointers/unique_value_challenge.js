/*
Implement a function called countUniqueValues, which accepts a sorted array,
and counts the unique values in the array.

There can be negative numbers in the array, but it will always be sorted

countUniqueValues([1,1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7


*/

// Time O(N)
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    console.log(i, j);
  }
  return i + 1;
}
countUniqueValues([1, 2, 2, 5, 7, 7, 99]);

/*
How it works

We create a loop that compares the first number in the arr i and the second number in the arr j

If both numbers are the same we move j up one index until the two numbers are not equal

Once the two numbers are not equal we:
    1) move i up one index
    2) change the new arr[i] to the same value as arr[j]
    3) because i and j are now equal j moves up one index

As we go through the loop i is counting the unique values

Once we finish the loop we return i + 1 to get the amount of unique values.
    1) We need to add 1 to i for the final count because i starts at 0.
*/
