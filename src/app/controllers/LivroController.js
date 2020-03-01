const Livro = require('../models/Livro');

class LivroController {
  
  //store index put delete

  async store(req, res){
    const {id, titulo, autor, editora, quantidade} = await Livro.create(req.body);

    res.json({
      id, titulo, autor, editora, quantidade,
    })
  }

  async index(req, res){
    //lista usuarios
    const livros = await Livro.findAll();

    return res.json(livros)

  }

  async show(){
    //exibir um unico usuario
  }

  async update(){
    //alterar usuario
  }

  async delete(){
    //deletar usuario

  }

}

module.exports = new LivroController();