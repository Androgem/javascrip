let input = prompt('Write your year of birth');

if (isNaN(input)) {
    alert('Must enter a number!!')
} else if (input.length > 4) {
    alert('You must enter only 4 characters')
    prompt('Write your year of birth')
    let input = prompt
    console.log(input)
}
else { console.log(input) }

let YearOfBirth = parseInt(input);
let formula = (YearOfBirth - 4) % 12;
switch (formula) {
    case 0:
        alert('Your Chinese Zodiac Sign is RAT')
        break;
    case 1:
        alert('Your Chinese Zodiac Sign is OX');
        break;

    case 2:
        alert('Your Chinese Zodiac Sign is TIGER');
        break;

    case 3:
        alert('Your Chinese Zodiac Sign is RABBIT');
        break;

    case 4:
        alert('Your Chinese Zodiac Sign is DRAGON');
        break;

    case 5:
        alert('Your Chinese Zodiac Sign is SNAKE');
        break;

    case 6:
        alert('Your Chinese Zodiac Sign is HORSE');
        break;

    case 7:
        alert('Your Chinese Zodiac Sign is GOAT');
        break;

    case 8:
        alert('Your Chinese Zodiac Sign is MONKEY');
        break;

    case 9:
        alert('Your Chinese Zodiac Sign is ROOSTER');
        break;

    case 10:
        alert('Your Chinese Zodiac Sign is DOG');
        break;

    case 11:
        alert('Your Chinese Zodiac Sign is PIG');
        break;
}




