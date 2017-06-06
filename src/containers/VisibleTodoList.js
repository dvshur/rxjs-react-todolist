import { connect } from '../lib';

import TodoList from '../components/TodoList';

import { toggleTodo$ } from '../actions';


const getFilteredTodos = (filterValue, todos) => {
	switch(filterValue) {
		case 'SHOW_ACTIVE':
			return todos.filter(todo => !todo.completed);
		case 'SHOW_COMPLETED':
			return todos.filter(todo => todo.completed);
		default:
			return todos;
	}
}


export default connect(
	s => ({ todos: getFilteredTodos(s.visibilityFilter, s.todos) }),
	{ onTodoClick: toggleTodo$ }
)(TodoList);