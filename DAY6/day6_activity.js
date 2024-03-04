
const prompt = require('prompt-sync')();
async function startTimer() {
    //const startTimer = async() => {
    //let time = prompt("Enter a time between 1 and 60 seconds:", "10");
    let time = parseInt(prompt("Enter a time between 1 and 60 seconds:", "10"), 10);

    // Check if the entered time is within the valid range
    if (isNaN(time) || time < 1 || time > 60) {
        alert("Invalid input. Please enter a number between 1 and 60.");
        return;
    }

    // Function to wait for a specified number of milliseconds
    const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

    // Loop to decrement the time
    while (time > 0) {
        console.log(`Remaining time: ${time} seconds`);
        await wait(1000); // Wait for 1 second
        time--;
    }

    console.log("Time is up!");
}


startTimer();  
