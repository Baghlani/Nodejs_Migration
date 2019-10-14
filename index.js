//Besmellah alRahman alRahim

//RUN SERVER

const { createServer } = require("http");
const { routes } = require("./routes");
const blueprint = require("./migrations/create-users-table");

createServer((request, response) => {
    const url = request.url;

    typeof routes[url] === "undefined"
        ? routes["undefined"](url, response)
        : routes[url](url, response, blueprint);
}).listen(5000);
