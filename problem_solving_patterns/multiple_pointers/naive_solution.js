/*
Example

    Write a function called sumZero which accepts a sorted array of integers. 
    This function should find the first pair where the sum is 0.

    Return an array that includes both values that 
    sum to zero or undefined if a pair does not
    exist.

sumZero([-3,-2,-1,0,1,2,4]) // [-3,3]
sumZero([-2,0,1,3]) // undefined
sumZero([1,2,3]) // undefined

*/ j++;

function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

// Time Complexity - 0(N^2) Space - 0(1)

/*
How it works:
sumZero([-3,-2,-1,0,1,2,4]) // [-3,3]

First loop starts at -3 second loop then starts at -2 and checks
if adding both numbers = 0;

If false then the second loops goes on to -1 and continues the cycle
all the way until the end of the array.
*/
