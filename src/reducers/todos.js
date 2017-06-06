import { Observable } from "rxjs/Observable";

import { addTodo$, toggleTodo$ } from "../actions";


// todos
const initialState = [];

const todos$ = Observable
	.of(() => initialState)
	.merge(
		addTodo$.map(text => state => [
			...state,
			{
				text,
				id: state[state.length - 1] ? state[state.length - 1].id + 1 : 0,  // automatically increment id
				completed: false
			}
		]),
		toggleTodo$.map(id => state => state.map(todo => {
			return id !== todo.id ?
				todo :
				{
					...todo,
					completed: !todo.completed
				}
		}))
	);




export default todos$;