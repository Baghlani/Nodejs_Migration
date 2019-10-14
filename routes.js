exports.routes = {
    "/blueprint": (url, response, blueprint) => {
        response.writeHead(200);
        response.write(blueprint);
        response.end();
    },
    undefined: (url, response) => {
        response.writeHead(404, { "content-type": "text/html" });
        response.write(
            `<strong>Sorry!</strong>
            <br>
            '<b>${url}</b>' is not Found`
        );
        response.end();
    }
};
