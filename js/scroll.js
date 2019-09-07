var hey = document.getElementById('el2');
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

    var transform1 = 'translate3d(0px, ' + -(scrollPos/2) + 'px, 0px)';


		// translate Element 2 with pos (plain speed)

		var transform2 = 'translate3d(0px, ' + -scrollPos + 'px, 0px)';

		hey.style.webkitTransform = transform1;
		hey.style.MozTransform = transform1;
		hey.style.msTransform = transform1;
		hey.style.OTransform = transform1;
		hey.style.transform = transform1;

	}
}

function update(){
	render();
	window.requestAnimationFrame(update);
}
