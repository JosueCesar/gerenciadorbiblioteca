const Emprestimo = require('../models/Emprestimo');

class EmprestimoController {

  async store(req, res){
    const { usuario_id, livro_id } = req.params;

    const emprestimo = await Emprestimo.create({
      usuario_id,
      livro_id,
    });

    if(emprestimo){
      return res.status(201).json(emprestimo);
    }

    return res.status(400).json({ error: "erro ao realizar emprestimo " })
  }
}

module.exports = new EmprestimoController();