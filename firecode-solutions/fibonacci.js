/** From: http://www.geeksforgeeks.org/program-for-nth-fibonacci-number/
 * recursion
 * Time Complexity: T(n) = T(n-1) + T(n-2) which is exponential.
We can observe that this implementation does a lot of repeated work (see the following recursion tree). So this is a bad implementation for nth Fibonacci number.
Extra Space: O(n) if we consider the function call stack size, otherwise O(1).
 */
var fib = function(n) {
    if (n <= 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}

/**
 * Use Dynamic Programming
 * Time Complexity: O(n)
Extra Space: O(n)
 */
var fib = function(n) {
    var arr = [0, 1],
        i = 2;
    if (n <= 1) {
        return n;
    }
    for (; i <= n; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr[n];
}

/**
 * Space Optimized
 * Time Complexity: O(n)
Extra Space: O(1)
 */
var fib = function(n) {
    var a = 0,
        b = 1,
        i = 2,
        c;
    if (n == 0) {
        return a;
    }
    for (; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}