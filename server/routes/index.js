'use strict'

const express = require('express')
const path = require('path');
const cabelloCtrl = require('../controllers/Cabello')
const pedicureCtrl = require('../controllers/Pedicure')
const manicureCtrl = require('../controllers/Manicure')

const api = express.Router()

api.get('/',(req,res)=>{
	res.sendFile(path.join(__dirname, '../../', 'index.html'));
})

api.post('/cabello', cabelloCtrl.saveProduct)
api.post('/pedicure', pedicureCtrl.saveProduct)
api.post('/manicure', manicureCtrl.saveProduct)



module.exports = api
