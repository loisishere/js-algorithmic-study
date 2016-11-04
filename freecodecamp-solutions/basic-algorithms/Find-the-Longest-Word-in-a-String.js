//The time and space complexity
function findLongestWord(str) {
    var new_str = str.split(" ");
    var long_word = 1;
    for (var i = 0; i < new_str.length; i++) {
        if (long_word < new_str[i].length) {
            long_word = new_str[i].length;
        }
    }
    return long_word;
}