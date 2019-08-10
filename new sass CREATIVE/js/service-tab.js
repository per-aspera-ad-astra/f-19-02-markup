$(document).ready(function() {

jQuery(function(){
	initTabs();
});


function initTabs() {
 
    jQuery('ul.services__item-tabset').contentTabs({
      autoHeight: true,
      animSpeed: 300,
      effect: 'fade',
      tabLinks: 'a'
    
    });
  }

});