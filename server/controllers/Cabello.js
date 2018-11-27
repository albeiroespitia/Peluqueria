const Cabello = require('../models/Cabello');

function saveProduct (req,res){
    let cabello = new Cabello({
        description : req.body.description,
        price : req.body.price
    })

    cabello.save((err,cabelloStored)=>{
        if(err) res.status(500).send({message:`Error al salvar su cabello ${err}`})
        res.status(200).send({cabello:cabelloStored});
    })
}


module.exports = {
	saveProduct
}
