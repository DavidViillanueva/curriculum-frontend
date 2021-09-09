import React, { useState } from 'react';
import validator from 'validator';

import useForm from '../../../../hooks/useForm';
import { sendWithToken } from '../../../../utils/sendWithToken';

const ContactData = ({ data }) => {
	const [error, setError] = useState();

	const [formValues, handleInputChange, resetForm] = useForm({
		remitentName: '',
		body: '',
		remitentEmail: '',
	});

	const { remitentName, body, remitentEmail } = formValues;

	const handleSubmit = e => {
		e.preventDefault();

		if (validate()) {
			//send to backend
			const data = {
				name: remitentName,
				email: remitentEmail,
				body,
			};

			sendWithToken(data, 'sendEmail');
			resetForm();
			setError(undefined);
		}
	};

	const validate = () => {

		if (!validator.isEmail(remitentEmail)) {
			setError('No ingreso un mail valido');
			return false;
		}

		if (remitentName === '') {
			setError('Debe ingresar su nombre');
			return false;
		}

		if (remitentEmail === '') {
			setError('Debe ingresar un email');
			return false;
		}

		if (body === '') {
			setError('Debe ingresar un mensaje');
			return false;
		}

		return true;
	};

	return (
		<div className="contact__data">
			<form className="contact__form" onSubmit={handleSubmit}>
				{error && (
					<div className="contact__text-input error">
						<p>{error}</p>
					</div>
				)}

				<div className="contact__text-input">
					<label htmlFor="remitentName">Nombre</label>
					<input
						type="text"
						autoComplete="off"
						name="remitentName"
						id="remitentName"
						onChange={handleInputChange}
						value={remitentName}
					/>
					<span className="contact__separator"> </span>
				</div>

				<div className="contact__text-input">
					<label htmlFor="remitentEmail">Email</label>
					<input
						type="text"
						autoComplete="off"
						name="remitentEmail"
						id="remitentEmail"
						onChange={handleInputChange}
						value={remitentEmail}
					/>
					<span className="contact__separator"> </span>
				</div>

				<div className="contact__text-input">
					<label htmlFor="body">Mensaje</label>
					<textarea type="body" autoComplete="off" name="body" id="body" onChange={handleInputChange} value={body} />
					<span className="contact__separator"> </span>
				</div>

				<button className="contact__button">Enviar!</button>
			</form>
		</div>
	);
};

export default ContactData;
