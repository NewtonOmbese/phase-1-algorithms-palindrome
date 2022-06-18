function isPalindrome(word) {
  // Write your algorithm here
  let palindromeWord = word.split("").reverse().join("")
  if (word == palindromeWord){
    return true
  }
  else{
    return false
  }
}

/* 
  Add your pseudocode here
  The function is to take one argument
  If the argument passed results to palindrome it is returned true else false
*/

/*
  Add written explanation of your solution here
  I declared a new variable palindromeWord 
  it splits reverses and joins the word passed back to one word
  after the split, reverse and join it is the compared to the word
  If they match it returns true else returns false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
