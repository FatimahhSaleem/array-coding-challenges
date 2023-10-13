"use strict"
// 1. Write a program that prompts the user to enter five numbers and stores them in an array. Then, output the sum of the numbers to the console



let array=[];
let newarray=0;
for(let i=0;i<5;i++){
    let num=prompt("Enter a number")
    array[i]=parseFloat(num);
    newarray=newarray+array[i];
    
    
}
console.log(newarray)
console.log(array)



// 2. Write a function called findMax that takes in an array of numbers as a parameter and returns the largest number in the array.
let array=[2,5,23,7,45,24,0];
const findMax=(array)=>{
    let largest=0;
    for(let i=0;i<array.length;i++){
        if(array[i]>largest){
            largest=array[i];
            
        }

    }
    return largest;


}
const largest=findMax(array);
console.log(largest);
  

// 3. Write a program that prompts the user to enter a sentence and stores each word in an array. Then, output the length of the array to the console.

let sentences=prompt("Enter a sentence");
let string=[];
let array=sentences.split(" ");
console.log(array);



// 4. Write a program to take an array and print average of all the elements of array.


let array=[4,6,5,8,5,5,6]
const average=(array)=>
{
    let sum=0;
    for(let i=0;i<array.length;i++){
        sum=sum+array[i]
    }
    let length=array.length;
    return sum/length;
}
let avg=average(array);
console.log(avg);



// 5. Write a program to output only those elements who are multiple of three(3) or five(5).

let array=[3,6,4,7,10,35,65,23,7]
for(let i=0;i<array.length;i++){
    if(array[i] % 3===0 || array[i] % 5===0 ){
        let multiple=array[i]
        console.log(multiple)
    }
}






