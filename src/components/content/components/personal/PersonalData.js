import React from 'react';
import ContactData from '../contact/ContactData';

import './PersonalData.css';

const PersonalData = ({ data, contactData }) => {
	let personalData = {};

	if (data) {
		personalData = data[0];
	}

	return (
		<div className="data-card">
			<h2>Informacion personal:</h2>
			<div className="personalData-row">
				<h3>Nombre:</h3>
				<p>{personalData.name}</p>
			</div>
			<div className="personalData-row">
				<h3>Edad:</h3>
				<p>{personalData.age}</p>
			</div>
			<hr />
			<div className="personalData-row">
				<p>{personalData.about}</p>
			</div>
			<hr />
			<div className="personalData-block">
				<h3>Competencias:</h3>
				<ul className="list">
					{personalData.skills.map(skill => (
						<li key={skill}>{skill}</li>
					))}
				</ul>
			</div>
			<div className="personalData-block">
				<h3>Idiomas:</h3>
				<ul className="list">
					{personalData.languages.map(language => (
						<li key={language}>{language}</li>
					))}
				</ul>
			</div>
			<div className="personalData-block">
				<h3>Herramientas:</h3>
				<ul className="list">
					{personalData.tools.map(tool => (
						<li key={tool}>{tool}</li>
					))}
				</ul>
			</div>
			
			<h2>Contacto:</h2>
			<ContactData data={contactData} />
		</div>
	);
};

export default PersonalData;
