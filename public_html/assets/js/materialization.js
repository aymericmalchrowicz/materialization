var xpos, ypos;

function bmd(button)
{
	var xposOnButton = xpos - $(button).offset().left;
	var yposOnButton = ypos - $(button).offset().top;
	
	$(button).children(".ripple")[0].style.setProperty("left", xposOnButton + "px");
	$(button).children(".ripple")[0].style.setProperty("top", yposOnButton + "px");
	$(button).addClass("mousedown");
	
	// lab debug
	$("#current-element-label").html(button + " x:" + xposOnButton + ", y:" + yposOnButton);
}

function bmu(button)
{
	setTimeout(() => {
		$(button).removeClass("mousedown");
		
		// Lab debug
		$("#current-element-label").html("class mousedown removed");
	}, 500);
	
	// Lab debug
	$("#current-element-label").html("mouse up");
}

function affectGraphicalEffects()
{
	var btns = $(".btn");
	btns.mousedown(e => {
		$(e.currentTarget).find(".ripple").remove();
		$(e.currentTarget).append('<div class="ripple"></div>');
		bmd(e.currentTarget);
	});
	btns.mouseup(e => bmu(e.currentTarget));
	btns.mouseleave(e => bmu(e.currentTarget));

	$(".btn.btn-round").each((index, el) => {
		el.style.setProperty("border-radius", el.height / 2 + "px");
	});

	$(".btn.btn-asymetric").each((index, el) => {
		el.style.setProperty("border-radius", "6px " + el.height / 2 + "px 6px");
	});

	$(".btn.btn-asymetric-reverse").each((index, el) => {
		el.style.setProperty("border-radius", el.height / 2 + "px 6px " + el.height / 2 + "px");
	});

}




let root = document.documentElement;

root.addEventListener("mousemove", e => {
	// JS variables actualisation
	xpos = e.clientX;
	ypos = e.clientY;

	// CSS proterty values actualization
	root.style.setProperty('--mouse-x', xpos + "px");
	root.style.setProperty('--mouse-y', ypos + "px");

	// Lab debug
	$("#mouse-pos-label").html("x:" + xpos + " y:" + ypos);
});


