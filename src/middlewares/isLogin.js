module.exports = (req,res,next) =>{
    const {usuario} = req.session
    if(typeof usuario  == 'undefined' && !usuario){
       return res.redirect('/login-cadastro')
    }
    
    //feita para usar as informações do usuario dentro das views
    res.locals.usuario = usuario;
    // passa pro proximo 
     next();
}