let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML === "=") {
            if (string === "") {
                alert("Enter a number first");
                return;
            }
            string = string.replace(/%/g, "/100");
            string = eval(string);
            if (isNaN(string)) {
                alert("Invalid expression");
                input.value = "";
            } else {
                input.value = string;
            }
        } else if (e.target.innerHTML === "AC") {
            if (string === "") {
                alert("Enter number to All Clear");
            } else {
                string = "";
                input.value = string;
            }
        } else if (e.target.innerHTML === "DEL") {
            if (input.value === "") {
                alert("Enter number to delete");
            } else {
                string = string.substring(0, string.length - 1);
                input.value = string;
            }
        } else if (e.target.id === "toggleSign") {
            if (input.value === "") {
                alert("Enter a number first");
            } else {
                string = eval(string);
                string = -string;
                input.value = string;
            }
        } else if (isOperator(e.target.innerHTML)) {
            if (string === "") {
                alert("Enter a number first");
                return;
            } else if (isOperator(string[string.length - 1])) {
                string = string.slice(0, string.length - 1);
            }
            string += e.target.innerHTML;
            input.value = string;
        } else if (e.target.innerHTML === ".") {
            if (string.includes(".")) {
                // Prevent multiple decimal points
                return;
            } else {
                string += e.target.innerHTML;
                input.value = string;
            }
        } else {
            if (string === "0") {
                string = e.target.innerHTML;
            } else if (string.length < 10) {
                string += e.target.innerHTML;
            }
            input.value = string;
        }
    });
});

function isOperator(value) {
    return (
        value === "+" ||
        value === "-" ||
        value === "*" ||
        value === "/" ||
        value === "%"
    );
}
