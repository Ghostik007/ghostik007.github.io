$(function () {											

	function ScrollTo(element,positionShift,e) {
		e.preventDefault();
		var top = $($(element).attr('href')).offset().top + positionShift;
		$('html, body').stop().animate({scrollTop: top}, 800);
		$(".sidebar").removeClass("visibility-block");
	}

	$(".nav-menu-item").on("click", function(e){
  ScrollTo(this,0,e);
	});

	$("a.cta").on("click", function(e){
  ScrollTo(this,0,e);
	});
	
	$(".order-to-call-btn").on("click", function(e){
		e.preventDefault();
  $(".order-to-call").addClass("visibility-block");
	});

	$(".close-form-btn").on("click", function(e){
		e.preventDefault();
  $(".order-to-call").removeClass("visibility-block");
	});

	$(".btn-routes").on("click", function(e){
		e.preventDefault();
  $(".hidden-cards").toggleClass("visibility-flex");
  $( ".hidden-cards" ).first().hasClass( "visibility-flex" ) 
  	? $(this).text("Свернуть")
  	: $(this).text("Смотреть еще страны");
  ScrollTo(this,-600,e);
	});

		$(".dropdown-menu").on("click", function(e){
		e.preventDefault();
  $(".sidebar").addClass("visibility-block");
	});

	$(".close-sidebar").on("click", function(e){
		e.preventDefault();
  $(".sidebar").removeClass("visibility-block");
	});
	
var countryCounter = 1;
	var countries = ['Индия', 
																		'Танзания', 
																		'Великобритания', 
																		'Сирия', 
																		'Австралия', 
																		'Марокко', 
																		'Голландия', 
																		'Канада'];
	var countryPhotos = ['img/header-bg-1.jpg', 
																						'img/header-bg-2.jpg', 
																						'img/header-bg-3.jpg', 
																						'img/header-bg-4.jpg', 
																						'img/header-bg-5.jpg', 
																						'img/header-bg-6.jpg', 
																						'img/header-bg-7.jpg', 
																						'img/header-bg-8.jpg'];				

	$(".next-country").on("click", function(e){
		e.preventDefault();
		countryCounter++
		let index = countryCounter % 8;
		$(".nav-slider-handler").children("span").text(countries[index]);
		let newCountryPhoto = "linear-gradient(127.14deg, rgba(63, 0, 142, 0.8) 24.87%, rgba(82, 84, 1, 0.8) 81.24%), url('" + countryPhotos[index] + "') no-repeat center top / cover";
		$("#home").css('background', newCountryPhoto);		  
	});

	$(window).scroll(function() {
   let position = $(".scroll-to-top").offset().top;
   $(".scroll-to-top").css('visibility', ( position >= 1510 ? 'visible' : 'hidden') );  
	});

	$(".scroll-to-top").on("click", function(e){
  ScrollTo(this,0,e);
	});

})