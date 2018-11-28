const Ingreso = require('../models/Ingreso');

function saveProduct (req,res){
	console.log(req.body);
    let ingreso = new Ingreso({
        empleado : req.body.empleado,
        servicio : req.body.servicio,
		mes : req.body.mes,
		price : req.body.price
    })

    ingreso.save((err,ingresoStored)=>{
        if(err) res.status(500).send({message:`Error al salvar su ingreso ${err}`})
        res.status(200).send({ingreso:ingresoStored});
    })
}

function getIngresos (req,res){
    Ingreso.find({},(err,ingreso)=>{
        if (err) return res.status(500).send({message:`Error realizar la peticion ${err}`})
        if (!ingreso) return res.status(404).send({message: `Error productos no existen`});

        res.send(200, {ingreso})
    })
}


module.exports = {
	saveProduct,
	getIngresos
}
