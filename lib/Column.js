class Column {
    /**
     *Creates an instance of Column.
     * @param {*} name
     * @memberof Column
     */
    constructor(name) {
        this.name = name;
    }

    /**
     *
     *
     * @static
     * @returns
     * @memberof Column
     */
    static unsignedAllowed() {
        return ["TINYINT", "SMALLINT", "MEDIUMINT", "INT", "BIGINT"];
    }

    /**
     *
     *
     * @memberof Column
     */
    isRequired() {
        throw new Error("param is required");
    }

    /**
     *
     *
     * @returns
     * @memberof Column
     */
    autoIncrement() {
        this.autoIncrement = true;
        return this;
    }

    /**
     *
     *
     * @returns
     * @memberof Column
     */
    unsigned() {
        if (!Column.unsignedAllowed().includes(this.type)) {
            throw "this column can't be unsigned";
        }

        this.unsigned = "UNSIGNED";
        return this;
    }

    /**
     *
     *
     * @returns
     * @memberof Column
     */
    nullable() {
        this.nullable = true;
        this.default = "NULL";
        return this;
    }

    /**
     *
     *
     * @param {*} type
     * @returns
     * @memberof Column
     */
    assignType(type) {
        this.type = type;
        return this;
    }

    /**
     *
     *
     * @param {*} size
     * @returns
     * @memberof Column
     */
    assignSize(size) {
        this.size = size;
        return this;
    }

    /**
     *
     *
     * @param {*} comment
     * @memberof Column
     */
    comment(comment) {
        this.comment = comment;
    }
    
    // STRING DATA TYPES:

    /**
     *
     *
     * @param {*} [size=this.isRequired()]
     * @returns
     * @memberof Column
     */
    char(size = this.isRequired()) {
        return this.assignType("CHAR").assignSize(size);
    }

    /**
     *
     *
     * @param {*} [size=this.isRequired()]
     * @returns
     * @memberof Column
     */
    varchar(size = this.isRequired()) {
        return this.assignType("VARCHAR").assignSize(size);
    }

    /**
     *
     *
     * @param {*} size
     * @returns
     * @memberof Column
     */
    text(size) {
        return this.assignType("TEXT").assignSize(size);
    }

    /**
     *
     *
     * @returns
     * @memberof Column
     */
    longText() {
        return this.assignType("LONGTEXT");
    }

    // NUMERIC DATA TYPES:

    /**
     *
     *
     * @param {*} size
     * @returns
     * @memberof Column
     */
    integer(size) {
        return this.assignType("INT").assignSize(size);
    }

    /**
     *
     *
     * @param {*} size
     * @returns
     * @memberof Column
     */
    tinyInteger(size) {
        return this.assignType("TINYINT").assignSize(size);
    }

    /**
     *
     *
     * @param {*} size
     * @returns
     * @memberof Column
     */
    smallInteger(size) {
        return this.assignType("SMALLINT").assignSize(size);
    }

    /**
     *
     *
     * @param {*} size
     * @returns
     * @memberof Column
     */
    mediumInteger(size) {
        return this.assignType("MEDIUMINT").assignSize(size);
    }

    /**
     *
     *
     * @param {*} size
     * @returns
     * @memberof Column
     */
    bigInteger(size) {
        return this.assignType("BIGINT").assignSize(size);
    }

    /**
     *
     *
     * @param {*} size
     * @param {*} decimalSize
     * @returns
     * @memberof Column
     */
    double(size, decimalSize) {
        this.assignType("DOUBLE").assignSize(size);
        this.decimalSize = decimalSize;
        return this;
    }

    // DATE AND TIME DATA TYPES:

    /**
     *
     *
     * @returns
     * @memberof Column
     */
    date() {
        return this.assignType("DATE");
    }

    /**
     *
     *
     * @returns
     * @memberof Column
     */
    dateTime() {
        return this.assignType("DATETIME");
    }

    /**
     *
     *
     * @returns
     * @memberof Column
     */
    timestamp() {
        return this.assignType("TIMESTAMP");
    }

    /**
     *
     *
     * @param {*} charset
     * @returns
     * @memberof Column
     */
    charset(charset) {
        this.charset = charset;
        return this;
    }

    /**
     *
     *
     * @param {*} collation
     * @returns
     * @memberof Column
     */
    collation(collation) {
        this.collation = collation;
        return this;
    }
}

module.exports = Column;
