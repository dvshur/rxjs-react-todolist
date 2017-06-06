import { connect } from '../lib';

import AddTodo from '../components/AddTodo';

import { addTodo$ } from '../actions';



export default connect(
	s => s,
	_ => ({ onTodoAdd: text => addTodo$.next(text) })
)(AddTodo);