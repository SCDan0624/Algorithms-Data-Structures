/* 
Given two strings, write a function to determine 
if the second string is an anagram of the first

An anagram is a word, phrase, or name 
formed by rearranging the letters of another, such
as cinema, formed from iceman

example

validAnagram('anagram', 'nagaram') // true
validAnagram('rat', 'car') // false
*/

function validAnagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }

  let lookup = {};

  for (let i = 0; i < string1.length; i++) {
    let letter = string1[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < string2.length; i++) {
    let letter = string2[i];
    // can't find letter or letter is zero then it is not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

/* 
  validAnagram('rat', 'car') // false
  
  1st loop
  i = 0 letter = r, lookup = {r:1},
  i = 1, letter = a, lookup = {r:1,a:1}
  i = 2, letter = t, lookup = {r:1,a:1,t:1}
  1st loop ends
  
  2nd loop
  i = 0, letter = c, lookup[letter] = c?, No returns false
  */

validAnagram("anagram", "nagaram"); // true
validAnagram("rat", "car"); // false
