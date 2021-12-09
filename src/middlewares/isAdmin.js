module.exports = (req, res, next) => {
    const {usuario} = req.session
    console.log(req.session.usuario)
    console.log("é administrador?" + req.session.usuario.admin)
    if (req.session.usuario.admin) {
      res.locals.usuario = usuario;
      return next();
    }
    return res.redirect("/");
  };