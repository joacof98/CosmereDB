use cosmere;
show tables;

INSERT INTO characters(name,alias,residence,ethnicity,books,is_alive,description,saga,planet)
VALUES ('denth', 'VaraTreledees', 
'Hallandren', 'Human', 'Warbreaker', 'Dead', 'Denth is one of the Five Scholars from Nalthis.
He may also be a member of the royal line of Idris.Denth is a superb swordsman. 
He is so quick he can kill most people, even trained warriors, before they can react. 
Even accomplished fighters such as Vasher are clearly outmatched by him.
Denth is remarkably clever and understands Awakening on an advanced level, as one of the Five Scholars',
 NULL, NULL);

INSERT INTO books(name,pages,pub_date,saga)
VALUES ('Warbreaker', 592,'2009-6-09' , NULL);

INSERT INTO sagas(name,books_quantity,planet,magic_system)
VALUES ('Breath of Gods', 1, NULL, NULL);

INSERT INTO planets(name,shard,description,magic_system)
VALUES ('Nalthis',
 'Devotion, Dominion',
 'Nalthis is the name of the Shardworld on which the novel Warbreaker takes place.
 It has a number of states, including Idris and Hallandren. A person from Nalthis is called a Nalthian.',
 NULL);
 
INSERT INTO magic_systems(name,description,saga)
VALUES ('Biochromatic Breath',
 'BioChromatic Breath, also known simply as Breath, is the common form of investiture on Nalthis. 
 Every Nalthian is born with one Breath, though a person may choose to transfer that Breath to another person.
 It is possible for children of Nalthian parents with Breath born away from Nalthis to have their own Breath.
 When a person dies, the Breath they were carrying returns to Endowment.
 Humans are able to use their Breath to perform Awakening as well as gaining benefits from having one or more Breaths.',
 NULL);
 
 -- Updating foreigns keys --
 UPDATE characters
 SET saga = 3, planet = 3
 WHERE char_id = 9;
 
 UPDATE books
 SET saga = 3
 WHERE book_id = 7;
 
 UPDATE sagas
 SET planet = 3, magic_system = 3
 WHERE saga_id = 3;
 
 UPDATE planets
 SET magic_system = 3
 WHERE planet_id = 3;
 
 UPDATE magic_systems
 SET saga = 3
 WHERE magic_system_id = 3;
 
INSERT INTO books VALUES (5, 'Stormlight II', 1088,'2014-3-04', 2);
INSERT INTO books VALUES (6, 'Stormlight III', 1220,'2017-11-14', 2);