import React from 'react';
import { Link } from 'react-router-dom';
import Routers from './Routers';

const Navegador = () => {
	return (
		<div>
			<div>
				<nav className="navbar navbar-expand-lg bg-primary navbar-dark shadow">
					<div className="container-fluid">
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarNavDropdown"
							aria-controls="navbarNavDropdown"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>

						<div
							className="collapse navbar-collapse "
							id="navbarNavDropdown">
							<ul className="navbar-nav">
								<li className="nav-item">
									<Link
										className="nav-link active"
										aria-current="page"
										to="/">
										Home
									</Link>
								</li>
								<li className="nav-item">
									<Link
										className="nav-link active"
										aria-current="page"
										to="/pregunta2">
										Pregunta2
									</Link>
								</li>
								<li className="nav-item">
									<Link
										className="nav-link active"
										aria-current="page"
										to="/pregunta3">
										Pregunta3
									</Link>
								</li>

								<li className="nav-item">
									<Link
										className="nav-link active"
										aria-current="page"
										to="/pregunta4">
										Pregunta4
									</Link>
								</li>
								<li className="nav-item">
									<Link
										className="nav-link active"
										aria-current="page"
										to="/pregunta5">
										Pregunta5
									</Link>
								</li>
								<li className="nav-item">
									<Link
										className="nav-link active"
										aria-current="page"
										to="/pregunta6">
										Pregunta6
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
				<Routers />
			</div>
		</div>
	);
};

export default Navegador;
