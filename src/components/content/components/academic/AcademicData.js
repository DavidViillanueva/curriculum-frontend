import React from 'react';

import Studie from './Studie';

const AcademicData = ({ data: studies }) => {
	return (
		<>
			{ 
				studies.map( studie => 
					<Studie studie={studie} key={studie.title} />) 
			}
		</>
	);
};

export default AcademicData;
