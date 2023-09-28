//Create a server...
const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method, req.headers);
    // process.exit();

    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');

        return res.end;
    }

    if(url === "/message" && method === "POST"){
        //take user input as a chunk and push into empty array
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk);
        });
        //Buffer the chunks
        return req.on('end', () => {
           const parsedBody = Buffer.concat(body).toString();
           const message = parsedBody.split('=')[1];
           fs.writeFile('message.txt', message, (error) => {

               //Create file for above user input on form
               //Send redirect status code in response
               res.statusCode = 302;
               //redirect to '/'
               res.setHeader('Location', '/');
               return res.end();

           });
        });

    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Hello world!</h1></body>');
    res.write('</html>');
    res.end();
});

//Listen for requests on localhost:9000
server.listen(9000, "localhost");


