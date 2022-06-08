
const fs = require('fs');
//const path = require('path');

const requestHandler = (req, res) => {

    fs.readFile(__dirname + 'index.html', (err, data) => {
        if (err) {
            console.error(err.message);
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end('<html><head><title>Resource not found</title></head></html>');
            return;
        };
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
    });
}

