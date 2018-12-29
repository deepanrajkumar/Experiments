
/* ----------------------------------------------------------------------------------------- 
____________________________________________________________________
Mail Validation

----------------------------------------------------------------------------------------- */


jQuery(function(){
	
	

	// ------ Contact Form Validation
	jQuery("form.contact").submit(function(){

		var str = jQuery("form.contact").serialize();

						   jQuery.ajax({
						   type: "POST",
						   url: "contact.php",
						   data: str,
						   success: function(msg){
		jQuery("#note").ajaxComplete(function(event, request, settings){
		jQuery("#note").show();
		if(msg == 'OK') // Message Sent? Show the 'Thank You' message and hide the form
		{
		result = '<span class="notification_ok">Your message has been sent. Thank you!</span>';
		jQuery(".contact").hide();
		}
		else
		{
			result = msg;	
			
		}

		jQuery(this).html(result);

		});

		}
						 });

		return false;

	});
	

	
});
