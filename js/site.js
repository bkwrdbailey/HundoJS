// Acquires the values from the app.html page
function getValues() {
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    // Error handling for non integer values being inputted in the form
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        let numbers = generateNumbers(startValue, endValue);
        displayNumbers(numbers);

    } else {
        alert("Error: Non-integer entered");
    }
}

// Generates the numbers from the startValue to the endValue
function generateNumbers(sValue, eValue) {

    let numbers = [];

    // This loops until every number from the sValue to the eValue has been placed in an array
    for (let i = sValue; i <= eValue; i++) {
        numbers.push(i);
    }

    return numbers;

}

// Displays the numbers to the page and bolds the even numbers
function displayNumbers(numbersArr) {
    
    let templateRows = "";

    for (let index = 0; index < numbersArr.length; index++) {

        let number = numbersArr[index];

        if ((numbersArr[index] % 2) == 0) {
            templateRows += `<tr><td class="even">${number}<td><tr>`;
        } else {
            templateRows += `<tr><td class="odd">${number}<td><tr>`;
        }
    }

    document.getElementById("results").innerHTML = templateRows;
}