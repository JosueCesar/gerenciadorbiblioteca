const Reserva = require('../models/Reserva');
const Usuario = require('../models/Usuario');
const Livro = require('../models/Livro');

class ReservaController {

  async index(req, res){
    const reservas = await Reserva.findAll({
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

    if(!reservas[0]){
      return res.status(404).json({ error: "Any 'Reserva' was found." });
    }

    return res.status(200).json(reservas.map(reserva => {
      return {
        reserva: {
          id: reserva.id,
          usuario: {
            id: reserva.usuario.id,
            nome: reserva.usuario.nome,
          },
          livro: {
            id: reserva.livro.id,
            titulo: reserva.livro.titulo,
          },
          data_reserva: Reserva.dateToString(reserva.data_reserva),
        },
      }
    }));
  }

  async store(req, res){
    const { usuario_id, livro_id } = req.params;

    const usuario = await Usuario.findByPk(usuario_id);
    const livro = await Livro.findByPk(livro_id);

    if(!usuario){
      return res.status(404).json({ error: "Any 'Usuario' was found" });
    }

    if(!livro){
      return res.status(404).json({ error: "Any 'Livro' was found" });
    }

    const reserva = await Reserva.create({
      usuario_id,
      livro_id,
    });

    if(reserva){
      return res.status(201).json(reserva);
    }

    return res.status(400).json({ error: "Problems on create a new 'Reserva'" })
  }

  async show(req, res){
    const { id } = req.params;

    const reserva = await Reserva.findByPk(id, {
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

    if(!reserva){
      res.status(404).json({ error: "'Reserva' with was not found" });
    }

    res.status(200).json({
      id: reserva.id,
      usuario: {
        id: reserva.usuario.id,
        nome: reserva.usuario.nome,
      }, 
      livro: {
        id: reserva.livro.id,
        titulo: reserva.livro.titulo,
      },
      data_reserva: Reserva.dateToString(reserva.data_reserva),
    });
  }

  async update(req, res){
    const reserva = await Reserva.update(req.body, { where: { id: req.params.id }});

    if(!reserva[0]){
      return res.status(404).send();
    }

    return res.status(200).json({ message: "Updated Successfully!" });
  }

  async delete(req, res){

    const reserva = await Reserva.destroy({ where: { id: req.params.id } });

    if(!reserva){
      return res.status(404).json({ error: "'Reserva' was not found" });
    }

    return res.status(200).json({ message: "was successfully deleted" });
  }

}

module.exports = new ReservaController();