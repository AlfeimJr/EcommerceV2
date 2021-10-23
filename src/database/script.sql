CREATE DATABASE devgames;

CREATE TABLE devgames.produto (
  id INT(10) PRIMARY KEY auto_increment,
  nome VARCHAR,
  fabricante_id INT(10)FOREIGN KEY,
  preco VARCHAR,
  imagem VARCHAR,
  quantidade INT(10),
  ativo tinyINT(1),
  created_at TIMESTAMP,
  content VARCHAR,  
);

CREATE TABLE devgames.fabricante (
  id INT(10) PRIMARY KEY auto_increment,
  nome VARCHAR,
  content VARCHAR,
  produto_id INT(10)FOREIGN KEY,
  created_at TIMESTAMP
);

CREATE TABLE devgames.produto_oferta (
  id INT(10) PRIMARY KEY auto_increment,
  produto_id INT(10)FOREIGN KEY,
  content VARCHAR,
  created_at TIMESTAMP
);

CREATE TABLE devgames.usuario(
  id INT(10) PRIMARY KEY auto_increment,
  nome VARCHAR,
  email VARCHAR,
  senha VARCHAR,
  admnistrador tinyINT(1),
  avatar VARCHAR,
  created_at TIMESTAMP,
  content VARCHAR,  
);

CREATE TABLE devgames.carrinho(
  id INT(10) PRIMARY KEY auto_increment,
  produto_id INT(10)FOREIGN KEY,
  quantidade VARCHAR,
  preco_total float(2),
  content VARCHAR,
  created_at TIMESTAMP,  
);

CREATE TABLE devgames.compra(
  id INT(10) PRIMARY KEY auto_increment,
  usuario_id INT(10)FOREIGN KEY,
  produto_id INT(10)FOREIGN KEY,
  rua VARCHAR,
  numero INT(10),
  bairro VARCHAR,
  cidade VARCHAR,
  estado VARCHAR,  
  cep INT(10),
  carrinho_id INT(10)FOREIGN KEY,
  pais VARCHAR,
  content VARCHAR,
  created_at TIMESTAMP,
);

CREATE TABLE devgames.categoria(
  id INT(10) PRIMARY KEY auto_increment,
  produto_id INT(10)FOREIGN KEY,
  content VARCHAR,
  created_at TIMESTAMP,  
);
