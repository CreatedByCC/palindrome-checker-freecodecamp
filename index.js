function palindrome(str) {
    let newStr = str.replace(/[^0-9a-z]/gi, ''); //replace anything that is not a digit or lowecase letter (i sets it to be case insensitive)
    let reverseStr = newStr.split("").reverse().join("");
  
    if (newStr.toLowerCase() === reverseStr.toLowerCase()) {
      return true;
    } else {
      return false;
    }
}
  
palindrome("eye"); //console: true
palindrome("A man, a plan, a canal. Panama"); //console: true