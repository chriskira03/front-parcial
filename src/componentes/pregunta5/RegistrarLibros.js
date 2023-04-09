import axios from 'axios';
import React, { useState } from 'react';

const RegistrarLibros = (props) => {
	const { url, onListar } = props;
	const objLibros = {
		id: 0,
		nombre: '',
		genero: '',
		autor: '',
		precio: ''
	};

	const [libros, setLibros] = useState(objLibros);

	const manejadorControles = (e) => {
		let name = e.target.name;
		let value = e.target.value;
		libros[name] = value;
		setLibros(libros);
	};
	const manejadorSubmit = (e) => {
		e.preventDefault();
		axios.post(`${url}/`, libros).then((resp) => {
			console.log('Se registro correctamente');
			document.getElementById('form-emp').reset();
			onListar();
		});
	};
	return (
		<div>
			<p className="lead fs-2 text-primary">Resgistrar Libros</p>
			<form onSubmit={manejadorSubmit} id="form-emp">
				<div className="form-group">
					<label className="form-label">Nombre: </label>
					<input
						type="text"
						name="nombre"
						className="form-control lead"
						required
						onChange={manejadorControles}
					/>
				</div>
				<div className="form-group">
					<label className="form-label">Genero: </label>
					<input
						type="text"
						name="genero"
						className="form-control lead"
						required
						onChange={manejadorControles}
					/>
				</div>
				<div className="form-group">
					<label className="form-label">autor: </label>
					<input
						type="text"
						name="autor"
						className="form-control lead"
						required
						onChange={manejadorControles}
					/>
				</div>
				<div className="form-group">
					<label className="form-label">Precio: </label>
					<input
						type="text"
						name="precio"
						className="form-control lead"
						required
						onChange={manejadorControles}
					/>
				</div>
				<div className="form-group">
					<button className="btn btn-sm btn-primary mt-3">
						Registrar
					</button>
				</div>
			</form>
		</div>
	);
};

export default RegistrarLibros;
