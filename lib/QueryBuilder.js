class QueryBuilder {
    constructor(blueprint) {
        this.blueprint = blueprint;
    }

    buildTableCreationQuery() {
        this.createColumns();
    }
    createColumns() {
        let columnsBlueprint = this.blueprint.structure.columns;
        for (let key in columnsBlueprint) {
            console.log(this.createColumn(columnsBlueprint[key]));
        }
    }
    createColumn(col) {
        let query =
            `\`${col.name}\` ${col.type}${col.getArgs}` +
            ` ${col.getUnsigned}` +
            ` ${col.getNullable} ${col.getIncrement}` +
            ` ${col.getDefault} ${col.getComment},`;

        return query.replace(/  +/g, " ");
    }
}

module.exports = QueryBuilder;
