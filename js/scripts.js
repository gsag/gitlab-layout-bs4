$('.js-sidebar-collapse').on('click', function (event) {
	event.preventDefault();
	/* Find the i element and toggle the icon class */
	$(this).find('i').toggleClass('fa-angle-left').toggleClass('fa-angle-right');
	/* Find the following elements and toggle responsive classes to collapse the sidebar */
	$('#sidebar-wrapper').toggleClass('collapsed');	
	$('#sidebar-wrapper nav.nav-sidebar ul.nav > li.nav-item a.nav-link').find('span').toggleClass('hide');
	$('.logo-text').toggleClass('hide');
	$('.brand').toggleClass('collapsed');
	$('#page-wrapper').toggleClass('collapsed');
	$('header.navbar-gitlab').toggleClass('collapsed');
});
