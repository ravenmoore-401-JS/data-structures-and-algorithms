# Array Binary Search

<!-- Short summary or background information -->

## Challenge
 write a function that takes a sorted array and a value. and returns the index of that vaue in the array useing binary search protocall.


## Approach & Efficiency

take in array with items in order and a target value.



find the middle index of the array and compare the "target value" to value @ middle index



if the value at middle index equals "target Value" then return index

if the value at middle index is greater than the "target value" find  a new middle index of the upper half of the current target range  and start compare loop again.

if the value at middle index is greater than the "target value" find a new middle index of the lower half of the current target range and start compare loop again.

If no match return -1 as a fail.

## Solution
<!-- Embedded whiteboard image -->
![whiteboard](../assets/CC3-whiteboard.jpg)
[code](./array-binary-search.js)
