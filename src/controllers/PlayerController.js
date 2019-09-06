const Player = require('../schemas/Player');

class PlayerController {

  async store(req, res) {
    const PlayerExists = await Player.findOne({ where: { name: req.body.name } });
    if(PlayerExists) {
      return res.status(400).json({ error: 'Player already exists' });
    }
    const { name, game, season, rank } = await Player.create(req.body);
    return res.json({ name, game, season, rank })
  }

  async index(req, res) {
    const response = await Player.find();
    return res.json(response)
  }

  async update(req, res) {
    const playerUp = await Player.findOneAndUpdate({ _id: req.params.id }, req.body);
    if(!playerUp) {
      return res.status(400).json({ error: 'Player dont exists' });
    }
    return res.json(playerUp);
  }

  async delete(req, res) {
    await Player.findOneAndDelete(req.params.id);
    return res.json({});
  }
}

module.exports = new PlayerController();