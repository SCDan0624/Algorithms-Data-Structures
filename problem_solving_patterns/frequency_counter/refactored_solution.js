// Time Complexity - O(n)

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

same([1, 2, 3, 2], [9, 1, 4, 4]);
/*
How it works:

   1) We create two objects that will have a key:value pair of number:frequency of number.

    frequencyCounter 1 = {
        1:1,
        2:2,
        3:1
    }

        frequencyCounter 2 = {
        1:1,
        4:2,
        9:1
    }

    2) We then compare the keys of the first object to the keys of the 2nd object.
    The keys of frequencyCounter 2 must be equal to keys of frequencyCounter 1 squared. 
*/
