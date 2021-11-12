module.exports = (req,res,next) =>{
    const {Usuario} = req.session
    if(typeof Usuario  == 'undefined' && !Usuario){
       return res.redirect('/login')
    }
    
    //feita para usar as informações do usuario dentro das views
    res.locals.Usuario = Usuario;
    //passa pro proximo 
    next();
}