$(document).ready(function(){
	$("select").selecter({
		label: "Киев"
	});
	$(".choose__rooms_item").on("click",function () {
		if($(".choose__rooms_item").hasClass("checked")){
			$(this).css("background-color", "transparent").css("color", "#FFFFFF").removeClass("checked");
		}
		else{
			$(this).css("background-color", "#FFFFFF").css("color", "#152935").addClass("checked");
		}
	});


	// $(".selecter-selected").on("click",function () {
	// 	alert("dsgdsgf");
	// 	$(this).css("background", "url(\"./images/selectArrowOutwards.png no-repeat fixed\")");
	// });
});