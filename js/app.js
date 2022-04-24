window.addEventListener('DOMContentLoaded', function() {
	
	let navItem = document.querySelectorAll('.nav__item'),
	navLink = document.querySelectorAll('.nav__item > a');

	navLink.forEach( function(e, i) {

		e.addEventListener('click', function() {
			let target = i;
			navItem.forEach( function(e) {
				e.classList.remove('active');
				navItem[target].classList.add('active');
			});

		});
	});

	// swiper

	const swiper = new Swiper('.swiper', {
  		direction: 'horizontal',
  		loop: true,
  		pagination: {
  			el: '.swiper-pagination',
  			clickable: true
  		},
  		 autoplay: {
   			delay: 5000,
   			disableOnInteraction: false,
   			pauseOnMouseEnter: true,
 		},
	});

});