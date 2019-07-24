// page init
jQuery(function(){
	initTabs();
});

// content tabs init
function initTabs() {
  
	jQuery('ul.tabset').contentTabs({
		autoHeight: true,
		animSpeed: 300,
		effect: 'fade',
		tabLinks: 'a',
		// event: 'mouseenter' - нажатие по ховеру
  });
  
	// jQuery('ul.slide-tabset').contentTabs({
	// 	addToParent: true,
	// 	animSpeed: 500,
	// 	effect: 'slide',
	// 	tabLinks: 'a'
	// });
	// jQuery('ul.multi-tabset').contentTabs({
	// 	tabLinks: 'a'
	// });
}
