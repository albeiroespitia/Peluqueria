const Manicure = require('../models/Manicure');

function saveProduct (req,res){
    let manicure = new Manicure({
        description : req.body.description,
        price : req.body.price
    })

    manicure.save((err,manicureStored)=>{
        if(err) res.status(500).send({message:`Error al salvar su manicure ${err}`})
        res.status(200).send({manicure:manicureStored});
    })
}


module.exports = {
	saveProduct
}
