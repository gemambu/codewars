function removeSmallest(numbers) {

  if(numbers.length == 0){
    return numbers;
  }
  
  const minNumber = {valueN :-1, position: -1};
  const nLength = numbers.length;
  
  for(const i = 0; i < nLength; i++){
    if(i + 1 < nLength){ // He llegado a la última posición, termino el for
    
        const posActual = numbers[i];
        const posNext = numbers[i+1];
        
        if (posActual <= posNext){
            if(minNumber.valueN > posActual){
                minNumber.valueN = posActual;
                minNumber.position = i;
            }
        }
        
        if(posNext < posActual){
            if(minNumber.valueN > posNext){
                minNumber.valueN = posNext;
                minNumber.position = i + 1;
            }
        }
    }
    
  }

  
  numbers.splice(minNumber.position, 1);
  
  return numbers;
  
}