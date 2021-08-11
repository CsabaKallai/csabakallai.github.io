

var previoussection;
var previoussectionid;
const menu = document.getElementById('menuid');
function OpenSection(id, h4) {
	
	const menuwidth = menu.clientWidth; 
    var x;
	let y = document.getElementById(h4);
	if ( menuwidth < 650) {
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