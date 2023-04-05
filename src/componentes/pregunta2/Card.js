import React, { useEffect, useState } from 'react';

const Card = ({ lugares_turisticos, cont }) => {
	const [variable, setVariable] = useState(0);
	const lugares = lugares_turisticos[variable];
	const incrementar = () => {
		if (variable < lugares_turisticos.length - 1) {
			setVariable(variable + 1);
		} else {
			setVariable(0);
		}
	};
	useEffect(() => {
		let x = setInterval(() => {
			incrementar();
		}, 2000);
		return () => {
			clearInterval(x);
		};
	});
	return (
		<div>
			<div>
				{/* {lugares_turisticos.map((lugares) => ( */}
				<div className="card border border-2 shadow text-primary lead fs-4">
					<p className="lead fs-3 fw-bold text-success">
						<p>Lugares turisticos del continete: {cont}</p>
						{/* Detalle producto: precio: S/. {producto.precio} */}
					</p>

					<p className="lead fs-3 fw-bold text-success">
						{/* Detalle producto: precio: S/. {producto.precio} */}
					</p>
					<div className="card-header">
						<p>Nombre: {lugares.nombre}</p>
						<p>Valoracion: {lugares.valoracion}</p>
						<p>Continente: {lugares.continente}</p>
					</div>
					<div className="card-body">
						<img
							src={lugares.imagen}
							alt="producto"
							className="img-fluid"
							width="400px"
							height="400px"
						/>
					</div>
					<div className="card-footer">
						Descripcion: {lugares.descripcion}
					</div>
				</div>
				{/* ))} */}
			</div>
		</div>
	);
};

export default Card;
