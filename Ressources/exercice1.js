fetch("exercice1.json")
    .then((response) => response.json())
    .then((donnees) => {
        let userselect = document.getElementById("userselect");
        donnees.numbers.forEach((number) => {
            let option = document.createElement("option");
            option.value = number;
            option.textContent = number;
            userselect.appendChild(option);
        });
    });

let calculate = document.getElementById("calucle");
calculate.addEventListener("click", () => {
    let userselect = parseFloat(document.getElementById("userselect").value);
    let userinput = parseFloat(document.getElementById("userinput").value);
    let optionselect = document.querySelector("input[name='operation']:checked").value;

    if (isNaN(userinput)) {
        alert("enter a valid number");
    };
    let result;
    switch (operation) {
        case "add":
            result = userselect + userinput;
            break;
        case "soustr":
            result = userselect - userinput;
            break;
        case "multiple":
            result = userselect * userinput;
            break;
        case "div":
            result = userselect / userinput;
            break;
        default:
            alert("choice an operation");
    };

    document.getElementById("result").textContent = result;
})