USE starwars_db;

INSERT INTO allegiance(name)
VALUES 
    ('dark side'),
    ('light side');

INSERT into roles
    (role_name, allegiance_id, midicount)

    VALUES
    ('Jedi Knight', 2, 20000),
    ('Smuggler', 2, 6500),
    ('Princess', 2, 20000),
    ('The Child', 2, 19000),
    ('Concubine', 1, 12200),
    ('The Chosen One', 2, 27800),
    ('Emporer', 1, 21500),
    ('Grand Master', 2, 21000),
    ('Jedi Master', 2, 21000),
    ('The Count', 1, 18100),
    ('Sith Lord', 1, 13600),
    ('Wookie', 2, 7000);

INSERT INTO characters (name, role_id, leader_id, force_sensitive)
    VALUES
    ('Luke Skywalker', 1, NULL, 1),
    ('Han Solo', 2, NULL, 0),
    ('Leia Organa-Solo', 3, 2, 1),
    ('Grogu', 4, NULL, 1),
    ('Mara Jade', 5, NULL, 1),
    ('Anakin Skywalker', 6, NULL, 1),
    ('Darth Sidious', 7, 1, 1),
    ('Yoda', 8, 2, 1),
    ('Mace Windu', 9, NULL, 1),
    ('Count Dooku', 10, NULL, 1),
    ('Darth Maul', 11, NULL, 1),
    ('Chewbacca', 12, 2, 0);

