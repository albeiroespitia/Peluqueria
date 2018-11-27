'use strict'

const express = require('express')
const path = require('path');
//const productCtrl = require('../controllers/product')
//const userCtrl = require('../controllers/user')
const api = express.Router()



api.get('/',(req,res)=>{
	res.sendFile(path.join(__dirname, '../../', 'index.html'));
})

/*api.get('/product', auth, productCtrl.getProducts)
api.get('/product/:productId', productCtrl.getProduct)
api.post('/product', auth, productCtrl.saveProduct)
api.put('/product/:productId', auth, productCtrl.updateProduct)
api.delete('/product/:productId', auth, productCtrl.deleteProduct)
api.post('/signup', userCtrl.signUp)
api.post('/signin', userCtrl.signIn)
api.get('/private', auth, (req, res) => {
  res.status(200).send({ message: 'Tienes acceso' })
})*/

module.exports = api
