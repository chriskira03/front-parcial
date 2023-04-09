import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListarLibros from '../componentes/pregunta5/ListarLibros';
import RegistrarLibros from '../componentes/pregunta5/RegistrarLibros';

const Pregunta5 = () => {
	const [libros, setLibros] = useState([]);
	const url = 'http://localhost:3001/libros';
	const listarLibros = () => {
		axios.get(`${url}`).then((resp) => setLibros(resp.data));
	};

	useEffect(() => {
		listarLibros();
	}, []);

	const deleteLibros = (libros) => {
		let confirmar = window.confirm(
			`Desea eliminar el libro: ${libros.nombre} cuya autor es: ${libros.autor}`
		);
		if (confirmar) {
			axios.delete(`${url}/${libros.id}`).then((resp) => {
				listarLibros();
			});
		}
	};
	const editarLibros = (libros) => {
		document.getElementById('id').value = libros.id;
		document.getElementById('nombre').value = libros.nombre;
		document.getElementById('descripcion').value = libros.descripcion;
		document.getElementById('calificacion').value = libros.calificacion;
	};

	return (
		<div>
			<div className="row m-4">
				<p className="lead fs-2 text-primary">
					Añadir y eliminar libros
				</p>
				<div className="col col-7 border border-primary shadow m-2 p-2">
					<ListarLibros
						libros={libros}
						onDelete={deleteLibros}
						onEdit={editarLibros}
					/>
				</div>
				<div className="col col-4 border border-primary shadow m-2 p-2">
					<RegistrarLibros url={url} onListar={listarLibros} />
				</div>
			</div>
		</div>
	);
};

export default Pregunta5;
