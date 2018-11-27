const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PedicureSchema = Schema({
    description: String,
    price: Number
})

module.exports = mongoose.model('Pedicure',PedicureSchema);
