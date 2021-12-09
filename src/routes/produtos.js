const express = require("express");
const isLogin = require('../middlewares/isLogin')
const isAdmin = require('../middlewares/isAdmin')
const produtosController = require("../controllers/ProdutoController");
const CardController = require('../controllers/cartController')
const authController = require('../controllers/auth')


const routes = express.Router();


routes.get("/admin/produtos",isAdmin, produtosController.index);


routes.get('/admin/detalhesProduto/:id',isAdmin, produtosController.viewOne);


routes.get("/admin/produtosCadastro",isAdmin, produtosController.create);
routes.post("/admin/produtosCadastro", produtosController.store);
// editando produto
routes.get('/admin/editarProduto/:id',isAdmin, produtosController.edit);

routes.put('/admin/editarProduto/:id', produtosController.update);

routes.delete('/admin/deletarProduto/:id', produtosController.destroy);


//carrinho-------------------------------------------------


module.exports = routes;