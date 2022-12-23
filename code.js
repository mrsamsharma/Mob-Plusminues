'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let positiveNumber = 0
    let negativeNumber = 0
    let zeroNumber = 0
    
    for (let i = 0; i < arr.length; i++){
       if (Math.sign(arr[i]) === 1) {
           positiveNumber += 1
       }
       else if (Math.sign(arr[i]) === -1) {
           negativeNumber += 1
       }
       else {
           zeroNumber += 1
       }
    }

    let positive = (positiveNumber/arr.length).toFixed(6);
    let negative = (negativeNumber/arr.length).toFixed(6);
    let zero = (zeroNumber/arr.length).toFixed(6);
    
    console.log(positive);
    console.log(negative);
    console.log(zero);
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
