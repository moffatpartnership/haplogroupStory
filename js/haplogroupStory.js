/**
 * Haplogroup Story
 */

// Ensure html element occupies whole viewport, even when window resized
$(document).ready(function() {

	$('html').css({ width: $(window).width() + 'px', height: $(window).height() + 'px' });

	$(window).bind('resize', function() {
		$('html').css({ width: $(window).width() + 'px', height: $(window).height() + 'px' });
	});
});
