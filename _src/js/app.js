import * as plugFunctions from './modules/functions.js';
plugFunctions.isWebp();
plugFunctions.btnMenu();

import { accordion } from './modules/accordion.js';
new accordion('#accordion', {
	alwaysOpen: false
});