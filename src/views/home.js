/** @format */

import React, { useState, useEffect } from 'react';
import Componente1 from '../components/componente1';
import Componente2 from '../components/componente2';

const Home = () => {
	const [mostar, setMostrat] = useState({
		state: false,
		message: 'soy el titulo'
	});

	const [count, setCount] = useState(0);

	const [data, setData] = useState(null);

	const aumenta = () => {
		setCount(count + 1);
	};
	const restar = () => {
		if (count >= 0) {
			setCount(count - 1);
		}
	};

	const mostrar = () => {
		setMostrat(prevs => ({ ...prevs, state: !prevs.state }));
	};

	useEffect(() => {
		setData([]);
	}, []);

	const prueba = message => {
		alert(message);
	};

	if (!data) {
		return <div>cargando ...</div>;
	}

	return (
		<div>
			<div>Home</div>
			<button onClick={aumenta}> mostrar</button>
			<button onClick={restar}>restar</button>
			{count}
			{mostar.state && (
				<div>
					{mostar.message}
					<Componente1 alert={prueba} title='los gatitos'>
						<div>soy un hijo</div>
						<div>dasldk</div>
					</Componente1>
					<Componente2
						color='red'
						data={[0, 2, 3, 4]}
						message='es te us mensaje'
					/>
				</div>
			)}
		</div>
	);
};

export default Home;
