import $ from 'jquery'; window.jQuery = $; window.$ = $ // import module example (npm i -D jquery)
// require('./other_script.js') // Require Other Script(s) from app/js folder Example

// document.addEventListener('DOMContentLoaded', () => {

	

// })

$(document).ready(function(){
	$('.header-burger, .overlay').on('click', function () {
		$('.overlay').toggleClass('active')
		$('.header-burger').toggleClass('active')
		$('.header-navMobile').toggleClass('active')
	})

	$('.header-languages, .overlay-language').on('click', function () {
		$('.arrow-list').toggleClass('active')
		$('.header-languages__list').toggleClass('active')
		$('.overlay-language').toggleClass('active')
	})
});
