create database web;
use login;
CREATE TABLE usuario (
    cod_user int PRIMARY KEY AUTO_INCREMENT ,
    nome_user   varchar(50) ,
    email_user  varchar(50),
    senha_user  varchar(50)
);

