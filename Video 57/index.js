// console.log('Video 57 - Loops')

// let obj = {
//     name: "Divyam",
//     age: 14,
//     classes: 9,
//     hobbies: ["Coding", "Tennis", "Cooking"]
// }

// for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(element)
//     }
// }

// for (const c of "divyam") {
//     console.log(c)
// }

// let sum = 0

// for (let i = 1; i <= 10; i++) {
//     sum+=i
// }
// console.log(sum)

// for (let i = 0; i < 21; i++) {
//     if(i%2==0){
//         console.log(i)
//     } else {
//         null
//     }
// }


// for (let i = 0; i < 31; i++) {
//     if(i%3==0){
//         if(i%5 == 0){
//             console.log(`FizzBuzz - ${i}`)
//         } else {
//             console.log(`Fizz - ${i}`)
//         }
//     } else if(i%5==0){
//         if(i%3 == 0){
//             console.log(`FizzBuzz - ${i}`)
//         } else{
//             console.log(`Buzz - ${i}`)
//         }
//     } else {
//         console.log(i)
//     }
// }

let word = 'Divyam'
console.log(Array.from(word).reverse())

let rev = Array.from(word).reverse()

rev.forEach(element => {
    console.log(element)
});