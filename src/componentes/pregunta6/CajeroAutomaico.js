import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCantidad, setSaldo } from '../../store/slices';

const CajeroAutomaico = () => {
	const dispach = useDispatch();
	const cantidad = useSelector((state) => state.userCajero).indice;
	const saldo = useSelector((state) => state.userCajero).saldo;


    
	const [validadRetiro, setValidarRetiro] = useState(true);
	const conteoRetiro = (valor) => {
		if (cantidad + valor <= saldo) {
			dispach(setCantidad(cantidad + valor));
		} else {
			alerta();
		}
	};
	const conteoDeposito = (valor) => {
		dispach(setCantidad(cantidad + valor));
	};
	const alerta = () => {
		alert('Saldo insuficienre');
	};
	const Limpiar = () => {
		dispach(setCantidad(0));
	};
	const registarOperacion = (cantidad) => {
		dispach(setSaldo(saldo + cantidad));
		dispach(setCantidad(0));
	};
	const reinicio = () => {
		dispach(setCantidad(0));
	};
	return (
		<div>
			<p className="lead fs-3 fw-bold text-success">
				Numero de cuenta: xxx-xxxxx-xxx-xx-xx
			</p>
			<p className="lead fs-3 fw-bold text-success">
				cliente: Valdivia Quispe Chirstian Guillermo
			</p>
			<p className="lead fs-3 fw-bold text-success">
				Saldo contable: {saldo}
			</p>
			<div>
				<button
					className="btn btn-success m-2"
					onClick={() => {
						setValidarRetiro(true);
						reinicio();
					}}>
					Retirar
				</button>
				<button
					className="btn btn-success m-2"
					onClick={() => {
						setValidarRetiro(false);
						reinicio();
					}}>
					Depositar
				</button>
			</div>

			<p className="lead fs-5 fw-bold text-dark">
				Elija la cantidad a retiar (se pueden sumar cantidades){' '}
			</p>
			{validadRetiro ? (
				<>
					<p className="lead fs-4 fw-bold text-dark">
						Sistema de retiro de dinero
					</p>
					<div className="">
						<button
							className="btn btn-primary m-2"
							onClick={() => conteoRetiro(20)}>
							S/. 20
						</button>
						<button
							className="btn btn-primary m-2"
							onClick={() => conteoRetiro(50)}>
							S/. 50
						</button>
						<button
							className="btn btn-primary m-2"
							onClick={() => conteoRetiro(100)}>
							S/. 100
						</button>
						<button
							className="btn btn-warning"
							onClick={() => Limpiar()}>
							Limpiar
						</button>
					</div>
					<p className="lead fs-5 fw-bold text-primary">
						Cantidad a retirar: {cantidad}
					</p>
					<p className="lead fs-5 fw-bold text-primary">
						Saldo contable final: {saldo - cantidad}
					</p>
					<div>
						<button
							className="btn btn-danger"
							onClick={() => registarOperacion(-cantidad)}>
							Registrar Operación
						</button>
					</div>
				</>
			) : (
				<>
					<p className="lead fs-4 fw-bold text-dark">
						Sistema de deposito de dinero
					</p>
					<div>
						<button
							className="btn btn-primary m-2"
							onClick={() => conteoDeposito(20)}>
							S/. 20
						</button>
						<button
							className="btn btn-primary m-2"
							onClick={() => conteoDeposito(50)}>
							S/. 50
						</button>
						<button
							className="btn btn-primary m-2"
							onClick={() => conteoDeposito(100)}>
							S/. 100
						</button>
						<button
							className="btn btn-warning"
							onClick={() => Limpiar()}>
							Limpiar
						</button>
					</div>
					<p className="lead fs-5 fw-bold text-primary">
						Cantidad a depositar: {cantidad}
					</p>
					<p className="lead fs-5 fw-bold text-primary">
						Saldo contable final: {saldo + cantidad}
					</p>
					<div>
						<button
							className="btn btn-danger"
							onClick={() => registarOperacion(cantidad)}>
							Registrar Operación
						</button>
					</div>
				</>
			)}
		</div>
	);
};

export default CajeroAutomaico;
