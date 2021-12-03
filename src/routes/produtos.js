const express = require("express");

const produtosController = require("../controllers/ProdutoController");
const CardController = require('../controllers/CardController')


const routes = express.Router();


routes.get("/admin/produtos", produtosController.index);


routes.get('/detalhesProduto/:id', produtosController.viewOne);


routes.get("/admin/produtosCadastro", produtosController.create);
routes.post("/admin/produtosCadastro", produtosController.store);
// editando produto
routes.get('/admin/editarProduto/:id', produtosController.edit);

routes.put('/admin/editarProduto/:id', produtosController.update);

routes.delete('/admin/deletarProduto/:id', produtosController.destroy);


//carrinho-------------------------------------------------
routes.get('/card',CardController.card)

module.exports = routes; 