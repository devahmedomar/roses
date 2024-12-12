

document.addEventListener("DOMContentLoaded", function () {
	if (document.querySelector(".gallery-wrapper")) {
		// Gallery Thumbs
		const galleryThumbs = new Swiper(
			".gallery-wrapper .content .gallery.thumb .swiper-container",
			{
				speed: 900,
				effect: "slide",
				spaceBetween: 12,
				grabCursor: false,
				simulateTouch: true,
				loop: false,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
				navigation: {
					nextEl: ".gallery-wrapper .content .gallery.thumb .swiper-next-button",
					prevEl: ".gallery-wrapper .content .gallery.thumb .swiper-prev-button"
				},
				breakpoints: {
					320: {
						slidesPerView: 2,
						spaceBetween: 10
					},
					414: {
						slidesPerView: 3,
						spaceBetween: 10
					},
					768: {
						slidesPerView: 5,
						spaceBetween: 10
					},
					1024: {
						slidesPerView: 7,
						spaceBetween: 10
					}
				},
				autoplay: {
					delay: 3000, // Delay set to 3 seconds
					disableOnInteraction: false
				},
				on: {
					init: function () {
						const containerThumb = document.querySelector(
							".gallery-wrapper .content .gallery.thumb"
						);
						const containerThumbWidth = containerThumb.offsetWidth;

						let totalThumbWidth = 0;
						const thumbSlides = containerThumb.querySelectorAll(".swiper-slide");
						thumbSlides.forEach(function (slide) {
							totalThumbWidth += slide.offsetWidth;
						});

						const nextButton = containerThumb.querySelector(".swiper-next-button");
						const prevButton = containerThumb.querySelector(".swiper-prev-button");

						if (totalThumbWidth < containerThumbWidth) {
							nextButton.classList.add("hide");
							prevButton.classList.add("hide");
						} else {
							nextButton.classList.remove("hide");
							prevButton.classList.remove("hide");
						}
					}
				}
			}
		);

		// Gallery Full
		const galleryFull = new Swiper(
			".gallery-wrapper .content .gallery.full .swiper-container",
			{
				speed: 900,
				effect: "slide",
				slidesPerView: 3,
				spaceBetween: 100,
				centeredSlides: true,
                breakpoints:{

                    1024:{
                        slidesPerView: 3,
                        spaceBetween:150
                    },
                    768:{
                        slidesPerView: 3,
                        spaceBetween:100
                    },
                    480:{
                        slidesPerView: 3,
                        spaceBetween:10
                    },
                    320:{
                        slidesPerView: 3,
                        spaceBetween:50
                    },
                },

				autoplay: {
					delay: 3000,
					disableOnInteraction: false,
					stopOnLastSlide: false
				},
				keyboard: {
					enabled: true
				},
				grabCursor: false,
				simulateTouch: false,
				loop: true,
				navigation: {
					nextEl: ".gallery-wrapper .content .gallery.full .swiper-next-button",
					prevEl: ".gallery-wrapper .content .gallery.full .swiper-prev-button"
				},
				thumbs: {
					swiper: galleryThumbs
				},
				on: {
					slideChangeTransitionStart: function () {
						const overlays = document.querySelectorAll(
							".gallery-wrapper .content .gallery.full .swiper-slide .overlay"
						);
						overlays.forEach(function (overlay) {
							overlay.classList.remove("show");
						});
					},
					slideChangeTransitionEnd: function () {
						const activeSlide = document.querySelector(
							".gallery-wrapper .content .gallery.full .swiper-slide-active .overlay"
						);
						if (activeSlide) {
							activeSlide.classList.add("show");
						}
					}
				}
			}
		);
	}
});

window.addEventListener("load", function () {
	setTimeout(function () {
		const loader = document.querySelector(".loader");
		if (loader) {
			loader.style.display = "none";
		}
	}, 1000);
});

window.addEventListener("resize", function () {
    galleryFull.update();
});

AOS.init({
	duration: 1000, // Animation duration in milliseconds
	once: true,     // Whether animation should happen only once
	offset: 200,    // Offset from the top of the screen
  });
window.addEventListener('scroll', function () {
    const logo = document.querySelector('#logo'); // Target the logo image
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        navbar.classList.add('navbar-dark');
        logo.src = 'assets/imgs/logo_white_text.png'; // Change to light logo
    } else {
		navbar.classList.remove('navbar-dark');
        navbar.classList.remove('scrolled');
        logo.src = 'assets/imgs/logo.png'; // Change back to original logo
    }
});
