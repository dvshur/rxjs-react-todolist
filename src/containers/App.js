import { connect } from '../lib';

import App from '../components/App';

import { addTodo$, toggleTodo$, setVisibilityFilter$ } from '../actions';



// export default connect(
// 	(state, props) => s, {
// 	onTodoLick: toggleTodo$,
// 	setVisibilityFilter: setVisibilityFilter$
// })(App);