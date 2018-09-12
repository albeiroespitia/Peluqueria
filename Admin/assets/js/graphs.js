
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

window.onload = function() {
  var ctx = document.getElementById('SerMensual').getContext('2d');
  window.myLine = new Chart(ctx, config);
};



var colorNames = Object.keys(window.chartColors);




// REPORTE SERVICIOS DIARIOS
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
					text: 'Chart.js Time Scale'
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

		document.getElementById('randomizeData').addEventListener('click', function() {
			config.data.datasets.forEach(function(dataset) {
				dataset.data.forEach(function(dataObj, j) {
					if (typeof dataObj === 'object') {
						dataObj.y = randomScalingFactor();
					} else {
						dataset.data[j] = randomScalingFactor();
					}
				});
			});

			window.myLine.update();
		});

		var colorNames = Object.keys(window.chartColors);
		document.getElementById('addDataset').addEventListener('click', function() {
			var colorName = colorNames[config.data.datasets.length % colorNames.length];
			var newColor = window.chartColors[colorName];
			var newDataset = {
				label: 'Dataset ' + config.data.datasets.length,
				borderColor: newColor,
				backgroundColor: color(newColor).alpha(0.5).rgbString(),
				data: [],
			};

			for (var index = 0; index < config.data.labels.length; ++index) {
				newDataset.data.push(randomScalingFactor());
			}

			config.data.datasets.push(newDataset);
			window.myLine.update();
		});

		document.getElementById('addData').addEventListener('click', function() {
			if (config.data.datasets.length > 0) {
				config.data.labels.push(newDate(config.data.labels.length));

				for (var index = 0; index < config.data.datasets.length; ++index) {
					if (typeof config.data.datasets[index].data[0] === 'object') {
						config.data.datasets[index].data.push({
							x: newDate(config.data.datasets[index].data.length),
							y: randomScalingFactor(),
						});
					} else {
						config.data.datasets[index].data.push(randomScalingFactor());
					}
				}

				window.myLine.update();
			}
		});

		document.getElementById('removeDataset').addEventListener('click', function() {
			config.data.datasets.splice(0, 1);
			window.myLine.update();
		});

		document.getElementById('removeData').addEventListener('click', function() {
			config.data.labels.splice(-1, 1); // remove the label first

			config.data.datasets.forEach(function(dataset) {
				dataset.data.pop();
			});

			window.myLine.update();
		});
