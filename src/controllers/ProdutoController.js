const {Produto, Fabricante} = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op

const ProdutoController = {
    async index(req,res){
        let {page = 1} = req.query
        let {count:total, rows:produtos} = await Produto.findAndCountAll({
            limit:5,
            offset: (page - 1) * 5
        });
        
        let totalPagina = Math.round(total/5)
        return res.render('admin/produtos-total',{produtos,totalPagina})
    },
    create(req,res){
        return res.render('admin/cadastroProduto')
    },
    async store (req,res){
        const { nome, preco, imagem,id_fabricante,quantidade, ativo} = req.body;

        console.log( nome, preco, imagem, id_fabricante,quantidade, ativo)
        
        const resultado = await Produto.create({
            nome, 
            preco, 
            imagem, 
            id_fabricante, 
            quantidade,
            ativo
        });
        console.log('este e o o ativo: ', ativo)

        console.log(resultado)

        return res.redirect('admin/produtos')
    },
    async edit(req,res){
        // const {id} = req.params
        // //o metodo findByPk ele ja busca pelo id
        // const produto = await Produto.findByPk(id);
        // return res.render('admin/editProduto',{produto})



        return res.render('admin/editarProduto')
    },

    // async update(req,res){
    //     const {id} = req.params
    //     const {nome, email, senha} = req.body

    //     const resultado = await Usuario.update({
    //         nome,
    //         email,
    //         senha
    //     },
    //     {
    //         where:{
    //             id_usuario:id
    //         }
    //     })

    //     console.log(resultado)
    //     return res.redirect('/')
    // },

    async destroy(req,res){
        const {id} = req.params

        const resultado = await Produto.destroy({
            where:{
                id: id
            }

        })

        console.log(resultado)
        return res.redirect('/admin/produtos')
    },
}

module.exports = ProdutoController;