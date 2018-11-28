const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const IngresoSchema = Schema({
    empleado: String,
	servicio: String,
	mes: String,
    price: Number
})

module.exports = mongoose.model('Ingreso',IngresoSchema);
