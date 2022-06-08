
const fs = require('fs');
const requestHandler = (req, res) => {

    fs.readFile(_dirname + 'index.html', (err, data) => {
        if (err) {
            console.error(err.message);
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end('<html><head><title>Resource not found</title></head></html>');
            return;
        };
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
});
}

