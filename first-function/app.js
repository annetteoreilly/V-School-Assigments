// // var car = {
// //     type: "sedan",
// //     make: "Civic",
// //     wheels: 4,
// //     honkSound: "Blerp",
// //     honk: function(){
// //         console.log(this.type)
// //     }
// // }
// // var otherCar = car

// // otherCar.type = "4 wheel drive"

// // console.log(car)
// // 
// // function square (number){
// //     return number * number
// // }
// // var number = 8

// // function addition (a, b){
// //     var sum = a + b
// //     return sum
// // }

// // console.log(5 + 3)

// // function addition (a, b){
// //     // var sum = a +b 
// //     return sum
// // }
// // console.log (8 + 8)

// // function addition (a, b){
// //     return a + b

// // }
// // console.log(9 + 6)



// // 


// // var testExample = function(a){
// //     var greeting = "My name is " + a 
// //     return greeting
// // }
// // var a = "Annette"
// // console.log(testExample(a))

// // function testExample(){

// // }
// // function testExample(){
// //     var greeting = "Hi!, my name is Annette"
// //     console.log(greeting)
// // }
// // testExample()

// // function testExample(){
// //     var greeting = "Hi my name is Annette"
// //     console.log(greeting)
// // }
// // testExample()



// //ANONYMOUS FUNCTION ADD NUMBERS
// // var addition = function(a, b){
// //     var sum = a + b
// //     return sum
// // }
// // var a = 5
// // var b = 20
// // console.log(addition(a,b))


// // var addition = function (){
// //     var sum = a + b
// //     return sum
// // }
// // var a = 50
// // var b = 61
// // console.log(addition(a,b))

// // input:
// // function
// // 1 integer 
// // Divisible by 100
// // output
// // return true if divisible by 100
// // otherwise return false

// // var arr1 = ["blue", 3, 6]
// // var arr2 = [5, 6, 7]

// // function concatArr (arr1, arr2){
// //     return arr1.concat(arr2)
// // } 
// // console.log(concatArr(arr1, arr2))

// // // function concat(arr1, arr2){
// // //     return arr1.concat(arr2)
// // // }
// // // console.log(concat(arr3))


// red.addEventListener("click", function(){
//     document.body.style.backgroundColor = "firebrick"
// })

// white.addEventListener("click", function(){
//     document.body.style.backgroundColor = "white"
// })

// var count = 0
// var subtractbtn = document.getElementById("subtract")
// var addBtn = document.getElementbyId("add")

// subtractBtn.addEventListener("click", function(){
//     count--
//     document.getElementById("counter").innertext = count
// })
// addBtn.addEventListener("click", function(){
//     count++
//     document.getElementbyId("counter").innerText = count
// })


var numbers = [1, 2, 3, 4 ]
for (var i = 0; i < numbers.length; i++){
    if (numbers[i] % 2 === 0){
        console.log("It is even")
    }
}