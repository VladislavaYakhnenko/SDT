// In this task you will create a function that takes
// a list of non-negative integers and strings
// and returns a new list with the strings filtered out.

function filterList(arr: (number | string)[]): number[] {
    return arr.filter(item => typeof item === 'number')
        .map(item => Number(item));
}

console.log(filterList([1, 2, 'a', 'b']));
console.log(filterList([1, 'a', 'b', 0, 15]));
console.log(filterList([1, 2, 'aasf', '1', '123', 123]));
