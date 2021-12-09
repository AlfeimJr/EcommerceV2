const { Router } = require("express");
const express = require("express");
const path = require("path");
const routes = express.Router();
const indexController = require("../controllers/index");
const authController = require("../controllers/auth");
const isLogin = require("../middlewares/isLogin");
const requireLogin = require("../middlewares/requireLogin");
routes.get("/", isLogin, indexController.exibirHome);
routes.get("/detalhes", isLogin, indexController.exibirDetalhes);
routes.get("/categorias", isLogin, indexController.exibirCategorias);
routes.get("/promocao", isLogin, indexController.exibirPromocao);
routes.get("/carrinho", isLogin, indexController.exibirCarrinho);
routes.post("/contato", authController.contato);

routes.get("/login-cadastro", indexController.exibirLogin);
routes.post("/login", authController.login);
routes.post("/cadastro", authController.registro);

routes.use(requireLogin);
routes.get("/pagamento", indexController.exibirPagamento);
routes.get("/painel-usuario", indexController.exibirPerfil);
routes.get("/finalizar-compra", indexController.fazerPedido);
routes.post("/finalizar-compra", indexController.fazerPedido);

module.exports = routes;