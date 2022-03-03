function DeleteNumber() {
    document.getElementById("displayMath").value = "";
}

function TypeNumber(newNum) {
    document.getElementById("displayMath").value += newNum;
}

function GetAnswer() {
    var numbers = document.getElementById("displayMath").value;
    var storedNumbers = eval(numbers);
    document.getElementById("displayMath").value = storedNumbers;
}