let input = document.querySelectorAll(".input"); //input selectors (numbers and coma)
let operator = document.querySelectorAll(".operator"); //operator selectors
let resultSelector = document.querySelector("#result"); //result bar selector
let num1temp = []; //first temporary input
let num2temp = []; //second temporary input
let num1, num2, op; //variables for passing to the calculate function
let result; //result from calculate function

for (let i = 0; i < 11; i++) {
    input[i].addEventListener("click", function () {
        if (num1temp.join("") == result) {
            //reset if value entered without operator first
            num1temp = [];
            num1temp.push(input[i].innerHTML); //push the value into the temp array
            resultSelector.innerHTML = num1temp.join(""); //change the display to the numbers getting entered
        } else {
            //if num1 not set, we push the value into the temp array
            if (!num1) {
                num1temp.push(input[i].innerHTML);
                resultSelector.innerHTML = num1temp.join(""); //change the display to the numbers getting entered
            } else if (!num2) {
                //if num2 not set, we push the value into the temp array
                num2temp.push(input[i].innerHTML);
                resultSelector.innerHTML = num2temp.join(""); //change the display to the numbers getting entered
            }
        }

        console.log("num1temp = " + num1temp);
        console.log("num2temp = " + num2temp);
    });
}

for (let i = 0; i < 5; i++) {
    operator[i].addEventListener("click", function () {
        if (!num1) {
            //if num1 is not set, we join the temp array and put inside num1
            num1 = num1temp.join("");
            //empty the temp array for the next equation
            num1temp = [];
        } else if (!num2) {
            //if num2 is not set, we join the temp array and put inside num2
            num2 = num2temp.join("");
            //empty the temp array for the next equation
            num2temp = [];
        }

        //assigning op variable to the appropriate operator function
        if (operator[i] == operator[0]) {
            op = divide;
        } else if (operator[i] == operator[1]) {
            op = multiply;
        } else if (operator[i] == operator[2]) {
            op = substract;
        } else if (operator[i] == operator[3]) {
            //change num1 & num2 from strings to numbers/floats
            let nunm1fix = parseFloat(num1);
            let nunm2fix = parseFloat(num2);
            //execute calculate function and return into the result variable
            result = calculate(nunm1fix, nunm2fix, op);
            //empty num1 & num2 variables for the next equation
            num1 = "";
            num2 = "";
            //assigning the first temp array to the previous results, in case of doing another equation with the result
            num1temp[0] = result;
            //changing the result "screen" to the actual result
            resultSelector.innerHTML = result;
        } else if (operator[i] == operator[4]) {
            op = add;
        }
    });
}

function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}
function add(num1, num2) {
    return num1 + num2;
}
function substract(num1, num2) {
    return num1 - num2;
}
function calculate(num1, num2, operator) {
    return operator(num1, num2);
}
