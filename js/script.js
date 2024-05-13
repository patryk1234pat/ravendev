const body = document.querySelector('body');
const burgerBtn = document.querySelector('.burger-btn');
const colorSchemeBtn = document.querySelector('.color-scheme-btn');
const colorSchemeBtn2 = document.querySelector('.color-scheme-btn2');
const colorSchemeBtnPill = document.querySelector('.color-scheme-btn__circle');
const nav = document.querySelector('.nav-mobile');
const navBackground = document.querySelector('.nav-mobile-background');
const colorSchemeBtnTextDark = document.querySelector('.dark');
const colorSchemeBtnTextLight = document.querySelector('.light');
const colorSchemeBtn2TextDark = document.querySelector('.dark-text');
const colorSchemeBtn2TextLight = document.querySelector('.light-text');

const swooshLight = document.querySelector('.one-light');
const swooshDark = document.querySelector('.one-dark');
const swooshInnerLight = document.querySelector('.swoosh-one');
const swooshInnerDark = document.querySelector('.swoosh-two');
const logoDarkModeText = document.querySelector('.asd');

let darkMode = localStorage.getItem('darkMode');

const enableDarkMode = () => {
	body.classList.add('dark-mode');
	localStorage.setItem('darkMode', 'enabled');
	swooshLight.classList.add('d-none');
	swooshDark.classList.remove('d-none');

	swooshInnerLight.classList.add('d-none');
	swooshInnerDark.classList.remove('d-none');

	colorSchemeBtnTextDark.classList.remove('d-none');
	colorSchemeBtnTextLight.classList.add('d-none');
	colorSchemeBtn2TextDark.classList.remove('d-none');
	colorSchemeBtn2TextLight.classList.add('d-none');
};

const disableDarkMode = () => {
	body.classList.remove('dark-mode');
	localStorage.setItem('darkMode', null);
	swooshDark.classList.add('d-none');
	swooshLight.classList.remove('d-none');

	swooshInnerLight.classList.remove('d-none');
	swooshInnerDark.classList.add('d-none');

	colorSchemeBtnTextDark.classList.add('d-none');
	colorSchemeBtnTextLight.classList.remove('d-none');
	colorSchemeBtn2TextDark.classList.add('d-none');
	colorSchemeBtn2TextLight.classList.remove('d-none');
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

burgerBtn.addEventListener('click', handleNav);
navBackground.addEventListener('click', handleNav);

colorSchemeBtn.addEventListener('click', () => {
	darkMode = localStorage.getItem('darkMode');
	if (darkMode !== 'enabled') {
		enableDarkMode();
	} else {
		disableDarkMode();
	}
});
colorSchemeBtn2.addEventListener('click', () => {
	darkMode = localStorage.getItem('darkMode');
	if (darkMode !== 'enabled') {
		enableDarkMode();
	} else {
		disableDarkMode();
	}
});
