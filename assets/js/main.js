/*
	Spectral by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel
		.breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$wrapper = $('#page-wrapper'),
			$banner = $('#banner'),
			$header = $('#header');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Mobile?
			if (skel.vars.mobile)
				$body.addClass('is-mobile');
			else
				skel
					.on('-medium !medium', function() {
						$body.removeClass('is-mobile');
					})
					.on('+medium', function() {
						$body.addClass('is-mobile');
					});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Scrolly.
			$('.scrolly')
				.scrolly({
					speed: 1500,
					offset: $header.outerHeight()
				});

		// Menu.
			$('#menu')
				.append('<a href="#menu" class="close"></a>')
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right',
					target: $body,
					visibleClass: 'is-menu-visible'
				});

		// Header.
			if (skel.vars.IEVersion < 9)
				$header.removeClass('alt');

			if ($banner.length > 0
			&&	$header.hasClass('alt')) {

				$window.on('resize', function() { $window.trigger('scroll'); });

				$banner.scrollex({
					bottom:		$header.outerHeight() + 1,
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt'); },
					leave:		function() { $header.removeClass('alt'); }
				});

			}

	});
            
    var random = Math.floor(Math.random()*5)
    var person
    var picture
    var quote
    if( random == 0 ) {
        person = "-Amelia Earhart"
        picture = "amelia"
        quote = "THE MOST DIFFICULT THING IS THE DECISION TO ACT, THE REST IS MERELY TENACITY. THE FEARS ARE PAPER TIGERS. YOU CAN DO ANYTHING YOU DECIDE TO DO. YOU CAN ACT TO CHANGE AND CONTROL YOUR LIFE; AND THE PROCEDURE, THE PROCESS IS ITS OWN REWARD."
    } else if ( random == 1 ) {
        person = "-Nelson Mandella"
        picture = "nelson"
        quote = "IT ALWAYS SEEMS IMPOSSIBLE UNTIL IT’S DONE." 
    } else if ( random == 2 ) {
        person = "-Richard Branson"
        picture = "richard"
        quote = "YOU DON’T LEARN TO WALK BY FOLLOWING RULES. YOU LEAN BY DOING, AND FALLING OVER." 
    } else if ( random == 3 ) {
        person = "-Steve Jobs "
        picture = "steve"
        quote = "HAVE THE COURAGE TO FOLLOW YOUR HEAR AND INTUITION. THEY SOMEHOW KNOW WHAT YOU WANT TO BECOME." 
    } else if ( random == 4 ) {
        person = "-Yoda"
        picture = "yoda"
        quote = "DO. OR DO NOT. THERE IS NO TRY." 
    } 
    $( "#picQuote" ).append( quote );
    $( "#picPerson" ).append( person );
    var newPic = picture+ ".png"
    $( "#picPicture" ).append( '<img src="images/' + newPic + '">'  )
    // console.log('<img src=' + picture + '.png>' )
    
})(jQuery);
