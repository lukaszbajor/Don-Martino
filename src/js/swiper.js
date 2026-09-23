document.addEventListener("DOMContentLoaded", function () {
	const swiper = new Swiper(".swiper-container", {
		slidesPerView: 1,
		spaceBetween: 20,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			// when window width is >= 576px
			576: {
				slidesPerView: 2,
				spaceBetween: 25,
			},
			// when window width is >= 992px
			992: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
		},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
	});
});
