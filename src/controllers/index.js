const {Produto, Fabricante} = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op

const indexController ={
    exibirHome:((req, res)=>{
        res.render("pages/home")
    }),

    exibirDetalhes:((req, res)=>{
        res.render("pages/detalhes")
    }),

    async exibirCategorias(req, res){
        let {page = 1} = req.query
        let {count:total, rows:produtos} = await Produto.findAndCountAll({
            limit:10,
            offset: (page - 1) * 10
        });
        
        let totalPagina = Math.round(total/10)
        return res.render('pages/categorias',{produtos,totalPagina})

    },

    // async viewOne(req,res){
    //     let {id} = req.params;

    //     let produto = await Produto.findOne({
    //         where:{

    //             id:id
    //         }
    //     });

    //     return res.render('admin/detalhesProduto',{produto})

    // },
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