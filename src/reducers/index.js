import { Observable } from 'rxjs/Observable'

import todos$ from './todos'
import visibilityFilter$ from './visibilityFilter'



const todoApp$ = Observable.merge(
	todos$.map(reducer => ["todos", reducer]),
	visibilityFilter$.map(reducer => ["visibilityFilter", reducer])
)


export default todoApp$