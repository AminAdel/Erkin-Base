// jQuery Required;
// remember to control errors; may stop functioning by any other errors;

// 1st : include jquery;
// 2ns : include this js file;
/*******************************/
$(document).ready(function () {
	
	erkin = new class_erkin();
	erkin.copyClass();
	erkin.same();
	
});

function class_erkin () {
	
	this.same = function() {
		/*
		 * this function is for easy duplicating classes for elements,
		 * for example each li element in a row could have same classes and styles
		 * for these cases, set arbitrary classes to first li element, and for others just set the 'same' class,
		 * erkin will control the rest;
		 * *********
		 * to copy classes from remote element look erkin_copyClass
		 */
		
		/*
		 * Example :
		 * <ul>
		 * 		<li class="fl_r pdn_10 mgb_10 red"><!-- li data --></li>
		 * 		<li class="same"><!-- li data --></li>
		 * 		<li class="same"><!-- li data --></li>
		 * </ul>
		 */
		var sameElements = $('.same');
		if (sameElements.length > 0) {
			for (var i=0; i < sameElements.length; i++) {
				// this looks fine;
				$(sameElements[i]).removeClass('same');
				$(sameElements[i]).addClass( $($(sameElements[i]).prev()).attr('class') );
			}
		}
	}
	
	this.copyClass = function() {
		/* 
		 * this function should run before erkin_same; because 'same' classes may depend on that;
		 * ****************
		 * Example :
		 * <ul id="someID">
		 * 		<li class="fl_r pdn_10 red"><!-- li data --></li>
		 * 		<li class="same"><!-- li data --></li>
		 * </ul>
		 * ...
		 * <ul>
		 * 		<li class="copy" data-copyClass="#someID > li"><!-- li data --></li>
		 * </ul>
		 * *********
		 * if multiple sources found; erkin will get the first one; but it will check availability;
		 * it means that if the source has 'copy' or 'same' class, it will wait until it's job finish,
		 */
		
		
		var trys = 1;
		do {
			var copyElements = $('.copy');
			var rerun = false;
			
			if (copyElements.length > 0) {
				for (var i=0; i < copyElements.length; i++) {
					if ($($(copyElements[i]).attr('data-copyClass')).hasClass('copy')) {
						rerun = true;
						continue;
					}
					/*var srcClass = $($(copyElements[i]).attr('data-copyClass')).attr('class');
					//console.log(   srcClass   );
					if ( srcClass == 'copy' ) {
						rerun = true;
						continue;
					}*/
					// else :
					var srcClass = $($(copyElements[i]).attr('data-copyClass')).attr('class');
					$(copyElements[i]).removeClass('copy');
					$(copyElements[i]).addClass(srcClass);
					$(copyElements[i]).removeAttr('data-copyClass');
				}
			}
			
			trys++;
			// emergency stopper;
			if (trys > 20) break;
		} while (rerun != false);
	}
	
	
}
