
-- apos testes e correção
-- o codigo nao esta bem organizado para que todos 
-- venhao a emtender a logica falo em questao das foreign key
CREATE DATABASE devgames;

USE devgames;

CREATE TABLE usuario(
  id INTEGER PRIMARY KEY auto_increment,
  nome VARCHAR(200),
  email VARCHAR(200),
  senha VARCHAR(200),
  admnistrador tinyINT(1),
  avatar VARCHAR(200)

);

CREATE TABLE fabricante (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(200)
);


CREATE TABLE devgames.produto (
  id INT(10) PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(200),
  preco VARCHAR(200),
  imagem VARCHAR(200),
  id_fabricante INTEGER,
  FOREIGN KEY (id_fabricante) REFERENCES fabricante(id),
  quantidade INT(10),
  ativo tinyINT(1)
 
);



CREATE TABLE promocao (
  id INT(10) PRIMARY KEY AUTO_INCREMENT,
  id_produto INTEGER,
  FOREIGN KEY (id_produto)REFERENCES produto(id)
  
  
);

CREATE TABLE carrinho(
  id INT(10) PRIMARY KEY AUTO_INCREMENT,
  id_produto INTEGER,
  FOREIGN KEY(id_produto)REFERENCES produto(id),
  quantidade VARCHAR(200),
  preco_total float(2)

  
);

CREATE TABLE compra(
  id INT(10) PRIMARY KEY AUTO_INCREMENT,
  id_carrinho INTEGER,
  FOREIGN KEY(id_carrinho)REFERENCES carrinho(id),
  id_usuario INTEGER,
  FOREIGN KEY (id_usuario)REFERENCES usuario(id),
  id_produto INTEGER,
  FOREIGN KEY(id_produto)REFERENCES produto(id),
  rua VARCHAR(200),
  numero INT(10),
  bairro VARCHAR(200),
  cidade VARCHAR(200),
  estado VARCHAR(200),  
  cep INT(10),
  pais VARCHAR(200)

);

CREATE TABLE categoria(
  id INT(10) PRIMARY KEY AUTO_INCREMENT,
  id_produto INTEGER,
  FOREIGN KEY(id_produto)REFERENCES produto(id)

);