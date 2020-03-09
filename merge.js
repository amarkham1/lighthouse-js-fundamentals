function merge (arr1, arr2) {
  let resultArr = [];
  let i = 0;
  let j = 0;
  while(arr1[i] !== undefined || arr2[j] !== undefined) {
    console.log("arr1[" + i + "] is now " + arr1[i]);
    console.log("arr2[" + j + "] is now " + arr2[j]);
    if(arr1[i] <= arr2[j] || arr2[j] === undefined) {
      resultArr.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j] || arr1[i] === undefined) {
      resultArr.push(arr2[j]);
      j++;
    } 
  }
  return resultArr;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]));
console.log(merge([ 4 ], [ 2, 5, 8 ]));