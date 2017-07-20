import { Observable } from 'rxjs/Observable';


const createState = (reducer$, initialState = {}) => 
	Observable
		.of(initialState)
		.merge(reducer$)
		.do(val => console.log(val)) // @TODO remove_debug
		.scan((state, [scope, reducer]) =>
			({ ...state, [scope]: reducer(state[scope]) }))
		.publishReplay(1)
		.refCount();



export default createState;