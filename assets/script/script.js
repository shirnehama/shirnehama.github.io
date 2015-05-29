$(document).ready(function(){
	
	//Page Load
	$( window ).load(function(){
		$("#welcome1").delay(5).fadeIn(100);
		$("#welcome2").delay(1000).fadeIn(900);
		
		$(".circle#circle-me").css({"transform":"translateY(150px)","transition-duration":"1s"});
		$(".circle#circle-works").css({"transform":"translateY(300px)","transition-duration":"1s"});
		$(".circle#circle-contact").css({"transform":"translateY(450px)","transition-duration":"1s"});
		
	});
	
	//Click circles
	
	
	$(".circle#circle-me").click(function(){
		var num = $(window).width()/2;
		var n = num.toString();
		
		$("#title").fadeOut();
		$(this).css("transform","translate("+n+"px,150px)");
		setTimeout( function(){
			$(".circle#circle-me").css({"transform":"translate("+n+"px,120px)"});
			},800);
		$("#me-container").delay(1000).fadeIn();
		$("#arrow-button").fadeIn();
		$(".circle#circle-works").hide();
		$(".circle#circle-contact").hide();
		
	});
	
	$(".circle#circle-works").click(function(){
		var num = $(window).width()/2;
		var n = num.toString();
		$("#title").fadeOut();
		$(".circle#circle-works").css("transform","translate("+n+"px,300px)");
		setTimeout( function(){
			$(".circle#circle-works").css({"transform":"translate("+n+"px,120px)"});
			},800);
		$("#works-container").delay(1000).fadeIn();
		$("#arrow-button").fadeIn();
		$(".circle#circle-me").hide();
		$(".circle#circle-contact").hide();
	});
	
	$(".circle#circle-contact").click(function(){
		$("#contact-container").show();
		$('body').addClass("no-scroll");
	});
	
	//Click Home Button
	$("#home-button").click(function(){
		location.reload();
	});
	
	//Click Back Arrow Button
	$("#arrow-button").click(function(){
		location.reload();
	});
	
	//Contact Me
	$("#submit").click(function(){
		$("#contact-container").hide();
		$('body').removeClass("no-scroll");
	});

	$("#cancel").click(function(){
		$("#contact-container").hide();
		$('body').removeClass("no-scroll");
	});
	
	$("#modal-overlay").click(function(){
		$("#contact-container").hide();
		$('body').removeClass("no-scroll");
	});

	//Test
	$(".interest-item").hover(function(){
		$(".arrow#interest-arrow").css({"transform": "rotate(360deg)","transition-duration": "2s"});
	});	
});