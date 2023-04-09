import React from 'react';
import CajeroAutomaico from '../componentes/pregunta6/CajeroAutomaico';

const Pregunta6 = () => {
	return (
		<div>
			<div className="row m-4">
				<p className="lead fs-2 text-primary">Cajero automatico</p>
				<div className="col col-7 border border-primary shadow m-2 p-2">
					<CajeroAutomaico />
				</div>
			</div>
		</div>
	);
};

export default Pregunta6;
