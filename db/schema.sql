DROP DATABASE IF EXISTS starwars_db;

CREATE DATABASE starwars_db;

USE starwars_db;

CREATE TABLE characters (
    id INT AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    is_jedi BOOLEAN NOT NULL,
    role_id 
    PRIMARY KEY (id)
    FOREIGN KEY (role_id) REFERENCES roles(role_id)
)

SELECT * FROM characters WHERE is_jedi=1

INSERT INTO characters (name, is_jedi)
VALUES ('Luke Skywalker', 1)
INSERT INTO characters (name, is_jedi)
VALUES ('Han Solo', 0)
INSERT INTO characters (name, is_jedi)
VALUES ('Leia Organa-Solo', 1)
INSERT INTO characters (name, is_jedi)
VALUES ('Baby Yoda', 1)
