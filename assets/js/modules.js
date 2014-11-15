$(function(){
	var mobileNav = {
	    $nav: $('.nav-head'),
	    $toggle: $('.nav-toggle'),
	    hideClass: 'close',
	    init: function() {
	        var _this = this;
	        this.$nav.addClass(this.hideClass);

	        this.$toggle.click(function() {
	            if ( _this.$nav.hasClass(_this.hideClass) ) {
	                _this.$nav.hide().removeClass(_this.hideClass).slideDown('slow');
	                _this.$toggle.addClass(_this.hideClass);
	            } else {
	                _this.$nav.slideUp('slow', function() {
	                    _this.$nav.addClass(_this.hideClass).show();
	                });
	                _this.$toggle.removeClass(_this.hideClass);
	            }
	        });
	    }
	};
	mobileNav.init();

	$(document).on('keydown paste focus click', '.form-control', function () {
		$(this).parent('.form-group').addClass('filled');
	});

	$(document).on('blur', '.form-control', function () {
	    if ($(this).val() == '') {
	        $(this).parent('.form-group').removeClass('filled');
	    }
	});

	$('.form-control').each(function(){
		if($(this).val().length > 0) {
			$(this).parent('.form-group').addClass('filled');
		}
	});
});

var RK_MODULES = window.RK_MODULES || {};

RK_MODULES.flexslider = function() {
	$('.slider').flexslider({
		animation: 'slide', 
		directionNav: false,
	    controlNav: false
	});
};