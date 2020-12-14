// Time Complexity - O(N)
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;

  for (let i = 0; i < arr.length; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {}
}

// maxSubarraySum([2,6,9,2,1,8,5,6,3],3)
