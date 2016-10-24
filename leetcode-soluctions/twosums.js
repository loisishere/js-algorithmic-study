/*Brute Force
The brute force approach is simple. Loop through each element xx and find if there is another value that equals to target - xtarget−x.
Time complexity : O(n^2)O(n
​2
​​ ). For each element, we try to find its complement by looping through the rest of array which takes O(n)O(n) time. Therefore, the time complexity is O(n^2)O(n
​2
​​ ).

Space complexity : O(1)O(1).


*/
var twoSum = function(nums, target) {
    var i=0;
    for(;i<nums.length;i++){
        for(var j = i+1;j<nums.length;j++){
            if(target === (nums[i] + nums[j])){
                return [i,j]
            }
        }
    }
    return []
    
};
/**
 * Two-pass Hash Table
 * To improve our run time complexity, we need a more efficient way to check if the complement exists in the array. If the complement exists, we need to look up its index. What is the best way to maintain a mapping of each element in the array to its index? A hash table.

We reduce the look up time from O(n)O(n) to O(1)O(1) by trading space for speed. A hash table is built exactly for this purpose, it supports fast look up in near constant time. I say "near" because if a collision occurred, a look up could degenerate to O(n)O(n) time. But look up in hash table should be amortized O(1)O(1) time as long as the hash function was chosen carefully.

A simple implementation uses two iterations. In the first iteration, we add each element's value and its index to the table. Then, in the second iteration we check if each element's complement (target - nums[i]target−nums[i]) exists in the table. Beware that the complement must not be nums[i]nums[i] itself!


Complexity Analysis:

Time complexity : O(n)O(n). We traverse the list containing nn elements exactly twice. Since the hash table reduces the look up time to O(1)O(1), the time complexity is O(n)O(n).

Space complexity : O(n)O(n). The extra space required depends on the number of items stored in the hash table, which stores exactly nn elements.
 */

var twoSum = function(nums, target) {
    var newMap = new Map(), i=0,j=0;
    //= nums.map(function(x,i){ var a ={}; a[x] = i; return a}), i=0;
    for(;i<nums.length; i++){
        newMap.set(nums[i],i)
    }
    for (; j < nums.length; j++) {
        var diff = target - nums[j];
        if (newMap.has(diff) && newMap.get(diff) != j) {
            return [j, newMap.get(diff)];
        }
    }

};
/**
 * One-pass Hash Table
 * It turns out we can do it in one-pass. While we iterate and inserting elements into the table, we also look back to check if current element's complement already exists in the table. If it exists, we have found a solution and return immediately.
 * Complexity Analysis:

Time complexity : O(n)O(n). We traverse the list containing nn elements only once. Each look up in the table costs only O(1)O(1) time.

Space complexity : O(n)O(n). The extra space required depends on the number of items stored in the hash table, which stores at most nn elements.
 */

var twoSum = function(nums, target) {
    var i=0;
    for(;i<nums.length;i++){
        var diff = target - nums[i];
        if(nums.indexOf(diff) >-1 && diff != nums[i]){
            return [i,nums.indexOf(diff)]
        }
    }
};