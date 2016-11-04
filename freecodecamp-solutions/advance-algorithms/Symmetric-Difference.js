/**
 * Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2,
 * 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).
 */

function sym(args) {
    var arr = Array.from(arguments);
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].filter(function(a, b, array) { return array.indexOf(a) == b; });
        for (var j = 0; j < arr[i].length; j++) {
            if (newArr.indexOf(arr[i][j]) === -1) {
                newArr.push(arr[i][j]);
            } else {
                newArr.splice(newArr.indexOf(arr[i][j]), 1);
            }
        }
    }
    return newArr;
}