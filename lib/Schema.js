const Blueprint = require("./Blueprint");
const QueryBuilder = require("./QueryBuilder");
const table = new Blueprint();

function create(tableName, makeBlueprint) {
    table.blueprint.name = tableName;
    makeBlueprint(table);

    const qb = new QueryBuilder(table);

    qb.buildTableCreationQuery();

    // storeTable();

    return table;
}

function build(params) {
    console.log(params);
}

module.exports = { create, build };
