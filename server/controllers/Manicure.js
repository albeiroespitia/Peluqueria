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

function getProduct (req,res){
    Manicure.find({},(err,manicure)=>{
        if (err) return res.status(500).send({message:`Error realizar la peticion ${err}`})
        if (!manicure) return res.status(404).send({message: `Error productos no existen`});

        res.send(200, {manicure})
    })
}



module.exports = {
	saveProduct,
	getProduct
}
