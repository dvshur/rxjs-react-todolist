import 'rxjs'

import React from 'react'
import { render } from 'react-dom'


// state management lib
import { createState, Provider } from './lib'


import App from './components/App'
import reducer$ from './reducers'



const state$ = createState(
	reducer$,
	{
		todos: [],
		visibilityFilter: 'SHOW_ALL'
	}
)



state$.subscribe(
	state => {
		console.log(state); // @TODO remove_debug
		render(
			<Provider state$={state$}>
				<App />
			</Provider>,
			document.getElementById('root')
		)
	},
	err => console.error(err)
);

