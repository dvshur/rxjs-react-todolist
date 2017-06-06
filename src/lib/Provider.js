import { Component, Children } from 'react'
import PropTypes from 'prop-types'


export function createProvider(storeKey = 'store') {

	class Provider extends Component {
		getChildContext() {
			return { [storeKey]: this[storeKey] }
		}

		constructor(props, context) {
			super(props, context)
			this[storeKey] = props[storeKey];
		}

		render() {
			return Children.only(this.props.children)
		}
	}

	Provider.displayName = 'Provider'

	Provider.propTypes = {
        [storeKey]: PropTypes.object.isRequired,
        children: PropTypes.element.isRequired,
    }
    Provider.childContextTypes = {
        [storeKey]: PropTypes.object.isRequired,
    }

	return Provider
}


export default createProvider('state$')