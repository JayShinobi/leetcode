var isPalindrome = function(x) {
    let rev = parseFloat(x.toString().split('').reverse().join(''))
     if(x === rev){
         return true 
       }else {
           return false
       }
 };

