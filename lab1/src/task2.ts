// Write a function named 'first_non_repeating_letter' that takes a string input,
// and returns the first character that is not repeated anywhere in the string.
// For example, if given the input 'stress', the function should return 't',
// since the letter t only occurs once in the string, and occurs first in the string.
// As an added challenge, upper- and lowercase letters are considered the same character,
// but the function should return the correct case for the initial letter.
// For example, the input 'sTreSS' should return 'T'.
// If a string contains all repeating characters,
// it should return an empty string ("") or None -- see sample tests.

function firstNonRepeatingLetter(str: string): string {
    const charCount = new Map<string, number>();

    for (const char of str.toLowerCase()) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    for (const char of str) {
        if (charCount.get(char.toLowerCase()) === 1) {
            return char;
        }
    }

    return "";
}

console.log(firstNonRepeatingLetter("stress"));
console.log(firstNonRepeatingLetter("sTreSS"));
console.log(firstNonRepeatingLetter("aabbc"));
console.log(firstNonRepeatingLetter(""));
console.log(firstNonRepeatingLetter("aa"));
