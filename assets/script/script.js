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
		$("#title").fadeOut();
		$(this).css("transform","translate(500%,150px)");
		setTimeout( function(){
			$(".circle#circle-me").css({"transform":"translate(500%,120px)"});
			},800);
		$("#me-container").delay(1000).fadeIn();
		$("#arrow-button").fadeIn();
		$(".circle#circle-works").hide();
		$(".circle#circle-contact").hide();
		
	});
	
	$(".circle#circle-works").click(function(){
		$("#title").fadeOut();
		$(this).css("transform","translate(500%,300px)");
		setTimeout( function(){
			$(".circle#circle-works").css({"transform":"translate(500%,120px)"});
			},800);
		$("#works-container").delay(1000).fadeIn();
		$("#arrow-button").fadeIn();
		$(".circle#circle-me").hide();
		$(".circle#circle-contact").hide();
	});
	
	$(".circle#circle-contact").click(function(){
		$("#contact-container").show();
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
	// IMPLEMENT "HIDE MODAL" WHEN "CLICK ON SUBMIT BUTTON FROM MODAL BOX" HERE
	$("#submit").click(function(){
		$("#contact-container").hide();
	});

	// IMPLEMENT "HIDE MODAL" WHEN "CLICK ON CANCEL BUTTON FROM MODAL BOX" HERE
	$("#cancel").click(function(){
		$("#contact-container").hide();
	});
	
	// IMPLEMENT "HIDE MODAL" WHEN "CLICK ON MODAL OVERLAY" HERE
	$("#modal-overlay").click(function(){
		$("#contact-container").hide();
	});
	

});