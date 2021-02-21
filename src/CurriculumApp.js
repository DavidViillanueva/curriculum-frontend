import React from 'react';

import Header from './components/header/Header';
import Content from './components/content/Content';

import './styles/style.scss';

function CurriculumApp() {
	return (
		<div className="App">
			<div>
				<Header />
				<Content />
			</div>
		</div>
	);
}

export default CurriculumApp;
