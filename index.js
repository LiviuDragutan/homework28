const fizzBuzz = []

for (var i = 1; i <= 100; i++){


    if (i % 3 === 0 && i % 5 === 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}



// const findMissingNumber = [0,1,3,4,5,7,8]; 

// for ( var i = 0; i < findMissingNumber.length; i++ ) {

//     if ( (findMissingNumber[i+1] - findMissingNumber[i]) > 1 ) {
//         findMissingNumber.push( findMissingNumber[i+1] - findMissingNumber[1] );   
//     }
// }

// console.log( findMissingNumber );
