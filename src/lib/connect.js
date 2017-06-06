import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default function connect(mapStateToProps = state => state, mapSubjectsToProps = {}) {

	let actions = {};

	if (typeof mapSubjectsToProps === 'object') {
		actions = Object.keys(mapSubjectsToProps)
			.reduce((akk, key) => ({ ...akk, [key]: value => mapSubjectsToProps[key].next(value) }), {});
	}

	return function wrapWithConnect(WrappedComponent) {
		return class Connect extends Component {
			static contextTypes = {
				state$: PropTypes.object.isRequired,
			};

			componentWillMount() {
				this.subscription = this.context.state$
					.map(state => mapStateToProps(state, this.props))
					.subscribe(val => this.setState(val));
			}

			componentWillUnmount() {
				this.subscription.unsubscribe();
			}

			render() {
				if (typeof mapSubjectsToProps === 'function') {
					actions = mapSubjectsToProps(this.props);
				}
				return (
					<WrappedComponent {...this.state} {...this.props} {...actions} />
				);
			}
		};
	};
}