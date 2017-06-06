import { Observable } from "rxjs/Observable";

import { addTodo$, toggleTodo$ } from "../actions/index";


// todos
const initialState = [];

const todos$ = Observable
	.of(() => initialState)
	.merge(
		addTodo$.map(action => state => [
			...state,
			{
				...action,
				completed: false
			}
		]),
		toggleTodo$.map(action => state => state.map(todo => {
			return action.id !== todo.id ?
				todo :
				{
					...todo,
					completed: !todo.completed
				}
		}))
	);




export default todos$;