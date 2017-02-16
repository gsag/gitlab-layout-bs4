$('.js-sidebar-collapse').on('click', function () {
	event.preventDefault();
	$(this).find('i').toggleClass('fa-angle-left').toggleClass('fa-angle-right');
	$('#sidebar-wrapper').toggleClass('collapsed');	
	$('#sidebar-wrapper nav.nav-sidebar ul.nav > li.nav-item a.nav-link').find('span').toggleClass('hide');
	$('.logo-text').toggleClass('hide');
	$('.brand').toggleClass('collapsed');
	$('#page-wrapper').toggleClass('collapsed');
	$('header.navbar-gitlab').toggleClass('collapsed');
});
