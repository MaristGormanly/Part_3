drop database if exists otTopTen;

create database if not exists otTopTen character set utf8;

	use otTopten;


create table topTen (id integer not null primary key auto_increment, playerName varchar(50),)
	
insert into topTen (playerName, playerScore, dataEarned) values ('Rob', 600, '2018/12/2');
insert into topTen (playerName, playerScore, dataEarned) values ('Santa Claus', 800, '2018/12/2');
insert into topTen (playerName, playerScore, dataEarned) values ('Louie', 1000, '2018/12/2');
	
create user 'ttUser'@'localhost' identified by '12345';
grant all on otTopTen.topTen to 'ttUser'@'localhost';

		