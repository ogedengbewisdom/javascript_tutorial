let displayEl = document.getElementById("display")

function yell() {

    let firstEl = document.querySelector("#firstName").value;
    let middlEl = document.querySelector("#middleName").value;
    let lastEl = document.querySelector("#lastName").value;

    let display = firstEl + " " + middlEl + " " + lastEl;
    displayEl.textContent = display;
}
