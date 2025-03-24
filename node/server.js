// const http = require("http");
// const { url } = require("inspector");
// const server = http.createServer((request, response) => {
//   //   console.log('client url',);
//   if (request.url === "/about")
//     // response.end('about orson bn')
//     response.end("hello world");
// });

// server.listen(3000, () => {
//   console.log("Server listening at port 3000");
// });

const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  res.write("<h1>Home Page</h1>");
  res.end();
});

server.listen(3000, () => {
  console.log("Server listening at port 3000");
});
