
// class myClass{
// 	sayHello(){
// 		return "Hello asdfas";
// 	}
// }
// var myClass = new Class();
// document.getElementsByClassName("content__title").innerHTML=myClass.sayHello();


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
		if($(this).hasClass("unchecked")) {
			$(".realty_search_content_select-item").css("display", "block").css("border-left","2px solid #30AE63").css("border-right","2px solid #30AE63")
				.css("box-shadow","0 5px 10px rgba(0,0,0,0.22)");
			$(this).removeClass("unchecked");
			$(".selectVisibleArrow").attr("src","../images/selectArrowOutwards.png");
			$(this).css("border-top","2px solid #30AE63").css("border-left","2px solid #30AE63").css("border-right","2px solid #30AE63").
				css("border-radius",0);
			$(".realty_search_content_select-item").last().css("border-bottom","2px solid #30AE63");
		}
		else{
			$(".realty_search_content_select-item").css("display", "none");
			$(this).addClass("unchecked");
			$(".selectVisibleArrow").attr("src","images/selectArrow.png");
			$(this).css("border-top","2px solid #dfe3e6").css("border-left","2px solid #dfe3e6").css("border-right","2px solid #dfe3e6").
			css("border-radius","3px");
		}
	});
	$(".realty_search_content_select-item").hover(function () {
		$(".realty_search_content_select-item").css("border",0);
		$(".select").css("border","2px solid #dfe3e6");
	});
	$(".realty_search_content_select-item").on("click",function () {
		var colorOfBranchMetro = {};
		colorOfBranchMetro["Политехнический институт"] = "red";
		colorOfBranchMetro["Шулявская"] = "red";
		colorOfBranchMetro["Золотые ворота"] = "green";
		colorOfBranchMetro["Лыбедская"] = "blue";
		var selectedItem = $(this).text().trim();
		for(var name in colorOfBranchMetro) {
			var value = colorOfBranchMetro[name];
			if(name==selectedItem){
				$(".select .selectVisibleText").text(selectedItem);
				$(".select .colorOfMetro").removeClass("red blue green").addClass(value);
				$(".realty_search_content_select-item").css("display", "none");
				$(".select").addClass("unchecked");
				$(".selectVisibleArrow").attr("src","images/selectArrow.png");
				$(".select").css("border-top","2px solid #dfe3e6").css("border-left","2px solid #dfe3e6").css("border-right","2px solid #dfe3e6").
				css("border-radius","3px");
			}
		}
	});
});