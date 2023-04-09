import React from 'react';
import { lugares } from '../data/lugares';
import { NavLink, Outlet } from 'react-router-dom';

const Pregunta3 = () => {
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
	return (
		<div className='m-4'>
			<p className="lead fs-2 text-danger">
				Lugares turisticos mas populares
			</p>
			<div className="row">
				<div className="col col-6">
					<div className="border border-2 border-primary p-2 shadow">
						{lugaresFiltrados.map((prod) => (
							<div key={prod.id}>
								<p className="lead fs-4 text-primary">
									<NavLink
										to={`/pregunta3/${prod.id}`}
										style={({ isActive }) =>
											isActive
												? {
														color: 'green',
														textDecoration: 'none',
												  }
												: { textDecoration: 'none' }
										}>
										{prod.nombre}
									</NavLink>
								</p>
							</div>
						))}
					</div>
				</div>
				<div className="col col-5">
					<div className="border border-2 border-primary p-2 shadow">
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pregunta3;
