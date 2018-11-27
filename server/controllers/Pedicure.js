const Pedicure = require('../models/Pedicure');

function saveProduct (req,res){
    let pedicure = new Pedicure({
        description : req.body.description,
        price : req.body.price
    })

    pedicure.save((err,pedicureStored)=>{
        if(err) res.status(500).send({message:`Error al salvar su pedicure ${err}`})
        res.status(200).send({pedicure:pedicureStored});
    })
}


module.exports = {
	saveProduct
}
