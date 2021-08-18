
var previoussection;
var previoussectionid;
var menu = document.getElementById('menuid');
function OpenSection(id, h4) {

	var menuwidth = menu.clientWidth;
	var actualSection = document.getElementById(id);
	var actualSectionAfterIcon = document.getElementById(h4);
	if (menuwidth < 650) {
		const selector = "."+ id;
		document.querySelector(selector).appendChild(actualSection);
	}

	if (actualSection != previoussection && previoussection != null ) {
		previoussectionid.classList.remove("active");
		previoussection.classList.add("unshow");
		previoussection.classList.remove("show");
	}
	if (actualSection.classList.contains("unshow")) {
		actualSection.classList.add("show");
		actualSection.classList.remove("unshow");
		actualSectionAfterIcon.classList.add("active");
	}
	else {
		actualSection.classList.add("unshow");
		actualSection.classList.remove("show");
		actualSectionAfterIcon.classList.remove("active");
	}
	previoussection = actualSection;
	previoussectionid = actualSectionAfterIcon;

}