const http = require("http");
const port = 5000;
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
  }
  res.end(`
   <h1>Opps!!
   <p>We can't seem to find page you are looking for 
   </p>
 <a href='/'> Back to Home page</a>
   `);
});
server.listen(port);
