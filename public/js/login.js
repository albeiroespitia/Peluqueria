
function cambiar_login() {
  document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";
  document.querySelector('.cont_form_login').style.display = "block";
  document.querySelector('.cont_form_sign_up').style.opacity = "0";

  setTimeout(function () {
    document.querySelector('.cont_form_login').style.opacity = "1";
  }, 400);

  setTimeout(function () {
    document.querySelector('.cont_form_sign_up').style.display = "none";
  }, 200);
}

function cambiar_sign_up(at) {
  document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
  document.querySelector('.cont_form_sign_up').style.display = "block";
  document.querySelector('.cont_form_login').style.opacity = "0";

  setTimeout(function () {
    document.querySelector('.cont_form_sign_up').style.opacity = "1";
  }, 100);

  setTimeout(function () {
    document.querySelector('.cont_form_login').style.display = "none";
  }, 400);


}



function ocultar_login_sign_up() {

  document.querySelector('.cont_forms').className = "cont_forms";
  document.querySelector('.cont_form_sign_up').style.opacity = "0";
  document.querySelector('.cont_form_login').style.opacity = "0";

  setTimeout(function () {
    document.querySelector('.cont_form_sign_up').style.display = "none";
    document.querySelector('.cont_form_login').style.display = "none";
  }, 500);

}


$('.loginlinkButton').click(function (e) {
  $('.cont_login').css('display', 'block');
  $(".cont_login").animate({
    opacity: 1,
    left: "+=0"
  }, 1000);
})

$('.ubicationButton').click(function(e){
  $('html, body').animate({scrollTop:$('#secondDivider').position().top}, 1500);
})



$('.closemodalicon').click(function(){
  $(".cont_login").animate({
    opacity: 0,
    left: "+=0"
  }, 1000,function(){
    $('.cont_login').css('display', 'none');
  });

})


$('.pulse').click(function(){
  $('html, body').animate({scrollTop:$('#firstDivider').position().top}, 1500);
})

$('.btn_login').click(function(){
  var userEmail = $('#emailLogin').val();
  var passwordEmail = $('#passwordLogin').val();

  if((userEmail == "admin") && (passwordEmail == "admin")){
    location.href ="../Admin/";
  }


  (function() {
    // We must use JS as we need to select previous
    // elements which can't be done with CSS.
    $('.skew-title').children('span').hover((function() {
      var $el, n;
      $el = $(this);
      n = $el.index() + 1;
      $el.addClass('flat');
      if (n % 2 === 0) {
        return $el.prev().addClass('flat');
      } else {
        if (!$el.hasClass('last')) {
          return $el.next().addClass('flat');
        }
      }
    }), function() {
      return $('.flat').removeClass('flat');
    });

  }).call(this);
})

$(document).ready(async function(){
	const response = await fetch('/api/cabello',{
		method: 'GET',
		headers:{
			'Content-Type': 'application/json'
		}
	});
	const dataCabello = await response.json();
	console.log(dataCabello);

	const response2 = await fetch('/api/manicure',{
		method: 'GET',
		headers:{
			'Content-Type': 'application/json'
		}
	});
	const dataManicure = await response2.json();
	console.log(dataManicure);

	const response3 = await fetch('/api/pedicure',{
		method: 'GET',
		headers:{
			'Content-Type': 'application/json'
		}
	});
	const dataPedicure = await response3.json();
	console.log(dataPedicure);


	let htmlCabello = '';
	dataCabello.cabello.map(function(element){
		htmlCabello+= `<div class="sectionPlatillo ">
			<p class="nombre">${element.description}</p>
			<p class="precio">$${element.price}</p>
		</div>`
	})

	$('.sectionplatillo1').html(htmlCabello);

	let htmlManicure = '';
	dataManicure.manicure.map(function(element){
		htmlManicure+= `<div class="sectionPlatillo ">
			<p class="nombre">${element.description}</p>
			<p class="precio">$${element.price}</p>
		</div>`
	})

	$('.manicureP').html(htmlManicure);

	let htmlPedicure = '';
	dataPedicure.pedicure.map(function(element){
		htmlPedicure+= `<div class="sectionPlatillo ">
			<p class="nombre">${element.description}</p>
			<p class="precio">$${element.price}</p>
		</div>`
	})

	$('.pedicureP').html(htmlPedicure);

})
