import { writable } from "svelte/store";

// Defaults to the cinema_id of Pathé Delft (18)
export const cinema_id = writable("18");
export const moviesLoaded = writable(false);
export const movies = writable([]);