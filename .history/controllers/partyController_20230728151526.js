const PartyModel = require('../models/Party')

const partyController = {
  create: (req, res) => {
    try {
      const party = {
        title:        req.body.title,
        author:       req.body.author,
        description:  req.body.description,
        budget:       req.body.budget,
        image:        req.body.image,
        services:     req.body.services
      }
    } catch (error) {
      console.log('Erro ao criar nova festa.', error)
    }
  }
}

module.exports = partyController