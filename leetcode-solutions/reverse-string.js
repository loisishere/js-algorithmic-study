/**
 * Space Complexity: No additional space is required as we are just swapping the letters within the same array
Time Complexity: Order of this algorithm: O(n/2), where is ‘n’ is the length of the input array
O(2n) Complexity
We can use character array stack also to do this operation but to build the stack we need O(n) time and to dump the stack which print the char array in reverse order will take O(n) order.
 */
var reverseString = function(s) {
    var i = s.length - 1,
        str = '';
    for (; i >= 0; i--) {
        str += s[i];
    }
    return str;
};