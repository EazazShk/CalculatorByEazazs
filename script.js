let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML === "=") {
            if (string === "") {
                alert("Enter a valid expression");
                return;
            }
            // Replace % with /100
            string = string.replace(/%/g, "/100");
            string = eval(string);
            if (isNaN(string)) {
                alert("Invalid expression");
                input.value = "";
            } else {
                input.value = string;
            }
        } else if (e.target.innerHTML === "AC") {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML === "DEL") {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else if (e.target.id === "toggleSign") {
            if (string !== "") {
                string = eval(string);
                string = -string;
                input.value = string;
            }
        } else if (isOperator(e.target.innerHTML)) {
            if (string === "") {
                alert("Enter a number first");
                return;
            } else if (isOperator(string[string.length - 1])) {
                // Replace the previous operator with the new one
                string = string.slice(0, string.length - 1);
            }
            string += e.target.innerHTML;
            input.value = string;
        } else {
            string += e.target.innerHTML;
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
