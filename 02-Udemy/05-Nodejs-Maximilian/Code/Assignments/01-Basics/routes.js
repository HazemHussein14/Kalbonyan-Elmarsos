const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Assignment</title></head>");
    res.write(
      "<body><h1>welcome to the first assignment</h1><form action='/create-user' method='POST'><input name='username' type='text'/><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");
    res.end();
  }

  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Assignment</title></head>");
    res.write(
      "<body><ul><li>User 1</li> <li>User 2</li> <li>User 3</li></ul></body>"
    );
    res.write("</html>");
    res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split("=")[1];
      console.log(username);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
};

module.exports.handler = requestHandler;
