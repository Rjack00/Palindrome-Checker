const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");


const isItAPalindrome = (text) => {
    if(text.length < 1) {
        return alert(`Please input a value` );
    } 

    const regex = /[a-z0-9]/ig;
    const cleanText = text.toLowerCase().match(regex).join("");
    const reverseText = cleanText.split("").reverse().join("");

    if(cleanText === reverseText) {
        return result.innerText = `${text} is a palindrome`;

    } else {
        return result.innerText = `${text} is not a palindrome`;
    };
}


checkButton.addEventListener("click", () => {
    return isItAPalindrome(textInput.value);
});

