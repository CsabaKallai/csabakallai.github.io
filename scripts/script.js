var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

function myFunction(id) {
        var x = document.getElementById(id);
        if (x.className == "unshow") {
            x.className = " show";
        }
    }

function closingyt(id) {
        var x = document.getElementById(id);
        if (x.className == "show") {
            x.className = "unshow";
        }
    }

var previoussection;
var previoussectionid;
function OpenSection(id, h4) {
	
	var menu = document.getElementById('menuid').clientWidth; 
      	var x;
	var y = document.getElementById(h4);
	if ( menu < 650) {
		x = document.getElementById( (id+='1') );
		
	}
	else {
		x = document.getElementById(id);
	}
	if (previoussection != null && x != previoussection) {
		previoussectionid.classList.remove("active");
		previoussection.classList.add("unshow");
            		previoussection.classList.remove("show");
	}
        	if (x.classList.contains("unshow")) {
            		x.classList.add("show");
            		x.classList.remove("unshow");
            		y.classList.add("active");
        	}
        	else {
		x.classList.add("unshow");
            		x.classList.remove("show");
		y.classList.remove("active");
        	}

		
		previoussection = x;
		previoussectionid = y;

}