var el1 = document.getElementById('el1');
var el2 = document.getElementById('el2');
var scrollTarget = 0;
var scrollPos = 0;
var scrollEase = 0.1;
var scrollEaseLimit = 0.1;

update();

window.addEventListener('scroll', function(){
	scrollTarget = window.scrollY;
}, false);


function render(){

	if (scrollTarget !== scrollPos){

		if (Math.abs(scrollPos - scrollTarget) < scrollEaseLimit){
			scrollPos = scrollTarget;
		}

		scrollPos += (scrollTarget - scrollPos) * scrollEase;

    var transform1 = 'translate3d(0px, ' + -(scrollPos/20) + 'px, 0px)';

		el1.style.webkitTransform = transform1;
		el1.style.MozTransform = transform1;
		el1.style.msTransform = transform1;
		el1.style.OTransform = transform1;
		el1.style.transform = transform1;

		// translate Element 2 with pos (plain speed)

		var transform2 = 'translate3d(0px, ' + -scrollPos + 'px, 0px)';

		// el2.style.webkitTransform = transform2;
		// el2.style.MozTransform = transform2;
		// el2.style.msTransform = transform2;
		// el2.style.OTransform = transform2;
		// el2.style.transform = transform2;

	}
}

function update(){
	render();
	window.requestAnimationFrame(update);
}
