/*
Given a sorted array of integers, 
write a function called search, 
that accepts a value and returns the index
where the value passed to the function is located.
If the value is not foundm return -1

search([1,2,3,4,5,6],4) // 3
search([1,2,3,4,5,6],6) // 5
search([1,2,3,4,5,6],11) // -1
*/

// Linear search

function search(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

// Time Complexity O(N)
