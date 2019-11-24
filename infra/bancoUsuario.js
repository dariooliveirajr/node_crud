function usuarioBanco(conexao){
	this._conexao = conexao;
}

//===================================================================   USUÁRIO

usuarioBanco.prototype.salva = function(dados,callback){
	this._conexao.query('insert into usuario set ?',dados, callback);
}

usuarioBanco.prototype.buscaGeral = function (callback){
    this._conexao.query('select * from usuario',callback);
}

usuarioBanco.prototype.busca = function(id,callback){
	this._conexao.query('select * from usuario where id_usuario = ?',id,callback);
}

usuarioBanco.prototype.editar = function(dados,callback){
	this._conexao.query('update usuario set ? where id_usuario = ?',[dados,dados.id_usuario],callback);
}

usuarioBanco.prototype.deletar = function(id,callback){
	this._conexao.query('delete from usuario where id_usuario = ?',id,callback);
}


//===================================================================   PRODUTO

usuarioBanco.prototype.buscaProduto = function(id,callback){
	this._conexao.query('select * from produtos where idprodutos = ?',id,callback);
}

usuarioBanco.prototype.editarProduto = function(dados,callback){
	
	this._conexao.query('update produtos set ? where idprodutos = ?',[dados,dados.idprodutos],callback);
}

usuarioBanco.prototype.salvaProduto = function(dados,callback){
	this._conexao.query('insert into produtos set ?',dados, callback);
	
}
usuarioBanco.prototype.buscaGeralProduto = function (callback){
    this._conexao.query('select * from produtos',callback);
}
usuarioBanco.prototype.deletarProduto = function(id,callback){
	this._conexao.query('delete from produtos where idprodutos = ?',id,callback);
}

	
//===================================================================   FUNCIONÁRIO

usuarioBanco.prototype.buscaFuncionario = function(id,callback){
	this._conexao.query('select * from funcionarios where idfuncionarios = ?',id,callback);
}

usuarioBanco.prototype.editarFuncionario = function(dados,callback){
	
	this._conexao.query('update funcionarios set ? where idfuncionarios = ?',[dados,dados.idfuncionarios],callback);
}

usuarioBanco.prototype.salvaFuncionario = function(dados,callback){
	this._conexao.query('insert into funcionarios set ?',dados, callback);
	
}
usuarioBanco.prototype.buscaGeralFuncionario = function (callback){
    this._conexao.query('select * from funcionarios',callback);
}
usuarioBanco.prototype.deletarFuncionario = function(id,callback){
	this._conexao.query('delete from funcionarios where idfuncionarios = ?',id,callback);
}

module.exports = function(){
    
    return usuarioBanco;
    
}