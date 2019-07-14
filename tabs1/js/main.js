jQuery(function(){
	initTabs();
});

// content tabs init
function initTabs() {
	jQuery('ul.fade-tabset').contentTabs({
		animSpeed: 300,
		effect: 'fade',
		tabLinks: 'a',
	});
	
}