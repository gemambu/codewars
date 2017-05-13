function findShort(s){

  // primero controlamos que s no esté vacio
  if(s.length == 0){
    return "";
  }
  
  // Generamos un array con todas las palabras
  var sArr = s.split(" ");
  let longitud = sArr.length;
  
  // recorremos el array, almacenando siempre la longitud de la palabra con menor longitud
  var minLength = sArr[0].length;
  console.log(minLength);
  
  for(var position = 0; position < longitud; position++){
  
    if( position + 1 < longitud){ //ejecutamos las comparaciones hasta el final del array
    
      var actualWord = sArr[position].length;
      var nextWord = sArr[position + 1].length;
      
      if(actualWord <= nextWord && actualWord <= minLength ){
        minLength = actualWord;
      }
      
      if(nextWord < actualWord  && nextWord <= minLength ){
        minLength = nextWord;
      }
    }
  }
     
     console.log(minLength);
  return minLength;
}