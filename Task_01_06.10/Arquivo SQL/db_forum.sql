/* 
1- Criando o banco de dados:
create database db_forum;

2- Criando as tabelas:

create table tb_tema(
id bigint auto_increment not null,
titulo varchar(100) not null,
categoria varchar(100) not null,
primary key (id)
);

create table tb_usuario(
id bigint auto_increment not null,
nick varchar (30) not null,
email varchar (255) not null,
senha varchar (12) not null,
foto varchar(300),
primary key(id)
);

create table tb_postagem(
id bigint auto_increment not null,
data_horario datetime not null,
n_compar varchar(100),
curtida varchar(100),
comentario varchar(100), 
usuario_id bigint not null,
tema_id bigint not null,
primary key (id),
foreign key(tema_id) references tb_tema(id),
foreign key(usuario_id) references tb_usuario(id)
);