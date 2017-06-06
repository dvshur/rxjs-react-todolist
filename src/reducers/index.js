import { merge } from 'rxjs/operator/merge'

import todos$ from './todos'
import visibilityFilter$ from './visibilityFilter'



const todoApp$ = merge(
	todos$.map(reducer => ["todos", reducer]),
	visibilityFilter$.map(reducer => ["visibilityFilter", reducer])
)


export default todoApp$