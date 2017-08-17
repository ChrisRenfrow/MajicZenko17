import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

const styles = {
	nav: {
    	display: 'inline',
    	margin: 0,
    	padding: 0,
    	overflow: 'hidden',
    	color: '#fff',
      	backgroundColor: '#000',
	},
	list: {
		float: 'left',
		fontSize: 20,
		color: 'white',
	}
}

class NavBar extends Component {
	render () {

	    return (
	    	<div style={styles.nav}>
	    		<div style={styles.list}>8======D</div>
    		</div>
	    )

	}
}

export default NavBar;
