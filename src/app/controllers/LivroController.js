const Livro = require('../models/Livro');

class LivroController {

  async store(req, res){

    const titleExists = await Livro.findOne({ where: { titulo: req.body.titulo } });

    if(titleExists){
      return res.status(400).json({ error: 'O livro já está cadastrado'});
    }

    const { id, titulo, autor, editora, quantidade } = await Livro.create(req.body);
      
    return res.status(201).json({
      id, titulo, autor, editora, quantidade,
    });
    
  }

}

module.exports = new LivroController();