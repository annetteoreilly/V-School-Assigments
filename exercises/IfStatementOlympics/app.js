//1. Write an if statement that prints "is greater than" if 5 is greater than 3.
var number = 5 // change this value to see what happens

if(number > 3){
    console.log("is greater than")
}
//2. Write an if statement that prints "is the length of" if the length of "cat" is 3.
var feline = "cat"
var mutt = "dog"

if(feline.length === 3){
    console.log("is the length")
}
//3. Write an if/else statement that checks if "cat" is equal to "dog" and prints, "not the same" when they are not equal.
var feline = "cat"

if(feline === "dog"){
    console.log("Cat is equal to Dog")
} else if(feline !== "dog"){
    console.log("not the same")
}
//BRONZE MEDAL
//1. Using the below object, write an if statement that prints
//<theNameOfThePersonInObject> is allowed to go to the movie if they are old enough (18 or older), and the opposite if they are not older than 18.
