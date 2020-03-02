const Emprestimo = require('../models/Emprestimo');
const Usuario = require('../models/Usuario');
const Livro = require('../models/Livro');

class EmprestimoController {

  async index(req, res){

    const emprestimos = await Emprestimo.findAll({
      include: [
        {
          model: Usuario,
          as: 'usuario',
        },
        {
          model: Livro,
          as: 'livro',
        },
      ],
    });

    if(!emprestimos[0]){
      return res.status(400).json({ error: "nenhum emprestimo encontrado!" })
    }

    return res.status(200).json(emprestimos.map(emprestimo => {
      return {
        emprestimo: {
          id: emprestimo.id,
          
          usuario: {
            id: emprestimo.usuario.id,
            nome: emprestimo.usuario.nome,
          },

          livro: {
            id: emprestimo.livro.id,
            titulo: emprestimo.livro.titulo,
          },
          
          data_emprestimo: Emprestimo.dateToString(emprestimo.data_emprestimo),

          data_devolucao: Emprestimo.dateToString(emprestimo.data_devolucao),

          data_entrega: emprestimo.data_entrega == null ? "entrega pendente" : Emprestimo.dateToString(emprestimo.data_devolucao),
        }
      }
    }));
  }

  async store(req, res){
    const { usuario_id, livro_id } = req.params;

    const usuario = await Usuario.findOne({ where: { id: usuario_id } });
    const livro = await Livro.findOne({ where: { id: livro_id } });

    if(!usuario){
      return res.status(400).json({ error: "usuário inexistente" })
    }

    if(!livro){
      return res.status(400).json({ error: "usuário inexistente" })
    }

    const emprestimo = await Emprestimo.create({
      usuario_id,
      livro_id,
    });

    if(emprestimo){
      return res.status(201).json(emprestimo);
    }

    return res.status(400).json({ error: "ocorreu um erro ao tentar realizar emprestimo" });
  }
}

module.exports = new EmprestimoController();