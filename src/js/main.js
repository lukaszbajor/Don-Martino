const burger = document.querySelector(".nav__burger");
const menu = document.querySelector(".nav__list");

const allMenuItems = document.querySelectorAll(".nav__link");
const allBars = document.querySelectorAll(".page__bar");
const allArrows = document.querySelectorAll(".fa-angle-down");

const footerYear = document.querySelector(".footer__year");

const menuBurger = () => {
	burger.classList.toggle("nav__burger--active");
	menu.classList.toggle("nav__list--showMenu");
};

allMenuItems.forEach((item) => {
	item.addEventListener("click", () => {
		burger.classList.toggle("nav__burger--active");
		menu.classList.toggle("nav__list--showMenu");
	});
});

burger.addEventListener("click", menuBurger);

allBars.forEach((bar) => {
	bar.addEventListener("click", () => {
		const answer = bar.nextElementSibling;
		const isOpen = answer.classList.contains("page__answer--open");

		document.querySelectorAll(".page__answer").forEach((item) => {
			item.classList.remove("page__answer--open");
			bar.classList.remove("page__bar--openBar");
		});
		document.querySelectorAll(".page__bar").forEach((item) => {
			item.classList.remove("page__bar--openBar");
		});
		document.querySelectorAll(".fa-angle-down").forEach((item) => {
			item.classList.remove("fa-angle-down--active");
		});

		if (!isOpen) {
			answer.classList.add("page__answer--open");
			bar.classList.add("page__bar--openBar");
			bar.children[2].classList.add("fa-angle-down--active");
		}
	});
});

const currentYear = function () {
	const year = new Date().getFullYear();
	footerYear.textContent = year + " ";
};
currentYear();

const infoButtons = document.querySelectorAll(".info-button");
const infoModals = document.querySelectorAll(".info-modal");

infoButtons.forEach((button) => {
	button.addEventListener("click", () => {
		const modalId = button.dataset.tooltip;
		const modal = document.getElementById(modalId);

		if (!modal) return;

		modal.classList.add("active");
		document.body.style.overflow = "hidden";
	});
});

infoModals.forEach((modal) => {
	const closeButton = modal.querySelector(".info-modal__close");

	closeButton.addEventListener("click", () => {
		modal.classList.remove("active");
		document.body.style.overflow = "";
	});

	modal.addEventListener("click", (event) => {
		if (event.target === modal) {
			modal.classList.remove("active");
			document.body.style.overflow = "";
		}
	});
});

document.addEventListener("keydown", (event) => {
	if (event.key === "Escape") {
		infoModals.forEach((modal) => {
			modal.classList.remove("active");
		});

		document.body.style.overflow = "";
	}
});
const aboutSlides = document.querySelectorAll(".about__slide");
const aboutDots = document.querySelectorAll(".about__dot");

let aboutCurrentSlide = 0;
let aboutInterval;

// ========================================
// POKAŻ KONKRETNE ZDJĘCIE
// ========================================

function showAboutSlide(index) {
	aboutSlides.forEach((slide) => {
		slide.classList.remove("active");
	});

	aboutDots.forEach((dot) => {
		dot.classList.remove("active");
	});

	aboutSlides[index].classList.add("active");

	aboutDots[index].classList.add("active");

	aboutCurrentSlide = index;
}

// ========================================
// NASTĘPNE ZDJĘCIE
// ========================================

function nextAboutSlide() {
	const nextSlide = (aboutCurrentSlide + 1) % aboutSlides.length;

	showAboutSlide(nextSlide);
}

// ========================================
// START AUTOMATYCZNEGO SLIDERA
// ========================================

function startAboutSlider() {
	aboutInterval = setInterval(nextAboutSlide, 5000);
}

// ========================================
// RESET TIMERA
// ========================================

function resetAboutSlider() {
	clearInterval(aboutInterval);

	startAboutSlider();
}

// ========================================
// KROPKI
// ========================================

aboutDots.forEach((dot, index) => {
	dot.addEventListener("click", () => {
		showAboutSlide(index);

		resetAboutSlider();
	});
});

// ========================================
// URUCHOMIENIE
// ========================================

if (aboutSlides.length > 0) {
	showAboutSlide(0);

	startAboutSlider();
}
