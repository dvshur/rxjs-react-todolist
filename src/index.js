import 'rxjs'

import React from 'react'
import { render } from 'react-dom'

import { Observable } from 'rxjs/Observable'

// state management lib
import { createState } from './lib'
// import { Provider } from 'react-redux'


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
		render(
			<App />,
			document.getElementById('root')
		)
	},
	err => console.error(err)
);

