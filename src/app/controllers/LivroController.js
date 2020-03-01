const Livro = require('../models/Livro');

class LivroController {

  async store(req, res){
    const {id, titulo, autor, editora, quantidade} = await Livro.create(req.body);

    res.json({
      id, titulo, autor, editora, quantidade,
    })
  }

}

module.exports = new LivroController();