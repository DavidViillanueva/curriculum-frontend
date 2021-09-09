import React from 'react';
import JobCard from './JobCard';

import Studie from './Studie';

const AcademicData = ({ data: studies ,jobData}) => {

	return (
		<>
			<h2>Experiencia Laboral</h2>
			{jobData.map( job => (
				<JobCard job={job} key={job.company} />
			))}
			<hr className="mt-10 mb-10"/>
			<h2>Estudios</h2>
			{studies.map(studie => (
				<Studie studie={studie} key={studie.title} />
			))}
			
		</>
	);
};

export default AcademicData;
