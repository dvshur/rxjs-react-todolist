import 'rxjs';

import visibilityFilter$ from './visibilityFilter'

import { setVisibilityFilter$ } from "../actions";

import { pipe } from 'ramda'



describe('Visibility filter reducer', () => {
	it('sets filter correctly', () => {

		visibilityFilter$.take(2).toArray().subscribe((fns) => {
			const resultState = pipe(...fns)();

			expect(resultState).toBe('HIDE_COMPLETED');
		});


		setVisibilityFilter$.next('HIDE_COMPLETED')
		
	});
})



