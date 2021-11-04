const express = require("express");

const produtosController = require("../controllers/ProdutoController");

const routes = express.Router();


routes.get("/admin/produtos", produtosController.index);




routes.get("/admin/cadastro-produto", produtosController.create);
// routes.post("/admin/cadastro-produto", produtosController.store);
// routes.get("/admin/produtos", produtosController.listarProdutosAdmin);
// routes.post("/salvar-produto", uploads.single('imagem'), produtosController.salvarProduto);
// routes.delete("/excluir-produto/:id", produtosController.excluirProduto);

module.exports = routes; 