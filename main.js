// zadatak 1
// function neka(arr, callback){
//     let par = [];
//     let nepar = [];
//     for(i=0; i < arr.length; i++){ 
//         let rezCallbacka = callback(arr[i]);
        
//         if (rezCallbacka){
//             nepar.push(arr[i])
//         } else{
//             par.push(arr[i])
//         }
    
//     }
//     return {par, nepar};
// }
 

// console.log(neka([1,2,3,4,5,6], function(param){
//     return param % 2;
// }))

// zadatak 2

class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    compareAge(person) {
        let message;

        if (person.age > this.age) {
            message = `${person.name} je osoba starija od ${this.name} za ${Math.abs(person.age - this.age)} godina.`
        } else if (person.age < this.age) {
            message = `${person.name} je osoba mladja od ${this.name} za ${Math.abs(this.age - person.age)} godina.`
        } else {
            message = `Osobe ${person.name} i ${this.name} su iste starosti.`
        }

        return message;
    }
}

const person1 = new Person('Iva' ,8)
const person2 = new Person('Sara' ,1)
const person3 = new Person('Dina' ,34)
const person4 = new Person('Bane' ,35)

console.log(person1.compareAge(person4))
console.log(person2.compareAge(person1))
console.log(person3.compareAge(person2))
console.log(person4.compareAge(person3))



// zadatak3
// function vratiRec(recenica, rec){
//     let pozicija;
//     const arr = recenica.split(" ");
    
//     for (let i = 0; i < arr.length; i++) {
        
//         if (arr[i] === rec) {    
//            pozicija = i;
//            return `rec "${rec}" se nalazi u recenici na poziciji ${pozicija}` 
//         } 
        
//     }

//     return `ne postoji rec ${rec} u recenici`;
// }
// console.log(vratiRec('Evo neka tamo recenica', 'tamo'));

// zadatak4

// function transformisi2dU1dNiz(niz){
//   var newArr = [];

//   for (let i = 0; i < niz.length; i++) {
//      newArr = newArr.concat(niz[i]);   
//   }
//   console.log(newArr);
// }
// transformisi2dU1dNiz([false, [1, 2], [3, 4], [5, 6], 7, 8, [9], [10], true]);

// zadatak5

// zadatak6
// function find(array, callback){
//     for (el of array) {
//         if(callback(el)) {
//             return el
//         }
//     }
//     return null;
// }
// const rez = find([23,12,425,987,653],function(el){
//     return el % 5 === 0;
// })
// console.log(rez);

// zadatak7
// function printAnElementEachSecond(niz){
    

//     for(let i = 1; i <= niz.length; i++){
//         setTimeout(function(){
//             console.log(niz[i - 1]);
//           }, 5000 * i); 
//     }
// }
// printAnElementEachSecond([1,2,34,5,6,7,9])

// Zadatak 8

// class User {
//     constructor(username, password, ime, prezime){
//         this.username = username;
//         this.password = password;
//         this.ime = ime;
//         this.prezime = prezime;
//     }
   
// }