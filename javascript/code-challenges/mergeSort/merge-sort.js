'use strict';

function mergeSort(arr){
  let n = arr.length;

  if(n>1){
    let middle = Math.floor((n/2)) ;
    let left = [];
    for(let i = 0; i < middle; i++){
      left.push(arr[i]);
    }
    let right = [];
    for(let i = middle; i < n; i++){
      right.push(arr[i]);
    }
    mergeSort(left);
    mergeSort(right);
    merge(left,right,arr);
  }
  return arr;
  //do thing here
}
function merge(left,right,arr) {
  let i=0;
  let j=0;
  let k=0;

  while((i < left.length) && (j< right.length)){
    if(left[i] <= right[j]){
      arr[k] = left[i];
      i = i +1;
    } else {
      arr[k] = right[j];
      j = j+1;

    }
    k = k+1;
  }
  if(i === left.length){
    arr[k]=right[j];
    k=k+1;
  }
  else{
    arr[k]=left[i];
    k=k+1;
  }
}

let newArr = [2,4,22,1,4,3];

console.log(mergeSort(newArr));

module.exports = mergeSort;
