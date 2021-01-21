# Template
<!--challenge source -->

## Challenge
<!-- Short summary or background information -->

take two hashmap tables and merge them one after annother into a new hash table.... i expanded this to streacht and get an array of hash tables and be able to do left and right.

## Approach & Efficiency
<!-- how i go to this and the big O -->
we will collect all of hash table n in order and apply it to a new hash table in a nested loop.

this has a time of O(n^2) due to the nested loops
and has a space of O(n) due to adding a n value to a new hashtable.

### --Tests--
<!-- list of test to write or to get to pass -->
run npm test to check tests

current tests:
can start a hashTable
can hash a key
can Add a key/value to your hashtable
creates a linked list
'Can successfully instantiate an empty tree
Can successfully return a collection from all traversals

## Solution
<!-- Link to img of whiteboard of solution -->
![whiteBoard]('./assets/CC-whiteboard.jpg');
