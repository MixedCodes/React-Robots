import React from 'react';

const Scroll = (props) => {
	return(
		<div style={{ overflowY: 'scroll', broder: '3px solid #17468b', height: '800px' }}>
			{props.children}
		</div>
	);
};

export default Scroll;