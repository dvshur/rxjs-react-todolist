import { connect } from '../lib';

import Link from '../components/Link';

import { setVisibilityFilter$ } from '../actions';



export default connect(
	(s, p) => ({ active: s.visibilityFilter === p.filter }),
	(p) => ({ onClick: () => setVisibilityFilter$.next(p.filter) })
)(Link);