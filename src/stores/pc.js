import { persist, localStorage } from '@macfja/svelte-persistent-store';
import { writable } from 'svelte/store';

export let wstate = persist(writable(), localStorage(), 'wstate');
export let selectedplatform = persist(writable(), localStorage(), 'selectedplatform');
export let selectedlang = persist(writable(), localStorage(), 'selectedlang');
