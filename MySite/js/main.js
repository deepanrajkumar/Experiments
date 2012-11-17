/* jQuery Easing v1.1 */
jQuery.easing={easein:function(x,t,b,c,d){return c*(t/=d)*t+b},easeinout:function(x,t,b,c,d){if(t<d/2)return 2*c*t*t/(d*d)+b;var a=t-d/2;return-2*c*a*a/(d*d)+2*c*a/d+c/2+b},easeout:function(x,t,b,c,d){return-c*t*t/(d*d)+2*c*t/d+b},expoin:function(x,t,b,c,d){var a=1;if(c<0){a*=-1;c*=-1}return a*(Math.exp(Math.log(c)/d*t))+b},expoout:function(x,t,b,c,d){var a=1;if(c<0){a*=-1;c*=-1}return a*(-Math.exp(-Math.log(c)/d*(t-d))+c+1)+b},expoinout:function(x,t,b,c,d){var a=1;if(c<0){a*=-1;c*=-1}if(t<d/2)return a*(Math.exp(Math.log(c/2)/(d/2)*t))+b;return a*(-Math.exp(-2*Math.log(c/2)/d*(t-d))+c+1)+b},bouncein:function(x,t,b,c,d){return c-jQuery.easing['bounceout'](x,d-t,0,c,d)+b},bounceout:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b}},bounceinout:function(x,t,b,c,d){if(t<d/2)return jQuery.easing['bouncein'](x,t*2,0,c,d)*.5+b;return jQuery.easing['bounceout'](x,t*2-d,0,c,d)*.5+c*.5+b},elasin:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b},elasout:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b},elasinout:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b},backin:function(x,t,b,c,d){var s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b},backout:function(x,t,b,c,d){var s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},backinout:function(x,t,b,c,d){var s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b},linear:function(x,t,b,c,d){return c*t/d+b}};

jQuery(function(){	
calendar = new Date();
day = calendar.getDay();
month = calendar.getMonth();
date = calendar.getDate();
year = calendar.getYear();
if (year < 1000)
year+=1900
cent = parseInt(year/100);
g = year % 19;
k = parseInt((cent - 17)/25);
i = (cent - parseInt(cent/4) - parseInt((cent - k)/3) + 19*g + 15) % 30;
i = i - parseInt(i/28)*(1 - parseInt(i/28)*parseInt(29/(i+1))*parseInt((21-g)/11));
j = (year + parseInt(year/4) + i + 2 - cent + parseInt(cent/4)) % 7;
l = i - j;
emonth = 3 + parseInt((l + 40)/44);
edate = l + 28 - 31*parseInt((emonth/4));
emonth--;
var dayname = new Array ("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");
var monthname =
new Array ("January","February","March","April","May","June","July","August","September","October","November","December" );
document.Tick.day.value=dayname[day]		
});
jQuery(function(){
	var Digital=new Date()
var hours=Digital.getHours()
var minutes=Digital.getMinutes()
var seconds=Digital.getSeconds()
var dn="AM"
if (hours>12){
dn="PM"
hours=hours-12
}
if (hours==0)
hours=12
if (minutes<=9)
minutes="0"+minutes
if (seconds<=9)
seconds="0"+seconds
document.Tick.Clock.value=hours+":"+minutes+" "+dn
setTimeout("show()",1000)
});
//=====================[ Window Access ]====================//
function blog() {$.window({	title: "Deepan Writes",url: "http://www.deepanrajkumar.com/blog/"});}
function facebook() {$.window({	title: "Facebook",url: "http://www.facebook.com/princedeepan"});}
function twitter() {$.window({	title: "Twitter",url: "http://twitter.com/princedeepan"});}
function linked() {$.window({	title: "Linked in",url: "http://in.linkedin.com/in/princedeepan"});}
function youtube() {$.window({	title: "Youtube Album",url: "http://www.youtube.com/princedeepan"});}
<!--================== about ==================--> 
function about() {$.window({title: "About Me",content: $("#about_me").html(), // load window_block2 html content
//<![CDATA[
footerContent: "<img style='vertical-align:middle;' src='img/star.png' alt='' />"+
"<img style='vertical-align:middle;' src='img/star.png' alt='' />"+
"<img style='vertical-align:middle;' src='img/star.png' alt='' />"+
""  //]]>
});	}		

<!--================== Ads ==================--> 
function more() {$.window({title: "Similar articles",content: $("#more").html(), // load window_block2 html content
//<![CDATA[
footerContent: "<img style='vertical-align:middle;' src='img/star.png' alt='' />"+
"<img style='vertical-align:middle;' src='img/star.png' alt='' />"+
"<img style='vertical-align:middle;' src='img/star.png' alt='' />"+
""  //]]>
});	}	
<!--================== Contact ==================--> 
function contact() {// bind window onbeforeunload event with callback function
var checkRedirectMsg = null;window.onbeforeunload = function() {if(checkRedirectMsg != null) {return checkRedirectMsg;}}
// create window to listen iframe start, end & window close event
				$.window({title: "Contact",	url: "contact.html",onIframeStart: function(wnd, url) {						checkRedirectMsg = "the window is going to redirect to URL:\r\n"+url;},	onIframeEnd: function(wnd, url) {						checkRedirectMsg = null;},onClose: function() {checkRedirectMsg = null;}});}
<!--================== portfolio ==================--> 
function portfolio() {// bind window onbeforeunload event with callback function
var checkRedirectMsg = null;window.onbeforeunload = function() {if(checkRedirectMsg != null) {return checkRedirectMsg;}}
// create window to listen iframe start, end & window close event
$.window({title: "My Portfolio",url: "portfolio.html",onIframeStart: function(wnd, url) {checkRedirectMsg = "the window is going to redirect to URL:\r\n"+url;},onIframeEnd: function(wnd, url) {checkRedirectMsg = null;},onClose: function() {						checkRedirectMsg = null;}});}
<!--================== gallery ==================--> 
function gallery() {// bind window onbeforeunload event with callback function
var checkRedirectMsg = null;window.onbeforeunload = function() {if(checkRedirectMsg != null) {return checkRedirectMsg;}}
// create window to listen iframe start, end & window close event
$.window({title: "My Personal Gallery",url: "gallery.html",onIframeStart: function(wnd, url) {checkRedirectMsg = "the window is going to redirect to URL:\r\n"+url;},onIframeEnd: function(wnd, url) {checkRedirectMsg = null;},onClose: function() {						checkRedirectMsg = null;}});}


//===================[ Window Access ]====================//

(function($) {
    $.fn.lavaLamp = function(o) {
        o = $.extend({ fx: "linear", speed: 500, click: function(){} }, o || {});
        return this.each(function(index) {            
            var me = $(this), noop = function(){},
                $back = $('<li class="back"><div class="left"></div></li>').appendTo(me),
                $li = $(">li", this), curr = $("li.current", this)[0] || $($li[0]).addClass("current")[0];
            $li.not(".back").hover(function() {
                move(this);
            }, noop);
            $(this).hover(noop, function() {
                move(curr);
            });
            $li.click(function(e) {
                setCurr(this);
                return o.click.apply(this, [e, this]);
            });
            setCurr(curr);

            function setCurr(el) {
                $back.css({ "left": el.offsetLeft+"px", "width": el.offsetWidth+"px" });
                curr = el;
            };            
            function move(el) {
                $back.each(function() {
                    $.dequeue(this, "fx"); }
                ).animate({
                    width: el.offsetWidth,
                    left: el.offsetLeft
                }, o.speed, o.fx);
            };
            if (index == 0){
                $(window).resize(function(){
                    $back.css({
                        width: curr.offsetWidth,
                        left: curr.offsetLeft
                    });
                });
            }
            
        });
    };
})(jQuery);

jQuery(function() {
    var $ = jQuery;
    // ie 6
    var ie6 = ($.browser.msie && $.browser.version < 7);
    // retarder
    $.fn.retarder = function(delay, method){
        var node = this;
        if (node.length){
            if (node[0]._timer_) clearTimeout(node[0]._timer_);
            node[0]._timer_ = setTimeout(function(){ method(node); }, delay);
        }
        return this;
    };
	
    // base rules
    $('#bmenu').addClass('js-active');
    $('ul div', '#bmenu').css('visibility', 'hidden');
    $('.menu>li', '#bmenu').hover(
        function(){
            var ul = $('div:first', this);
            if (ul.length){
                if (!ul[0].hei) ul[0].hei = ul.height();
                ul.css({height: 0, overflow: 'hidden'}).retarder(500, function(i){
                    //$('a:first', ul[0].parentNode).css('background', '#000');
                    $('#bmenu').removeClass('js-active');
                    i.css('visibility', 'visible').animate({height: ul[0].hei}, {duration: 300, complete : function(){ ul.css('overflow', 'visible'); }});
                });
            }
            else setTimeout(function(){ $('#bmenu').removeClass('js-active'); }, 500);
        },
        function(){
            var ul  = $('div:first', this);
            if (ul.length){
                var css = {visibility: 'hidden', height: ul[0].hei};
                //$('a:first', ul[0].parentNode).css('background', 'none');
                ul.stop().retarder(1, function(i){ i.css(css); });                
            }
            $('#bmenu').addClass('js-active');
        }
    );
    $('ul ul li', '#bmenu').hover(
        function(){
            var ul = $('div:first', this);
            if (ul.length){
                if (!ul[0].wid) ul[0].wid = ul.width();
                ul.css({width: 0, overflow: 'hidden'}).retarder(50, function(i){
                    i.css('visibility', 'visible').animate({width: ul[0].wid}, {duration: 300, complete : function(){ ul.css('overflow', 'visible'); }});
                });
                if (!ul[0].hei) ul[0].hei = ul.height();
                
            }
        },
        function(){
            var ul  = $('div:first', this);
            if (ul.length){
                var css = {visibility: 'hidden', width: ul[0].wid};
                ul.stop().retarder(1, function(i){ i.css(css); });                
            }
        }
    );
    // lava lamp
    if (ie6){
        $('#bmenu ul.menu>li').hover(function(){ $(this).addClass('hover'); }, function(){ $(this).removeClass('hover'); });
        $('#bmenu ul.menu').lavaLamp({speed: 300});
    }
    else $('#bmenu ul.menu').lavaLamp({fx: 'backout', speed: 500});
    // animation
    $('ul ul a', '#bmenu').hover(
        function(){ $(this).stop().animate({textIndent: 15}, 500); },
        function(){ $(this).stop().animate({textIndent: 0}, {duration: 300, complete: function(){}}); }
    );
});


/*=============================== [ Dock ] ================================*/

$(function () { 
	// Dock initialize
	$('#dock').Fisheye(
		{
			maxWidth: 15,
			items: 'a',
			itemsText: 'span',
			container: '.dock-container',
			itemWidth: 75,
			proximity: 50,
			alignment : 'left',
			valign: 'bottom',
			halign : 'center'
		}
	);
});


/*
<!--================================ [ Supersised ] =================================-->


/*
Supersized - Fullscreen Slideshow jQuery Plugin
By Sam Dunn (www.buildinternet.com // www.onemightyroar.com)
Version: supersized.2.0.js // Relase Date: 5/7/09
Website: www.buildinternet.com/project/supersized
Thanks to Aen for preloading, fade effect, & vertical centering
*/
$(function(){
			$.fn.supersized.options = {  
				startwidth: 1024,  
				startheight: 768,
				vertical_center: 1,
				slideshow: 1,
				navigation: 1,
				transition: 1, //0-None, 1-Fade, 2-slide top, 3-slide right, 4-slide bottom, 5-slide left
				pause_hover: 0,
				slide_counter: 1,
				slide_captions: 1,
				slide_interval: 10000  
			};
	        $('#supersize').supersized(); 
	    });



(function($){

	//Resize image on ready or resize
	$.fn.supersized = function() {
		$.inAnimation = false;
		$.paused = false;
		var options = $.extend($.fn.supersized.defaults, $.fn.supersized.options);
		
		$(window).bind("load", function(){
			$('#loading').hide();
			$('#supersize').fadeIn('fast');
			$('#content').show();
			if ($('#slideshow .activeslide').length == 0) $('#supersize a:first').addClass('activeslide');
			if (options.slide_captions == 1) $('#slidecaption').html($('#supersize .activeslide').find('img').attr('title'));
			if (options.navigation == 0) $('#navigation').hide();
			//Slideshow
			if (options.slideshow == 1){
				if (options.slide_counter == 1){ //Initiate slide counter if active
					$('#slidecounter .slidenumber').html(1);
	    			$('#slidecounter .totalslides').html($("#supersize > *").size());
	    		}
				slideshow_interval = setInterval("nextslide()", options.slide_interval);
				if (options.navigation == 1){ //Skip if no navigation
					$('#navigation a').click(function(){  
   						$(this).blur();  
   						return false;  
   					}); 	
					//Slide Navigation
				    $('#nextslide').click(function() {
				    	if($.paused) return false; if($.inAnimation) return false;
					    clearInterval(slideshow_interval);
					    nextslide();
					    slideshow_interval = setInterval(nextslide, options.slide_interval);
					    return false;
				    });
				    $('#prevslide').click(function() {
				    	if($.paused) return false; if($.inAnimation) return false;
				        clearInterval(slideshow_interval);
				        prevslide();
				        slideshow_interval = setInterval(nextslide, options.slide_interval);
				        return false;
				    });
					$('#nextslide img').hover(function() {
						if($.paused == true) return false;
					   	$(this).attr("src", "images/background/forward.gif");
					}, function(){
						if($.paused == true) return false;
					    $(this).attr("src", "images/background/forward_dull.gif");
					});
					$('#prevslide img').hover(function() {
						if($.paused == true) return false; 
					    $(this).attr("src", "images/background/back.gif");
					}, function(){
						if($.paused == true) return false;
					    $(this).attr("src", "images/background/back_dull.gif");
					});
					
				    //Play/Pause Button
				    $('#pauseplay').click(function() {
				    	if($.inAnimation) return false;
				    	var src = ($(this).find('img').attr("src") === "images/background/play.gif") ? "images/background/pause.gif" : "images/background/play.gif";
      					if (src == "images/background/pause.gif"){
      						$(this).find('img').attr("src", "images/background/play.gif");
      						$.paused = false;
					        slideshow_interval = setInterval(nextslide, options.slide_interval);  
				        }else{
				        	$(this).find('img').attr("src", "images/background/pause.gif");
				        	clearInterval(slideshow_interval);
				        	$.paused = true;
				        }
      					$(this).find('img').attr("src", src);
					    return false;
				    });
				    $('#pauseplay').mouseover(function() {
				    	var imagecheck = ($(this).find('img').attr("src") === "images/background/play_dull.gif");
				    	if (imagecheck){
      						$(this).find('img').attr("src", "images/background/play.gif"); 
				        }else{
				        	$(this).find('img').attr("src", "images/background/pause.gif");
				        }
				    });
				    
				    $('#pauseplay').mouseout(function() {
				    	var imagecheck = ($(this).find('img').attr("src") === "images/background/play.gif");
				    	if (imagecheck){
      						$(this).find('img').attr("src", "images/background/play_dull.gif"); 
				        }else{
				        	$(this).find('img').attr("src", "images/background/pause_dull.gif");
				        }
				        return false;
				    });
				}
			}
		});
				
		$(document).ready(function() {
			$('#supersize').resizenow(); 
		});
		
		//Pause when hover on image
		$('#supersize > *').hover(function() {
	   		if (options.slideshow == 1 && options.pause_hover == 1){
	   			if(!($.paused) && options.navigation == 1){
	   				$('#pauseplay > img').attr("src", "images/background/pause.gif"); 
	   				clearInterval(slideshow_interval);
	   			}
	   		}
	   		original_title = $(this).find('img').attr("title");
	   		if($.inAnimation) return false; else $(this).find('img').attr("title","");
	   	}, function() {
			if (options.slideshow == 1 && options.pause_hover == 1){
				if(!($.paused) && options.navigation == 1){
					$('#pauseplay > img').attr("src", "images/background/pause_dull.gif");
					slideshow_interval = setInterval(nextslide, options.slide_interval);
				} 
			}
			$(this).find('img').attr("title", original_title);	
	   	});
		
		$(window).bind("resize", function(){
    		$('#supersize').resizenow(); 
		});
		
		$('#supersize').hide();
		$('#content').hide();
	};
	
	//Adjust image size
	$.fn.resizenow = function() {
		var options = $.extend($.fn.supersized.defaults, $.fn.supersized.options);
	  	return this.each(function() {
	  		
			//Define image ratio
			var ratio = options.startheight/options.startwidth;
			
			//Gather browser and current image size
			var imagewidth = $(this).width();
			var imageheight = $(this).height();
			var browserwidth = $(window).width();
			var browserheight = $(window).height();
			var offset;

			//Resize image to proper ratio
			if ((browserheight/browserwidth) > ratio){
			    $(this).height(browserheight);
			    $(this).width(browserheight / ratio);
			    $(this).children().height(browserheight);
			    $(this).children().width(browserheight / ratio);
			} else {
			    $(this).width(browserwidth);
			    $(this).height(browserwidth * ratio);
			    $(this).children().width(browserwidth);
			    $(this).children().height(browserwidth * ratio);
			}
			if (options.vertical_center == 1){
				$(this).children().css('left', (browserwidth - $(this).width())/2);
				$(this).children().css('top', (browserheight - $(this).height())/2);
			}
			return false;
		});
	};
	
	$.fn.supersized.defaults = { 
			startwidth: 4,  
			startheight: 3,
			vertical_center: 1,
			slideshow: 1,
			navigation:1,
			transition: 1, //0-None, 1-Fade, 2-slide top, 3-slide right, 4-slide bottom, 5-slide left
			pause_hover: 0,
			slide_counter: 1,
			slide_captions: 1,
			slide_interval: 10000
	};
	
})(jQuery);

	//Slideshow Next Slide
	function nextslide() {
		if($.inAnimation) return false;
		else $.inAnimation = true;
	    var options = $.extend($.fn.supersized.defaults, $.fn.supersized.options);
	    var currentslide = $('#supersize .activeslide');
	    currentslide.removeClass('activeslide');
		
	    if ( currentslide.length == 0 ) currentslide = $('#supersize a:last');
			
	    var nextslide =  currentslide.next().length ? currentslide.next() : $('#supersize a:first');
	    var prevslide =  nextslide.prev().length ? nextslide.prev() : $('#supersize a:last');
		
		
		//Display slide counter
		if (options.slide_counter == 1){
			var slidecount = $('#slidecounter .slidenumber').html();
			currentslide.next().length ? slidecount++ : slidecount = 1;
		    $('#slidecounter .slidenumber').html(slidecount);
		}
		
		$('.prevslide').removeClass('prevslide');
		prevslide.addClass('prevslide');
		
		//Captions require img in <a>
	    if (options.slide_captions == 1) $('#slidecaption').html($(nextslide).find('img').attr('title'));
		
	    nextslide.hide().addClass('activeslide')
	    	if (options.transition == 0){
	    		nextslide.show(); $.inAnimation = false;
	    	}
	    	if (options.transition == 1){
	    		nextslide.fadeIn(750, function(){$.inAnimation = false;});
	    	}
	    	if (options.transition == 2){
	    		nextslide.show("slide", { direction: "up" }, 'slow', function(){$.inAnimation = false;});
	    	}
	    	if (options.transition == 3){
	    		nextslide.show("slide", { direction: "right" }, 'slow', function(){$.inAnimation = false;});
	    	}
	    	if (options.transition == 4){
	    		nextslide.show("slide", { direction: "down" }, 'slow', function(){$.inAnimation = false;});
	    	}
	    	if (options.transition == 5){
	    		nextslide.show("slide", { direction: "left" }, 'slow', function(){$.inAnimation = false;});
	    	}
	    	
	    $('#supersize').resizenow();//Fix for resize mid-transition
	    
	}
	
	//Slideshow Previous Slide
	function prevslide() {
		if($.inAnimation) return false;
		else $.inAnimation = true;
	    var options = $.extend($.fn.supersized.defaults, $.fn.supersized.options);
	    var currentslide = $('#supersize .activeslide');
	    currentslide.removeClass('activeslide');
		
	    if ( currentslide.length == 0 ) currentslide = $('#supersize a:first');
			
	    var nextslide =  currentslide.prev().length ? currentslide.prev() : $('#supersize a:last');
	    var prevslide =  nextslide.next().length ? nextslide.next() : $('#supersize a:first');
		
		//Display slide counter
		if (options.slide_counter == 1){
			var slidecount = $('#slidecounter .slidenumber').html();
			currentslide.prev().length ? slidecount-- : slidecount = $("#supersize > *").size();
		    $('#slidecounter .slidenumber').html(slidecount);
		}
		
		$('.prevslide').removeClass('prevslide');
		prevslide.addClass('prevslide');
		
		//Captions require img in <a>
	    if (options.slide_captions == 1) $('#slidecaption').html($(nextslide).find('img').attr('title'));
		
	    nextslide.hide().addClass('activeslide')
	    	if (options.transition == 0){
	    		nextslide.show(); $.inAnimation = false;
	    	}
	    	if (options.transition == 1){
	    		nextslide.fadeIn(750, function(){$.inAnimation = false;});
	    	}
	    	if (options.transition == 2){
	    		nextslide.show("slide", { direction: "down" }, 'slow', function(){$.inAnimation = false;});
	    	}
	    	if (options.transition == 3){
	    		nextslide.show("slide", { direction: "left" }, 'slow', function(){$.inAnimation = false;});
	    	}
	    	if (options.transition == 4){
	    		nextslide.show("slide", { direction: "up" }, 'slow', function(){$.inAnimation = false;});
	    	}
	    	if (options.transition == 5){
	    		nextslide.show("slide", { direction: "right" }, 'slow', function(){$.inAnimation = false;});
	    	}
	    	
	    	$('#supersize').resizenow();//Fix for resize mid-transition
	}

/*================================= [ Stack ] ================================*/

$(function () { 
	// Stack initialize
	var openspeed = 300;
	var closespeed = 300;
	$('.stack>img').toggle(function(){
		var vertical = 0;
		var horizontal = 0;
		var $el=$(this);
		$el.next().children().each(function(){
			$(this).animate({top: '-' + vertical + 'px', left: horizontal + 'px'}, openspeed);
			vertical = vertical + 55;
			horizontal = (horizontal+.75)*2;
		});
		$el.next().animate({top: '-50px', left: '10px'}, openspeed).addClass('openStack')
		   .find('li a>img').animate({width: '50px', marginLeft: '9px'}, openspeed);
		$el.animate({paddingTop: '0'});
	}, function(){
		//reverse above
		var $el=$(this);
		$el.next().removeClass('openStack').children('li').animate({top: '55px', left: '-10px'}, closespeed);
		$el.next().find('li a>img').animate({width: '79px', marginLeft: '0'}, closespeed);
		$el.animate({paddingTop: '35px'});
	});
	
	// Stacks additional animation
	$('.stack li a').hover(function(){
		$("img",this).animate({width: '56px'}, 100);
		$("span",this).animate({marginRight: '30px'});
	},function(){
		$("img",this).animate({width: '50px'}, 100);
		$("span",this).animate({marginRight: '0'});
	});
});


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
	


/*=================================== [ Window js ] =================================*/


/**
 * jQuery Window Plugin - To Popup A Beautiful Window-like Dialog
 * http://fstoke.me/jquery/window/
 * Copyright(c) 2009 David Hung
 * Dual licensed under the MIT and GPL licenses
 * Version: 4.07b
 * Last Revision: 2010-06-22
 *
 * The window status is defined as: cascade(default), minimized, maxmized
 * 
 * The code style is reference from javascript Singleton design pattern. Please see:
 * http://fstoke.me/blog/?page_id=1610
 * 
 * Join the facebook fans page to discuss there and get latest information.
 * http://www.facebook.com/pages/jQuery-Window-Plugin/116769961667138 
 *
 * This jQuery plugin has been tested in the following browsers:
 * - IE 7, 8
 * - Firefox 3.5
 * - Opera 9, 10
 * - Safari 4.0
 * - Chrome 2.0+
 *
 * Required jQuery Libraries:
 * jquery.js         (v1.3.2)
 * jquery-ui.js      (v1.7.2)
 *
 * Customized Button JSON Array Sample:
	var myButtons = [
		// facebook button
		{
		id: "btn_facebook",           // required, it must be unique in this array data
		title: "share to facebook",   // optional, it will popup a tooltip by browser while mouse cursor over it
		clazz: "my_button",           // optional, don't set border, padding, margin or any style which will change element position or size
		style: "",                    // optional, don't set border, padding, margin or any style which will change element position or size
		image: "img/facebook.gif",    // optional, the image url of button icon(16x16 pixels)
		callback:                     // required, the callback function while click it
			function(btn, wnd) {
				wnd.getContainer().find("#demo_text").text("Share to facebook!");
				wnd.getContainer().find("#demo_logo").attr("src", "img/facebook_300x100.png");
			}
		},
		// twitter button
		{
		id: "btn_twitter",
		title: "share to twitter",
		clazz: "my_button",
		style: "background:#eee;",
		image: "img/twitter.png",
		callback:
			function(btn, wnd) {
				wnd.getContainer().find("#demo_text").text("Share to twitter!");
				wnd.getContainer().find("#demo_logo").attr("src", "img/twitter_300x100.jpg");
			}
		}
	];
 *
 *
 * Known Issues:
 * ISU_002 - The window could be resized overlay its parent even it's set boundary within its parent.
 * ISU_005 - When window maximized, even the browser scroll bar is already disabled, it still can be scrolled in Opera.
 * ISU_006 - When window maximized, the browser scroll bar still exists until browser REPAINT in IE7. IE8 is fine.
 *           (This case seems only happen at the window content is not a iframe)
 *           (What time the browser will repaint? -> popup a alert dialog, switch browser page tab, alt + tab to switch application...etc.)
 * ISU_007 - It will delay display new title while window is minimized, until browser REPAINT. IE7/8 both happens.
 *           This case root cause seems is IE browser can't handle a element whose position is "fixed" correctly.
 *
 * Fixed Issues:
 * ISU_001 - If drag & resize a window first, then do maximize, the window will disappear while mouse down the header panel. It will appear again when mouse up.
 * ISU_003 - When resizing over an IFRAME, it lost the mouse event. - Thank for crabo!
 * ISU_004 - When the window is maximized, mouse scroll and text input delay about 3 seconds in IE browser.
 *           It's caused by IE browser can't support css position attribute "fixed" correctly.
 *
 **************************************************************************************************************************************
 * Version Update Change Log
 *
 * Version 4.07b change log:
 * - Add drag and resize callback attribute - onDrag, afterDrag, onResize, afterResize.
 *
 * Version 4.07a change log:
 * - Let the image attribute of custBtns object could be null value. If image is null, it will append div tag instead. 
 * 
 * Version 4.07 change log:
 * - To fix the right or bottom edge of window can't be trigger to resize while scrollbar appears on IE browser
 *
 * Version 4.06 change log:
 * - Add getAll static function to retrieve all created windows instance
 * - Add getWindow static function to retrieve target window instance via window id
 * - Add getTitle, getUrl, getContent, getFooterContent functions to retrieve various dispaly data
 * - Add skipHandleScroll static function to skip handling browser scrollbar when window status changed
 * - Modify createRandomOffset default value as {x:0, y:0}
 * - Add onMinimize, afterMinimize, onMaximize, afterMaximize, onCascade, afterCascade callback functions
 * - Fix create window inner a element display wrong when align center
 *
 * Version 4.05 change log:
 * - Add round corner dispaly control options - showRoundCorner
 * - Change mouse cursor display on header panel by three different status: normal, minimized, maximized
 * - Fix change title text dynamically display error while window is minimized
 *
 * Version 4.04 change log:
 * - Change all callback functions parameter to window instance instead of container
 * - Add new options attribute - showFooter, to control show footer panel
 * 
 * Version 4.03 change log:
 * - Modify header and footer border css style to make display correctly
 * - Modify window icon button css style to fix customized buttons display bug
 *
 * Version 4.02 change log:
 * - Add functions for change window display dynamically - setTitle, setUrl, setContent, setFooterContent
 *
 * Version 4.01 change log:
 * - Add backgroundColor value check in private hideContent function to avoid display bug in Firefox2. Thanks for crabo.
 * - Add a public function - close, instead of destroy function. It does the same routine, but have a boolean parameter to decide doing callback. 
 * - Add parameter: quiet in closeAll function, it decide doing close callback or not.
 *
 * Version 4.00 change log:
 * - Change code to another javascript OOP style, more structural, readable, easy manageable and extending
 * - Modify maximized status css position attribute as "absolute" to fix ISU_004 issue.
 *   And also disable browser(except Opera) scrollbar concurrently to avoid user have chance to change maxmized window's view position.
 *   But it got side effect, see issue ISU_005, ISU_006. Even so, at least IE user can read/operate content normally while window maxmized. 
 * - Support jquery ui theme now
 * - Move animationSpeed from options to global window attribute
 * - Add options new attribute: createRandomOffset, to make window have a random offset position while creating
 * - Add options new attribute: footerContent, to let put something on window footer
 * - Add options new attribute: containerClass, headerClass, frameClass, footerClass to make customize window look-like possible
 * - Add handle dblclick event on header panel, it will do maximize or restore by window status
 * - options content attribute also accept a jQuery object or html element now
 * - Customized buttons callback function parameter change from a element to a jquery object, and add an extra container parameter
 * - Modify public function name setFocus, releaseFocus to select and unselect
 * - Merge icon buttons as one image, and change bookmark icon
 * - Fix issues: ISU_001, ISU_003, ISU_004
 * - Fix serveral UI bug
 * 
 * Version 3.03 change log:
 * - Modify window icon button margin-right to "4px"
 *
 * Version 3.02 change log:
 * - Fix serveral UI display bugs
 *
 * Version 3.01 change log:
 * - Availalbe to create customized icon buttons with passing a element JSON Array
 *
 * Version 3.00 change log:
 * - Add maximize feature
 * - Add adjust the width of header title text panel while window is resized. And add css style text-overflow: ellipsis; to let browser
 *   auto modify title text with "..." at the end while text width exceed panel width.
 * - Add create window from a html element, and could be limit boundary within it.
 * - Add iframeRedirectCheckMsg attribute to make iframe redirect checking mechanism more simple
 * - Add custBtns attribute to implement customized icon button feature.
 * - Modify bookmark not support message for Chrome, Safari and Opera.
 * - Modify option attribute "zIndex" to simpler "z"
 * - Add option attribute "animationSpeed" to control the animation speed
 *
 * Version 2.03 change log:
 * - Add three options attribute to control show function button(close, minimize, bookmark)
 *
 * Version 2.02 change log:
 * - Modify css class name to avoid conflict with others
 *
 * Version 2.01 change log:
 * - Fix checkBoundary work incorrectly bug.
 * - Add show loading animation while opening a iframe window.
 *
 * Version 2.00 change log:
 * - Modify call function method. It doesn't need caller panel now, plugin will add a div element in html body automatically.
 * - Add minimized & restore feature.
 *
 * Version 1.02 change log:
 * - Fix second call, return wrong value bug
 * - Add set focus feature
 *
 * Version 1.01 change log:
 * - Change window panel css attribute: position to "fixed" to let window keep position on screen.
 * - Fix auto align center incorrectly bug
 *
 */
	
// Get window instance via jQuery call
// create window on html body
$.window = function(options) {
	return $.Window.getInstance(null, options);
};

// create window on caller element
$.fn.window = function(options) {
	return $.Window.getInstance($(this), options);
}

// Creating Window Dialog Module
$.Window = (function()  {
	// static private methods
	// static constants
	var VERSION = "4.07b";           // the version of current plugin
	var ICON_WH = 16;               // window icon button width/height, in pixels. check "window_icon_button" style in css
	var ICON_MARGIN = 4;            // window icon button margin, in pixels. check "window_icon_button" style in css
	var ICON_OFFSET = ICON_WH + ICON_MARGIN; // window icon button offset for decide function bar width in header panel
	var OPACITY_MINIMIZED = 0.7;    // css opacity while window minimized or doing animation
	var ua = navigator.userAgent.toLowerCase(); // browser useragent
	
	// static variables
	var animationSpeed = 400;       // the speed of various animations: maximize, minimize, restore, shift, in milliseconds
	var windowIndex = 0;            // index to create window instance id
	var lastSelectedWindow = null;  // to remember last selected window instance
	var windowStorage = [];         // a array to store created window instance
	var minWindowStorage = [];      // a array to store minimized window instance
	var handleScrollbar = true;     // a flag to handle browser scrollbar when window status changed(maximize, minimize, cascade)
	
	// select the current clicked window instance, concurrently, unselect last selected window instance
	function selectWindow(wnd) {
		if( lastSelectedWindow != null ) {
			lastSelectedWindow.unselect();
		}
		if( typeof wnd == 'object' ) { // it's window instance
			lastSelectedWindow = wnd;
		} else if( typeof wnd == 'string' ) { // it's window id
			lastSelectedWindow = $("#"+wnd).get(0).windowInstance;
		}
		lastSelectedWindow.select();
	}
	
	// get the window instance
	function getWindow(windowId) {
		for( var i=0; i<windowStorage.length; i++ ) {
			var wnd = windowStorage[i];
			if( wnd.getWindowId() == windowId ) {
				return wnd;
			}
		}
	}
	
	// push the window instance into storage
	function pushWindow(wnd) {
		if( typeof wnd == 'object' ) { // it's window instance
			windowStorage.push(wnd);
		} else if( typeof wnd == 'string' ) { // it's window id
			windowStorage($("#"+wnd).get(0).windowInstance);
		}
	}
	
	// pop the window instance from storage out
	function popWindow(windowId) {
		for( var i=0; i<windowStorage.length; i++ ) {
			var wnd = windowStorage[i];
			if( wnd.getWindowId() == windowId ) {
				windowStorage.splice(i--,1); // remove array element
				break;
			}
		}
	}
	
	// push the window instance into minimized storage
	function pushMinWindow(windowId) {
		minWindowStorage.push($("#"+windowId).get(0).windowInstance);
	}
	
	// pop the window instance from minimized storage out
	function popMinWindow(windowId) {
		var doAdjust = false;

		for( var i=0; i<minWindowStorage.length; i++ ) {
			var wnd = minWindowStorage[i];
			if( wnd.getWindowId() == windowId ) {
				minWindowStorage.splice(i--,1); // remove array element
				doAdjust = true;
				continue;
			}
			if( doAdjust ) {
				var position = wnd.getContainer().position();
				//var top = position.top - 120;
				var top = i * 120;
				wnd.getContainer().animate({
					top: top
				}, animationSpeed);

				// modify target css style
				wnd.getTargetCssStyle().top = top;
			}
		}
	}
	
	// hide browser scroll bar
	function hideBrowserScrollbar() {
		if( handleScrollbar ) {
			if( ua.indexOf("msie 7") >= 0 ) { // fix IE7
				$("body").attr("scroll", "no");
			} else {
				document.body.style.overflow = "hidden";
			}
		}
	}
	
	// show browser scroll bar
	function showBrowserScrollbar() {
		if( handleScrollbar ) {
			if( ua.indexOf("msie 7") >= 0 ) { // fix IE7
				$("body").removeAttr("scroll");
			} else {
				document.body.style.overflow = "auto";
			}
		}
	}
	
	function getBrowserScreenWH() {
		var width = document.documentElement.clientWidth;
		var height = document.documentElement.clientHeight;
		return {width:width, height:height};
	}

	function getBrowserScrollXY() {
		var scrOfX = 0, scrOfY = 0;
		if( typeof( window.pageYOffset ) == 'number' ) {
			//Netscape compliant
			scrOfY = window.pageYOffset;
			scrOfX = window.pageXOffset;
		} else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
			//DOM compliant
			scrOfY = document.body.scrollTop;
			scrOfX = document.body.scrollLeft;
		} else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
			//IE6 standards compliant mode
			scrOfY = document.documentElement.scrollTop;
			scrOfX = document.documentElement.scrollLeft;
		}
		return {left:scrOfX, top:scrOfY};
	}
	
	function constructor(caller, options) {
		// instance private methods
		// flag & variables
		var _this = null;                  // to remember current window instance
		var windowId = "window_" + (windowIndex++); // the window's id
		var minimized = false;          // a boolean flag to tell the window is minimized
		var maximized = false;          // a boolean flag to tell the window is maximized
		var redirectCheck = false;      // a boolean flag to control popup message while browser is going to leave this page
		var pos = new Object();         // to save cascade mode current position
		var wh = new Object();          // to save cascade mode current width & height
		var orgPos = new Object();      // to save position before minimize
		var orgWh = new Object();       // to save width & height before minimize
		var targetCssStyle = {};        // to save target css style json object
		var funcBarWidth = 0;           // the width of header function bar
		
		// element
		var container = null;           // whole window container element
		var header = null;              // the header panel of window. it includes title text and buttons
		var frame = null;               // the content panel of window. it could be a iframe or a div element, depending on which way you create it
		var footer = null;              // the footer panel of window. currently, it got nothing, but maybe a status bar or something will be added in the future 
		
		// the instance options
		var options = $.extend({
			title: "",                    // [string:""] the title text of window
			url: "",                      // [string:""] the target url of iframe ready to load.
			content: "",                  // [html string, jquery object, element:""] this attribute only works when url is null. when passing a jquery object or a element, it will clone the original one to append.
			footerContent: "",            // [html string, jquery object, element:""] same as content attribute, but it's put on footer panel.
			containerClass: "",           // [string:""] container extra class
			headerClass: "",              // [string:""] header extra class
			frameClass: "",               // [string:""] frame extra class
			footerClass: "",              // [string:""] footer extra class
			x: -1,                        // [number:-1] the x-axis value on screen(or caller element), if -1 means put on screen(or caller element) center
			y: -1,                        // [number:-1] the y-axis value on screen(or caller element), if -1 means put on screen(or caller element) center
			z: 2000,                      // [number:2000] the css z-index value
			width: 800,                   // [number:400] window width
			height: 400,                  // [number:300] window height
			minWidth: 200,                // [number:200] the minimum width, if -1 means no checking
			minHeight: 150,               // [number:150] the minimum height, if -1 means no checking
			maxWidth: 1000,                // [number:800] the maximum width, if -1 means no checking
			maxHeight: 700,               // [number:600] the maximum height, if -1 means no checking
			showFooter: true,             // [boolean:true] to control show footer panel
			showRoundCorner: false,       // [boolean:true] to control display window as round corner
			closable: true,               // [boolean:true] to control window closable
			minimizable: true,            // [boolean:true] to control window minimizable
			maximizable: true,            // [boolean:true] to control window maximizable
			bookmarkable: true,           // [boolean:true] to control window with remote url could be bookmarked
			draggable: true,              // [boolean:true] to control window draggable
			resizable: true,              // [boolean:true] to control window resizable
			scrollable: true,             // [boolean:true] to control show scroll bar or not
			checkBoundary: false,         // [boolean:false] to check window dialog overflow html body or caller element
			custBtns: null,               // [json array:null] to describe the customized button display & callback function
			onOpen: null,                 // [function:null] a callback function while container is added into body
			onShow: null,                 // [function:null] a callback function while whole window display routine is finished
			onClose: null,                // [function:null] a callback function while user click close button
			onDrag: null,                 // [function:null] a callback function while window is going to drag
			afterDrag: null,              // [function:null] a callback function after window dragged
			onResize: null,               // [function:null] a callback function while window is going to resize
			afterResize: null,            // [function:null] a callback function after window resized
			onMinimize: null,             // [function:null] a callback function while window is going to minimize
			afterMinimize: null,          // [function:null] a callback function after window minimized
			onMaximize: null,             // [function:null] a callback function while window is going to maximize
			afterMaximize: null,          // [function:null] a callback function after window maximized
			onCascade: null,              // [function:null] a callback function while window is going to cascade
			afterCascade: null,           // [function:null] a callback function after window cascaded
			onIframeStart: null,          // [function:null] a callback function while iframe ready to connect remoting url. this attribute only works while url attribute is given
			onIframeEnd: null,            // [function:null] a callback function while iframe load finished. this attribute only works while url attribute is given
			iframeRedirectCheckMsg: null, // [string:null] if null means no check, or pass a string to show warning message while iframe is going to redirect
			createRandomOffset: {x:0, y:0}, // [json object:{x:0, y:0}] random the new created window position, it only works when options x,y value both are -1
			showLog: false                // [boolean:false] to show log in firebug, IE8, chrome console
		}, options);
		

		function initialize(instance) {
			_this = instance;
			// build html
			var realCaller = caller != null? caller:$("body");
			var cornerClass = options.showRoundCorner? "ui-corner-all ":"";
			realCaller.append("<div id='"+windowId+"' class='window_panel "+cornerClass+options.containerClass+"'></div>");
			container = realCaller.children("div#"+windowId);
	
			// onOpen call back
			if( $.isFunction(options.onOpen) ) {
				options.onOpen(_this);
			}
			
			wh.w = options.width;
			wh.h = options.height;
			container.width(options.width);
			container.height(options.height);
			container.css("z-index", options.z);
			if( $.browser.msie ) { // To fix the right or bottom edge of window can't be trigger to resize while scrollbar appears on IE browser
				container.css({
					paddingRight: 1,
					paddingBottom: 1
				});
			}
	
			// set position x
			if( options.x >= 0 || options.y >= 0 ) {
				if( options.x >= 0 ) {
					var pLeft = 0;
					if( caller != null ) {
						pLeft = options.x + caller.offset().left;
					} else {
						pLeft = options.x + jQuery(window).scrollLeft();
					}
					container.css("left", pLeft);
				} else { // put on center
					alignHorizontalCenter();
				}
	
				// set position y
				if( options.y >= 0 ) {
					var pTop = 0;
					if( caller != null ) {
						pTop = options.y + caller.offset().top;
					} else {
						pTop = options.y + jQuery(window).scrollTop();
					}
					container.css("top", pTop);
				} else { // put on middle
					alignVerticalCenter();
				}
			} else {
				alignCenter();
			}
			// feed x,y with real pixel value(not a percentage), to avoid "JUMPING" while window restore from minized status
			var currPos = container.position();
			container.css({
				left: currPos.left,
				top: currPos.top
			});
	
			// build header html
			cornerClass = options.showRoundCorner? "ui-corner-top ":"";
			var headerHtml = "<div class='window_header window_header_normal ui-widget-header "+cornerClass+"no-resizable "+options.headerClass+"'>"+
				"<div class='window_title_text'>"+options.title+"</div>"+
				"<div class='window_function_bar'></div>"+
				"</div>";
			container.append(headerHtml);
			header = container.children("div.window_header");
			
			// bind double click event with doing maximize action
			if( options.maximizable ) {
				header.dblclick(function() {
					if( maximized ) {
						restore();
					} else {
						maximize();
					}
				});
			}
			
			var headerFuncPanel = header.children("div.window_function_bar");
			// add close button
			if( options.closable ) {
				headerFuncPanel.append( "<div title='close window' class='closeImg window_icon_button no-draggable'></div>" );
				headerFuncPanel.children(".closeImg").click(function() {
					close();
				});
				funcBarWidth += ICON_OFFSET;
			}
	
			// add maxmize button
			if( options.maximizable ) {
				headerFuncPanel.append( "<div title='maximize window' class='maximizeImg window_icon_button no-draggable'></div>" );
				headerFuncPanel.append( "<div title='cascade window' class='cascadeImg window_icon_button no-draggable' style='display:none;'></div>" );
				headerFuncPanel.children(".maximizeImg").click(function() {
					maximize();
				});
				headerFuncPanel.children(".cascadeImg").click(function() {
					restore();
				});
				funcBarWidth += ICON_OFFSET;
			}
	
			// add minimize button
			if( options.minimizable ) {
				headerFuncPanel.append( "<div title='minimize window' class='minimizeImg window_icon_button no-draggable'></div>" );
				headerFuncPanel.children(".minimizeImg").click(function() {
					minimize();
				});
				funcBarWidth += ICON_OFFSET;
			}
	
			// add bookmark button
			if( options.bookmarkable && options.url != null && $.trim(options.url) != "" ) {
				headerFuncPanel.append( "<div title='bookmark this' class='bookmarkImg window_icon_button no-draggable'></div>" );
				headerFuncPanel.children(".bookmarkImg").click(function() {
					doBookmark(options.title, options.url);
				});
				funcBarWidth += ICON_OFFSET;
			}
	
			// add customized buttons
			addCustomizedButtns(headerFuncPanel);
			
			// make buttons don't pass dblclick event to header panel 
			$(".window_icon_button").dblclick(function() {
				return false;
			});
	
			// set text & function bar width
			adjustHeaderTextPanelWidth();
			headerFuncPanel.width( funcBarWidth );
	
			// build iframe html
			var frameHeight = getFrameHeight(wh.h);
			if( options.url != null && $.trim(options.url) != "" ) {
				// iframe starting call back
				if( $.isFunction(options.onIframeStart) ) {
					log("start connecting iframe: "+options.url);
					options.onIframeStart(_this, options.url);
				}
	
				// add iframe redirect checking
				if( options.iframeRedirectCheckMsg ) {
					redirectCheck = true;
					window.onbeforeunload = function() {
						if( redirectCheck ) {
							var msg = options.iframeRedirectCheckMsg.replace("{url}", options.url);
							return msg;
						}
					}
				}
	
				// show loading image
				container.append("<div class='frame_loading'>Loading...</div>");
				var loading = container.children(".frame_loading");
				loading.css("marginLeft",	'-' + (loading.outerWidth() / 2) - 20 + 'px');
				loading.click(function() {
					loading.remove();
				});
	
				// append iframe html
				var scrollingHtml = options.scrollable? "yes":"no";
				container.append("<iframe style='display:none;' class='window_frame ui-widget-content no-draggable no-resizable "+options.frameClass+"' scrolling='"+scrollingHtml+"' src='"+options.url+"' width='100%' height='"+frameHeight+"px' frameborder='0'></iframe>");
				frame = container.children(".window_frame");
	
				// iframe load finished call back
				frame.ready(function() {
					frame.show();
				});
	
				frame.load(function() {
					redirectCheck = false;
					loading.remove();
					log("load iframe finished: "+options.url);
					if( $.isFunction(options.onIframeEnd) ) {
						options.onIframeEnd(_this, options.url);
					}
				});
			} else {
				container.append("<div class='window_frame ui-widget-content no-draggable no-resizable "+options.frameClass+"' style='width:100%; height:"+frameHeight+"px;'></div>");
				frame = container.children(".window_frame");
				if( options.content != null ) {
					setContent(options.content);
					frame.children().show();
				}
				frame.css({
					overflow: options.scrollable? "auto":"hidden"
				});
			}
	
			// build footer html
			if( options.showFooter ) {
				cornerClass = options.showRoundCorner? "ui-corner-bottom ":"";
				container.append("<div class='window_footer ui-widget-content "+cornerClass+"no-draggable "+options.footerClass+"'><div></div></div>");
				footer = container.children("div.window_footer");
				if( options.footerContent != null ) {
					setFooterContent(options.footerContent);
					footer.children("div").children().show();
				}
			} else {
				cornerClass = options.showRoundCorner? "ui-corner-bottom ":"";
				frame.addClass(cornerClass);
			}
	
			// bind container handle mousedown event
			container.mousedown(function() {
				selectWindow(windowId);
			});
	
			// make window draggable
			if( options.draggable ) {
				container.draggable({
					cancel: ".no-draggable",
					start: function() {
						log( "drag start" );
						if( minimized || maximized ) { // if window is minimized or maximized, reset the css style
							container.css("position", "fixed");
							container.css(targetCssStyle);
						}
						showOverlay();
						hideContent();
						// callback
						if( options.onDrag ) {
							options.onDrag(_this);
						}
					},
					stop: function() {
						log( "drag stop" );
						if( minimized || maximized ) { // if window is minimized or maximized, reset the css style
							container.css("position", "fixed");
							container.css(targetCssStyle);
						}
						hideOverlay();
						showContent();
						// callback
						if( options.afterDrag ) {
							options.afterDrag(_this);
						}
					}
				});
				// set boundary if got opotions
				if( options.checkBoundary ) {
					container.draggable('option', 'containment', 'parent');
				}
			}
	
			// make window resizable
			if( options.resizable ) {
				container.resizable({
					cancel: ".no-resizable",
					alsoResize: frame,
					start: function() { // this will be triggered when window is going to drag in minimized or maximized mode
						log( "resize start" );
						if( minimized || maximized ) { // if window is minimized or maximized, reset the css style
							container.css("position", "fixed");
							container.css(targetCssStyle);
						}
						showOverlay();
						hideContent();
						// callback
						if( options.onResize ) {
							options.onResize(_this);
						}
					},
					stop: function() {
						log( "resize stop" );
						if( minimized || maximized ) { // if window is minimized or maximized, reset the css style
							container.css("position", "fixed");
							container.css(targetCssStyle);
						}
						hideOverlay();
						adjustHeaderTextPanelWidth();
						showContent();
						// callback
						if( options.afterResize ) {
							options.afterResize(_this);
						}
					}
				});
				// set boundary if got opotions
				if( options.checkBoundary ) {
					// this got bug, so mark it temporarily
					//container.resizable('option', 'containment', "parent");
				}
	
				// set resize min, max width & height
				if( options.maxWidth >= 0 ) {
					container.resizable('option', 'maxWidth', options.maxWidth);
				}
				if( options.maxHeight >= 0 ) {
					container.resizable('option', 'maxHeight', options.maxHeight);
				}
				if( options.minWidth >= 0 ) {
					container.resizable('option', 'minWidth', options.minWidth);
				}
				if( options.minHeight >= 0 ) {
					container.resizable('option', 'minHeight', options.minHeight);
				}
			}
	
			// handle window resize event
			$(window).resize(function() {
				if( maximized ) {
					if( minimized ) {
						// reset the restore width/height
						var screenWH = getBrowserScreenWH();
						orgWh.w = screenWH.width;
						orgWh.h = screenWH.height;
					} else {
						maximize(true, true);
					}
				}
			});
	
			// onShow call back
			if( $.isFunction(options.onShow) ) {
				options.onShow(_this);
			}
		}
		
		function log(msg) {
			if(options != null && options.showLog && window.console != null) {
				console.log(msg);
			}
		}
		
		function setTitle(title) {
			options.title = title;
			header.children(".window_title_text").text(title);
			if( minimized ) {
				transformTitleText();
			}
		}
		
		function getTitle() {
			return options.title;
		}
		
		function setUrl(url) {
			options.url = url;
			frame.attr("src", url);
		}
		
		function getUrl() {
			return options.url;
		}
		
		function setContent(content) {
			options.content = content;
			if( typeof content == 'object' ) {
				content = $(content).clone(true);
			} else if( typeof content == 'string' ) {
				// using original content
			}
			frame.empty();
			frame.append(content);
		}
		
		function getContent() {
			return frame.html();
		}
		
		function setFooterContent(content) {
			if( options.showFooter ) {
				options.footerContent = content;
				if( typeof content == 'object' ) {
					content = $(content).clone(true);
				} else if( typeof content == 'string' ) {
					// using original content
				}
				footer.children("div").empty();
				footer.children("div").append(content);
			}
		}
		
		function getFooterContent() {
			return footer.children("div").html();
		}
		
		// popup a overlay panel block whole screen while window dragging or resizing
		// to avoid lost event while mouse cursor over iframe region. [ISU_003]
		function showOverlay() {
			var overlay = $("#window_overlay");
			if( overlay.get(0) == null ) {
				$("body").append("<div id='window_overlay'>&nbsp;</div>");
				overlay = $("#window_overlay");
				overlay.css({
					zIndex: options.z + 1
				});
			}
			overlay.show();
		}
		
		function hideOverlay() {
			$("#window_overlay").hide();
		}
		
		function transferToFixed() {
			var currPos = container.offset();
			var scrollPos = getBrowserScrollXY();
			container.css({
				position: "fixed", // this will cause IE brwoser UI error, See ISU_004
				left: currPos.left - scrollPos.left,
				top: currPos.top - scrollPos.top,
				marginLeft: 0,
				marginTop: 0
			});
		}
	
		function transferToAbsolute() {
			var currPos = container.offset();
			container.css({
				position: "absolute",
				left: currPos.left,
				top: currPos.top
			});
		}
	
		function addCustomizedButtns(headerFuncPanel) {
			if( options.custBtns != null && typeof options.custBtns == 'object' ) {
				for( var i=0; i<options.custBtns.length; i++ ) {
					var btnData = options.custBtns[i];
					if( btnData != null && typeof btnData == 'object' ) {
						if( btnData.id != null && btnData.callback != null ) { // it's a JSON object
							var id = btnData.id != null? btnData.id:"";
							var clazz = btnData.clazz != null? btnData.clazz:"";
							var title = btnData.title != null? btnData.title:"";
							var style = btnData.style != null? btnData.style:"";
							var image = btnData.image != null? btnData.image:"";
							var callback = btnData.callback != null? btnData.callback:"";
							if( btnData.image != null && btnData.image != "" ) {
								headerFuncPanel.append( "<img id='"+id+"' src='"+image+"' title='"+title+"' class='"+clazz+" window_icon_button no-draggable' style='"+style+"'/>" );
							} else {
								headerFuncPanel.append( "<div id='"+id+"' src='"+image+"' title='"+title+"' class='"+clazz+" window_icon_button no-draggable' style='"+style+"'></div>" );
							}
							var btn = headerFuncPanel.children("[id="+id+"]");
							btn.get(0).clickCb = callback;
							if( $.isFunction(callback)) {
								btn.click(function() {
									this.clickCb($(this), _this);
								});
							}
						} else { // it's a html element(or wrapped with jQuery)
							var btn = $(btnData).clone(true);
							btn.addClass("window_icon_button no-draggable cust_button");
							headerFuncPanel.append( btn );
							btn.show();
						}
					}
					funcBarWidth += ICON_OFFSET;
				}
			}
		}
	
		function adjustHeaderTextPanelWidth() {
			header.children("div.window_title_text").width( header.width() - funcBarWidth - 10 );
		}
	
		function adjustFrameWH() {
			var width = container.width();
			var height = container.height();
			var frameHeight = getFrameHeight(height);
			frame.width( width );
			frame.height( frameHeight );
		}
	
		function doBookmark(title, url) {
			if ( $.browser.mozilla && window.sidebar ) { // Mozilla Firefox Bookmark
				window.sidebar.addPanel(title, url, "");
			} else if( $.browser.msie && window.external ) { // IE Favorite
				window.external.AddFavorite( url, title);
			} else if( ua.indexOf("chrome") >= 0 ) { // Chrome
				alert("Sorry! Chrome doesn't support bookmark function currently.");
				//alert("Press [Ctrl + D] to bookmark in Chrome");
			} else if($.browser.safari || ua.indexOf("safari") >= 0 ) { // Safari
				alert("Sorry! Safari doesn't support bookmark function currently.");
				//alert("Press [Ctrl + D] to bookmark in Safari");
			} else if($.browser.opera || ua.indexOf("opera") >= 0 ) { // Opera Hotlist
				alert("Sorry! Opera doesn't support bookmark function currently.");
				//alert("Press [Ctrl + D] to bookmark in Opera");
			}
		}
	
		function hideContent() {
			//log("hideContent");
			var bgColor = frame.css("backgroundColor");
			if( bgColor != null && bgColor != "transparent" ) {
				container.css("backgroundColor", bgColor);
			}
			frame.hide();
			if( options.showFooter ) {
				footer.hide();
			}
			container.css("opacity", OPACITY_MINIMIZED);
		}
	
		function showContent() {
			//log("showContent");
			frame.show();
			if( options.showFooter ) {
				footer.show();
			}
			container.css("opacity", 1);
		}
	
		function getFrameHeight(windowHeight) {
			var footerHeight = options.showFooter? 16:0;
			return windowHeight - 20 - footerHeight - 4; // minus header & footer & iframe's padding height
		}
	
		// modify title text as vertical presentation
		function transformTitleText() {
			var textBlock = header.children("div.window_title_text");
			var text = textBlock.text();
			var buf = "";
			var limitHeight = 120 - 7 - 13; // total height - padding height - one font height
			for( var i=0; i<text.length; i++ ) {
				var c = text.charAt(i);
				if( c == "-" || c == "_" ) {
					c = "|";
				}
				if( c == " " ) {
					c = "<div style='height:5px; line-height:5px;'>&nbsp;</div>";
					buf += c;
				} else {
					buf += c+"<br>";
				}
				textBlock.html(buf);
				//log( textBlock.html() +': ' +textBlock.height() +','+textBlock.outerHeight());
				if( textBlock.outerHeight() + 13 > limitHeight ) {
					buf += ":";
					textBlock.html(buf);
					break;
				}
			}
		}
	
		function restoreTitleText() {
			var textBlock = header.children("div.window_title_text");
			textBlock.text(options.title);
		}
		
		// public
		function select() {
			container.css("z-index", options.z + 2);
		}
	
		function unselect() {
			container.css("z-index", options.z);
		}
	
		function getContainer() {
			return container;
		}
	
		function getHeader() {
			return header;
		}
	
		function getFrame() {
			return frame;
		}
	
		function getFooter() {
			return footer;
		}
		
		function getTargetCssStyle() {
			return targetCssStyle;
		}
		
		function alignCenter() {
			if( caller != null ) {
				var pLeft = (caller.width() - container.width()) / 2;
				var pTop = (caller.height() - container.height()) / 2;
				// random new created window position
				if( options.createRandomOffset.x > 0 ) {
					pLeft += ((Math.random() - 0.5) * options.createRandomOffset.x); 
				}
				if( options.createRandomOffset.y > 0 ) {
					pTop += ((Math.random() - 0.5) * options.createRandomOffset.y);					
				}
				container.css({
					left:		pLeft,
					top:		pTop
				});
			} else {
				container.css({
					left:		'50%',
					top:		'50%'
				}).css({
					marginLeft:	'-' + (container.outerWidth() / 2) + 'px',
					marginTop:	'-' + (container.outerHeight() / 2) + 'px'
				});
	
				var marginLeft = parseInt(container.css('marginLeft'), 10) + jQuery(window).scrollLeft();
				var marginTop = parseInt(container.css('marginTop'), 10) + jQuery(window).scrollTop();
				// random new created window position
				if( options.createRandomOffset.x > 0 ) {
					marginLeft += ((Math.random() - 0.5) * options.createRandomOffset.x); 
				}
				if( options.createRandomOffset.y > 0 ) {
					marginTop += ((Math.random() - 0.5) * options.createRandomOffset.y);					
				}
				container.css({
					marginLeft:	marginLeft,
					marginTop:	marginTop
				});
			};
		}
	
		function alignHorizontalCenter() {
			if( caller != null ) {
				var pLeft = (caller.width() - container.width())/2 + caller.offset().left;
				container.css({
					left:		pLeft
				});
			} else {
				container.css({
					left:		'50%'
				}).css({
					marginLeft:	'-' + (container.outerWidth() / 2) + 'px'
				});
	
				container.css({
					marginLeft:	parseInt(container.css('marginLeft'), 10) + jQuery(window).scrollLeft()
				});
			}
		}
	
		function alignVerticalCenter() {
			if( caller != null ) {
				var pTop = (caller.height() - container.height())/2 + caller.offset().top;
				container.css({
					top:		pTop
				});
			} else {
				container.css({
					top:		'50%'
				}).css({
					marginTop:	'-' + (container.outerHeight() / 2) + 'px'
				});
	
				container.css({
					marginTop:	parseInt(container.css('marginTop'), 10) + jQuery(window).scrollTop()
				});
			}
		}
	
		function maximize(bImmediately, bNoSaveDisplay) {
			if( !$.browser.msie ) { // in IE, must do hide scrollbar routine after animation finished
				hideBrowserScrollbar();
			}
			maximized = true;
			container.draggable( 'disable' );
			container.resizable( 'disable' );
	
			// save current display
			if( bNoSaveDisplay != true ) {
				pos.left = container.css("left");
				pos.top = container.css("top");
				pos.marginLeft = container.css("marginLeft");
				pos.marginTop = container.css("marginTop");
				wh.w = container.width();
				wh.h = container.height();
			}
			var scrollPos = getBrowserScrollXY();
			var screenWH = getBrowserScreenWH();
			targetCssStyle = {
				left: 0,
				top: 0,
				marginLeft: scrollPos.left,
				marginTop: scrollPos.top,
				width: screenWH.width,
				height: screenWH.height,
				opacity: 1
			};
	
			if( bImmediately ) {
				container.css(targetCssStyle);
				adjustHeaderTextPanelWidth();
				adjustFrameWH();
				header.removeClass('window_header_normal');
				header.addClass('window_header_maximize');
				// switch maximize, cascade button
				var headerFuncPanel = header.children("div.window_function_bar");
				headerFuncPanel.children(".maximizeImg").hide();
				headerFuncPanel.children(".cascadeImg").show();
			} else {
				hideContent();
				container.animate(targetCssStyle, animationSpeed, 'swing', function() {
					if( $.browser.msie ) { // in IE, must do hide scrollbar routine after animation finished
						hideBrowserScrollbar();
					}
					showContent();
					adjustHeaderTextPanelWidth();
					adjustFrameWH();
					header.removeClass('window_header_normal');
					header.addClass('window_header_maximize');
					// switch maximize, cascade button
					var headerFuncPanel = header.children("div.window_function_bar");
					headerFuncPanel.children(".maximizeImg").hide();
					headerFuncPanel.children(".cascadeImg").show();
					
					// after callback
					if( $.isFunction(options.afterMaximize) ) {
						options.afterMaximize(_this);
					}
				});
			}
			
			// before callback
			if( $.isFunction(options.onMaximize) ) {
				options.onMaximize(_this);
			}
		}
	
		function minimize() {
			showBrowserScrollbar();
			minimized = true;
			container.draggable( 'disable' );
			container.resizable( 'disable' );
			
			// save current display
			orgPos.left = container.css("left");
			orgPos.top = container.css("top");
			orgPos.marginLeft = container.css("marginLeft");
			orgPos.marginTop = container.css("marginTop");
			orgWh.w = container.width();
			orgWh.h = container.height();
	
			var top = ( minWindowStorage.length * 120) + "px";
			targetCssStyle = {
				left: 0,
				top: top,
				marginLeft: 0,
				marginTop: 0,
				width: 24,
				height: 120,
				opacity: OPACITY_MINIMIZED
			};
	
			transferToFixed(); // transfer position to fixed first
			hideContent();
			container.animate(targetCssStyle, animationSpeed, 'swing', function() {
				header.children("div.window_title_text").width( "100%" );
				header.attr("title", options.title);
				header.removeClass('window_header_normal');
				header.removeClass('window_header_maximize');
				header.addClass('window_header_minimize');
				if( options.showRoundCorner ) {
					header.removeClass('ui-corner-top');
					header.addClass('ui-corner-all');
				}
				header.children(".window_function_bar").hide();
				transformTitleText();
	
				// bind header click event
				header.click(function() {
					restore();
				});
				
				// after callback
				if( $.isFunction(options.afterMinimize) ) {
					options.afterMinimize(_this);
				}
			});
			container.mouseover(function() {
				$(this).css("opacity", 1);
			});
			container.mouseout(function() {
				$(this).css("opacity", OPACITY_MINIMIZED);
			});
			
			// before callback
			if( $.isFunction(options.onMinimize) ) {
				options.onMinimize(_this);
			}
	
			// push into minimized window storage
			pushMinWindow(windowId);
		}
	
		function restore() {
			var rpos = null;
			var rwh = null;
			if( minimized ) { // from minimized status
				minimized = false;
				rpos = orgPos;
				rwh = orgWh;
				transferToAbsolute(); // transfer position to fixed first
				header.removeClass('window_header_minimize');
				if( maximized ) { // to maximized status	
					var scrollPos = getBrowserScrollXY();
					rpos = {left:0, top:0, marginLeft:scrollPos.left, marginTop:scrollPos.top};
					header.addClass('window_header_maximize');
				} else {
					header.addClass('window_header_normal');
				}
			} else if( maximized ) { // from maximized status
				maximized = false;
				rpos = pos;
				rwh = wh;
				header.removeClass('window_header_maximize');
				header.addClass('window_header_normal');
			}
			restoreTitleText();
			header.removeAttr("title");
			header.removeClass('window_header_minimize');
			if( options.showRoundCorner ) {
				header.removeClass('ui-corner-all');
				header.addClass('ui-corner-top');
			}
			header.children(".window_function_bar").show();
			
			// unbind event
			container.unbind("mouseover");
			container.unbind("mouseout");

			targetCssStyle = {
				left: rpos.left,
				top: rpos.top,
				marginLeft: rpos.marginLeft,
				marginTop: rpos.marginTop,
				width: rwh.w,
				height: rwh.h,
				opacity: 1
			};
			
			hideContent();
			container.animate(targetCssStyle, animationSpeed, 'swing', function() {
				showContent();
				header.unbind('click');
				adjustHeaderTextPanelWidth();
				adjustFrameWH();
	
				// switch maximize, cacade icon
				var headerFuncPanel = header.children("div.window_function_bar");
				if( maximized ) {
					hideBrowserScrollbar();
					headerFuncPanel.children(".maximizeImg").hide();
					headerFuncPanel.children(".cascadeImg").show();
				} else {
					showBrowserScrollbar();
					container.draggable( 'enable' );
					container.resizable( 'enable' );
					headerFuncPanel.children(".maximizeImg").show();
					headerFuncPanel.children(".cascadeImg").hide();
				}
				
				// after callback
				if( $.isFunction(options.afterCascade) ) {
					options.afterCascade(_this);
				}
			});
			
			// before callback
			if( $.isFunction(options.onCascade) ) {
				options.onCascade(_this);
			}
	
			// pop from minimized window storage
			popMinWindow(windowId);
		}
		
		function close(quiet) {
			// do callback
			if( !quiet && $.isFunction(options.onClose) ) {
				options.onClose(_this);
			}
			destroy();
		}
	
		function destroy() {
			redirectCheck = false;
			if( maximized ) {
				showBrowserScrollbar();
			}
			popWindow(windowId);
			container.remove();
		}
	
		return { // instance public methods
			initialize: initialize,
			getTargetCssStyle: getTargetCssStyle,         // get the css ready to change
			getWindowId: function() {                     // get window id
				return windowId;
			},
			select: select,                               // select current window, it will increase the original z-index value with 2
			unselect: unselect,                           // unselect current window, it will set the z-index as original options.z
			getContainer: getContainer,                   // get window container panel, a jQuery object
			getHeader: getHeader,                         // get window header panel, a jQuery object
			getFrame: getFrame,                           // get window frame panel, a jQuery object
			getFooter: getFooter,                         // get window footer panel, a jQuery object
			alignCenter: alignCenter,                     // set current window as screen center
			alignHorizontalCenter: alignHorizontalCenter, // set current window as horizontal center
			alignVerticalCenter: alignVerticalCenter,     // set current window as vertical center
			maximize: maximize,                           // maximize current window
			minimize: minimize,                           // minimize current window
			restore: restore,                             // restore current window, it could be maximized or cascade status
			close: close,                                 // close current window. parameter: quiet - [boolean] to decide doing callback or not
			setTitle: setTitle,                           // change window title. parameter: title - [string] window title text
			setUrl: setUrl,                               // change iframe url. parameter: url - [string] iframe url
			setContent: setContent,                       // change frame content. parameter: content - [html string, jquery object, element] the content of frame
			setFooterContent: setFooterContent,           // change footer content. parameter: content - [html string, jquery object, element] the content of footer
			getTitle: getTitle,                           // get window title text
			getUrl: getUrl,                               // get url text
			getContent: getContent,                       // get frame html content
			getFooterContent: getFooterContent            // get footer html content
		};
	} // constructor end
	
	return { // static public methods
		getInstance: function(caller, options)	{ // create new window instance
			var instance = constructor(caller, options);
			instance.initialize(instance);
			selectWindow(instance); // set new created window instance as selected
			instance.getContainer().get(0).windowInstance = instance;
			pushWindow(instance);
			return instance;
		},
		getVersion: function() { // get current version of plugin
			return VERSION;
		},
		setAnimationSpeed: function(speed) { // set animation speed of all windows
			animationSpeed = speed;
		},
		closeAll: function(quiet) { // close all created windows. it got a parameter - quiet, a boolean flag to decide doing callback or not
			var count = windowStorage.length;
			for( var i=0; i<count; i++ ) {
				var wnd = windowStorage[0];
				wnd.close(quiet);
			}
			windowStorage = [];
			minWindowStorage = [];
		},
		hideAll: function() { // hide all created windows
			for( var i=0; i<windowStorage.length; i++ ) {
				windowStorage[i].getContainer().hide();
			}
		},
		showAll: function() { // show all created windows
			for( var i=0; i<windowStorage.length; i++ ) {
				windowStorage[i].getContainer().show();
			}
		},
		getAll: function() { // return all created windows instance
			return windowStorage;
		},
		getWindow: getWindow, // get the window instance via window id
		skipHandleScroll: function() { // skip handling browser scrollbar when window status changed
			handleScrollbar = false;
		}
	}
})();

// alias methods
$.window.getVersion = $.Window.getVersion;
$.window.setAnimationSpeed = $.Window.setAnimationSpeed;
$.window.closeAll = $.Window.closeAll;
$.window.hideAll = $.Window.hideAll;
$.window.showAll = $.Window.showAll;
$.window.getAll = $.Window.getAll;
$.window.getWindow = $.Window.getWindow;
$.window.skipHandleScroll = $.Window.skipHandleScroll;


/*=================================== [ fisheye js ] =================================*/




/*=================================== [ fisheye js ] =================================*/

jQuery.iFisheye={build:function(options)
{return this.each(function()
{var el=this;el.fisheyeCfg={items:jQuery(options.items,this),container:jQuery(options.container,this),pos:jQuery.iUtil.getPosition(this),itemWidth:options.itemWidth,itemsText:options.itemsText,proximity:options.proximity,valign:options.valign,halign:options.halign,maxWidth:options.maxWidth};jQuery.iFisheye.positionContainer(el,0);jQuery(window).bind('resize',function()
{el.fisheyeCfg.pos=jQuery.iUtil.getPosition(el);jQuery.iFisheye.positionContainer(el,0);jQuery.iFisheye.positionItems(el);});jQuery.iFisheye.positionItems(el);el.fisheyeCfg.items.bind('mouseover',function()
{jQuery(el.fisheyeCfg.itemsText,this).get(0).style.display='block';}).bind('mouseout',function()
{jQuery(el.fisheyeCfg.itemsText,this).get(0).style.display='none';});jQuery(document).bind('mousemove',function(e)
{var pointer=jQuery.iUtil.getPointer(e);var toAdd=0;if(el.fisheyeCfg.halign&&el.fisheyeCfg.halign=='center')
var posx=pointer.x-el.fisheyeCfg.pos.x-(el.offsetWidth-el.fisheyeCfg.itemWidth*el.fisheyeCfg.items.size())/2-el.fisheyeCfg.itemWidth/2;else if(el.fisheyeCfg.halign&&el.fisheyeCfg.halign=='right')
var posx=pointer.x-el.fisheyeCfg.pos.x-el.offsetWidth+el.fisheyeCfg.itemWidth*el.fisheyeCfg.items.size();else
var posx=pointer.x-el.fisheyeCfg.pos.x;var posy=Math.pow(pointer.y-el.fisheyeCfg.pos.y-el.offsetHeight/2,2);el.fisheyeCfg.items.each(function(nr)
{distance=Math.sqrt(Math.pow(posx-nr*el.fisheyeCfg.itemWidth,2)
+posy);distance-=el.fisheyeCfg.itemWidth/2;distance=distance<0?0:distance;distance=distance>el.fisheyeCfg.proximity?el.fisheyeCfg.proximity:distance;distance=el.fisheyeCfg.proximity-distance;extraWidth=el.fisheyeCfg.maxWidth*distance/el.fisheyeCfg.proximity;this.style.width=el.fisheyeCfg.itemWidth+extraWidth+'px';this.style.left=el.fisheyeCfg.itemWidth*nr+toAdd+'px';toAdd+=extraWidth;});jQuery.iFisheye.positionContainer(el,toAdd);});})},positionContainer:function(el,toAdd)
{if(el.fisheyeCfg.halign)
if(el.fisheyeCfg.halign=='center')
el.fisheyeCfg.container.get(0).style.left=(el.offsetWidth-el.fisheyeCfg.itemWidth*el.fisheyeCfg.items.size())/2-toAdd/2+'px';else if(el.fisheyeCfg.halign=='left')
el.fisheyeCfg.container.get(0).style.left=-toAdd/el.fisheyeCfg.items.size()+'px';else if(el.fisheyeCfg.halign=='right')
el.fisheyeCfg.container.get(0).style.left=(el.offsetWidth-el.fisheyeCfg.itemWidth*el.fisheyeCfg.items.size())-toAdd/2+'px';el.fisheyeCfg.container.get(0).style.width=el.fisheyeCfg.itemWidth*el.fisheyeCfg.items.size()+toAdd+'px';},positionItems:function(el)
{el.fisheyeCfg.items.each(function(nr)
{this.style.width=el.fisheyeCfg.itemWidth+'px';this.style.left=el.fisheyeCfg.itemWidth*nr+'px';});}};jQuery.fn.Fisheye=jQuery.iFisheye.build;jQuery.iUtil={getPosition:function(e)
{var x=0;var y=0;var es=e.style;var restoreStyles=false;if(jQuery(e).css('display')=='none'){var oldVisibility=es.visibility;var oldPosition=es.position;restoreStyles=true;es.visibility='hidden';es.display='block';es.position='absolute';}
var el=e;while(el){x+=el.offsetLeft+(el.currentStyle&&!jQuery.browser.opera?parseInt(el.currentStyle.borderLeftWidth)||0:0);y+=el.offsetTop+(el.currentStyle&&!jQuery.browser.opera?parseInt(el.currentStyle.borderTopWidth)||0:0);el=el.offsetParent;}
el=e;while(el&&el.tagName&&el.tagName.toLowerCase()!='body')
{x-=el.scrollLeft||0;y-=el.scrollTop||0;el=el.parentNode;}
if(restoreStyles==true){es.display='none';es.position=oldPosition;es.visibility=oldVisibility;}
return{x:x,y:y};},getPositionLite:function(el)
{var x=0,y=0;while(el){x+=el.offsetLeft||0;y+=el.offsetTop||0;el=el.offsetParent;}
return{x:x,y:y};},getSize:function(e)
{var w=jQuery.css(e,'width');var h=jQuery.css(e,'height');var wb=0;var hb=0;var es=e.style;if(jQuery(e).css('display')!='none'){wb=e.offsetWidth;hb=e.offsetHeight;}else{var oldVisibility=es.visibility;var oldPosition=es.position;es.visibility='hidden';es.display='block';es.position='absolute';wb=e.offsetWidth;hb=e.offsetHeight;es.display='none';es.position=oldPosition;es.visibility=oldVisibility;}
return{w:w,h:h,wb:wb,hb:hb};},getSizeLite:function(el)
{return{wb:el.offsetWidth||0,hb:el.offsetHeight||0};},getClient:function(e)
{var h,w,de;if(e){w=e.clientWidth;h=e.clientHeight;}else{de=document.documentElement;w=window.innerWidth||self.innerWidth||(de&&de.clientWidth)||document.body.clientWidth;h=window.innerHeight||self.innerHeight||(de&&de.clientHeight)||document.body.clientHeight;}
return{w:w,h:h};},getScroll:function(e)
{var t=0,l=0,w=0,h=0,iw=0,ih=0;if(e&&e.nodeName.toLowerCase()!='body'){t=e.scrollTop;l=e.scrollLeft;w=e.scrollWidth;h=e.scrollHeight;iw=0;ih=0;}else{if(document.documentElement){t=document.documentElement.scrollTop;l=document.documentElement.scrollLeft;w=document.documentElement.scrollWidth;h=document.documentElement.scrollHeight;}else if(document.body){t=document.body.scrollTop;l=document.body.scrollLeft;w=document.body.scrollWidth;h=document.body.scrollHeight;}
iw=self.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||0;ih=self.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0;}
return{t:t,l:l,w:w,h:h,iw:iw,ih:ih};},getMargins:function(e,toInteger)
{var el=jQuery(e);var t=el.css('marginTop')||'';var r=el.css('marginRight')||'';var b=el.css('marginBottom')||'';var l=el.css('marginLeft')||'';if(toInteger)
return{t:parseInt(t)||0,r:parseInt(r)||0,b:parseInt(b)||0,l:parseInt(l)};else
return{t:t,r:r,b:b,l:l};},getPadding:function(e,toInteger)
{var el=jQuery(e);var t=el.css('paddingTop')||'';var r=el.css('paddingRight')||'';var b=el.css('paddingBottom')||'';var l=el.css('paddingLeft')||'';if(toInteger)
return{t:parseInt(t)||0,r:parseInt(r)||0,b:parseInt(b)||0,l:parseInt(l)};else
return{t:t,r:r,b:b,l:l};},getBorder:function(e,toInteger)
{var el=jQuery(e);var t=el.css('borderTopWidth')||'';var r=el.css('borderRightWidth')||'';var b=el.css('borderBottomWidth')||'';var l=el.css('borderLeftWidth')||'';if(toInteger)
return{t:parseInt(t)||0,r:parseInt(r)||0,b:parseInt(b)||0,l:parseInt(l)||0};else
return{t:t,r:r,b:b,l:l};},getPointer:function(event)
{var x=event.pageX||(event.clientX+(document.documentElement.scrollLeft||document.body.scrollLeft))||0;var y=event.pageY||(event.clientY+(document.documentElement.scrollTop||document.body.scrollTop))||0;return{x:x,y:y};},traverseDOM:function(nodeEl,func)
{func(nodeEl);nodeEl=nodeEl.firstChild;while(nodeEl){jQuery.iUtil.traverseDOM(nodeEl,func);nodeEl=nodeEl.nextSibling;}},purgeEvents:function(nodeEl)
{jQuery.iUtil.traverseDOM(nodeEl,function(el)
{for(var attr in el){if(typeof el[attr]==='function'){el[attr]=null;}}});},centerEl:function(el,axis)
{var clientScroll=jQuery.iUtil.getScroll();var windowSize=jQuery.iUtil.getSize(el);if(!axis||axis=='vertically')
jQuery(el).css({top:clientScroll.t+((Math.max(clientScroll.h,clientScroll.ih)-clientScroll.t-windowSize.hb)/2)+'px'});if(!axis||axis=='horizontally')
jQuery(el).css({left:clientScroll.l+((Math.max(clientScroll.w,clientScroll.iw)-clientScroll.l-windowSize.wb)/2)+'px'});},fixPNG:function(el,emptyGIF){var images=jQuery('img[@src*="png"]',el||document),png;images.each(function(){png=this.src;this.src=emptyGIF;this.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+png+"')";});}};[].indexOf||(Array.prototype.indexOf=function(v,n){n=(n==null)?0:n;var m=this.length;for(var i=n;i<m;i++)
if(this[i]==v)
return i;return-1;});