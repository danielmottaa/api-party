const mongoose = require('mongoose')
const { Schema } = mongoose

const serviceSchema = new Schema({
  name: { 
    type: String,
    required: true
  },
  description: { type: String },
  price: { type: Number },
  image: { type: String }
}, 
{ timestamps: true }
);

const Service = mongoose.model('Serivce', serviceSchema)

module.exports = {
  Service,
  serviceSchema
}