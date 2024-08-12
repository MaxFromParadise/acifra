'use strict';
const locationMainHeader = document.querySelector('.location-main-header');
const burger = document.querySelector('.burger');

locationMainHeader.addEventListener('click', () => {
	locationMainHeader.classList.toggle('location-main-header_active');
});

burger.addEventListener('click', function () {
	this.classList.toggle('active');
	//
	document.querySelector('.bottom-header').classList.toggle('open');
	// document.body.classList.toggle('lock');
});
const headerItems = document.querySelectorAll('.bottom-header__item');

headerItems.forEach((item) => {
	const link = item.querySelector('.bottom-header__link');
	const dropdown = item.querySelector('.bottom-header__dropdown');

	link.addEventListener('click', function (e) {
		if (dropdown && window.innerWidth < 992) {
			e.preventDefault();
		}

		headerItems.forEach((i) => {
			if (i !== item) {
				i.classList.remove('active');
			}
		});

		item.classList.toggle('active');
	});
});

document.addEventListener('click', function (e) {
	if (!e.target.closest('.bottom-header__item')) {
		headerItems.forEach((item) => {
			item.classList.remove('active');
		});
	}
});

window.addEventListener('resize', function () {
	if (window.innerWidth >= 992) {
		headerItems.forEach((item) => {
			item.classList.remove('active');
		});
	}
});
