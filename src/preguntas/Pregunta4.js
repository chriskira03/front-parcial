import React, { useState } from 'react';

const Pregunta4 = () => {
	const arregloPrimos = (cantidad) => {
		let num = 2;
		const arreglo = [];
		let valor = true;
		let numero = 0;
		while (numero < cantidad) {
			for (let i = 2; i < num; i++) {
				if (num % i === 0) {
					valor = false;
					break;
				}
			}
			if (valor) {
				arreglo.push(num);
				numero += 1;
			}
			num += 1;
			valor = true;
		}
		return arreglo;
	};
	const [cantidad, setCantidad] = useState(1);
	const resPrimo = arregloPrimos(cantidad);
	const [primo, setPrimo] = useState(resPrimo[resPrimo.length - 1]);
	const actualizar = (valor) => {
		const resPrimo = arregloPrimos(cantidad + valor);
		if (cantidad >= 1) {
			setPrimo(resPrimo[resPrimo.length - 1]);
			setCantidad(cantidad + valor);
		}
	};
	// const numeroPrimo = arregloPrimos(cantidad);
	return (
		<div>
			<div>
				{/* {lugares_turisticos.map((lugares) => ( */}
				<div className="card border border-2 shadow text-primary lead fs-4">
					<p className="lead fs-3 fw-bold text-success">
						<p>Numeros Primos</p>
					</p>
					<div className="card-header">
					</div>
					<div className="card-body">Numero Primo : {primo}</div>
				</div>
				{/* ))} */}
			</div>
			<botton className="btn btn-primary" onClick={() => actualizar(+1)}>
				Aumentar
			</botton>
			<botton
				className="btn btn-danger"
				onClick={() => {
					if (cantidad !== 1) {
						actualizar(-1);
					}
				}}>
				Disminuir
			</botton>
		</div>
	);
};

export default Pregunta4;
