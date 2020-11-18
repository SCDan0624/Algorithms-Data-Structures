// Time complexity O(N) Space O(1)

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

sumZero([-3, -2, -1, 0, 1, 2, 3]); // [-3,3]

/*
How it works:

left will start at arr[0], right at the end of the array
 and you keep comparing numbers (using the if/else if conditions) 
 until you go through the entire array
*/
