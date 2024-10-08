// Chapter 1 Exercises

// Exercise 1.1
console.log("Exercise 1.1:");
console.log(" 1.) ", 10);
// 10

console.log(" 2.) ", 5 + 3 + 4);
// 12

console.log(" 3.) ", 9 - 1);
// 8

console.log(" 4.) ", 6 / 2);
// 3

console.log(" 5.) ", 2 * 4 + (4 - 6));
// 6

const a = 3;
console.log(" 6.) ", a);
// 3

const b = a + 1;
console.log(" 7.) ", b);
// 4

console.log(" 8.) ", a + b + a * b);
// 19

console.log(" 9.) ", a === b);
// false

console.log("10.) ", b > a && b < a * b ? b : a);
// 4

console.log("11.) ",
    a === 4
    ? 6
    : b === 4
    ? 6 + 7 + a
    : 25
);
// 16

console.log("12.) ", 2 + (b > a ? b : a));
// 6

console.log("13.) ",
    (
        a > b
        ? a
        : a < b
        ? b
        : -1
    ) * (a + 1)
);
// 16

console.log("-".repeat(80), "\n");

// Exercise 1.2
console.log("Exercise 1.2:")
let expr = (5 + 4 + (2 - (3 - (6 + (4 / 5))))) / (3 * (6 - 2) * (2 - 7));
console.log(expr);

console.log("-".repeat(80), "\n");

// Exercise 1.3
console.log("Exercise 1.3:")
function square(x) {
    return x * x;
}

function sum_of_squares(x, y) {
    return square(x) + square(y);
}

function f(x, y, z) {
    if (x <= y && x <= z) {
        return sum_of_squares(y, z);
    } else if (y <= x && y <= z) {
        return sum_of_squares(x, z);
    } else {
        return sum_of_squares(x, y);
    }
}

console.log("f(2, 2, 2): ", f(2, 2, 2));
// 8

console.log("f(2, 8, 16): ", f(2, 8, 16));
// 320

console.log("f(8, 2, 16): ", f(8, 2, 16));
// 320

console.log("f(16, 8, 2): ", f(16, 8, 2));
// 320

console.log("-".repeat(80), "\n");

// Exercise 1.4
console.log("Exercise 1.4:")

function plus(a, b) { return a + b; }
function minus(a, b) { return a - b; }
function a_plus_abs_b(a, b) {
    return (b >= 0 ? plus : minus)(a, b);
}

// a_plus_abs_b will return the evaluted valued of plus(a, b) when b >= 0
// or the evaluted value of minus(a, b) when b < 0
// which will evalute to the same resultant value of a + |b|
// (e.g. 1 + 2 === 1 - -2)

console.log("a_plus_abs_b(1, 2): ", a_plus_abs_b(1, 2));
// 3

console.log("a_plus_abs_b(1, -2): ", a_plus_abs_b(1, -2));
// 3

console.log("-".repeat(80), "\n");

// Exercise 1.5
function p() { return p(); }

function test(x, y) {
    return x === 0 ? 0 : y;
}

// test(0, p());

// With an interpreter that uses applicative-order evaluation, all arguments are fully
// evaluted BEFORE the calling function is applied to their values. In this case, the
// call to `test(0, p())` will not terminate (at least until a stack overflow occurs)
// since p() calls itself recursively without a base case.
//
// With an interpreter that uses normal-order evaluation, the
// call to `test(0, p())` will return 0, since the interpreter will
// evaluate the leftmost argument fully, first. In this case, since the first
// argument is 0, the true branch of the conditional statement returns 0, and p() is never
// evaluated, preventing 
