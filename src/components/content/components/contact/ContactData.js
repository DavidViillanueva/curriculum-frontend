import React from 'react';

import './ContactData.css';

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
		<div className="contact-data">
			<div className="contact-row">
				<h3>Email:</h3>
				<p>
					<a href={mailto}>{email}</a>
				</p>
			</div>
			<hr />
			<div className="contact-row">
				<h3>Telefono:</h3>
				<p>{phone}</p>
			</div>
		</div>
	);
};

export default ContactData;
