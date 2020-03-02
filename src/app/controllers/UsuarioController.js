const Usuario = require('../models/Usuario');
const Emprestimos = require('../models/Emprestimo');
const bcrypt = require('bcryptjs');

class UsuarioController {

  async index(req, res){
    const users = await Usuario.findAll({
      include: {
        association: 'emprestimos'
      }
    });
  
    if(users[0]){
      return res.status(200).json(users.map(user => {
        return { 
          id: user.id, 
          nome: user.nome, 
          email: user.email,
          emprestimos: user.emprestimos.map(emprestimo => {
            return {
              id: emprestimo.id,
              data_emprestimo: Date(emprestimo.data_emprestimo),
              data_devolucao: Date(emprestimo.data_devolucao),
              data_entrega: emprestimo.data_entrega == null ? "pendente" : Date(emprestimo.data_devolucao),
            }
          }),
        }  
      }));
    }
  
  return res.status(400).json({ 
      error: "Nenhum usuário encontrado!"
    });
  }
  
  async store(req, res){
    const userExists = await Usuario.findOne({ where: { email: req.body.email } });
    
    if(userExists){
      return res.status(400).json({ error: "Este email já está cadastrado!"});
    }
    
    const { id, nome, email } = await Usuario.create(req.body);
    return res.status(201).json({ id, nome, email });
  }

  async show(req, res){
    try{
      const {id, nome, email} = await Usuario.findByPk(req.params.id);

      return res.status(200).json({
        id,
        nome,
        email
      });
    }
    catch(e){
      return res.status(400).json({
        error: "Nenhum usuário encontrado!"
      });
    }
  }

  async update(req, res){
    const user = await Usuario.update(req.body, { where: { id: req.params.id } });

    if(user[0]){
      return res.status(200).json({
        message: "Usuario foi atualizado com sucesso!"
      });
    }

    return res.status(400).json({
      error: "Usuário não encontrado"
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
      error: "Usuário não encontrado"
    });
  }

}

module.exports = new UsuarioController();