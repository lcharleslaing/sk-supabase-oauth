// src/lib/theme.js
import { writable } from 'svelte/store';

export const themes = [
	'light',
	'dark',
	'cupcake',
	'bumblebee',
	'emerald',
	'corporate',
	'synthwave',
	'retro',
	'cyberpunk',
	'valentine',
	'halloween',
	'garden',
	'forest',
	'aqua',
	'lofi',
	'pastel',
	'fantasy',
	'wireframe',
	'black',
	'luxury',
	'dracula',
	'cmyk',
	'autumn',
	'business',
	'acid',
	'lemonade',
	'night',
	'coffee',
	'winter',
	'dim',
	'nord',
	'sunset'
];

// Function to check if local storage is available in the browser
function isLocalStorageAvailable() {
	if (typeof window !== 'undefined') {
		try {
			localStorage.setItem('test', 'test');
			localStorage.removeItem('test');
			return true;
		} catch (e) {
			return false;
		}
	}
	return false;
}

// Initialize the selected theme with the default theme or the one from local storage
export const selectedTheme = writable(
	isLocalStorageAvailable() ? localStorage.getItem('theme') || 'light' : 'lofi'
);

// Subscribe to changes in the selected theme and update local storage
selectedTheme.subscribe((value) => {
	if (isLocalStorageAvailable()) {
		localStorage.setItem('theme', value);
	}
});
