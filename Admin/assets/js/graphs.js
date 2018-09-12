serMensual();
serDiarios();
empMensual();
empDiarios();

function serMensual(){


	var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	var randomScalingFactor = function() {
		return Math.round(Math.random() * 100);
	};

	var config = {
		type: 'line',
		data: {
			labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
			datasets: [{
				label: 'Cortes de Cabello',
				backgroundColor: window.chartColors.red,
				borderColor: window.chartColors.red,
				data: [
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor()
				],
				fill: false,
			}, {
				label: 'Manicure',
				fill: false,
				backgroundColor: window.chartColors.yellow,
				borderColor: window.chartColors.yellow,
				data: [
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor()
				],
			},
			{
					label: 'Pedicure',
					fill: false,
					backgroundColor: window.chartColors.blue,
					borderColor: window.chartColors.blue,
					data: [
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor()
					],
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
						max: 100,

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


// REPORTE SERVICIOS DIARIOS
function serDiarios(){


	var timeFormat = 'MM/DD/YYYY HH:mm';

			function newDate(days) {
				return moment().add(days, 'd').toDate();
			}

			function newDateString(days) {
				return moment().add(days, 'd').format(timeFormat);
			}

			var color = Chart.helpers.color;
			var config = {
				type: 'line',
				data: {
					labels: [ // Date Objects
						newDate(0),
						newDate(1),
						newDate(2),
						newDate(3),
						newDate(4),
						newDate(5),
						newDate(6)
					],
					datasets: [{
						label: 'Peluqueria',
						backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
						borderColor: window.chartColors.red,
						fill: false,
						data: [
							randomScalingFactor(),
							randomScalingFactor(),
							randomScalingFactor(),
							randomScalingFactor(),
							randomScalingFactor(),
							randomScalingFactor(),
							randomScalingFactor()
						],
					}, {
						label: 'Manicure',
						backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
						borderColor: window.chartColors.blue,
						fill: false,
						data: [
							randomScalingFactor(),
							randomScalingFactor(),
							randomScalingFactor(),
							randomScalingFactor(),
							randomScalingFactor(),
							randomScalingFactor(),
							randomScalingFactor()
						],
					}, {
						label: 'Pedicure',
						backgroundColor: color(window.chartColors.green).alpha(0.5).rgbString(),
						borderColor: window.chartColors.yellow,
						fill: false,
						data: [{
							x: newDateString(0),
							y: randomScalingFactor()
						}, {
							x: newDateString(5),
							y: randomScalingFactor()
						}, {
							x: newDateString(7),
							y: randomScalingFactor()
						}, {
							x: newDateString(15),
							y: randomScalingFactor()
						}],
					}]
				},
				options: {
					title: {
						display: true,
						text: 'Ventas por tipo de servicios (Diarios)'
					},
					scales: {
						xAxes: [{
							type: 'time',
							time: {
								format: timeFormat,
								round: 'day',
								tooltipFormat: 'll HH:mm'
							},
							scaleLabel: {
								display: true,
								labelString: 'Dia'
													}
						}],
						yAxes: [{
							scaleLabel: {
								display: true,
								labelString: 'Cantidad vendida'
							}
						}]
					},
				}
			};

			window.onload = function() {
				var ctx = document.getElementById('SerSemanal').getContext('2d');
				window.myLine = new Chart(ctx, config);

			};

		

			var colorNames = Object.keys(window.chartColors);

}

function empMensual(){

	console.log("asjsdjsa")
		var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	
		var randomScalingFactor = function() {
			return Math.round(Math.random() * 100);
		};
	
		var config = {
			type: 'line',
			data: {
				labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
				datasets: [{
					label: 'Juan Mata',
					backgroundColor: window.chartColors.red,
					borderColor: window.chartColors.red,
					data: [
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor()
					],
					fill: false,
				}, {
					label: 'Sandra Reales',
					fill: false,
					backgroundColor: window.chartColors.yellow,
					borderColor: window.chartColors.yellow,
					data: [
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor()
					],
				},
				{
						label: 'Esteban Orozco',
						fill: false,
						backgroundColor: window.chartColors.blue,
						borderColor: window.chartColors.blue,
						data: [
							randomScalingFactor(),
							randomScalingFactor(),
							randomScalingFactor(),
							randomScalingFactor(),
							randomScalingFactor(),
							randomScalingFactor(),
							randomScalingFactor()
						],
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
							max: 100,
	
							// forces step size to be 5 units
							stepSize: 10
						}
					}]
				}
			}
		};
	
		var ctx = document.getElementById('empMensual').getContext('2d');
		window.myLine = new Chart(ctx, config);
	
	
		var colorNames = Object.keys(window.chartColors);
	
}

function empDiarios(){


	var timeFormat = 'MM/DD/YYYY HH:mm';

			function newDate(days) {
				return moment().add(days, 'd').toDate();
			}

			function newDateString(days) {
				return moment().add(days, 'd').format(timeFormat);
			}

			var color = Chart.helpers.color;
			var config = {
				type: 'line',
				data: {
					labels: [ // Date Objects
						newDate(0),
						newDate(1),
						newDate(2),
						newDate(3),
						newDate(4),
						newDate(5),
						newDate(6)
					],
					datasets: [{
						label: 'Esteban Reales',
						backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
						borderColor: window.chartColors.red,
						fill: false,
						data: [
							randomScalingFactor(),
							randomScalingFactor(),
							randomScalingFactor(),
							randomScalingFactor(),
							randomScalingFactor(),
							randomScalingFactor(),
							randomScalingFactor()
						],
					}, {
						label: 'Juan Mata',
						backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
						borderColor: window.chartColors.blue,
						fill: false,
						data: [
							randomScalingFactor(),
							randomScalingFactor(),
							randomScalingFactor(),
							randomScalingFactor(),
							randomScalingFactor(),
							randomScalingFactor(),
							randomScalingFactor()
						],
					}, {
						label: 'Sandra Reales',
						backgroundColor: color(window.chartColors.green).alpha(0.5).rgbString(),
						borderColor: window.chartColors.yellow,
						fill: false,
						data: [{
							x: newDateString(0),
							y: randomScalingFactor()
						}, {
							x: newDateString(5),
							y: randomScalingFactor()
						}, {
							x: newDateString(7),
							y: randomScalingFactor()
						}, {
							x: newDateString(15),
							y: randomScalingFactor()
						}],
					}]
				},
				options: {
					title: {
						display: true,
						text: 'Ventas por Empleados (Diarios)'
					},
					scales: {
						xAxes: [{
							type: 'time',
							time: {
								format: timeFormat,
								round: 'day',
								tooltipFormat: 'll HH:mm'
							},
							scaleLabel: {
								display: true,
								labelString: 'Dia'
													}
						}],
						yAxes: [{
							scaleLabel: {
								display: true,
								labelString: 'Cantidad vendida'
							}
						}]
					},
				}
			};

			
				var ctx = document.getElementById('empDiario').getContext('2d');
				window.myLine = new Chart(ctx, config);
		

			var colorNames = Object.keys(window.chartColors);

}