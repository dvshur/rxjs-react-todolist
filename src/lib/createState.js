import { Observable } from 'rxjs/Observable';


const createState = (reducer$, initialState) => Observable
	.of(initialState)
	.merge(reducer$)
	.scan((state, [scope, reducer]) =>
		({ ...state, [scope]: reducer(state[scope]) }))
	.publishReplay(1)
	.refCount();



export default createState;