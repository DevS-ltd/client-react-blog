import React from 'react';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

class Header extends React.Component {
	state = {
		drawer: false,
	};

	render() {
		return (
			<>
				<Navbar onClickButton={() => this.toggleDrawer()} />
				<Sidebar open={this.state.drawer} onClose={() => this.toggleDrawer()} />
			</>
		);
	}

	toggleDrawer() {
		this.setState(state => {
			return {
				drawer: !state.drawer,
			};
		});
	}
}

export default Header;
