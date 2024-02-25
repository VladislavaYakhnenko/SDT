// Create a function that takes a positive integer
// and returns the next bigger number
// that can be formed by rearranging its digits.

function nextBigger(num: number): number {
    const digits = toDigitsArray(num);

    const pivotIndex = findPivotIndex(digits);
    if (pivotIndex === -1) {
        return -1;
    }

    const nextGreaterIndex = findNextGreaterIndex(digits, pivotIndex);

    swap(digits, pivotIndex, nextGreaterIndex);
    sortDigits(digits, pivotIndex + 1);

    return toNumber(digits);
}

function toDigitsArray(num: number): number[] {
    return num.toString().split('').map(Number);
}

function findPivotIndex(digits: number[]): number {
    for (let i = digits.length - 2; i >= 0; i--) {
        if (digits[i] < digits[i + 1]) {
            return i;
        }
    }

    return -1;
}

function findNextGreaterIndex(digits: number[], pivotIndex: number): number {
    const pivot = digits[pivotIndex];
    for (let i = digits.length - 1; i > pivotIndex; i--) {
        if (digits[i] > pivot) {
            return i;
        }
    }

    return -1;
}

function swap(arr: number[], i: number, j: number): void {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

function sortDigits(digits: number[], start: number): void {
    const sortedDigits = digits.slice(start).sort((a, b) => a - b);
    digits.splice(start, sortedDigits.length, ...sortedDigits);
}

function toNumber(digits: number[]): number {
    return parseInt(digits.join(''));
}

console.log(nextBigger(12));
console.log(nextBigger(513));
console.log(nextBigger(2017));
console.log(nextBigger(9));
console.log(nextBigger(111));
console.log(nextBigger(531));
