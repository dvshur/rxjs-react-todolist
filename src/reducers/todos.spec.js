import 'rxjs';

import todos$ from './todos'

import { addTodo$, toggleTodo$ } from "../actions";

import { pipe } from 'ramda'



describe('Todos reducer', () => {
	it('adds todo correctly', () => {

		todos$.take(4).toArray().subscribe((fns) => {
			const resultState = pipe(...fns)();

			expect(resultState.length).toBe(3);
			expect(resultState[2].text).toBe('Todo 2');
			expect(resultState[2].id).toBe(2);
			expect(resultState[0].id).toBe(0);
		});


		addTodo$.next('Todo 0')
		addTodo$.next('Todo 1')
		addTodo$.next('Todo 2')
	});



	it('toggles todo completes correctly by id', () => {

		todos$.take(7).toArray().subscribe((fns) => {
			const resultState = pipe(...fns)();

			expect(resultState[1].completed).toBe(false);
			expect(resultState[2].completed).toBe(true);
		});


		addTodo$.next('Todo 0')
		addTodo$.next('Todo 1')
		addTodo$.next('Todo 2')

		// toggle twice
		toggleTodo$.next(1)
		toggleTodo$.next(1)

		// toggle once
		toggleTodo$.next(2)

	});
})



