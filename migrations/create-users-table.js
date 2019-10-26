const Schema = require("../lib/Schema");

let sch = Schema.create("users", table => {
    table
        .column("id")
        .integer()
        .autoIncrement()
        .unsigned()
        .query;

    table
        .column("name")
        .text(100)
        .nullable();

    table.column("float").double(20, 10);

    table
        .column("tiny")
        .tinyInteger()
        .unsigned()
        .comment("comment on tiny");

    table
        .primary("id")
        .unique("tiny")
        .charset("utf8mb4")
        .collation("utf8mb4_persian_ci");
});

module.exports = JSON.stringify(sch.blueprint);
