/** @format */

import React from 'react';

const Comonente2 = props => {
	return (
		<div>
			{props.data.map(e => (
				<div style={{ background: props.color }}>
					componente2 : {props.message}
					{e}
				</div>
			))}
		</div>
	);
};

export default Comonente2;
