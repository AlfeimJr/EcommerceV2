const express = require("express");

const produtosController = require("../controllers/produtos");
const uploads = require('../middlewares/uploads')
const routes = express.Router();






routes.get("/admin/cadastro-produto", produtosController.cadastrarProduto);
routes.get("/admin/produtos", produtosController.listarProdutosAdmin);
routes.post("/salvar-produto", uploads.single('imagem'), produtosController.salvarProduto);
routes.delete("/excluir-produto/:id", produtosController.excluirProduto);

module.exports = routes; 