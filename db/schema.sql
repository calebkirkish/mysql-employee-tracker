DROP DATABASE IF EXISTS starwars_db;

CREATE DATABASE starwars_db;

USE starwars_db;

CREATE TABLE allegiance (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL
    );

CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    role_name VARCHAR(30)UNIQUE NOT NULL,
    midicount INT(10) NOT NULL,
    allegiance_id INT NOT NULL,
    INDEX allegiance_id(allegiance_id),
    CONSTRAINT fk_allegiance FOREIGN KEY (allegiance_id) REFERENCES allegiance(id) ON DELETE CASCADE
);

CREATE TABLE characters (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    force_sensitive BOOLEAN NOT NULL,
    role_id INT not null,
    INDEX role_id(role_id),
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE,
    leader_id INT NULL,
    INDEX leader_id (leader_id),
    CONSTRAINT fk_leader FOREIGN KEY (leader_id) REFERENCES characters(id) ON DELETE SET NULL
);
