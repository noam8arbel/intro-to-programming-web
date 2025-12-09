let clicks = []; // starts as an empty array
let min_clicks = 10; // the minimum number of clicks to calculate the BPM

let tapButtonVariable = document.getElementById('tapButton');
tapButtonVariable.addEventListener('click', getBPM);

function getBPM() {
    // Get the timestamp for NOW and save it in a variable
    let date_right_now = Date.now();

    // Add that new timestamp to the array
    clicks.push(date_right_now);

    // Check if the length of the array is equal to or greater than min_clicks (10) – if yes, calculate!
    if (clicks.length >= min_clicks) {

        // Pass the clicks array to a function called calculateBPMFromClicks and save the return value in calculatedBPM
        let calculatedBPM = calculateBPMFromClicks(clicks);

        // Bring up an alert that tells the user the BPM that was calculated
        alert("Your calculated BPM is: " + calculatedBPM);

        // Erase all the timestamps to get ready for the next set of user clicks
        clicks = [];
    }
}

function calculateBPMFromClicks(clickTimestamps) {
    let totalInterval = 0;

    for (let i = 1; i < clickTimestamps.length; i++) {
        let interval = clickTimestamps[i] - clickTimestamps[i - 1];
        totalInterval += interval;
    }

    let numIntervals = clickTimestamps.length - 1;

    let averageInterval = totalInterval / numIntervals;

    return Math.round(60000 / averageInterval);
}