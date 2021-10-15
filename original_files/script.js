
var previoussection;
var previoussectionid;
const menu = document.getElementById('menuid');
function OpenSection(id, h4) {
	var actualSection = document.getElementById(id);
	var actualSectionAfterIcon = document.getElementById(h4);
	

	if (actualSection != previoussection  && previoussection != null ) {
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

	const menuwidth = menu.clientWidth;
    if (menuwidth < 650) {
		const selector = "."+ id;
		document.querySelector(selector).appendChild(actualSection);
	}
	previoussection = actualSection;
	previoussectionid = actualSectionAfterIcon;

}

const proj_menu = document.getElementById('proj_menu');
(function($) {
    var slide = function(ele,options) {
        var $ele = $(ele);
        var setting = {
            speed: 432,
        };
        $.extend(true, setting, options);
        var states = [
            { $zIndex: 1, width: '25%', height: 240, top: 180, left: '0%', $opacity: 0.3, active:'sub-active'},
            { $zIndex: 2, width: '30%', top: 30, left: '36%', $opacity: 1, active:"active"},
            { $zIndex: 1, width: '25%', height: 240, top: 180, left: '75%', $opacity: 0.3, active:'sub-active'}
        ];

        var $lis = $ele.find('li');

        
        $ele.find('.hi-next').on('click', function() {
            next();
        });
        $ele.find('.hi-prev').on('click', function() {
            states.push(states.shift());
            move();
        });
        move();
        function move() {
            $lis.each(function(index, element) {
                var state = states[index];
                $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed)
                .find('img').css('opacity', state.$opacity)
                .css('left', state.left);
                if (state.active =='active') {
                    $(element).addClass("act")
                }else {
                     $(element).removeClass("act");
                }
            });
        }
        function next() {
            states.unshift(states.pop());
            move();
        }
    }
    $.fn.hiSlide = function(options) {
        $(this).each(function(index, ele) {
            slide(ele,options);
        });
        return this;
    }
})(jQuery);
