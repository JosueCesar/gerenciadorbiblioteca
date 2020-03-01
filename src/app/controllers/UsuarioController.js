const Usuario = require('../models/Usuario');

class UsuarioController {

  async store(req, res){

    const userExists = await Usuario.findOne({ where: { email: req.body.email } });

    if(userExists){
      return res.status(400).json({ error: "Este email já está cadastrado!"});
    }

    const { id, nome, email } = await Usuario.create(req.body);
    return res.status(201).json({ id, nome, email });
  }

}

module.exports = new UsuarioController();