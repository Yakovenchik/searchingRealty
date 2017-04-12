$(document).ready(function(){
	$(".choose__city_selector").selecter({
		label: "Киев"
	});
	$(".choose__rooms_item").on("click",function () {
		if($(".choose__rooms_item").hasClass("checked")){
			$(this).css("background-color", "transparent").css("color", "#FFFFFF").removeClass("checked");
		}
		else{
			$(this).css("background-color", "#FFFFFF").css("color", "#152935").addClass("checked");
		}
	})
	$(".select").on("click",function () {
		if($(".select").hasClass("unchecked")) {
			$(".realty_search_content_select-item").css("display", "block");
			$(".select").removeClass("unchecked");
			$(".selectVisibleArrow").attr("src","images/selectArrowOutwards.png");
			$(".select").css("border-top","2px solid #30AE63").css("border-left","2px solid #30AE63").css("border-right","2px solid #30AE63").
				css("border-radius",0);
		}
		else{
			$(".realty_search_content_select-item").css("display", "none");
			$(".select").addClass("unchecked");
			$(".selectVisibleArrow").attr("src","images/selectArrow.png");
			$(".select").css("border-top","2px solid #dfe3e6").css("border-left","2px solid #dfe3e6").css("border-right","2px solid #dfe3e6").
			css("border-radius","3px");
		}
	});
	$(".select").on("hover",function () {
		
	});
	$(".realty_search_content_select-item").on("click",function () {
		
	});




	//$(".main").on


	// $(".selecter-selected").on("click",function () {
	// 	alert("dsgdsgf");
	// 	$(this).css("background", "url(\"./images/selectArrowOutwards.png no-repeat fixed\")");
	// });
});