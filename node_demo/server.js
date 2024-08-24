//https://www.youtube.com/watch?v=F6k8lTrAE2g
const http = require("http");

const server = http
  .createServer((req, res) => {
    const { headers, method, url } = req;
    let body = [];

    req
      .on("error", function (err) {
        console.log(err);
      })
      .on("data", function (chuck) {
        body.push(chuck);
      })
      .on("end", function () {
        body = Buffer.concat(body).toString();

        res.on("error", function (err) {
          console.log(err);
        });

        res.statusCode = 300;
        res.setHeader("Content-Type", "application/json");
        const resBody = { headers, method, url };

        res.write(JSON.stringify(resBody));
        res.end();
      });
  })
  .listen(8000);
