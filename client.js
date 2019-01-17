var Client = require('node-rest-client').Client;

var client = new Client();

client.get("http://localhost:3000/", function(data, response) {
    console.log(data.toString());
});