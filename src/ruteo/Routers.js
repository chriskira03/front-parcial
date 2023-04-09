import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../preguntas/Home';
import Pregunta2 from '../preguntas/Pregunta2';
import Pregunta3 from '../preguntas/Pregunta3';
import Pregunta4 from '../preguntas/Pregunta4';
import Pregunta5 from '../preguntas/Pregunta5';
import Pregunta6 from '../preguntas/Pregunta6';
import Lugar from '../componentes/pregunta3/Lugar';

const Routers = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/pregunta2" element={<Pregunta2 />} />
				<Route path="/pregunta3" element={<Pregunta3 />} />
				<Route path="/pregunta3" element={<Pregunta3 />}>
					<Route path=":id" element={<Lugar />} />
				</Route>
				<Route path="/pregunta4" element={<Pregunta4 />} />
				<Route path="/pregunta5" element={<Pregunta5 />} />
				<Route path="/pregunta6" element={<Pregunta6 />} />
			</Routes>
		</>
	);
};

export default Routers;
