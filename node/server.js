const http = require("http");
const { url } = require("inspector");
const server = http.createServer((request, response) => {
  //   console.log('client url',);
  if (request.url === "/about")
    // response.end('about orson bn')
    response.end("hello world");
});

server.listen(3000, () => {
  console.log("Server listening at port 3000");
});
