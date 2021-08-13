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

function transformisi2dU1dNiz(niz){
  var newArr = [];

  for (let i = 0; i < niz.length; i++) {
     newArr = newArr.concat(niz[i]);   
  }
  console.log(newArr);
}
transformisi2dU1dNiz([false, [1, 2], [3, 4], [5, 6], 7, 8, [9], [10], true]);
