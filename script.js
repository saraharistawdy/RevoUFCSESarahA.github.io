function calculateArea() {
    // Get the value of the side length from the input field
    const sideLength = parseFloat(document.getElementById("sideLength").value);

    // Check if the input is a valid number
    if (!isNaN(sideLength)) {
        // Calculate the area of the square
        const area = sideLength * sideLength;

        // Display the result
        document.getElementById("result").textContent = "Area: " + area.toFixed(2) + " square units";
    } else {
        // Display an error message if the input is not valid
        document.getElementById("result").textContent = "Invalid input. Please enter a valid number.";
    }
}

function resetCalculator() {
    // Clear the input field and result
    document.getElementById("sideLength").value = "";
    document.getElementById("result").textContent = "Area: ";
}
