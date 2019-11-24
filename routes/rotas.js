module.exports = function(app){
    
	app.get('/',function(req,res){
		res.render('index.ejs');
	});
	
	//===================================================================   USUÁRIO
	
	app.get('/cadastrar',function(req,res){
		res.render('cadastro/cadastrar.ejs');
	});
	
	app.get('/listar',function(req,res){
		var conexao = app.infra.conexao();
		var usuarioBanco = new app.infra.bancoUsuario(conexao);
		usuarioBanco.buscaGeral(function(erro,resposta){
			if(erro){
				console.log(erro);	
			}else
				res.render('listar.ejs',{'busca':resposta});
		})
	});
	
	app.get('/buscaEditar/:id',function(req,res){
		var id = req.params.id;
		var conexao = app.infra.conexao();
		var usuarioBanco = new app.infra.bancoUsuario(conexao);
		usuarioBanco.busca(id,function(erro,resposta){
			if(erro){
				console.log(erro);
			}else{
				res.render('editar/formEditar.ejs',{'busca':resposta});
			}
		})
	});
    
    app.post('/cadastrar',function(req,res){
            var dados=req.body;
            var conexao=app.infra.conexao();
            var usuarioBanco=new app.infra.bancoUsuario(conexao);
            usuarioBanco.salva(dados,function(erro,resultado){
                if (erro){
                    console.log(erro);
                }else{
                    res.redirect('listar')
                }
            });
                
            console.log(dados);
                
          
        });
	
	app.get('/deletar/:id',function(req,res){
		var id = req.params.id;
		var conexao = app.infra.conexao();
		var usuarioBanco = new app.infra.bancoUsuario(conexao);
		usuarioBanco.deletar(id,function(erro,resposta){
			if(erro){
				console.log(erro);
			}else{
				res.redirect('/listar');
			}
		})
	});
	
	app.post('/editar',function(req,res){
		var dados = req.body;
		var conexao = app.infra.conexao();
		var usuarioBanco = new app.infra.bancoUsuario(conexao);
		usuarioBanco.editar(dados,function(erro,resposta){
			if(erro){
				console.log(erro);
			}else{
				res.redirect('/listar');
			}
		});
	});
	
    
	//===================================================================   PRODUTO
	
	    app.get ('/cadastroProduto',function(req,res){
		res.render('cadastro/cadastrarProduto.ejs');
	});
    
        app.post('/produto',function(req,res){
        var dados=req.body;
        var conexao=app.infra.conexao();
        var usuarioBanco=new app.infra.bancoUsuario(conexao);
        usuarioBanco.salvaProduto(dados,function(erro,resultado){
            if (erro){
                console.log(erro);
            }else{
                res.redirect('listar_produto')
            }
        });

        console.log(dados);


        });
    
        app.get('/listar_produto',function(req,res){
        var conexao = app.infra.conexao();
        var usuarioBanco = new app.infra.bancoUsuario(conexao);
        usuarioBanco.buscaGeralProduto(function(erro,resposta){
            if (erro){
                console.log(erro);
            }else{
                res.render('listarProduto.ejs',{'busca':resposta});
            }
        });
    });
	
	app.get('/buscaEditarProduto/:id',function(req,res){
		
		var id = req.params.id;
		var conexao = app.infra.conexao();
		var usuarioBanco = new app.infra.bancoUsuario(conexao);
		usuarioBanco.buscaProduto(id,function(erro,resposta){
			
			if(erro){
				console.log(erro);
			}else{
				res.render('editar/formEditarProduto.ejs',{'busca':resposta});
			}
		})
	});
	
	app.get('/deletarProduto/:id',function(req,res){
		var id = req.params.id;
		var conexao = app.infra.conexao();
		var usuarioBanco = new app.infra.bancoUsuario(conexao);
		usuarioBanco.deletarProduto(id,function(erro,resposta){
			if(erro){
				console.log(erro);
			}else{
				res.redirect('/listar_produto');
			}
		})
	});
	
	app.post('/editarProduto',function(req,res){
		var dados = req.body;
		var conexao = app.infra.conexao();
		var usuarioBanco = new app.infra.bancoUsuario(conexao);
		usuarioBanco.editarProduto(dados,function(erro,resposta){
			if(erro){
				console.log(erro);
			}else{
				res.redirect('/listar_produto');
			}
		});
	});
    

	//===================================================================   FUNCIONÁRIO
	
	    app.get ('/cadastroFuncionario',function(req,res){
		res.render('cadastro/cadastrarFuncionario.ejs');
	});
    
            app.post('/funcionario',function(req,res){
            var dados=req.body;
            var conexao=app.infra.conexao();
            var usuarioBanco=new app.infra.bancoUsuario(conexao);
            usuarioBanco.salvaFuncionario(dados,function(erro,resultado){
                if (erro){
                    console.log(erro);
                }else{
                    res.redirect('listar_funcionario');
                }
            });
                
            console.log(dados);
                
          
        });
    
        app.get('/listar_funcionario',function(req,res){
		var conexao = app.infra.conexao();
		var usuarioBanco = new app.infra.bancoUsuario(conexao);
		usuarioBanco.buscaGeralFuncionario(function(erro,resposta){
			if(erro){
				console.log(erro);	
			}else
				res.render('listarFuncionario.ejs',{'busca':resposta});
		})
	});
	
	app.get('/buscaEditarFuncionario/:id',function(req,res){
		
		var id = req.params.id;
		var conexao = app.infra.conexao();
		var usuarioBanco = new app.infra.bancoUsuario(conexao);
		usuarioBanco.buscaFuncionario(id,function(erro,resposta){
			
			if(erro){
				console.log(erro);
			}else{
				res.render('editar/formEditarFuncionario.ejs',{'busca':resposta});
			}
		})
	});
	
	app.get('/deletarFuncionario/:id',function(req,res){
		var id = req.params.id;
		var conexao = app.infra.conexao();
		var usuarioBanco = new app.infra.bancoUsuario(conexao);
		usuarioBanco.deletarFuncionario(id,function(erro,resposta){
			if(erro){
				console.log(erro);
			}else{
				res.redirect('/listar_funcionario');
			}
		})
	});
	
	app.post('/editarFuncionario',function(req,res){
		var dados = req.body;
		var conexao = app.infra.conexao();
		var usuarioBanco = new app.infra.bancoUsuario(conexao);
		usuarioBanco.editarFuncionario(dados,function(erro,resposta){
			if(erro){
				console.log(erro);
			}else{
				res.redirect('/listar_funcionario');
			}
		});
	});
}
   