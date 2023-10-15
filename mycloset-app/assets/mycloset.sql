use MyCloset

--SELECTS

select * from usuarios;
select * from peças;
select * from looks;
select * from categorias;


--TABELA USUÁRIOS

create table usuarios
(
id_usuario int PRIMARY KEY NOT NULL, 
id_peças int NOT NULL,
id_looks int NOT NULL,
id_categorias int NOT NULL, 
nome varchar (200) NOT NULL,
sexo char(1) NULL, 
estado_civil varchar (15) NOT NULL,
ocupacao varchar (200) NOT NULL,
salario numeric (15,2), 
hobbies varchar (200) NOT NULL, 
aplicativos varchar (200) NOT NULL, 
data_cadastro datetime NOT NULL, 
login_cadastro varchar(15)NOT NULL
); 

INSERT into usuarios
(id_usuario, id_peças, id_looks,id_categorias, nome, sexo, estado_civil, ocupacao, salario, hobbies, aplicativos, data_cadastro, login_cadastro)
values
(1,1,1,1,'Joana','F', 'solteira','Mestrado na área de Arquitetura','2500','Ler', 'Instagram','21/09/2023', 'personas');
INSERT into usuarios
(id_usuario, id_peças, id_looks,id_categorias, nome, sexo, estado_civil, ocupacao, salario, hobbies, aplicativos, data_cadastro, login_cadastro)
values
(2,2,2,2,'Laura','F', 'Noiva','Médica','12000','viajar', 'Twitter','21/09/2023', 'personas');
INSERT into usuarios
(id_usuario, id_peças, id_looks,id_categorias, nome, sexo, estado_civil, ocupacao, salario, hobbies, aplicativos, data_cadastro, login_cadastro)
values
(3,3,3,3,'Clara','F', 'casada','Empresária','20000','correr', 'Pinterest','21/09/2023', 'personas');

select * from usuarios

--TABELA PEÇAS: --camisetas, blusas, calças, saias, vestidos, casacos, jaquetas, shorts, macacões, e acessórios como chapéus, cintos e bolsas.

create table peças 
(
id_peças int PRIMARY KEY NOT NULL,
id_usuario varchar (200) not null,
id_looks int  NOT NULL,
id_categorias int NOT NULL, 
nome_pecas varchar (200) not null,
cor varchar (200) not null,
tamanho varchar (200) not null,
tecido varchar (200) not null,
data_cadastro datetime  NOT NULL,
login_cadastro varchar(15),
); 

--CONSTRAINT USUÁRIOS X PEÇAS

alter table usuarios add constraint fk_peças foreign key (id_peças) references peças (id_peças);


INSERT into peças
(id_peças, id_usuario, id_looks, id_categorias, nome_pecas, cor, tamanho, tecido, data_cadastro, login_cadastro)
values
(1,1,1,1, 'calça', 'azul escuro', 'P', 'jeans','23/09/2023', 'peças'); 
INSERT into peças
(id_peças, id_usuario, id_looks, id_categorias, nome_pecas, cor, tamanho, tecido, data_cadastro, login_cadastro)
values
(2, 2,2,2, 'camiseta', 'bege', 'PP', 'algodão','23/09/2023', 'peças'); 
INSERT into peças
(id_peças, id_usuario, id_looks, id_categorias, nome_pecas, cor, tamanho, tecido, data_cadastro, login_cadastro)
values
(3,3,3,3, 'terninho', 'preto', 'M', 'linho','23/09/2023', 'peças'); 
INSERT into peças
(id_peças, id_usuario, id_looks, id_categorias, nome_pecas, cor, tamanho, tecido, data_cadastro, login_cadastro)
values
(4,1,3,3, 'regata', 'rosa', 'M', 'algodão','23/09/2023', 'peças'); 
INSERT into peças
(id_peças, id_usuario, id_looks, id_categorias, nome_pecas, cor, tamanho, tecido, data_cadastro, login_cadastro)
values
(5,2,2,3, 'jaqueta', 'laranja', 'M', 'couro','23/09/2023', 'peças'); 

select * from peças

--TABELA LOOKS: 1. casual, 2. formal, 3. esportivo, 4. elegante, 5. boho

create table looks 
(
id_looks int PRIMARY KEY NOT NULL,
id_usuario  int not null,
id_peças int NOT NULL,
id_categorias int NOT NULL, 
nome_looks varchar (200) not null,
data_cadastro datetime  NOT NULL,
login_cadastro varchar(15),
);

--CONSTRAINT USUARIOS X LOOKS

alter table usuarios add constraint fk_usuario_lk foreign key (id_looks)  references looks (id_looks);

INSERT into looks
(id_looks, id_usuario, id_peças,id_categorias, nome_looks, data_cadastro, login_cadastro)
values
(1, 1,1,1, 'casual','23/09/2023', 'looks')
INSERT into looks
(id_looks, id_usuario, id_peças,id_categorias, nome_looks, data_cadastro, login_cadastro)
values
(2,2,2,2, 'formal','23/09/2023', 'looks')
INSERT into looks
(id_looks, id_usuario, id_peças,id_categorias, nome_looks, data_cadastro, login_cadastro)
values
(3,3,3,3, 'esportivo','23/09/2023', 'looks');

select * from looks

--TABELAS CATEGORIAS : 1. novas, 2. usadas, 3. doação, 4. favoritas

create table categorias  
(
id_categoria int PRIMARY KEY NOT NULL,
id_peças  int not null,
id_usuario  int not null,
id_looks int NOT NULL,
nome_categoria varchar (200) not null,
data_cadastro datetime  NOT NULL,
login_cadastro varchar(15),
);

--CONSTRAINT USUARIOSXCATEGORIAS

alter table usuarios add constraint fk_usuario_cat foreign key (id_categorias) references categorias (id_categoria);


select * from categorias

insert into categorias
(id_categoria,	id_peças , id_usuario, id_looks, nome_categoria, data_cadastro, login_cadastro)
values 
(1, 1, 1,1, 'novas', '23/09/2023', 'categorias');
insert into categorias
(id_categoria,	id_peças , id_usuario, id_looks, nome_categoria, data_cadastro, login_cadastro)
values 
(2, 2, 2,2, 'usadas', '23/09/2023', 'categorias');
insert into categorias
(id_categoria,	id_peças , id_usuario, id_looks, nome_categoria, data_cadastro, login_cadastro)
values 
(3, 3, 3,3, 'doaçao', '23/09/2023', 'categorias');
insert into categorias
(id_categoria,	id_peças , id_usuario, id_looks, nome_categoria, data_cadastro, login_cadastro)
values 
(4, 4, 4,4, 'favoritas', '23/09/2023', 'categorias');