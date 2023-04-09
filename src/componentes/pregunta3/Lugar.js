import React from 'react';
import { useParams } from 'react-router-dom';
import { lugares } from '../../data/lugares';

const Lugar = () => {
	const { id } = useParams();

	const { lugares_turisticos } = lugares;
	const lugaresConMayorValoracion = lugares_turisticos.reduce(
		(obj, lugar) => {
			if (!obj[lugar.continente]) {
				obj[lugar.continente] = lugar;
			} else if (obj[lugar.continente].valoracion < lugar.valoracion) {
				obj[lugar.continente] = lugar;
			}
			return obj;
		}
	);
	const lugaresFiltrados = Object.values(lugaresConMayorValoracion);

	const lugar = lugaresFiltrados.find((prod) => prod.id === Number(id));
	return (
		<div>
			<div className="card border border-2 shadow text-primary lead fs-4">
				<p className="lead fs-3 fw-bold text-success">
					Lugar turistico {lugar.nombre}
				</p>
				<div className="card-header">Contiente: {lugar.continente}</div>
				<div className="card-header">Pais: {lugar.pais}</div>
				<div className="card-header">Valoración: {lugar.valoracion}</div>
				<div className="card-body">
					<img
						src={lugar.imagen}
						alt="producto"
						className="img-fluid"
						width="40%"
					/>
				</div>
				<div className="card-footer">{lugar.descripcion}</div>
			</div>
		</div>
	);
};

export default Lugar;
