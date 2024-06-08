const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");

const isItAPalindrome = (text) => {
    const regex = /\w/;
    let cleanText = text.match(regex);

    if(text.length < 1) {
        return alert("Testing: " + text);
    };
    if(text.length > 0) {
        return alert("Input Value: " + text);
    };
}

checkButton.addEventListener("click", () => {
    alert(`Text value: ${textInput.value}`);
});