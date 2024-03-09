//import dependecies
const express = require('express');
const QRCode = require('qrcode');

//starting appln
const app = express();
const PORT = 3000;

//QR generation function
app.get("/qrcode", (req, res) => {
    // define the url to generate
    const url = "https://www.google.com.sg";

    // convert url to qrcode (dataURL)
    QRCode.toDataURL(url, (err, qrCodeUrl) => {
        // if errors, send out 500 response
        if (err) {
            res.status(500).send("Internal Server Error");
        } else {
            // if there is no error, send out a response
            res.send(`
                <!DOCTYPE html>
                <html>
                    <head> 
                        <title> QR Code Generator </title>
                    </head>
                    <body>
                        <h1>QR Code Generator</h1>
                        <img src="${qrCodeUrl}" alt="QR Code">
                        <p>Scan the QR code to visit the website</p>
                    </body>
                </html>
            `);
        }
    });
});


// Start the server and listen to requests
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})


