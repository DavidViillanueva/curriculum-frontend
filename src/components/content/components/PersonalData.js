import React from 'react';

const PersonalData = React.memo(({ data }) => {
	let loading = true;
	let personalData = {};

	if (data) {
		personalData = data[0];
		loading = false;
	}

	return (
		<>
			{loading ? (
				<div>
					<p>Loading...</p>
				</div>
			) : (
				<div className="content__data-card">
					<h2>Informacion personal:</h2>
					<div className="personal__personalData-row">
						<h3>Nombre:</h3>
						<p>{personalData.name}</p>
					</div>
					<div className="personal__personalData-row">
						<h3>Edad:</h3>
						<p>{personalData.age}</p>
					</div>
					<hr />
					<div className="personal__personalData-row">
						<p>{personalData.about}</p>
					</div>
					<hr />
					<div className="personal__personalData-block">
						<h3>Competencias:</h3>
						<ul className="personal__list">
							{personalData.skills.map(skill => (
								<li key={skill}>{skill}</li>
							))}
						</ul>
					</div>
					<div className="personal__personalData-block">
						<h3>Idiomas:</h3>
						<ul className="personal__list">
							{personalData.languages.map(language => (
								<li key={language}>{language}</li>
							))}
						</ul>
					</div>
					<div className="personal__personalData-block">
						<h3>Herramientas:</h3>
						<ul className="personal__list">
							{personalData.tools.map(tool => (
								<li key={tool}>{tool}</li>
							))}
						</ul>
					</div>
				</div>
			)}
		</>
	);
});

export default PersonalData;
