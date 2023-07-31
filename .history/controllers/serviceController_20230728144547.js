const { Service: ServiceModel } = require("../models/Service")

const serviceController = {
  create: async (req, res) => {
    try {
      const service = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image
      }
      const response = await ServiceModel.create(service)
      res.status(201).json({ response, msg: 'Serviço criado com sucesso!' })
    } catch (error) {
      console.log('Erro na insercão em serviceController:', error)
    }
  },  
  getAll: async (req, res) => {
    try {
      const services = await ServiceModel.find()
      res.json(services)
    } catch (error) {
      console.log('Erro ao listar todos os serviços: ', error)
    }
  },
  get: async(req, res) => {
    try {
      const id = req.params.id
      const service = await ServiceModel.findById(id)
      if(!service) {
        res.status(404).json({ msg: 'Serviço não encontrado.' })
        return
      }
      res.json(service)
    } catch (error) {
      console.log('Erro ao listar contato específico: ', error)
    }
  },
  delete: async(req, res) => {
    try {
      const id = req.params.id
      const service = await ServiceModel.findById(id)
      if(!service) {
        res.status(404).json({ msg: 'Erro ao deletar serviço, o mesmo não foi encontrado, verifique o ID.'})
        return
      }
      if(!id) {
        res.status(404).json({ msg: 'Registro já foi excluído.' })
      }
      const deleteService = await ServiceModel.findByIdAndDelete(id)
      res.status(200).json({ deleteService, msg: 'Serviço excluído com sucesso!' })
    } catch (error) {
      console.log('Erro ao deletar o serviço: ', error)
    }
  }
}

module.exports = serviceController