// @ts-ignore
import { init, getLocaleFromNavigator, addMessages, getLocaleFromQueryString } from 'svelte-i18n';

// @ts-ignore
import en from '../languages/en.json';
// @ts-ignore
import de from '../languages/de.json';

addMessages('en', en);
addMessages('en-US', en);
addMessages('en-GB', en);
addMessages('de', de);

init({
	fallbackLocale: 'en',
	initialLocale: getLocaleFromQueryString('lang') || getLocaleFromNavigator()
});
