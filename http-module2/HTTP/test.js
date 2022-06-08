const http = require('http'); //importing a module

const hostname = 'localhost'; //created variable for a loopback typical resolves to 127.0.0.1
const port = 3000;
//htttp.createServer takes 2 parameters http.IncomingMessage and http.ServerRepsonse respectively
const server = http.createServer((req, res) => { //method to create an instance of http.Server 
    //for handling every single inbound request 
    console.log('-- Inbound Request --');
    console.log(`IP adress: ${req.socket.remoteAdress}`);
    console.log(`Request URL: $(req.url}`);
    console.log(`Request method: ${req.method}\n`);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World')
})

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
})
