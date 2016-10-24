var dec_to_bin = function(num) {
    var s = '';
    if (num < 2) {
        return num;
    }
    while (num > 0) {
        s += (num % 2);
        num = Math.round(num / 2);
    }
    //  return s;
}