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

function getProduct (req,res){
    Pedicure.find({},(err,pedicure)=>{
        if (err) return res.status(500).send({message:`Error realizar la peticion ${err}`})
        if (!pedicure) return res.status(404).send({message: `Error productos no existen`});

        res.send(200, {pedicure})
    })
}


module.exports = {
	saveProduct,
	getProduct
}
