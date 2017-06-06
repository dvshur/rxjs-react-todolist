import { Observable } from "rxjs/Observable";

import { setVisibilityFilter$ } from "../actions/index";



const initialState = 'SHOW_ALL';

const visibilityFilter$ = Observable
	.of(() => initialState)
	.merge(
		setVisibilityFilter$.map(payload => () => payload),
	);




export default visibilityFilter$;