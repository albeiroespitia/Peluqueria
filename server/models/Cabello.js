const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CabelloSchema = Schema({
    description: String,
    price: Number
})

module.exports = mongoose.model('Cabello',CabelloSchema);
