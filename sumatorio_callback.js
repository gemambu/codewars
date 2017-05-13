function digital_root(n) {

console.log(n);
  
  if ( n < 10){
    return n;
  }
  
  function createArray(number, callback){
    var myArr = [];
    var numString = number.toString();
    var result = 0;
    
    
    for(var pos = 0; pos < numString.length; pos ++){
      myArr.push(parseInt(numString.substr(pos, 1)));
    }
    console.log('Array: ', myArr);
    
    for(var pos = 0; pos < myArr.length; pos++){
      result = result + myArr[pos];
    }
    console.log('Result ',result);
    
    if(result < 10 ){    
      console.log('Fin: ', result);
      return result;
    }
    
    return callback(result, callback);
  }

 var resultFinal = createArray(n, createArray);
 console.log('ReusltFinal: ', resultFinal);
 return resultFinal;
}