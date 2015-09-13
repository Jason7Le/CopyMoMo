 /*导航下拉菜单*/
 (function(){
		$(function(){
			$('#ywtx').mouseover(function(e) {
		        $(this).children('ul').css('display','block')
		    }).mouseout(function(e) {
		        $(this).children('ul').css('display','none')
		    })
		}) 	
  })()
  		
$(function(){
  			
  $('#ywtx>.select>li').mouseenter(function(event) {
  	$(this).addClass('current').siblings().removeClass('current')
  		});


})
$(function(){
	$('#ywtx2').mouseover(function(e) {
        $(this).children('ul').css('display','block')
    }).mouseleave(function(e) {
        $(this).children('ul').css('display','none')
    });
})
$(function(){
  			
  $('#ywtx2>.select_2>li').mouseenter(function(event) {
  	$(this).addClass('current').siblings().removeClass('current')
  		});
})
/*=============photo01区特效=======================*/
$(function(){

	$('.Pic32').mouseenter(function(e){
		$(this).children('.intr-s').css({'top':118})
	}).mouseleave(function(e) {
		$('.intr-s').css({'top':280})
	});
})
$(function(){

	$('#Pic09,#Pic10').mouseenter(function(e){
		$(this).children('.intr-s').css({'top':7})
	}).mouseleave(function(e) {
		$('.intr-s').css({'top':280})
	});
})
/*=============下载区特效=======================*/
$(function(){

	$('#dw_ios,#dw_Android,#dw_WP').mouseenter(function(event) {
		$(this).children().stop().fadeIn(200) 
	}).mouseleave(function(event) {
		$('#dw_ios,#dw_Android,#dw_WP').children('div').stop().fadeOut(200)
	})
})
(function(){

})();