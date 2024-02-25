// Create a function that takes a positive integer
// and returns the next bigger number
// that can be formed by rearranging its digits.

function next_bigger(num: number): number {
    const digits = to_digits_array(num);

    const pivotIndex = find_pivot_index(digits);
    if (pivotIndex === -1) {
        return -1;
    }

    const nextGreaterIndex = find_next_greater_index(digits, pivotIndex);

    swap(digits, pivotIndex, nextGreaterIndex);
    sort_digits(digits, pivotIndex + 1);

    return to_number(digits);
}

function to_digits_array(num: number): number[] {
    return num.toString().split('').map(Number);
}

function find_pivot_index(digits: number[]): number {
    for (let i = digits.length - 2; i >= 0; i--) {
        if (digits[i] < digits[i + 1]) {
            return i;
        }
    }

    return -1;
}

function find_next_greater_index(digits: number[], pivotIndex: number): number {
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

function sort_digits(digits: number[], start: number): void {
    const sortedDigits = digits.slice(start).sort((a, b) => a - b);
    digits.splice(start, sortedDigits.length, ...sortedDigits);
}

function to_number(digits: number[]): number {
    return parseInt(digits.join(''));
}

console.log(next_bigger(12));
console.log(next_bigger(513));
console.log(next_bigger(2017));
console.log(next_bigger(9));
console.log(next_bigger(111));
console.log(next_bigger(531));
