const mongoose = require('mongoose')

async function Main() {
  try {
    await mongoose.connect('mongodb+srv://devdanielmotta:N0vasenh44.@cluster0.tsye32g.mongodb.net/?retryWrites=true&w=majority')
  } catch (error) {
    console.log('Erro na conexão: ', error)
  }
}

module.exports = Main