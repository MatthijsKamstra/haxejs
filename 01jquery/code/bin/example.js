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
	});
};
Main.main = function() {
	var main = new Main();
};
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});
