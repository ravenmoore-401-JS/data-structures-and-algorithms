const binarySearch = (array,val) => {
  let start = 0;
  let end = array.length -1;

  while (start <= end){
    let middle = Math.floor((start + end)/2);

    if(val === array[middle]){
      console.log(`found the search value at ${middle}`)
    }
    if(val > array[middle]){
      console.log(`looking right`);
      start = middle++;
    }
    if(val < array[middle]){
      console.log('searching left');
      end = middle--;
    }
    else{
      console.log('target value not in this pass trying again')
    }
  }
  console.log('no match found');
};

let testArr =[1,2,4,5,6,7,9,10];
let testVal = 4;

binarySearch(testArr, testVal);
