DROP DATABASE IF EXISTS starwars_db;

CREATE DATABASE starwars_db;

USE starwars_db;

CREATE TABLE allegiance (
    id INT AUTO_INCREMENT,
    name VARCHAR(20),
    PRIMARY KEY (id)
)

CREATE TABLE role (
    id INT AUTO_INCREMENT,
    role_name VARCHAR(30),
    midicount INT(10),
    allegiance_id INT,
    PRIMARY KEY (id)
    FOREIGN KEY (allegiance_id)
)

CREATE TABLE characters (
    id INT AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    allegiance_id,
    is_jedi BOOLEAN NOT NULL,
    role_id INT,
    leader_id INT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES roles(id),
    FOREIGN KEY (leader_id) REFERENCES characters(id)
)

INSERT INTO allegiance(name)
VALUES 
    ('dark side'),
    ('light side')

INSERT into role 
    (role_name, midicount, allegiance_id)

VALUES
    ('Jedi Knight', 15000, 2)

INSERT INTO characters (name, allegiance_id, role_id, leader_id,is_jedi)
VALUES ('Luke Skywalker', 2, 1, 1)

