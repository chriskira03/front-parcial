import React from 'react';
import { lugares } from '../data/lugares';
import Card from '../componentes/pregunta2/Card';
import CardVariable from '../componentes/pregunta2/CardVariable';

const Pregunta2 = () => {
	const { lugares_turisticos } = lugares;
	const lugaresConMayorValoracion = lugares_turisticos.reduce(
		(obj, lugar) => {
			if (!obj[lugar.continente]) {
				obj[lugar.continente] = lugar;
			} else if (obj[lugar.continente].valoracion < lugar.valoracion) {
				obj[lugar.continente] = lugar;
			}
			return obj;
		},
		{}
	);

	const lugaresFiltrados = Object.values(lugaresConMayorValoracion);
	return (
		<div className="container m-4">
			<div className="row">
				<div className="col-md-4">
					<Card
						cont="America"
						lugares_turisticos={lugares_turisticos.filter(
							(lugares_turisticos) =>
								lugares_turisticos.continente === 'America'
						)}
					/>
				</div>
				<div className="col-md-4">
					<Card
						cont="Asia"
						lugares_turisticos={lugares_turisticos.filter(
							(lugares_turisticos) =>
								lugares_turisticos.continente === 'Asia'
						)}
					/>
				</div>
				<div className="col-md-4">
					<Card
						cont="Europa"
						lugares_turisticos={lugares_turisticos.filter(
							(lugares_turisticos) =>
								lugares_turisticos.continente === 'Europa'
						)}
					/>
				</div>
			</div>
			<div className="container">
				<CardVariable lugares_turisticos={lugaresFiltrados} />
			</div>
		</div>
	);
};

export default Pregunta2;
