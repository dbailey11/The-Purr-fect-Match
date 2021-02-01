DROP DATABASE IF EXISTS `catMarket`;
CREATE DATABASE `catMarket`;
USE `catMarket`;


/* Create a table for all your cats*/
CREATE TABLE `allpets` (
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`petName` VARCHAR( 255 ) NOT NULL,
	`breed` VARCHAR( 255 ) NOT NULL,
	`age` INT(11) NOT NULL,
    `zipCode` INT(11) NOT NULL,
    `ownerName` VARCHAR( 255 ) NOT NULL,
	PRIMARY KEY ( `id` )
);


INSERT INTO allpets (petName, breed, age, zipCode, ownerName) VALUES ('Skittles', 'Persian Cat', 5, 80104, 'Shawn');
INSERT INTO allpets (petName, breed, age, zipCode, ownerName) VALUES ('Snowflake', 'British Shorthair', 80010, 'Michelle');
INSERT INTO allpets (petName, breed, age, zipCode, ownerName) VALUES ('Oliver', 'Ragdoll', 5, 80014, 'Devyn');
INSERT INTO allpets (petName, breed, age, zipCode, ownerName) VALUES ('Milo', 'Maine Coon', 9, 90001, 'Ashley');
INSERT INTO allpets (petName, breed, age, zipCode, ownerName) VALUES ('Shadow', 'American Shorthair', 3, 85001, 'Christian');
INSERT INTO allpets (petName, breed, age, zipCode, ownerName) VALUES ('Jameson', 'Ragdoll', 7, 88901, 'Cody');
INSERT INTO allpets (petName, breed, age, zipCode, ownerName) VALUES ('Mario', 'Persian Cat', 2, 10001, 'Ben');
INSERT INTO allpets (petName, breed, age, zipCode, ownerName) VALUES ('Jameson', 'Maine Coon', 10, 98101, 'Jennifer');
INSERT INTO allpets (petName, breed, age, zipCode, ownerName) VALUES ('Leo', 'Sphynx', 8, 60007, 'Robert');