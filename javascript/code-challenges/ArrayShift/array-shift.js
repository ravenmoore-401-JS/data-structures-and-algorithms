'use strict';
let testArr = [1, 2, 3, 4];
let testNum = 0;
function insertShiftArray(arr, num) {

  // find middle of array indexes
  let middleIndex = Math.ceil(arr.length / 2);
  // set new array
  let newArr = [];
  // fill new array with first half of original array
  // add new value at middle index
  // fill second half of new array with remaining original array values.
  for (let i = 0; i < arr.length; i++) {
    if (i < middleIndex) {
      newArr[newArr.length] = arr[i];
    } else if (i === middleIndex) {
      newArr[newArr.length] = num;
      newArr[newArr.length] = arr[i];
    } else if ( i > middleIndex) {
      newArr[newArr.length] = arr[i];
    }
  }
  // print new array
  console.log(newArr);
}
insertShiftArray(testArr, testNum);