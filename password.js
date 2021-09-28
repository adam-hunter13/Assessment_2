// console.log("Welcome to the password validator tool!");
// console.log("Enter your password for processing")

// function validator(password){
//     if(password.length >= 10){
//         console.log("You passed")
//     } else {
//         console.log("Try again")
//     }
// }

// validator("thisPasswordShouldBeLongEnough")

console.log('Welcome to the Password Validator Tool!')

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question('What password are you trying to validate?', password => {
    String(password);
    if(password.length >= 10){
        console.log('Congratulations, your password is approved!');
        readline.close();
    } else {
        console.log('Sorry, your password failed.')
    }
})