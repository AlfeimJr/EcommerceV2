
const indexController ={
    exibirHome:((req, res)=>{
        res.render("pages/home")
    }),

    exibirDetalhes:((req, res)=>{
        res.render("pages/detalhes")
    }),

    exibirCategorias:((req, res)=>{
        res.render("pages/categorias")
    }),
    exibirCarrinho: ((req, res)=>{
        res.render("pages/carrinho")
    }),
    exibirPerfil: ((req, res)=>{
        res.render("pages/painel-usuario")
    }),
    exibirPagamento: ((req, res)=> {
        res.render('pages/pagamento')
    }),
    exibirLogin: ((req, res)=> {
        res.render('pages/login-cadastro')
    }),
    fazerPedido: (req,res)=>{
        res.render('pages/finalizar-pedido')
    }
}

module.exports = indexController;