-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

database name: 'react-shopping-list'

CREATE TABLE items (
	id SERIAL PRIMARY KEY,
	name varchar(80),
	quantity DECIMAL,
	unit varchar(20),
	isPurcashed BOOLEAN DEFAULT FALSE
);
INSERT INTO "items" ( "name", "quantity", "unit") 
VALUES ('apples', '5', ''),
('bread', '5', 'loaves'),
('rice', '2.4', 'pounds');

