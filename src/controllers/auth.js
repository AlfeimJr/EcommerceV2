// const services = require('../features/services');
//const Boom = require('boom');

// const Usuario = require("../models/Usuario")

// module.exports = {
//     auth: async ctx => {
//         const { req, res } = ctx;
//         const user = await services.auth(req.body)
//         if (user) {
//             res.body = user
//         } else {
//             res.body = { result: Boom.badRequest() }
//         };
//     },
// }

//CRIANDO UM CADASTRO

const {Usuario} = require('../models')
const bcrypt = require('bcrypt')


const authController = {
    async registro(req, res){
        const{nome, email, senha, avatar,administrador} = req.body
        try{
            const hash = bcrypt.hashSync(senha, 10)
            const usuario = await Usuario.create({
                nome,
                email,
                senha: hash,
                avatar,
                administrador,
            });

            return res.redirect("/home")
        }catch(error){
            console.log(error)
            return res.redirect("/login-cadastro")
        }
    },

    //FUNCAO PARA O LOGIN FUNCIONAR
    async login(req,res){
        try{
            const{email,senha} = req.body;
            const usuario = await Usuario.findAll({
                where:{
                    email,
                }
            })
            if(!usuario)return res.render('pages/login-cadastro',{error: 'Usuario nao existe!'})

            if(!bcrypt.compareSync(senha, usuario.senha)){
                return res.render('pages/login',{error: 'Senha esta errada!'})
            }
            req.sesseion.user = {
                id: usuario.id,
                name:usuario.nome,
            }

            return res.redirect('/home');
        }catch(error){
            console.log (error)
            return res.renver('pages/login',{error: 'Sistema indisponivel tente novamente'})
        }
    }
}

module.exports = authController