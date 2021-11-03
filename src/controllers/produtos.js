const produtoModel = require("../models/produtos");
const produtosController = {
  listarProdutosAdmin: (req, res) => {
    res.render("admin/produtos",  {
      produtos: produtoModel.listaDeProdutos,
    });
  },
  cadastrarProduto: (req, res) => {
    res.render("admin/cadastroProduto");
  },
  salvarProduto: (req, res) => {
    console.log(req.file);
    const { nome, descricao, imagem } = req.body;
    produtoModel.cadastrarProduto(nome, descricao, req.file.filename);

    console.log(produtoModel.listaDeProdutos);

    res.redirect("/admin/produtos");
  },
  excluirProduto: (req, res) =>{
    const { id } = req.params;
    const resultado = produtoModel.excluirProduto(id);
    
    
    if (!resultado) {
      res.send("Produto não Cadastrado");
    }

    res.redirect("/admin/produtos")
  },
};

module.exports = produtosController;