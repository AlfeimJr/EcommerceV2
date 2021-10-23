CREATE DATABASE devgames;

CREATE TABLE devgames.produto (
  id INT(10) PRIMARY KEY auto_increment,
  nome VARCHAR(200),
  fabricante_id INT(10)FOREIGN KEY,
  preco VARCHAR(200),
  imagem VARCHAR(200),
  quantidade INT(10),
  ativo tinyINT(1),
  created_at TIMESTAMP,
  content VARCHAR(200)  
);

CREATE TABLE devgames.fabricante (
  id INT(10) PRIMARY KEY auto_increment,
  nome VARCHAR(200),
  content VARCHAR(200),
  produto_id INT(10)FOREIGN KEY,
  created_at TIMESTAMP
);

CREATE TABLE devgames.produto_oferta (
  id INT(10) PRIMARY KEY auto_increment,
  produto_id INT(10)FOREIGN KEY,
  content VARCHAR(200),
  created_at TIMESTAMP
);

CREATE TABLE devgames.usuario(
  id INT(10) PRIMARY KEY auto_increment,
  nome VARCHAR(200),
  email VARCHAR(200),
  senha VARCHAR(200),
  admnistrador tinyINT(1),
  avatar VARCHAR(200),
  created_at TIMESTAMP,
  content VARCHAR(200)  
);

CREATE TABLE devgames.carrinho(
  id INT(10) PRIMARY KEY auto_increment,
  produto_id INT(10)FOREIGN KEY,
  quantidade VARCHAR(200),
  preco_total float(2),
  content VARCHAR(200),
  created_at TIMESTAMP
);

CREATE TABLE devgames.compra(
  id INT(10) PRIMARY KEY auto_increment,
  usuario_id INT(10)FOREIGN KEY,
  produto_id INT(10)FOREIGN KEY,
  rua VARCHAR(200),
  numero INT(10),
  bairro VARCHAR(200),
  cidade VARCHAR(200),
  estado VARCHAR(200),  
  cep INT(10),
  carrinho_id INT(10)FOREIGN KEY,
  pais VARCHAR(200),
  content VARCHAR(200),
  created_at TIMESTAMP
);

CREATE TABLE devgames.categoria(
  id INT(10) PRIMARY KEY auto_increment,
  produto_id INT(10)FOREIGN KEY,
  content VARCHAR(200),
  created_at TIMESTAMP 
);

