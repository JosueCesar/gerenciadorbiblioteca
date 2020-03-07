const Livro = require('../models/Livro');

class LivroController {
  
  async index(req, res){

    const livros = await Livro.findAll();

    if(!livros[0]){
      return res.status(400).json({ error: "nenhum livro encontrado!" });
    }

    return res.status(200).json(livros.map(livro => {
      return {
        id: livro.id,
        titulo: livro.titulo,
        editora: livro.editora,
        quantidade: livro.quantidade,
      }
    }));
  }

  async store(req, res){

    const titleExists = await Livro.findOne({ where: { titulo: req.body.titulo } });

    if(titleExists){
      return res.status(400).json({ error: 'O livro já está cadastrado'});
    }

    const { id, titulo, autor, editora, quantidade } = await Livro.create(req.body);
      
    return res.status(201).json({
      id,
      titulo,
      autor,
      editora,
      quantidade,
    });
  }

  async show(req, res){
    const livro = await Livro.findByPk(req.params.id);

    if(!livro){
      return res.status(404).json({ error: "Book was not found!" });
    }

    return res.status(200).json({
      id: livro.id,
      titulo: livro.titulo,
      autor: livro.autor,
      quantidade: livro.quantidade,
    });
  }

  async update(req, res){
    const livro = await Livro.update(req.body, { where: { id: req.params.id } });

    if(!livro[0]){
      return res.status(404).json({ error: "Book was not found!" });
    }

    return res.status(200).json({ message: "Successfully updated!" });
  }

  async delete(req, res){
    const livro = await Livro.destroy({ where: { id: req.params.id } });
  
    if(livro){
      return res.status(200).json({
        message: "Livro foi deletado com sucesso!"
      });
    }

    return res.status(400).json({
      error: "Livro não encontrado"
    });
  }

}

module.exports = new LivroController();