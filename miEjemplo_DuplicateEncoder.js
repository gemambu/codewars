"use strict";

/*
The goal of this exercise is to convert a string to a new string where each 
character in the new string is '(' if that character appears only once in the 
original string, or ')' if that character appears more than once in the original string. 
Ignore capitalization when determining if a character is a duplicate.

Examples:

"din" => "((("

"recede" => "()()()"

"Success" => ")())())"

"(( @" => "))(("

 */

function duplicateEncode(word){
 
    // check if the word is empty
    if(word.length == 0){
        return "";
    }

    var myArray = [];
    for(var i = 0; i < word.length; i++){
        var result = {letter: word.charAt(i), count: 0};
        myArray.push(result);
    }
    
    for(var i = word.length - 1; i >= 0; i--){
        var count = 0;
        for(var j = 0; j < myArray.length - 1; j++){
            if(myArray[j].letter == word(i)){                
                myArray[i].count = count++; 
            }
        }        
    }

    var finalRes = "";
    for(var z = 0; z < myArray.length - 1; z++){
        if(myArray[z].count > 1){
            finalRes = finalRes + ")";
        } else {
            finalRes = finalRes + "(";
        }
    }
    return finalRes;


var n = 333;
n.toExponential();
}