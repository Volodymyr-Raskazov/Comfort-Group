import * as plugFunctions from './modules/functions.js';
plugFunctions.isWebp();

const menu = document.getElementById('menu');
const menuBtn = document.getElementById('menu-btn');

menuBtn.addEventListener('click', () => {
	menu.classList.toggle('_active');
	menuBtn.classList.toggle('_active');
});

import { ItcAccordion } from './accordion.js';
new ItcAccordion('#accordion', {
	alwaysOpen: false
});