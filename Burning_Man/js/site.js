$(function (){
	$('.menu-open').click(function(){
		$('.menu').toggleClass('show-menu')
	})

	$('.menu').click(function(){
		$('.menu').toggleClass('show-menu')
	})

$("a.scroll-to").on("click", function(e){
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 60
    }, 800);
});

})