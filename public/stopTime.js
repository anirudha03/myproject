function updatePickupTimeOptions() {
    const dropLocation = document.getElementById("pickup").value;
    const pickupTimeSelect = document.getElementById("fromTime");
    pickupTimeSelect.innerHTML = ""; // Clear existing options

    if (dropLocation === "Lodha Palava Phase") {
        // Add pickup time options for Lodha Palava Phase
        addTimeOption(pickupTimeSelect, "07:00 a.m.");
        addTimeOption(pickupTimeSelect, "08:00 a.m.");
        addTimeOption(pickupTimeSelect, "09:00 a.m.");
        addTimeOption(pickupTimeSelect, "10:00 a.m.");
    } else if (dropLocation === "Katai Naka") {
        // Add pickup time options for Runwal
        addTimeOption(pickupTimeSelect, "07:10 a.m.");
        addTimeOption(pickupTimeSelect, "08:10 a.m.");
        addTimeOption(pickupTimeSelect, "09:10 a.m.");
        addTimeOption(pickupTimeSelect, "10:10 a.m.");
    }else if (dropLocation === "Runwal") {
        // Add pickup time options for Runwal
        addTimeOption(pickupTimeSelect, "07:15 a.m.");
        addTimeOption(pickupTimeSelect, "08:15 a.m.");
        addTimeOption(pickupTimeSelect, "09:15 a.m.");
        addTimeOption(pickupTimeSelect, "10:15 a.m.");
    }
    else if (dropLocation === "Xperia Mall") {
        // Add pickup time options for Runwal
        addTimeOption(pickupTimeSelect, "07:20 a.m.");
        addTimeOption(pickupTimeSelect, "08:20 a.m.");
        addTimeOption(pickupTimeSelect, "09:20 a.m.");
        addTimeOption(pickupTimeSelect, "10:20 a.m.");
    }
    else if (dropLocation === "UCO Bank") {
        // Add pickup time options for Runwal
        addTimeOption(pickupTimeSelect, "07:25 a.m.");
        addTimeOption(pickupTimeSelect, "08:25 a.m.");
        addTimeOption(pickupTimeSelect, "09:25 a.m.");
        addTimeOption(pickupTimeSelect, "10:30 a.m.");
    }
    else if (dropLocation === "Stock holding service ltd") {
        // Add pickup time options for Runwal
        addTimeOption(pickupTimeSelect, "07:40 a.m.");
        addTimeOption(pickupTimeSelect, "08:40 a.m.");
        addTimeOption(pickupTimeSelect, "09:40 a.m.");
        addTimeOption(pickupTimeSelect, "10:45 a.m.");
    }
    else if (dropLocation === "MBP Mahape") {
        // Add pickup time options for Runwal
        addTimeOption(pickupTimeSelect, "07:45 a.m.");
        addTimeOption(pickupTimeSelect, "08:45 a.m.");
        addTimeOption(pickupTimeSelect, "09:45 a.m.");
        addTimeOption(pickupTimeSelect, "10:50 a.m.");
    }
    else if (dropLocation === "Ghansoli Station") {
        // Add pickup time options for Runwal
        addTimeOption(pickupTimeSelect, "07:50 a.m.");
        addTimeOption(pickupTimeSelect, "08:50 a.m.");
        addTimeOption(pickupTimeSelect, "09:50 a.m.");
        addTimeOption(pickupTimeSelect, "10:55 a.m.");
    }
    else if (dropLocation === "Reliance Corporate") {
        // Add pickup time options for Runwal
        addTimeOption(pickupTimeSelect, "07:55 a.m.");
        addTimeOption(pickupTimeSelect, "08:55 a.m.");
        addTimeOption(pickupTimeSelect, "09:55 a.m.");
        addTimeOption(pickupTimeSelect, "11:00 a.m.");
    }
    else if (dropLocation === "Airoli") {
        // Add pickup time options for Runwal
        addTimeOption(pickupTimeSelect, "08:00 a.m.");
        addTimeOption(pickupTimeSelect, "09:00 a.m.");
        addTimeOption(pickupTimeSelect, "10:00 a.m.");
        addTimeOption(pickupTimeSelect, "11:05 a.m.");
    }
    else if (dropLocation === "Reliable Tech Park") {
        // Add pickup time options for Runwal
        addTimeOption(pickupTimeSelect, "08:05 a.m.");
        addTimeOption(pickupTimeSelect, "09:05 a.m.");
        addTimeOption(pickupTimeSelect, "10:05 a.m.");
        addTimeOption(pickupTimeSelect, "11:10 a.m.");
    } else {
        // Default options if no specific location is selected
        addTimeOption(pickupTimeSelect, "07:55 a.m.");
        addTimeOption(pickupTimeSelect, "08:55 a.m.");
        addTimeOption(pickupTimeSelect, "09:55 a.m.");
        addTimeOption(pickupTimeSelect, "11:00 a.m.");
    }
}
//---------------------------------------------------------------------------------------------------
function updateReturnTimeOptions() {
    const dropLocation = document.getElementById("drop").value;
    const returnTimeSelect = document.getElementById("toTime");
    returnTimeSelect.innerHTML = ""; // Clear existing options

    // Add dynamic options based on the selected pickup location
    if (dropLocation === "Lodha Palava Phase") {
        addTimeOption(returnTimeSelect, "06:00 p.m.");
        addTimeOption(returnTimeSelect, "07:00 p.m.");
        addTimeOption(returnTimeSelect, "08:00 p.m.");
        addTimeOption(returnTimeSelect, "09:00 p.m.");
    } else if (dropLocation === "Katai Naka") {
        // Add pickup time options for Katai Naka
        addTimeOption(returnTimeSelect, "05:55 p.m.");
        addTimeOption(returnTimeSelect, "06:55 p.m.");
        addTimeOption(returnTimeSelect, "07:55 p.m.");
        addTimeOption(returnTimeSelect, "08:55 p.m.");
    } else if (dropLocation === "Runwal") {
        // Add pickup time options for Runwal
        addTimeOption(returnTimeSelect, "05:50 p.m.");
        addTimeOption(returnTimeSelect, "06:50 p.m.");
        addTimeOption(returnTimeSelect, "07:50 p.m.");
        addTimeOption(returnTimeSelect, "08:50 p.m.");
    }
    else if (dropLocation === "Xperia Mall") {
        // Add pickup time options for Runwal
        addTimeOption(returnTimeSelect, "05:45 p.m.");
        addTimeOption(returnTimeSelect, "06:45 p.m.");
        addTimeOption(returnTimeSelect, "07:45 p.m.");
        addTimeOption(returnTimeSelect, "08:45 p.m.");
    }
    else if (dropLocation === "UCO Bank") {
        // Add pickup time options for Runwal
        addTimeOption(returnTimeSelect, "5:40 p.m.");
        addTimeOption(returnTimeSelect, "6:40 p.m.");
        addTimeOption(returnTimeSelect, "7:40 p.m.");
        addTimeOption(returnTimeSelect, "8:40 p.m.");
    }
    else if (dropLocation === "Stock holding service ltd") {
        // Add pickup time options for Runwal
        addTimeOption(returnTimeSelect, "5:25 p.m.");
        addTimeOption(returnTimeSelect, "6:25 p.m.");
        addTimeOption(returnTimeSelect, "7:25 p.m.");
        addTimeOption(returnTimeSelect, "8:25 p.m.");
    }
    else if (dropLocation === "MBP Mahape") {
        // Add pickup time options for Runwal
        addTimeOption(returnTimeSelect, "5:20 p.m.");
        addTimeOption(returnTimeSelect, "6:20 p.m.");
        addTimeOption(returnTimeSelect, "7:20 p.m.");
        addTimeOption(returnTimeSelect, "8:20 p.m.");
    }
    else if (dropLocation === "Ghansoli Station") {
        // Add pickup time options for Runwal
        addTimeOption(returnTimeSelect, "5:15 p.m.");
        addTimeOption(returnTimeSelect, "6:15 p.m.");
        addTimeOption(returnTimeSelect, "7:15 p.m.");
        addTimeOption(returnTimeSelect, "8:15 p.m.");
    }
    else if (dropLocation === "Reliance Corporate") {
        // Add pickup time options for Runwal
        addTimeOption(returnTimeSelect, "5:10 p.m.");
        addTimeOption(returnTimeSelect, "6:10 p.m.");
        addTimeOption(returnTimeSelect, "7:10 p.m.");
        addTimeOption(returnTimeSelect, "8:10 p.m.");
    }
    else if (dropLocation === "Airoli") {
        // Add pickup time options for Runwal
        addTimeOption(returnTimeSelect, "5:05 p.m.");
        addTimeOption(returnTimeSelect, "6:05 p.m.");
        addTimeOption(returnTimeSelect, "7:05 p.m.");
        addTimeOption(returnTimeSelect, "8:05 p.m.");
    }
    else if (dropLocation === "Reliable Tech Park") {
        // Add pickup time options for Runwal
        addTimeOption(returnTimeSelect, "5:00 p.m.");
        addTimeOption(returnTimeSelect, "6:00 p.m.");
        addTimeOption(returnTimeSelect, "7:00 p.m.");
        addTimeOption(returnTimeSelect, "8:00 p.m.");
    } else {
        // Default options if no specific location is selected
        addTimeOption(returnTimeSelect, "");
        addTimeOption(returnTimeSelect, "");
        addTimeOption(returnTimeSelect, "");
        addTimeOption(returnTimeSelect, "");
    }
}

function addTimeOption(selectElement, time) {
    const option = document.createElement("option");
    option.value = time;
    option.text = time;
    selectElement.appendChild(option);
}