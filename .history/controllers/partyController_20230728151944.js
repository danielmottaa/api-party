const PartyModel = require('../models/Party')

const checkpartyBudget = (budget, services) => {
  const priceSum = services.reduce((sum, services) => sum + services.price, 0)
}

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
      if(party.services && checkpartyBudget) {

      }
    } catch (error) {
      console.log('Erro ao criar nova festa.', error)
    }
  }
}

module.exports = partyController