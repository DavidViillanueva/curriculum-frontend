import React, { useState, useEffect } from 'react';

import Logo from '../common/Logo';
import MenuBar from './components/MenuBar';

import useFetch from '../../hooks/useFetch';

const Header = () => {
	const [menu, setMenu] = useState({
		Linkedin: 'url1',
		GitHub: 'url2',
	});

	let profilePicture = '';
	let linkedin = '';
	let github = '';
	const { data } = useFetch('https://backend-curriculum-ronco.herokuapp.com');

	if (data) {
		profilePicture = data[0].photo;
		linkedin = data[0].linkedin;
		github = data[0].github;
	}

	useEffect(() => {
		setMenu({
			Linkedin: linkedin,
			GitHub: github,
		});
	}, [linkedin, github]);

	return (
		<header className="header__container">
			<Logo url={profilePicture} />
			<MenuBar menuItems={menu} />
		</header>
	);
};

export default Header;
