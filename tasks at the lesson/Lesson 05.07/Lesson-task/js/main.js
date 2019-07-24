// page init
jQuery(function(){
	initAccordion();
});

// accordion init
function initAccordion() {
	jQuery('.simple-accordion').slideAccordion({
		opener:'>a.opener',
		slider:'>div.slide',
		collapsible:false,
		animSpeed: 300
  });
  
	// jQuery('ul.multilevel-accordion').slideAccordion({
	// 	opener:'>a.opener',
	// 	slider:'>div.slide',
	// 	collapsible:true,
	// 	animSpeed: 300
	// });
}


