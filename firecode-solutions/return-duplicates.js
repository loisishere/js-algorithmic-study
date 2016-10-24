//My solution for firecode
var duplicate_items = function(list_numbers) {
    var arr = [],
        i = 0;
    for (; i < list_numbers.length; i++) {
        for (var j = i + 1; j < list_numbers.length; j++) {
            if (list_numbers[i] == list_numbers[j]) {
                arr.push(list_numbers[j])
            }
        }
    }
    return arr;
}

/**
 * Interpreted solution from geeksforgeeks
 * Reference and details can be found here: http://www.geeksforgeeks.org/find-duplicates-in-on-time-and-constant-extra-space/
 * Find duplicates in O(n) time and O(1) extra space
 *  */
var duplicate_items = function(list_numbers) {
        var i = 0,
            arr = [];
        for (; i < list_numbers.length; i++) {
            if (list_numbers[Math.abs(list_numbers[i])] >= 0) {
                list_numbers[Math.abs(list_numbers[i])] = -list_numbers[Math.abs(list_numbers[i])];
            } else {
                if (arr.indexOf(Math.abs(list_numbers[i])) <= 0) {
                    arr.push(Math.abs(list_numbers[i]));
                }

            }
        }
        return arr;
    }
    //functional programming
var duplicate_items = function(list_numbers) {
    return list_numbers.sort().filter(function(x, y, arr) { return x == arr[y - 1] });
}