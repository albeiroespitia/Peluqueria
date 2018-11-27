const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ManicureSchema = Schema({
    description: String,
    price: Number
})

module.exports = mongoose.model('Manicure',ManicureSchema);
