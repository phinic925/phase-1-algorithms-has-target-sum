function hasTargetSum(array, target) {
  // Write your algorithm here
let sum = [];

let hashTable = {};

for (let i=0; i<array.length; i++){
  let sumMinus= target-array[i];
  
  if (hashTable[sumMinus.toString()] !== undefined){
    sum.push([array[i]],sumMinus);
    return true;
    

  }
  hashTable[array[i].toString()] = array[i];
}
return false;
}
hasTargetSum([3, 8, 12, 4, 11, 7], 10);

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  check each element in array
  calculate S - current element
  check if this number exists in hash table
     if so then we found a pair of numbers that sum to target
     add the current number to the hash table
     return all pairs of integers that sum to target

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
