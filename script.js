
	var mybutton = document.getElementById("myBtn");
	var arrowImage = document.getElementById("arrow");

window.onscroll = function() {
	scrollFunction()
};


function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    		mybutton.style.display = "block";
  	} 
	else {
    		mybutton.style.display = "none";
  	}
	if (document.body.scrollTop < 650 ) {
    		arrowImage.style.display = "block";
  	} 
	else {
    		arrowImage.style.display = "none";
  	}
}

function pageDownFuntion(o) {
	window.scrollTo(0, 900);
}

function pageTopFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
