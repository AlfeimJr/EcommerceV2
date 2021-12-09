module.exports = (req,res,next) =>{
   const {usuario} = req.session
   if(typeof  usuario != "undefined"){
     res.locals.usuario = usuario;
   }
   next();
}