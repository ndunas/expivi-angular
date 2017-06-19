import { trigger, state, animate, transition, style, keyframes } from '@angular/core';

export const fadeInAnimation =
	trigger('fadeInAnimation', [
	    transition(':enter', [

	        style({ opacity: 0 }),

	        animate('.3s', style({ opacity: 1 }))
	    ]),
	]);