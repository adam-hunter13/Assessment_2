console.log("Welcome to the password validator tool!");
console.log("Enter your password for processing")

function validator(password){
    if(password.length >= 10){
        console.log("You passed")
    } else {
        console.log("Try again")
    }
}

validator("thisPasswordShouldBeLongEnough")

