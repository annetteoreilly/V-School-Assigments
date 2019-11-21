//1. Loop through the following array and count how many "computers" there are. Log the final count:
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
var computer = 0 
for(var i = 0; i < officeItems.length; i++){
    if(officeItems[i] === "computer"){
    computer ++
    }
}
console.log(computer)

for(var i = 0; i < officeItems.length; i++){
    //console.log(officeItems[1])
}

//2. Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if they are not 18
var x = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    },{
        name: "Madeline",
        age: 80,
        gender: "female"
    },{
        name: "Cheryl",
        age: 22,
        gender: "female"
    },{
        name: "Sam",
        age: 30,
        gender: "male"
    },{
        name: "Suzy",
        age: "4",
        gender: "female"
    }
]

for (i=0; i, < age.length; i++)
    if(age >= 18){
        console.log("old enough"){
            else(){
                console.log("not old enough")
            }
        }
    }
