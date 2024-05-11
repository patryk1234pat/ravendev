const burgerBtn = document.querySelector('.burger-btn');
const colorSchemeBtn = document.querySelector('.color-scheme-btn');
const colorSchemeBtnPill = document.querySelector('.color-scheme-btn__circle');
const nav = document.querySelector('.nav-mobile');
const navBackground = document.querySelector('.nav-mobile-background');
const body = document.querySelector('body');
const colorSchemeBtnTextDark = document.querySelector('.dark');
const colorSchemeBtnTextLight = document.querySelector('.light');

const handleNav = () => {
	nav.classList.toggle('nav-mobile--active');
	burgerBtn.classList.toggle('burger-btn--active');
	body.classList.toggle('disable-scroll');
	navBackground.classList.toggle('nav-mobile-background--active');
};

const handleColorScheme = () => {
	colorSchemeBtnPill.classList.toggle('color-scheme-btn__circle--active');
	colorSchemeBtnTextDark.classList.toggle('d-none');
	colorSchemeBtnTextLight.classList.toggle('d-none');
};

burgerBtn.addEventListener('click', handleNav);
colorSchemeBtn.addEventListener('click', handleColorScheme);
navBackground.addEventListener('click', handleNav);
