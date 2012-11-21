jQuery(document).ready(function() {	
		
		// scrollTo for products
		//$('#product-menu').localScroll({
   		//	target:'#product-details',
  		//	axis:'xy',
  		//	queue:true //one axis at a time
		//});
	
		
		// Footer Slide Show
	 	$('#banner').bjqs({
           'animation' : 'slide',
           'width' : 520,
           'height' : 180
        });
		
		// Big Dropdown Menu
		$('#dropdown-menu').dcMegaMenu({
		rowItems: '5',
		speed: 'fast',
		effect: 'fade'
		});
		
		// Tree view menu
		$("#tree").treeview({
				collapsed: true,
				animated: "fast",
				control:"#sidetreecontrol",
				prerendered: true,
				persist: "location"
			});
		
		
		// navMain dropdown fade
		$("#navMain li").has("div").hover(function(){
		$(this).children("div").fadeIn(200);
	}, function() {
		$(this).children("div").stop(true, true).css("display", "none");
	});
		
		
	//Image opacity animation
	jQuery('.animate').animate({ "opacity" : 0.40 });	
	jQuery('.animate').hover(function() {
	jQuery(this).stop().animate({ "opacity" : 0.60});			
	},  function() {
	jQuery(this).stop().animate({ "opacity" : 0.40 });
	});	
	
	//image opacity animation alternate
	jQuery('.animateAlt').animate({ "opacity" : 1 });	
	jQuery('.animateAlt').hover(function() {
		jQuery(this).stop().animate({ "opacity" : 0.80 });
	}, function() {
		jQuery(this).stop().animate({ "opacity" : 1 });
	});
	 
	 
	 $('.fade').mosaic();
});
