// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n.
// If that value has more than one digit,
// continue reducing in this way until a single-digit number is produced.
// The input will be a non-negative integer.

const DIGIT_NUMBER = 10;

function digital_root(num: number): number {
    if (num < DIGIT_NUMBER) {
        return num;
    }

    const digits = num.toString().split('').map(Number);

    const sum = digits.reduce((acc, digit) => acc + digit, 0);

    return digital_root(sum);
}

console.log(digital_root(16));
console.log(digital_root(942));
console.log(digital_root(132189));
console.log(digital_root(493193));
