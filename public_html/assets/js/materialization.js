var xpos, ypos;

function bmd(button)
{
	var xposOnButton = xpos - $(button).offset().left;
	var yposOnButton = ypos - $(button).offset().top;
	$("#current-element-label").html(button + " x:" + xposOnButton + ", y:" + yposOnButton);
	$(button).children(".ripple")[0].style.setProperty("left", xposOnButton + "px");
	$(button).children(".ripple")[0].style.setProperty("top", yposOnButton + "px");
	$(button).addClass("mousedown");
}

function bmu(button)
{
	$("#current-element-label").html("mouse up");
	setTimeout(() => {
		$(button).removeClass("mousedown");
		$("#current-element-label").html("class removed");
	}, 500);
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
	xpos = e.clientX;
	ypos = e.clientY;

	root.style.setProperty('--mouse-x', xpos + "px");
	root.style.setProperty('--mouse-y', ypos + "px");

	$("#mouse-pos-label").html("x:" + xpos + " y:" + ypos);
});


