import Swal from 'sweetalert2';

export const sendWithToken = async(data, endpoint) => {
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

	const res = await fetch(url, requestOptions);
	if(res.status === 200 ){
		Swal.fire('Enviado!', '', 'success')
	}else {
		Swal.fire('Ocurrio un problema', 'Puede contactarme con el siguiente mail: david1997@live.com.ar','error')
	}

		// .then(response => )
		// .catch(error => {
		// 	Swal.fire('Ocurrio un problema', 'Por favor intente mas tarde', 'error');
		// 	console.log(error);
		// });
};
