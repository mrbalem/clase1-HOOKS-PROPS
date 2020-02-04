/** @format */

import React from 'react';
const Componente1 = props => {
	const ejecuta = () => {
		props.alert('hola');
	};

	return (
		<div>
			<div>Componente1: {props.title} </div>
			<button onClick={() => ejecuta()}> preciona</button>
			{props.children}
		</div>
	);
};

export default Componente1;
