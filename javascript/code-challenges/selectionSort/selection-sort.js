'use strict';

function selectionSort(arr){
  console.log(arr);
  for(let i = 1; i < arr.length;i++){
    console.log(i, arr[i]);
    let j = i-1;
    let temp = arr[i];
    while((j >= 0) && (temp < arr[j]) ){
      arr[j+1] = arr[j];
      j = j-1;
    }
    arr[j +1] = temp;
  }
  return arr;

}


let newArr = [2,4,22,1,4,3];

console.log(selectionSort(newArr));

module.exports = selectionSort;
