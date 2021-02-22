import React from 'react';


const ContactData = ({ data }) => {
	let email,
		phone,
		mailto = '';

	if (data) {
		email = data[0].email;
		phone = data[0].cel;
		mailto = `mailto:${email}`;
	}
	return (
		<div className="contact__data">
			<div>
				<h3>Email:</h3>
				<p>
					<a href={mailto}>{email}</a>
				</p>
			</div>
			<hr />
			<div>
				<h3>Telefono:</h3>
				<p>{phone}</p>
			</div>
		</div>
	);
};

export default ContactData;
