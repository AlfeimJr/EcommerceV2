const {Produto, Fabricante} = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op

const ProdutoController = {
    async index(req,res){
        let {page = 1} = req.query
        let {count:total, rows:produtos} = await Produto.findAndCountAll({
            limit:10,
            offset: (page - 1) * 10
        });
        console.log(produtos)
        let totalPagina = Math.round(total/10)
        return res.render('admin/produtos-total',{produtos,totalPagina})

    },
    create(req,res){
        return res.render('admin/cadastroProduto')
    },

}

module.exports = ProdutoController;