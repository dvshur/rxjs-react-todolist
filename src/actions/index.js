import { Subject } from 'rxjs/Subject';


export const addTodo$ = new Subject();
export const toggleTodo$ = new Subject();
export const setVisibilityFilter$ = new Subject();