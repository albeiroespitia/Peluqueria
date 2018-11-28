$(document).ready(function(){
	$('.formButon').click(async function(){
		let dataToSend = {
			empleado : $('.selectEmpleado').val(),
			servicio : $('.selectServicio').val(),
			mes : $('#mes').val(),
			price : $('#precio').val()
		}

		const response = await fetch('/api/ingreso',{
			method: 'POST',
			headers:{
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(dataToSend)
		});
		const data = await response.json();

		$('#mes').val('')
		$('#precio').val('')
		Materialize.toast('Agregado correctamente!', 3000) // 4000 is the duration of the toast


		console.log(dataToSend);
	})
})
