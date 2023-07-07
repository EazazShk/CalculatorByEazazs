let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML === "=") {
            string = eval(string);
            input.value = string;
            if (string == undefined) {
                alert("Please enter a valid number");
                input.value = "";
            }
        } else if (e.target.innerHTML === "AC") {
            if (string == "") {
                alert("Enter number to All Clear");
            }
            string = "";
            input.value = string;
        } else if (e.target.innerHTML === "DEL") {
            if (input.value == "") {
                alert("Enter Number to Delete");
            } else {
                input.value = string;
            }
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else if (e.target.id === "toggleSign") {
            if (input.value == "") {
                alert("Enter a number first");
            }
            if (string !== "") {
                string = eval(string);
                string = -string;
                input.value = string;
            }
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
