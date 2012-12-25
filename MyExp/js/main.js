$(document).ready(function () {
	alert("hi");
//    $('.size-information input:radio').click(function () {
//		if($(this).is(':checked')){
//			$(this).parent().parent().addClass('select');
//			}
//	});
//	$('.size-information input:radio').mousedown(function(){
//  		var $self = $(this);
//  		if( $self.is(':checked') ){
//    var uncheck = function(){
//      setTimeout(function(){$self.removeAttr('checked');
//	  $self.parent().parent().removeClass('select');
//	  },0);
//    };
//    var unbind = function(){
//      $self.unbind('mouseup',up);
//    };
//    var up = function(){
//      uncheck();
//      unbind();
//    };
//    $self.bind('mouseup',up);
//    $self.one('mouseout', unbind);
//  }
//});
    $('.size-information input:radio').click(function () {
        if ($(this).is(':checked')) {
            $(this).parent().parent().addClass('selected');
            $(this).parent().parent().next().removeClass('selected');
            $(this).parent().parent().prev().removeClass('selected');
        }
    });
	
<<<<<<< HEAD
	//Empty Content -- Jquery 
	
	$(".empty td:empty").css("background","#0F0").text("This is all Empty")
	$(".empty").find('td').addClass('hi');
=======
	    if ($(".size-information td").is(":empty")) {
        $(".size-information th:nth-child(2)").hide();
        $(".size-information td:nth-child(2)").hide();
    }
>>>>>>> Empty JQ snippet added
});
