const Schema = require("../lib/Schema");

let sch = Schema.create("users", table => {
    table
        .column("id")
        .integer()
        .autoIncrement()
        .unsigned();

    table
        .column("name")
        .text(100)
        .nullable();

    table.column("float").double(20, 10);


    table
        .column("tiny")
        .tinyInteger()
        .unsigned()
        .comment('comment on tiny');
});

// console.log(sch.blueprint.structure.columns);

module.exports = JSON.stringify(sch.blueprint);
