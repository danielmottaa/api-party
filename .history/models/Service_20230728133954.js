const mongoose = require('mongoose')
const { Schema } = mongoose

const serviceSchema = new Schema({
  name: { type: String, required: false },
  description: { type: String, required: false },
  price: { type: Number, required: true },
  image: { type: String, required: true }
}, 
{ timestamps: true }
);

const Service = mongoose.model('Serivce', serviceSchema)

module.exports = {
  Service,
  serviceSchema
}