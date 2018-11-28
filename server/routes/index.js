'use strict'

const express = require('express')
const path = require('path');
const cabelloCtrl = require('../controllers/Cabello')
const pedicureCtrl = require('../controllers/Pedicure')
const manicureCtrl = require('../controllers/Manicure')
const ingresoCtrl = require('../controllers/Ingreso')


const api = express.Router()

api.get('/',(req,res)=>{
	res.sendFile(path.join(__dirname, '../../', 'index.html'));
})

api.get('/Admin',(req,res)=>{
	res.sendFile(path.join(__dirname, '../../public', '/Admin/index.html'));
})

api.get('/ingreso', ingresoCtrl.getIngresos);
api.get('/cabello', cabelloCtrl.getProduct)
api.get('/pedicure', pedicureCtrl.getProduct)
api.get('/manicure', manicureCtrl.getProduct)

api.post('/cabello', cabelloCtrl.saveProduct)
api.post('/pedicure', pedicureCtrl.saveProduct)
api.post('/manicure', manicureCtrl.saveProduct)
api.post('/ingreso', ingresoCtrl.saveProduct)





module.exports = api
