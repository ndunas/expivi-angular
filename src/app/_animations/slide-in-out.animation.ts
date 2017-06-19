import { trigger, state, animate, transition, style, keyframes } from '@angular/core';

export const slideInOutAnimation =
    trigger('slideInOutAnimation', [
 
        transition(':enter', [
            state('inactive', style({
                transform: 'scale(1)',
                backgroundColor: '#eee'
            })),

            state('active', style({
                transform: 'scale(1.1)',
                backgroundColor: '#cfd8dc'
            })),

            transition('inactive => active', animate('100ms ease-in')),
            
            transition('active => inactive', animate('100ms ease-out'))
        ]),
    ]);