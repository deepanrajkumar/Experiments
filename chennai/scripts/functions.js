
/**
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 * @author Ariel Flesler
 * @version 1.4.2
 *
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 */
;(function(d){var k=d.scrollTo=function(a,i,e){d(window).scrollTo(a,i,e)};k.defaults={axis:'xy',duration:parseFloat(d.fn.jquery)>=1.3?0:1};k.window=function(a){return d(window)._scrollable()};d.fn._scrollable=function(){return this.map(function(){var a=this,i=!a.nodeName||d.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!i)return a;var e=(a.contentWindow||a).document||a.ownerDocument||a;return d.browser.safari||e.compatMode=='BackCompat'?e.body:e.documentElement})};d.fn.scrollTo=function(n,j,b){if(typeof j=='object'){b=j;j=0}if(typeof b=='function')b={onAfter:b};if(n=='max')n=9e9;b=d.extend({},k.defaults,b);j=j||b.speed||b.duration;b.queue=b.queue&&b.axis.length>1;if(b.queue)j/=2;b.offset=p(b.offset);b.over=p(b.over);return this._scrollable().each(function(){var q=this,r=d(q),f=n,s,g={},u=r.is('html,body');switch(typeof f){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)){f=p(f);break}f=d(f,this);case'object':if(f.is||f.style)s=(f=d(f)).offset()}d.each(b.axis.split(''),function(a,i){var e=i=='x'?'Left':'Top',h=e.toLowerCase(),c='scroll'+e,l=q[c],m=k.max(q,i);if(s){g[c]=s[h]+(u?0:l-r.offset()[h]);if(b.margin){g[c]-=parseInt(f.css('margin'+e))||0;g[c]-=parseInt(f.css('border'+e+'Width'))||0}g[c]+=b.offset[h]||0;if(b.over[h])g[c]+=f[i=='x'?'width':'height']()*b.over[h]}else{var o=f[h];g[c]=o.slice&&o.slice(-1)=='%'?parseFloat(o)/100*m:o}if(/^\d+$/.test(g[c]))g[c]=g[c]<=0?0:Math.min(g[c],m);if(!a&&b.queue){if(l!=g[c])t(b.onAfterFirst);delete g[c]}});t(b.onAfter);function t(a){r.animate(g,j,b.easing,a&&function(){a.call(this,n,b)})}}).end()};k.max=function(a,i){var e=i=='x'?'Width':'Height',h='scroll'+e;if(!d(a).is('html,body'))return a[h]-d(a)[e.toLowerCase()]();var c='client'+e,l=a.ownerDocument.documentElement,m=a.ownerDocument.body;return Math.max(l[h],m[h])-Math.min(l[c],m[c])};function p(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);

/**
 * jQuery.LocalScroll - Animated scrolling navigation, using anchors.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 3/11/2009
 * @author Ariel Flesler
 * @version 1.2.7
 **/
;(function($){var l=location.href.replace(/#.*/,'');var g=$.localScroll=function(a){$('body').localScroll(a)};g.defaults={duration:1e3,axis:'y',event:'click',stop:true,target:window,reset:true};g.hash=function(a){if(location.hash){a=$.extend({},g.defaults,a);a.hash=false;if(a.reset){var e=a.duration;delete a.duration;$(a.target).scrollTo(0,a);a.duration=e}i(0,location,a)}};$.fn.localScroll=function(b){b=$.extend({},g.defaults,b);return b.lazy?this.bind(b.event,function(a){var e=$([a.target,a.target.parentNode]).filter(d)[0];if(e)i(a,e,b)}):this.find('a,area').filter(d).bind(b.event,function(a){i(a,this,b)}).end().end();function d(){return!!this.href&&!!this.hash&&this.href.replace(this.hash,'')==l&&(!b.filter||$(this).is(b.filter))}};function i(a,e,b){var d=e.hash.slice(1),f=document.getElementById(d)||document.getElementsByName(d)[0];if(!f)return;if(a)a.preventDefault();var h=$(b.target);if(b.lock&&h.is(':animated')||b.onBefore&&b.onBefore.call(b,a,f,h)===false)return;if(b.stop)h.stop(true);if(b.hash){var j=f.id==d?'id':'name',k=$('<a> </a>').attr(j,d).css({position:'absolute',top:$(window).scrollTop(),left:$(window).scrollLeft()});f[j]='';$('body').prepend(k);location=e.hash;k.remove();f[j]=d}h.scrollTo(f,b).trigger('notify.serialScroll',[f])}})(jQuery);


/**
 * jQuery.slider
 **/
(function(a){a.fn.bjqs=function(b){var c={},d={width:700,height:300,animation:"fade",animationDuration:450,automatic:true,rotationSpeed:4e3,hoverPause:true,showControls:true,centerControls:true,nextText:"Next",prevText:"Prev",showMarkers:true,centerMarkers:true,keyboardNav:true,useCaptions:true},e=this,f=e.find(".bjqs"),g=f.children("li"),h=g.length,i=false,j=false,k=0,l=1,m=0,n=g.eq(k),o="forward",p="backward";c=a.extend({},d,b);g.css({height:c.height,width:c.width});f.css({height:c.height,width:c.width});e.css({height:c.height,width:c.width});g.addClass("bjqs-slide");if(c.showControls&&h>1){var q=a('<ul class="bjqs-controls"></ul>'),r=a('<li><a href="#" class="icons bjqs-next" class="controls">'+c.nextText+"</a></li>"),s=a('<li><a href="#" class="icons bjqs-prev" class="controls">'+c.prevText+"</a></li>");r.click(function(a){a.preventDefault();if(!i){A(o,false)}});s.click(function(a){a.preventDefault();if(!i){A(p,false)}});r.appendTo(q);s.appendTo(q);q.appendTo(e);if(c.centerControls){var t=r.children("a"),u=(e.height()-t.height())/2;r.children("a").css("top",u).show();s.children("a").css("top",u).show()}}if(c.showMarkers&&h>1){var v=a('<ol class="bjqs-markers"></ol>'),w,x,u;a.each(g,function(b,d){if(c.animType==="slide"){if(b!==0&&b!==h-1){w=a('<li><a href="#">'+b+"</a></li>")}}else{b++;w=a('<li><a href="#">'+b+"</a></li>")}w.click(function(c){c.preventDefault();if(!a(this).hasClass("active-marker")&&!i){A(false,b)}});w.appendTo(v)});x=v.children("li");x.eq(k).addClass("active-marker");v.appendTo(e);if(c.centerMarkers){u=(c.width-v.width())/2;v.css("left",u)}}if(c.keyboardNav&&h>1){a(document).keyup(function(a){if(!j){clearInterval(z);j=true}if(!i){if(a.keyCode===39){a.preventDefault();A(o,false)}else if(a.keyCode===37){a.preventDefault();A(p,false)}}if(j&c.automatic){z=setInterval(function(){A(o)},c.rotationSpeed);j=false}})}if(c.useCaptions){a.each(g,function(b,c){var d=a(c);var e=d.children("img:first-child");var f=e.attr("title");if(f){var g=a('<p class="bjqs-caption">'+f+"</p>");g.appendTo(d)}})}if(c.hoverPause&&c.automatic){e.hover(function(){if(!j){clearInterval(z);j=true}},function(){if(j){z=setInterval(function(){A(o)},c.rotationSpeed);j=false}})}if(c.animation==="slide"&&h>1){$first=g.eq(0);$last=g.eq(h-1);$first.clone().addClass("clone").removeClass("slide").appendTo(f);$last.clone().addClass("clone").removeClass("slide").prependTo(f);g=f.children("li");h=g.length;$wrapper=a('<div class="bjqs-wrapper"></div>').css({width:c.width,height:c.height,overflow:"hidden",position:"relative"});f.css({width:c.width*h,left:-c.width});g.css({"float":"left",position:"relative",display:"list-item"});$wrapper.prependTo(e);f.appendTo($wrapper)}var y=function(a){if(c.animation==="fade"){if(a===o){!n.next().length?m=0:m++}else if(a===p){!n.prev().length?m=h-1:m--}}if(c.animation==="slide"){if(a===o){m=l+1}if(a===p){m=l-1}}return m};if(c.automatic&&h>1){var z=setInterval(function(){A(o,false)},c.rotationSpeed)}g.eq(k).show();f.show();var A=function(a,b){if(!i){if(a){m=y(a)}else if(b&&c.animation==="fade"){m=b-1}else{m=b}i=true;if(c.animation==="fade"){if(c.showMarkers){x.eq(k).removeClass("active-marker");x.eq(m).addClass("active-marker")}r=g.eq(m);n.fadeOut(c.animationDuration);r.fadeIn(c.animationDuration,function(){n.hide();k=m;n=r;i=false})}else if(c.animation==="slide"){if(c.showMarkers){x.eq(l-1).removeClass("active-marker");if(m===h-1){x.eq(0).addClass("active-marker")}else if(m===0){x.eq(h-3).addClass("active-marker")}else{x.eq(m-1).addClass("active-marker")}}f.animate({left:-m*c.width},c.animationDuration,function(){if(m===0){l=h-2;f.css({left:-l*c.width})}else if(m===h-1){l=1;f.css({left:-c.width})}else{l=m}i=false})}}};return this}})(jQuery)


/**
* hoverIntent r5 // 2007.03.27 // jQuery 1.1.2+
* <http://cherne.net/brian/resources/jquery.hoverIntent.html>
* 
* @param  f  onMouseOver function || An object with configuration options
* @param  g  onMouseOut function  || Nothing (use configuration options object)
* @author    Brian Cherne <brian@cherne.net>
*/
(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY;};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev]);}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev]);};var handleHover=function(e){var p=(e.type=="mouseover"?e.fromElement:e.toElement)||e.relatedTarget;while(p&&p!=this){try{p=p.parentNode;}catch(e){p=this;}}if(p==this){return false;}var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);}if(e.type=="mouseover"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob);},cfg.timeout);}}};return this.mouseover(handleHover).mouseout(handleHover);};})(jQuery);

