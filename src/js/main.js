$("#button").click(function() {
	$('.nav2').toggleClass('nav2visible');
	$(this).toggleClass('open');
	$('body').toggleClass('menuopen');
});

$(".menudesplegable").click(function() {
	$('.menudesplegable2').toggleClass('menudesplegablevisible2');
});

$(".desplegable a").click(function() {
    $('.desplegable').toggleClass('hover');
});