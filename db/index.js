'use strict';

const connection = require('./connection');

class DB {
    constructor(connection) {
        this.connection = connection;
    }

    viewAllCharacters() {
        return this.connection.query(
            `
            SELECT
                characters.id,
                characters.name AS Characters,
                allegiance.name AS Allegiance,
                roles.role_name AS Role,
                roles.midicount AS Midicount
            FROM
                characters
            LEFT JOIN
                roles ON characters.role_id = roles.id
            LEFT JOIN
                allegiance ON roles.allegiance_id = allegiance.id
            ORDER BY
                characters.id;
            `
        );
    }
}

module.exports = new DB(connection);