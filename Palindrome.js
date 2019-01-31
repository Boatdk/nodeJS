function palindrome(str) {
 var re = /[^A-Za-z0-9]/g;
 str = str.toLowerCase().replace(re, '');
 var len = str.length;
 for (var i = 0; i < len/2; i++) {
   if (str[i] !== str[len - 1 - i]) {
       return false;
   }
 }
 return true;
}
let x
x = palindrome("abc");
if(x == true){
    console.log('It is palindrome ')
}
else
    console.log('It is not palindrome ')

