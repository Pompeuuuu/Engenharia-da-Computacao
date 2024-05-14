CREATE TABLE estoque (
  idEstoque int auto_increment primary key,
  quantidade varchar(11) NOT NULL
);
CREATE TABLE fornecedor (
  idFornecedor int auto_increment primary key,
  CNPJ varchar(11) not null,
  nomeFornecedor varchar(50) not null
);
CREATE TABLE funcionario (
  idFuncionario int auto_increment primary key,
  nomeFuncionario varchar(50) not null,
  CPF varchar(11) not null,
  turno varchar(50) not null
);
CREATE TABLE medicamento (
  idMedicamento int auto_increment primary key,
  nomeMedicamento varchar(50) not null,
  CID varchar(3) not null,
  validade date not null
)
