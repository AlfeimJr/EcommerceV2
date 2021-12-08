
const {Usuario} = require('../models')
const {Contato} = require('../models')
const bcrypt = require('bcryptjs')


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
            const usuario = await Usuario.findOne({
                where:{
                    email,
                }
            })
            if(!usuario)return res.render('pages/login-cadastro',{error: 'Usuario nao existe!'})

            if(!bcrypt.compareSync(senha, usuario.senha)){
                return res.render('pages/login-cadastro',{error: 'Senha esta errada!'})
            }
            req.session.user = {
                id: usuario.id,
                name:usuario.nome,
            }

            return res.redirect('/home');
        }catch(error){
            console.log (error)
            return res.render('pages/login-cadastro',{error: 'Sistema indisponivel tente novamente'})
        }
    },
    async contato(req, res){
        const{email, mensagem} = req.body
        try{
            const contato = await Contato.create({
                email,
                mensagem,
            });

            return res.redirect("/home")
        }catch(error){
            console.log(error)
            return res.redirect("/home")
        }
    }

}

module.exports = authController