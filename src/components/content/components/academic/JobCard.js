import React from 'react'

const JobCard = ({ job }) => {

    const { company, time, position } = job;
    return (
        <div className="studie__card">
			<div className="studie__card-header">
				<h4 className="title">{company}</h4>
			</div>
			<div className="studie__row">
				<label>Posicion:</label>
				<p> {position}</p>
			</div>
			<div className="studie__row">
				<label>Tiempo:</label>
				<p>{time}</p>
			</div>
		</div>
    )
}

export default JobCard
