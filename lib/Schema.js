const Blueprint = require("./Blueprint");
const table = new Blueprint();

function create(tableName, cb) {
    table.blueprint.name = tableName;
    cb(table);

    return table;
}

function build(params) {
    console.log(params);
}

module.exports = { create, build };
