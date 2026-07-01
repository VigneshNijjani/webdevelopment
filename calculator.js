let display = document.getElementById("display");
let main = document.getElementById("main");

let expression = "";

main.addEventListener("click", (e) => {
    let value = e.target.innerText;

    if (!value) return;

    else if (value === "clear") {
        expression = "";
        display.innerText = "";
    } 
    else if (value === "=") {
        try {
            expression = eval(expression);
            display.innerText = expression;
        } catch {
            display.innerText = "Error";
            expression = "";
        }
    } 
    else if (value === "back") {
    expression = expression.slice(0, -1);
    display.innerText = expression;
}
    else {
        expression += value;
        display.innerText = expression;
    }
});

