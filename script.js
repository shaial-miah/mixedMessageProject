/*

Example:

Knock Knock: 

Who's there?

__answer1____

${answer1} who?

__answer2____

What do you want?

__answer3__?

*/

const answers = 

{

    answer1: ['Radio', 'Water', 'tank', 'Nona', 'Alex', 'herd'],
    answer2: ['Hello mr stink', 'Candy is life', 'never mind', 'octopus', 'you bore me', 'helium'],
    answer3: ['None of your business', 'Mondays are fun', 'stop', 'Oh no I lost my llama', 'squeaky voice', 'dead or alive']

}


// randomly return a string with the answer1 array in the answers object.

let answer1Response = answers.answer1;

function obtainAnswer1Rand(arr) {

    let x = arr[Math.floor(Math.random() * (arr.length - 1))];

    return x;

}

obtainAnswer1Rand(answer1Response);

// randomly return a string with the answer2 array in the answers object.

let answer2Response = answers.answer2;

function obtainAnswer2Rand(arr) {

    let x = arr[Math.floor(Math.random() * (arr.length - 1))];

    return x;

}

obtainAnswer2Rand(answer2Response);

// randomly return a string with the answer3 array in the answers object.

let answer3Response = answers.answer3;

function obtainAnswer3Rand(arr) {

    let x = arr[Math.floor(Math.random() * (arr.length - 1))];

    return x;

}

obtainAnswer3Rand(answer3Response);

