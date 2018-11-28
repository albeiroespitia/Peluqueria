serMensual();
empMensual();
ingMensual();
calcularEgresos();
egringMensual();

$('#SerMensual').css({'display':'none'});
$('#ingMensual').css({'display':'none'});
$('#empMensual').css({'display':'none'});
$('#egrMensual').css({'display':'none'});
$('#egringMensual').css({'display':'none'});



async function calcularEgresos(){
	const response = await fetch('/api/ingreso',{
		method: 'GET',
		headers:{
			'Content-Type': 'application/json'
		}
	});
	const data = await response.json();

	let contador = 0;
	let ing = [];
	let egr = [];

	data.ingreso.filter(dato => dato.mes == 'Enero').map(function(element,index){
		contador+= element.price;
	});
	ing[0] = contador;
	contador=0;

	data.ingreso.filter(dato => dato.mes == 'Febrero').map(function(element,index){
		contador+= element.price;
	});
	ing[1] = contador;
	contador=0;

	data.ingreso.filter(dato => dato.mes == 'Marzo').map(function(element,index){
		contador+= element.price;
	});
	ing[2] = contador;
	contador=0;

	data.ingreso.filter(dato => dato.mes == 'Abril').map(function(element,index){
		contador+= element.price;
	});
	ing[3] = contador;
	contador = 0;

	egr[0] = ing[0]*0.10 + ing[0]*0.2 + 50 + ing[0]*0.1;
	egr[1] = ing[1]*0.10 + ing[1]*0.2 + 50 + ing[1]*0.1;
	egr[2] = ing[2]*0.10 + ing[2]*0.2 + 50 + ing[2]*0.1;
	egr[3] = ing[3]*0.10 + ing[3]*0.2 + 50 + ing[3]*0.1;

	console.log(egr);

	var randomScalingFactor = function() {
		return Math.round(Math.random() * 100);
	};

	var config = {
		type: 'line',
		data: {
			labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
			datasets: [{
				label: 'Egresos',
				backgroundColor: window.chartColors.red,
				borderColor: window.chartColors.red,
				data: egr,
				fill: false,
			}]
		},
		options: {
			responsive: true,
			title: {
				display: true,
				text: 'Egresos (Mensuales)'
			},
			tooltips: {
				mode: 'index',
				intersect: false,
			},
			hover: {
				mode: 'nearest',
				intersect: true
			},
			scales: {
				xAxes: [{
					display: true,

					scaleLabel: {
						display: true,
						labelString: 'Mes'
					}

				}],
				yAxes: [{
					display: true,
					scaleLabel: {
						display: true,
						labelString: 'Cantidad'
					},
					ticks: {
						min: 0,
						max: 1000,
						// forces step size to be 5 units
						stepSize: 100
					}
				}]
			}
		}
	};

	var ctx = document.getElementById('egrMensual').getContext('2d');
	window.myLine = new Chart(ctx, config);


	var colorNames = Object.keys(window.chartColors);


}


$('.graphsSelect').change(function(){
	if(this.value == "EmpMensual"){
		$('#SerMensual').css({'display':'none'});
		$('#ingMensual').css({'display':'none'});
		$('#egringMensual').css({'display':'none'});
		$('#egrMensual').css({'display':'none'});
		$('#empMensual').css({'display':'block'});
	}else if(this.value == "SerMensual"){
		$('#empMensual').css({'display':'none'});
		$('#ingMensual').css({'display':'none'});
		$('#egringMensual').css({'display':'none'});
		$('#SerMensual').css({'display':'block'});
		$('#egrMensual').css({'display':'none'});
	}else if(this.value == "IngMensual"){
		$('#empMensual').css({'display':'none'});
		$('#SerMensual').css({'display':'none'});
		$('#egringMensual').css({'display':'none'});
		$('#egrMensual').css({'display':'none'});
		$('#ingMensual').css({'display':'block'});
	}else if(this.value == "EgrMensual"){
		$('#empMensual').css({'display':'none'});
		$('#SerMensual').css({'display':'none'});
		$('#ingMensual').css({'display':'none'});
		$('#egringMensual').css({'display':'none'});
		$('#egrMensual').css({'display':'block'});
	}else if(this.value == "EgrIngMensual"){
		$('#empMensual').css({'display':'none'});
		$('#SerMensual').css({'display':'none'});
		$('#ingMensual').css({'display':'none'});
		$('#egrMensual').css({'display':'none'});
		$('#egringMensual').css({'display':'block'});
	}
})

async function serMensual(){

	const response = await fetch('/api/ingreso',{
		method: 'GET',
		headers:{
  			'Content-Type': 'application/json'
		}
	});
	const data = await response.json();
	console.log(data.ingreso);

	let contador = 0;

	let cabello = [];
	let manicure = [];
	let pedicure = [];


	// CABELLO
	data.ingreso.filter(dato => dato.servicio == 'Cabello' && dato.mes == 'Enero').map(function(element,index){
		contador++;
	});
	cabello[0] = contador;
	contador=0;

	data.ingreso.filter(dato => dato.servicio == 'Cabello' && dato.mes == 'Febrero').map(function(element,index){
		contador++;
	});
	cabello[1] = contador;
	contador=0;

	data.ingreso.filter(dato => dato.servicio == 'Cabello' && dato.mes == 'Marzo').map(function(element,index){
		contador++;
	});
	cabello[2] = contador;
	contador=0;

	data.ingreso.filter(dato => dato.servicio == 'Cabello' && dato.mes == 'Abril').map(function(element,index){
		contador++;
	});
	cabello[3] = contador;
	contador = 0;


	// MANICURE

	data.ingreso.filter(dato => dato.servicio == 'Manicure' && dato.mes == 'Enero').map(function(element,index){
		contador++;
	});
	manicure[0] = contador;
	contador=0;

	data.ingreso.filter(dato => dato.servicio == 'Manicure' && dato.mes == 'Febrero').map(function(element,index){
		contador++;
	});
	manicure[1] = contador;
	contador=0;

	data.ingreso.filter(dato => dato.servicio == 'Manicure' && dato.mes == 'Marzo').map(function(element,index){
		contador++;
	});
	manicure[2] = contador;
	contador=0;

	data.ingreso.filter(dato => dato.servicio == 'Manicure' && dato.mes == 'Abril').map(function(element,index){
		contador++;
	});
	manicure[3] = contador;
	contador = 0;


	// PEDICURE

	data.ingreso.filter(dato => dato.servicio == 'Pedicure' && dato.mes == 'Enero').map(function(element,index){
		contador++;
	});
	pedicure[0] = contador;
	contador=0;

	data.ingreso.filter(dato => dato.servicio == 'Pedicure' && dato.mes == 'Febrero').map(function(element,index){
		contador++;
	});
	pedicure[1] = contador;
	contador=0;

	data.ingreso.filter(dato => dato.servicio == 'Pedicure' && dato.mes == 'Marzo').map(function(element,index){
		contador++;
	});
	pedicure[2] = contador;
	contador=0;

	data.ingreso.filter(dato => dato.servicio == 'Pedicure' && dato.mes == 'Abril').map(function(element,index){
		contador++;
	});
	pedicure[3] = contador;
	contador = 0;


	var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	var randomScalingFactor = function() {
		return Math.round(Math.random() * 100);
	};

	var config = {
		type: 'line',
		data: {
			labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
			datasets: [{
				label: 'Cortes de Cabello',
				backgroundColor: window.chartColors.red,
				borderColor: window.chartColors.red,
				data: cabello,
				fill: false,
			}, {
				label: 'Manicure',
				fill: false,
				backgroundColor: window.chartColors.yellow,
				borderColor: window.chartColors.yellow,
				data: manicure,
			},
			{
					label: 'Pedicure',
					fill: false,
					backgroundColor: window.chartColors.blue,
					borderColor: window.chartColors.blue,
					data: pedicure,
				}]
		},
		options: {
			responsive: true,
			title: {
				display: true,
				text: 'Ventas por tipo de servicios (Mensual)'
			},
			tooltips: {
				mode: 'index',
				intersect: false,
			},
			hover: {
				mode: 'nearest',
				intersect: true
			},
			scales: {
				xAxes: [{
					display: true,

					scaleLabel: {
						display: true,
						labelString: 'Mes'
					}

				}],
				yAxes: [{
					display: true,
					scaleLabel: {
						display: true,
						labelString: 'Cantidad'
					},
					ticks: {
						min: 0,
						max: 15,
						// forces step size to be 5 units
						stepSize: 10
					}
				}]
			}
		}
	};

	var ctx = document.getElementById('SerMensual').getContext('2d');
		window.myLine = new Chart(ctx, config);


	var colorNames = Object.keys(window.chartColors);
}

async function empMensual(){

		const response = await fetch('/api/ingreso',{
			method: 'GET',
			headers:{
	  			'Content-Type': 'application/json'
			}
		});
		const data = await response.json();
		console.log(data.ingreso);

		let contador = 0;

		let emp1 = [];
		let emp2 = [];
		let emp3 = [];


		// EMP3
		data.ingreso.filter(dato => dato.empleado == 'Juan Mata' && dato.mes == 'Enero').map(function(element,index){
			contador++;
		});
		emp1[0] = contador;
		contador=0;

		data.ingreso.filter(dato => dato.empleado == 'Juan Mata' && dato.mes == 'Febrero').map(function(element,index){
			contador++;
		});
		emp1[1] = contador;
		contador=0;

		data.ingreso.filter(dato => dato.empleado == 'Juan Mata' && dato.mes == 'Marzo').map(function(element,index){
			contador++;
		});
		emp1[2] = contador;
		contador=0;

		data.ingreso.filter(dato => dato.empleado == 'Juan Mata' && dato.mes == 'Abril').map(function(element,index){
			contador++;
		});
		emp1[3] = contador;
		contador = 0;


		// MANICURE

		data.ingreso.filter(dato => dato.empleado == 'Sandra Reales' && dato.mes == 'Enero').map(function(element,index){
			contador++;
		});
		emp2[0] = contador;
		contador=0;

		data.ingreso.filter(dato => dato.empleado == 'Sandra Reales' && dato.mes == 'Febrero').map(function(element,index){
			contador++;
		});
		emp2[1] = contador;
		contador=0;

		data.ingreso.filter(dato => dato.empleado == 'Sandra Reales' && dato.mes == 'Marzo').map(function(element,index){
			contador++;
		});
		emp2[2] = contador;
		contador=0;

		data.ingreso.filter(dato => dato.empleado == 'Sandra Reales' && dato.mes == 'Abril').map(function(element,index){
			contador++;
		});
		emp2[3] = contador;
		contador = 0;


		// PEDICURE

		data.ingreso.filter(dato => dato.empleado == 'Esteban Orozco' && dato.mes == 'Enero').map(function(element,index){
			contador++;
		});
		emp3[0] = contador;
		contador=0;

		data.ingreso.filter(dato => dato.empleado == 'Esteban Orozco' && dato.mes == 'Febrero').map(function(element,index){
			contador++;
		});
		emp3[1] = contador;
		contador=0;

		data.ingreso.filter(dato => dato.empleado == 'Esteban Orozco' && dato.mes == 'Marzo').map(function(element,index){
			contador++;
		});
		emp3[2] = contador;
		contador=0;

		data.ingreso.filter(dato => dato.empleado == 'Esteban Orozco' && dato.mes == 'Abril').map(function(element,index){
			contador++;
		});
		emp3[3] = contador;
		contador = 0;

		console.log(emp1);

		var randomScalingFactor = function() {
			return Math.round(Math.random() * 100);
		};

		var config = {
			type: 'line',
			data: {
				labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
				datasets: [{
					label: 'Juan Mata',
					backgroundColor: window.chartColors.red,
					borderColor: window.chartColors.red,
					data: emp1,
					fill: false,
				}, {
					label: 'Sandra Reales',
					fill: false,
					backgroundColor: window.chartColors.yellow,
					borderColor: window.chartColors.yellow,
					data: emp2,
				},
				{
						label: 'Esteban Orozco',
						fill: false,
						backgroundColor: window.chartColors.blue,
						borderColor: window.chartColors.blue,
						data: emp3,
					}]
			},
			options: {
				responsive: true,
				title: {
					display: true,
					text: 'Ventas por Empleados (Mensual)'
				},
				tooltips: {
					mode: 'index',
					intersect: false,
				},
				hover: {
					mode: 'nearest',
					intersect: true
				},
				scales: {
					xAxes: [{
						display: true,

						scaleLabel: {
							display: true,
							labelString: 'Mes'
						}

					}],
					yAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Cantidad'
						},
						ticks: {
							min: 0,
							max: 20,
							// forces step size to be 5 units
							stepSize: 5
						}
					}]
				}
			}
		};

		var ctx = document.getElementById('empMensual').getContext('2d');
		window.myLine = new Chart(ctx, config);


		var colorNames = Object.keys(window.chartColors);

}

async function ingMensual(){

		const response = await fetch('/api/ingreso',{
			method: 'GET',
			headers:{
	  			'Content-Type': 'application/json'
			}
		});
		const data = await response.json();
		console.log(data.ingreso);

		let contador = 0;

		let ing = [];

		data.ingreso.filter(dato => dato.mes == 'Enero').map(function(element,index){
			contador+= element.price;
		});
		ing[0] = contador;
		contador=0;

		data.ingreso.filter(dato => dato.mes == 'Febrero').map(function(element,index){
			contador+= element.price;
		});
		ing[1] = contador;
		contador=0;

		data.ingreso.filter(dato => dato.mes == 'Marzo').map(function(element,index){
			contador+= element.price;
		});
		ing[2] = contador;
		contador=0;

		data.ingreso.filter(dato => dato.mes == 'Abril').map(function(element,index){
			contador+= element.price;
		});
		ing[3] = contador;
		contador = 0;


		var randomScalingFactor = function() {
			return Math.round(Math.random() * 100);
		};

		var config = {
			type: 'line',
			data: {
				labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
				datasets: [{
					label: 'Ingresos',
					backgroundColor: window.chartColors.red,
					borderColor: window.chartColors.red,
					data: ing,
					fill: false,
				}]
			},
			options: {
				responsive: true,
				title: {
					display: true,
					text: 'Ingresos (Mensuales)'
				},
				tooltips: {
					mode: 'index',
					intersect: false,
				},
				hover: {
					mode: 'nearest',
					intersect: true
				},
				scales: {
					xAxes: [{
						display: true,

						scaleLabel: {
							display: true,
							labelString: 'Mes'
						}

					}],
					yAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Cantidad'
						},
						ticks: {
							min: 0,
							max: 1000,
							// forces step size to be 5 units
							stepSize: 100
						}
					}]
				}
			}
		};

		var ctx = document.getElementById('ingMensual').getContext('2d');
		window.myLine = new Chart(ctx, config);


		var colorNames = Object.keys(window.chartColors);

}

async function egringMensual(){
	const response = await fetch('/api/ingreso',{
		method: 'GET',
		headers:{
			'Content-Type': 'application/json'
		}
	});
	const data = await response.json();

	let contador = 0;
	let ing = [];
	let egr = [];

	data.ingreso.filter(dato => dato.mes == 'Enero').map(function(element,index){
		contador+= element.price;
	});
	ing[0] = contador;
	contador=0;

	data.ingreso.filter(dato => dato.mes == 'Febrero').map(function(element,index){
		contador+= element.price;
	});
	ing[1] = contador;
	contador=0;

	data.ingreso.filter(dato => dato.mes == 'Marzo').map(function(element,index){
		contador+= element.price;
	});
	ing[2] = contador;
	contador=0;

	data.ingreso.filter(dato => dato.mes == 'Abril').map(function(element,index){
		contador+= element.price;
	});
	ing[3] = contador;
	contador = 0;

	egr[0] = ing[0]*0.10 + ing[0]*0.2 + 50 + ing[0]*0.1;
	egr[1] = ing[1]*0.10 + ing[1]*0.2 + 50 + ing[1]*0.1;
	egr[2] = ing[2]*0.10 + ing[2]*0.2 + 50 + ing[2]*0.1;
	egr[3] = ing[3]*0.10 + ing[3]*0.2 + 50 + ing[3]*0.1;

	console.log(egr);

	var randomScalingFactor = function() {
		return Math.round(Math.random() * 100);
	};

	var config = {
		type: 'bar',
		data: {
			labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
			datasets: [{
				label: 'Egresos',
				backgroundColor: window.chartColors.blue,
				borderColor: window.chartColors.blue,
				data: egr,
				fill: false,
				type: 'line'
			},{
				label: 'Ingresos',
				backgroundColor: window.chartColors.yellow,
				borderColor: window.chartColors.yellow,
				data: ing,
				fill: false,
			},]
		},
		options: {
			responsive: true,
			title: {
				display: true,
				text: 'Ingresos vs Egresos (Mensuales)'
			},
			tooltips: {
				mode: 'index',
				intersect: false,
			},
			hover: {
				mode: 'nearest',
				intersect: true
			},
			scales: {
				xAxes: [{
					display: true,

					scaleLabel: {
						display: true,
						labelString: 'Mes'
					}

				}],
				yAxes: [{
					display: true,
					scaleLabel: {
						display: true,
						labelString: 'Cantidad'
					},
					ticks: {
						min: 0,
						max: 1000,
						// forces step size to be 5 units
						stepSize: 100
					}
				}]
			}
		}
	};

	var ctx = document.getElementById('egringMensual').getContext('2d');
	window.myLine = new Chart(ctx, config);


	var colorNames = Object.keys(window.chartColors);



}
