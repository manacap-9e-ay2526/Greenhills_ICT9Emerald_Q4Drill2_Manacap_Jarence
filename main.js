function checkHeatIndex() {

    // Variables (JavaScript Data Types and Variables)
    let temp = document.getElementById("temperature").value;
    let humidity = document.getElementById("humidity").value;

    let heatIndex;
    let status;

    // if statement (Checks Empty Fields)
    if (temp == "" || humidity == "") {
        status = "none";
    }
    else {

        // Convert values to numbers
        temp = Number(temp);
        humidity = Number(humidity);

        // Heat Index Formula
        heatIndex = temp + (0.33 * humidity) - 4;

        // else if statement
        if (heatIndex <= 27) {
            status = "cool";
        }
        else if (heatIndex >= 28 && heatIndex <= 32) {
            status = "warm";
        }
        else if (heatIndex >= 33 && heatIndex <= 37) {
            status = "hot";
        }
        else if (heatIndex >= 38 && heatIndex <= 41) {
            status = "veryhot";
        }
        else {
            status = "danger";
        }
    }

    // switch statement (output)
    switch (status) {

        case "cool":
            window.alert("Heat Index: " + heatIndex + "°C\nStatus: Comfortable / Cool");
            break;

        case "warm":
            window.alert("Heat Index: " + heatIndex + "°C\nStatus: Warm");
            break;

        case "hot":
            window.alert("Heat Index: " + heatIndex + "°C\nStatus: Hot");
            break;

        case "veryhot":
            window.alert("Heat Index: " + heatIndex + "°C\nStatus: Very Hot / Caution");
            break;

        case "danger":
            window.alert("Heat Index: " + heatIndex + "°C\nStatus: Extreme Heat / Danger");
            break;

        case "none":
            window.alert("Please fill in all fields");
            break;
    }
}