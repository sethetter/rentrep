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

  // Check for initial form values filled in, race condition, awesome..
  setTimeout(function() {
    $('.form-control').each(function() {
      if (this.value !== '') {
        $(this).parent('.form-group').addClass('filled');
      }
    });
  }, 1000);

	var mobilelogin = {
	    $login: $('.login-dropdown'),
	    $toggle: $('.login-toggle'),
	    showClass: 'open',
	    init: function() {
	    	var _this = this;
	        this.$toggle.click(function() {
	            $(this).parent().toggleClass(_this.showClass);
	            return false;
	        });
	    }
	};
	mobilelogin.init();

	$('.close-alert').on('click', function(){
		$(this).parent().fadeOut(300);
	});

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
