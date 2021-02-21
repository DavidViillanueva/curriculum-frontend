import React from 'react';

const MenuBar = ({ menuItems = {} }) => {
	const { Linkedin, GitHub } = menuItems;

	return (
		<>
			<nav>
				<ul>
					<li className="menu__item-menu">
						<a href={Linkedin} target="blanck">
							<input type="button" value="Linkedin" />
						</a>
					</li>
					<li className="menu__item-menu">
						<a href={GitHub} target="blanck">
							<input type="button" value="GitHub" />
						</a>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default MenuBar;
