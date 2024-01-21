document.addEventListener("DOMContentLoaded", () => {
    const screen = document.querySelector(".screen");
    const numberButtons = document.querySelectorAll(".number");
    const operatorButtons = document.querySelectorAll(".operator");
    const calculateButton = document.querySelector(".calculate");
    const clear = document.querySelector(".clear")

    let expression = "";

    numberButtons.forEach((button) => {
        button.addEventListener("click", () => {
            expression += button.innerText;
            updateScreen();
        });
    });

    operatorButtons.forEach((button) => {
        button.addEventListener("click", () => {
            expression += button.getAttribute("data-operator");
            updateScreen();
        });
    });

    calculateButton.addEventListener("click", () => {
        try {
            expression = eval(expression);
            updateScreen();
        } catch (error) {
            screen.innerText = "Error";
            setTimeout(clearScreen, 1000);
        }
    });

    function updateScreen() {
        screen.innerText = expression;
    }

    function clearScreen() {
        expression = "";
        updateScreen();
    }

    clear.addEventListener("click", ()=>{
        clearScreen();
    })
});
