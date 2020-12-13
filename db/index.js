'use strict';

const connection = require('./connection');

class DB {
    constructor(connection) {
        this.connection = connection;
    }

    viewRoles() {
        return this.connection.query(
        `
        SELECT
            roles.id AS ID,
            roles.role_name AS Role,
            roles.midicount AS Midicount,
            allegiance.name AS allegiance
        FROM
            roles
        LEFT JOIN
            allegiance ON roles.allegiance_id = allegiance.id
        ORDER BY
            roles.id;
            `
        );
    }

    viewAllCharacters() {
        return this.connection.query(
            `
            SELECT
                characters.id,
                characters.name AS Characters,
                roles.role_name AS Roles,
                roles.midicount AS Midicount,
                allegiance.name AS Allegiance
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

    viewAllegiance() {
        return this.connection.query (
            `
            SELECT
                allegiance.id,
                allegiance.name
            FROM
                allegiance
            `
        )
    }

    createRole(roles) {
        return this.connection.query (
            `
            INSERT INTO
                roles 
            SET
                ?   
            `, roles
        );
    }
    createCharacter(character) {
        return this.connection.query (
            `
            INSERT INTO
                characters 
            SET
                ?   
            `, character
        );
    }
    
}

module.exports = new DB(connection);