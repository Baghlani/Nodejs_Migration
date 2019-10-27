class QueryBuilder {
    constructor(table) {
        this.table = table;
        this.blueprint = table.blueprint;
    }

    buildTableCreationQuery() {
        let dbName = process.env.DB_NAME;
        let tableName = this.blueprint.name;
        let statement = `CREATE TABLE \`${dbName}\`.\`${tableName}\` (`;
        statement += this.createColumns();
        statement += this.createModifiers() + ")";
        console.log(statement);
        // statement += options + ";";

        return statement;
    }
    createColumns() {
        let columnsBlueprint = this.blueprint.structure.columns;
        let statement = "";
        for (let key in columnsBlueprint) {
            statement += this.createColumn(columnsBlueprint[key]);
        }

        return statement;
    }
    createColumn(col) {
        let statement =
            `\`${col.name}\` ${col.type}${col.getArgs}` +
            ` ${col.getUnsigned}` +
            ` ${col.getNullable} ${col.getIncrement}` +
            ` ${col.getDefault} ${col.getComment},`;

        return statement.replace(/  +/g, " ");
    }

    createModifiers() {
        return this.table.getPrimary;
    }
}

module.exports = QueryBuilder;
