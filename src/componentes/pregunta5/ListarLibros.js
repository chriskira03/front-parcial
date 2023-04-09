import React from 'react';

const ListarLibros = (props) => {
	const { libros, onDelete, onEdit } = props;
	return (
		<div>
			<p className="lead fs-2 text-primary">
				Total libros: {libros.length}
			</p>
			<table className="table table-hover">
				<thead>
					<tr>
						<th>Libro</th>
						<th>Genero</th>
						<th>Autor</th>
						<th>Precio</th>
						<th>Eliminar</th>
					</tr>
				</thead>
				<tbody>
					{libros.map((libros) => (
						<tr key={libros.id}>
							<td>{libros.nombre}</td>
							<td>{libros.genero} </td>
							<td>{libros.autor} </td>
							<td>{libros.precio} </td>
							<td>
								<button
									className="btn btn-danger btn-sm"
									onClick={() => {
										onDelete(libros);
									}}>
									Eliminar
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ListarLibros;
