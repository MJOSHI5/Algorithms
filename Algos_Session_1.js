//Varriable: var nameOfvarriable; - undefined
//var x = 10;
//var y = 'Cookie';
//x = x + 5; //Now x is 15, = is the opperator, and don't think as mathimatical sighns
//var isHappy = True; //Boolean statements
//console.log("3" + 5); //3 becomes a sperete unit

//3==3 True
//3==="3" False


//var b1 = 25;
//console.log('My favorite number is ${b1}');

//Functions:

function nameOfFunction(x){
    return x * x; //Give the value back at the end
}

nameOfFunction(10); //Calling the function

console.log(nameOfFunction(10)) //Final value comes to 100

var x2 = -15;
//console.log(nameOfFunction(X2));

var newVal = nameOfFunction(x2);
console.log(`Squared value = ${newVal}`); //

//For Loops:

for (var k = 1; k < 5; k++){ 
    //var k =1 is the starting value
    console.log(`I'm running a for loop`)
    console.log(`Current value of k is ${k}`) //Prints everthing in the for loop
}

console.log("Going backwards!")

for (var p = 10; p > 0; p--){ 
    //var p =1 is the starting value
    console.log(`I'm running a for loop and it is going backwards!`)
    console.log(`Current value of p is ${p}`) //Prints everthing in the for loop
}

//x++ Increase x by 1; x-- means decrease x by 1,
// x+= 5means increase x by 5; x -=3 meanse decrease by 3

for (var p1 =2; p1<17; p1 += 3){
    console.log(p1)
}

console.log(p1)//Printing 17 - No longer true - Still saving even after the for loop is over

//Print interger from 1-255
console.log("Print 1 - 255")
function printInts(){ //Only print 1-255, it is not dependent
    for( var i = 1; i < 256; i++){
        console.log(i)
    }
}

printInts() //Call out the function, this allows it to see on the console

//Printing 1-255 and the sum
console.log("----------")

function printIntsAndSum(){
    var sum = 0; //Initializing sum to 0
    //Print 0, then the sum
    for (var i= 0; i < 256; i++){
        console.log(i)
        sum = sum += i
        console.log(`Sum so far: ${sum}`)
    }
}

printInts()