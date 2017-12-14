/* Делаем адаптивное меню на jQuery */

$(function() {
	var menuLink = $('.menu-link');
	var menu = $('menu');
	var close = $('.close-btn');
	var navLink = $('li a');

	menuLink.click(function() {
		event.preventDefault();
		menu.toggleClass('active-menu');
	});
	close.click(function() {
		event.preventDefault();
		menu.toggleClass('active-menu');
	});

	navLink.on('click', function(event) {
		event.preventDefault();
		var target = $(this).attr('href');
		var top = $(target).offset().top;
		$('html,body').animate({scrollTop: top}, 500)
	});
});