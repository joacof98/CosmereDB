use cosmere;
-- Get all characters who are alive
SELECT * FROM characters WHERE is_alive = 'Alive';

-- Get all characters names who live in Luthadel
SELECT name AS 'Char Name' FROM characters
WHERE residence = 'Luthadel';

-- How many chars are Alezi and are alive?
SELECT COUNT(name) as Amount FROM characters
WHERE ethnicity = 'Alezi' AND is_alive = 'alive';

-- Get all books names and their respective saga
SELECT books.name as 'Book', sagas.name as 'Saga'
FROM books
JOIN 
sagas
ON books.saga = sagas.saga_id;

-- Get the name of all the shards and a desc of their power
SELECT planets.shard, magic_systems.description
FROM planets
JOIN magic_systems
ON planets.magic_system = magic_systems.magic_system_id;

-- Get the name and ethnicity of the chars who live in Roshar.
SELECT name, ethnicity FROM characters
WHERE planet
IN (
  SELECT planet_id FROM planets WHERE name = 'Roshar'
);

-- Get all books names and their respective magic system
SELECT books.name as 'Book', magic_systems.name as 'MS'
FROM books
JOIN sagas ON books.saga = sagas.saga_id
JOIN magic_systems ON sagas.magic_system = magic_systems.magic_system_id;
 
-- Get the total number of pages of each saga
SELECT sagas.name, SUM(pages) as 'Total Pages' FROM sagas
JOIN books
ON books.saga = sagas.saga_id
GROUP BY sagas.name
ORDER BY SUM(pages) DESC;
 
-- Get all books published between march 2009 and october 2015
SELECT name as 'Book Name', pub_date as 'Date'
FROM books
WHERE pub_date BETWEEN '2009-03-01' AND '2015-10-01';

-- Get the name, alias of the dead chars with their planets and saga name (distributed JOIN)
SELECT characters.name as 'Char Name',
	   characters.alias as 'Alias',
       planets.name as 'Planet',
       sagas.name as 'Saga of Books'
FROM characters
JOIN sagas ON characters.saga = sagas.saga_id
JOIN planets ON characters.planet = planets.planet_id
WHERE characters.is_alive = 'Dead';

-- Get the name of the planet with more quantity of books
SELECT planets.name, MAX(books_quantity) AS 'Books'
FROM planets
JOIN sagas ON sagas.planet = planets.planet_id;

SELECT * FROM characters;