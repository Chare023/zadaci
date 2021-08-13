// zadatak 1
function neka(arr, callback){
    let par = [];
    let nepar = [];
    for(i=0; i < arr.length; i++){ 
        let rezCallbacka = callback(arr[i]);
        
        if (rezCallbacka){
            nepar.push(arr[i])
        } else{
            par.push(arr[i])
        }
    
    }
    return {par, nepar};
}
 

console.log(neka([1,2,3,4,5,6], function(param){
    return param % 2;
}))

// zadatak 2
