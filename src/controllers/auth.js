const { Usuario } = require("../models");
const { Contato } = require("../models");
const bcrypt = require("bcryptjs");
const { Administrador } = require("../models");

const authController = {
  async registro(req, res) {
    try {
      const { nome, email, senha, avatar, administrador } = req.body;
      const hash = bcrypt.hashSync(senha, 10);
      const usuario = await Usuario.create({
        nome,
        email,
        senha: hash,
        avatar,
        administrador: 0,
      });

      return res.redirect("/home");
    } catch (error) {
      console.log(error);
      return res.render("login-cadastro", {
        erro: "nao foi possivel concluir o cadastro",
      });
    }
  },

  //FUNCAO PARA O LOGIN FUNCIONAR
  async login(req, res) {
    try {
      const { email, senha } = req.body;
      const usuario = await Usuario.findOne({
        where: {
          email,
        },
      });
      if (!usuario || !bcrypt.compareSync(senha, usuario.senha)) {
        return res.render("pages/login-cadastro", {
          error: "Ops, usuario ou senha invalidos!",
        });
      }
      console.log(`Usuario ----- > ${JSON.stringify(usuario.admnistrador)}`);
      req.session.usuario = {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
      };
      if (usuario.admnistrador) {
        req.session.usuario.admin = true;
        return res.redirect("/admin/produtos");
      } else {
        req.session.usuario.admin = false;
        return res.redirect("/");
      }

     

    } catch (error) {
      console.log(error);
      return res.render("pages/login-cadastro", {
        error: "Sistema indisponivel tente novamente",
      });
    }
  },
  async contato(req, res) {
    const { email, mensagem } = req.body;
    try {
      const contato = await Contato.create({
        email,
        mensagem,
      });

      return res.redirect("/home");
    } catch (error) {
      console.log(error);
      return res.redirect("/home");
    }
  },
  async CreateAdmin(req, res) {
    try {
      const usuario = await Usuario.create({
        nome: "Administrador",
        email: "admin@admin.com",
        senha: bcrypt.hashSync("123", 10),
        avatar: null,
        administrador: true,
      });
      return res.status(201).send(usuario);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = authController;