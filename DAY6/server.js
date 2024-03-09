// Import the http module from Node.js to create a server
const http = require('http');

// Define the port on which the server will listen
const port = 3000;

// Create a server instance
const server = http.createServer((req, res) => {
    // Set HTTP header to respond with HTML content
    res.writeHead(200, {'Content-Type': 'text/html'});

    // Send an HTML response
    res.write(`
        <html>
            <head>
                <title>Timer App</title>
            </head>
            <body>
                <script>
                    // Asynchronous function to start the timer
                    async function startTimer() {
                        // Prompt user for time input and parse it as an integer
                        let time = parseInt(prompt("Enter a time between 1 and 60 seconds:", "10"), 10);

                        // Validate input; if invalid, show an alert and return
                        if (isNaN(time) || time < 1 || time > 60) {
                            alert("Invalid input. Please enter a number between 1 and 60.");
                            return;
                        }

                        // Function to create a promise that resolves after a set time
                        const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

                        // Loop to decrement time every second
                        while (time > 0) {
                            // Log remaining time in the console and display it on the webpage
                            console.log(\`Remaining time: \${time} seconds\`);
                            document.body.innerHTML += \`<p>Remaining time: \${time} seconds</p>\`;
                            await wait(1000); // Wait for 1 second
                            time--; // Decrement the time
                        }

                        // Alert the user when time is up
                        alert("Time is up!");
                    }

                    // Call the startTimer function to initiate the timer
                    startTimer();
                </script>
            </body>
        </html>
    `);

    // End the response
    res.end();
});

// Start the server and listen on the specified port
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
