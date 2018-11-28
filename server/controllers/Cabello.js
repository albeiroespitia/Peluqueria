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

function getProduct (req,res){
    Cabello.find({},(err,cabello)=>{
        if (err) return res.status(500).send({message:`Error realizar la peticion ${err}`})
        if (!cabello) return res.status(404).send({message: `Error productos no existen`});

        res.send(200, {cabello})
    })
}



module.exports = {
	saveProduct,
	getProduct
}
