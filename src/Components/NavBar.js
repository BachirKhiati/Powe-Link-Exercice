import React, { useState } from 'react';
import '../Styles/HeaderStyle.css';

import { navBarData } from '../Constants/Data';

export default function Header() {
	const [activeLink, setActiveLink] = useState(0);

	// mimic navigation between links
	const toggleLink = index => {
		setActiveLink(index);
	};

	return (
		<header className="app-header">
			<img
				src={require('../Assets/logo.png')}
				className="app-logo"
				alt="logo"
			/>
			<nav className="app-nav">
				{navBarData.map(({ title }, index) => (
					<a
						href={'#'}
						key={'nav' + index}
						className={`item-nav ${
							index === activeLink ? 'active' : ''
						}`}
						onClick={() => toggleLink(index)}
					>
						<img
							src={require(`../Assets/${title}-logo.svg`)}
							className="nav-logo"
							alt={title}
						/>
						<p>{title}</p>
					</a>
				))}
			</nav>
		</header>
	);
}
