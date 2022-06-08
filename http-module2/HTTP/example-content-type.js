const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const requestHandler = (req, res) => {
    let obj = {"name": "Bobby", "message": "Hello World"};
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/json');
    res.end(JSON.stringify(obj));
}

const server = http.createServer(requestHandler);

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);

});

//after postman req, no logs
//in response JSON format in browser {"name":"Bobby","message":"Hello World"}