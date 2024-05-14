CREATE TABLE estoque (
  idEstoque primary key not null,
  quantidade varchar(11) NOT NULL,
);
CREATE TABLE fornecedor (
  idFornecedor primary key not null,
  CNPJ varchar(11) not null,
  nomeFornecedor varchar(50) not null
);
CREATE TABLE funcionario (
  idFuncionario primary key not null,
  nomeFuncionario varchar(50) not null,
  CPF varchar(11) not null,
  turno varchar(50) not null
);
CREATE TABLE medicamento (
  idMedicamento primary key not null,
  nomeMedicamento varchar(50) not null,
  CID` varchar(3) not null,
  validade` date not nullL
)
