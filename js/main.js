const body = document.querySelector('.aboutus-body');
const burgerBtn = body.querySelector('.burger-btn');
const colorSchemeBtn = body.querySelector('.color-scheme-btn');
const colorSchemeBtn2 = body.querySelector('.color-scheme-btn2');
const colorSchemeBtnPill = body.querySelector('.color-scheme-btn__circle');
const nav = body.querySelector('.nav-mobile');
const navBackground = body.querySelector('.nav-mobile-background');
const colorSchemeBtnTextDark = body.querySelector('.dark');
const colorSchemeBtnTextLight = body.querySelector('.light');
const colorSchemeBtn2TextDark = body.querySelector('.dark-text');
const colorSchemeBtn2TextLight = body.querySelector('.light-text');

const swooshInnerLight = body.querySelector('.swoosh-one');
const swooshInnerDark = body.querySelector('.swoosh-two');

let darkMode = localStorage.getItem('darkMode');

const enableDarkMode = () => {
	body.classList.add('dark-mode');
	localStorage.setItem('darkMode', 'enabled');
	colorSchemeBtnTextDark.classList.remove('d-none');
	colorSchemeBtnTextLight.classList.add('d-none');
	colorSchemeBtn2TextDark.classList.remove('d-none');
	colorSchemeBtn2TextLight.classList.add('d-none');
	swooshInnerLight.classList.add('d-none')
	swooshInnerDark.classList.remove('d-none')
};

const disableDarkMode = () => {
	body.classList.remove('dark-mode');
	localStorage.setItem('darkMode', null);

	swooshInnerLight.classList.remove('d-none');
	swooshInnerDark.classList.add('d-none');

	colorSchemeBtnTextDark.classList.add('d-none');
	colorSchemeBtnTextLight.classList.remove('d-none');
	colorSchemeBtn2TextDark.classList.add('d-none');
	colorSchemeBtn2TextLight.classList.remove('d-none');
};

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

if (darkMode === 'enabled') {
	enableDarkMode();
}
