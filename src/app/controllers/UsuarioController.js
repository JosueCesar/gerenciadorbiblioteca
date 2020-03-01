const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');

class UsuarioController {

  async store(req, res){
    const userExists = await Usuario.findOne({ where: { email: req.body.email } });

    if(userExists){
      return res.status(400).json({ error: "Este email já está cadastrado!"});
    }

    const { id, nome, email } = await Usuario.create(req.body);
    return res.status(201).json({ id, nome, email });
  }

  async index(res){
    const users = await Usuario.findAll();

    return res.status(200).json(users.map(user => {
      return { 
        id: user.id, 
        nome: user.nome, 
        email: user.email,
      }  
    }));
  }

  async show(req, res){
    const {id, nome, email} = await Usuario.findByPk(req.params.id);

    return res.status(200).json({
      id,
      nome,
      email
    });
  }

  async update(req, res){
    const user = await Usuario.update(req.body, { where: { id: req.params.id } });

    if(user[0]){
      return res.status(200).json({
        message: "Usuario atualizado com sucesso"
      });
    }

    return res.status(400).json({
      error: "Usuário não existe"
    });
  }

  async delete(req, res){
    const user = await Usuario.destroy({ where: { id: req.params.id } });
  
    if(user){
      return res.status(200).json({
        message: "Usuario foi deletado com sucesso!"
      });
    }

    return res.status(400).json({
      error: "Usuário não existe"
    });
  }

}

module.exports = new UsuarioController();