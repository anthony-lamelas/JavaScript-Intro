const textInput = document.getElementById("text-input");
const result = document.getElementById("result");
const textButton = document.getElementById("check-btn")


function isPalindrome(){
  let strOld = textInput.value;
  let str = strOld.trim().replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  console.log(str);

  if (str === ""){
    alert("Please input a value");
    
  }else if (str == str.split("").reverse().join('')){

    result.textContent = `${strOld} is a palindrome.`;

  } else {
    result.textContent = `${strOld} is not a palindrome.`;
  }
}