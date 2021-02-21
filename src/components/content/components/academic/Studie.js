import React from 'react';
import Proptypes from 'prop-types';

const Studie = ({ studie }) => {
	const { institute, state, level, title } = studie;

	return (
		<div className="studie__card">
			<div className="studie__card-header">
				<h3 className="title">{title}</h3>
			</div>
			<div className="studie__row">
				<h4>Institucion:</h4>
				<p> {institute}</p>
			</div>
			<div className="studie__row">
				<h4>Nivel:</h4>
				<p>{level}</p>
			</div>
			<div className="studie__row">
				<h4>Estado:</h4>
				<p>{state}</p>
			</div>
		</div>
	);
};

Studie.propTypes = {
	studie: Proptypes.object.isRequired,
};

export default Studie;
