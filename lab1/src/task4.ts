// There is an array of numbers - arr [1, 3, 6, 2, 2, 0, 4, 5]
// there is a number target = 5.
// Count the number of pairs in the array, the sum of which will give target

function countPairsWithSum(arr: number[], target: number): number {
    const complementaryNumbers = new Set<number>();
    let count = 0;

    for (const num of arr) {
        const complement = target - num;
        if (complementaryNumbers.has(complement)) {
            count++;
        }
        complementaryNumbers.add(num);
    }

    return count;
}

const arr: number[] = [1, 3, 6, 2, 2, 0, 4, 5];
const target = 5;
console.log(countPairsWithSum(arr, target));
