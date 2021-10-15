const express = require('express');
const path = require('path');
const routes = express.Router();
const indexController = require('../controllers/index')

routes.get('/', indexController.exibirHome )
routes.get('/home', indexController.exibirHome )
routes.get('/detalhes', indexController.exibirDetalhes )
routes.get('/categorias', indexController.exibirCategorias )
routes.get('/carrinho', indexController.exibirCarrinho)
routes.get('/painel-usuario', indexController.exibirPerfil)
routes.get('/pagamento', indexController.exibirPagamento)
routes.get('/login-cadastro', indexController.exibirLogin)

module.exports = routes;