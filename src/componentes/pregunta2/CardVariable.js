import React, { useContext, useEffect, useRef, useState } from 'react';

const CardVariable = ({ lugares_turisticos }) => {
	// const { lugares_turista } = lugares_turisticos;
	const [verdad, setVerdad] = useState(true);

	const [variable, setVariable] = useState(0);
	const lugares = lugares_turisticos[variable];
	const incrementar = () => {
		if (verdad) {
			if (variable < lugares_turisticos.length - 1) {
				setVariable(variable + 1);
			} else {
				setVariable(0);
			}
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
						<p>Mejores Lugares turisticos por Continente</p>
						{/* Detalle producto: precio: S/. {producto.precio} */}
					</p>
					<div className="card-header">
						<p>Nombre: {lugares.nombre}</p>
						<p>Valoracion: {lugares.valoracion}</p>
						<p>continente: {lugares.continente}</p>
					</div>
					<div className="card-body">
						<img
							src={lugares.imagen}
							alt="producto"
							className="img-fluid"
							width="40%"
						/>
					</div>
					<div className="card-footer">
						Descripcion: {lugares.descripcion}
					</div>
				</div>
				{/* ))} */}
			</div>
			<botton
				className="btn btn-primary"
				onClick={() => setVerdad(false)}>
				Parar
			</botton>
			<botton className="btn btn-danger" onClick={() => setVerdad(true)}>
				Seguir
			</botton>
		</div>
	);
};

export default CardVariable;
