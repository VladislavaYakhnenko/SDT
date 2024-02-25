// Den has invited some friends. His list is:
// s = "Fired:Corwill;Wilfred:Corwill;Barney:TornBull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
//
// Could you make a program that
// · makes this string uppercase
// · gives it sorted in alphabetical order by last name.
//     When the last names are the same, sort them by first name.
//     Last name and first name of a guest come in the result between parentheses separated by a comma.
//
// It can happen that in two distinct families with the same family name two people have the same first name too.

function meeting(str: string): string {
    const guests = str.split(';');

    const formattedGuests = guests.map(guest => {
        const [firstName, lastName] = guest.toUpperCase().split(':');
        return { firstName, lastName };
    });

    formattedGuests.sort((a, b) => {
        if (a.lastName === b.lastName) {
            return a.firstName.localeCompare(b.firstName);
        }
        return a.lastName.localeCompare(b.lastName);
    });

    return formattedGuests.map(({firstName, lastName}) => `(${lastName}, ${firstName})`).join('');
}


const inputString = "Fired:Corwill;Wilfred:Corwill;Barney:TornBull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
console.log(meeting(inputString)); // Output: "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
