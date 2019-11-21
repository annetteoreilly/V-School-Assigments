//1. Create a forLoop that iterates through 101 number (from 0 - 100).  If the current iteration is an Odd number, print "Odd" to the console, otherwise print "Even"
//Questions: Do you have to name a variable to run a forloop?
var numbers = [1, 2, 3, 4, 5, 6]
for(i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
        console.log("Even")
    } else {
        console.log("Odd")
    }
}
