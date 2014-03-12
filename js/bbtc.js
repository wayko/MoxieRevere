$(document).ready(function(){
$(".socials").mobilyblocks({
		trigger: 'click',
		direction: 'counter',
		duration:500,
		zIndex:200,
		widthMultiplier:.9
	});
	$("#slide1").ready(function (){
		$(".navigation").css("top","65px");	
});
$("#slide2").ready(function (){
$(".navigation").css("top","75px");	
});
$(".menu").click(function (){
		window.open('http://rice-n-beans.biz/menu.html')
});  
$("#slide3").ready(function (){
$(".navigation").css("top","75px");	
});
$(".orderbutton").click(function (){
	window.open('http://www.grubhub.com/r/w/12849/allentown/rice-n-beans/');
});
});