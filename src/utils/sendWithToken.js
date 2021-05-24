import Swal from 'sweetalert2';

export const sendWithToken = (data, endpoint) => {
	Swal.fire({
		title: 'Enviando',
		text: 'Por favor espere...',
		allowOutsideClick: false,
		didOpen: () => {
			Swal.showLoading();
		},
	});

	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
			// authorization: process.env.REACT_APP_API_KEY,
			authorization: window.REACT_APP_API_KEY,
		},
		body: JSON.stringify(data),
	};

	const url = `${process.env.REACT_APP_BACK}/${endpoint}`;
	// const url = `${window.REACT_APP_BACK}/${endpoint}`;
	//

	fetch(url, requestOptions)
		.then(response => Swal.fire('Enviado!', '', 'success'))
		.catch(error => {
			console.log(error);
			Swal.fire('Ocurrio un problema', 'Por favor intente mas tarde', 'error');
		});
};
