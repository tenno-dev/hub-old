// @ts-ignore
import { persist, localStorage } from '@macfja/svelte-persistent-store';
// @ts-ignore
import { writable } from 'svelte/store';

export let wstate = persist(writable(), localStorage(true), 'wstate');
export let selectedplatform = persist(writable(), localStorage(true), 'selectedplatform');
export let selectedlang = persist(writable(), localStorage(true), 'selectedlang');
