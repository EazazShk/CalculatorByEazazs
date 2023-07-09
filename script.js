let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);

arr.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML === "=") {
            if (string === "") {
                alert("Empty Input");
                return;
            }
            if (isOperator(string[string.length - 1])) {
                alert("Incomplete input");
                return;
            }
            string = string.replace(/%/g, "/100");
            string = evaluateExpression(string);
            if (string === "") {
                input.value = "";
            } else {
                string = eval(string);
                if (isNaN(string)) {
                    alert("Invalid expression");
                    input.value = "";
                } else {
                    input.value = string;
                }
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
                alert("Enter a number first to use the negative sign");
            } else {
                string = eval(string);
                string = -string;
                input.value = string;
            }
        } else if (isOperator(e.target.innerHTML)) {
            if (string === "") {
                alert("To use an operator, enter a number first");
                return;
            }
            if (isOperator(string[string.length - 1])) {
                alert("Two operators cannot be used consecutively");
                return;
            }
            string += e.target.innerHTML;
            input.value = string;
        } else if (e.target.innerHTML === ".") {
            if (string.includes(".")) {
                alert("Two decimal points cannot be used in the same number");
                return;
            } else {
                string += e.target.innerHTML;
                input.value = string;
            }
        } else {
            if (string === "0") {
                string = e.target.innerHTML;
            } else if (string.length < 12) {
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

function evaluateExpression(expression) {
    if (expression.includes("/0")) {
        alert("Cannot divide by zero");
        return "";
    }
    if (expression.includes("*0")) {
        alert("Cannot multiply by zero");
        return "";
    }
    return expression;
}
