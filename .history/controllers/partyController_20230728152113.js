const PartyModel = require('../models/Party')

const checkpartyBudget = (budget, services) => {
  const priceSum = services.reduce((sum, services) => sum + services.price, 0)
  if(priceSum > budget) {
    return false
  }
  return true
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
      if(party.services && !checkpartyBudget(party.budget, party.services)) {

      }
    } catch (error) {
      console.log('Erro ao criar nova festa.', error)
    }
  }
}

module.exports = partyController