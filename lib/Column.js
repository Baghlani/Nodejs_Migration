class Column {
    constructor(name) {
        this.name = name;
    }

    static unsignedAllowed() {
        return ["TINYINT", "SMALLINT", "MEDIUMINT", "INT", "BIGINT"];
    }
    isRequired() {
        throw new Error("param is required");
    }

    autoIncrement() {
        this.autoIncrement = true;
        return this;
    }
    unsigned() {
        if (!Column.unsignedAllowed().includes(this.type)) {
            throw "this column can't be unsigned";
        }

        this.unsigned = UNSIGNED;
        return this;
    }
    nullable() {
        this.nullable = true;
        this.default = "NULL";
        return this;
    }

    assignType(type) {
        this.type = type;
        return this;
    }

    assignSize(size) {
        this.size = size;
        return this;
    }

    comment(comment) {
        this.comment = comment;
    }
    // STRING DATA TYPES:

    char(size = this.isRequired()) {
        return this.assignType("CHAR").assignSize(size);
    }

    varchar(size = this.isRequired()) {
        return this.assignType("VARCHAR").assignSize(size);
    }

    text(size) {
        return this.assignType("TEXT").assignSize(size);
    }

    longText() {
        return this.assignType("LONGTEXT");
    }

    // NUMERIC DATA TYPES:

    integer(size) {
        return this.assignType("INT").assignSize(size);
    }

    tinyInteger(size) {
        return this.assignType("TINYINT").assignSize(size);
    }

    smallInteger(size) {
        return this.assignType("SMALLINT").assignSize(size);
    }

    mediumInteger(size) {
        return this.assignType("MEDIUMINT").assignSize(size);
    }

    bigInteger(size) {
        return this.assignType("BIGINT").assignSize(size);
    }

    double(size, decimalSize) {
        this.assignType("DOUBLE").assignSize(size);
        this.decimalSize = decimalSize;
        return this;
    }

    // DATE AND TIME DATA TYPES:

    date() {
        return this.assignType("DATE");
    }

    dateTime() {
        return this.assignType("DATETIME");
    }

    timestamp() {
        return this.assignType("TIMESTAMP");
    }

    cahrset(charset) {
        this.charset = charset;
        return this;
    }

    collation(collation) {
        this.collation = collation;
        return this;
    }
}

module.exports = Column;
