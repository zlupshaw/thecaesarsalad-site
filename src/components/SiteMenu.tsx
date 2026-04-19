import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NAV_ITEMS = [
	{ to: '/timeline', label: 'Timeline' },
	{ to: '/happy-hour', label: 'Happy Hour' },
	{ to: '/ceremony', label: 'Ceremony' },
	{ to: '/reception', label: 'Reception' },
	{ to: '/hotel', label: 'Hotel Block' },
	{ to: '/travel', label: 'Travel' },
	{ to: '/bend', label: 'Recommendations' },
	{ to: '/rsvp', label: 'RSVP' },
];

export default function SiteMenu() {
	const [isOpen, setIsOpen] = useState(false);

	const handleClose = () => setIsOpen(false);

	return (
		<header className="siteMenuWrap">
			<nav className="siteMenu" aria-label="Main">
				<NavLink to="/?skipIntro=1" className="siteBrand" onClick={handleClose}>
					Z + S
				</NavLink>

				<button type="button" className="siteMenuToggle" onClick={() => setIsOpen((open) => !open)} aria-expanded={isOpen} aria-label="Toggle menu">
					<span />
					<span />
					<span />
				</button>

				<div className={`siteMenuLinks ${isOpen ? 'open' : ''}`}>
					{NAV_ITEMS.map((item) => (
						<NavLink key={item.to} to={item.to} onClick={handleClose} className={({ isActive }) => `siteMenuLink${isActive ? ' active' : ''}`}>
							{item.label}
						</NavLink>
					))}
				</div>
			</nav>
		</header>
	);
}
