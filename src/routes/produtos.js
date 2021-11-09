const express = require("express");

const produtosController = require("../controllers/ProdutoController");

const routes = express.Router();


routes.get("/admin/produtos", produtosController.index);




routes.get("/admin/produtosCadastro", produtosController.create);
routes.post("/admin/produtosCadastro", produtosController.store);
// editando produto
routes.get('/admin/editarProduto', produtosController.edit);
// routes.get('/editarProduto/:id', produtosController.edit);
// routes.put('/editarProduto/:id', produtosController.update);

module.exports = routes; 