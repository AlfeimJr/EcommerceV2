function auth(req,res,next){
    if(typeof(req.session.usuario) != 'undefined'){
        next()
    }else{
        return res.send('error usuario invalido')
    }
}

module.exports = auth;