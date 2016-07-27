/**
 * Created by Adrian on 7/25/2016.
 */

"use strict";


var http = require("http");
var server;

exports.start = function () {
        server = http.createServer();
        server.on("request", function (request, response) {
                     var body = "<html><head><title>Node HTTP Spike</title></head>" +
                         "<body><p>This is a spike of Node's HTTP server.</p></body></html>";
        response.end(body);
    });
    server.listen(8080);
};

exports.stop= function (callback) {
     server.close(callback);
};
