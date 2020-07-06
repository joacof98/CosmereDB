CREATE DATABASE cosmere;
use cosmere;
DROP DATABASE cosmere;
SELECT description FROM reviews;
-- -- -- -- TABLES -- -- -- --
CREATE TABLE books (
  book_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  pages INT NOT NULL,
  pub_date DATE NOT NULL,
  saga INT
);

CREATE TABLE characters (
  char_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  alias VARCHAR(500) NOT NULL,
  residence VARCHAR(255) NOT NULL,
  ethnicity VARCHAR(255) NOT NULL,
  books VARCHAR(255) NOT NULL,
  is_alive VARCHAR(255) NOT NULL,
  description VARCHAR(1000) NOT NULL,
  saga INT,
  planet INT
);

CREATE TABLE sagas (
  saga_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  books_quantity INT NOT NULL,
  planet INT,
  magic_system INT
);

CREATE TABLE planets (
  planet_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  shard VARCHAR(255) NOT NULL,
  description VARCHAR(1000) NOT NULL,
  magic_system INT
);

CREATE TABLE magic_systems (
  magic_system_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(1000) NOT NULL,
  saga INT
);

CREATE TABLE reviews (
  review_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  description VARCHAR(5000) NOT NULL,
  rating INT NOT NULL,
  book VARCHAR(255)
);

-- -- -- -- RELATIONSHIPS -- -- -- --
ALTER TABLE books
ADD FOREIGN KEY(saga)
REFERENCES sagas(saga_id)
ON DELETE SET NULL;

ALTER TABLE characters
ADD FOREIGN KEY(saga)
REFERENCES sagas(saga_id)
ON DELETE SET NULL;

ALTER TABLE characters
ADD FOREIGN KEY(planet)
REFERENCES planets(planet_id)
ON DELETE SET NULL;

ALTER TABLE sagas
ADD FOREIGN KEY(planet)
REFERENCES planets(planet_id)
ON DELETE SET NULL;

ALTER TABLE sagas
ADD FOREIGN KEY(magic_system)
REFERENCES magic_systems(magic_system_id)
ON DELETE SET NULL;

ALTER TABLE planets
ADD FOREIGN KEY(magic_system)
REFERENCES magic_systems(magic_system_id)
ON DELETE SET NULL;

ALTER TABLE magic_systems
ADD FOREIGN KEY(saga)
REFERENCES sagas(saga_id)
ON DELETE SET NULL;

