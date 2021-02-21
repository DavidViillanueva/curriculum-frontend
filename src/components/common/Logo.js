import React from 'react';

const Logo = ({ url }) => {
	return (
		<>
			<div className="logo__container">
				<p className="logo__loader">Loading...</p>
				{url && <img className="animate__animated animate__fadeIn animate__slow" src={url} alt="logo"></img>}
			</div>
		</>
	);
};

export default Logo;
