"use strict";

const http = require("http");
const port = "8081";
const url = require("url");

function requestHandler(request, response) {
	const pathname = url.parse(request.url).pathname;
	console.log(request.url);
	if (pathname == "/"){
		response.end("Hello Node.js server");
	} else if ( pathname == "/data") {
		response.end(JSON.stringify({
			goods: "chocolate",
			price: 12,
			number: 180
		}));
	} else {
		response.writeHead(404, {
			"Content-Type": "text/html"
		});
		response.write("Bad request");
		response.end();
	}
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
	if (err) {
		return console.log("Something had happened", err);
	}
	console.log("Server is listening on ${port}");
});
