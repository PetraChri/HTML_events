var RectangleF=null;
var RectangleS=null;
var clickStop = false;

document.addEventListener("DOMContentLoaded", function () {
	RectangleF = document.querySelector(".long-rect");
	RectangleS = document.querySelector(".short-rect");

	RectangleF.addEventListener("mouseover", function () {
	RectangleS.innerText = "If this works I'm treating myself to some chocolate.";
		if(clickStop == false ) {
			RectangleS.addEventListener("click", function () {
			alert("HALLELUJAH!!! *high 5's everyone*");
			});
		}
		clickStop = true;
	});

	RectangleF.addEventListener("mouseout", function () {
		RectangleS.innerText = "Okay, final part...or at least i hope so. Can coders have humor? I kina feel I'm only gonna make this 			class work if I constantly make fun of myself.";


	});
});



