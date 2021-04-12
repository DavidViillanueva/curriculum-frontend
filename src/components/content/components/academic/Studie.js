import React from 'react';
import Proptypes from 'prop-types';

const Studie = ({ studie }) => {
	const { institute, state, level, title } = studie;

	return (
		<div className="studie__card">
			<div className="studie__card-header">
				<h4 className="title">{title}</h4>
			</div>
			<div className="studie__row">
				<label>Institucion:</label>
				<p> {institute}</p>
			</div>
			<div className="studie__row">
				<label>Nivel:</label>
				<p>{level}</p>
			</div>
			<div className="studie__row">
				<label>Estado:</label>
				<p>{state}</p>
			</div>
		</div>
	);
};

Studie.propTypes = {
	studie: Proptypes.object.isRequired,
};

export default Studie;
