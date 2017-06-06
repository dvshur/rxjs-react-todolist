import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default function connect(selector = state => state, actionSubjects) {
	const actions = Object.keys(actionSubjects)
		.reduce((akk, key) => ({ ...akk, [key]: value => actionSubjects[key].next(value) }), {});

	return function wrapWithConnect(WrappedComponent) {
		return class Connect extends Component {
			static contextTypes = {
				state$: PropTypes.object.isRequired,
			};

			componentWillMount() {
				this.subscription = this.context.state$.map(selector).subscribe(val => this.setState(val));
			}

			componentWillUnmount() {
				this.subscription.unsubscribe();
			}

			render() {
				return (
					<WrappedComponent {...this.state} {...this.props} {...actions} />
				);
			}
		};
	};
}