const body = document.querySelector('body');
const burgerBtn = document.querySelector('.burger-btn');
const colorSchemeBtn = document.querySelector('.color-scheme-btn');
const colorSchemeBtnPill = document.querySelector('.color-scheme-btn__circle');
const nav = document.querySelector('.nav-mobile');
const navBackground = document.querySelector('.nav-mobile-background');
const colorSchemeBtnTextDark = document.querySelector('.dark');
const colorSchemeBtnTextLight = document.querySelector('.light');
const swooshLight = document.querySelector('.one-light');
const swooshDark = document.querySelector('.one-dark');
const swooshInnerLight = document.querySelector('.one');
const swooshInnerDark = document.querySelector('.twos');

let darkMode = localStorage.getItem('darkMode');

const enableDarkMode = () => {
	body.classList.add('dark-mode');
	localStorage.setItem('darkMode', 'enabled');
	swooshLight.classList.add('d-none');
	swooshDark.classList.remove('d-none');


	swooshInnerLight.classList.add('d-none');
	swooshInnerDark.classList.remove('d-none');
};

const disableDarkMode = () => {
	body.classList.remove('dark-mode');
	localStorage.setItem('darkMode', null);
	swooshDark.classList.add('d-none');
	swooshLight.classList.remove('d-none');


	swooshInnerLight.classList.remove('d-none');
	swooshInnerDark.classList.add('d-none');
};

if (darkMode == 'enabled') {
	enableDarkMode();
}

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

colorSchemeBtn.addEventListener('click', () => {
	darkMode = localStorage.getItem('darkMode');
	if (darkMode !== 'enabled') {
		enableDarkMode();
	} else {
		disableDarkMode();
	}
});
