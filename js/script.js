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
});
