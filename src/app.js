const http = require("http");
const getUsers = require("./modules/users");
const path = require("path");

const port = process.env.PORT || 3003;

const server = http.createServer((request, response) => {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const helloParam = url.searchParams.get("hello");

  if (url.searchParams.has("hello")) {
    if (helloParam) {
      response.statusCode = 200;
      response.setHeader("Content-Type", "text/plain");
      response.end(`Hello, ${helloParam}!`);
    } else {
      response.statusCode = 400;
      response.setHeader("Content-Type", "text/plain");
      response.end("Enter a name");
    }
  } else if (url.searchParams.has("users")) {
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");

    const usersData = getUsers();
    
    response.end(usersData);
  } else if (url.searchParams.toString() === "") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.end("Hello, World!");
  } else {
    response.statusCode = 500;
    response.setHeader("Content-Type", "text/plain");
    response.end();
  }
});

server.listen(port, () => {
  console.log(`Сервер запущен по адресу http://127.0.0.1:${port}`);
});
