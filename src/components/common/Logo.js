import React from 'react';

const Logo = ({ url }) => {
	return (
		<>	
			<div className="hex__container">
				<div className="hex__fig">
					
					{(url)?  
						<img className="animate__animated animate__fadeIn animate__slow hex__img" src={url} alt="logo"></img>
					:
						<div className="hex__loader"> </div>
					}	
				</div>

			</div>

			{/* <div className="logo__container">
				<p className="logo__loader">Loading...</p>
				
				{url && <img className="animate__animated animate__fadeIn animate__slow" src={url} alt="logo"></img>}
			</div> */}
		</>
	);
};

export default Logo;
