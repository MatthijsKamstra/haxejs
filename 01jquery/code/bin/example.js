(function (console) { "use strict";
var Main = function() {
	$(function() {
		console.log("jQuery example");
		$("button.continue").html("Next Step...");
		var hiddenBox = $("#banner-message");
		$("#button-container button").on("click",null,function(event) {
			console.log("click: ");
			hiddenBox.show();
		});
		$.ajax({ url : "https://api.nasa.gov/planetary/earth/imagery", data : { lon : 100.75, lat : 1.5, date : "2014-02-01", cloud_score : "True", api_key : "DEMO_KEY"}, success : function(data) {
			$("#nasa-container").html("<img src='" + data.url + "' alt='test' >");
		}});
	});
};
Main.main = function() {
	var main = new Main();
};
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});
