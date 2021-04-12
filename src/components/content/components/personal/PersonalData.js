import React from 'react';

const PersonalData = ({ data, contactData }) => {
	let personalData = {};

	if (data) {
		personalData = data[0];
	}

	return (
		<div className="personal__data-card">
			<div className="personal__personalData-row">
				<label>Nombre:</label>
				<p>{personalData.name}</p>
			</div>
			<div className="personal__personalData-row">
				<label>Edad:</label>
				<p>{personalData.age}</p>
			</div>
			<hr />
			<div className="personal__personalData-row">
				<p>{personalData.about}</p>
			</div>
			<hr />
			<div className="personal__personalData-block">
				<label>Competencias:</label>
				<ul className="personal__list">
					{personalData.skills.map(skill => (
						<li key={skill}>{skill}</li>
					))}
				</ul>
			</div>
			<div className="personal__personalData-block">
				<label>Idiomas:</label>
				<ul className="personal__list">
					{personalData.languages.map(language => (
						<li key={language}>{language}</li>
					))}
				</ul>
			</div>
			<div className="personal__personalData-block">
				<label>Herramientas:</label>
				<ul className="personal__list">
					{personalData.tools.map(tool => (
						<li key={tool}>{tool}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default PersonalData;
