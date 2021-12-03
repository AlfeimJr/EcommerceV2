

const Usuario = {
    loginForm(req,res){
        res.render('pages/login')
    },
    logarUsuario(){
        const {email,senha} = req.body;
        const usuarioSalvo = fs.readFileSync(UsuarioJson, {encoding:'utf-8'});
        usuarioSalvo = JSON.parse(usuarioSalvo);

        if(email != usuarioSalvo.email){
            return res.send('Usuario Invalido')
        }

        if(!bcrypt.compareSync(senha,usuarioSalvo.senha)){
            return res.render('Senha invalida')
        }

        req.sesssion.usuario = usuarioSalvo

        res.redirect('/produtos')
    }
}

module.exports = Usuario;