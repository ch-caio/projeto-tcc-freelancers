create table tb_procuras (id int8 generated by default as identity, area varchar(255), descricao varchar(255), email varchar(255), primary key (id));
create table tb_usuarios (id int8 generated by default as identity, area varchar(255), descricao varchar(255), email varchar(255), nome varchar(255), primary key (id));
