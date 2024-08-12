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
	item.addEventListener('click', function (e) {
		// Предотвращаем переход по ссылке
		e.preventDefault();

		// Закрываем другие открытые блоки
		headerItems.forEach((i) => {
			if (i !== item) {
				i.classList.remove('active');
			}
		});

		// Переключаем активный класс
		this.classList.toggle('active');
	});
});

// Закрываем выпадающие блоки при клике вне элемента
document.addEventListener('click', function (e) {
	if (!e.target.closest('.bottom-header__item')) {
		headerItems.forEach((item) => {
			item.classList.remove('active');
		});
	}
});
