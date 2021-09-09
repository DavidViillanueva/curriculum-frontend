import React from 'react';

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loader = ({ active }) => {
	const loading = active;

	return (
		<div className="loader__container">
			<Backdrop open={loading}>
				<CircularProgress color="inherit" />
			</Backdrop>
		</div>
	);
};

export default Loader;
